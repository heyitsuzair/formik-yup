import * as Yup from "yup";

export const signupSchema = Yup.object({
  name: Yup.string()
    .min(2, "Name Must Be Atleast 2 Char")
    .max(25)
    .required("Please Enter Your Name"),
  email: Yup.string()
    .email("Please Enter A Valid Email")
    .required("Please Enter Your Email"),
  password: Yup.string().min(6).required("Please Enter Your Password"),
  confirm_password: Yup.string()
    .required()
    .oneOf([Yup.ref("password"), null], "Passwords Doesnot Match!"),
});
