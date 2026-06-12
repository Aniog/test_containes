import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts"
import { format, parseISO } from "date-fns"

const CustomTooltip = ({ active, payload, label }) => {
  if (!active || !payload?.length) return null
  return (
    <div className="rounded-lg border border-slate-600 bg-slate-800 p-3 shadow-xl text-sm">
      <p className="text-slate-300 font-medium mb-1">{label}</p>
      {payload.map((p) => (
        <p key={p.name} style={{ color: p.color }} className="font-semibold">
          {p.name}: {p.value}°F
        </p>
      ))}
    </div>
  )
}

const TemperatureChart = ({ data }) => {
  const chartData = data.map((d) => ({
    date: format(parseISO(d.date), "MMM d"),
    High: d.temp_high,
    Low: d.temp_low,
  }))

  return (
    <div className="rounded-xl border border-slate-700 bg-slate-800 p-5 shadow-lg">
      <h2 className="text-lg font-semibold text-slate-100 mb-4">Temperature Trend (°F)</h2>
      <ResponsiveContainer width="100%" height={240}>
        <LineChart data={chartData} margin={{ top: 4, right: 16, left: -8, bottom: 0 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
          <XAxis dataKey="date" tick={{ fill: "#94a3b8", fontSize: 12 }} axisLine={false} tickLine={false} />
          <YAxis tick={{ fill: "#94a3b8", fontSize: 12 }} axisLine={false} tickLine={false} />
          <Tooltip content={<CustomTooltip />} />
          <Legend
            wrapperStyle={{ color: "#94a3b8", fontSize: 12, paddingTop: 8 }}
          />
          <Line
            type="monotone"
            dataKey="High"
            stroke="#f59e0b"
            strokeWidth={2.5}
            dot={{ fill: "#f59e0b", r: 3 }}
            activeDot={{ r: 5 }}
          />
          <Line
            type="monotone"
            dataKey="Low"
            stroke="#60a5fa"
            strokeWidth={2.5}
            dot={{ fill: "#60a5fa", r: 3 }}
            activeDot={{ r: 5 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}

export default TemperatureChart
