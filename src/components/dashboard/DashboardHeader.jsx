import { MapPin, Calendar } from "lucide-react";
import { format, parseISO } from "date-fns";

export default function DashboardHeader({ city, latestRecord, dateRange }) {
  return (
    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
      <div>
        <div className="flex items-center gap-2 mb-1">
          <MapPin className="w-5 h-5 text-sky-400" />
          <h1 className="text-2xl font-bold text-white">
            {city.name}, {city.state}
          </h1>
        </div>
        <p className="text-sm text-slate-400">
          {city.lat}°N, {Math.abs(city.lon)}°W · {city.timezone}
        </p>
      </div>

      <div className="flex flex-col sm:flex-row gap-3">
        {latestRecord && (
          <div className="bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 flex items-center gap-3">
            <div>
              <p className="text-xs text-slate-400 uppercase tracking-wider">Latest Reading</p>
              <p className="text-white font-semibold">
                {format(parseISO(latestRecord.date), "MMM d, yyyy")}
              </p>
            </div>
            <div className="text-right">
              <p className="text-amber-300 font-bold text-lg">{latestRecord.high}°F</p>
              <p className="text-blue-300 text-sm">{latestRecord.low}°F</p>
            </div>
          </div>
        )}
        <div className="bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 flex items-center gap-2">
          <Calendar className="w-4 h-4 text-slate-400" />
          <div>
            <p className="text-xs text-slate-400 uppercase tracking-wider">Date Range</p>
            <p className="text-slate-200 text-sm font-medium">{dateRange}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
