import React from "react";
import Box from "@mui/material/Box";
import Fab from "@mui/material/Fab";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import FavoriteIcon from "@mui/icons-material/Favorite";

const HomeButton = ({
  fetchedQuote,
  favQuotes,
  setFavQuotes,
  setQuoteIndex,
  quoteIndex,
}) => {
  return (
    <Box sx={{ "& > :not(style)": { m: 1 } }}>
      <Fab
        onClick={() => setFavQuotes([...favQuotes, fetchedQuote])}
        color="success"
        aria-label="like"
      >
        <FavoriteIcon />
      </Fab>
      <Fab
        onClick={() => setQuoteIndex(quoteIndex + 1)}
        color="secondary"
        aria-label="edit"
      >
        <ArrowForwardIosIcon />
      </Fab>
    </Box>
  );
};

export default HomeButton;
