import { Sun, Cloud, CloudRain, CloudSun } from 'lucide-react';

const iconMap = {
  sun: Sun,
  'cloud-sun': CloudSun,
  cloud: Cloud,
  'cloud-rain': CloudRain,
};

const WeatherIcon = ({ name, className = '' }) => {
  const Icon = iconMap[name] || Cloud;
  return <Icon className={className} />;
};

export default WeatherIcon;
