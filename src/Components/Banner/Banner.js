import React from 'react';
import './Banner.css';

const Banner = () => {
    return (
        <div className='row row-cols-1 flex-column-reverse flex-md-row row-cols-md-2 w-100 mt-4 banner-container container-fluid'>
            <div className='d-flex flex-column justify-content-center mt-4 mt-md-0'>
                <h1 className='text-center'>Test yourself by giving quiz.</h1>
                <div className='mt-3 blockquote-container'>
                    <figure class="text-center">
                        <blockquote class="blockquote">
                            <p>Trust yourself, you know more than you think you do</p>
                        </blockquote>
                        <figcaption class="blockquote-footer">
                            Benjamin Spock, <cite title="Source Title">paediatrician and author</cite>
                        </figcaption>
                    </figure>
                </div>
            </div>
            <img className='img-fluid rounded' src='./banner.jpg' alt="banner" />
        </div>
    );
};

export default Banner;