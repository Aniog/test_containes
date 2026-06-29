import { useState } from "react";
import { cn } from "@/lib/utils";

const ROWS_PER_PAGE = 10;

const WeatherTable = ({ data }) => {
  const [page, setPage] = useState(0);
  const [sortKey, setSortKey] = useState("date");
  const [sortDir, setSortDir] = useState("desc");

  const sorted = [...data].sort((a, b) => {
    const av = a[sortKey];
    const bv = b[sortKey];
    if (av < bv) return sortDir === "asc" ? -1 : 1;
    if (av > bv) return sortDir === "asc" ? 1 : -1;
    return 0;
  });

  const totalPages = Math.ceil(sorted.length / ROWS_PER_PAGE);
  const pageData = sorted.slice(page * ROWS_PER_PAGE, (page + 1) * ROWS_PER_PAGE);

  const handleSort = (key) => {
    if (sortKey === key) {
      setSortDir((d) => (d === "asc" ? "desc" : "asc"));
    } else {
      setSortKey(key);
      setSortDir("asc");
    }
    setPage(0);
  };

  const SortIcon = ({ col }) => {
    if (sortKey !== col) return <span className="text-slate-300 ml-1">↕</span>;
    return <span className="text-blue-500 ml-1">{sortDir === "asc" ? "↑" : "↓"}</span>;
  };

  const cols = [
    { key: "date", label: "Date" },
    { key: "condition", label: "Condition" },
    { key: "highTempF", label: "High °F" },
    { key: "lowTempF", label: "Low °F" },
    { key: "avgTempF", label: "Avg °F" },
    { key: "humidity", label: "Humidity %" },
    { key: "windSpeedMph", label: "Wind mph" },
    { key: "precipitationIn", label: "Precip in" },
    { key: "uvIndex", label: "UV" },
    { key: "visibilityMi", label: "Visibility mi" },
  ];

  return (
    <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
      <div className="p-5 border-b border-slate-100">
        <h2 className="text-lg font-semibold text-slate-700">Daily Records</h2>
        <p className="text-xs text-slate-400 mt-0.5">{data.length} days of data</p>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-slate-50 border-b border-slate-200">
              {cols.map((col) => (
                <th
                  key={col.key}
                  onClick={() => handleSort(col.key)}
                  className="px-4 py-3 text-left text-xs font-semibold text-slate-500 uppercase tracking-wide cursor-pointer select-none whitespace-nowrap hover:text-slate-700"
                >
                  {col.label}
                  <SortIcon col={col.key} />
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {pageData.map((row, idx) => (
              <tr
                key={row.id}
                className={cn(
                  "border-b border-slate-100 hover:bg-blue-50 transition-colors",
                  idx % 2 === 0 ? "bg-white" : "bg-slate-50/50"
                )}
              >
                <td className="px-4 py-3 text-slate-700 font-medium whitespace-nowrap">{row.date}</td>
                <td className="px-4 py-3 whitespace-nowrap">
                  <span className="flex items-center gap-1.5 text-slate-700">
                    <span>{row.conditionIcon}</span>
                    {row.condition}
                  </span>
                </td>
                <td className="px-4 py-3 text-orange-600 font-semibold">{row.highTempF}°</td>
                <td className="px-4 py-3 text-cyan-600 font-semibold">{row.lowTempF}°</td>
                <td className="px-4 py-3 text-slate-700">{row.avgTempF}°</td>
                <td className="px-4 py-3 text-slate-700">{row.humidity}%</td>
                <td className="px-4 py-3 text-slate-700">{row.windSpeedMph}</td>
                <td className="px-4 py-3 text-blue-600 font-medium">{row.precipitationIn}</td>
                <td className="px-4 py-3">
                  <span className={cn(
                    "px-2 py-0.5 rounded-full text-xs font-semibold",
                    row.uvIndex >= 7 ? "bg-red-100 text-red-700" :
                    row.uvIndex >= 4 ? "bg-orange-100 text-orange-700" :
                    "bg-green-100 text-green-700"
                  )}>
                    {row.uvIndex}
                  </span>
                </td>
                <td className="px-4 py-3 text-slate-700">{row.visibilityMi}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="flex items-center justify-between px-5 py-3 border-t border-slate-100">
        <span className="text-xs text-slate-400">
          Page {page + 1} of {totalPages}
        </span>
        <div className="flex gap-2">
          <button
            onClick={() => setPage((p) => Math.max(0, p - 1))}
            disabled={page === 0}
            className="px-3 py-1 text-xs rounded-lg border border-slate-200 text-slate-600 disabled:opacity-40 hover:bg-slate-50 transition-colors"
          >
            Previous
          </button>
          <button
            onClick={() => setPage((p) => Math.min(totalPages - 1, p + 1))}
            disabled={page === totalPages - 1}
            className="px-3 py-1 text-xs rounded-lg border border-slate-200 text-slate-600 disabled:opacity-40 hover:bg-slate-50 transition-colors"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default WeatherTable;
