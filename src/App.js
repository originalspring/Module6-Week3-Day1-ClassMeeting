import logo from './logo.svg';
import './App.css';
import Spheres from './spheres/src/Spheres'
import BarChart from './barchart/src/BarChart'
import {BrowserRouter as Router, Routes, Link, Route } from 'react-router-dom'


function Myapp() {
  return (
  <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/bar">Barchart</Link>
            </li>
            <li>
              <Link to="/tree">Tree</Link>
            </li>
            <li>
              <Link to="/sphere">Sphere</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/bar">
           element = { <BarChart />}
          </Route>


          <Route path="/Sphere">
            element = { <Spheres />}
          </Route>
      
        </ Routes>

      </div>
    </Router>
  );
}

export default Myapp;
