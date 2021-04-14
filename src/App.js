import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';
import styled from 'styled-components';
import FilmsPage from './films/FilmsPage';
import PeoplePage from './people/PeoplePage';
import PlanetsPage from './planets/PlanetsPage';
import SpeciesPage from './species/SpeciesPage';
import StarshipsPage from './starships/StarshipsPage';
import VehiclesPage from './vehicles/VehiclesPage';

const NavStyles = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
  font-size: 2rem;
  a,
  li {
    padding: 1rem 3rem;
    display: flex;
    align-items: center;
    text-transform: uppercase;
    font-weight: 900;
    cursor: pointer;
    &:hover,
    &:focus {
      outline: none;
      text-decoration: none;
      &:after {
        width: calc(100% - 60px);
      }
      @media (max-width: 700px) {
        width: calc(100% - 10px);
      }
    }
  }
`;

function App() {
  return (
    <Router>
      <div>
        <header>
          <nav>
            <NavStyles>
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
            </NavStyles>
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