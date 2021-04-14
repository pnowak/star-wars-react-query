import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';
import FilmsPage from './films/FilmsPage';
import PeoplePage from './people/PeoplePage';
import PlanetsPage from './planets/PlanetsPage';
import SpeciesPage from './species/SpeciesPage';
import StarshipsPage from './starships/StarshipsPage';
import VehiclesPage from './vehicles/VehiclesPage';

function App() {
  return (
    <Router>
      <div>
        <header>
          <nav>
            <ul>
              <li>
                <Link to="/films">
                  <span>Films</span>
                </Link>
              </li>
              <li>
                <Link to="/people">
                  <span>People</span>
                </Link>
              </li>
              <li>
                <Link to="/planets">
                  <span>Planets</span>
                </Link>
              </li>
              <li>
                <Link to="/species">
                  <span>Species</span>
                </Link>
              </li>
              <li>
                <Link to="/starships">
                  <span>Starships</span>
                </Link>
              </li>
              <li>
                <Link to="/vehicles">
                  <span>Vehicles</span>
                </Link>
              </li>
            </ul>
          </nav>
        </header>

        <Routes>
          <Route path="/films" element={<FilmsPage/>}/>
          <Route path="/people" element={<PeoplePage/>}/>
          <Route path="/planets" element={<PlanetsPage/>}/>
          <Route path="/species" element={<SpeciesPage/>}/>
          <Route path="/starships" element={<StarshipsPage/>}/>
          <Route path="/vehicles" element={<VehiclesPage/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;