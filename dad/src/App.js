import React from 'react';

import './App.css';
import DadJoke from './components/DadJoke';

function App() {
  // useEffect(() => {
  //   axios({
  //     method: 'GET',
  //     url: 'https://icanhazdadjoke.com/',
  //     headers: {
  //       Accept: 'application/json',
  //     },
  //   })
  //     .then((response) => {
  //       console.log('Response from axios call: ', response);
  //     })
  //     .catch((error) => console.log('Error with axios call: ', error));
  // }, []);

  return (
    <div className="App">
      <h1 className="App-header">What's Your Favorite Dad Joke? 😆</h1>
      <DadJoke />
    </div>
  );
}

export default App;
