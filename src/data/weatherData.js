// Sample weather data for San Francisco — last 30 days
// Date: 2026-06-29 (today), going back 29 days

const generateWeatherData = () => {
  const city = "San Francisco";
  const conditions = [
    "Sunny",
    "Partly Cloudy",
    "Cloudy",
    "Rainy",
    "Foggy",
    "Windy",
    "Thunderstorm",
    "Clear",
  ];

  const conditionDetails = {
    Sunny:        { icon: "☀️",  humidity: [40, 55], wind: [5, 15],  precip: 0 },
    "Partly Cloudy": { icon: "⛅", humidity: [50, 65], wind: [8, 20],  precip: 0 },
    Cloudy:       { icon: "☁️",  humidity: [60, 75], wind: [10, 25], precip: 0.1 },
    Rainy:        { icon: "🌧️", humidity: [75, 95], wind: [15, 30], precip: 0.8 },
    Foggy:        { icon: "🌫️", humidity: [80, 95], wind: [3, 10],  precip: 0.2 },
    Windy:        { icon: "💨",  humidity: [45, 60], wind: [25, 45], precip: 0 },
    Thunderstorm: { icon: "⛈️", humidity: [85, 99], wind: [30, 55], precip: 1.5 },
    Clear:        { icon: "🌙",  humidity: [35, 50], wind: [3, 12],  precip: 0 },
  };

  const rand = (min, max) => Math.round((Math.random() * (max - min) + min) * 10) / 10;
  const randInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

  const records = [];
  const today = new Date("2026-06-29");

  for (let i = 29; i >= 0; i--) {
    const date = new Date(today);
    date.setDate(today.getDate() - i);
    const dateStr = date.toISOString().split("T")[0];

    const condition = conditions[randInt(0, conditions.length - 1)];
    const detail = conditionDetails[condition];

    const highTemp = rand(55, 78);
    const lowTemp = rand(45, highTemp - 5);
    const avgTemp = Math.round(((highTemp + lowTemp) / 2) * 10) / 10;

    const humidity = randInt(detail.humidity[0], detail.humidity[1]);
    const windSpeed = rand(detail.wind[0], detail.wind[1]);
    const precipitation = detail.precip > 0
      ? Math.round(detail.precip * rand(0.5, 2.0) * 100) / 100
      : 0;
    const uvIndex = condition === "Sunny" || condition === "Clear"
      ? randInt(4, 9)
      : randInt(1, 4);
    const visibility = condition === "Foggy"
      ? rand(0.5, 3)
      : condition === "Rainy" || condition === "Thunderstorm"
      ? rand(3, 7)
      : rand(8, 15);
    const pressure = rand(1005, 1025);
    const dewPoint = Math.round((avgTemp - ((100 - humidity) / 5)) * 10) / 10;

    records.push({
      id: i + 1,
      city,
      date: dateStr,
      condition,
      conditionIcon: detail.icon,
      highTempF: highTemp,
      lowTempF: lowTemp,
      avgTempF: avgTemp,
      humidity,
      windSpeedMph: windSpeed,
      precipitationIn: precipitation,
      uvIndex,
      visibilityMi: Math.round(visibility * 10) / 10,
      pressureHpa: Math.round(pressure * 10) / 10,
      dewPointF: dewPoint,
    });
  }

  return records;
};

export const weatherData = generateWeatherData();
export const cityName = "San Francisco";
