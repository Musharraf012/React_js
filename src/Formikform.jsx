import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import "./color.css";
export default function Formikform() {
  const validationSchema1 = Yup.object().shape({
    firstName: Yup.string()
      .required("please Enter firstname")
      .min(2, "please Enter valid name")
      .max(10, "please Enter valid name"),
    email: Yup.string()
      .required("please Enter email")
      .email("please Enter valid email"),
    password: Yup.string()
      .required("Password is required")
      .min(6, "Password must be at least 6 characters")
      .max(40, "Password must not exceed 40 characters"),
    confirmPassword: Yup.string()
      .required("Confirm Password is required")
      .oneOf([Yup.ref("password"), null], "Confirm Password does not match"),
    accept: Yup.bool().oneOf([true], "Accept Terms is required"),
  });
  return (
    <Formik
      initialValues={{
        firstName: "",
        lastName: "",
        email: "",
        num: "",
        city: "",
        choose: "",
        accept: false,
        hobbies: [],
        password: "",
        confirmPassword: "",
      }}
      validationSchema={validationSchema1}
      onSubmit={(values) => {
        console.log(values);
      }}
    >
      <Form>
        <label htmlFor="firstName">First Name</label>
        <Field id="firstName" name="firstName" placeholder="Jane" />
        <ErrorMessage name="firstName" component="span" className="error" />

        <label htmlFor="lastName">Last Name</label>
        <Field id="lastName" name="lastName" placeholder="Doe" />
        <label htmlFor="password">password</label>
        <Field
          id="password"
          name="password"
          type="password"
          placeholder="jdsd"
        />
        <ErrorMessage name="password" component="span" />

        <label htmlFor="confirmPassword"> confirm password</label>
        <Field
          id="confirmPassword"
          name="confirmPassword"
          type="password"
          placeholder="jdsd"
        />
        <ErrorMessage name="confirmPassword" component="span" />

        <label htmlFor="email">Email</label>
        <Field
          id="email"
          name="email"
          placeholder="jane@acme.com"
          type="email"
        />
        <label htmlFor="num">Number</label>
        <Field id="num" name="num" placeholder="Number" />
        <label htmlFor="city">City</label>
        <Field
          component="select"
          id="location"
          name="city"
          //  multiple={true}
        >
          <option value="NY">New York</option>
          <option value="SF">San Francisco</option>
          <option value="CH">Chicago</option>
          <option value="OTHER">Other</option>
        </Field>

        <label>
          <Field type="checkbox" name="accept" />
          <label htmlFor="">i accept condition</label>
          <ErrorMessage name="accept" component="span" className="style" />
        </label>
        <label htmlFor="hobbies"> choose hobbie : </label>
        <label>
          <Field type="checkbox" name="hobbies" value="One" />
          One
        </label>
        <label>
          <Field type="checkbox" name="hobbies" value="Two" />
          Two
        </label>
        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
}
