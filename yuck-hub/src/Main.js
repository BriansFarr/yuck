import React from 'react';
import './App.css';
import Header from './Components/Header';
import Main from './Components/Main'
import Footer from './Components/Footer'
import Nav from './Components/Nav'


function App() {
  return (
    <div className="App">
      <Header />
      <Nav />
      <Main />
      <Footer />
  
    </div>
  );
}

export default App;