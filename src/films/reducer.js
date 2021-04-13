export function reducer(state, action) {
  switch (action.type) {
    case 'FETCH_FILMS_REQUEST':
      return {
        ...state,
        isLoading: true,
        error: false,
        films: []
      };

    case 'FETCH_FILMS_SUCCESS':
      return {
        ...state,
        isLoading: false,
        films: action.payload
      };

    case 'FETCH_FILMS_ERROR':
      return {
        ...state,
        isLoading: false,
        error: action.payload
      };

    default:
      return state;
  }
}