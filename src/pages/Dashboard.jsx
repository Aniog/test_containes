import { useState, useEffect } from "react"
import { Thermometer, Droplets, Wind, CloudRain, Sun, RefreshCw } from "lucide-react"
import { format, parseISO } from "date-fns"
import StatCard from "../components/dashboard/StatCard"
import TemperatureChart from "../components/dashboard/TemperatureChart"
import HumidityChart from "../components/dashboard/HumidityChart"
import WeatherTable from "../components/dashboard/WeatherTable"
import { fetchWeatherData } from "../api/weather"

const Dashboard = () => {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [lastUpdated, setLastUpdated] = useState(null)

  const loadData = async () => {
    setLoading(true)
    setError(null)
    console.log("Fetching weather data from API…")
    const rows = await fetchWeatherData()
    // API returns newest-first; reverse for chronological order in charts
    const sorted = [...rows].sort((a, b) => a.date.localeCompare(b.date))
    console.log(`Loaded ${sorted.length} weather records from database.`)
    setData(sorted)
    setLastUpdated(new Date())
    setLoading(false)
  }

  useEffect(() => { loadData() }, [])

  if (loading) {
    return (
      <div className="min-h-screen bg-slate-900 flex items-center justify-center">
        <div className="text-center space-y-3">
          <RefreshCw className="w-8 h-8 text-sky-400 animate-spin mx-auto" />
          <p className="text-slate-400 text-sm">Loading weather data…</p>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="min-h-screen bg-slate-900 flex items-center justify-center">
        <div className="text-center space-y-3 max-w-sm">
          <p className="text-red-400 font-medium">Failed to load data</p>
          <p className="text-slate-400 text-sm">{error}</p>
          <button
            onClick={loadData}
            className="px-4 py-2 bg-sky-600 hover:bg-sky-500 text-white rounded-lg text-sm transition-colors"
          >
            Retry
          </button>
        </div>
      </div>
    )
  }

  const today = data[data.length - 1]
  const avgHigh = Math.round(data.reduce((s, d) => s + d.temp_high, 0) / data.length)
  const avgHumidity = Math.round(data.reduce((s, d) => s + d.humidity, 0) / data.length)
  const totalPrecip = data.reduce((s, d) => s + d.precipitation, 0).toFixed(2)
  const maxWind = Math.max(...data.map((d) => d.wind_speed))

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100">
      {/* Header */}
      <header className="border-b border-slate-700 bg-slate-800/60 backdrop-blur-sm sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Sun className="w-6 h-6 text-amber-400" />
            <div>
              <h1 className="text-xl font-bold text-slate-100">San Francisco Weather</h1>
              <p className="text-xs text-slate-400">
                San Francisco, CA · Last {data.length} days · Live from database
              </p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <button
              onClick={loadData}
              title="Refresh data"
              className="text-slate-400 hover:text-sky-400 transition-colors"
            >
              <RefreshCw className="w-4 h-4" />
            </button>
            <div className="text-right">
              <p className="text-sm font-medium text-slate-200">Today</p>
              <p className="text-xs text-slate-400">{format(parseISO(today.date), "MMMM d, yyyy")}</p>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 py-6 space-y-6">
        {/* Today's highlight */}
        <div className="rounded-xl border border-slate-700 bg-gradient-to-r from-sky-900/40 to-slate-800 p-5 shadow-lg flex flex-col sm:flex-row sm:items-center gap-4">
          <div className="flex-1">
            <p className="text-xs font-medium text-slate-400 uppercase tracking-wide mb-1">Today's Conditions</p>
            <p className="text-4xl font-bold text-slate-100">{today.temp_high}°F</p>
            <p className="text-slate-400 text-sm mt-1">Low: {today.temp_low}°F · {today.condition}</p>
          </div>
          <div className="grid grid-cols-3 gap-4 sm:gap-6 text-center">
            <div>
              <p className="text-xs text-slate-400 mb-1">Humidity</p>
              <p className="text-lg font-semibold text-sky-400">{today.humidity}%</p>
            </div>
            <div>
              <p className="text-xs text-slate-400 mb-1">Wind</p>
              <p className="text-lg font-semibold text-teal-400">{today.wind_speed} mph</p>
            </div>
            <div>
              <p className="text-xs text-slate-400 mb-1">Precip.</p>
              <p className="text-lg font-semibold text-blue-400">{today.precipitation} in</p>
            </div>
          </div>
        </div>

        {/* Stat cards */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <StatCard
            label="Avg High Temp"
            value={avgHigh}
            unit="°F"
            icon={Thermometer}
            accent="text-amber-400"
            sub={`Period avg over ${data.length} days`}
          />
          <StatCard
            label="Avg Humidity"
            value={avgHumidity}
            unit="%"
            icon={Droplets}
            accent="text-sky-400"
            sub="Relative humidity"
          />
          <StatCard
            label="Total Precip."
            value={totalPrecip}
            unit="in"
            icon={CloudRain}
            accent="text-blue-400"
            sub="Cumulative rainfall"
          />
          <StatCard
            label="Peak Wind"
            value={maxWind}
            unit="mph"
            icon={Wind}
            accent="text-teal-400"
            sub="Highest recorded"
          />
        </div>

        {/* Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <TemperatureChart data={data} />
          <HumidityChart data={data} />
        </div>

        {/* Table */}
        <WeatherTable data={[...data].reverse()} />

        {/* Footer */}
        {lastUpdated && (
          <p className="text-center text-xs text-slate-600 pb-4">
            Data fetched from SQLite database · Last updated {format(lastUpdated, "h:mm:ss a")}
          </p>
        )}
      </main>
    </div>
  )
}

export default Dashboard
