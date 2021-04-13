import React from 'react';
import {
  BrowserRouter,
  Route,
  Switch,
} from "react-router-dom";
import NavBarTest from './components/navBar/NavBarTest';
import About from './components/others/About';
import Predictions from './components/grafics/Predictions'
import History from './components/grafics/History';
import Details from './components/grafics/Details';

function App() {
  return (
    <div>
      <BrowserRouter className="App">
      <NavBarTest></NavBarTest>
        <Switch>
          <Route path="/about">
            <About />
          </Route>

          <Route path="/predictions">
            <Predictions />
          </Route>

          <Route path="/history">
            <History />
          </Route>

          <Route path="/details">
            <Details />
          </Route>

          <Route path="/" exact>
          </Route>
        </Switch>
       
      </BrowserRouter>
    </div >
  );
}

export default App;
