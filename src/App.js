import React from 'react';
import Navbar from './components/Navbar'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home';
import Reviews from './components/pages/Reviews';
import Africa from './components/pages/Africa';
import Asia from './components/pages/Asia';
import SignUp from './components/pages/SignUp';
import Footer from './components/Footer';
import ReviewTest from './components/pages/ReviewTest';
import ReviewSelection from './components/pages/ReviewSelection';
import UploadPage from './components/pages/UploadPage';

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
          <Route path='/sign-up' component={SignUp} />
          <Route path='/review-test' component={ReviewTest} />
          <Route path='/review-selection' component={ReviewSelection} />
          <Route path='/upload' component={UploadPage} />
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
