import React from "react";
import { Formik, Field, Form } from "formik";
const Filter = ({ filter }) => {
  return (
    <div
      style={{
        margin: "50px",
        border: "1px",
        borderRadius: "5px,",
        padding: "10px",
      }}
    >
      <h1>Filter Movies</h1>
      <Formik
        initialValues={{
          title: "",

          rating: "",
        }}
      >
        {({ handleChange }) => (
          <Form>
            <div>
              <label htmlFor="title">Title</label>
              <Field
                name="title"
                type="text"
                onChange={(e) => {
                  handleChange(e);
                  filter("title", e.target.value);
                }}
              />
            </div>
            <div>
              <label htmlFor="rating">Rating</label>
              <Field
                name="rating"
                type="text"
                onChange={(e) => {
                  handleChange(e);
                  filter("rating", e.target.value);
                }}
              />
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};
export default Filter;
