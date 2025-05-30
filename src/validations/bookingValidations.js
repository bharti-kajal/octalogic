import * as Yup from 'yup';

export const step1Validation = Yup.object({
  first_name: Yup.string()
    .required('First Name is required')
    .matches(/^[A-Za-z]+$/, 'First Name must contain only letters'),
  last_name: Yup.string()
    .required('Last Name is required')
    .matches(/^[A-Za-z]+$/, 'Last Name must contain only letters'),
});

export const step2Validation = Yup.object({
  no_of_wheel: Yup.string().required('Please select Number of Wheel'),
});

export const step3Validation = Yup.object({
  vehicle_type_id: Yup.string().required('Please select a vehicle type'),
});

export const step4Validation = Yup.object({
  vehicle_id: Yup.string().required('Please select a Specific Model'),
});

export const step5Validation = Yup.object({
  start_date: Yup.date().required('Start date is required'),
  end_date: Yup.date()
    .required('End date is required')
    .min(Yup.ref('start_date'), "End date can't be before start date"),
});

export const bookingSchemas = [
  step1Validation,
  step2Validation,
  step3Validation,
  step4Validation,
  step5Validation
];