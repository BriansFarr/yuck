import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './Components/Home'
import MainLa from './Components/MainLa'
import MainNyc from './Components/MainNyc'
import MainChi from './Components/MainChi';



function App() {
  return (
    <BrowserRouter>
      
      <Route path="/" component={Home} />
      <Route path="/nyc" component={MainNyc} />
      <Route path="/la" component={MainLa} />
      <Route path="/chicago" component={MainChi}/>
      

      
    </BrowserRouter>
  );
}

export default App;
