import HomeButton from "../components/HomeButton";
import HomeQuote from "../components/HomeQuote";
import Navigation from "../components/Navigation";
import { useState } from "react";

const Home = ({ favQuotes, setFavQuotes }) => {
  const [quoteIndex, setQuoteIndex] = useState(0);
  const [fetchedQuote, setFetchedQuote] = useState();
  return (
    <>
      <Navigation favQuotes={favQuotes} />
      <main className="home-page">
        <HomeQuote
          fetchedQuote={fetchedQuote}
          setFetchedQuote={setFetchedQuote}
          favQuotes={favQuotes}
          setFavQuotes={setFavQuotes}
          quoteIndex={quoteIndex}
        />
        <HomeButton
          fetchedQuote={fetchedQuote}
          setFetchedQuote={setFetchedQuote}
          favQuotes={favQuotes}
          setFavQuotes={setFavQuotes}
          quoteIndex={quoteIndex}
          setQuoteIndex={setQuoteIndex}
        />
      </main>
    </>
  );
};

export default Home;
