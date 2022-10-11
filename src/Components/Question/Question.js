import React from 'react';
import Option from '../Option/Option';
import './Question.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faEye } from '@fortawesome/free-solid-svg-icons';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Question = ({ questions, index, checkAns, showAns }) => {

    const { question, options, id, correctAnswer } = questions;



    return (
        <div>
            <div className='d-flex justify-content-center'>
                <div className="card w-75 mt-4 p-4">
                    <div className="card-title my-3 d-flex justify-content-around">
                        <h6 className='text-center'>Quiz {index + 1}: {question}</h6>
                        <FontAwesomeIcon onClick={() => showAns(correctAnswer)} icon={faEye} />

                    </div>

                    <div className="card-body">
                        <div className="options row justify-content-around">
                            {options.map((option, idx) => <Option key={idx} option={option} index={idx} id={id} checkAns={checkAns} correctAnswer={correctAnswer}></Option>)}
                        </div>
                    </div>
                </div>

            </div>

        </div>

    );
};

export default Question;