import {
  ResponsiveContainer,
  AreaChart,
  Area,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from 'recharts'
import { format, parseISO } from 'date-fns'

const CustomTooltip = ({ active, payload, label }) => {
  if (!active || !payload?.length) return null
  return (
    <div className="bg-slate-800 border border-slate-600 rounded-lg p-3 shadow-xl text-sm">
      <p className="text-slate-300 font-medium mb-1">{label}</p>
      {payload.map((p) => (
        <p key={p.name} style={{ color: p.color }} className="text-xs">
          {p.name}: <span className="font-semibold">{p.value}{p.unit || ''}</span>
        </p>
      ))}
    </div>
  )
}

export const TemperatureChart = ({ data }) => (
  <div className="bg-slate-800 rounded-xl border border-slate-700 p-5 shadow-lg">
    <h2 className="text-lg font-semibold text-slate-200 mb-1">Temperature Range</h2>
    <p className="text-xs text-slate-500 mb-4">Daily high & low (°C)</p>
    <ResponsiveContainer width="100%" height={220}>
      <AreaChart data={data} margin={{ top: 5, right: 10, left: -20, bottom: 0 }}>
        <defs>
          <linearGradient id="highGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#f59e0b" stopOpacity={0.3} />
            <stop offset="95%" stopColor="#f59e0b" stopOpacity={0} />
          </linearGradient>
          <linearGradient id="lowGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#38bdf8" stopOpacity={0.3} />
            <stop offset="95%" stopColor="#38bdf8" stopOpacity={0} />
          </linearGradient>
        </defs>
        <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
        <XAxis dataKey="label" tick={{ fill: '#94a3b8', fontSize: 11 }} tickLine={false} axisLine={false} />
        <YAxis tick={{ fill: '#94a3b8', fontSize: 11 }} tickLine={false} axisLine={false} />
        <Tooltip content={<CustomTooltip />} />
        <Legend wrapperStyle={{ color: '#94a3b8', fontSize: 12 }} />
        <Area type="monotone" dataKey="temp_high" name="High" stroke="#f59e0b" strokeWidth={2} fill="url(#highGrad)" dot={false} />
        <Area type="monotone" dataKey="temp_low" name="Low" stroke="#38bdf8" strokeWidth={2} fill="url(#lowGrad)" dot={false} />
      </AreaChart>
    </ResponsiveContainer>
  </div>
)

export const PrecipitationChart = ({ data }) => (
  <div className="bg-slate-800 rounded-xl border border-slate-700 p-5 shadow-lg">
    <h2 className="text-lg font-semibold text-slate-200 mb-1">Precipitation</h2>
    <p className="text-xs text-slate-500 mb-4">Daily rainfall (mm)</p>
    <ResponsiveContainer width="100%" height={220}>
      <BarChart data={data} margin={{ top: 5, right: 10, left: -20, bottom: 0 }}>
        <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
        <XAxis dataKey="label" tick={{ fill: '#94a3b8', fontSize: 11 }} tickLine={false} axisLine={false} />
        <YAxis tick={{ fill: '#94a3b8', fontSize: 11 }} tickLine={false} axisLine={false} />
        <Tooltip content={<CustomTooltip />} />
        <Bar dataKey="precipitation" name="Precip (mm)" fill="#60a5fa" radius={[4, 4, 0, 0]} />
      </BarChart>
    </ResponsiveContainer>
  </div>
)

export const HumidityWindChart = ({ data }) => (
  <div className="bg-slate-800 rounded-xl border border-slate-700 p-5 shadow-lg">
    <h2 className="text-lg font-semibold text-slate-200 mb-1">Humidity & Wind</h2>
    <p className="text-xs text-slate-500 mb-4">Humidity (%) and wind speed (km/h)</p>
    <ResponsiveContainer width="100%" height={220}>
      <AreaChart data={data} margin={{ top: 5, right: 10, left: -20, bottom: 0 }}>
        <defs>
          <linearGradient id="humGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#34d399" stopOpacity={0.3} />
            <stop offset="95%" stopColor="#34d399" stopOpacity={0} />
          </linearGradient>
          <linearGradient id="windGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#a78bfa" stopOpacity={0.3} />
            <stop offset="95%" stopColor="#a78bfa" stopOpacity={0} />
          </linearGradient>
        </defs>
        <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
        <XAxis dataKey="label" tick={{ fill: '#94a3b8', fontSize: 11 }} tickLine={false} axisLine={false} />
        <YAxis tick={{ fill: '#94a3b8', fontSize: 11 }} tickLine={false} axisLine={false} />
        <Tooltip content={<CustomTooltip />} />
        <Legend wrapperStyle={{ color: '#94a3b8', fontSize: 12 }} />
        <Area type="monotone" dataKey="humidity" name="Humidity %" stroke="#34d399" strokeWidth={2} fill="url(#humGrad)" dot={false} />
        <Area type="monotone" dataKey="wind_speed" name="Wind km/h" stroke="#a78bfa" strokeWidth={2} fill="url(#windGrad)" dot={false} />
      </AreaChart>
    </ResponsiveContainer>
  </div>
)
