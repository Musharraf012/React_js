import { Field, Form, Formik } from "formik";
import React from "react";

export default function FormikFormBasic() {
  return (
    <Formik
      initialValues={{
        firstName: "",
        lastName: "",
        email: "",
        password: "",
      }}
      onSubmit={async (values) => {
        console.log(values);
      }}
    >
      <Form>
        <label htmlFor="firstName">First Name</label>
        <Field id="firstName" name="firstName" placeholder="Jane" />

        <label htmlFor="lastName">Last Name</label>
        <Field id="lastName" name="lastName" placeholder="Doe" />
        <label htmlFor="lastName">Password</label>
        <Field id="lastName" name="password" placeholder="Doe" />

        <label htmlFor="email">Email</label>
        <Field
          id="email"
          name="email"
          placeholder="jane@acme.com"
          type="email"
        />
        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
}
