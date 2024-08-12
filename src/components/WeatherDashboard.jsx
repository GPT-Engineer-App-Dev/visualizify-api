import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search } from 'lucide-react';
import WeatherChart from './WeatherChart';
import CurrentWeather from './CurrentWeather';
import WeeklyForecast from './WeeklyForecast';

const fetchWeatherData = async (city) => {
  // For now, we're using fixed coordinates. In a real app, we'd geocode the city name.
  const response = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&hourly=temperature_2m,precipitation_probability,windspeed_10m&daily=temperature_2m_max,temperature_2m_min,precipitation_sum,windspeed_10m_max&timezone=auto`);
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
};

const WeatherDashboard = () => {
  const [city, setCity] = useState('Berlin');
  const [searchCity, setSearchCity] = useState('Berlin');

  const { data, isLoading, error } = useQuery({
    queryKey: ['weatherData', searchCity],
    queryFn: () => fetchWeatherData(searchCity),
  });

  const handleSearch = (e) => {
    e.preventDefault();
    setSearchCity(city);
  };

  if (isLoading) return <div className="flex items-center justify-center h-screen">
    <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-blue-500"></div>
  </div>;
  if (error) return <div className="text-center text-red-500 p-4 bg-red-100 rounded-lg mt-4">Error: {error.message}</div>;

  return (
    <div className="space-y-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <Card className="bg-gradient-to-r from-blue-500 to-purple-600 text-white">
        <CardHeader>
          <CardTitle className="text-3xl font-bold">Weather Dashboard</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSearch} className="flex space-x-2">
            <Input
              type="text"
              placeholder="Enter city name"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              className="bg-white text-black"
            />
            <Button type="submit" variant="secondary">
              <Search className="mr-2 h-4 w-4" /> Search
            </Button>
          </form>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <CurrentWeather data={data} city={searchCity} />
        <WeatherChart data={data} />
      </div>

      <WeeklyForecast data={data} />
    </div>
  );
};

export default WeatherDashboard;