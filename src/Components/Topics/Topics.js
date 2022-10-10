import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Banner from '../Banner/Banner';
import Topic from '../Topic/Topic';
import './Topics.css';

const Topics = () => {
    const topics = useLoaderData().data;
    console.log(topics);
    return (

        <div>
            <Banner></Banner>

            <section className='mt-5 topics-section'>
                <h4 className='fw-bold'>Select topics:</h4>

                <div className='container-fluid row topic-container '>
                    {
                        topics.map(topic => <Topic key={topic.id} topic={topic}></Topic>)
                    }
                </div>
            </section>
        </div>

    );
};

export default Topics;