import { format, parseISO } from 'date-fns'

const conditionBadge = {
  Sunny: 'bg-yellow-100 text-yellow-700',
  'Partly Cloudy': 'bg-slate-100 text-slate-600',
  Cloudy: 'bg-slate-200 text-slate-700',
  Rainy: 'bg-blue-100 text-blue-700',
  Stormy: 'bg-purple-100 text-purple-700',
  Foggy: 'bg-gray-100 text-gray-600',
  Windy: 'bg-teal-100 text-teal-700',
  Snowy: 'bg-sky-100 text-sky-700',
}

const conditionEmoji = {
  Sunny: '☀️',
  'Partly Cloudy': '⛅',
  Cloudy: '☁️',
  Rainy: '🌧️',
  Stormy: '⛈️',
  Foggy: '🌫️',
  Windy: '💨',
  Snowy: '❄️',
}

const WeatherTable = ({ data }) => (
  <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
    <div className="px-6 py-4 border-b border-slate-100">
      <h2 className="text-lg font-bold text-slate-800">Daily Records</h2>
    </div>
    <div className="overflow-x-auto">
      <table className="w-full text-sm">
        <thead>
          <tr className="bg-slate-50 text-slate-500 text-xs uppercase tracking-wide">
            <th className="px-6 py-3 text-left font-semibold">Date</th>
            <th className="px-6 py-3 text-left font-semibold">Condition</th>
            <th className="px-6 py-3 text-right font-semibold">High °C</th>
            <th className="px-6 py-3 text-right font-semibold">Low °C</th>
            <th className="px-6 py-3 text-right font-semibold">Avg °C</th>
            <th className="px-6 py-3 text-right font-semibold">Humidity %</th>
            <th className="px-6 py-3 text-right font-semibold">Wind km/h</th>
            <th className="px-6 py-3 text-right font-semibold">Precip mm</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-100">
          {data.map((row) => {
            const badge = conditionBadge[row.condition] || 'bg-slate-100 text-slate-600'
            const emoji = conditionEmoji[row.condition] || '🌡️'
            return (
              <tr key={row.date} className="hover:bg-slate-50 transition-colors">
                <td className="px-6 py-3 font-medium text-slate-700">
                  {format(parseISO(row.date), 'EEE, MMM d')}
                </td>
                <td className="px-6 py-3">
                  <span className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-semibold ${badge}`}>
                    {emoji} {row.condition}
                  </span>
                </td>
                <td className="px-6 py-3 text-right font-semibold text-orange-500">{row.temp_high}</td>
                <td className="px-6 py-3 text-right font-semibold text-blue-500">{row.temp_low}</td>
                <td className="px-6 py-3 text-right text-slate-700">{row.temp_avg}</td>
                <td className="px-6 py-3 text-right text-slate-700">{row.humidity}</td>
                <td className="px-6 py-3 text-right text-slate-700">{row.wind_speed}</td>
                <td className="px-6 py-3 text-right text-slate-700">{row.precipitation}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  </div>
)

export default WeatherTable
