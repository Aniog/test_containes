import { useMemo } from "react";
import {
  Thermometer,
  Droplets,
  Wind,
  CloudRain,
  Sun,
  TrendingUp,
  TrendingDown,
  Calendar,
} from "lucide-react";
import { weatherData, getStats, CITY } from "@/data/weatherData";
import StatCard from "@/components/dashboard/StatCard";
import TemperatureChart from "@/components/dashboard/TemperatureChart";
import PrecipitationChart from "@/components/dashboard/PrecipitationChart";
import HumidityChart from "@/components/dashboard/HumidityChart";
import WeatherTable from "@/components/dashboard/WeatherTable";
import ConditionBreakdown from "@/components/dashboard/ConditionBreakdown";

const Dashboard = () => {
  const stats = useMemo(() => getStats(), []);

  console.log("Dashboard loaded. Stats:", stats);
  console.log("Total weather records:", weatherData.length);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      {/* Header */}
      <header className="border-b border-slate-800 bg-slate-900/80 backdrop-blur-sm sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-sky-500/20 rounded-lg">
              <Sun size={20} className="text-sky-400" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-slate-100">
                {CITY.name}, {CITY.state}
              </h1>
              <p className="text-xs text-slate-500">Weather Dashboard</p>
            </div>
          </div>
          <div className="flex items-center gap-2 text-xs text-slate-500">
            <Calendar size={13} />
            <span>June 2026 · {stats.totalDays} days</span>
          </div>
        </div>
      </header>

      {/* Main content */}
      <main className="max-w-7xl mx-auto px-6 py-8 space-y-8">

        {/* Stat Cards */}
        <section>
          <h2 className="text-sm font-medium text-slate-500 uppercase tracking-wider mb-4">
            Monthly Summary
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <StatCard
              icon={TrendingUp}
              label="Avg High"
              value={stats.avgHigh}
              unit="°F"
              sub={`Peak: ${stats.maxHigh}°F`}
              accentClass="text-orange-400"
            />
            <StatCard
              icon={TrendingDown}
              label="Avg Low"
              value={stats.avgLow}
              unit="°F"
              sub={`Coldest: ${stats.minLow}°F`}
              accentClass="text-sky-400"
            />
            <StatCard
              icon={Droplets}
              label="Avg Humidity"
              value={stats.avgHumidity}
              unit="%"
              sub={`${stats.rainyDays} rainy days`}
              accentClass="text-emerald-400"
            />
            <StatCard
              icon={CloudRain}
              label="Total Precip."
              value={stats.totalPrecip}
              unit=" in"
              sub={`${stats.rainyDays} days with rain`}
              accentClass="text-indigo-400"
            />
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
            <StatCard
              icon={Thermometer}
              label="Record High"
              value={stats.maxHigh}
              unit="°F"
              sub="Hottest day of month"
              accentClass="text-red-400"
            />
            <StatCard
              icon={Thermometer}
              label="Record Low"
              value={stats.minLow}
              unit="°F"
              sub="Coldest day of month"
              accentClass="text-cyan-400"
            />
            <StatCard
              icon={Wind}
              label="Avg Wind"
              value={stats.avgWind}
              unit=" mph"
              sub="Monthly average"
              accentClass="text-violet-400"
            />
            <StatCard
              icon={Sun}
              label="Sunny Days"
              value={stats.conditionCounts["Sunny"] ?? 0}
              unit=" days"
              sub={`${stats.conditionCounts["Partly Cloudy"] ?? 0} partly cloudy`}
              accentClass="text-amber-400"
            />
          </div>
        </section>

        {/* Temperature Chart — full width */}
        <section>
          <h2 className="text-sm font-medium text-slate-500 uppercase tracking-wider mb-4">
            Temperature Trends
          </h2>
          <TemperatureChart data={weatherData} />
        </section>

        {/* Precipitation + Humidity side by side */}
        <section>
          <h2 className="text-sm font-medium text-slate-500 uppercase tracking-wider mb-4">
            Precipitation & Humidity
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <PrecipitationChart data={weatherData} />
            <HumidityChart data={weatherData} />
          </div>
        </section>

        {/* Condition Breakdown */}
        <section>
          <h2 className="text-sm font-medium text-slate-500 uppercase tracking-wider mb-4">
            Weather Conditions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <ConditionBreakdown conditionCounts={stats.conditionCounts} />
            {/* Quick condition summary cards */}
            <div className="md:col-span-2 grid grid-cols-2 sm:grid-cols-3 gap-4 content-start">
              {Object.entries(stats.conditionCounts).map(([condition, count]) => (
                <div
                  key={condition}
                  className="bg-slate-900 border border-slate-700 rounded-xl p-4 flex flex-col gap-1"
                >
                  <span className="text-xs text-slate-500 uppercase tracking-wider">{condition}</span>
                  <span className="text-2xl font-bold text-slate-100">{count}</span>
                  <span className="text-xs text-slate-500">
                    {Math.round((count / stats.totalDays) * 100)}% of month
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Data Table */}
        <section>
          <h2 className="text-sm font-medium text-slate-500 uppercase tracking-wider mb-4">
            Full Data Table
          </h2>
          <WeatherTable data={weatherData} />
        </section>

      </main>

      {/* Footer */}
      <footer className="border-t border-slate-800 mt-12 py-6">
        <p className="text-center text-xs text-slate-600">
          {CITY.name}, {CITY.state} · {CITY.lat}°N, {Math.abs(CITY.lon)}°W · Sample data for June 2026
        </p>
      </footer>
    </div>
  );
};

export default Dashboard;
