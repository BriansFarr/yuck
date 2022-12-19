import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Nav from './Nav'
import MainLa from './MainLa'
import MainNyc from './MainNyc'
import Footer from './Footer'
import Header from './Header'
import About from './About'
import MainChi from './MainChi';
import Landing from './Landing';
import '../CSS/Header.css'


export default function Home() {
  return (
    <>
      <Router>
            <Header />
      <div className="Home">
          <h1>Welcome to Yuckhub!</h1> 
          <h3>Find your favorite restaurant's, worst health code violations!</h3>
        </div>
          <Nav />
            <Switch>
              <Route exact path="/" component={Landing} />
              <Route path="/la" component={MainLa} />
            <Route path="/nyc" component={MainNyc} />
            <Route path="/chicago" component={MainChi} />
            <Route path="/about" component={About}/>
            </Switch>
            
          

      </Router>
      
    </>
  )
}
