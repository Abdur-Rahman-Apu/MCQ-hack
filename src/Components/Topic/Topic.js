import React from 'react';
import { Link } from 'react-router-dom';
import './Topic.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faQuestionCircle } from '@fortawesome/free-solid-svg-icons';


const Topic = ({ topic }) => {
    const { id, name, logo, total } = topic;
    return (
        <div className='col-3'>
            <div className="card">
                <img src={logo} className="card-img-top img-fluid" alt={logo} />
                <div className="card-body d-flex justify-content-between align-items-center">
                    <div className='d-flex flex-column'>
                        <h6 className="card-title fw-bold">{name}</h6>

                        <p className='m-0'><FontAwesomeIcon icon={faQuestionCircle} /> {total}</p>
                    </div>

                    <Link to={`quiz/${id}`} className="btn btn-primary">Start quiz
                        <FontAwesomeIcon icon={faArrowRight} className="ms-1" /></Link>
                </div>
            </div>
        </div>
    );
};

export default Topic;