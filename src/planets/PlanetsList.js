import React, {useReducer, useEffect} from 'react';
import { reducer } from './reducer'
import { getData } from '../utils/api';
import { Card } from '../utils/Card';

const initialState = {
  planets: [],
  isLoading: true,
  error: false
};

function PlanetsList() {
  const [{planets, isLoading, error}, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    dispatch({type: 'FETCH_PLANETS_REQUEST'});

    getData('https://swapi.dev/api/planets')

      .then(planets => dispatch({
        type: 'FETCH_PLANETS_SUCCESS',
        payload: planets
      }))

      .catch(error => {
        dispatch({
            type: 'FETCH_PLANETS_ERROR',
            payload: error
        })
      });

  }, []);

  if (error) {
    return <p>{error.message}</p>
  }

  if (isLoading) {
    return <p>Loading planets...</p>
  }

  return (
    <>
      <ul>
        {planets.results.map((planet) => (
          <li key={planet.created}>
            <Card category='planets' name={planet.name} />
          </li>
        ))}
      </ul>
    </>
  );
}

export default PlanetsList;