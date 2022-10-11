import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { BarChart, Bar, Tooltip, CartesianGrid, XAxis, YAxis, ResponsiveContainer } from "recharts";
import './statistics.css';

const Statistics = () => {
    const data = useLoaderData().data;
    const renderCustomBarLabel = ({ payload, x, y, width, height, value }) => {
        return <text x={x + width / 2} y={y} fill="#666" textAnchor="middle" dy={-6}>{`value: ${value}`}</text>;
    };
    return (
        <div >
            <h5 className='text-center'>Total questions on each topic</h5>

            <div className=' d-flex flex-column align-items-center justify-content-around chart-container container-fluid'>
                <ResponsiveContainer width="30%" height={300}>
                    <BarChart data={data}>
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                        <Bar dataKey="total" fill="#badc58" label={renderCustomBarLabel} />
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
};

export default Statistics;