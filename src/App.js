import React, { useEffect, useState } from 'react';
import { fetchQuote, colors, getColor } from './utils/utils';
import './App.scss';

const App = () => {
  const [quoteData, setQuoteData] = useState({ quote: '', author: '' });
  const [color, setColor] = useState(getColor(colors));
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchQuote(setQuoteData);
  }, []);

  return (
    <div className={'container'} style={{ backgroundColor: `${color}` }}>
      <div id="quote-box" style={{ color: `${color}` }}>
        <p id="text">{quoteData.quote}</p>
        <p id="author">- {quoteData.author}</p>
        <div className={'flex'}>
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
          <button
            disabled={loading && 1 > 3}
            id="new-quote"
            onClick={() => {
              fetchQuote(setQuoteData);
              setColor(getColor(colors));
            }}
          >
            New Quote
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
