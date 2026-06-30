import { Thermometer, Droplets, Wind, Sun, CloudRain, Calendar } from 'lucide-react';

const StatCard = ({ icon: Icon, iconColor, label, value, sub }) => (
  <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-5 flex items-start gap-4">
    <div className={`p-2.5 rounded-lg ${iconColor} bg-opacity-10`}>
      <Icon className={`w-5 h-5 ${iconColor}`} />
    </div>
    <div className="min-w-0">
      <p className="text-xs font-medium text-slate-500 uppercase tracking-wide mb-1">{label}</p>
      <p className="text-2xl font-bold text-slate-800 leading-none">{value}</p>
      {sub && <p className="text-xs text-slate-500 mt-1">{sub}</p>}
    </div>
  </div>
);

const WeatherSummaryCards = ({ todayData, monthlyStats }) => {
  const stats = [
    {
      icon: Thermometer,
      iconColor: 'text-orange-500',
      label: "Today's High / Low",
      value: `${todayData.tempHigh}° / ${todayData.tempLow}°F`,
      sub: `Monthly avg: ${monthlyStats.avgHigh}° / ${monthlyStats.avgLow}°F`,
    },
    {
      icon: Droplets,
      iconColor: 'text-blue-500',
      label: 'Humidity',
      value: `${todayData.humidity}%`,
      sub: `Monthly avg: ${monthlyStats.avgHumidity}%`,
    },
    {
      icon: Wind,
      iconColor: 'text-teal-500',
      label: 'Wind Speed',
      value: `${todayData.windSpeed} mph`,
      sub: 'Current conditions',
    },
    {
      icon: Sun,
      iconColor: 'text-amber-500',
      label: 'UV Index',
      value: todayData.uvIndex,
      sub: todayData.uvIndex <= 2 ? 'Low' : todayData.uvIndex <= 5 ? 'Moderate' : todayData.uvIndex <= 7 ? 'High' : 'Very High',
    },
    {
      icon: CloudRain,
      iconColor: 'text-sky-500',
      label: 'Monthly Precipitation',
      value: `${monthlyStats.totalPrecipitation}"`,
      sub: `${monthlyStats.rainyDays} rainy days this month`,
    },
    {
      icon: Calendar,
      iconColor: 'text-emerald-500',
      label: 'Sunny Days',
      value: monthlyStats.sunnyDays,
      sub: `Out of ${monthlyStats.sunnyDays + monthlyStats.rainyDays + (30 - monthlyStats.sunnyDays - monthlyStats.rainyDays)} days this month`,
    },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
      {stats.map((s) => (
        <StatCard key={s.label} {...s} />
      ))}
    </div>
  );
};

export default WeatherSummaryCards;
