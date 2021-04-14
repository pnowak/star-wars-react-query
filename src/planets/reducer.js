export function reducer(state, action) {
  switch (action.type) {
    case 'FETCH_PLANETS_REQUEST':
      return {
        ...state,
        isLoading: true,
        error: false,
        planets: []
      };

    case 'FETCH_PLANETS_SUCCESS':
      return {
        ...state,
        isLoading: false,
        planets: action.payload
      };

    case 'FETCH_PLANETS_ERROR':
      return {
        ...state,
        isLoading: false,
        error: action.payload
      };

    default:
      return state;
  }
}