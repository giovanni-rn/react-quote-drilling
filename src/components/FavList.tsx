import * as React from "react";
import Paper from "@mui/material/Paper";
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { styled } from "@mui/material/styles";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

interface Quote {
  content: string
  originator: {name: string}
}

const FavList = ({ favQuotes, setFavQuotes }) => {
  return (
    <main className="fav-page">
      <Stack spacing={2}>
        {favQuotes.map((quote: Quote) => {
        return (
          <Item>{quote.content}<i> {quote.originator.name}</i></Item>
        );
      })}
      </Stack>
      <Button onClick={() => setFavQuotes([])} variant="outlined" color="error">Empty favorites</Button>
      </main>
  );
};

export default FavList;