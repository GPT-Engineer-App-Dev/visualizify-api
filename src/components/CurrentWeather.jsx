import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Thermometer, Droplets, Wind } from 'lucide-react';

const CurrentWeather = ({ data, city }) => {
  const currentTemp = data.hourly.temperature_2m[0];
  const currentPrecipProb = data.hourly.precipitation_probability[0];
  const currentWindSpeed = data.hourly.windspeed_10m[0];

  return (
    <Card className="bg-gradient-to-br from-cyan-500 to-blue-500 text-white">
      <CardHeader>
        <CardTitle className="text-2xl">Current Weather in {city}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Thermometer className="h-8 w-8" />
            <span className="text-4xl font-bold">{currentTemp}°C</span>
          </div>
          <div className="text-right">
            <p className="text-xl">Temperature</p>
            <p className="text-sm opacity-75">Feels comfortable</p>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Droplets className="h-8 w-8" />
            <span className="text-4xl font-bold">{currentPrecipProb}%</span>
          </div>
          <div className="text-right">
            <p className="text-xl">Precipitation</p>
            <p className="text-sm opacity-75">Chance of rain</p>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Wind className="h-8 w-8" />
            <span className="text-4xl font-bold">{currentWindSpeed}</span>
          </div>
          <div className="text-right">
            <p className="text-xl">Wind Speed</p>
            <p className="text-sm opacity-75">km/h</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default CurrentWeather;