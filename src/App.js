import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';
import FilmsPage from './films/FilmsPage';
import PeoplePage from './people/PeoplePage';

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
            </ul>
          </nav>
        </header>

        <Routes>
          <Route path="/films" element={<FilmsPage/>}/>
          <Route path="/people" element={<PeoplePage/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;