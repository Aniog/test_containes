import { useState, useEffect, useMemo } from 'react';
import { Thermometer, Droplets, Wind, CloudRain, Sun, MapPin, RefreshCw, AlertCircle } from 'lucide-react';
import { format, parseISO } from 'date-fns';
import { fetchWeatherRecords } from '../api/weatherApi';
import StatCard from '../components/dashboard/StatCard';
import TemperatureChart from '../components/dashboard/TemperatureChart';
import HumidityWindChart from '../components/dashboard/HumidityWindChart';
import WeatherTable from '../components/dashboard/WeatherTable';
import WeatherIcon from '../components/dashboard/WeatherIcon';

const Dashboard = () => {
  const [weatherData, setWeatherData] = useState([]);
  const [status, setStatus] = useState('loading'); // 'loading' | 'ready' | 'error'
  const [error, setError] = useState(null);

  const loadData = async () => {
    setStatus('loading');
    setError(null);
    try {
      const records = await fetchWeatherRecords();
      setWeatherData(records);
      setStatus('ready');
    } catch (err) {
      console.error('[Dashboard] Failed to load weather data:', err);
      setError(err.message || 'Failed to load weather data');
      setStatus('error');
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  const today = weatherData[weatherData.length - 1] ?? null;
  const city = today?.city ?? 'San Francisco';
  const country = today?.country ?? 'CA, USA';
  const dayCount = weatherData.length;

  const stats = useMemo(() => {
    if (!weatherData.length) return null;
    const highs = weatherData.map((d) => d.high);
    const lows  = weatherData.map((d) => d.low);
    const avgHumidity = Math.round(weatherData.reduce((s, d) => s + d.humidity, 0) / weatherData.length);
    const totalPrecip = weatherData.reduce((s, d) => s + d.precip, 0).toFixed(1);
    const avgWind = Math.round(weatherData.reduce((s, d) => s + d.wind, 0) / weatherData.length);
    const sunnyDays = weatherData.filter((d) => d.condition === 'Sunny').length;
    return {
      maxHigh: Math.max(...highs),
      minLow: Math.min(...lows),
      avgHumidity,
      totalPrecip,
      avgWind,
      sunnyDays,
    };
  }, [weatherData]);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      {/* Header */}
      <header className="bg-slate-900 border-b border-slate-800 px-6 py-4">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
          <div>
            <h1 className="text-2xl font-bold text-slate-100 flex items-center gap-2">
              <Sun className="text-yellow-400" size={26} />
              Weather Dashboard
            </h1>
            <p className="text-sm text-slate-400 mt-0.5">
              {dayCount > 0 ? `${dayCount}-day historical data` : 'Historical data'}
            </p>
          </div>
          <div className="flex items-center gap-2 text-slate-300">
            <MapPin size={16} className="text-sky-400" />
            <span className="font-semibold text-slate-100">{city}</span>
            <span className="text-slate-500">{country}</span>
            {today && (
              <span className="ml-3 text-xs text-slate-500">
                Updated {format(parseISO(today.date), 'MMM d, yyyy')}
              </span>
            )}
            <button
              onClick={loadData}
              disabled={status === 'loading'}
              className="ml-3 p-1.5 rounded-md text-slate-400 hover:text-slate-100 hover:bg-slate-700 transition-colors disabled:opacity-40"
              title="Refresh data"
            >
              <RefreshCw size={15} className={status === 'loading' ? 'animate-spin' : ''} />
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 py-6 space-y-6">

        {/* Loading state */}
        {status === 'loading' && (
          <div className="flex items-center justify-center py-24 gap-3 text-slate-400">
            <RefreshCw size={20} className="animate-spin" />
            <span>Loading weather data…</span>
          </div>
        )}

        {/* Error state */}
        {status === 'error' && (
          <div className="flex flex-col items-center justify-center py-20 gap-4 text-center">
            <AlertCircle size={40} className="text-red-400" />
            <p className="text-slate-300 font-medium">Failed to load weather data</p>
            <p className="text-slate-500 text-sm max-w-sm">{error}</p>
            <button
              onClick={loadData}
              className="mt-2 px-4 py-2 bg-sky-600 hover:bg-sky-500 text-white rounded-lg text-sm font-medium transition-colors"
            >
              Try again
            </button>
          </div>
        )}

        {/* Dashboard content */}
        {status === 'ready' && today && stats && (
          <>
            {/* Today's snapshot */}
            <div className="bg-slate-800 border border-slate-700 rounded-xl p-5 flex flex-col sm:flex-row sm:items-center gap-4">
              <div className="flex items-center gap-4">
                <WeatherIcon condition={today.condition} size={56} />
                <div>
                  <p className="text-xs uppercase tracking-wider text-slate-400">Today</p>
                  <p className="text-5xl font-bold text-slate-100">{today.high}°<span className="text-2xl text-slate-400">F</span></p>
                  <p className="text-slate-400 text-sm mt-0.5">{today.condition} · Low {today.low}°F</p>
                </div>
              </div>
              <div className="sm:ml-auto grid grid-cols-3 gap-4 text-center">
                <div>
                  <p className="text-xs text-slate-500 uppercase tracking-wider">Humidity</p>
                  <p className="text-lg font-semibold text-slate-100">{today.humidity}%</p>
                </div>
                <div>
                  <p className="text-xs text-slate-500 uppercase tracking-wider">Wind</p>
                  <p className="text-lg font-semibold text-slate-100">{today.wind} mph</p>
                </div>
                <div>
                  <p className="text-xs text-slate-500 uppercase tracking-wider">UV Index</p>
                  <p className={`text-lg font-semibold ${today.uv >= 8 ? 'text-red-400' : today.uv >= 5 ? 'text-yellow-400' : 'text-green-400'}`}>
                    {today.uv}
                  </p>
                </div>
              </div>
            </div>

            {/* Stat cards */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
              <StatCard label="Peak High"    value={stats.maxHigh}      unit="°F"    icon={Thermometer} iconColor="text-orange-400" sub={`${dayCount}-day record`} />
              <StatCard label="Lowest Low"   value={stats.minLow}       unit="°F"    icon={Thermometer} iconColor="text-sky-400"    sub={`${dayCount}-day record`} />
              <StatCard label="Avg Humidity" value={stats.avgHumidity}  unit="%"     icon={Droplets}    iconColor="text-indigo-400" sub={`${dayCount}-day average`} />
              <StatCard label="Total Precip" value={stats.totalPrecip}  unit='"'     icon={CloudRain}   iconColor="text-sky-400"    sub={`${dayCount}-day total`} />
              <StatCard label="Avg Wind"     value={stats.avgWind}      unit=" mph"  icon={Wind}        iconColor="text-slate-300"  sub={`${dayCount}-day average`} />
              <StatCard label="Sunny Days"   value={stats.sunnyDays}    unit=" days" icon={Sun}         iconColor="text-yellow-400" sub={`out of ${dayCount}`} />
            </div>

            {/* Charts */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <TemperatureChart data={weatherData} />
              <HumidityWindChart data={weatherData} />
            </div>

            {/* Table */}
            <WeatherTable data={weatherData} />
          </>
        )}
      </main>
    </div>
  );
};

export default Dashboard;
