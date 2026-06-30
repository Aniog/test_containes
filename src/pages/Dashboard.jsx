import { useState, useEffect, useMemo } from 'react';
import { Thermometer, Droplets, Wind, Sun, CloudRain, TrendingUp, RefreshCw } from 'lucide-react';
import { fetchWeatherRecords } from '../api/weatherApi';
import DashboardHeader from '../components/dashboard/DashboardHeader';
import StatCard from '../components/dashboard/StatCard';
import TemperatureChart from '../components/dashboard/TemperatureChart';
import HumidityChart from '../components/dashboard/HumidityChart';
import WindChart from '../components/dashboard/WindChart';
import WeatherTable from '../components/dashboard/WeatherTable';

const CITY = {
  name: 'San Francisco',
  state: 'CA',
  country: 'US',
  lat: 37.7749,
  lon: -122.4194,
};

const CONDITION_EMOJI = {
  Sunny: '☀️',
  'Partly Cloudy': '⛅',
  Foggy: '🌫️',
  Overcast: '☁️',
  Rainy: '🌧️',
};

export default function Dashboard() {
  const [records, setRecords] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [lastUpdated, setLastUpdated] = useState(null);

  const load = async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await fetchWeatherRecords('San Francisco');
      console.log('[Dashboard] fetched', data.length, 'records from DB');
      setRecords(data);
      setLastUpdated(new Date());
    } catch (err) {
      console.error('[Dashboard] fetch error:', err);
      setError(err.message || 'Failed to load weather data');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { load(); }, []);

  const stats = useMemo(() => {
    if (!records.length) return null;
    const temps = records.map((r) => r.tempHigh);
    const lows = records.map((r) => r.tempLow);
    const humidities = records.map((r) => r.humidity);
    const winds = records.map((r) => r.windSpeed);
    const totalPrecip = records.reduce((s, r) => s + r.precipitation, 0);
    const avgUV = records.reduce((s, r) => s + r.uvIndex, 0) / records.length;
    return {
      avgHigh: Math.round(temps.reduce((a, b) => a + b, 0) / temps.length),
      maxHigh: Math.max(...temps),
      minLow: Math.min(...lows),
      avgHumidity: Math.round(humidities.reduce((a, b) => a + b, 0) / humidities.length),
      avgWind: Math.round(winds.reduce((a, b) => a + b, 0) / winds.length),
      maxWind: Math.max(...winds),
      totalPrecip: totalPrecip.toFixed(1),
      avgUV: avgUV.toFixed(1),
    };
  }, [records]);

  const lastRecord = records[records.length - 1] ?? null;

  if (loading) {
    return (
      <div className="min-h-screen bg-slate-900 flex items-center justify-center">
        <div className="text-center">
          <RefreshCw className="w-10 h-10 text-sky-400 animate-spin mx-auto mb-4" />
          <p className="text-slate-400 text-sm">Loading weather data…</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-slate-900 flex items-center justify-center">
        <div className="text-center max-w-sm">
          <p className="text-rose-400 font-semibold mb-2">Failed to load data</p>
          <p className="text-slate-500 text-sm mb-4">{error}</p>
          <button
            onClick={load}
            className="px-4 py-2 bg-sky-600 hover:bg-sky-500 text-white text-sm rounded-lg transition-colors"
          >
            Retry
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6">
        <DashboardHeader city={CITY} lastUpdated={lastUpdated} />

        {/* Today's snapshot */}
        {lastRecord && (
          <div className="bg-slate-800/60 border border-slate-700 rounded-xl p-5 mb-6 flex flex-col sm:flex-row sm:items-center gap-4">
            <div className="flex items-center gap-4">
              <span className="text-5xl">{CONDITION_EMOJI[lastRecord.condition] ?? '🌡️'}</span>
              <div>
                <p className="text-xs text-slate-400 uppercase tracking-wider font-medium mb-0.5">
                  Today · {new Date(lastRecord.date + 'T12:00:00').toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                </p>
                <p className="text-4xl font-bold text-slate-100">
                  {lastRecord.tempHigh}°<span className="text-slate-400 text-2xl">F</span>
                </p>
                <p className="text-slate-400 text-sm">{lastRecord.condition} · Low {lastRecord.tempLow}°F</p>
              </div>
            </div>
            <div className="sm:ml-auto grid grid-cols-3 gap-6 text-center">
              <div>
                <p className="text-xs text-slate-500 uppercase tracking-wider">Humidity</p>
                <p className="text-lg font-semibold text-violet-400">{lastRecord.humidity}%</p>
              </div>
              <div>
                <p className="text-xs text-slate-500 uppercase tracking-wider">Wind</p>
                <p className="text-lg font-semibold text-emerald-400">{lastRecord.windSpeed} mph</p>
              </div>
              <div>
                <p className="text-xs text-slate-500 uppercase tracking-wider">UV Index</p>
                <p className="text-lg font-semibold text-amber-400">{lastRecord.uvIndex}</p>
              </div>
            </div>
          </div>
        )}

        {/* Stat cards */}
        {stats && (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-6">
            <StatCard icon={Thermometer} iconColor="text-amber-400" iconBg="bg-amber-500/10" label="Avg High" value={stats.avgHigh} unit="°F" sub={`Peak: ${stats.maxHigh}°F`} />
            <StatCard icon={TrendingUp} iconColor="text-violet-400" iconBg="bg-violet-500/10" label="Min Low" value={stats.minLow} unit="°F" sub="30-day low" />
            <StatCard icon={Droplets} iconColor="text-sky-400" iconBg="bg-sky-500/10" label="Avg Humidity" value={stats.avgHumidity} unit="%" sub="Monthly avg" />
            <StatCard icon={Wind} iconColor="text-emerald-400" iconBg="bg-emerald-500/10" label="Avg Wind" value={stats.avgWind} unit="mph" sub={`Max: ${stats.maxWind} mph`} />
            <StatCard icon={CloudRain} iconColor="text-blue-400" iconBg="bg-blue-500/10" label="Total Precip." value={stats.totalPrecip} unit="in" sub="Monthly total" />
            <StatCard icon={Sun} iconColor="text-rose-400" iconBg="bg-rose-500/10" label="Avg UV Index" value={stats.avgUV} sub="Monthly avg" />
          </div>
        )}

        {/* Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-6">
          <div className="lg:col-span-2">
            <TemperatureChart data={records} />
          </div>
          <HumidityChart data={records} />
          <WindChart data={records} />
        </div>

        {/* Data table */}
        <WeatherTable data={records} />

        <p className="text-center text-xs text-slate-600 mt-6">
          Data source: Database · {records.length} days · {CITY.name}, {CITY.state}
        </p>
      </div>
    </div>
  );
}
