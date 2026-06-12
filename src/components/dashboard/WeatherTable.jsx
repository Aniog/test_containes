import { format, parseISO } from "date-fns"
import ConditionBadge from "./ConditionBadge"

const conditionIcon = {
  Sunny: "☀️",
  "Partly Cloudy": "⛅",
  Cloudy: "☁️",
  Rainy: "🌧️",
  Stormy: "⛈️",
  Snowy: "❄️",
  Foggy: "🌫️",
  Windy: "💨",
}

const WeatherTable = ({ data }) => (
  <div className="rounded-xl border border-slate-700 bg-slate-800 shadow-lg overflow-hidden">
    <div className="p-5 border-b border-slate-700">
      <h2 className="text-lg font-semibold text-slate-100">Daily Records</h2>
    </div>
    <div className="overflow-x-auto">
      <table className="w-full text-sm">
        <thead>
          <tr className="border-b border-slate-700">
            <th className="text-left px-5 py-3 text-xs font-medium text-slate-400 uppercase tracking-wide">Date</th>
            <th className="text-left px-4 py-3 text-xs font-medium text-slate-400 uppercase tracking-wide">Condition</th>
            <th className="text-right px-4 py-3 text-xs font-medium text-slate-400 uppercase tracking-wide">High</th>
            <th className="text-right px-4 py-3 text-xs font-medium text-slate-400 uppercase tracking-wide">Low</th>
            <th className="text-right px-4 py-3 text-xs font-medium text-slate-400 uppercase tracking-wide">Humidity</th>
            <th className="text-right px-4 py-3 text-xs font-medium text-slate-400 uppercase tracking-wide">Wind</th>
            <th className="text-right px-5 py-3 text-xs font-medium text-slate-400 uppercase tracking-wide">Precip.</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, i) => (
            <tr
              key={row.id ?? i}
              className="border-b border-slate-700/50 hover:bg-slate-700/30 transition-colors"
            >
              <td className="px-5 py-3 text-slate-200 font-medium whitespace-nowrap">
                {format(parseISO(row.date), "EEE, MMM d")}
              </td>
              <td className="px-4 py-3">
                <div className="flex items-center gap-2">
                  <span>{conditionIcon[row.condition] ?? "🌡️"}</span>
                  <ConditionBadge condition={row.condition} />
                </div>
              </td>
              <td className="px-4 py-3 text-right text-amber-400 font-semibold">{row.temp_high}°F</td>
              <td className="px-4 py-3 text-right text-blue-400 font-semibold">{row.temp_low}°F</td>
              <td className="px-4 py-3 text-right text-slate-300">{row.humidity}%</td>
              <td className="px-4 py-3 text-right text-slate-300">{row.wind_speed} mph</td>
              <td className="px-5 py-3 text-right text-slate-300">{row.precipitation} in</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
)

export default WeatherTable
