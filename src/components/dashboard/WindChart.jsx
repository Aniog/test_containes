import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from 'recharts';
import { format, parseISO } from 'date-fns';

const CustomTooltip = ({ active, payload, label }) => {
  if (!active || !payload?.length) return null;
  return (
    <div className="bg-slate-900 border border-slate-700 rounded-lg p-3 text-sm shadow-xl">
      <p className="text-slate-400 mb-1 font-medium">{label}</p>
      <p className="text-emerald-400 font-semibold">Wind: {payload[0]?.value} mph</p>
    </div>
  );
};

export default function WindChart({ data }) {
  const chartData = data.map((d) => ({
    date: format(parseISO(d.date), 'MMM d'),
    Wind: d.windSpeed,
  }));

  return (
    <div className="bg-slate-800 border border-slate-700 rounded-xl p-5">
      <h2 className="text-base font-semibold text-slate-100 mb-4">Wind Speed (mph)</h2>
      <ResponsiveContainer width="100%" height={200}>
        <LineChart data={chartData} margin={{ top: 4, right: 8, left: -16, bottom: 0 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
          <XAxis dataKey="date" tick={{ fill: '#94a3b8', fontSize: 11 }} tickLine={false} axisLine={false} interval={4} />
          <YAxis tick={{ fill: '#94a3b8', fontSize: 11 }} tickLine={false} axisLine={false} />
          <Tooltip content={<CustomTooltip />} />
          <Line type="monotone" dataKey="Wind" stroke="#34d399" strokeWidth={2} dot={false} activeDot={{ r: 4, fill: '#34d399' }} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
