export const fetchQuote = async setStateFunction => {
  try {
    const response = await fetch('https://api.quotable.io/quotes/random');
    if (response.status === 200) {
      const data = await response.json();
      const { content, author } = data[0];
      setStateFunction({ quote: content, author: author });
    }
  } catch (error) {
    console.log(error.message);
  }
};
