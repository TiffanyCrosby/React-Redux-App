const initialState = {
  joke: `You're the BEST dad in the world!`,
  isFetching: false,
  error: '',
};

export const jokeReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_JOKE_INITIAL':
      return {
        ...state,
        isFetching: true,
      };
    case 'FETCH_JOKE_COMPLETE':
      return {
        ...state,
        isFetching: false,
        joke: action.payload,
      };
    case 'ERROR_MESSAGE':
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};
