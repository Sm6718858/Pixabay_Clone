import React from 'react';
import Images from './Components/Images';
import Navbar from './Components/Navbar';
import './index.css';

const App = () => {
  return (
    <>
      <div>
        <h1 className='heading'>Pixabay</h1>
        <Navbar />
        <Images />
      </div>
      <footer className='footer'>Copyright@2025reactjs developed by-Shivam Mishra <br /> connect by mail- sm6718858@gmail.com </footer>
    </>
  );
};

export default App;
