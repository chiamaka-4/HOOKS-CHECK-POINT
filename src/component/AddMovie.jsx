// USE OF FORMIK TO ADD MOVIES
import { Formik, Field, Form } from "formik";
import React from "react";
// import { Link } from "react-router-dom";

const AddMovie = ({ addMovie }) => {
  const submitHandler = (formData) => {
    addMovie(formData);
  };
  return (
    <div
      style={{
        margin: "50px",
        border: "1px",
        borderRadius: "5px,",
        padding: "10px",
      }}
    >
      <h1>Add Movies</h1>
      <Formik
        initialValues={{
          title: "",
          description: "",
          rating: "",
          posterURL: "",
        }}
        onSubmit={submitHandler}
      >
        <Form>
          <div>
            <label htmlFor="name">Name</label>
            <Field name="title" type="text" />
          </div>
          <div>
            <label htmlFor="email">Description</label>
            <Field name="description" type="text" />
          </div>
          <div>
            <label htmlFor="rating">Rating</label>
            <Field name="rating" type="text" />
          </div>
          <div>
            <label htmlFor="posterURL">ImageUrl</label>
            <Field name="posterURL" type="text" />
          </div>
          <div>
            <label htmlFor="email">link</label>
            <Field name="link" type="text" />
          </div>

          <button type="submit">Add Movie</button>
        </Form>
      </Formik>
    </div>
  );
};

export default AddMovie;
