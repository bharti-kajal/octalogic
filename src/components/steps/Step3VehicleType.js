const Step3VehicleType = ({ formik, vehicleTypes }) => (
  <div className="row mb-3">
    {vehicleTypes.map((type, idx) => (
      <div key={idx} className="col-12 col-md-6 mb-3">
        <input
          type="radio"
          id={`vehicle_type_id-${idx}`}
          name="vehicle_type_id"
          className="btn-check"
          value={type.id}
          checked={String(formik.values.vehicle_type_id) === String(type.id)}
          onChange={formik.handleChange}
        />
        <label className="btn btn-outline-primary w-100" htmlFor={`vehicle_type_id-${idx}`}>
          {type.name}
        </label>
      </div>
    ))}
    {formik.touched.vehicle_type_id && formik.errors.vehicle_type_id && (
      <div className="text-danger">{formik.errors.vehicle_type_id}</div>
    )}
  </div>
);

export default Step3VehicleType;