import { format, parseISO } from 'date-fns';
import WeatherConditionBadge from './WeatherConditionBadge';

const WeatherTable = ({ records }) => {
  const rows = [...records].reverse();

  return (
    <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
      <div className="px-5 py-4 border-b border-slate-200">
        <h2 className="text-lg font-semibold text-slate-700">Daily Records — June 2026</h2>
        <p className="text-xs text-slate-500 mt-0.5">Most recent first</p>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-slate-50 border-b border-slate-200">
              <th className="text-left px-5 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wider">Date</th>
              <th className="text-left px-4 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wider">Condition</th>
              <th className="text-right px-4 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wider">High</th>
              <th className="text-right px-4 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wider">Low</th>
              <th className="text-right px-4 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wider">Humidity</th>
              <th className="text-right px-4 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wider">Wind</th>
              <th className="text-right px-4 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wider">Precip</th>
              <th className="text-right px-4 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wider">UV</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row, i) => (
              <tr
                key={row.id}
                className={`border-b border-slate-100 hover:bg-slate-50 transition-colors ${i === 0 ? 'bg-blue-50' : ''}`}
              >
                <td className="px-5 py-3 font-medium text-slate-700 whitespace-nowrap">
                  {format(parseISO(row.date), 'EEE, MMM d')}
                  {i === 0 && (
                    <span className="ml-2 text-xs bg-blue-600 text-white rounded-full px-1.5 py-0.5 font-medium">Latest</span>
                  )}
                </td>
                <td className="px-4 py-3">
                  <WeatherConditionBadge condition={row.condition} />
                </td>
                <td className="px-4 py-3 text-right font-semibold text-orange-600">{row.tempHigh}°F</td>
                <td className="px-4 py-3 text-right font-semibold text-blue-500">{row.tempLow}°F</td>
                <td className="px-4 py-3 text-right text-slate-600">{row.humidity}%</td>
                <td className="px-4 py-3 text-right text-slate-600">{row.windSpeed} mph</td>
                <td className="px-4 py-3 text-right text-slate-600">
                  {row.precipitation > 0 ? (
                    <span className="text-sky-600 font-medium">{row.precipitation}"</span>
                  ) : (
                    <span className="text-slate-400">—</span>
                  )}
                </td>
                <td className="px-4 py-3 text-right">
                  <span className={`font-medium ${row.uvIndex <= 2 ? 'text-emerald-600' : row.uvIndex <= 5 ? 'text-amber-600' : row.uvIndex <= 7 ? 'text-orange-600' : 'text-red-600'}`}>
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
};

export default WeatherTable;
