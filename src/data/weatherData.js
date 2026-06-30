// Sample weather data for San Francisco — 30 days
export const CITY = "San Francisco";
export const CITY_STATE = "California, USA";

export const weatherData = [
  { date: "2026-06-01", high: 68, low: 54, humidity: 72, wind: 12, condition: "Partly Cloudy", precipitation: 0.0, uv: 6 },
  { date: "2026-06-02", high: 65, low: 52, humidity: 78, wind: 15, condition: "Cloudy", precipitation: 0.1, uv: 3 },
  { date: "2026-06-03", high: 61, low: 50, humidity: 85, wind: 18, condition: "Rainy", precipitation: 0.6, uv: 2 },
  { date: "2026-06-04", high: 59, low: 49, humidity: 88, wind: 20, condition: "Rainy", precipitation: 1.2, uv: 1 },
  { date: "2026-06-05", high: 63, low: 51, humidity: 80, wind: 14, condition: "Partly Cloudy", precipitation: 0.2, uv: 4 },
  { date: "2026-06-06", high: 67, low: 53, humidity: 74, wind: 11, condition: "Sunny", precipitation: 0.0, uv: 7 },
  { date: "2026-06-07", high: 71, low: 55, humidity: 68, wind: 9,  condition: "Sunny", precipitation: 0.0, uv: 8 },
  { date: "2026-06-08", high: 73, low: 57, humidity: 65, wind: 8,  condition: "Sunny", precipitation: 0.0, uv: 9 },
  { date: "2026-06-09", high: 70, low: 56, humidity: 70, wind: 10, condition: "Partly Cloudy", precipitation: 0.0, uv: 7 },
  { date: "2026-06-10", high: 66, low: 53, humidity: 76, wind: 13, condition: "Cloudy", precipitation: 0.0, uv: 4 },
  { date: "2026-06-11", high: 62, low: 51, humidity: 82, wind: 16, condition: "Rainy", precipitation: 0.8, uv: 2 },
  { date: "2026-06-12", high: 60, low: 50, humidity: 87, wind: 19, condition: "Rainy", precipitation: 1.5, uv: 1 },
  { date: "2026-06-13", high: 64, low: 52, humidity: 79, wind: 13, condition: "Partly Cloudy", precipitation: 0.1, uv: 5 },
  { date: "2026-06-14", high: 68, low: 54, humidity: 73, wind: 10, condition: "Sunny", precipitation: 0.0, uv: 7 },
  { date: "2026-06-15", high: 72, low: 56, humidity: 67, wind: 8,  condition: "Sunny", precipitation: 0.0, uv: 9 },
  { date: "2026-06-16", high: 75, low: 58, humidity: 63, wind: 7,  condition: "Sunny", precipitation: 0.0, uv: 10 },
  { date: "2026-06-17", high: 74, low: 57, humidity: 64, wind: 9,  condition: "Sunny", precipitation: 0.0, uv: 9 },
  { date: "2026-06-18", high: 71, low: 55, humidity: 69, wind: 11, condition: "Partly Cloudy", precipitation: 0.0, uv: 7 },
  { date: "2026-06-19", high: 67, low: 53, humidity: 75, wind: 14, condition: "Cloudy", precipitation: 0.0, uv: 4 },
  { date: "2026-06-20", high: 63, low: 51, humidity: 81, wind: 17, condition: "Rainy", precipitation: 0.4, uv: 2 },
  { date: "2026-06-21", high: 61, low: 50, humidity: 86, wind: 21, condition: "Rainy", precipitation: 1.1, uv: 1 },
  { date: "2026-06-22", high: 65, low: 52, humidity: 78, wind: 15, condition: "Partly Cloudy", precipitation: 0.2, uv: 5 },
  { date: "2026-06-23", high: 69, low: 54, humidity: 71, wind: 11, condition: "Sunny", precipitation: 0.0, uv: 8 },
  { date: "2026-06-24", high: 73, low: 56, humidity: 66, wind: 9,  condition: "Sunny", precipitation: 0.0, uv: 9 },
  { date: "2026-06-25", high: 76, low: 59, humidity: 61, wind: 7,  condition: "Sunny", precipitation: 0.0, uv: 10 },
  { date: "2026-06-26", high: 74, low: 58, humidity: 63, wind: 8,  condition: "Sunny", precipitation: 0.0, uv: 9 },
  { date: "2026-06-27", high: 70, low: 55, humidity: 70, wind: 12, condition: "Partly Cloudy", precipitation: 0.0, uv: 6 },
  { date: "2026-06-28", high: 66, low: 53, humidity: 76, wind: 14, condition: "Cloudy", precipitation: 0.0, uv: 4 },
  { date: "2026-06-29", high: 64, low: 52, humidity: 80, wind: 16, condition: "Partly Cloudy", precipitation: 0.1, uv: 5 },
  { date: "2026-06-30", high: 68, low: 54, humidity: 74, wind: 12, condition: "Sunny", precipitation: 0.0, uv: 7 },
];

export const conditionMeta = {
  Sunny:          { icon: "sun",         color: "text-amber-500",  bg: "bg-amber-50",  border: "border-amber-200" },
  "Partly Cloudy":{ icon: "cloud-sun",   color: "text-sky-500",    bg: "bg-sky-50",    border: "border-sky-200"   },
  Cloudy:         { icon: "cloud",       color: "text-slate-400",  bg: "bg-slate-50",  border: "border-slate-200" },
  Rainy:          { icon: "cloud-rain",  color: "text-blue-500",   bg: "bg-blue-50",   border: "border-blue-200"  },
};
