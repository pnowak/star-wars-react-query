import React, {useReducer, useEffect} from 'react';
import { reducer } from './reducer'
import { getData } from '../utils/api';
import { Card } from '../utils/Card';

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

      .then(films => dispatch({
        type: 'FETCH_PEOPLE_SUCCESS',
        payload: films
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
      <ul>
        {people.results.map((human) => (
          <li key={human.created}>
            <Card category='people' name={human.name} />
          </li>
        ))}
      </ul>
    </>
  );
}

export default PeopleList;