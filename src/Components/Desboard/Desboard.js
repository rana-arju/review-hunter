import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, ResponsiveContainer, Legend, Bar, BarChart } from 'recharts';
import Chart from '../Chart/Chart';
   
const Desboard = () => {
    const [data, setData] = Chart();

    return (
       
    <Container>
        <h2 className='title'>Monthly Activity</h2>
        
        <div style={{ width: '100%', height: 300 }}>
        <ResponsiveContainer>
        <LineChart width={600} height={300} data={data} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
        <Line type="monotone" dataKey="sell" stroke="#8884d8" />
        <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
        <XAxis dataKey="month" interval={'preserveStartEnd'} />
        <YAxis interval={'preserveStartEnd'} />
        <Tooltip />
    </LineChart>
    </ResponsiveContainer>
    </div>
    <div style={{ width: '100%', height: 300 }}>
     <ResponsiveContainer width="100%" height="100%">
        <BarChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
          barSize={20}
        >
          <XAxis dataKey="month" scale="point" padding={{ left: 10, right: 10 }} />
          <YAxis />
          <Tooltip />
          <Legend />
          <CartesianGrid strokeDasharray="3 3" />
          <Bar dataKey="revenue" fill="#8884d8" background={{ fill: '#eee' }} />
        </BarChart>
      </ResponsiveContainer>
    </div>
      
   
  </Container>

       
    );
};

export default Desboard;