import './Quiz.css';

import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Question from '../Question/Question';

const Quiz = () => {
    const { name, questions } = useLoaderData().data;
    const { correctAnswer } = questions;

    let [correct, setCorrect] = useState(0);

    // let [wrong, setWrong] = useState(0);

    const checkAns = (selected) => {
        if (selected === correctAnswer) {
            console.log("yes");
        } else {
            console.log("no");
        }
    }


    <div className='container row mt-5'>
        <h3 className='text-center'>Quiz of {name}</h3>
        <div className="col-10 mt-4">
            {
                questions.map((q, index) => <Question questions={q} key={index} index={index} checkAns={checkAns}></Question>)
            }
        </div>
        <div className="col-2 mt-4">
            <h3>Result</h3>
        </div>
    </div>
    return (
        <div className='container row mt-5'>
            <h3 className='text-center'>Quiz of {name}</h3>
            <div className="col-10 mt-4">
                {
                    questions.map((q, index) => <Question questions={q} key={index} index={index}></Question>)
                }
            </div>
            <div className="col-2 mt-4">
                <h3>Result</h3>
            </div>
        </div>
    );
};

export default Quiz;