import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from "recharts";
import { format, parseISO } from "date-fns";

const CustomTooltip = ({ active, payload, label }) => {
  if (!active || !payload?.length) return null;
  return (
    <div className="bg-slate-800 border border-slate-700 rounded-lg p-3 text-sm shadow-xl">
      <p className="text-slate-300 font-medium mb-1">
        {format(parseISO(label), "MMM d, yyyy")}
      </p>
      <p className="text-indigo-300 font-semibold">
        Precipitation: {payload[0].value}" in
      </p>
    </div>
  );
};

const PrecipitationChart = ({ data }) => {
  const chartData = data.map((d) => ({
    date: d.date,
    precipitation: d.precipitation,
  }));

  return (
    <div className="bg-slate-900 border border-slate-700 rounded-xl p-5">
      <div className="mb-4">
        <h3 className="text-lg font-semibold text-slate-100">Precipitation</h3>
        <p className="text-xs text-slate-500 mt-0.5">Daily rainfall (inches)</p>
      </div>
      <ResponsiveContainer width="100%" height={220}>
        <BarChart data={chartData} margin={{ top: 4, right: 8, left: -16, bottom: 0 }}>
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
            tickFormatter={(v) => `${v}"`}
          />
          <Tooltip content={<CustomTooltip />} />
          <Bar dataKey="precipitation" radius={[3, 3, 0, 0]}>
            {chartData.map((entry, index) => (
              <Cell
                key={index}
                fill={entry.precipitation > 0.5 ? "#818cf8" : entry.precipitation > 0 ? "#a5b4fc" : "#334155"}
              />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default PrecipitationChart;
