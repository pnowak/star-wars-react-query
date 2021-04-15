import React, {useReducer, useEffect} from 'react';
import { reducer } from './reducer'
import { getData } from '../utils/api';
import { Card } from '../utils/Card';
import { GridStyles } from '../styles/GridStyles';

const initialState = {
  people: [],
  isLoading: true,
  error: false
};

function PeopleList() {
  const [{people, isLoading, error}, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    dispatch({type: 'FETCH_PEOPLE_REQUEST'});

    getData('https://swapi.dev/api/people')

      .then(people => dispatch({
        type: 'FETCH_PEOPLE_SUCCESS',
        payload: people
      }))

      .catch(error => {
        dispatch({
            type: 'FETCH_PEOPLE_ERROR',
            payload: error
        })
      });

  }, []);

  if (error) {
    return <p>{error.message}</p>
  }

  if (isLoading) {
    return <p>Loading people...</p>
  }

  return (
    <>
      <GridStyles>
        {people.results.map((human) => (
          <Card key={human.created} category='people' name={human.name} />
        ))}
      </GridStyles>
    </>
  );
}

export default PeopleList;