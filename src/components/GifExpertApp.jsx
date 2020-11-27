import React, { useState } from 'react';
import AddCategory from './AddCategory';
import GifGrid from './GifGrid';


const GifExpertApp = () => {

    const [ categories, setCategories ] = useState(['Samurai X']);


    return (
        <div>
            <h2>GifExpertApp</h2>        
            <AddCategory setCategories={setCategories} />
            <hr/>

            <ul>
            {
            categories.map(category => (
                <GifGrid
                    key={category}
                    category={category}
                />
            ))
            }
            </ul>
        </div>
    );
};

export default GifExpertApp;