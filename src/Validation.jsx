import { ErrorMessage, Field, Form, Formik } from "formik";
import React from "react";
import * as Yup from "yup";
import "./color.css";

export default function Validation() {
  const validationSchema1 = Yup.object().shape({
    firstName: Yup.string()
      .required("please enter firstName")
      .min(2, "please enter min 2 letter")
      .max(12, "firstName should be less than 12 digit"),
    lastName: Yup.string()
      .required("please enter lastName")
      .min(2, "please enter min 2 letter")
      .max(12, "lastName should be less than 14 digit"),
    email: Yup.string()
      .required("please enter email")
      .email("please enter valid email"),
    password: Yup.string()
      .required("password is required")
      .min(7, "password should be minimum 7 digit")
      .max(14, "password should be maximum 14 digit"),
    confirmPassword: Yup.string()
      .required("confirmPassword is required")
      .min(7, "password should be minimum 7 digit")
      .max(14, "password should be maximum 14 digit")
      .oneOf([Yup.ref("password"), null], "Confirm Password does not match"),
    acceptTerm: Yup.bool().oneOf([true], "Accept Terms is required"),
  });
  return (
    <Formik
      initialValues={{
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
        acceptTerm: false,
      }}
      onSubmit={(values) => {
        console.log(values);
      }}
      validationSchema={validationSchema1}
    >
      <Form>
        <div>
          <label htmlFor="firstName">First Name</label>
          <Field id="firstName" name="firstName" placeholder="Jane" />
          <ErrorMessage name="firstName" component="span" className="error" />
        </div>

        <div>
          <label htmlFor="lastName">Last Name</label>
          <Field id="lastName" name="lastName" placeholder="Doe" />
          <ErrorMessage name="lastName" component="span" className="error" />
        </div>

        <div>
          <label htmlFor="email">Email</label>
          <Field
            id="email"
            name="email"
            placeholder="jane@acme.com"
            type="email"
          />
          <ErrorMessage name="email" component="span" className="error" />
        </div>
        <div>
          <label htmlFor="password">password</label>
          <Field id="password" name="password" placeholder="Enter Password" />
          <ErrorMessage name="password" component="span" className="error" />
        </div>
        <div>
          <label htmlFor="password">confirmPassword</label>
          <Field
            id="confirmPassword"
            name="confirmPassword"
            placeholder="Enter Password"
          />
          <ErrorMessage
            name="confirmPassword"
            component="span"
            className="error"
          />
        </div>
        <div>
          <Field type="checkbox" name="acceptTerm" />
          <label htmlFor="acceptTerm">Accept</label>
          <ErrorMessage name="acceptTerm" component="span" className="error" />
        </div>
        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
}
