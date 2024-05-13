import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

function ImpactChart() {
    const data = [
        { year: '2017', customers: 400 },
        { year: '2018', customers: 600 },
        { year: '2019', customers: 800 },
        { year: '2020', customers: 1500 },
        { year: '2021', customers: 2000 },
        { year: '2022', customers: 2400 },
        { year: '2023', customers: 3200 },
    ];

    return (
        <ResponsiveContainer width="100%" height={300}>
            <LineChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="year" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="customers" stroke="#8884d8" activeDot={{ r: 8 }} />
            </LineChart>
        </ResponsiveContainer>
    );
}

export default ImpactChart;
