import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts"
import { format, parseISO } from "date-fns"

const CustomTooltip = ({ active, payload, label }) => {
  if (!active || !payload?.length) return null
  return (
    <div className="rounded-lg border border-slate-600 bg-slate-800 p-3 shadow-xl text-sm">
      <p className="text-slate-300 font-medium mb-1">{label}</p>
      <p className="text-sky-400 font-semibold">Humidity: {payload[0].value}%</p>
    </div>
  )
}

const HumidityChart = ({ data }) => {
  const chartData = data.map((d) => ({
    date: format(parseISO(d.date), "MMM d"),
    Humidity: d.humidity,
  }))

  return (
    <div className="rounded-xl border border-slate-700 bg-slate-800 p-5 shadow-lg">
      <h2 className="text-lg font-semibold text-slate-100 mb-4">Humidity (%)</h2>
      <ResponsiveContainer width="100%" height={240}>
        <BarChart data={chartData} margin={{ top: 4, right: 16, left: -8, bottom: 0 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
          <XAxis dataKey="date" tick={{ fill: "#94a3b8", fontSize: 12 }} axisLine={false} tickLine={false} />
          <YAxis domain={[0, 100]} tick={{ fill: "#94a3b8", fontSize: 12 }} axisLine={false} tickLine={false} />
          <Tooltip content={<CustomTooltip />} />
          <Bar dataKey="Humidity" fill="#38bdf8" radius={[4, 4, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}

export default HumidityChart
