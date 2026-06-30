import { Sun, Cloud, CloudRain, CloudSun, Wind, Droplets, Thermometer, Eye } from 'lucide-react';

const iconMap = {
  sun: Sun,
  cloud: Cloud,
  'cloud-rain': CloudRain,
  'cloud-sun': CloudSun,
};

const conditionColorMap = {
  Sunny: 'text-amber-400',
  'Partly Cloudy': 'text-sky-400',
  Foggy: 'text-slate-400',
  Overcast: 'text-slate-500',
  Rainy: 'text-violet-400',
};

export default function WeatherIcon({ icon, condition, size = 20, className = '' }) {
  const IconComponent = iconMap[icon] || Sun;
  const colorClass = conditionColorMap[condition] || 'text-slate-400';
  return <IconComponent size={size} className={`${colorClass} ${className}`} />;
}

export { Wind, Droplets, Thermometer, Eye };
