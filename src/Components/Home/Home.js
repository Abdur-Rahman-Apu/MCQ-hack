import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Banner from '../Banner/Banner';
import Topic from '../Topic/Topic';

const Home = () => {
    const topics = useLoaderData().data;
    console.log(topics);
    return (
        <div>
            <Banner></Banner>

            <section className='mt-5 topics-section'>
                <h4 className='fw-bold mb-3 ms-3 topic-title'>Select <span className='title'>topics</span> :</h4>

                <div className='container-fluid row topic-container '>
                    {
                        topics.map(topic => <Topic key={topic.id} topic={topic}></Topic>)
                    }
                </div>
            </section>
        </div>
    );
};

export default Home;