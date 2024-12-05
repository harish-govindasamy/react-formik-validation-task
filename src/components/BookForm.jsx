// import React from "react";
import PropTypes from "prop-types";
import { Formik, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { TextField, Button, Box, Typography } from "@mui/material";

const BookForm = ({ initialValues, onSubmit, onCancel, editingBook }) => {
  const validationSchema = Yup.object({
    title: Yup.string().required("Required"),
    author: Yup.string().required("Required"),
    isbn: Yup.string().required("Required"),
    publicationDate: Yup.date().required("Required"),
  });

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={(values, actions) => onSubmit(values, actions)}
    >
      {({ handleChange, handleBlur, values }) => (
        <Form>
          <Box
            display="flex"
            flexDirection="column"
            gap={2}
            maxWidth={400}
            mx="auto"
          >
            <Typography variant="h5" component="h2" textAlign="center">
              {editingBook ? "Edit Book" : "Add Book"}
            </Typography>
            <TextField
              label="Title"
              name="title"
              value={values.title}
              onChange={handleChange}
              onBlur={handleBlur}
              helperText={<ErrorMessage name="title" />}
              error={Boolean(<ErrorMessage name="title" />)}
            />
            <TextField
              label="Author"
              name="author"
              value={values.author}
              onChange={handleChange}
              onBlur={handleBlur}
              helperText={<ErrorMessage name="author" />}
              error={Boolean(<ErrorMessage name="author" />)}
            />
            <TextField
              label="ISBN"
              name="isbn"
              value={values.isbn}
              onChange={handleChange}
              onBlur={handleBlur}
              helperText={<ErrorMessage name="isbn" />}
              error={Boolean(<ErrorMessage name="isbn" />)}
            />
            <TextField
              label="Publication Date"
              name="publicationDate"
              type="date"
              value={values.publicationDate}
              onChange={handleChange}
              onBlur={handleBlur}
              helperText={<ErrorMessage name="publicationDate" />}
              error={Boolean(<ErrorMessage name="publicationDate" />)}
              InputLabelProps={{ shrink: true }}
            />
            <Box display="flex" justifyContent="space-between">
              <Button type="submit" variant="contained" color="primary">
                Submit
              </Button>
              <Button
                type="button"
                variant="outlined"
                color="secondary"
                onClick={onCancel}
              >
                Cancel
              </Button>
            </Box>
          </Box>
        </Form>
      )}
    </Formik>
  );
};

BookForm.propTypes = {
  initialValues: PropTypes.shape({
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    isbn: PropTypes.string.isRequired,
    publicationDate: PropTypes.string.isRequired,
  }).isRequired,
  onSubmit: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired,
  editingBook: PropTypes.object,
};

export default BookForm;
