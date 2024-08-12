import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const WeeklyForecast = ({ data }) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>7-Day Forecast</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-7 gap-4">
          {data.daily.time.map((day, index) => (
            <Card key={day} className="text-center">
              <CardContent className="p-4">
                <p className="font-bold">{new Date(day).toLocaleDateString('en-US', { weekday: 'short' })}</p>
                <p className="text-2xl font-bold mt-2">{Math.round(data.daily.temperature_2m_max[index])}°C</p>
                <p className="text-sm text-gray-500">{Math.round(data.daily.temperature_2m_min[index])}°C</p>
                <p className="mt-2">{data.daily.precipitation_sum[index]}mm</p>
                <p className="text-sm">{data.daily.windspeed_10m_max[index]} km/h</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default WeeklyForecast;