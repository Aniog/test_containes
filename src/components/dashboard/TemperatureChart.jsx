import {
  ResponsiveContainer,
  ComposedChart,
  Line,
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
    <div className="bg-white border border-slate-200 rounded-lg shadow-lg p-3 text-sm">
      <p className="font-semibold text-slate-700 mb-2">{label}</p>
      {payload.map((entry) => (
        <p key={entry.name} style={{ color: entry.color }} className="leading-5">
          {entry.name}: <span className="font-medium">{entry.value}{entry.name === 'Precip' ? '"' : entry.name === 'Humidity' ? '%' : '°F'}</span>
        </p>
      ))}
    </div>
  );
};

const TemperatureChart = ({ records }) => {
  const chartData = records.map((d) => ({
    date: format(parseISO(d.date), 'MMM d'),
    High: d.tempHigh,
    Low: d.tempLow,
    Humidity: d.humidity,
    Precip: d.precipitation,
  }));

  return (
    <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-5">
      <h2 className="text-lg font-semibold text-slate-700 mb-4">Temperature & Precipitation — June 2026</h2>
      <ResponsiveContainer width="100%" height={280}>
        <ComposedChart data={chartData} margin={{ top: 4, right: 16, left: 0, bottom: 0 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
          <XAxis
            dataKey="date"
            tick={{ fontSize: 11, fill: '#64748b' }}
            tickLine={false}
            interval={4}
          />
          <YAxis
            yAxisId="temp"
            domain={[45, 90]}
            tick={{ fontSize: 11, fill: '#64748b' }}
            tickLine={false}
            tickFormatter={(v) => `${v}°`}
            width={36}
          />
          <YAxis
            yAxisId="precip"
            orientation="right"
            domain={[0, 1.5]}
            tick={{ fontSize: 11, fill: '#64748b' }}
            tickLine={false}
            tickFormatter={(v) => `${v}"`}
            width={36}
          />
          <Tooltip content={<CustomTooltip />} />
          <Legend
            wrapperStyle={{ fontSize: '12px', paddingTop: '12px' }}
            iconType="circle"
            iconSize={8}
          />
          <Bar yAxisId="precip" dataKey="Precip" fill="#bae6fd" name="Precip" barSize={6} radius={[2, 2, 0, 0]} />
          <Line yAxisId="temp" type="monotone" dataKey="High" stroke="#f97316" strokeWidth={2} dot={false} name="High" />
          <Line yAxisId="temp" type="monotone" dataKey="Low" stroke="#60a5fa" strokeWidth={2} dot={false} name="Low" />
        </ComposedChart>
      </ResponsiveContainer>
    </div>
  );
};

export default TemperatureChart;
