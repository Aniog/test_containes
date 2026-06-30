import { MapPin, RefreshCw } from 'lucide-react';
import { format } from 'date-fns';

export default function DashboardHeader({ city, lastUpdated }) {
  return (
    <header className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-6">
      <div>
        <div className="flex items-center gap-2 mb-1">
          <div className="w-8 h-8 rounded-lg bg-sky-500/10 flex items-center justify-center">
            <span className="text-sky-400 text-lg">🌤</span>
          </div>
          <h1 className="text-xl font-bold text-slate-100">Weather Dashboard</h1>
        </div>
        <div className="flex items-center gap-1.5 text-slate-400 text-sm">
          <MapPin size={13} className="text-sky-400" />
          <span className="font-medium text-slate-300">{city.name}, {city.state}</span>
          <span className="text-slate-600">·</span>
          <span>{city.lat}°N, {Math.abs(city.lon)}°W</span>
        </div>
      </div>
      <div className="flex items-center gap-2 text-xs text-slate-500">
        <RefreshCw size={12} />
        <span>Last updated: {format(lastUpdated, 'MMM d, yyyy')}</span>
      </div>
    </header>
  );
}
