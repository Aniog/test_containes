import { format, parseISO } from 'date-fns';
import { conditionMeta } from '@/data/weatherData';
import WeatherIcon from './WeatherIcon';
import { Droplets, Wind } from 'lucide-react';

const DailyTable = ({ data }) => (
  <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
    <div className="px-5 py-4 border-b border-slate-100">
      <h2 className="text-lg font-semibold text-slate-700">Daily Records</h2>
    </div>
    <div className="overflow-x-auto">
      <table className="w-full text-sm">
        <thead>
          <tr className="bg-slate-50 text-slate-500 text-xs uppercase tracking-wide">
            <th className="px-5 py-3 text-left font-medium">Date</th>
            <th className="px-4 py-3 text-left font-medium">Condition</th>
            <th className="px-4 py-3 text-right font-medium">High</th>
            <th className="px-4 py-3 text-right font-medium">Low</th>
            <th className="px-4 py-3 text-right font-medium">Humidity</th>
            <th className="px-4 py-3 text-right font-medium">Wind</th>
            <th className="px-4 py-3 text-right font-medium">Precip</th>
            <th className="px-4 py-3 text-right font-medium">UV</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-100">
          {data.map((row) => {
            const meta = conditionMeta[row.condition] || conditionMeta['Cloudy'];
            return (
              <tr key={row.date} className="hover:bg-slate-50 transition-colors">
                <td className="px-5 py-3 text-slate-700 font-medium whitespace-nowrap">
                  {format(parseISO(row.date), 'EEE, MMM d')}
                </td>
                <td className="px-4 py-3">
                  <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium ${meta.bg} ${meta.color} border ${meta.border}`}>
                    <WeatherIcon name={meta.icon} className="w-3.5 h-3.5" />
                    {row.condition}
                  </span>
                </td>
                <td className="px-4 py-3 text-right text-amber-600 font-semibold">{row.high}°</td>
                <td className="px-4 py-3 text-right text-blue-500 font-semibold">{row.low}°</td>
                <td className="px-4 py-3 text-right text-slate-600">{row.humidity}%</td>
                <td className="px-4 py-3 text-right text-slate-600">{row.wind} mph</td>
                <td className="px-4 py-3 text-right text-slate-600">
                  {row.precipitation > 0 ? (
                    <span className="text-blue-500 font-medium">{row.precipitation.toFixed(1)}"</span>
                  ) : (
                    <span className="text-slate-400">—</span>
                  )}
                </td>
                <td className="px-4 py-3 text-right">
                  <span className={`font-medium ${row.uv >= 8 ? 'text-red-500' : row.uv >= 5 ? 'text-amber-500' : 'text-slate-500'}`}>
                    {row.uv}
                  </span>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  </div>
);

export default DailyTable;
