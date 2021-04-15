import React, {useReducer, useEffect} from 'react';
import { reducer } from './reducer'
import { getData } from '../utils/api';
import { Card } from '../utils/Card';
import { GridStyles } from '../styles/GridStyles';

const initialState = {
  films: [],
  isLoading: true,
  error: false
};

function FilmsList() {
  const [{films, isLoading, error}, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    dispatch({type: 'FETCH_FILMS_REQUEST'});

    getData('https://swapi.dev/api/films')

      .then(films => dispatch({
        type: 'FETCH_FILMS_SUCCESS',
        payload: films
      }))

      .catch(error => {
        dispatch({
            type: 'FETCH_FILMS_ERROR',
            payload: error
        })
      });

  }, []);

  if (error) {
    return <p>{error.message}</p>
  }

  if (isLoading) {
    return <p>Loading films...</p>
  }

  return (
    <>
      <GridStyles>
        {films.results.map((film) => (
          <Card key={film.created} category='films' name={film.title} />
        ))}
      </GridStyles>
    </>
  );
}

export default FilmsList;