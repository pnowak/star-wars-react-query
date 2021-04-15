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
import GlobalStyles from './styles/GlobalStyles';

const NavStyles = styled.nav`
  ul {
    margin: 0;
    margin-bottom: 6rem;
    padding: 0;
    text-align: center;
    list-style: none;

    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
    grid-gap: 2rem;
    align-items: center;
  }
  a {
    font-size: 3rem;
    font-weight: 200;
    text-decoration: none;
    color: var(--black);
    &:hover {
      color: var(--red);
      text-decoration: underline;
    }
  }
`;

function App() {
  return (
    <>
      <GlobalStyles />
      <Router>
        <div>
          <header>
            <NavStyles>
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
            </NavStyles>
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
    </>
  );
}

export default App;