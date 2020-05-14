import React from 'react';

const Beer = (props) => {
  console.log('props in beer: ', props);
  return (
    <div className="beerCard">
      <h2>Beer: {props.name}</h2>
      <img src={props.img} alt="The Type of Beer" />
      <div>
        <h4>Some food that will go with this drink:</h4>
        {props.foodPairing.map((item) => {
          return <li className="listItem">{item}</li>;
        })}
      </div>
    </div>
  );
};

export default Beer;
