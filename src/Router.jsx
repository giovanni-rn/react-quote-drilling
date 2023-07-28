import { useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Favorites from "./pages/Favorites";

const Router = () => {
  const [favQuotes, setFavQuotes] = useState([]);
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home favQuotes={favQuotes} setFavQuotes={setFavQuotes} />,
    },
    {
      path: "favorites",
      element: <Favorites favQuotes={favQuotes} setFavQuotes={setFavQuotes} />,
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default Router;
