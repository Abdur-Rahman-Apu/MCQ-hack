import React from 'react';
import './Banner.css';

const Banner = () => {
    return (
        <div className='row row-cols-1 flex-column-reverse flex-md-row row-cols-md-2 w-100  banner-container container-fluid shadow mt-4 p-0'>
            <div className=' banner-title d-flex flex-column justify-content-center mt-4 mt-md-0'>
                <h1 className='text-center'> <span className='title-text'>MCQ</span> Hack is a quiz platform</h1>

                <p className='text-end'>Want to test your knowledge? so lets start.</p>

            </div>
            <img className='img-fluid rounded' src='./banner.jpg' alt="banner" />
        </div>
    );
};

export default Banner;