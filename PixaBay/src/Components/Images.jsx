import React, { useContext } from 'react';
import PixaBayContext from '../Context/PixaBayContext';

const Images = () => {
  const { imageData } = useContext(PixaBayContext);
  return (
    <div className='images mt-5 mx-auto'>
      {
        imageData.map((image) => <div key={image.id}>
          <div className="items2">
            <img src={image.largeImageURL} alt="" />
          </div>
        </div>)
      }
    </div>
  );
}

export default Images;
