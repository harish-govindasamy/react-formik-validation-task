import React, { useState, useEffect } from "react";
import AuthorForm from "../components/AuthorForm";
import {
  Container,
  Typography,
  List,
  ListItem,
  ListItemText,
  IconButton,
  Box,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import {
  getAuthorsFromLocalStorage,
  saveAuthorsToLocalStorage,
} from "../utils/localstorage";

const Authors = () => {
  const [authors, setAuthors] = useState(getAuthorsFromLocalStorage());
  const [editingAuthor, setEditingAuthor] = useState(null);

  useEffect(() => {
    saveAuthorsToLocalStorage(authors);
  }, [authors]);

  const handleAddAuthor = (author) => {
    if (editingAuthor) {
      setAuthors(authors.map((a) => (a.id === editingAuthor.id ? author : a)));
      setEditingAuthor(null);
    } else {
      setAuthors([...authors, { ...author, id: Date.now() }]);
    }
  };

  const handleEditAuthor = (author) => {
    setEditingAuthor(author);
  };

  const handleDeleteAuthor = (id) => {
    setAuthors(authors.filter((author) => author.id !== id));
  };

  const handleCancelEdit = () => {
    setEditingAuthor(null);
  };

  return (
    <Container>
      <Typography variant="h4" component="h1" textAlign="center" gutterBottom>
        Authors
      </Typography>
      <AuthorForm
        initialValues={
          editingAuthor || { name: "", birthDate: "", biography: "" }
        }
        onSubmit={handleAddAuthor}
        onCancel={handleCancelEdit}
        editingAuthor={editingAuthor}
      />
      <List>
        {authors.map((author) => (
          <ListItem key={author.id}>
            <ListItemText
              primary={author.name}
              secondary={`${author.birthDate} - ${author.biography}`}
            />
            <Box>
              <IconButton
                edge="end"
                aria-label="edit"
                onClick={() => handleEditAuthor(author)}
              >
                <EditIcon />
              </IconButton>
              <IconButton
                edge="end"
                aria-label="delete"
                onClick={() => handleDeleteAuthor(author.id)}
              >
                <DeleteIcon />
              </IconButton>
            </Box>
          </ListItem>
        ))}
      </List>
    </Container>
  );
};

export default Authors;
