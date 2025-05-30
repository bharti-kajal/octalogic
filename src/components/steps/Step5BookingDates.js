import { useEffect } from 'react';
import DatePicker from 'react-date-picker';
import "react-date-picker/dist/DatePicker.css";
import "react-calendar/dist/Calendar.css";

const Step5BookingDates = ({ formik }) => {
  useEffect(() => {
    if (!formik.values.start_date) {
      formik.setFieldValue('start_date', new Date());
    }
  }, [formik]);

  return (
    <div>
      <div className="mb-3">
        <label htmlFor="start_date">Start Date</label>
        <DatePicker
          id="start_date"
          value={formik.values.start_date}
          onChange={(date) => formik.setFieldValue('start_date', date)}
          className="form-control"
          minDate={new Date()}
        />
        {formik.touched.start_date && formik.errors.start_date && (
          <div className="text-danger">{formik.errors.start_date}</div>
        )}
      </div>
      <div className="mb-4">
        <label htmlFor="end_date">End Date</label>
        <DatePicker
          id="end_date"
          value={formik.values.end_date}
          onChange={(date) => formik.setFieldValue('end_date', date)}
          className="form-control"
          minDate={formik.values.start_date || new Date()}
        />
        {formik.touched.end_date && formik.errors.end_date && (
          <div className="text-danger">{formik.errors.end_date}</div>
        )}
      </div>
    </div>
  );
};

export default Step5BookingDates;