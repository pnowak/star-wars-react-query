import React, {useReducer, useEffect} from 'react';
import { reducer } from './reducer'
import { getData } from '../utils/api';
import { Card } from '../utils/Card';

const initialState = {
  vehicles: [],
  isLoading: true,
  error: false
};

function VehiclesList() {
  const [{vehicles, isLoading, error}, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    dispatch({type: 'FETCH_VEHICLES_REQUEST'});

    getData('https://swapi.dev/api/planets')

      .then(vehicles => dispatch({
        type: 'FETCH_VEHICLES_SUCCESS',
        payload: vehicles
      }))

      .catch(error => {
        dispatch({
            type: 'FETCH_VEHICLES_ERROR',
            payload: error
        })
      });

  }, []);

  if (error) {
    return <p>{error.message}</p>
  }

  if (isLoading) {
    return <p>Loading vehicles...</p>
  }

  return (
    <>
      <ul>
        {vehicles.results.map((vehicle) => (
          <li key={vehicle.created}>
            <Card category='vehicles' name={vehicle.name} />
          </li>
        ))}
      </ul>
    </>
  );
}

export default VehiclesList;