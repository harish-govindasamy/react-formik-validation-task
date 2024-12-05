import { useState, useEffect } from "react";
import BookForm from "../components/BookForm";
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
  getBooksFromLocalStorage,
  saveBooksToLocalStorage,
} from "../utils/localstorage";

const Books = () => {
  const [books, setBooks] = useState(getBooksFromLocalStorage());
  const [editingBook, setEditingBook] = useState(null);

  useEffect(() => {
    saveBooksToLocalStorage(books);
  }, [books]);

  const handleAddBook = (book) => {
    if (editingBook) {
      setBooks(books.map((b) => (b.id === editingBook.id ? book : b)));
      setEditingBook(null);
    } else {
      setBooks([...books, { ...book, id: Date.now() }]);
    }
  };

  const handleEditBook = (book) => {
    setEditingBook(book);
  };

  const handleDeleteBook = (id) => {
    setBooks(books.filter((book) => book.id !== id));
  };

  const handleCancelEdit = () => {
    setEditingBook(null);
  };

  return (
    <Container>
      <Typography variant="h4" component="h1" textAlign="center" gutterBottom>
        Books
      </Typography>
      <BookForm
        initialValues={
          editingBook || {
            title: "",
            author: "",
            isbn: "",
            publicationDate: "",
          }
        }
        onSubmit={handleAddBook}
        onCancel={handleCancelEdit}
        editingBook={editingBook}
      />
      <List>
        {books.map((book) => (
          <ListItem key={book.id}>
            <ListItemText
              primary={book.title}
              secondary={`${book.author} - ${book.isbn} - ${book.publicationDate}`}
            />
            <Box>
              <IconButton
                edge="end"
                aria-label="edit"
                onClick={() => handleEditBook(book)}
              >
                <EditIcon />
              </IconButton>
              <IconButton
                edge="end"
                aria-label="delete"
                onClick={() => handleDeleteBook(book.id)}
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

export default Books;
