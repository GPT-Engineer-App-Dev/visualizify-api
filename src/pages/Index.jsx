import React from 'react';
import WeatherDashboard from '../components/WeatherDashboard';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-indigo-200 py-12">
      <h1 className="text-5xl font-bold mb-12 text-center text-indigo-900">Weather Visualizer</h1>
      <WeatherDashboard />
    </div>
  );
};

export default Index;