import React, { useContext } from 'react';
import PixaBayContext from '../Context/PixaBayContext';

const Navbar = () => {
    const {FetchimageByCatagory,setPriority} = useContext(PixaBayContext);
    return (
        <div>
            <div className=' navbar w-[1000px] mx-auto text-center mt-5'>
                <button onClick={() => FetchimageByCatagory("nature")} type="button" className="text-blue-300 hover:bg-blue-700 hover:text-white bg-inherit font-bold rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2  m-3 justify-center border ">Nature</button>
                <button onClick={() => FetchimageByCatagory("science")} type="button" className="text-blue-300 bg-inherit border hover:bg-pink-700 hover:text-white font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 m-3 justify-center">Science</button>
                <button onClick={() => FetchimageByCatagory("computer")} type="button" className="text-blue-300 bg-inherit border hover:bg-blue-700 hover:text-white font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 m-3 justify-center">Computer</button>
                <button onClick={() => FetchimageByCatagory("buildings")} type="button" className="text-blue-300 bg-inherit border hover:bg-pink-500 hover:text-white font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 m-3 justify-center">Buildings</button>
                <button onClick={() => FetchimageByCatagory("sports")} type="button" className="text-blue-300 bg-inherit border hover:bg-blue-800 hover:text-white font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 m-3 justify-center">Sports</button>
                <button onClick={() => FetchimageByCatagory("transportation")} type="button" className="text-blue-300 bg-inherit border hover:bg-pink-500 hover:text-white font-bold rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 m-3 justify-center">Transportation</button>
                <button onClick={() => FetchimageByCatagory("travel")} type="button" className="text-blue-300 bg-inherit border hover:bg-blue-800 hover:text-white font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 m-3 justify-center">Travel</button>
                <button onClick={() => FetchimageByCatagory("food")} type="button" className="text-blue-300 bg-inherit border hover:bg-pink-500 hover:text-white font-bold rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 m-3 justify-center">Food</button>
            </div>
            <input type="text" placeholder='Search for images' onChange={(e)=>setPriority(e.target.value)} className="searching border text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[300px] p-2.5 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mx-auto mt-5" />
        </div>
    );
}

export default Navbar;
