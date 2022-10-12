import React from 'react';
import Headers from '../Headers/Headers';
import './Error.css';

const Error = () => {
    return (
        <div>
            <Headers></Headers>
            <div className='error-img d-flex flex-column  justify-content-center align-items-center'>
                <h3 className='fw-bold '>ERROR 404</h3>
                <p>PAGE NOT FOUND</p>
            </div>
        </div>
    );
};

export default Error;