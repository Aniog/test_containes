import React, { useState, useEffect } from 'react'
import { fetchWeatherData } from '../../api/weather'
import { CloudSun, Cloud, CloudRain, Sun, Wind, Droplets, Thermometer } from 'lucide-react'

const getWeatherIcon = (conditions) => {
  switch (conditions) {
    case 'sunny':
      return <Sun className="w-8 h-8 text-yellow-500" />
    case 'partly_cloudy':
      return <CloudSun className="w-8 h-8 text-blue-400" />
    case 'cloudy':
      return <Cloud className="w-8 h-8 text-gray-400" />
    case 'rainy':
      return <CloudRain className="w-8 h-8 text-blue-500" />
    default:
      return <CloudSun className="w-8 h-8 text-gray-400" />
  }
}

const formatDate = (dateString) => {
  const date = new Date(dateString)
  return date.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' })
}

const WeatherCard = ({ weather }) => {
  const { date, temperature_high, temperature_low, conditions, humidity, wind_speed, precipitation_chance } = weather

  return (
    <div className="bg-white rounded-lg shadow-md p-4 border border-gray-100 hover:shadow-lg transition-shadow">
      <div className="flex items-center justify-between mb-3">
        <span className="text-sm font-medium text-gray-600">{formatDate(date)}</span>
        {getWeatherIcon(conditions)}
      </div>
      
      <div className="flex items-baseline gap-2 mb-3">
        <span className="text-3xl font-bold text-gray-800">{temperature_high}°</span>
        <span className="text-lg text-gray-400">/ {temperature_low}°C</span>
      </div>

      <div className="space-y-2 text-sm">
        <div className="flex items-center gap-2 text-gray-600">
          <Droplets className="w-4 h-4" />
          <span>Humidity: {humidity}%</span>
        </div>
        <div className="flex items-center gap-2 text-gray-600">
          <Wind className="w-4 h-4" />
          <span>Wind: {wind_speed} km/h</span>
        </div>
        <div className="flex items-center gap-2 text-gray-600">
          <Thermometer className="w-4 h-4" />
          <span>Rain: {precipitation_chance}%</span>
        </div>
      </div>

      <div className="mt-3 pt-3 border-t border-gray-100">
        <span className="inline-block px-2 py-1 text-xs font-medium bg-blue-100 text-blue-700 rounded capitalize">
          {conditions.replace('_', ' ')}
        </span>
      </div>
    </div>
  )
}

const WeatherDashboard = () => {
  const [weatherData, setWeatherData] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const loadWeatherData = async () => {
      try {
        setLoading(true)
        const data = await fetchWeatherData()
        setWeatherData(data)
      } catch (err) {
        console.error('Error fetching weather data:', err)
        setError(err.message || 'Failed to load weather data')
      } finally {
        setLoading(false)
      }
    }

    loadWeatherData()
  }, [])

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading weather data...</p>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center p-6 bg-white rounded-lg shadow-md">
          <p className="text-red-500 font-medium">Error: {error}</p>
        </div>
      </div>
    )
  }

  const city = weatherData.length > 0 ? weatherData[0].data.city : 'San Francisco'
  const avgHigh = Math.round(weatherData.reduce((sum, d) => sum + d.data.temperature_high, 0) / weatherData.length)
  const avgLow = Math.round(weatherData.reduce((sum, d) => sum + d.data.temperature_low, 0) / weatherData.length)
  const avgHumidity = Math.round(weatherData.reduce((sum, d) => sum + d.data.humidity, 0) / weatherData.length)

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-6xl mx-auto">
        <header className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Weather Dashboard</h1>
          <p className="text-gray-600">7-Day Forecast for {city}</p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg p-6 text-white">
            <p className="text-blue-100 text-sm mb-1">Average High</p>
            <p className="text-4xl font-bold">{avgHigh}°C</p>
          </div>
          <div className="bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-lg p-6 text-white">
            <p className="text-indigo-100 text-sm mb-1">Average Low</p>
            <p className="text-4xl font-bold">{avgLow}°C</p>
          </div>
          <div className="bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-lg p-6 text-white">
            <p className="text-cyan-100 text-sm mb-1">Average Humidity</p>
            <p className="text-4xl font-bold">{avgHumidity}%</p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {weatherData.map((weather) => (
            <WeatherCard key={weather.id} weather={weather.data} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default WeatherDashboard