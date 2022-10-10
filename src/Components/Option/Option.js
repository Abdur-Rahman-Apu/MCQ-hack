import React from 'react';
import './Option.css'

const Option = ({ option, index, id, checkAns }) => {

    return (
        <div className="form-check col-5 mb-3 border p-4 rounded ">
            <div className='mx-4'>
                <div >
                    <input onClick={(e) => checkAns(e.target.value)} className="form-check-input" type="radio" name="flexRadioDefault" value={option} id={`${id}radio${index}`} />
                </div>
                <label onClick={(e) => checkAns(e.target)} className="form-check-label" htmlFor={`${id}radio${index}`}>
                    {option}
                </label>
            </div>
        </div>
    );
};

export default Option;