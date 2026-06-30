import {
  ResponsiveContainer,
  AreaChart,
  Area,
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
    <div className="bg-slate-900 border border-slate-700 rounded-lg p-3 text-sm shadow-xl">
      <p className="text-slate-400 mb-2 font-medium">{label}</p>
      {payload.map((entry) => (
        <p key={entry.name} style={{ color: entry.color }} className="font-semibold">
          {entry.name}: {entry.value}°F
        </p>
      ))}
    </div>
  );
};

export default function TemperatureChart({ data }) {
  const chartData = data.map((d) => ({
    date: format(parseISO(d.date), 'MMM d'),
    High: d.tempHigh,
    Avg: d.tempAvg,
    Low: d.tempLow,
  }));

  return (
    <div className="bg-slate-800 border border-slate-700 rounded-xl p-5">
      <h2 className="text-base font-semibold text-slate-100 mb-4">Temperature Range (°F)</h2>
      <ResponsiveContainer width="100%" height={240}>
        <AreaChart data={chartData} margin={{ top: 4, right: 8, left: -16, bottom: 0 }}>
          <defs>
            <linearGradient id="gradHigh" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#fbbf24" stopOpacity={0.3} />
              <stop offset="95%" stopColor="#fbbf24" stopOpacity={0} />
            </linearGradient>
            <linearGradient id="gradAvg" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#38bdf8" stopOpacity={0.3} />
              <stop offset="95%" stopColor="#38bdf8" stopOpacity={0} />
            </linearGradient>
            <linearGradient id="gradLow" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#818cf8" stopOpacity={0.3} />
              <stop offset="95%" stopColor="#818cf8" stopOpacity={0} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
          <XAxis dataKey="date" tick={{ fill: '#94a3b8', fontSize: 11 }} tickLine={false} axisLine={false} interval={4} />
          <YAxis tick={{ fill: '#94a3b8', fontSize: 11 }} tickLine={false} axisLine={false} domain={['auto', 'auto']} />
          <Tooltip content={<CustomTooltip />} />
          <Legend wrapperStyle={{ fontSize: '12px', color: '#94a3b8', paddingTop: '8px' }} />
          <Area type="monotone" dataKey="High" stroke="#fbbf24" strokeWidth={2} fill="url(#gradHigh)" dot={false} />
          <Area type="monotone" dataKey="Avg" stroke="#38bdf8" strokeWidth={2} fill="url(#gradAvg)" dot={false} />
          <Area type="monotone" dataKey="Low" stroke="#818cf8" strokeWidth={2} fill="url(#gradLow)" dot={false} />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
