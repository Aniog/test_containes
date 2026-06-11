import { useState, useEffect, useCallback } from 'react'
import { format, parseISO } from 'date-fns'
import { Thermometer, Droplets, Wind, Sun, RefreshCw, MapPin } from 'lucide-react'
import { fetchWeatherRecords } from '../api/weather.js'
import StatCard from '../components/dashboard/StatCard.jsx'
import WeatherTable from '../components/dashboard/WeatherTable.jsx'
import { TemperatureChart, PrecipitationChart, HumidityWindChart } from '../components/dashboard/WeatherCharts.jsx'
import conditionConfig from '../components/dashboard/conditionConfig.js'

const toChartData = (records) =>
  records.map((r) => ({
    label: format(parseISO(r.data.date), 'MMM d'),
    temp_high: r.data.temp_high,
    temp_low: r.data.temp_low,
    humidity: r.data.humidity,
    wind_speed: r.data.wind_speed,
    precipitation: r.data.precipitation ?? 0,
  }))

export default function WeatherDashboard() {
  const [records, setRecords] = useState([])
  const [status, setStatus] = useState('loading')
  const [lastRefresh, setLastRefresh] = useState(null)

  const load = useCallback(async () => {
    setStatus('loading')
    try {
      const rows = await fetchWeatherRecords()
      console.log('Fetched weather records:', rows.length)
      setRecords(rows)
      setLastRefresh(new Date())
      setStatus('ready')
    } catch (err) {
      console.error('Failed to fetch weather data:', err)
      setStatus('error')
    }
  }, [])

  useEffect(() => { load() }, [load])

  const latest = records.length > 0 ? records[records.length - 1].data : null
  const prev = records.length > 1 ? records[records.length - 2].data : null
  const chartData = toChartData(records)

  const avgHigh = records.length > 0
    ? (records.reduce((s, r) => s + r.data.temp_high, 0) / records.length).toFixed(1)
    : '--'
  const avgHumidity = records.length > 0
    ? Math.round(records.reduce((s, r) => s + r.data.humidity, 0) / records.length)
    : '--'
  const totalPrecip = records.length > 0
    ? records.reduce((s, r) => s + (r.data.precipitation ?? 0), 0).toFixed(1)
    : '--'

  const latestCfg = latest ? (conditionConfig[latest.condition] || {}) : {}

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100">
      {/* Header */}
      <header className="border-b border-slate-700 bg-slate-800/60 backdrop-blur-sm sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-sky-500/20 flex items-center justify-center">
              <Sun className="w-5 h-5 text-sky-400" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-slate-100">Weather Dashboard</h1>
              <div className="flex items-center gap-1 text-xs text-slate-400">
                <MapPin className="w-3 h-3" />
                <span>San Francisco, CA</span>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-3">
            {lastRefresh && (
              <span className="text-xs text-slate-500 hidden sm:block">
                Updated {format(lastRefresh, 'h:mm a')}
              </span>
            )}
            <button
              onClick={load}
              disabled={status === 'loading'}
              className="flex items-center gap-2 text-sm text-slate-300 hover:text-sky-400 bg-slate-700 hover:bg-slate-600 px-3 py-1.5 rounded-lg transition-colors disabled:opacity-50"
            >
              <RefreshCw className={`w-4 h-4 ${status === 'loading' ? 'animate-spin' : ''}`} />
              <span className="hidden sm:inline">Refresh</span>
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-6 space-y-6">
        {status === 'error' && (
          <div className="bg-red-900/30 border border-red-700 text-red-300 rounded-xl p-4 text-sm">
            Failed to load weather data. Please try refreshing.
          </div>
        )}

        {/* Today's highlight */}
        {latest && (
          <div className="bg-gradient-to-r from-slate-800 to-slate-800/60 rounded-xl border border-slate-700 p-6 flex flex-col sm:flex-row items-start sm:items-center gap-4 shadow-lg">
            <div className="text-5xl">{latestCfg.icon}</div>
            <div className="flex-1">
              <p className="text-xs text-slate-400 uppercase tracking-wide mb-1">
                {format(parseISO(latest.date), 'EEEE, MMMM d, yyyy')} · Latest Reading
              </p>
              <div className="flex items-baseline gap-3">
                <span className="text-5xl font-bold text-slate-100">{latest.temp_high}°</span>
                <span className="text-2xl text-slate-400">{latest.temp_low}°</span>
                <span className={`text-lg font-medium ${latestCfg.color}`}>{latest.condition}</span>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-4 text-center">
              <div>
                <p className="text-xs text-slate-400">Humidity</p>
                <p className="text-lg font-semibold text-slate-100">{latest.humidity}%</p>
              </div>
              <div>
                <p className="text-xs text-slate-400">Wind</p>
                <p className="text-lg font-semibold text-slate-100">{latest.wind_speed}<span className="text-xs text-slate-400"> km/h</span></p>
              </div>
              <div>
                <p className="text-xs text-slate-400">UV Index</p>
                <p className="text-lg font-semibold text-slate-100">{latest.uv_index}</p>
              </div>
            </div>
          </div>
        )}

        {/* Stat cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <StatCard
            label="Avg High Temp"
            value={avgHigh}
            unit="°C"
            icon={Thermometer}
            iconColor="text-amber-400"
            trend={latest && prev ? latest.temp_high - prev.temp_high : undefined}
          />
          <StatCard
            label="Avg Humidity"
            value={avgHumidity}
            unit="%"
            icon={Droplets}
            iconColor="text-sky-400"
            trend={latest && prev ? latest.humidity - prev.humidity : undefined}
          />
          <StatCard
            label="Total Precip."
            value={totalPrecip}
            unit="mm"
            icon={Droplets}
            iconColor="text-blue-400"
          />
          <StatCard
            label="Days Tracked"
            value={records.length}
            unit="days"
            icon={Sun}
            iconColor="text-emerald-400"
          />
        </div>

        {/* Charts */}
        {status !== 'loading' && records.length > 0 && (
          <>
            <TemperatureChart data={chartData} />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <PrecipitationChart data={chartData} />
              <HumidityWindChart data={chartData} />
            </div>
          </>
        )}

        {/* Table */}
        {status === 'loading' ? (
          <div className="bg-slate-800 rounded-xl border border-slate-700 p-12 flex items-center justify-center">
            <div className="flex flex-col items-center gap-3 text-slate-400">
              <RefreshCw className="w-8 h-8 animate-spin text-sky-400" />
              <span className="text-sm">Loading weather data…</span>
            </div>
          </div>
        ) : records.length > 0 ? (
          <WeatherTable records={records} />
        ) : (
          <div className="bg-slate-800 rounded-xl border border-slate-700 p-12 text-center text-slate-400 text-sm">
            No weather records found.
          </div>
        )}
      </main>
    </div>
  )
}
