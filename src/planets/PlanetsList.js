import React, {useReducer, useEffect} from 'react';
import { reducer } from './reducer'
import { getData } from '../utils/api';
import { Card } from '../utils/Card';
import { GridStyles } from '../styles/GridStyles';

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
      <GridStyles>
        {planets.results.map((planet) => (
          <Card key={planet.created} category='planets' name={planet.name} />
        ))}
      </GridStyles>
    </>
  );
}

export default PlanetsList;