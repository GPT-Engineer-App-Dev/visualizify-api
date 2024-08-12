import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Thermometer, Droplets, Wind } from 'lucide-react';

const CurrentWeather = ({ data, city }) => {
  const currentTemp = data.hourly.temperature_2m[0];
  const currentPrecipProb = data.hourly.precipitation_probability[0];
  const currentWindSpeed = data.hourly.windspeed_10m[0];

  return (
    <Card>
      <CardHeader>
        <CardTitle>Current Weather in {city}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-center space-x-2">
          <Thermometer className="h-6 w-6 text-red-500" />
          <span className="text-2xl font-bold">{currentTemp}°C</span>
        </div>
        <div className="flex items-center space-x-2">
          <Droplets className="h-6 w-6 text-blue-500" />
          <span>{currentPrecipProb}% chance of precipitation</span>
        </div>
        <div className="flex items-center space-x-2">
          <Wind className="h-6 w-6 text-gray-500" />
          <span>{currentWindSpeed} km/h wind speed</span>
        </div>
      </CardContent>
    </Card>
  );
};

export default CurrentWeather;