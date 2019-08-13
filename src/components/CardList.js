import React from 'react';
import Card from './Card';

const CardList = ({ courses }) => {
  return (
    <div className="courseContainer">
      {
        courses.map((course, i) => {
          return (
            <Card
              key={i}
              id={courses[i].id}
              name={courses[i].name}
              type={courses[i].type}
              cost={courses[i].cost}
              desc={courses[i].desc}
            />
          );
        })
      }
    </div>
  );
}

export default CardList;