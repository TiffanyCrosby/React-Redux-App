import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import Loader from 'react-loader-spinner';

import { fetchJoke } from '../Redux/actions/jokeActions';

const DadJoke = (props) => {
  useEffect(() => {
    props.fetchJoke();
  }, []);

  return (
    <div className="jokeCard">
      {props.isFetching && (
        <Loader type="Hearts" color="#00BFFF" height={80} width={80} />
      )}
      <p>{props.joke}</p>
      <p className="error">{props.error}</p>
      <button onClick={props.fetchJoke}>Click for another One!</button>
    </div>
  );
};

const mapsStatetoProps = (state) => {
  return {
    joke: state.jokeReducer.joke,
    isFetching: state.jokeReducer.isFetching,
    error: state.jokeReducer.error,
  };
};
export default connect(mapsStatetoProps, { fetchJoke })(DadJoke);
