import { useState, useEffect } from "react";
import { useFormik } from "formik";
import { EndPoints } from "../data/EndPoints";
import { bookingSchemas } from "../validations/bookingValidations";
import Step1UserInfo from "./steps/Step1UserInfo";
import Step2SelectWheels from "./steps/Step2SelectWheels";
import Step3VehicleType from "./steps/Step3VehicleType";
import Step4Vehicle from "./steps/Step4Vehicle";
import Step5BookingDates from "./steps/Step5BookingDates";
import { toast } from "react-toastify";

const BookingForm = () => {
  const [step, setStep] = useState(1);
  const [vehicleTypes, setVehicleTypes] = useState([]);
  const [vehicles, setVehicles] = useState([]);

  const initialValues = {
    first_name: "",
    last_name: "",
    no_of_wheel: "",
    vehicle_type_id: "",
    vehicle_id: "",
    start_date: null,
    end_date: null,
  };

  const formik = useFormik({
    initialValues,
    validationSchema: bookingSchemas[step - 1],
  onSubmit: async (values) => {
  if (step < 5) {
    const errors = await formik.validateForm();
    if (Object.keys(errors).length > 0) {
      toast.error("Please fix the errors before proceeding");
      return;
    }
    setStep(step + 1);
  } else {
    try {
      const response = await EndPoints.add("booking", values);

      toast.success(
        <div>
          <h4>Booking Successful!</h4>
          <p>
            {values.first_name}, your{" "}
            {getVehicleNameById(values.vehicle_id)} is booked from{" "}
            {formatDate(values.start_date)} to {formatDate(values.end_date)}
          </p>
        </div>
      );

      formik.resetForm();
      setStep(1);
      setVehicleTypes([]);
      setVehicles([]);
    } catch (error) {
      toast.error(
        <div>
          <h4>Booking Failed</h4>
          <p>{error.message}</p>
        </div>
      );
    }
  }
},
  });

  useEffect(() => {
    if (step === 3 && formik.values.no_of_wheel) {
      const fetchVehicleTypes = async () => {
        try {
          const res = await EndPoints.get(
            `vehicle-types/${formik.values.no_of_wheel}`
          );
          setVehicleTypes(res.data);
        } catch (err) {
          console.error("Error fetching vehicle types", err);
          toast.error("Failed to load vehicle types");
        }
      };
      fetchVehicleTypes();
    }
  }, [step, formik.values.no_of_wheel]);

  useEffect(() => {
    if (step === 4 && formik.values.vehicle_type_id) {
      const fetchVehicles = async () => {
        try {
          const res = await EndPoints.get(
            `vehicles/${formik.values.vehicle_type_id}`
          );
          setVehicles(res.data);
        } catch (err) {
          console.error("Error fetching vehicles", err);
          toast.error("Failed to load vehicles");
        }
      };
      fetchVehicles();
    }
  }, [step, formik.values.vehicle_type_id]);

  const getVehicleTypeNameById = (id) => {
    const match = vehicleTypes.find((v) => String(v.id) === String(id));
    return match ? match.name : id;
  };

  const getVehicleNameById = (id) => {
    const vehicle = vehicles.find((v) => String(v.id) === String(id));
    return vehicle ? vehicle.name : "vehicle";
  };

  const formatDate = (date) => {
    return date
      ? new Date(date).toLocaleDateString("en-US", {
          year: "numeric",
          month: "short",
          day: "numeric",
        })
      : "";
  };

  return (
    <div className="form-wrapper">
      <h2 className="form-title">Vehicle Booking Form</h2>
      <div className="date-card">
        <h4>
          <span className="date-icon">{step}</span>
          {step === 1 && "What is your name"}
          {step === 2 && "Number of wheels"}
          {step === 3 && "Type of vehicle"}
          {step === 4 && "Specific Model"}
          {step === 5 && "Date range picker"}
        </h4>

        <form onSubmit={formik.handleSubmit}>
          {step === 1 && <Step1UserInfo formik={formik} />}
          {step === 2 && <Step2SelectWheels formik={formik} />}
          {step === 3 && (
            <Step3VehicleType formik={formik} vehicleTypes={vehicleTypes} />
          )}
          {step === 4 && (
            <Step4Vehicle
              formik={formik}
              vehicles={vehicles}
              getVehicleTypeNameById={getVehicleTypeNameById}
              values={formik.values}
            />
          )}
          {step === 5 && <Step5BookingDates formik={formik} />}

          <div className="form-navigation d-flex">
            {step > 1 && (
              <button
                type="button"
                className="btn btn-prev me-2"
                onClick={() => setStep(step - 1)}
              >
                Back
              </button>
            )}
            <button
              type="submit"
              className="btn btn-gradient"
              disabled={formik.isSubmitting}
            >
              {formik.isSubmitting
                ? "Processing..."
                : step === 5
                ? "Book Vehicle"
                : "Next"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BookingForm;
