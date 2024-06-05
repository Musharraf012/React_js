import { ErrorMessage, Field, Form, Formik } from "formik";
import React from "react";
import * as Yup from "yup";

export default function ExamForm() {
  const Validation1 = Yup.object().shape({
    firstName: Yup.string().required("please enter firstName ").min(2,"atleast 2 character").max(14,"not more than 14 character"),
    lastName: Yup.string().required("please enter lastName ").min(2,"atleast 2 character").max(14,"not more than 14 character"),
    Address1:Yup.string().required("please enter address 1"),
    Address2:Yup.string().required("please enter address 1")
  });
  return (
    <Formik
      initialValues={{
        firstName: "",
        lastName: "",
        Address1: "",
        Address2: "",
        state: "",
        city: "",
      }}
      validationSchema={Validation1}
      onSubmit={(values) => {
        console.log(values);
      }}
    >
      <Form>
        <div>
          <label htmlFor="firstName">First Name</label>
          <Field id="firstName" name="firstName" placeholder="Jane" />
          <ErrorMessage name="firstName" component="span"></ErrorMessage>
        </div>

        <div>
          <label htmlFor="lastName">Last Name</label>
          <Field id="lastName" name="lastName" placeholder="Doe" />
          <ErrorMessage name="lastName" component="span"></ErrorMessage>
        </div>

        <div>
          <label htmlFor="Address1">Address1</label>
          <Field
            id="Address1"
            name="Address1"
            placeholder="asbdascas"
            type="text"
            component="textarea"
          />
          <ErrorMessage name="Address2" component="span"></ErrorMessage>
        </div>
        <div>
          <label htmlFor="Address1">Address2</label>
          <Field
            id="Address2"
            name="Address2"
            placeholder="asbdascas"
            type="text"
            component="textarea"
          />
          <ErrorMessage name="Address2" component="span"></ErrorMessage>
        </div>
        <div>
          <label htmlFor="location">State</label>
          <Field component="select" id="location" name="state">
            <option value="NY">Gujarat</option>
            <option value="SF">MH</option>
            <option value="CH">HP</option>
            <option value="OTHER">UP</option>
          </Field>
        </div>

        <div>
          <label htmlFor="location">city</label>
          <Field component="select" id="city" name="city">
            <option value="NY">Vadodara</option>
            <option value="SF">Ahmedabad</option>
            <option value="CH">Anand</option>
            <option value="OTHER">Surat</option>
          </Field>
        </div>
        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
}
