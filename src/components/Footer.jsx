// import React from "react";
import { Box, Typography, Link } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: 2,
        backgroundColor: "#1976d2", // Solid background color
        color: "white",
        marginTop: "auto",
        position: "sticky",
        bottom: 0,
        zIndex: 1100, // Ensure it is above other content
        fontWeight: "bold",
        boxShadow: "0 -2px 10px rgba(0, 0, 0, 0.3)", // Add shadow for separation
        transition: "background-color 0.5s ease",
        "&:hover": {
          backgroundColor: "#1565c0",
        },
      }}
    >
      <Typography variant="body2" align="center" sx={{ fontWeight: "bold" }}>
        &copy; 2024 Harish G - Batch59WD-T
      </Typography>
      <Box sx={{ display: "flex", alignItems: "center", marginTop: 1 }}>
        <GitHubIcon sx={{ marginRight: 1 }} />
        <Link
          href="https://github.com/harish-govindasamy?tab=repositories"
          target="_blank"
          rel="noopener"
          color="inherit"
          sx={{
            textDecoration: "none",
            fontFamily: "'Pacifico', cursive",
            fontWeight: "bold",
            letterSpacing: "0.1em", // Add letter spacing
          }}
        >
          harish-govindasamy
        </Link>
      </Box>
    </Box>
  );
};

export default Footer;
