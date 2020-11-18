import React from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Testapi from './pages/Testapi';
import Navbar from './components/Navbar';

function App(): JSX.Element {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/test" component={Testapi} />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
