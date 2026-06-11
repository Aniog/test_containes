import { useState, useEffect } from 'react'
import { Thermometer, Droplets, Wind, CloudRain, RefreshCw } from 'lucide-react'
import StatCard from './StatCard'
import TemperatureChart from './TemperatureChart'
import PrecipitationChart from './PrecipitationChart'
import WeatherTable from './WeatherTable'
import { fetchWeatherRecords } from '../../api/weather'

const avg = (arr, key) => Math.round(arr.reduce((s, d) => s + d[key], 0) / arr.length)
const max = (arr, key) => Math.max(...arr.map((d) => d[key]))
const sum = (arr, key) => Math.round(arr.reduce((s, d) => s + d[key], 0))

const WeatherDashboard = () => {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [lastUpdated, setLastUpdated] = useState(null)

  const loadData = async () => {
    setLoading(true)
    setError(null)
    try {
      const records = await fetchWeatherRecords('Tokyo')
      setData(records)
      setLastUpdated(new Date())
    } catch (err) {
      console.error('[WeatherDashboard] Failed to load data:', err)
      setError(err.message || 'Failed to load weather data')
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    loadData()
  }, [])

  if (loading) {
    return (
      <div className="min-h-screen bg-slate-100 flex items-center justify-center">
        <div className="flex flex-col items-center gap-3">
          <div className="w-10 h-10 border-4 border-blue-400 border-t-transparent rounded-full animate-spin" />
          <p className="text-slate-500 text-base font-medium">Loading weather data…</p>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="min-h-screen bg-slate-100 flex items-center justify-center">
        <div className="bg-white rounded-2xl shadow-sm p-8 max-w-md text-center">
          <p className="text-red-500 font-semibold text-lg mb-2">Failed to load data</p>
          <p className="text-slate-500 text-sm mb-4">{error}</p>
          <button
            onClick={loadData}
            className="bg-blue-500 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-600 transition-colors"
          >
            Retry
          </button>
        </div>
      </div>
    )
  }

  const avgTemp = data.length ? avg(data, 'temp_avg') : 0
  const avgHumidity = data.length ? avg(data, 'humidity') : 0
  const maxWind = data.length ? max(data, 'wind_speed') : 0
  const totalPrecip = data.length ? sum(data, 'precipitation') : 0

  return (
    <div className="min-h-screen bg-slate-100">
      {/* Header */}
      <header className="bg-white border-b border-slate-200 px-6 py-5 flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-slate-800">🌤 Weather Dashboard</h1>
          <p className="text-sm text-slate-500 mt-0.5">
            Tokyo, Japan
            {lastUpdated && (
              <span className="ml-2 text-slate-400">
                · Updated {lastUpdated.toLocaleTimeString()}
              </span>
            )}
          </p>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-xs bg-blue-50 text-blue-600 font-semibold px-3 py-1.5 rounded-full border border-blue-100">
            {data.length} days of data
          </span>
          <button
            onClick={loadData}
            className="p-2 rounded-lg text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition-colors"
            title="Refresh data"
          >
            <RefreshCw className="w-4 h-4" />
          </button>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 md:px-6 py-8 space-y-6">
        {/* Stat Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <StatCard label="Avg Temperature" value={avgTemp}     unit="°C"   icon={Thermometer} color="bg-orange-400" bg="bg-white" />
          <StatCard label="Avg Humidity"    value={avgHumidity} unit="%"    icon={Droplets}    color="bg-blue-400"   bg="bg-white" />
          <StatCard label="Max Wind Speed"  value={maxWind}     unit="km/h" icon={Wind}        color="bg-teal-400"   bg="bg-white" />
          <StatCard label="Total Precip."   value={totalPrecip} unit="mm"   icon={CloudRain}   color="bg-indigo-400" bg="bg-white" />
        </div>

        {/* Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <TemperatureChart data={data} />
          <PrecipitationChart data={data} />
        </div>

        {/* Table */}
        <WeatherTable data={data} />
      </main>
    </div>
  )
}

export default WeatherDashboard
