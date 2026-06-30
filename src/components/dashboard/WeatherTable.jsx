import { format, parseISO } from 'date-fns';
import WeatherIcon from './WeatherIcon';

const conditionBadge = {
  Sunny: 'bg-amber-500/10 text-amber-400',
  'Partly Cloudy': 'bg-sky-500/10 text-sky-400',
  Foggy: 'bg-slate-500/20 text-slate-400',
  Overcast: 'bg-slate-600/20 text-slate-400',
  Rainy: 'bg-violet-500/10 text-violet-400',
};

export default function WeatherTable({ data }) {
  return (
    <div className="bg-slate-800 border border-slate-700 rounded-xl overflow-hidden">
      <div className="p-5 border-b border-slate-700">
        <h2 className="text-base font-semibold text-slate-100">Daily Records</h2>
        <p className="text-xs text-slate-500 mt-0.5">{data.length} days of data</p>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-slate-700/40 text-xs uppercase tracking-wider text-slate-400">
              <th className="text-left px-5 py-3 font-medium">Date</th>
              <th className="text-left px-4 py-3 font-medium">Condition</th>
              <th className="text-right px-4 py-3 font-medium">High</th>
              <th className="text-right px-4 py-3 font-medium">Low</th>
              <th className="text-right px-4 py-3 font-medium">Humidity</th>
              <th className="text-right px-4 py-3 font-medium">Wind</th>
              <th className="text-right px-4 py-3 font-medium">Precip.</th>
              <th className="text-right px-5 py-3 font-medium">UV</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row, i) => (
              <tr
                key={row.date}
                className={`border-b border-slate-700/40 hover:bg-slate-700/20 transition-colors ${
                  i === data.length - 1 ? 'border-b-0' : ''
                }`}
              >
                <td className="px-5 py-3 text-slate-300 font-medium whitespace-nowrap">
                  {format(parseISO(row.date), 'EEE, MMM d')}
                </td>
                <td className="px-4 py-3">
                  <span className={`inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-xs font-medium ${conditionBadge[row.condition] || 'bg-slate-700 text-slate-300'}`}>
                    <WeatherIcon icon={row.icon} condition={row.condition} size={12} />
                    {row.condition}
                  </span>
                </td>
                <td className="px-4 py-3 text-right text-amber-400 font-semibold">{row.tempHigh}°</td>
                <td className="px-4 py-3 text-right text-violet-400 font-semibold">{row.tempLow}°</td>
                <td className="px-4 py-3 text-right text-slate-300">{row.humidity}%</td>
                <td className="px-4 py-3 text-right text-slate-300">{row.windSpeed} mph</td>
                <td className="px-4 py-3 text-right text-slate-300">
                  {row.precipitation > 0 ? (
                    <span className="text-sky-400">{row.precipitation.toFixed(1)}"</span>
                  ) : (
                    <span className="text-slate-600">—</span>
                  )}
                </td>
                <td className="px-5 py-3 text-right">
                  <span className={`font-semibold ${row.uvIndex >= 8 ? 'text-rose-400' : row.uvIndex >= 6 ? 'text-amber-400' : 'text-emerald-400'}`}>
                    {row.uvIndex}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
