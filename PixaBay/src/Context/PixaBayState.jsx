import React, { useEffect, useState } from 'react';
import PixaBayContext from './PixaBayContext';

const PixaBayState = (props) => {
    const [imageData,setImageData] = useState([]);
    const [priority,setPriority] = useState("london");


    const api_key = "48288106-0a655b17df43d98a364bab6d1";

    useEffect(() => {
        const fetchData = async () => {
            try {
                const API = await fetch(`https://pixabay.com/api/?key=${api_key}&q=${priority}&image_type=photo&pretty=true&per_page=50`);
                const data = await API.json();
                // console.log(data.hits);
                setImageData(data.hits);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData(); // Call the function
    }, [priority]);

    const FetchimageByCatagory = async(cat) =>{
        try {
            const API = await fetch(`https://pixabay.com/api/?key=${api_key}&q=catagory=${cat}&image_type=photo&pretty=true&per_page=50`);
            const data = await API.json();
            // console.log(data.hits);
            setImageData(data.hits);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    }

    return (
        <PixaBayContext.Provider value={{imageData,FetchimageByCatagory,setPriority}}>
            {props.children}
        </PixaBayContext.Provider>
    );
}


export default PixaBayState;
