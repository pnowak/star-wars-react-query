import React, {useReducer, useEffect} from 'react';
import { reducer } from './reducer'
import { getData } from '../utils/api';
import { Card } from '../utils/Card';
import { GridStyles } from '../styles/GridStyles';

const initialState = {
  starships: [],
  isLoading: true,
  error: false
};

function StarshipsList() {
  const [{starships, isLoading, error}, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    dispatch({type: 'FETCH_STARSHIPS_REQUEST'});

    getData('https://swapi.dev/api/planets')

      .then(starships => dispatch({
        type: 'FETCH_STARSHIPS_SUCCESS',
        payload: starships
      }))

      .catch(error => {
        dispatch({
            type: 'FETCH_STARSHIPS_ERROR',
            payload: error
        })
      });

  }, []);

  if (error) {
    return <p>{error.message}</p>
  }

  if (isLoading) {
    return <p>Loading starships...</p>
  }

  return (
    <>
      <GridStyles>
        {starships.results.map((starship) => (
          <Card key={starship.created} category='starships' name={starship.name} />
        ))}
      </GridStyles>
    </>
  );
}

export default StarshipsList;