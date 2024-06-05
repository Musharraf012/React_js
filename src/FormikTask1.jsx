import React from "react";
import { Formik, Field, Form } from "formik";
export default function FormikTask1() {
  return (
    <Formik
      initialValues={{
        firstName: "",
        lastName: "",
        email: "",
        current: "",
        select: false,
        permanent: "",
      }}
      onSubmit={(values) => {
        console.log(values);
      }}
    >
      {({ values }) => (
        <Form>
          <label htmlFor="firstName">First Name</label>
          <Field id="firstName" name="firstName" placeholder="Jane" />
          <br />

          <label htmlFor="lastName">Last Name</label>
          <Field id="lastName" name="lastName" placeholder="Doe" />
          <br />

          <label htmlFor="email">Email</label>
          <Field
            id="email"
            name="email"
            placeholder="jane@acme.com"
            type="email"
          />
          <br />
          <label htmlFor="current">Current Address : </label>
          <Field name="current" type="textArea" placeholder="Address here" />
          <br />
          <label htmlFor="">
            is your current address is same as permanent Address :{" "}
          </label>
          <Field
            type="checkbox"
            name="select"
            onClick={() => {
              // if (values.select == true) {
              //   values.select = false;
              // } else {
              //   values.select = true;
              // }
              if (values.select == false) {
                values.permanent = values.current;

                console.log(values.select);
                // values.select = false;
              } else {
                // values.select = false;
                values.permanent = "";

                console.log(values.select);
              }
            }}
          />
          <br />
          <label htmlFor="permanent">Permanent Address : </label>
          <Field
            name="permanent"
            type="text"
            component="textarea"
            placeholder="Address here"
            values=""
            readOnly={values.select}
          />
          <br />

          <button type="submit">Submit</button>
        </Form>
      )}
    </Formik>
  );
}
