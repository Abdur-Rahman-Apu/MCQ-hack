import React from 'react';
import Option from '../Option/Option';
import './Question.css';

const Question = ({ questions, index, checkAns }) => {
    console.log(checkAns);
    const { question, options, id } = questions;




    return (
        <div className='d-flex justify-content-center'>
            <div className="card w-75 mt-4 p-4">
                <div className="card-title my-3">
                    <h6 className='text-center'>Quiz {index + 1}: {question}</h6>
                </div>

                <div className="card-body">
                    <div className="options row justify-content-around">
                        {options.map((option, idx) => <Option key={idx} option={option} index={idx} id={id} checkAns={checkAns}></Option>)}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Question;