import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { format, parseISO } from "date-fns";

const CustomTooltip = ({ active, payload, label }) => {
  if (!active || !payload?.length) return null;
  return (
    <div className="bg-slate-800 border border-slate-700 rounded-lg p-3 text-sm shadow-xl">
      <p className="text-slate-300 font-medium mb-2">
        {format(parseISO(label), "MMM d, yyyy")}
      </p>
      {payload.map((p) => (
        <p key={p.dataKey} style={{ color: p.color }} className="font-semibold">
          {p.name}: {p.value}°F
        </p>
      ))}
    </div>
  );
};

const TemperatureChart = ({ data }) => {
  const chartData = data.map((d) => ({
    date: d.date,
    High: d.tempHigh,
    Low: d.tempLow,
    Avg: d.tempAvg,
  }));

  return (
    <div className="bg-slate-900 border border-slate-700 rounded-xl p-5">
      <div className="mb-4">
        <h3 className="text-lg font-semibold text-slate-100">Temperature</h3>
        <p className="text-xs text-slate-500 mt-0.5">Daily high, average & low (°F)</p>
      </div>
      <ResponsiveContainer width="100%" height={260}>
        <LineChart data={chartData} margin={{ top: 4, right: 8, left: -16, bottom: 0 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
          <XAxis
            dataKey="date"
            tickFormatter={(v) => format(parseISO(v), "MMM d")}
            tick={{ fill: "#94a3b8", fontSize: 11 }}
            tickLine={false}
            axisLine={{ stroke: "#334155" }}
            interval={4}
          />
          <YAxis
            tick={{ fill: "#94a3b8", fontSize: 11 }}
            tickLine={false}
            axisLine={false}
            domain={["auto", "auto"]}
            tickFormatter={(v) => `${v}°`}
          />
          <Tooltip content={<CustomTooltip />} />
          <Legend
            wrapperStyle={{ fontSize: "12px", color: "#94a3b8", paddingTop: "12px" }}
          />
          <Line type="monotone" dataKey="High" stroke="#fb923c" strokeWidth={2} dot={false} />
          <Line type="monotone" dataKey="Avg" stroke="#a78bfa" strokeWidth={1.5} dot={false} strokeDasharray="4 2" />
          <Line type="monotone" dataKey="Low" stroke="#38bdf8" strokeWidth={2} dot={false} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default TemperatureChart;
