import React from 'react';
import Modal from './components/Modal';
import Header from './components/Header'
import Home from './components/Home';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
        <Modal/>
        <Home/>
      </header>
     </div>
  );
}

export default App;
