import React from 'react';
import Modal from './components/Modal';
import Header from './components/Header'
import { Grid } from '@mui/material';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
        <Modal/>
      </header>
         <Grid container spacing={6}>
          <Grid item xs={12}>
            {<h1>Samuel </h1>}
          </Grid>
          <Grid item xs={6}>
            {<h1>Samuel </h1>}
          </Grid>
          <Grid item xs={6}>
            {<h1>Samuel </h1>}
          </Grid>
        </Grid>
      </div>
  );
}

export default App;
