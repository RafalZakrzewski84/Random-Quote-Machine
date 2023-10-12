import React, { useEffect, useState } from 'react';
import { fetchQuote } from './utils/utils';
import './App.scss';

const App = () => {
  const [quoteData, setQuoteData] = useState({ quote: '', author: '' });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchQuote(setQuoteData);
  }, []);

  return (
    <div className={'container'}>
      <div id="quote-box">
        <h1>Quotes App</h1>
        <div id="text">{quoteData.quote}</div>
        <div id="author">{quoteData.author}</div>
        <div>
          <div>
            <a>Twitter</a>
            <a
              id="tweet-quote"
              href="https://twitter.com/intent/tweet"
              target="blank"
            >
              Tweet
            </a>
          </div>
          <button id="new-quote" onClick={() => fetchQuote(setQuoteData)}>
            New Quote
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
