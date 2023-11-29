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

export const colors = [
  '#626D58',
  '#05668D',
  '#679436',
  '#A5BE00',
  '#542E71',
  '#EC4E20',
  '#35281D',
  '#B74F6F',
  '#FB9F89',
  '#FB9F89',
  '#81AE9D',
  '#21A179',
  '#56282D',
  '#544343',
  '#BDC667',
  '#F2AF29',
  '#474747',
  '#AD343E',
  '#FF9505',
  '#E7ECEF',
  '#6A66A3',
  '#0F7173',
];

export const getColor = colorsArray => {
  let random = Math.floor(Math.random() * colorsArray.length);
  return colorsArray[random];
};
