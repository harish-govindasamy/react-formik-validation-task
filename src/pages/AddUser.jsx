import { useState } from "react";
import PropTypes from "prop-types";
import { Container, Typography, Paper, Snackbar, Alert } from "@mui/material";
import BookForm from "../components/BookForm";
import AuthorForm from "../components/AuthorForm";

const AddUser = ({ onAddBook, onAddAuthor }) => {
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");

  const handleAddBook = (book, { resetForm }) => {
    onAddBook(book);
    setSnackbarMessage("Book added to Dashboard");
    setOpenSnackbar(true);
    resetForm();
  };

  const handleAddAuthor = (author, { resetForm }) => {
    onAddAuthor(author);
    setSnackbarMessage("Author added to Dashboard");
    setOpenSnackbar(true);
    resetForm();
  };

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };

  return (
    <Container>
      <Typography variant="h4" component="h1" textAlign="center" gutterBottom>
        Add User
      </Typography>
      <Paper
        elevation={3}
        sx={{
          padding: 2,
          marginBottom: 4,
          transition: "transform 0.2s",
          "&:hover": {
            transform: "scale(1.02)",
            boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
          },
        }}
      >
        <BookForm
          initialValues={{
            title: "",
            author: "",
            isbn: "",
            publicationDate: "",
          }}
          onSubmit={handleAddBook}
          onCancel={() => {}}
        />
      </Paper>
      <Paper
        elevation={3}
        sx={{
          padding: 2,
          transition: "transform 0.2s",
          "&:hover": {
            transform: "scale(1.02)",
            boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
          },
        }}
      >
        <AuthorForm
          initialValues={{ name: "", birthDate: "", biography: "" }}
          onSubmit={handleAddAuthor}
          onCancel={() => {}}
        />
      </Paper>
      <Snackbar
        open={openSnackbar}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
      >
        <Alert
          onClose={handleCloseSnackbar}
          severity="success"
          sx={{ width: "100%" }}
        >
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </Container>
  );
};

AddUser.propTypes = {
  onAddBook: PropTypes.func.isRequired,
  onAddAuthor: PropTypes.func.isRequired,
};

export default AddUser;
