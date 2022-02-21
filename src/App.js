import React from 'react';
import Navbar from './components/Navbar'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home';
import Reviews from './components/pages/Reviews';
import Africa from './components/pages/Africa';
import Asia from './components/pages/Asia';
import Australia from './components/pages/Australia';
import Europe from './components/pages/Europe';
import NorthAmerica from './components/pages/NorthAmerica';
import SouthAmerica from './components/pages/SouthAmerica';
import SignUp from './components/pages/SignUp';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/reviews' component={Reviews} />
          <Route path='/africa' component={Africa} />
          <Route path='/asia' component={Asia} />
          <Route path='/australia' component={Australia} />
          <Route path='/europe' component={Europe} />
          <Route path='/north-america' component={NorthAmerica} />
          <Route path='/south-america' component={SouthAmerica} />
          <Route path='/sign-up' component={SignUp} />
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
