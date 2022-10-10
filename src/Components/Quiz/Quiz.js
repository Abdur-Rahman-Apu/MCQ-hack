import './Quiz.css';

import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Question from '../Question/Question';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Quiz = () => {
    const { name, questions } = useLoaderData().data;


    let [correct, setCorrect] = useState(0);

    let [wrong, setWrong] = useState(0);

    const checkAns = (selected, correctAnswer) => {
        if (selected === correctAnswer) {
            toast.success("Congratulations, Your answer is correct", { position: 'top-center' });
            correct += 1;
            setCorrect(correct);

        } else {
            toast.error("Your answer is wrong", { position: 'top-center' });
            wrong += 1;
            setWrong(wrong);
        }
    }



    return (
        <div className='container row mt-5'>
            <h3 className='text-center'>Quiz of {name}</h3>
            <div className="col-10 mt-4">
                {
                    questions.map((q, index) => <Question questions={q} key={index} index={index} checkAns={checkAns}></Question>)
                }
            </div>
            <div className="col-2 mt-4 result-section">
                <h3 className=' text-center'>Result</h3>
                <h5>Correct: {correct}</h5>
                <h5>Wrong: {wrong}</h5>
            </div>

            <ToastContainer />
        </div>

    );
};

export default Quiz;