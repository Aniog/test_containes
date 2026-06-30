import { format, parseISO } from 'date-fns';
import { MapPin, RefreshCw, Loader2, AlertCircle } from 'lucide-react';
import { useWeatherData } from '@/hooks/useWeatherData';
import WeatherConditionBadge from '@/components/dashboard/WeatherConditionBadge';
import WeatherSummaryCards from '@/components/dashboard/WeatherSummaryCards';
import TemperatureChart from '@/components/dashboard/TemperatureChart';
import WeatherTable from '@/components/dashboard/WeatherTable';

const Dashboard = () => {
  const { records, todayData, monthlyStats, loading, error, refetch } = useWeatherData();

  const formattedDate = todayData
    ? format(parseISO(todayData.date), 'EEEE, MMMM d, yyyy')
    : '—';

  if (loading) {
    return (
      <div className="min-h-screen bg-slate-100">
        <header className="bg-white border-b border-slate-200 shadow-sm">
          <div className="max-w-7xl mx-auto px-4 md:px-6 py-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-blue-600 rounded-lg">
                <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                </svg>
              </div>
              <div>
                <h1 className="text-xl font-bold text-slate-800">Weather Dashboard</h1>
                <p className="text-xs text-slate-500">Monthly climate data</p>
              </div>
            </div>
            <div className="flex items-center gap-2 text-sm text-slate-400">
              <Loader2 className="w-3.5 h-3.5 animate-spin" />
              <span className="hidden sm:inline">Loading…</span>
            </div>
          </div>
        </header>
        <main className="max-w-7xl mx-auto px-4 md:px-6 py-6 space-y-6">
          <div className="rounded-xl bg-gradient-to-r from-blue-600 to-sky-500 h-40 animate-pulse" />
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="bg-white rounded-xl border border-slate-200 h-24 animate-pulse" />
            ))}
          </div>
          <div className="bg-white rounded-xl border border-slate-200 h-72 animate-pulse" />
          <div className="bg-white rounded-xl border border-slate-200 h-64 animate-pulse" />
        </main>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-slate-100 flex items-center justify-center">
        <div className="flex flex-col items-center gap-3 text-slate-600 max-w-sm text-center">
          <AlertCircle className="w-8 h-8 text-red-400" />
          <p className="font-semibold">Failed to load weather data</p>
          <p className="text-sm text-slate-500">{error}</p>
          <button
            onClick={refetch}
            className="mt-2 px-4 py-2 bg-blue-600 text-white text-sm rounded-lg hover:bg-blue-700 transition-colors"
          >
            Try again
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-100">
      {/* Header */}
      <header className="bg-white border-b border-slate-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 md:px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-blue-600 rounded-lg">
              <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
              </svg>
            </div>
            <div>
              <h1 className="text-xl font-bold text-slate-800">Weather Dashboard</h1>
              <p className="text-xs text-slate-500">Monthly climate data</p>
            </div>
          </div>
          <div className="flex items-center gap-2 text-sm text-slate-500">
            <button
              onClick={refetch}
              className="flex items-center gap-1.5 hover:text-blue-600 transition-colors"
              title="Refresh data"
            >
              <RefreshCw className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Updated: {formattedDate}</span>
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 md:px-6 py-6 space-y-6">
        {/* City + Today Banner */}
        {todayData && (
          <div className="relative rounded-xl overflow-hidden bg-gradient-to-r from-blue-600 to-sky-500 text-white p-6 md:p-8">
            <div className="relative z-10 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <MapPin className="w-4 h-4 opacity-80" />
                  <span className="text-sm font-medium opacity-80">{todayData.state}</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold">{todayData.city}</h2>
                <p className="text-sm opacity-75 mt-1">{formattedDate}</p>
              </div>
              <div className="flex items-center gap-4">
                <div className="text-center">
                  <p className="text-5xl font-bold">{todayData.tempHigh}°</p>
                  <p className="text-sm opacity-75 mt-1">High today</p>
                </div>
                <div className="w-px h-16 bg-white opacity-30" />
                <div className="text-center">
                  <WeatherConditionBadge condition={todayData.condition} size="lg" />
                  <p className="text-sm opacity-75 mt-2">Low: {todayData.tempLow}°F</p>
                </div>
              </div>
            </div>
            <div className="absolute -top-8 -right-8 w-40 h-40 bg-white opacity-5 rounded-full" />
            <div className="absolute -bottom-12 -right-4 w-56 h-56 bg-white opacity-5 rounded-full" />
          </div>
        )}

        {/* Summary Cards */}
        {todayData && monthlyStats && (
          <WeatherSummaryCards todayData={todayData} monthlyStats={monthlyStats} />
        )}

        {/* Chart */}
        {records.length > 0 && <TemperatureChart records={records} />}

        {/* Table */}
        {records.length > 0 && <WeatherTable records={records} />}
      </main>
    </div>
  );
};

export default Dashboard;
