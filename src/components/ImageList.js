import React from 'react';

const ImageList = () => {
  return (
    <div className='imageContainer'>
      <img className='imgSize imgSize imgSize-hide2' alt='tower' src='/images/controlTower.jpg' />
      <img className='imgSize' alt='red and white plane' src='/images/redPlane.jpg' />
      <img className='imgSize imgSize-hide' alt='ground crew' src='/images/airportWorker.jpg' />
      <img className='imgSize' alt='commercialJet' src='/images/commercialJet.jpg' />
      <img className='imgSize imgSize' alt='small plane controls' src='/images/planecontrols2.jpg' />
      <img className='imgSize' alt='drone' src='/images/drone.jpg' />
    </div>
  );
}

export default ImageList;
