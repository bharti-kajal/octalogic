const Step1UserInfo = ({ formik }) => (
  <div className="row mb-3">
    <div className="col-12 mb-3">
      <label htmlFor="first_name" className="form-label">
        First Name
      </label>
      <input
        type="text"
        id="first_name"
        name="first_name"
        className={`form-control ${
          formik.touched.first_name && formik.errors.first_name ? 'is-invalid' : ''
        }`}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.first_name}
      />
      {formik.touched.first_name && formik.errors.first_name && (
        <div className="invalid-feedback">{formik.errors.first_name}</div>
      )}
    </div>
    <div className="col-12">
      <label htmlFor="last_name" className="form-label">
        Last Name
      </label>
      <input
        type="text"
        id="last_name"
        name="last_name"
        className={`form-control ${
          formik.touched.last_name && formik.errors.last_name ? 'is-invalid' : ''
        }`}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.last_name}
      />
      {formik.touched.last_name && formik.errors.last_name && (
        <div className="invalid-feedback">{formik.errors.last_name}</div>
      )}
    </div>
  </div>
);

export default Step1UserInfo;