import React from "react";
import Buttons from "./Buttons";

const QuoteBox = ({
  quoteText,
  quoteAuthor,
  quotePost,
  handleNewQuote,
  color,
}) => {
  return (
    <div id="quote-box" style={{ color: color }}>
      <p id="text">{quoteText}</p>
      <p id="author">- {quoteAuthor}</p>
      <Buttons
        quotePost={quotePost}
        handleNewQuote={handleNewQuote}
        color={color}
      />
    </div>
  );
};

export default QuoteBox;
