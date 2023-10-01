import React, { useEffect, useState } from 'react';

const App = () => {
  const [quoteData, setQuoteData] = useState({ quote: '', author: '' });
  useEffect(() => {
    fetch('https://api.quotable.io/quotes/random')
      .then(response => response.json())
      .then(result => result[0])
      .then(data => setQuoteData({ quote: data.content, author: data.author }));
  }, []);

  return (
    <div id="quote-box">
      <h1>Quotes App</h1>
      <div id="text">{quoteData.quote}</div>
      <div id="author">{quoteData.author}</div>
      <a>Twitter</a>
      <a id="tweet-quote" href="twitter.com/intent/tweet" target="blank">
        Tweet
      </a>
      <button id="new-quote">New Quote</button>
    </div>
  );
};

export default App;
