import { useState, useEffect } from 'react';

const Quotes = () => {
  const [quote, setQuote] = useState([{ author: '', quote: '', category: '' }]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getQuote = async () => {
      try {
        const apiKey = 'lqhRH3DsQ3XaCW6r/T99zQ==T8jrMwq87vPiHJPk';
        const apiUrl = 'https://api.api-ninjas.com/v1/quotes?category=change';
        const response = await fetch(apiUrl, {
          headers: {
            'Content-Type': 'application/json',
            'X-Api-Key': apiKey,
          },
        });
        const data = await response.json();
        setQuote(data[0]);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };
    getQuote();
  }, []);

  if (error) {
    return (
      <div className="error">
        Error! Something went wrong:
        {error}
      </div>
    );
  }

  if (loading) {
    return <div className="loading">Loading...</div>;
  }

  return (
    <div className="quote-block">
      <div className="quote">
        {quote.quote}
        <br />
        <br />
        By
        {' '}
        <b>{quote.author}</b>
        <br />
        <br />
        You can find more
        {' '}
        <b>{quote.category}</b>
        {' '}
        quotes in
        {' '}
        <a href="https://api.api-ninjas.com/v1/quotes?category=change">here</a>
      </div>
    </div>
  );
};

export default Quotes;
