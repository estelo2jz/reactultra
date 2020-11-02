import React from 'react';
import GlobalStyle from "./globalStyles";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/HomePage/Home';
import { Navbar, Footer } from "./components";
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <GlobalStyle />
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
