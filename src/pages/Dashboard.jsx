import { Thermometer, Droplets, Wind, CloudRain, Sun, TrendingUp } from "lucide-react"
import { format, parseISO } from "date-fns"
import StatCard from "../components/dashboard/StatCard"
import TemperatureChart from "../components/dashboard/TemperatureChart"
import HumidityChart from "../components/dashboard/HumidityChart"
import WeatherTable from "../components/dashboard/WeatherTable"

// Mock data — will be replaced with live DB data after approval
const MOCK_DATA = [
  { id: 1,  date: "2026-05-27", condition: "Sunny",         temp_high: 78, temp_low: 58, humidity: 42, wind_speed: 8,  precipitation: 0.00 },
  { id: 2,  date: "2026-05-28", condition: "Partly Cloudy", temp_high: 74, temp_low: 55, humidity: 51, wind_speed: 12, precipitation: 0.00 },
  { id: 3,  date: "2026-05-29", condition: "Cloudy",        temp_high: 68, temp_low: 54, humidity: 63, wind_speed: 14, precipitation: 0.05 },
  { id: 4,  date: "2026-05-30", condition: "Rainy",         temp_high: 62, temp_low: 50, humidity: 82, wind_speed: 18, precipitation: 0.72 },
  { id: 5,  date: "2026-05-31", condition: "Rainy",         temp_high: 60, temp_low: 48, humidity: 88, wind_speed: 22, precipitation: 1.10 },
  { id: 6,  date: "2026-06-01", condition: "Stormy",        temp_high: 57, temp_low: 46, humidity: 91, wind_speed: 31, precipitation: 1.85 },
  { id: 7,  date: "2026-06-02", condition: "Cloudy",        temp_high: 63, temp_low: 49, humidity: 74, wind_speed: 16, precipitation: 0.20 },
  { id: 8,  date: "2026-06-03", condition: "Partly Cloudy", temp_high: 69, temp_low: 52, humidity: 60, wind_speed: 10, precipitation: 0.00 },
  { id: 9,  date: "2026-06-04", condition: "Sunny",         temp_high: 75, temp_low: 56, humidity: 48, wind_speed: 7,  precipitation: 0.00 },
  { id: 10, date: "2026-06-05", condition: "Sunny",         temp_high: 80, temp_low: 59, humidity: 40, wind_speed: 6,  precipitation: 0.00 },
  { id: 11, date: "2026-06-06", condition: "Partly Cloudy", temp_high: 77, temp_low: 57, humidity: 52, wind_speed: 9,  precipitation: 0.00 },
  { id: 12, date: "2026-06-07", condition: "Foggy",         temp_high: 65, temp_low: 53, humidity: 78, wind_speed: 5,  precipitation: 0.10 },
  { id: 13, date: "2026-06-08", condition: "Sunny",         temp_high: 72, temp_low: 55, humidity: 45, wind_speed: 8,  precipitation: 0.00 },
  { id: 14, date: "2026-06-09", condition: "Windy",         temp_high: 70, temp_low: 54, humidity: 50, wind_speed: 28, precipitation: 0.00 },
  { id: 15, date: "2026-06-10", condition: "Partly Cloudy", temp_high: 73, temp_low: 56, humidity: 55, wind_speed: 11, precipitation: 0.00 },
  { id: 16, date: "2026-06-11", condition: "Rainy",         temp_high: 64, temp_low: 51, humidity: 80, wind_speed: 15, precipitation: 0.45 },
  { id: 17, date: "2026-06-12", condition: "Cloudy",        temp_high: 66, temp_low: 52, humidity: 70, wind_speed: 13, precipitation: 0.15 },
]

const Dashboard = ({ data = MOCK_DATA }) => {
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
              <p className="text-xs text-slate-400">San Francisco, CA · Last 17 days</p>
            </div>
          </div>
          <div className="text-right">
            <p className="text-sm font-medium text-slate-200">Today</p>
            <p className="text-xs text-slate-400">{format(parseISO(today.date), "MMMM d, yyyy")}</p>
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
      </main>
    </div>
  )
}

export default Dashboard
