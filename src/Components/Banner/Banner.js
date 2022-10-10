import React from 'react';
import './Banner.css';

const Banner = () => {
    return (
        <div className='row row-cols-2 w-100 mt-4 banner-container'>
            <div className='d-flex flex-column justify-content-center'>
                <h1>Test yourself by giving quiz.</h1>
                <button className='w-25 btn  btn-outline-info ms-4 mt-4 fw-bold'>Explore more</button>
            </div>
            <img className='img-fluid rounded' src='./banner.jpg' alt="banner" />
        </div>
    );
};

export default Banner;