import { useState, useEffect, useMemo } from "react";
import { format, parseISO } from "date-fns";
import { Thermometer, Droplets, Wind, Sun, CloudRain, Database } from "lucide-react";
import { city, getStats } from "@/data/weatherData";
import { fetchWeatherRecords } from "@/api/weatherApi";
import DashboardHeader from "@/components/dashboard/DashboardHeader";
import StatCard from "@/components/dashboard/StatCard";
import TemperatureChart from "@/components/dashboard/TemperatureChart";
import PrecipitationChart from "@/components/dashboard/PrecipitationChart";
import WeatherTable from "@/components/dashboard/WeatherTable";

export default function Dashboard() {
  const [records, setRecords] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchWeatherRecords().then((data) => {
      setRecords(data);
      setLoading(false);
    });
  }, []);

  const stats = useMemo(() => (records.length ? getStats(records) : null), [records]);
  const sorted = useMemo(
    () => [...records].sort((a, b) => a.date.localeCompare(b.date)),
    [records]
  );
  const latest = sorted[sorted.length - 1];
  const dateRange =
    sorted.length >= 2
      ? `${format(parseISO(sorted[0].date), "MMM d")} – ${format(
          parseISO(sorted[sorted.length - 1].date),
          "MMM d, yyyy"
        )}`
      : "";

  if (loading) {
    return (
      <div className="min-h-screen bg-slate-950 flex items-center justify-center">
        <div className="text-center">
          <Database className="w-10 h-10 text-sky-400 mx-auto mb-3 animate-pulse" />
          <p className="text-slate-400 text-sm">Loading weather data…</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <DashboardHeader city={city} latestRecord={latest} dateRange={dateRange} />

        {/* Summary Stats */}
        {stats && (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-8">
            <StatCard
              label="Avg High"
              value={stats.avgHigh}
              unit="°F"
              icon={Thermometer}
              iconColor="text-amber-400"
              subtext={`Peak: ${stats.maxHigh}°F`}
            />
            <StatCard
              label="Avg Low"
              value={stats.avgLow}
              unit="°F"
              icon={Thermometer}
              iconColor="text-blue-400"
              subtext={`Min: ${stats.minLow}°F`}
            />
            <StatCard
              label="Avg Humidity"
              value={stats.avgHumidity}
              unit="%"
              icon={Droplets}
              iconColor="text-sky-400"
              subtext={`${records.length}-day average`}
            />
            <StatCard
              label="Total Precip"
              value={stats.totalPrecip}
              unit="in"
              icon={CloudRain}
              iconColor="text-sky-400"
              subtext={`${stats.rainyDays} rainy days`}
            />
            <StatCard
              label="Avg Wind"
              value={stats.avgWind}
              unit="mph"
              icon={Wind}
              iconColor="text-teal-400"
              subtext={`${records.length}-day average`}
            />
            <StatCard
              label="Sunny Days"
              value={stats.sunnyDays}
              unit=""
              icon={Sun}
              iconColor="text-amber-400"
              subtext={`of ${records.length} days`}
            />
          </div>
        )}

        {/* Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          <div className="lg:col-span-2">
            <TemperatureChart records={sorted} />
          </div>
          <div>
            <PrecipitationChart records={sorted} />
          </div>
        </div>

        {/* Data Table */}
        <WeatherTable records={records} />
      </div>
    </div>
  );
}
