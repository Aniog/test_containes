import { Sun, Cloud, CloudRain, CloudLightning, Wind, CloudFog, CloudSun } from 'lucide-react';

const conditionConfig = {
  Sunny:         { icon: Sun,            bg: 'bg-amber-100',   text: 'text-amber-700',   label: 'Sunny' },
  'Partly Cloudy': { icon: CloudSun,     bg: 'bg-sky-100',     text: 'text-sky-700',     label: 'Partly Cloudy' },
  Cloudy:        { icon: Cloud,          bg: 'bg-slate-100',   text: 'text-slate-600',   label: 'Cloudy' },
  Foggy:         { icon: CloudFog,       bg: 'bg-slate-100',   text: 'text-slate-500',   label: 'Foggy' },
  Rainy:         { icon: CloudRain,      bg: 'bg-blue-100',    text: 'text-blue-700',    label: 'Rainy' },
  Thunderstorm:  { icon: CloudLightning, bg: 'bg-purple-100',  text: 'text-purple-700',  label: 'Thunderstorm' },
  Windy:         { icon: Wind,           bg: 'bg-teal-100',    text: 'text-teal-700',    label: 'Windy' },
};

const WeatherConditionBadge = ({ condition, showIcon = true, size = 'sm' }) => {
  const config = conditionConfig[condition] || conditionConfig['Partly Cloudy'];
  const Icon = config.icon;

  const sizeClasses = size === 'lg'
    ? 'px-3 py-1 text-sm gap-1.5'
    : 'px-2.5 py-0.5 text-xs gap-1';

  return (
    <span className={`inline-flex items-center rounded-full font-medium ${config.bg} ${config.text} ${sizeClasses}`}>
      {showIcon && <Icon className={size === 'lg' ? 'w-4 h-4' : 'w-3 h-3'} />}
      {config.label}
    </span>
  );
};

export default WeatherConditionBadge;
