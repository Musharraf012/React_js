import { Field, FieldArray, Form, Formik } from "formik";
import React from "react";
import "./AddEdducationTask.css"; // Assuming you have this CSS file

export default function AddEdducationTask() {
  const addEducation = (v) => {
    let p = { ...v };
    // console.log(v);
    p.Education.push({ university: "", degree: "", year: "" });
  };
  const removeEducation = (v, i, p) => {
    let q = { ...v };
    q.Education.splice(i, 1);

    p(q);
  };
  return (
    <Formik
      initialValues={{
        firstName: "",
        lastName: "",
        Education: [
          {
            university: "",
            degree: "",
            year: "",
          },
        ],
      }}
      onSubmit={(values) => {
        console.log(values);
      }}
    >
      {({ values, setValues }) => (
        <Form className="form-container">
          <div className="form-group">
            <label htmlFor="firstName">First Name</label>
            <Field
              id="firstName"
              name="firstName"
              placeholder="Jane"
              className="form-field"
            />
          </div>

          <div className="form-group">
            <label htmlFor="lastName">Last Name</label>
            <Field
              id="lastName"
              name="lastName"
              placeholder="Doe"
              className="form-field"
            />
          </div>

          <div className="form-group">
            <button
              type="submit"
              className="add-button"
              onClick={() => {
                addEducation(values);
              }}
            >
              Submit
            </button>
          </div>
          <FieldArray name="Education">
            {() =>
              values.Education.map((v, i) => {
                return (
                  <div className="education-group">
                    <div className="form-group">
                      <label htmlFor="university">university : </label>
                      <Field
                        name={`Education${i}university`}
                        type="text"
                        className="form-field"
                      ></Field>
                    </div>
                    <div className="form-group">
                      <label htmlFor="degree">degree : </label>
                      <Field
                        name={`Education${i}degree`}
                        type="text"
                        className="form-field"
                      ></Field>
                    </div>
                    <div className="form-group">
                      <label htmlFor="year">year : </label>
                      <Field
                        name={`Education${i}year`}
                        type="number"
                        className="form-field"
                      ></Field>
                    </div>
                    <div>
                      <button
                        type="button"
                        onClick={() => {
                          removeEducation(values, i, setValues);
                        }}
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                );
              })
            }
          </FieldArray>
        </Form>
      )}
    </Formik>
  );
}
