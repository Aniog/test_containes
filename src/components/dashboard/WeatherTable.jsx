import { format, parseISO } from 'date-fns';
import WeatherIcon from './WeatherIcon';

const conditionBadgeColor = {
  Sunny:          'bg-yellow-400/10 text-yellow-400',
  'Partly Cloudy':'bg-sky-400/10 text-sky-300',
  Cloudy:         'bg-slate-600/40 text-slate-300',
  Rainy:          'bg-sky-500/10 text-sky-400',
  Stormy:         'bg-indigo-500/10 text-indigo-400',
  Foggy:          'bg-slate-500/10 text-slate-400',
};

const WeatherTable = ({ data }) => (
  <div className="bg-slate-800 border border-slate-700 rounded-xl overflow-hidden">
    <div className="p-5 border-b border-slate-700">
      <h2 className="text-lg font-semibold text-slate-100">Daily Records</h2>
    </div>
    <div className="overflow-x-auto">
      <table className="w-full text-sm">
        <thead>
          <tr className="bg-slate-900 text-slate-400 text-xs uppercase tracking-wider">
            <th className="px-4 py-3 text-left">Date</th>
            <th className="px-4 py-3 text-left">Condition</th>
            <th className="px-4 py-3 text-right">High</th>
            <th className="px-4 py-3 text-right">Low</th>
            <th className="px-4 py-3 text-right">Humidity</th>
            <th className="px-4 py-3 text-right">Wind</th>
            <th className="px-4 py-3 text-right">Precip</th>
            <th className="px-4 py-3 text-right">UV</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, i) => (
            <tr
              key={row.date}
              className={`border-b border-slate-700 hover:bg-slate-700/50 transition-colors ${
                i % 2 === 0 ? '' : 'bg-slate-800/50'
              }`}
            >
              <td className="px-4 py-3 text-slate-200 whitespace-nowrap">
                {format(parseISO(row.date), 'EEE, MMM d')}
              </td>
              <td className="px-4 py-3">
                <span
                  className={`inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-xs font-medium ${
                    conditionBadgeColor[row.condition] ?? 'bg-slate-600/40 text-slate-300'
                  }`}
                >
                  <WeatherIcon condition={row.condition} size={12} />
                  {row.condition}
                </span>
              </td>
              <td className="px-4 py-3 text-right text-orange-400 font-medium">{row.high}°</td>
              <td className="px-4 py-3 text-right text-sky-400 font-medium">{row.low}°</td>
              <td className="px-4 py-3 text-right text-slate-200">{row.humidity}%</td>
              <td className="px-4 py-3 text-right text-slate-200">{row.wind} mph</td>
              <td className="px-4 py-3 text-right text-slate-200">{row.precip.toFixed(1)}"</td>
              <td className="px-4 py-3 text-right">
                <span
                  className={`font-medium ${
                    row.uv >= 8 ? 'text-red-400' : row.uv >= 5 ? 'text-yellow-400' : 'text-green-400'
                  }`}
                >
                  {row.uv}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
);

export default WeatherTable;
