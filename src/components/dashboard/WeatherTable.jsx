import { useState } from "react";
import { format, parseISO } from "date-fns";
import { ChevronUp, ChevronDown } from "lucide-react";
import ConditionBadge from "./ConditionBadge";

const COLUMNS = [
  { key: "date", label: "Date" },
  { key: "condition", label: "Condition" },
  { key: "high", label: "High (°F)" },
  { key: "low", label: "Low (°F)" },
  { key: "humidity", label: "Humidity (%)" },
  { key: "precipitation", label: "Precip (in)" },
  { key: "wind_speed", label: "Wind (mph)" },
  { key: "uv_index", label: "UV Index" },
  { key: "visibility", label: "Visibility (mi)" },
];

function SortIcon({ column, sortKey, sortDir }) {
  if (sortKey !== column) return <ChevronUp className="w-3 h-3 text-slate-600" />;
  return sortDir === "asc"
    ? <ChevronUp className="w-3 h-3 text-sky-400" />
    : <ChevronDown className="w-3 h-3 text-sky-400" />;
}

export default function WeatherTable({ records }) {
  const [sortKey, setSortKey] = useState("date");
  const [sortDir, setSortDir] = useState("desc");
  const [page, setPage] = useState(1);
  const perPage = 10;

  const sorted = [...records].sort((a, b) => {
    let av = a[sortKey];
    let bv = b[sortKey];
    if (typeof av === "string") av = av.toLowerCase();
    if (typeof bv === "string") bv = bv.toLowerCase();
    if (av < bv) return sortDir === "asc" ? -1 : 1;
    if (av > bv) return sortDir === "asc" ? 1 : -1;
    return 0;
  });

  const totalPages = Math.ceil(sorted.length / perPage);
  const paginated = sorted.slice((page - 1) * perPage, page * perPage);

  function handleSort(key) {
    if (sortKey === key) {
      setSortDir((d) => (d === "asc" ? "desc" : "asc"));
    } else {
      setSortKey(key);
      setSortDir("asc");
    }
    setPage(1);
  }

  function uvColor(uv) {
    if (uv <= 2) return "text-green-400";
    if (uv <= 5) return "text-yellow-400";
    if (uv <= 7) return "text-amber-400";
    if (uv <= 10) return "text-orange-400";
    return "text-red-400";
  }

  return (
    <div className="bg-slate-900 border border-slate-700 rounded-xl shadow-lg overflow-hidden">
      <div className="p-5 border-b border-slate-700">
        <h2 className="text-lg font-semibold text-slate-100">Daily Records</h2>
        <p className="text-xs text-slate-500 mt-0.5">{records.length} days of data</p>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-slate-800/50">
              {COLUMNS.map((col) => (
                <th
                  key={col.key}
                  onClick={() => handleSort(col.key)}
                  className="px-4 py-3 text-left text-xs font-semibold text-slate-400 uppercase tracking-wider cursor-pointer hover:text-slate-200 select-none whitespace-nowrap"
                >
                  <span className="inline-flex items-center gap-1">
                    {col.label}
                    <SortIcon column={col.key} sortKey={sortKey} sortDir={sortDir} />
                  </span>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {paginated.map((row, i) => (
              <tr
                key={row.id}
                className={`border-b border-slate-800 hover:bg-slate-800/40 transition-colors ${
                  i % 2 === 0 ? "bg-slate-900" : "bg-slate-800/20"
                }`}
              >
                <td className="px-4 py-3 text-slate-200 whitespace-nowrap font-medium">
                  {format(parseISO(row.date), "MMM d, yyyy")}
                </td>
                <td className="px-4 py-3 whitespace-nowrap">
                  <ConditionBadge condition={row.condition} />
                </td>
                <td className="px-4 py-3 text-amber-300 font-semibold">{row.high}°</td>
                <td className="px-4 py-3 text-blue-300 font-semibold">{row.low}°</td>
                <td className="px-4 py-3 text-slate-300">{row.humidity}%</td>
                <td className="px-4 py-3 text-slate-300">
                  {row.precipitation > 0 ? (
                    <span className="text-sky-300">{row.precipitation.toFixed(2)}"</span>
                  ) : (
                    <span className="text-slate-500">—</span>
                  )}
                </td>
                <td className="px-4 py-3 text-slate-300">{row.wind_speed} mph</td>
                <td className={`px-4 py-3 font-semibold ${uvColor(row.uv_index)}`}>
                  {row.uv_index}
                </td>
                <td className="px-4 py-3 text-slate-300">{row.visibility} mi</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {totalPages > 1 && (
        <div className="flex items-center justify-between px-5 py-3 border-t border-slate-700">
          <span className="text-xs text-slate-500">
            Page {page} of {totalPages}
          </span>
          <div className="flex gap-2">
            <button
              onClick={() => setPage((p) => Math.max(1, p - 1))}
              disabled={page === 1}
              className="px-3 py-1 text-xs rounded-md bg-slate-800 text-slate-300 border border-slate-700 hover:bg-slate-700 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
            >
              Previous
            </button>
            <button
              onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
              disabled={page === totalPages}
              className="px-3 py-1 text-xs rounded-md bg-slate-800 text-slate-300 border border-slate-700 hover:bg-slate-700 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
            >
              Next
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
