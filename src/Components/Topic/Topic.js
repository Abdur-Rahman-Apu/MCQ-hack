import React from 'react';
import { Link } from 'react-router-dom';
import './Topic.css';

const Topic = ({ topic }) => {
    const { name, logo, total } = topic;
    return (
        <div className='col-3'>
            <div className="card">
                <img src={logo} className="card-img-top img-fluid" alt={logo} />
                <div className="card-body d-flex justify-content-between align-items-center">
                    <h6 className="card-title fw-bold">{name}</h6>

                    <Link className="btn btn-primary">Start quiz</Link>
                </div>
            </div>
        </div>
    );
};

export default Topic;