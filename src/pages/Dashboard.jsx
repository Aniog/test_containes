import { useState, useEffect, useMemo } from 'react';
import { conditionMeta, CITY, CITY_STATE } from '@/data/weatherData';
import { fetchWeatherRecords } from '@/api/weather';
import StatCard from '@/components/dashboard/StatCard';
import TemperatureChart from '@/components/dashboard/TemperatureChart';
import PrecipitationChart from '@/components/dashboard/PrecipitationChart';
import HumidityWindChart from '@/components/dashboard/HumidityWindChart';
import DailyTable from '@/components/dashboard/DailyTable';
import WeatherIcon from '@/components/dashboard/WeatherIcon';
import { Thermometer, Droplets, Wind, MapPin, Database, RefreshCw, AlertCircle } from 'lucide-react';

const Dashboard = () => {
  const [weatherData, setWeatherData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const loadData = async () => {
    setLoading(true);
    setError(null);
    try {
      const records = await fetchWeatherRecords(CITY);
      console.log(`Loaded ${records.length} weather records from database`);
      setWeatherData(records);
    } catch (err) {
      console.error('Failed to load weather data:', err);
      setError(err.message || 'Failed to load weather data');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  const stats = useMemo(() => {
    if (!weatherData.length) return null;
    const highs = weatherData.map((d) => d.high);
    const lows = weatherData.map((d) => d.low);
    const totalPrecip = weatherData.reduce((s, d) => s + d.precipitation, 0);
    const avgHumidity = Math.round(weatherData.reduce((s, d) => s + d.humidity, 0) / weatherData.length);
    const avgWind = Math.round(weatherData.reduce((s, d) => s + d.wind, 0) / weatherData.length);
    const avgHigh = Math.round(highs.reduce((s, v) => s + v, 0) / highs.length);
    const avgLow = Math.round(lows.reduce((s, v) => s + v, 0) / lows.length);
    const rainyDays = weatherData.filter((d) => d.precipitation > 0).length;
    return { avgHigh, avgLow, totalPrecip, avgHumidity, avgWind, rainyDays };
  }, [weatherData]);

  const today = weatherData[weatherData.length - 1] ?? null;
  const todayMeta = today ? (conditionMeta[today.condition] || conditionMeta['Cloudy']) : null;

  return (
    <div className="min-h-screen bg-slate-100">
      {/* Header */}
      <header className="bg-white border-b border-slate-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col md:flex-row md:items-center md:justify-between gap-3">
          <div>
            <div className="flex items-center gap-2 text-slate-500 text-sm mb-1">
              <MapPin className="w-4 h-4" />
              <span>{CITY_STATE}</span>
            </div>
            <h1 className="text-2xl font-bold text-slate-800">{CITY} Weather Dashboard</h1>
          </div>
          <div className="flex items-center gap-3">
            {today && todayMeta && (
              <div className={`flex items-center gap-2 px-4 py-2 rounded-xl border ${todayMeta.bg} ${todayMeta.border}`}>
                <WeatherIcon name={todayMeta.icon} className={`w-6 h-6 ${todayMeta.color}`} />
                <div>
                  <p className="text-xs text-slate-500">Latest</p>
                  <p className={`text-sm font-semibold ${todayMeta.color}`}>{today.condition}</p>
                </div>
                <div className="ml-2 pl-2 border-l border-slate-200">
                  <span className="text-amber-500 font-bold text-lg">{today.high}°</span>
                  <span className="text-slate-400 text-sm"> / {today.low}°</span>
                </div>
              </div>
            )}
            <div className="flex items-center gap-1.5 text-xs text-slate-400 bg-slate-50 border border-slate-200 px-3 py-2 rounded-lg">
              <Database className="w-3.5 h-3.5" />
              <span>{loading ? '…' : `${weatherData.length} records`}</span>
            </div>
            <button
              onClick={loadData}
              disabled={loading}
              className="flex items-center gap-1.5 text-xs text-slate-500 bg-slate-50 border border-slate-200 px-3 py-2 rounded-lg hover:bg-slate-100 transition-colors disabled:opacity-50"
            >
              <RefreshCw className={`w-3.5 h-3.5 ${loading ? 'animate-spin' : ''}`} />
              <span>Refresh</span>
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-6 flex flex-col gap-6">
        {/* Loading State */}
        {loading && (
          <div className="flex flex-col items-center justify-center py-24 gap-4 text-slate-400">
            <RefreshCw className="w-8 h-8 animate-spin" />
            <p className="text-sm">Loading weather data from database…</p>
          </div>
        )}

        {/* Error State */}
        {!loading && error && (
          <div className="flex flex-col items-center justify-center py-16 gap-4">
            <div className="flex items-center gap-3 bg-red-50 border border-red-200 text-red-700 px-6 py-4 rounded-xl">
              <AlertCircle className="w-5 h-5 shrink-0" />
              <div>
                <p className="font-semibold text-sm">Failed to load data</p>
                <p className="text-xs text-red-500 mt-0.5">{error}</p>
              </div>
            </div>
            <button
              onClick={loadData}
              className="text-sm text-slate-600 border border-slate-300 px-4 py-2 rounded-lg hover:bg-slate-50 transition-colors"
            >
              Try again
            </button>
          </div>
        )}

        {/* Dashboard Content */}
        {!loading && !error && weatherData.length > 0 && stats && (
          <>
            {/* Stat Cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <StatCard
                label="Avg High"
                value={stats.avgHigh}
                unit="°F"
                sub="Monthly average"
                icon={Thermometer}
                iconColor="text-amber-500"
              />
              <StatCard
                label="Avg Low"
                value={stats.avgLow}
                unit="°F"
                sub="Monthly average"
                icon={Thermometer}
                iconColor="text-blue-400"
              />
              <StatCard
                label="Total Precip"
                value={stats.totalPrecip.toFixed(1)}
                unit="in"
                sub={`${stats.rainyDays} rainy days`}
                icon={Droplets}
                iconColor="text-blue-500"
              />
              <StatCard
                label="Avg Humidity"
                value={stats.avgHumidity}
                unit="%"
                sub={`Avg wind ${stats.avgWind} mph`}
                icon={Wind}
                iconColor="text-indigo-400"
              />
            </div>

            {/* Charts Row 1 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <TemperatureChart data={weatherData} />
              <PrecipitationChart data={weatherData} />
            </div>

            {/* Charts Row 2 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <HumidityWindChart data={weatherData} />

              {/* Condition Summary */}
              <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-5">
                <h2 className="text-lg font-semibold text-slate-700 mb-4">Condition Breakdown</h2>
                <div className="flex flex-col gap-3">
                  {Object.entries(conditionMeta).map(([condition, meta]) => {
                    const count = weatherData.filter((d) => d.condition === condition).length;
                    const pct = Math.round((count / weatherData.length) * 100);
                    return (
                      <div key={condition} className="flex items-center gap-3">
                        <div className="flex items-center gap-1.5 w-36 shrink-0">
                          <WeatherIcon name={meta.icon} className={`w-4 h-4 ${meta.color}`} />
                          <span className="text-sm text-slate-600">{condition}</span>
                        </div>
                        <div className="flex-1 bg-slate-100 rounded-full h-2.5 overflow-hidden">
                          <div
                            className={`h-full rounded-full ${meta.color.replace('text-', 'bg-')}`}
                            style={{ width: `${pct}%` }}
                          />
                        </div>
                        <span className="text-sm font-medium text-slate-500 w-16 text-right">
                          {count} days ({pct}%)
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Daily Table */}
            <DailyTable data={weatherData} />
          </>
        )}
      </main>
    </div>
  );
};

export default Dashboard;
