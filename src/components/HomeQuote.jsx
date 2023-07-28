import { useEffect, useState } from "react";
import axios from "axios";
import QuoteCard from "./style/QuoteCard";
import CircularIndeterminate from "./style/CircularIndeterminate";

const HomeQuote = ({ fetchedQuote, setFetchedQuote, quoteIndex }) => {
  useEffect(() => {
    const fetchQuote = async () => {
      const options = {
        method: "GET",
        url: "https://quotes15.p.rapidapi.com/quotes/random/",
        params: {
          language_code: "fr",
        },
        headers: {
          "X-RapidAPI-Key":
            "33a38a48e2msh345936a2215c570p1a003cjsn277d5a16ce04",
          "X-RapidAPI-Host": "quotes15.p.rapidapi.com",
        },
      };

      try {
        const response = await axios.request(options);
        setFetchedQuote(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchQuote();
  }, [quoteIndex]);

  return (
    <div className="home-quote">
      {fetchedQuote ? (
        <QuoteCard
          content={fetchedQuote.content}
          author={fetchedQuote.originator.name}
          link={fetchedQuote.url}
        />
      ) : (
        <CircularIndeterminate />
      )}
    </div>
  );
};

export default HomeQuote;
