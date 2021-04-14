export function reducer(state, action) {
  switch (action.type) {
    case 'FETCH_PEOPLE_REQUEST':
      return {
        ...state,
        isLoading: true,
        error: false,
        people: []
      };

    case 'FETCH_PEOPLE_SUCCESS':
      return {
        ...state,
        isLoading: false,
        people: action.payload
      };

    case 'FETCH_PEOPLE_ERROR':
      return {
        ...state,
        isLoading: false,
        error: action.payload
      };

    default:
      return state;
  }
}