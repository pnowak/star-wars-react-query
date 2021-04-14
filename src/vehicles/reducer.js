export function reducer(state, action) {
  switch (action.type) {
    case 'FETCH_VEHICLES_REQUEST':
      return {
        ...state,
        isLoading: true,
        error: false,
        vehicles: []
      };

    case 'FETCH_VEHICLES_SUCCESS':
      return {
        ...state,
        isLoading: false,
        vehicles: action.payload
      };

    case 'FETCH_VEHICLES_ERROR':
      return {
        ...state,
        isLoading: false,
        error: action.payload
      };

    default:
      return state;
  }
}