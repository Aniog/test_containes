import { Sun, Cloud, CloudRain, CloudLightning, CloudFog, CloudSun } from 'lucide-react';

const iconMap = {
  Sunny:          { Icon: Sun,            color: 'text-yellow-400' },
  'Partly Cloudy':{ Icon: CloudSun,       color: 'text-sky-300' },
  Cloudy:         { Icon: Cloud,          color: 'text-slate-400' },
  Rainy:          { Icon: CloudRain,      color: 'text-sky-400' },
  Stormy:         { Icon: CloudLightning, color: 'text-indigo-400' },
  Foggy:          { Icon: CloudFog,       color: 'text-slate-400' },
};

const WeatherIcon = ({ condition, size = 20, className = '' }) => {
  const entry = iconMap[condition] ?? iconMap['Cloudy'];
  const { Icon, color } = entry;
  return <Icon size={size} className={`${color} ${className}`} />;
};

export default WeatherIcon;
