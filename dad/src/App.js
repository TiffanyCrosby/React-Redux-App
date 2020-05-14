import React, { useEffect, useState } from 'react';
import axios from 'axios';

import './App.css';

import Beer from './components/Beer';

function App() {
  const [beer, setBeer] = useState([]);

  useEffect(() => {
    axios
      .get('https://api.punkapi.com/v2/beers/random')
      .then((response) => {
        console.log(response);
        setBeer(response.data);
      })
      .catch((error) => console.log('Error with axios call: ', error));
  }, []);

  return (
    <div className="App">
      <h1 className="App-header">What's Your Favorite Beer?</h1>
      {beer.map((drink) => {
        return (
          <Beer
            key={drink.id}
            name={drink.name}
            img={drink.image_url}
            foodPairing={drink.food_pairing}
          />
        );
      })}
    </div>
  );
}

export default App;
