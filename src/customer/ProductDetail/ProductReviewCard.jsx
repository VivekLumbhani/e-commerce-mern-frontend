import { Avatar, Box, Grid, Rating } from '@mui/material';
import React from 'react';

const ProductReviewCard = () => {
  return (
    <div>
      <Grid container spacing={2} alignItems="center">
        <Grid item xs={1}>
          <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            <Avatar className='text-white' sx={{ width: 56, height: 56, bgcolor: "#9155fd" }}>V</Avatar>
          </Box>
        </Grid>
        <Grid item xs={9}>
          <div className="space-y-2">
            <div style={{ textAlign: 'left' }}>
              <p>Ram</p>
              <p>April 6, 2024</p>
              <Rating value={4.5} name='half-rating' />
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit voluptatibus veniam est corrupti sunt vero quisquam alias quasi, commodi molestiae.</p>

            </div>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

export default ProductReviewCard;
