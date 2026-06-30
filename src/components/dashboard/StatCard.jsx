import { conditionMeta } from '@/data/weatherData';
import WeatherIcon from './WeatherIcon';

const StatCard = ({ label, value, unit, sub, icon: Icon, iconColor }) => (
  <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-5 flex flex-col gap-2">
    <div className="flex items-center justify-between">
      <span className="text-sm font-medium text-slate-500">{label}</span>
      {Icon && <Icon className={`w-5 h-5 ${iconColor || 'text-slate-400'}`} />}
    </div>
    <div className="flex items-end gap-1">
      <span className="text-3xl font-bold text-slate-800">{value}</span>
      {unit && <span className="text-base text-slate-500 mb-1">{unit}</span>}
    </div>
    {sub && <span className="text-xs text-slate-400">{sub}</span>}
  </div>
);

export default StatCard;
