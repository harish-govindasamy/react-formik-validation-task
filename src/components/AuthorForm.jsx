// import React from "react";
import PropTypes from "prop-types";
import { Formik, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { TextField, Button, Box, Typography } from "@mui/material";

const AuthorForm = ({ initialValues, onSubmit, onCancel, editingAuthor }) => {
  const validationSchema = Yup.object({
    name: Yup.string().required("Required"),
    birthDate: Yup.date().required("Required"),
    biography: Yup.string().required("Required"),
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
              {editingAuthor ? "Edit Author" : "Add Author"}
            </Typography>
            <TextField
              label="Name"
              name="name"
              value={values.name}
              onChange={handleChange}
              onBlur={handleBlur}
              helperText={<ErrorMessage name="name" />}
              error={Boolean(<ErrorMessage name="name" />)}
            />
            <TextField
              label="Birth Date"
              name="birthDate"
              type="date"
              value={values.birthDate}
              onChange={handleChange}
              onBlur={handleBlur}
              helperText={<ErrorMessage name="birthDate" />}
              error={Boolean(<ErrorMessage name="birthDate" />)}
              InputLabelProps={{ shrink: true }}
            />
            <TextField
              label="Biography"
              name="biography"
              value={values.biography}
              onChange={handleChange}
              onBlur={handleBlur}
              helperText={<ErrorMessage name="biography" />}
              error={Boolean(<ErrorMessage name="biography" />)}
              multiline
              rows={4}
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

AuthorForm.propTypes = {
  initialValues: PropTypes.shape({
    name: PropTypes.string.isRequired,
    birthDate: PropTypes.string.isRequired,
    biography: PropTypes.string.isRequired,
  }).isRequired,
  onSubmit: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired,
  editingAuthor: PropTypes.object,
};

export default AuthorForm;
