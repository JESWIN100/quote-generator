// RandomQoute.js

import React from 'react';
import { Box } from '@mui/material';
import { Card } from 'react-bootstrap';
import BoxCard from './BoxCard'; // Import your BoxCard component


const RandomQoute = () => {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'center',alignContent:'center',  marginTop: '8%', }}>
      <Card style={{ width: '400px' }}>
        <Card.Body>
          <BoxCard /> {/* Render the BoxCard component */}
        </Card.Body>
      </Card>
    </Box>
  );
};

export default RandomQoute; // Export RandomQoute as default
