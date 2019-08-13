import React from 'react';

const Card = ({ name, cost, desc }) => {
  return (
    <div className='container grow shadow-5'>
      <img alt="plane" src="https://img.icons8.com/color/48/000000/airplane-front-view.png" />
      <div className="cardFlex">
        <h2 className='h2Height'>{name}</h2>
        <p>Cost to complete this training: {cost}</p>
        <p className='p2Height'>{desc}</p>
      </div>
    </div>
  );
}

export default Card;