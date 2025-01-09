import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Dashboard = () => {
  const [fitnessData, setFitnessData] = useState([]);

  useEffect(() => {
    const fetchFitnessData = async () => {
      const token = localStorage.getItem('token');
      const response = await axios.get('http://localhost:5000/api/fitness', {
        headers: { 'x-auth-token': token },
      });
      setFitnessData(response.data);
    };
    fetchFitnessData();
  }, []);

  return (
    <div className="dashboard-container">
      <h2>Your Fitness Data</h2>
      {fitnessData.map((data) => (
        <div key={data._id}>
          <p>{data.date}: {data.steps} steps, {data.caloriesBurned} kcal burned</p>
        </div>
      ))}
    </div>
  );
};

export default Dashboard;
