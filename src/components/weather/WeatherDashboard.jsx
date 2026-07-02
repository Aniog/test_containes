import React, { useState, useEffect } from 'react'
import { fetchWeatherData, getSchemaData } from '@/api/weather'
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

const formatDate = (dateStr) => {
  const date = new Date(dateStr)
  return date.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' })
}

const WeatherCard = ({ data }) => {
  const weather = getSchemaData(data)
  
  return (
    <div className="bg-white rounded-lg shadow-md p-4 border border-gray-100 hover:shadow-lg transition-shadow">
      <div className="flex items-center justify-between mb-3">
        <span className="text-sm font-medium text-gray-500">{formatDate(weather.date)}</span>
        {getWeatherIcon(weather.conditions)}
      </div>
      
      <div className="flex items-baseline gap-2 mb-3">
        <span className="text-3xl font-bold text-gray-800">{Math.round(weather.temperature_high)}°</span>
        <span className="text-lg text-gray-400">/ {Math.round(weather.temperature_low)}°</span>
      </div>
      
      <p className="text-sm text-gray-600 capitalize mb-3">{weather.conditions.replace('_', ' ')}</p>
      
      <div className="grid grid-cols-3 gap-2 text-xs text-gray-500">
        <div className="flex items-center gap-1">
          <Droplets className="w-3 h-3" />
          <span>{weather.humidity}%</span>
        </div>
        <div className="flex items-center gap-1">
          <Wind className="w-3 h-3" />
          <span>{weather.wind_speed} mph</span>
        </div>
        <div className="flex items-center gap-1">
          <Thermometer className="w-3 h-3" />
          <span>{weather.precipitation_chance}%</span>
        </div>
      </div>
    </div>
  )
}

const WeatherDashboard = () => {
  const [weatherData, setWeatherData] = useState([])
  const [status, setStatus] = useState('idle')
  const [error, setError] = useState(null)

  const loadWeatherData = async () => {
    setStatus('loading')
    setError(null)
    try {
      const data = await fetchWeatherData('San Francisco')
      setWeatherData(data)
      setStatus('ready')
    } catch (err) {
      console.error('Error loading weather data:', err)
      setError(err.message || 'Failed to load weather data')
      setStatus('error')
    }
  }

  useEffect(() => {
    loadWeatherData()
  }, [])

  if (status === 'loading') {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-gray-500">Loading weather data...</div>
      </div>
    )
  }

  if (status === 'error') {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-red-500">Error: {error}</div>
      </div>
    )
  }

  const currentDay = weatherData[0]
  const currentWeather = currentDay ? getSchemaData(currentDay) : null

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-6xl mx-auto">
        <header className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800">Weather Dashboard</h1>
          <p className="text-gray-500 mt-1">San Francisco, CA</p>
        </header>

        {currentWeather && (
          <div className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl p-6 text-white mb-8 shadow-lg">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-blue-100 text-sm">Today's Weather</p>
                <div className="flex items-baseline gap-3 mt-2">
                  <span className="text-5xl font-bold">{Math.round(currentWeather.temperature_high)}°F</span>
                  <span className="text-blue-100">/ {Math.round(currentWeather.temperature_low)}°F</span>
                </div>
                <p className="text-blue-100 mt-2 capitalize">{currentWeather.conditions.replace('_', ' ')}</p>
              </div>
              <div className="text-6xl">
                {getWeatherIcon(currentWeather.conditions)}
              </div>
            </div>
            
            <div className="grid grid-cols-3 gap-4 mt-6 pt-6 border-t border-blue-400">
              <div>
                <p className="text-blue-100 text-xs">Humidity</p>
                <p className="font-semibold">{currentWeather.humidity}%</p>
              </div>
              <div>
                <p className="text-blue-100 text-xs">Wind</p>
                <p className="font-semibold">{currentWeather.wind_speed} mph</p>
              </div>
              <div>
                <p className="text-blue-100 text-xs">Precipitation</p>
                <p className="font-semibold">{currentWeather.precipitation_chance}%</p>
              </div>
            </div>
          </div>
        )}

        <h2 className="text-xl font-semibold text-gray-800 mb-4">7-Day Forecast</h2>
        
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
          {weatherData.map((item) => (
            <WeatherCard key={item.id} data={item} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default WeatherDashboard