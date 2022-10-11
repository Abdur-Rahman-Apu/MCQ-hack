import React from 'react';
import './Blog.css';

const Blog = () => {
    return (
        <div>
            <h3 className='text-center my-5'>Learn something new</h3>

            <div className='blog-questions'>
                <div className="accordion" id="accordionExample">
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingOne">
                            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                <span className='fw-bold me-2'>Question: 1 </span> What is the purpose of react router?
                            </button>
                        </h2>
                        <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                <h6 className='ms-3'>For routing in React, React router is a standard library.</h6>
                                <p className='fw-bold mb-1'>Features:</p>
                                <ul>
                                    <li>Enables the navigation among views of various components</li>
                                    <li>Allows to build a single page web application with navigation without the page refreshing </li>
                                    <li>Keeps the user interface in sync with the URL</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingTwo">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                <span className='fw-bold me-2'>Question: 2 </span> How does the React Context API work?
                            </button>
                        </h2>
                        <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                <p>The React Context API is a technique to make global variables and pass them effectively.</p>
                                <span className='ms-4 fw-bold'>Working procedures:</span>
                                <p className='mt-3'>At first, we have to use React.createContext() which will return a consumer and a provider. Provider is a component that allows consuming component to subscribe to context changes. It accepts a value which will be passed to consuming components that are descendants of this provider. One provider can be connected to many consumer. Consumer is a component that consumes and uses the state.</p>
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingThree">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                <span className='fw-bold me-2'>Question: 3 </span> What is useRef in React?
                            </button>
                        </h2>
                        <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                            <p className='mt-2'>The useRef hook accepts one argument as the initial value and returns a reference object which is mutable and it is known as current. The useRef hook can be used to store a mutable value that does not cause a re-render when updated</p>
                            <span className='fw-bold ms-3'>Syntax</span>
                            <p>const refContainer = useRef(initialValue);</p>
                            <p>Firstly, we set the initial value: useRef(0). It is same as: </p>
                            <img className='img-fluid ms-3' src={'/useRef.png'} alt="useRef" />
                            <p>We can access the count using count.current.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;