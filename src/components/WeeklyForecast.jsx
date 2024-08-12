import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Sun, Cloud, CloudRain } from 'lucide-react';

const WeeklyForecast = ({ data }) => {
  const getWeatherIcon = (precipSum) => {
    if (precipSum > 5) return <CloudRain className="h-8 w-8 text-blue-500" />;
    if (precipSum > 0) return <Cloud className="h-8 w-8 text-gray-500" />;
    return <Sun className="h-8 w-8 text-yellow-500" />;
  };

  return (
    <Card className="bg-gradient-to-r from-green-400 to-blue-500">
      <CardHeader>
        <CardTitle className="text-2xl text-white">7-Day Forecast</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4">
          {data.daily.time.map((day, index) => (
            <Card key={day} className="bg-white bg-opacity-20 backdrop-blur-lg rounded-lg overflow-hidden">
              <CardContent className="p-4 text-center">
                <p className="font-bold text-lg text-white">{new Date(day).toLocaleDateString('en-US', { weekday: 'short' })}</p>
                <div className="my-2">
                  {getWeatherIcon(data.daily.precipitation_sum[index])}
                </div>
                <p className="text-2xl font-bold text-white">{Math.round(data.daily.temperature_2m_max[index])}°C</p>
                <p className="text-sm text-gray-200">{Math.round(data.daily.temperature_2m_min[index])}°C</p>
                <p className="mt-2 text-white">{data.daily.precipitation_sum[index]}mm</p>
                <p className="text-sm text-gray-200">{data.daily.windspeed_10m_max[index]} km/h</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default WeeklyForecast;