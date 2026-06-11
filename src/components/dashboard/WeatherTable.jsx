import { format, parseISO } from 'date-fns'
import conditionConfig from './conditionConfig.js'

const DayRow = ({ record, isLatest }) => {
  const d = record.data
  const cfg = conditionConfig[d.condition] || { icon: '🌡️', color: 'text-slate-300', bg: 'bg-slate-300/10' }

  return (
    <tr className={`border-b border-slate-700/50 hover:bg-slate-700/30 transition-colors ${isLatest ? 'bg-sky-900/20' : ''}`}>
      <td className="py-3 px-4 text-sm text-slate-300 whitespace-nowrap">
        {format(parseISO(d.date), 'MMM d, yyyy')}
        {isLatest && <span className="ml-2 text-xs bg-sky-500/20 text-sky-400 px-1.5 py-0.5 rounded-full">Today</span>}
      </td>
      <td className="py-3 px-4">
        <span className={`inline-flex items-center gap-1.5 text-sm font-medium px-2.5 py-1 rounded-full ${cfg.bg} ${cfg.color}`}>
          {cfg.icon} {d.condition}
        </span>
      </td>
      <td className="py-3 px-4 text-sm text-slate-100 font-semibold">{d.temp_high}°C</td>
      <td className="py-3 px-4 text-sm text-slate-400">{d.temp_low}°C</td>
      <td className="py-3 px-4 text-sm text-slate-300">{d.humidity}%</td>
      <td className="py-3 px-4 text-sm text-slate-300">{d.wind_speed} km/h</td>
      <td className="py-3 px-4 text-sm text-slate-300">{d.precipitation ?? 0} mm</td>
      <td className="py-3 px-4">
        <UVBadge value={d.uv_index} />
      </td>
    </tr>
  )
}

const UVBadge = ({ value }) => {
  let color = 'bg-green-500/20 text-green-400'
  if (value >= 3 && value <= 5) color = 'bg-yellow-500/20 text-yellow-400'
  if (value >= 6 && value <= 7) color = 'bg-orange-500/20 text-orange-400'
  if (value >= 8 && value <= 10) color = 'bg-red-500/20 text-red-400'
  if (value >= 11) color = 'bg-purple-500/20 text-purple-400'

  return (
    <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${color}`}>
      UV {value}
    </span>
  )
}

const WeatherTable = ({ records }) => {
  const latestDate = records.length > 0 ? records[records.length - 1].data.date : null

  return (
    <div className="bg-slate-800 rounded-xl border border-slate-700 shadow-lg overflow-hidden">
      <div className="px-5 py-4 border-b border-slate-700">
        <h2 className="text-lg font-semibold text-slate-200">Daily Records</h2>
        <p className="text-xs text-slate-500 mt-0.5">{records.length} days of data</p>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-slate-700 bg-slate-900/50">
              <th className="py-3 px-4 text-left text-xs font-medium text-slate-400 uppercase tracking-wide">Date</th>
              <th className="py-3 px-4 text-left text-xs font-medium text-slate-400 uppercase tracking-wide">Condition</th>
              <th className="py-3 px-4 text-left text-xs font-medium text-slate-400 uppercase tracking-wide">High</th>
              <th className="py-3 px-4 text-left text-xs font-medium text-slate-400 uppercase tracking-wide">Low</th>
              <th className="py-3 px-4 text-left text-xs font-medium text-slate-400 uppercase tracking-wide">Humidity</th>
              <th className="py-3 px-4 text-left text-xs font-medium text-slate-400 uppercase tracking-wide">Wind</th>
              <th className="py-3 px-4 text-left text-xs font-medium text-slate-400 uppercase tracking-wide">Precip.</th>
              <th className="py-3 px-4 text-left text-xs font-medium text-slate-400 uppercase tracking-wide">UV</th>
            </tr>
          </thead>
          <tbody>
            {records.map((r) => (
              <DayRow key={r.id} record={r} isLatest={r.data.date === latestDate} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default WeatherTable
