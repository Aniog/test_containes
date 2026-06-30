// Mock weather data for San Francisco — 30 days ending today (2026-06-30)
// This mirrors the database schema that will be used in the backend.

const CITY = "San Francisco";
const STATE = "CA";

const conditions = [
  "Sunny",
  "Partly Cloudy",
  "Cloudy",
  "Foggy",
  "Rainy",
  "Thunderstorm",
  "Windy",
];

const rawData = [
  { date: "2026-06-01", tempHigh: 68, tempLow: 54, humidity: 72, windSpeed: 12, precipitation: 0.0, condition: "Foggy",         uvIndex: 4 },
  { date: "2026-06-02", tempHigh: 71, tempLow: 56, humidity: 65, windSpeed: 10, precipitation: 0.0, condition: "Partly Cloudy", uvIndex: 5 },
  { date: "2026-06-03", tempHigh: 74, tempLow: 57, humidity: 60, windSpeed: 9,  precipitation: 0.0, condition: "Sunny",         uvIndex: 7 },
  { date: "2026-06-04", tempHigh: 76, tempLow: 58, humidity: 58, windSpeed: 8,  precipitation: 0.0, condition: "Sunny",         uvIndex: 8 },
  { date: "2026-06-05", tempHigh: 73, tempLow: 57, humidity: 63, windSpeed: 11, precipitation: 0.0, condition: "Partly Cloudy", uvIndex: 6 },
  { date: "2026-06-06", tempHigh: 66, tempLow: 53, humidity: 78, windSpeed: 14, precipitation: 0.1, condition: "Cloudy",        uvIndex: 3 },
  { date: "2026-06-07", tempHigh: 62, tempLow: 51, humidity: 85, windSpeed: 16, precipitation: 0.4, condition: "Rainy",         uvIndex: 2 },
  { date: "2026-06-08", tempHigh: 60, tempLow: 50, humidity: 88, windSpeed: 18, precipitation: 0.6, condition: "Rainy",         uvIndex: 1 },
  { date: "2026-06-09", tempHigh: 63, tempLow: 52, humidity: 82, windSpeed: 15, precipitation: 0.2, condition: "Cloudy",        uvIndex: 2 },
  { date: "2026-06-10", tempHigh: 67, tempLow: 54, humidity: 74, windSpeed: 12, precipitation: 0.0, condition: "Partly Cloudy", uvIndex: 4 },
  { date: "2026-06-11", tempHigh: 70, tempLow: 55, humidity: 68, windSpeed: 10, precipitation: 0.0, condition: "Partly Cloudy", uvIndex: 5 },
  { date: "2026-06-12", tempHigh: 73, tempLow: 57, humidity: 62, windSpeed: 9,  precipitation: 0.0, condition: "Sunny",         uvIndex: 7 },
  { date: "2026-06-13", tempHigh: 77, tempLow: 59, humidity: 57, windSpeed: 8,  precipitation: 0.0, condition: "Sunny",         uvIndex: 8 },
  { date: "2026-06-14", tempHigh: 79, tempLow: 61, humidity: 55, windSpeed: 7,  precipitation: 0.0, condition: "Sunny",         uvIndex: 9 },
  { date: "2026-06-15", tempHigh: 75, tempLow: 60, humidity: 60, windSpeed: 10, precipitation: 0.0, condition: "Partly Cloudy", uvIndex: 7 },
  { date: "2026-06-16", tempHigh: 72, tempLow: 58, humidity: 65, windSpeed: 11, precipitation: 0.0, condition: "Partly Cloudy", uvIndex: 6 },
  { date: "2026-06-17", tempHigh: 69, tempLow: 55, humidity: 70, windSpeed: 13, precipitation: 0.0, condition: "Foggy",         uvIndex: 4 },
  { date: "2026-06-18", tempHigh: 65, tempLow: 53, humidity: 80, windSpeed: 17, precipitation: 0.3, condition: "Rainy",         uvIndex: 2 },
  { date: "2026-06-19", tempHigh: 61, tempLow: 50, humidity: 90, windSpeed: 20, precipitation: 0.8, condition: "Thunderstorm",  uvIndex: 1 },
  { date: "2026-06-20", tempHigh: 63, tempLow: 51, humidity: 86, windSpeed: 18, precipitation: 0.5, condition: "Rainy",         uvIndex: 1 },
  { date: "2026-06-21", tempHigh: 66, tempLow: 53, humidity: 78, windSpeed: 15, precipitation: 0.1, condition: "Cloudy",        uvIndex: 3 },
  { date: "2026-06-22", tempHigh: 70, tempLow: 55, humidity: 70, windSpeed: 12, precipitation: 0.0, condition: "Partly Cloudy", uvIndex: 5 },
  { date: "2026-06-23", tempHigh: 74, tempLow: 57, humidity: 63, windSpeed: 10, precipitation: 0.0, condition: "Sunny",         uvIndex: 7 },
  { date: "2026-06-24", tempHigh: 78, tempLow: 60, humidity: 58, windSpeed: 9,  precipitation: 0.0, condition: "Sunny",         uvIndex: 8 },
  { date: "2026-06-25", tempHigh: 80, tempLow: 62, humidity: 54, windSpeed: 8,  precipitation: 0.0, condition: "Sunny",         uvIndex: 9 },
  { date: "2026-06-26", tempHigh: 76, tempLow: 60, humidity: 60, windSpeed: 10, precipitation: 0.0, condition: "Partly Cloudy", uvIndex: 7 },
  { date: "2026-06-27", tempHigh: 72, tempLow: 57, humidity: 66, windSpeed: 12, precipitation: 0.0, condition: "Partly Cloudy", uvIndex: 6 },
  { date: "2026-06-28", tempHigh: 68, tempLow: 55, humidity: 72, windSpeed: 14, precipitation: 0.0, condition: "Foggy",         uvIndex: 4 },
  { date: "2026-06-29", tempHigh: 71, tempLow: 56, humidity: 68, windSpeed: 11, precipitation: 0.0, condition: "Partly Cloudy", uvIndex: 5 },
  { date: "2026-06-30", tempHigh: 74, tempLow: 58, humidity: 63, windSpeed: 10, precipitation: 0.0, condition: "Sunny",         uvIndex: 7 },
];

export const weatherData = rawData.map((d) => ({ ...d, city: CITY, state: STATE }));

export const cityInfo = { city: CITY, state: STATE };

export const todayData = weatherData[weatherData.length - 1];

export const monthlyStats = {
  avgHigh: Math.round(weatherData.reduce((s, d) => s + d.tempHigh, 0) / weatherData.length),
  avgLow: Math.round(weatherData.reduce((s, d) => s + d.tempLow, 0) / weatherData.length),
  totalPrecipitation: weatherData.reduce((s, d) => s + d.precipitation, 0).toFixed(1),
  avgHumidity: Math.round(weatherData.reduce((s, d) => s + d.humidity, 0) / weatherData.length),
  maxTemp: Math.max(...weatherData.map((d) => d.tempHigh)),
  minTemp: Math.min(...weatherData.map((d) => d.tempLow)),
  rainyDays: weatherData.filter((d) => d.precipitation > 0).length,
  sunnyDays: weatherData.filter((d) => d.condition === "Sunny").length,
};
