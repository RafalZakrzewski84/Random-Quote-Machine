import React, { useEffect, useState } from 'react';

const App = () => {
  const [quoteData, setQuoteData] = useState({ quote: '', author: '' });

  const fetchQuote = async () => {
    try {
      const response = await fetch('https://api.quotable.io/quotes/random');
      if (response.status === 200) {
        const data = await response.json();
        const { content, author } = data[0];
        setQuoteData({ quote: content, author: author });
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    fetchQuote();
  }, []);

  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: '100%',
        backgroundColor: 'grey',
      }}
    >
      <div id="quote-box" style={{ with: '50%', backgroundColor: 'white' }}>
        <h1>Quotes App</h1>
        <div id="text">{quoteData.quote}</div>
        <div id="author">{quoteData.author}</div>
        <a>Twitter</a>
        <a
          id="tweet-quote"
          href="https://twitter.com/i/flow/login?redirect_after_login=%2Fintent%2Ftweet"
          target="blank"
        >
          Tweet
        </a>
        <button id="new-quote" onClick={fetchQuote}>
          New Quote
        </button>
      </div>
    </div>
  );
};

export default App;
