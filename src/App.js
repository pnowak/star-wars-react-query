import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from 'react-router-dom';
import FilmsPage from './films/FilmsPage';

function App() {
  return (
    <BrowserRouter>
      <div>
        <header>
          <nav>
            <ul>
              <li>
                <Link to="/films">
                  <span>Films</span>
                </Link>
              </li>
            </ul>
          </nav>
        </header>

        <Routes>
          <Route path="/films" element={<FilmsPage/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;