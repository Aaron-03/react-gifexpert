import React, { Fragment, useEffect, useState } from 'react';
import GifGridItem from './GifGridItem';

import { useFetchGifs } from '../hooks/useFetchGifs';

const GifGrid = ({ category }) => {

    const { data:images, loading } = useFetchGifs(category);

    
 
    return (
        <Fragment>
            <h3 className="animate__animated animate__fadeIn">{category}</h3>
            { loading ? <p className="animate__animated animate__fadeIn">Loading</p> : null }

            <div className="card-grid">
                {
                images.map((img) => (
                    <GifGridItem
                        key={img.id}
                        img= {img}
                    />
                ))
                }
            </div>
        </Fragment>
    );
};

export default GifGrid;