import { useMemo } from "react";
import { weatherData, cityName } from "@/data/weatherData";
import StatCard from "@/components/dashboard/StatCard";
import TemperatureChart from "@/components/dashboard/TemperatureChart";
import PrecipitationChart from "@/components/dashboard/PrecipitationChart";
import HumidityWindChart from "@/components/dashboard/HumidityWindChart";
import ConditionBreakdown from "@/components/dashboard/ConditionBreakdown";
import WeatherTable from "@/components/dashboard/WeatherTable";

const Dashboard = () => {
  const stats = useMemo(() => {
    const n = weatherData.length;
    const avgHigh = Math.round((weatherData.reduce((s, d) => s + d.highTempF, 0) / n) * 10) / 10;
    const avgLow = Math.round((weatherData.reduce((s, d) => s + d.lowTempF, 0) / n) * 10) / 10;
    const avgHumidity = Math.round(weatherData.reduce((s, d) => s + d.humidity, 0) / n);
    const totalPrecip = Math.round(weatherData.reduce((s, d) => s + d.precipitationIn, 0) * 100) / 100;
    const avgWind = Math.round((weatherData.reduce((s, d) => s + d.windSpeedMph, 0) / n) * 10) / 10;
    const maxTemp = Math.max(...weatherData.map((d) => d.highTempF));
    const minTemp = Math.min(...weatherData.map((d) => d.lowTempF));
    const rainyDays = weatherData.filter((d) => d.precipitationIn > 0).length;

    // Most common condition
    const condCounts = weatherData.reduce((acc, d) => {
      acc[d.condition] = (acc[d.condition] || 0) + 1;
      return acc;
    }, {});
    const mostCommon = Object.entries(condCounts).sort((a, b) => b[1] - a[1])[0];

    return { avgHigh, avgLow, avgHumidity, totalPrecip, avgWind, maxTemp, minTemp, rainyDays, mostCommon };
  }, []);

  const today = weatherData[weatherData.length - 1];

  return (
    <div className="min-h-screen bg-slate-100">
      {/* Header */}
      <header className="bg-white border-b border-slate-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col md:flex-row md:items-center md:justify-between gap-2">
          <div>
            <h1 className="text-2xl font-bold text-slate-800 flex items-center gap-2">
              🌤️ Weather Dashboard
            </h1>
            <p className="text-sm text-slate-500 mt-0.5">
              {cityName} · Last 30 Days · Updated {today.date}
            </p>
          </div>
          <div className="flex items-center gap-3">
            <div className="bg-blue-50 border border-blue-100 rounded-xl px-4 py-2 text-center">
              <p className="text-xs text-blue-500 font-medium uppercase tracking-wide">Today</p>
              <p className="text-lg font-bold text-slate-800 flex items-center gap-1">
                {today.conditionIcon} {today.avgTempF}°F
              </p>
              <p className="text-xs text-slate-500">{today.condition}</p>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-8 space-y-8">
        {/* Summary Stats */}
        <section>
          <h2 className="text-sm font-semibold text-slate-500 uppercase tracking-wide mb-4">30-Day Summary</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <StatCard
              label="Avg High Temp"
              value={stats.avgHigh}
              unit="°F"
              icon="🌡️"
              colorClass="text-orange-500"
            />
            <StatCard
              label="Avg Low Temp"
              value={stats.avgLow}
              unit="°F"
              icon="❄️"
              colorClass="text-cyan-500"
            />
            <StatCard
              label="Record High"
              value={stats.maxTemp}
              unit="°F"
              icon="🔥"
              colorClass="text-red-500"
            />
            <StatCard
              label="Record Low"
              value={stats.minTemp}
              unit="°F"
              icon="🧊"
              colorClass="text-blue-500"
            />
            <StatCard
              label="Avg Humidity"
              value={stats.avgHumidity}
              unit="%"
              icon="💧"
              colorClass="text-blue-600"
            />
            <StatCard
              label="Total Precipitation"
              value={stats.totalPrecip}
              unit="in"
              icon="🌧️"
              colorClass="text-blue-500"
            />
            <StatCard
              label="Avg Wind Speed"
              value={stats.avgWind}
              unit="mph"
              icon="💨"
              colorClass="text-violet-500"
            />
            <StatCard
              label="Rainy Days"
              value={stats.rainyDays}
              unit={`/ 30`}
              icon="☔"
              colorClass="text-slate-700"
            />
          </div>
        </section>

        {/* Charts Row 1 */}
        <section>
          <h2 className="text-sm font-semibold text-slate-500 uppercase tracking-wide mb-4">Temperature Trends</h2>
          <TemperatureChart data={weatherData} />
        </section>

        {/* Charts Row 2 */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h2 className="text-sm font-semibold text-slate-500 uppercase tracking-wide mb-4">Precipitation</h2>
            <PrecipitationChart data={weatherData} />
          </div>
          <div>
            <h2 className="text-sm font-semibold text-slate-500 uppercase tracking-wide mb-4">Conditions</h2>
            <ConditionBreakdown data={weatherData} />
          </div>
        </section>

        {/* Charts Row 3 */}
        <section>
          <h2 className="text-sm font-semibold text-slate-500 uppercase tracking-wide mb-4">Humidity & Wind</h2>
          <HumidityWindChart data={weatherData} />
        </section>

        {/* Data Table */}
        <section>
          <h2 className="text-sm font-semibold text-slate-500 uppercase tracking-wide mb-4">Raw Data</h2>
          <WeatherTable data={weatherData} />
        </section>
      </main>

      <footer className="text-center py-6 text-xs text-slate-400">
        Weather Dashboard · {cityName} · Sample Data
      </footer>
    </div>
  );
};

export default Dashboard;
