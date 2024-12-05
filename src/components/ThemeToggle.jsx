// import React from "react";
import PropTypes from "prop-types";
import { IconButton } from "@mui/material";
import { Brightness4, Brightness7 } from "@mui/icons-material";

const ThemeToggle = ({ toggleTheme, mode }) => {
  return (
    <IconButton
      sx={{ ml: 1 }}
      onClick={toggleTheme}
      color="inherit"
      aria-label="toggle theme"
    >
      {mode === 'dark' ? <Brightness7 /> : <Brightness4 />}
    </IconButton>
  );
};

ThemeToggle.propTypes = {
  toggleTheme: PropTypes.func.isRequired,
  mode: PropTypes.string.isRequired,
};

export default ThemeToggle;