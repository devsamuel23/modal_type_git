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
         <Grid container spacing={2}>
          <Grid item xs={12}>
            {/* Conteúdo do Grid */}
          </Grid>
          <Grid item xs={6}>
            {/* Conteúdo do Grid */}
          </Grid>
          <Grid item xs={6}>
            {/* Conteúdo do Grid */}
          </Grid>
        </Grid>
      </div>
  );
}

export default App;
