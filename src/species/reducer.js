export function reducer(state, action) {
  switch (action.type) {
    case 'FETCH_SPECIES_REQUEST':
      return {
        ...state,
        isLoading: true,
        error: false,
        species: []
      };

    case 'FETCH_SPECIES_SUCCESS':
      return {
        ...state,
        isLoading: false,
        species: action.payload
      };

    case 'FETCH_SPECIES_ERROR':
      return {
        ...state,
        isLoading: false,
        error: action.payload
      };

    default:
      return state;
  }
}