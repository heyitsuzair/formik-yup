import { useFormik } from "formik";

import "./App.css";
import { signupSchema } from "./schemas";

const initialValues = {
  name: "",
  email: "",
  password: "",
  confirm_password: "",
};
function App() {
  const { values, touched, errors, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: initialValues,
      validationSchema: signupSchema,
      onSubmit: (values, action) => {
        console.log(values);
        action.resetForm();
      },
    });

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <input
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.name}
          placeholder="name"
          name="name"
          type="text"
        />
        {errors.name && touched.name && (
          <p className="form-error">{errors.name}</p>
        )}
        <input
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.email}
          placeholder="email"
          name="email"
          type="email"
        />
        {errors.email && touched.email && (
          <p className="form-error">{errors.email}</p>
        )}
        <input
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.password}
          placeholder="password"
          name="password"
          type="password"
        />
        {errors.password && touched.password && (
          <p className="form-error">{errors.password}</p>
        )}
        <input
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.confirm_password}
          placeholder="confirm password"
          name="confirm_password"
          type="password"
        />
        {errors.confirm_password && touched.confirm_password && (
          <p className="form-error">{errors.confirm_password}</p>
        )}
        <input type="submit" value="submit form" />
      </form>
    </div>
  );
}

export default App;
