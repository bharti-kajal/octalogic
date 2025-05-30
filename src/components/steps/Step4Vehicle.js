const Step4Vehicle = ({ formik, vehicles, getVehicleTypeNameById, values }) => (
  <div className="row mb-3">
    {vehicles.map((vehicle) => (
      <div key={vehicle.id} className="col-12 col-md-6 mb-3">
        <input
          type="radio"
          id={`vehicle_id-${vehicle.id}`}
          name="vehicle_id"
          className="btn-check"
          value={vehicle.id}
          checked={String(formik.values.vehicle_id) === String(vehicle.id)}
          onChange={formik.handleChange}
        />
        <label className="btn btn-outline-primary w-100" htmlFor={`vehicle_id-${vehicle.id}`}>
          {vehicle.name}
        </label>
      </div>
    ))}
    {formik.touched.vehicle_id && formik.errors.vehicle_id && (
      <div className="text-danger">{formik.errors.vehicle_id}</div>
    )}

    <div className="col-12 col-md-12 mb-3">
      <h5 className="mb-0 text-success">Selected Options</h5>
      <ul className="list-group mt-3">
        <li className="list-group-item">
          <strong>Your Name:</strong> {values.first_name} {values.last_name}
        </li>
        <li className="list-group-item">
          <strong>Number of Wheel:</strong> {values.no_of_wheel}
        </li>
        <li className="list-group-item">
          <strong>Type of vehicle:</strong> {getVehicleTypeNameById(values.vehicle_type_id)}
        </li>
      </ul>
    </div>
  </div>
);

export default Step4Vehicle;