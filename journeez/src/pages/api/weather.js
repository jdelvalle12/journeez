import React from "react";

export default function weather({ currentWeatherData, forecastData }) {
  console.log(currentWeatherData);
  console.log(forecastData);
  
  <div>
      {currentWeatherData && (
        <h2>Current Weather: {currentWeatherData.temperature}°F</h2>
      )}
      {forecastData && (
        <ul>
          {forecastData.map((item) => (
            <li key={item.date}>
              {item.date}: {item.temperature}°F
            </li>
          ))}
        </ul>
      )}
    </div>

  return <div></div>;
}

export async function getStaticProps() {
  const API_KEY = "49df163cf17140efac2ee29ad389b959";
  const currentWeatherAPI = `https://api.weatherbit.io/v2.0/current?city=New%20York,NY&key=${API_KEY}`;
  const forecastAPI = `https://api.weatherbit.io/v2.0/forecast/daily?city=New%20York,NY&key=${API_KEY}`;

  const [currentRes, forecastRes] = await Promise.all([
    fetch(currentWeatherAPI),
    fetch(forecastAPI),
  ]);

  const [currentWeatherData, forecastData] = await Promise.all([
    currentRes.json(),
    forecastRes.json(),
  ]);

  return {
    props: {
      currentWeatherData,
      forecastData,
    },
  };
}



export const getCurrentWeather = async (latitude, longitude) => {
  const url = `${BASE_URL}current?lat=${latitude}&lon=${longitude}&key=${API_KEY}`;
  const response = await fetch(url);
  const data = await response.json();
  return data;
};

export const getWeatherForecast = async (latitude, longitude) => {
  const url = `${BASE_URL}forecast/daily?lat=${latitude}&lon=${longitude}&key=${API_KEY}`;
  const response = await fetch(url);
  const data = await response.json();
  return data;
};