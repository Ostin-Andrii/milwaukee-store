import { object, string, number } from "yup";

let CartFormSchema = object().shape({
  firstName: string()
    .max(15, "Must be 15 characters or less")
    .required("Required"),
  lastName: string()
    .max(20, "Must be 20 characters or less")
    .required("Required"),
  age: number().required("Required").positive().integer(),
  address: string().required("Required"),
  phone: string()
    .min(12, "Phone number should start with 380 and be min 12 digits")
    .required("Required"),
});

export default CartFormSchema;
