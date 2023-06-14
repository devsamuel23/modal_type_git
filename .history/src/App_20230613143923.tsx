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
      </div>
  );
}

export default App;
