import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { AppBar, Toolbar, Button, Typography, Box } from "@mui/material";
import Dashboard from "./pages/Dashboard";
import AddUser from "./pages/AddUser";
import EditUser from "./pages/EditUser";
import Footer from "./components/Footer";
import {
  getBooksFromLocalStorage,
  saveBooksToLocalStorage,
  getAuthorsFromLocalStorage,
  saveAuthorsToLocalStorage,
} from "./utils/localstorage";

const App = () => {
  const [books, setBooks] = useState(getBooksFromLocalStorage());
  const [authors, setAuthors] = useState(getAuthorsFromLocalStorage());
  const [editingBook, setEditingBook] = useState(null);
  const [editingAuthor, setEditingAuthor] = useState(null);

  const handleAddBook = (book) => {
    const newBooks = [...books, { ...book, id: Date.now() }];
    setBooks(newBooks);
    saveBooksToLocalStorage(newBooks);
  };

  const handleAddAuthor = (author) => {
    const newAuthors = [...authors, { ...author, id: Date.now() }];
    setAuthors(newAuthors);
    saveAuthorsToLocalStorage(newAuthors);
  };

  const handleEditBook = (book) => {
    setEditingBook(book);
  };

  const handleEditAuthor = (author) => {
    setEditingAuthor(author);
  };

  const handleUpdateBook = (updatedBook) => {
    const updatedBooks = books.map((book) =>
      book.id === updatedBook.id ? updatedBook : book
    );
    setBooks(updatedBooks);
    saveBooksToLocalStorage(updatedBooks);
    setEditingBook(null);
  };

  const handleUpdateAuthor = (updatedAuthor) => {
    const updatedAuthors = authors.map((author) =>
      author.id === updatedAuthor.id ? updatedAuthor : author
    );
    setAuthors(updatedAuthors);
    saveAuthorsToLocalStorage(updatedAuthors);
    setEditingAuthor(null);
  };

  const handleDeleteBook = (id) => {
    const updatedBooks = books.filter((book) => book.id !== id);
    setBooks(updatedBooks);
    saveBooksToLocalStorage(updatedBooks);
  };

  const handleDeleteAuthor = (id) => {
    const updatedAuthors = authors.filter((author) => author.id !== id);
    setAuthors(updatedAuthors);
    saveAuthorsToLocalStorage(updatedAuthors);
  };

  const handleCancelEdit = () => {
    setEditingBook(null);
    setEditingAuthor(null);
  };

  return (
    <Router>
      <Box display="flex" flexDirection="column" minHeight="100vh">
        <AppBar
          position="sticky"
          sx={{
            top: 0,
            zIndex: 1100,
            backgroundColor: "#1976d2",
            transition: "background-color 0.5s ease",
            "&:hover": {
              backgroundColor: "#1565c0",
            },
          }}
        >
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Library Management
            </Typography>
            <Button color="inherit" component={Link} to="/">
              Dashboard
            </Button>
            <Button color="inherit" component={Link} to="/add-user">
              Add User
            </Button>
            <Button color="inherit" component={Link} to="/edit-user">
              Edit User
            </Button>
          </Toolbar>
        </AppBar>
        <Box
          component="main"
          flexGrow={1}
          p={3}
          sx={{
            backgroundColor: "#f5f5f5",
            transition: "background-color 0.5s ease",
          }}
        >
          <Routes>
            <Route
              path="/"
              element={
                <Dashboard
                  books={books}
                  authors={authors}
                  onEditBook={handleEditBook}
                  onDeleteBook={handleDeleteBook}
                  onEditAuthor={handleEditAuthor}
                  onDeleteAuthor={handleDeleteAuthor}
                />
              }
            />
            <Route
              path="/add-user"
              element={
                <AddUser
                  onAddBook={handleAddBook}
                  onAddAuthor={handleAddAuthor}
                />
              }
            />
            <Route
              path="/edit-user"
              element={
                <EditUser
                  editingBook={editingBook}
                  editingAuthor={editingAuthor}
                  onUpdateBook={handleUpdateBook}
                  onUpdateAuthor={handleUpdateAuthor}
                  onCancelEdit={handleCancelEdit}
                />
              }
            />
          </Routes>
        </Box>
        <Footer />
      </Box>
    </Router>
  );
};

export default App;
