import React from 'react';
import './Option.css'

const Option = ({ option, index, id, checkAns, correctAnswer }) => {

    return (
        <div className="form-check col-lg-5 col-12 mb-3 option p-4 rounded ">
            <div className='mx-4'>
                <div >
                    <input onClick={(e) => checkAns(e.target.value, correctAnswer)} className="form-check-input" type="radio" name="flexRadioDefault" value={option} id={`${id}radio${index}`} />
                </div>
                <label className="form-check-label label" htmlFor={`${id}radio${index}`}>
                    {option}
                </label>
            </div>
        </div>
    );
};

export default Option;