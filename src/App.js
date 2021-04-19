import React, { useRef } from 'react';
import {
  BrowserRouter,
  Route,
  Switch,
} from "react-router-dom";
import NavBar from './components/navBar/NavBar';
import About from './components/others/About';
import Predictions from './components/grafics/Predictions'
import History from './components/grafics/History';
import Details from './components/grafics/Details';
import OutsideContext from './contexts/OutsideContext';

function App() {
  const containerRef = useRef(null);

  return (
    <div ref={containerRef}>
      <OutsideContext.Provider value={containerRef}>
      <BrowserRouter className="App">
      <NavBar></NavBar>
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
      </OutsideContext.Provider>
    </div >
  );
}

export default App;
