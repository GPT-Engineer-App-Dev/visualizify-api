import React from 'react';
import WeatherDashboard from '../components/WeatherDashboard';

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-4xl font-bold mb-8 text-center">Weather Visualizer</h1>
      <WeatherDashboard />
    </div>
  );
};

export default Index;