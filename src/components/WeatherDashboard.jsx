import React, { useState, useEffect } from 'react'
import { fetchWeatherData, seedWeatherData } from '../api/weather'
import { Cloud, Sun, CloudRain, CloudSnow, Wind, Droplet, ThermometerSun, ThermometerSnowflake } from 'lucide-react'

const getConditionIcon = (condition) => {
  switch (condition) {
    case 'Sunny': return <Sun className="w-6 h-6 text-yellow-500" />
    case 'Partly Cloudy': return <Cloud className="w-6 h-6 text-gray-400" />
    case 'Cloudy': return <Cloud className="w-6 h-6 text-gray-500" />
    case 'Rainy': return <CloudRain className="w-6 h-6 text-blue-500" />
    case 'Stormy': return <CloudRain className="w-6 h-6 text-purple-500" />
    case 'Snowy': return <CloudSnow className="w-6 h-6 text-blue-200" />
    default: return <Sun className="w-6 h-6 text-yellow-500" />
  }
}

const WeatherDashboard = () => {
  const [weatherData, setWeatherData] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [seeding, setSeeding] = useState(false)

  const loadData = async () => {
    setLoading(true)
    setError(null)
    try {
      const data = await fetchWeatherData()
      setWeatherData(data)
    } catch (err) {
      setError(err.message || 'Failed to load weather data')
    } finally {
      setLoading(false)
    }
  }

  const handleSeedData = async () => {
    setSeeding(true)
    setError(null)
    try {
      await seedWeatherData()
      await loadData()
    } catch (err) {
      setError(err.message || 'Failed to seed data')
    } finally {
      setSeeding(false)
    }
  }

  useEffect(() => {
    loadData()
  }, [])

  const city = weatherData.length > 0 ? weatherData[0].data.city : 'San Francisco'
  const avgHigh = weatherData.length > 0 
    ? (weatherData.reduce((sum, r) => sum + r.data.temperature_high, 0) / weatherData.length).toFixed(1)
    : 0
  const avgLow = weatherData.length > 0
    ? (weatherData.reduce((sum, r) => sum + r.data.temperature_low, 0) / weatherData.length).toFixed(1)
    : 0
  const totalPrecip = weatherData.length > 0
    ? weatherData.reduce((sum, r) => sum + r.data.precipitation, 0).toFixed(1)
    : 0

  return (
    <div className="min-h-screen bg-slate-50 p-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-slate-900">Weather Dashboard</h1>
            <p className="text-slate-600 mt-1">{city} - 7 Day Forecast</p>
          </div>
          <button
            onClick={handleSeedData}
            disabled={seeding}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 transition-colors"
          >
            {seeding ? 'Seeding...' : 'Load Sample Data'}
          </button>
        </div>

        {error && (
          <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg mb-6">
            {error}
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200">
            <div className="flex items-center gap-3">
              <ThermometerSun className="w-8 h-8 text-orange-500" />
              <div>
                <p className="text-sm text-slate-500">Avg High</p>
                <p className="text-2xl font-semibold text-slate-900">{avgHigh}°C</p>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200">
            <div className="flex items-center gap-3">
              <ThermometerSnowflake className="w-8 h-8 text-blue-500" />
              <div>
                <p className="text-sm text-slate-500">Avg Low</p>
                <p className="text-2xl font-semibold text-slate-900">{avgLow}°C</p>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200">
            <div className="flex items-center gap-3">
              <Droplet className="w-8 h-8 text-blue-400" />
              <div>
                <p className="text-sm text-slate-500">Total Precipitation</p>
                <p className="text-2xl font-semibold text-slate-900">{totalPrecip} mm</p>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200">
            <div className="flex items-center gap-3">
              <Wind className="w-8 h-8 text-teal-500" />
              <div>
                <p className="text-sm text-slate-500">Days Recorded</p>
                <p className="text-2xl font-semibold text-slate-900">{weatherData.length}</p>
              </div>
            </div>
          </div>
        </div>

        {loading ? (
          <div className="text-center py-12 text-slate-500">Loading weather data...</div>
        ) : weatherData.length === 0 ? (
          <div className="bg-white rounded-xl p-12 text-center border border-slate-200">
            <Cloud className="w-12 h-12 text-slate-300 mx-auto mb-4" />
            <p className="text-slate-600 mb-4">No weather data available</p>
            <button
              onClick={handleSeedData}
              disabled={seeding}
              className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50"
            >
              Load Sample Data
            </button>
          </div>
        ) : (
          <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
            <table className="w-full">
              <thead className="bg-slate-100 border-b border-slate-200">
                <tr>
                  <th className="text-left px-6 py-4 text-sm font-semibold text-slate-700">Date</th>
                  <th className="text-left px-6 py-4 text-sm font-semibold text-slate-700">Condition</th>
                  <th className="text-center px-6 py-4 text-sm font-semibold text-slate-700">High / Low</th>
                  <th className="text-center px-6 py-4 text-sm font-semibold text-slate-700">Humidity</th>
                  <th className="text-center px-6 py-4 text-sm font-semibold text-slate-700">Precipitation</th>
                  <th className="text-center px-6 py-4 text-sm font-semibold text-slate-700">Wind</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                {weatherData.map((record) => {
                  const d = record.data
                  return (
                    <tr key={record.id} className="hover:bg-slate-50 transition-colors">
                      <td className="px-6 py-4 text-slate-900 font-medium">{d.date}</td>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-2">
                          {getConditionIcon(d.condition)}
                          <span className="text-slate-700">{d.condition}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-center">
                        <span className="text-orange-600 font-semibold">{d.temperature_high}°</span>
                        <span className="text-slate-400 mx-1">/</span>
                        <span className="text-blue-600 font-semibold">{d.temperature_low}°</span>
                      </td>
                      <td className="px-6 py-4 text-center text-slate-700">{d.humidity}%</td>
                      <td className="px-6 py-4 text-center text-slate-700">{d.precipitation} mm</td>
                      <td className="px-6 py-4 text-center text-slate-700">{d.wind_speed} km/h</td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  )
}

export default WeatherDashboard