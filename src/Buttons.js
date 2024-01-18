import React from "react";
import { FaXTwitter } from "react-icons/fa6";

const Buttons = ({ quotePost, handleNewQuote, color }) => {
  const quoteTextPost = quotePost.replace(" ", "%20");

  return (
    <div id="buttons">
      <a
        id="tweet-quote"
        href={"https://twitter.com/intent/tweet?text=" + quoteTextPost}
        target="_blank"
        rel="noreferrer">
        <FaXTwitter style={{ color: color }} />
      </a>
      <button
        id="new-quote"
        onClick={handleNewQuote}
        style={{ backgroundColor: color }}>
        New Quote
      </button>
    </div>
  );
};

export default Buttons;
