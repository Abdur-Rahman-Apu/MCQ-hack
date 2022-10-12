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

    const showAns = (ans) => {
        toast.info(`Correct answer is: ${ans}`, { position: 'top-center', closeOnClick: false, });
    }




    return (
        <div>
            <h3 className='text-center quiz-name mt-4'>Quiz of {name}</h3>

            <div className='container-fluid row flex-column-reverse align-items-center align-items-lg-start flex-lg-row mt-5'>

                <div className="col-12 col-lg-9">
                    {
                        questions.map((q, index) => <Question questions={q} key={index} index={index} checkAns={checkAns} showAns={showAns}></Question>)
                    }
                </div>
                <div className="col-8 col-lg-3 mt-5 result-section sticky-lg-top">
                    <div className='shadow p-5 mt-5 score-card '>
                        <h3 className='result-section-title text-center'>Your score</h3>

                        <div className='mt-5 result-count'>
                            <div className='d-flex justify-content-around align-items-center'>
                                <h5 className='correct-text'>Correct:</h5>  <span className='result rounded'>{correct}</span>
                            </div>

                            <div className='d-flex justify-content-around align-items-center mt-5'>
                                <h5 className='wrong-text'>Wrong:</h5><span className='result rounded'>{wrong}</span>
                            </div>
                        </div>
                    </div>
                </div>

                <ToastContainer />
            </div>
        </div>

    );
};

export default Quiz;