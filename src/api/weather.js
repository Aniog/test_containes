// All weather API calls go through the Vite proxy → http://localhost:8081

export async function fetchWeatherData() {
  const res = await fetch('/api/weather')
  if (!res.ok) throw new Error(`Failed to fetch weather data: ${res.status}`)
  return res.json()
}

export async function fetchWeatherByDate(date) {
  const res = await fetch(`/api/weather/${date}`)
  if (!res.ok) throw new Error(`Failed to fetch weather for ${date}: ${res.status}`)
  return res.json()
}
