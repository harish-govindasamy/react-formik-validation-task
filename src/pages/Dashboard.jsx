// import React from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import {
  Container,
  Typography,
  List,
  ListItem,
  ListItemText,
  IconButton,
  Box,
  Paper,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

const Dashboard = ({
  books,
  authors,
  onEditBook,
  onDeleteBook,
  onEditAuthor,
  onDeleteAuthor,
}) => {
  const navigate = useNavigate();

  return (
    <Container>
      <Typography variant="h4" component="h1" textAlign="center" gutterBottom>
        Dashboard
      </Typography>
      <Typography variant="h5" component="h2" gutterBottom>
        Books
      </Typography>
      <Paper elevation={3} sx={{ padding: 2, marginBottom: 4, borderRadius: 2 }}>
        <List>
          {books.map((book) => (
            <ListItem key={book.id} sx={{ borderBottom: "1px solid #ddd" }}>
              <ListItemText
                primary={book.title}
                secondary={`${book.author} - ${book.isbn} - ${book.publicationDate}`}
              />
              <Box>
                <IconButton
                  edge="end"
                  aria-label="edit"
                  onClick={() => { onEditBook(book); navigate('/edit-user'); }}
                  sx={{
                    color: "blue",
                    transition: "transform 0.2s",
                    "&:hover": {
                      transform: "scale(1.1)",
                    },
                  }}
                >
                  <EditIcon />
                </IconButton>
                <IconButton
                  edge="end"
                  aria-label="delete"
                  onClick={() => onDeleteBook(book.id)}
                  sx={{
                    color: "red",
                    transition: "transform 0.2s",
                    "&:hover": {
                      transform: "scale(1.1)",
                    },
                  }}
                >
                  <DeleteIcon />
                </IconButton>
              </Box>
            </ListItem>
          ))}
        </List>
      </Paper>
      <Typography variant="h5" component="h2" gutterBottom>
        Authors
      </Typography>
      <Paper elevation={3} sx={{ padding: 2, borderRadius: 2 }}>
        <List>
          {authors.map((author) => (
            <ListItem key={author.id} sx={{ borderBottom: "1px solid #ddd" }}>
              <ListItemText
                primary={author.name}
                secondary={`${author.birthDate} - ${author.biography}`}
              />
              <Box>
                <IconButton
                  edge="end"
                  aria-label="edit"
                  onClick={() => { onEditAuthor(author); navigate('/edit-user'); }}
                  sx={{
                    color: "blue",
                    transition: "transform 0.2s",
                    "&:hover": {
                      transform: "scale(1.1)",
                    },
                  }}
                >
                  <EditIcon />
                </IconButton>
                <IconButton
                  edge="end"
                  aria-label="delete"
                  onClick={() => onDeleteAuthor(author.id)}
                  sx={{
                    color: "red",
                    transition: "transform 0.2s",
                    "&:hover": {
                      transform: "scale(1.1)",
                    },
                  }}
                >
                  <DeleteIcon />
                </IconButton>
              </Box>
            </ListItem>
          ))}
        </List>
      </Paper>
    </Container>
  );
};

Dashboard.propTypes = {
  books: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
      isbn: PropTypes.string.isRequired,
      publicationDate: PropTypes.string.isRequired,
    })
  ).isRequired,
  authors: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      birthDate: PropTypes.string.isRequired,
      biography: PropTypes.string.isRequired,
    })
  ).isRequired,
  onEditBook: PropTypes.func.isRequired,
  onDeleteBook: PropTypes.func.isRequired,
  onEditAuthor: PropTypes.func.isRequired,
  onDeleteAuthor: PropTypes.func.isRequired,
};

export default Dashboard;