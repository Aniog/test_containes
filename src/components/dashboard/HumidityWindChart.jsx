import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from 'recharts';
import { format, parseISO } from 'date-fns';

const CustomTooltip = ({ active, payload, label }) => {
  if (!active || !payload?.length) return null;
  return (
    <div className="bg-slate-900 border border-slate-600 rounded-lg p-3 text-xs">
      <p className="text-slate-300 font-medium mb-2">{label}</p>
      {payload.map((p) => (
        <p key={p.dataKey} style={{ color: p.color }} className="mb-1">
          {p.name}: <span className="font-semibold">{p.value}{p.unit}</span>
        </p>
      ))}
    </div>
  );
};

const HumidityWindChart = ({ data }) => {
  const chartData = data.map((d) => ({
    ...d,
    label: format(parseISO(d.date), 'MMM d'),
  }));

  return (
    <div className="bg-slate-800 border border-slate-700 rounded-xl p-5">
      <h2 className="text-lg font-semibold text-slate-100 mb-4">Humidity & Wind</h2>
      <ResponsiveContainer width="100%" height={260}>
        <BarChart data={chartData} margin={{ top: 4, right: 16, left: -10, bottom: 0 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
          <XAxis
            dataKey="label"
            tick={{ fill: '#94a3b8', fontSize: 11 }}
            tickLine={false}
            axisLine={{ stroke: '#475569' }}
            interval={4}
          />
          <YAxis
            tick={{ fill: '#94a3b8', fontSize: 11 }}
            tickLine={false}
            axisLine={false}
          />
          <Tooltip content={<CustomTooltip />} />
          <Legend wrapperStyle={{ fontSize: 12, color: '#94a3b8', paddingTop: 8 }} />
          <Bar dataKey="humidity" name="Humidity" fill="#818cf8" radius={[3, 3, 0, 0]} unit="%" />
          <Bar dataKey="wind"     name="Wind"     fill="#38bdf8" radius={[3, 3, 0, 0]} unit=" mph" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default HumidityWindChart;
