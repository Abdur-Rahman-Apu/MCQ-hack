import React from 'react';
import Option from '../Option/Option';
import './Question.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons';



const Question = ({ questions, index, checkAns, showAns }) => {

    const { question, options, id, correctAnswer } = questions;



    return (
        <div>
            <div className='d-flex justify-content-center p-lg-5'>
                <div className="card w-100  mt-5 p-4 shadow question-card">
                    <div className="card-title my-3 d-flex justify-content-around">
                        <h6 className='text-center me-3'>Quiz {index + 1}: {question.replace(/(<([^>]+)>)/ig, '')}</h6>
                        <FontAwesomeIcon onClick={() => showAns(correctAnswer)} icon={faEye} />

                    </div>

                    <div className="card-body">
                        <div className="options row justify-content-lg-around flex-column align-items-center flex-lg-row">
                            {options.map((option, idx) => <Option key={idx} option={option} index={idx} id={id} checkAns={checkAns} correctAnswer={correctAnswer}></Option>)}
                        </div>
                    </div>
                </div>

            </div>

        </div>

    );
};

export default Question;