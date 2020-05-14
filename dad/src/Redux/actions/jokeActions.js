import axios from 'axios';

export const fetchJoke = () => {
  return (dispatch) => {
    dispatch({ type: 'FETCH_JOKE_INITIAL' });
    axios({
      method: 'GET',
      url: 'https://icanhazdadjoke.com/',
      headers: {
        Accept: 'application/json',
      },
    })
      .then((response) => {
        console.log('Response from axios call: ', response);
        dispatch({ type: 'FETCH_JOKE_COMPLETE', payload: response.data.joke });
      })
      .catch((error) =>
        dispatch({
          type: 'ERROR_MESSAGE',
          payload: `Error: ${error.response.error} Status: ${error.response.status}`,
        })
      );
  };
};
