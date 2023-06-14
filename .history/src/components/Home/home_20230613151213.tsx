import React from 'react';
import { Grid } from '@mui/material';

function Home() {
  return (
    <div>
      <h1>Página Inicial</h1>
       <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid xs={6} md={8}>
          <Item>xs=6 md=8</Item>
        </Grid>
        <Grid xs={6} md={4}>
          <Item>xs=6 md=4</Item>
        </Grid>
        <Grid xs={6} md={4}>
          <Item>xs=6 md=4</Item>
        </Grid>
        <Grid xs={6} md={4}>
          <Item>xs=6 md=8</Item>
        </Grid>
    </div>
  );
}

export default Home;