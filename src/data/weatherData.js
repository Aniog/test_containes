// Sample weather data for San Francisco, CA — June 2026
// Simulates a database of daily weather readings

export const CITY = {
  name: "San Francisco",
  state: "CA",
  country: "US",
  timezone: "America/Los_Angeles",
  lat: 37.7749,
  lon: -122.4194,
};

const CONDITIONS = ["Sunny", "Partly Cloudy", "Cloudy", "Foggy", "Rainy", "Stormy"];

const rawData = [
  { date: "2026-06-01", tempHigh: 68, tempLow: 52, humidity: 72, precipitation: 0.0, windSpeed: 12, condition: "Sunny" },
  { date: "2026-06-02", tempHigh: 65, tempLow: 50, humidity: 78, precipitation: 0.1, windSpeed: 14, condition: "Partly Cloudy" },
  { date: "2026-06-03", tempHigh: 60, tempLow: 49, humidity: 85, precipitation: 0.4, windSpeed: 18, condition: "Rainy" },
  { date: "2026-06-04", tempHigh: 57, tempLow: 47, humidity: 90, precipitation: 0.8, windSpeed: 22, condition: "Stormy" },
  { date: "2026-06-05", tempHigh: 59, tempLow: 48, humidity: 88, precipitation: 0.3, windSpeed: 16, condition: "Rainy" },
  { date: "2026-06-06", tempHigh: 63, tempLow: 50, humidity: 80, precipitation: 0.0, windSpeed: 11, condition: "Cloudy" },
  { date: "2026-06-07", tempHigh: 67, tempLow: 52, humidity: 74, precipitation: 0.0, windSpeed: 9,  condition: "Partly Cloudy" },
  { date: "2026-06-08", tempHigh: 71, tempLow: 54, humidity: 68, precipitation: 0.0, windSpeed: 8,  condition: "Sunny" },
  { date: "2026-06-09", tempHigh: 73, tempLow: 55, humidity: 65, precipitation: 0.0, windSpeed: 7,  condition: "Sunny" },
  { date: "2026-06-10", tempHigh: 70, tempLow: 53, humidity: 70, precipitation: 0.0, windSpeed: 10, condition: "Partly Cloudy" },
  { date: "2026-06-11", tempHigh: 66, tempLow: 51, humidity: 76, precipitation: 0.0, windSpeed: 13, condition: "Foggy" },
  { date: "2026-06-12", tempHigh: 62, tempLow: 50, humidity: 82, precipitation: 0.2, windSpeed: 15, condition: "Cloudy" },
  { date: "2026-06-13", tempHigh: 64, tempLow: 51, humidity: 79, precipitation: 0.1, windSpeed: 12, condition: "Partly Cloudy" },
  { date: "2026-06-14", tempHigh: 69, tempLow: 53, humidity: 71, precipitation: 0.0, windSpeed: 9,  condition: "Sunny" },
  { date: "2026-06-15", tempHigh: 74, tempLow: 56, humidity: 63, precipitation: 0.0, windSpeed: 8,  condition: "Sunny" },
  { date: "2026-06-16", tempHigh: 76, tempLow: 57, humidity: 60, precipitation: 0.0, windSpeed: 7,  condition: "Sunny" },
  { date: "2026-06-17", tempHigh: 72, tempLow: 55, humidity: 66, precipitation: 0.0, windSpeed: 10, condition: "Partly Cloudy" },
  { date: "2026-06-18", tempHigh: 68, tempLow: 52, humidity: 73, precipitation: 0.0, windSpeed: 11, condition: "Foggy" },
  { date: "2026-06-19", tempHigh: 65, tempLow: 51, humidity: 77, precipitation: 0.0, windSpeed: 13, condition: "Cloudy" },
  { date: "2026-06-20", tempHigh: 61, tempLow: 49, humidity: 84, precipitation: 0.5, windSpeed: 19, condition: "Rainy" },
  { date: "2026-06-21", tempHigh: 58, tempLow: 47, humidity: 91, precipitation: 1.1, windSpeed: 24, condition: "Stormy" },
  { date: "2026-06-22", tempHigh: 60, tempLow: 48, humidity: 87, precipitation: 0.6, windSpeed: 20, condition: "Rainy" },
  { date: "2026-06-23", tempHigh: 63, tempLow: 50, humidity: 81, precipitation: 0.1, windSpeed: 14, condition: "Cloudy" },
  { date: "2026-06-24", tempHigh: 67, tempLow: 52, humidity: 75, precipitation: 0.0, windSpeed: 10, condition: "Partly Cloudy" },
  { date: "2026-06-25", tempHigh: 70, tempLow: 54, humidity: 69, precipitation: 0.0, windSpeed: 9,  condition: "Sunny" },
  { date: "2026-06-26", tempHigh: 73, tempLow: 55, humidity: 64, precipitation: 0.0, windSpeed: 8,  condition: "Sunny" },
  { date: "2026-06-27", tempHigh: 75, tempLow: 57, humidity: 61, precipitation: 0.0, windSpeed: 7,  condition: "Sunny" },
  { date: "2026-06-28", tempHigh: 71, tempLow: 54, humidity: 67, precipitation: 0.0, windSpeed: 10, condition: "Partly Cloudy" },
  { date: "2026-06-29", tempHigh: 66, tempLow: 51, humidity: 74, precipitation: 0.0, windSpeed: 12, condition: "Foggy" },
  { date: "2026-06-30", tempHigh: 69, tempLow: 53, humidity: 70, precipitation: 0.0, windSpeed: 11, condition: "Partly Cloudy" },
];

// Enrich each record with computed fields
export const weatherData = rawData.map((d) => ({
  ...d,
  id: d.date,
  tempAvg: Math.round((d.tempHigh + d.tempLow) / 2),
}));

// Aggregate stats
export function getStats() {
  const n = weatherData.length;
  const avgHigh = Math.round(weatherData.reduce((s, d) => s + d.tempHigh, 0) / n);
  const avgLow = Math.round(weatherData.reduce((s, d) => s + d.tempLow, 0) / n);
  const avgHumidity = Math.round(weatherData.reduce((s, d) => s + d.humidity, 0) / n);
  const totalPrecip = weatherData.reduce((s, d) => s + d.precipitation, 0).toFixed(1);
  const maxHigh = Math.max(...weatherData.map((d) => d.tempHigh));
  const minLow = Math.min(...weatherData.map((d) => d.tempLow));
  const avgWind = Math.round(weatherData.reduce((s, d) => s + d.windSpeed, 0) / n);
  const rainyDays = weatherData.filter((d) => d.precipitation > 0).length;

  const conditionCounts = weatherData.reduce((acc, d) => {
    acc[d.condition] = (acc[d.condition] || 0) + 1;
    return acc;
  }, {});

  return {
    avgHigh,
    avgLow,
    avgHumidity,
    totalPrecip: parseFloat(totalPrecip),
    maxHigh,
    minLow,
    avgWind,
    rainyDays,
    conditionCounts,
    totalDays: n,
  };
}

export { CONDITIONS };
