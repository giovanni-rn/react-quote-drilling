import * as React from "react";
import FavList from "../components/FavList";
import Navigation from "../components/Navigation";

const Favorites = ({ favQuotes, setFavQuotes }) => {
  return (
    <>
      <Navigation favQuotes={favQuotes} />
      <FavList favQuotes={favQuotes} setFavQuotes={setFavQuotes} />
    </>
  );
};

export default Favorites;
