import { format, parseISO } from "date-fns";
import { cn } from "@/lib/utils";

const CONDITION_STYLES = {
  Sunny: "bg-amber-500/20 text-amber-300",
  "Partly Cloudy": "bg-sky-500/20 text-sky-300",
  Cloudy: "bg-slate-500/20 text-slate-300",
  Foggy: "bg-slate-400/20 text-slate-400",
  Rainy: "bg-blue-500/20 text-blue-300",
  Stormy: "bg-purple-500/20 text-purple-300",
};

const ConditionBadge = ({ condition }) => (
  <span
    className={cn(
      "inline-block rounded-full px-2.5 py-0.5 text-xs font-medium",
      CONDITION_STYLES[condition] ?? "bg-slate-700 text-slate-300"
    )}
  >
    {condition}
  </span>
);

const WeatherTable = ({ data }) => {
  return (
    <div className="bg-slate-900 border border-slate-700 rounded-xl overflow-hidden">
      <div className="p-5 border-b border-slate-700">
        <h3 className="text-lg font-semibold text-slate-100">Daily Records</h3>
        <p className="text-xs text-slate-500 mt-0.5">{data.length} days of weather data</p>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-slate-700 bg-slate-800/50">
              <th className="text-left px-5 py-3 text-xs font-medium text-slate-400 uppercase tracking-wider">Date</th>
              <th className="text-right px-4 py-3 text-xs font-medium text-slate-400 uppercase tracking-wider">High</th>
              <th className="text-right px-4 py-3 text-xs font-medium text-slate-400 uppercase tracking-wider">Avg</th>
              <th className="text-right px-4 py-3 text-xs font-medium text-slate-400 uppercase tracking-wider">Low</th>
              <th className="text-right px-4 py-3 text-xs font-medium text-slate-400 uppercase tracking-wider">Humidity</th>
              <th className="text-right px-4 py-3 text-xs font-medium text-slate-400 uppercase tracking-wider">Precip.</th>
              <th className="text-right px-4 py-3 text-xs font-medium text-slate-400 uppercase tracking-wider">Wind</th>
              <th className="text-left px-4 py-3 text-xs font-medium text-slate-400 uppercase tracking-wider">Condition</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row, i) => (
              <tr
                key={row.id}
                className={cn(
                  "border-b border-slate-700/50 transition-colors hover:bg-slate-800/60",
                  i % 2 === 0 ? "bg-transparent" : "bg-slate-800/20"
                )}
              >
                <td className="px-5 py-3 text-slate-300 font-medium whitespace-nowrap">
                  {format(parseISO(row.date), "EEE, MMM d")}
                </td>
                <td className="px-4 py-3 text-right text-orange-400 font-semibold">{row.tempHigh}°</td>
                <td className="px-4 py-3 text-right text-violet-400">{row.tempAvg}°</td>
                <td className="px-4 py-3 text-right text-sky-400 font-semibold">{row.tempLow}°</td>
                <td className="px-4 py-3 text-right text-slate-300">{row.humidity}%</td>
                <td className="px-4 py-3 text-right text-slate-300">
                  {row.precipitation > 0 ? (
                    <span className="text-indigo-300">{row.precipitation.toFixed(2)}"</span>
                  ) : (
                    <span className="text-slate-600">—</span>
                  )}
                </td>
                <td className="px-4 py-3 text-right text-slate-300">{row.windSpeed} mph</td>
                <td className="px-4 py-3">
                  <ConditionBadge condition={row.condition} />
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
