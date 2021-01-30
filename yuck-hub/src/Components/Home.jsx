import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Nav from './Nav'
import MainLa from './MainLa'
import MainNyc from './MainNyc'
import Footer from './Footer'
import Header from './Header'
import About from './About'
import MainChi from './MainChi';

export default function Home() {
  return (
    <>
      <Router>
      <div className="Home">
            <Header />
            <Nav />
            <Switch>
              <Route exact path="/about" component={About} />
              <Route path="/la" component={MainLa} />
            <Route path="/nyc" component={MainNyc} />
            <Route path="/chicago" component={MainChi}/>
            </Switch>
            <Footer />
          </div>

      </Router>
      
    </>
  )
}
