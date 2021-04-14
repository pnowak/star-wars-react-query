export function reducer(state, action) {
  switch (action.type) {
    case 'FETCH_STARSHIPS_REQUEST':
      return {
        ...state,
        isLoading: true,
        error: false,
        starships: []
      };

    case 'FETCH_STARSHIPS_SUCCESS':
      return {
        ...state,
        isLoading: false,
        starships: action.payload
      };

    case 'FETCH_STARSHIPS_ERROR':
      return {
        ...state,
        isLoading: false,
        error: action.payload
      };

    default:
      return state;
  }
}