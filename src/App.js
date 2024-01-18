import QuoteBox from "./QuoteBox";
import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [quotePost, setQuotePost] = useState("");
  const [quoteText, setQuoteText] = useState("");
  const [quoteAuthor, setQuoteAuthor] = useState("");
  const [color, setColor] = useState("");
  const config = {
    headers: {
      "X-RapidAPI-Key": "9d5305d8d8msh820c95ca4e3effbp1c1ddejsnd89fd943d959",
      "X-RapidAPI-Host": "quotes15.p.rapidapi.com",
    },
  };
  const url = "https://quotes15.p.rapidapi.com/quotes/random/";

  useEffect(() => {
    handleNewQuote();
    colorChange();
  }, []);

  const colorChange = () => {
    let colorNum = Math.random() * 360;
    setColor(`hsl(${colorNum},62%, 82%)`);
  };

  const fetchApi = async config => {
    try {
      await axios.get(url, config).then(response => {
        const data = response.data;
        setQuoteText(data.content);
        setQuoteAuthor(data.originator.name);
        setQuotePost(data.content + " - " + data.originator.name);
      });
    } catch (error) {
      console.error(error);
    }
  };

  const handleNewQuote = () => {
    fetchApi(config);
    colorChange();
  };

  return (
    <div className="App" style={{ backgroundColor: color }}>
      <QuoteBox
        quoteText={quoteText}
        quoteAuthor={quoteAuthor}
        quotePost={quotePost}
        handleNewQuote={handleNewQuote}
        color={color}
      />
    </div>
  );
}

export default App;
