import { Button, CardActions, CardContent, Paper, Typography } from '@mui/material';
import React, { useState } from 'react';
import './RandomQoute.css'

const BoxCard = () => {
  const [quote, setQuote] = useState({ text: '', author: '' });
  const [error, setError] = useState(null);

  const handleSubmit = () => {
    fetch('https://api.quotable.io/random')
      .then(response => response.json())
      .then(data => setQuote({
        text: data.content,
        author: data.author
      }))
      .catch((error) => setError(error.message));
  }

  return (
    <Paper elevation={10} className="box-card">
      <React.Fragment>
        <CardContent className="card-content">
          <Typography color="text.secondary" gutterBottom>
            Hello, how are you today?
          </Typography>
          <Typography variant="h5" component="div" className="title">
            Quote Generator
          </Typography>
          <Typography variant="body2">
            <Paper  elevation={2} className="quote-paper">
              {quote.text}
              <br />
              {/* <span - {quote.author}</span> */}

              {quote.author && `- ${quote.author}`}
            </Paper>
          </Typography>
          {error && <Typography color="error">{error}</Typography>}
        </CardContent>
        <CardActions>
          <Button size="small" ></Button>
          <Button variant="contained" color="success" className="btn" onClick={handleSubmit}>
 Get Quote
</Button>
        </CardActions>
      </React.Fragment>
    </Paper>
  );
};

export default BoxCard;
