import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { format, parseISO } from "date-fns";

const CustomTooltip = ({ active, payload, label }) => {
  if (!active || !payload?.length) return null;
  return (
    <div className="bg-slate-800 border border-slate-700 rounded-lg p-3 text-sm shadow-xl">
      <p className="text-slate-300 font-medium mb-1">
        {format(parseISO(label), "MMM d, yyyy")}
      </p>
      <p className="text-emerald-300 font-semibold">
        Humidity: {payload[0].value}%
      </p>
    </div>
  );
};

const HumidityChart = ({ data }) => {
  const chartData = data.map((d) => ({
    date: d.date,
    humidity: d.humidity,
  }));

  return (
    <div className="bg-slate-900 border border-slate-700 rounded-xl p-5">
      <div className="mb-4">
        <h3 className="text-lg font-semibold text-slate-100">Humidity</h3>
        <p className="text-xs text-slate-500 mt-0.5">Daily relative humidity (%)</p>
      </div>
      <ResponsiveContainer width="100%" height={220}>
        <AreaChart data={chartData} margin={{ top: 4, right: 8, left: -16, bottom: 0 }}>
          <defs>
            <linearGradient id="humidityGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#34d399" stopOpacity={0.3} />
              <stop offset="95%" stopColor="#34d399" stopOpacity={0.02} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" stroke="#334155" vertical={false} />
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
            domain={[40, 100]}
            tickFormatter={(v) => `${v}%`}
          />
          <Tooltip content={<CustomTooltip />} />
          <Area
            type="monotone"
            dataKey="humidity"
            stroke="#34d399"
            strokeWidth={2}
            fill="url(#humidityGrad)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default HumidityChart;
