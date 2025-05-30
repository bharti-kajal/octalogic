const Step2SelectWheels = ({ formik }) => (
  <div className="row mb-3">
    {['2', '4'].map((val) => (
      <div key={val} className="col-12 col-md-6 mb-3">
        <input
          type="radio"
          id={`no_of_wheel-${val}`}
          name="no_of_wheel"
          className="btn-check"
          value={val}
          checked={formik.values.no_of_wheel === val}
          onChange={formik.handleChange}
        />
        <label className="btn btn-outline-primary w-100" htmlFor={`no_of_wheel-${val}`}>
          {val} wheel
        </label>
      </div>
    ))}
    {formik.touched.no_of_wheel && formik.errors.no_of_wheel && (
      <div className="text-danger">{formik.errors.no_of_wheel}</div>
    )}
  </div>
);

export default Step2SelectWheels;