// import React from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import { Container, Typography, Paper } from "@mui/material";
import BookForm from "../components/BookForm";
import AuthorForm from "../components/AuthorForm";

const EditUser = ({
  editingBook,
  editingAuthor,
  onUpdateBook,
  onUpdateAuthor,
  onCancelEdit,
}) => {
  const navigate = useNavigate();

  const handleCancel = () => {
    onCancelEdit();
    navigate("/");
  };

  return (
    <Container>
      <Typography variant="h4" component="h1" textAlign="center" gutterBottom>
        Edit User
      </Typography>
      {editingBook && (
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
            initialValues={editingBook}
            onSubmit={onUpdateBook}
            onCancel={handleCancel}
          />
        </Paper>
      )}
      {editingAuthor && (
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
            initialValues={editingAuthor}
            onSubmit={onUpdateAuthor}
            onCancel={handleCancel}
          />
        </Paper>
      )}
    </Container>
  );
};

EditUser.propTypes = {
  editingBook: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    isbn: PropTypes.string.isRequired,
    publicationDate: PropTypes.string.isRequired,
  }),
  editingAuthor: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    birthDate: PropTypes.string.isRequired,
    biography: PropTypes.string.isRequired,
  }),
  onUpdateBook: PropTypes.func.isRequired,
  onUpdateAuthor: PropTypes.func.isRequired,
  onCancelEdit: PropTypes.func.isRequired,
};

export default EditUser;
