import React, {useReducer, useEffect} from 'react';
import { reducer } from './reducer'
import { getData } from '../utils/api';
import { Card } from '../utils/Card';

const initialState = {
  species: [],
  isLoading: true,
  error: false
};

function SpeciesList() {
  const [{species, isLoading, error}, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    dispatch({type: 'FETCH_SPECIES_REQUEST'});

    getData('https://swapi.dev/api/planets')

      .then(species => dispatch({
        type: 'FETCH_SPECIES_SUCCESS',
        payload: species
      }))

      .catch(error => {
        dispatch({
            type: 'FETCH_SPECIES_ERROR',
            payload: error
        })
      });

  }, []);

  if (error) {
    return <p>{error.message}</p>
  }

  if (isLoading) {
    return <p>Loading species...</p>
  }

  return (
    <>
      <ul>
        {species.results.map((specie) => (
          <li key={specie.created}>
            <Card category='species' name={specie.name} />
          </li>
        ))}
      </ul>
    </>
  );
}

export default SpeciesList;