import './App.css';
import React from 'react';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';

function App() {
  return (
    <React.Fragment>
      <div className='App'>
        <Header />
        <Main />
        <Footer />
      </div>
    </React.Fragment>
  );
}

export default App;
