import { usePlanet } from '@/context/PlanetContext';
import SliderField from './SliderField';
import { CloudRain, Thermometer, Wind, Zap } from 'lucide-react';

const extremeEventOptions = [
  { id: 'thunderstorms', label: 'Thunderstorms', icon: '⛈️' },
  { id: 'hurricanes', label: 'Hurricanes', icon: '🌀' },
  { id: 'tornadoes', label: 'Tornadoes', icon: '🌪️' },
  { id: 'blizzards', label: 'Blizzards', icon: '🌨️' },
  { id: 'heatwaves', label: 'Heat Waves', icon: '🔥' },
  { id: 'acid-rain', label: 'Acid Rain', icon: '☠️' },
  { id: 'dust-storms', label: 'Dust Storms', icon: '💨' },
  { id: 'meteor-showers', label: 'Meteor Showers', icon: '☄️' },
];

const seasonOptions = [0, 1, 2, 4, 6, 8];

const WeatherPanel = () => {
  const { planet, updateSection } = usePlanet();
  const wx = planet.weather;
  const update = (key, val) => updateSection('weather', { [key]: val });

  const toggleEvent = (eventId) => {
    const current = wx.extremeEvents;
    if (current.includes(eventId)) {
      update('extremeEvents', current.filter(e => e !== eventId));
    } else {
      update('extremeEvents', [...current, eventId]);
    }
  };

  const getTempColor = (t) => {
    if (t < -40) return 'text-blue-300';
    if (t < 0) return 'text-sky-400';
    if (t < 20) return 'text-emerald-400';
    if (t < 40) return 'text-amber-400';
    return 'text-red-400';
  };

  const getTempLabel = (t) => {
    if (t < -60) return 'Frozen Wasteland';
    if (t < -20) return 'Arctic';
    if (t < 5) return 'Cold';
    if (t < 20) return 'Temperate';
    if (t < 35) return 'Warm';
    if (t < 55) return 'Hot';
    return 'Scorching';
  };

  return (
    <div className="space-y-5">
      <div className="flex items-center gap-2 mb-4">
        <div className="p-2 rounded-lg bg-blue-500/20 border border-blue-500/30">
          <CloudRain className="w-4 h-4 text-blue-400" />
        </div>
        <div>
          <h3 className="text-base font-semibold text-white">Weather Patterns</h3>
          <p className="text-xs text-gray-500">Climate and atmospheric conditions</p>
        </div>
      </div>

      {/* Temperature display */}
      <div className="p-4 rounded-xl bg-gray-800/50 border border-blue-500/20 text-center">
        <div className={`text-4xl font-bold ${getTempColor(wx.avgTemperature)}`}>
          {wx.avgTemperature > 0 ? '+' : ''}{wx.avgTemperature}°C
        </div>
        <div className="text-sm text-gray-400 mt-1">Average Surface Temperature</div>
        <div className={`text-xs font-semibold mt-2 ${getTempColor(wx.avgTemperature)}`}>
          {getTempLabel(wx.avgTemperature)}
        </div>
        <div className="text-xs text-gray-500 mt-1">
          Range: {wx.avgTemperature - Math.round(wx.temperatureRange / 2)}°C to {wx.avgTemperature + Math.round(wx.temperatureRange / 2)}°C
        </div>
      </div>

      <SliderField label="Average Temperature" value={wx.avgTemperature} min={-80} max={80} onChange={v => update('avgTemperature', v)} unit="°C" color="blue" />
      <SliderField label="Temperature Range" value={wx.temperatureRange} min={5} max={150} onChange={v => update('temperatureRange', v)} unit="°C" color="blue" />
      <SliderField label="Precipitation" value={wx.precipitation} min={0} max={100} onChange={v => update('precipitation', v)} unit="%" color="blue" />
      <SliderField label="Wind Speed" value={wx.windSpeed} min={0} max={200} onChange={v => update('windSpeed', v)} unit=" km/h" color="blue" />
      <SliderField label="Storm Frequency" value={wx.stormFrequency} min={0} max={100} onChange={v => update('stormFrequency', v)} unit="%" color="blue" />

      {/* Seasons */}
      <div className="space-y-2">
        <label className="text-sm font-medium text-gray-300">Number of Seasons</label>
        <div className="flex gap-2 flex-wrap">
          {seasonOptions.map(s => (
            <button
              key={s}
              onClick={() => update('seasonCount', s)}
              className={`px-3 py-1.5 rounded-lg border text-sm font-medium transition-all ${
                wx.seasonCount === s
                  ? 'border-blue-500 bg-blue-500/20 text-blue-300'
                  : 'border-gray-700 bg-gray-800/50 text-gray-400 hover:border-gray-600'
              }`}
            >
              {s === 0 ? 'None' : s}
            </button>
          ))}
        </div>
        {wx.seasonCount > 0 && (
          <div className="text-xs text-gray-500">
            Each season lasts ~{Math.round(365 / wx.seasonCount)} days
          </div>
        )}
      </div>

      {/* Extreme events */}
      <div className="border-t border-gray-700/50 pt-4 space-y-2">
        <div className="flex items-center gap-2 mb-2">
          <Zap className="w-4 h-4 text-blue-400" />
          <label className="text-sm font-medium text-gray-300">Extreme Weather Events</label>
        </div>
        <div className="grid grid-cols-2 gap-2">
          {extremeEventOptions.map(event => (
            <button
              key={event.id}
              onClick={() => toggleEvent(event.id)}
              className={`p-2.5 rounded-lg border text-left transition-all ${
                wx.extremeEvents.includes(event.id)
                  ? 'border-blue-500 bg-blue-500/15 text-blue-300'
                  : 'border-gray-700 bg-gray-800/50 text-gray-400 hover:border-gray-600'
              }`}
            >
              <div className="flex items-center gap-1.5">
                <span className="text-base">{event.icon}</span>
                <span className="text-xs font-medium">{event.label}</span>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Climate summary */}
      <div className="p-3 rounded-lg bg-gray-800/50 border border-gray-700 text-xs text-gray-400 space-y-1">
        <div className="font-medium text-gray-300 mb-2">Climate Summary</div>
        <div>• {wx.precipitation < 20 ? 'Arid' : wx.precipitation < 50 ? 'Semi-arid' : wx.precipitation < 75 ? 'Humid' : 'Very wet'} conditions</div>
        <div>• {wx.windSpeed < 30 ? 'Calm' : wx.windSpeed < 80 ? 'Breezy' : wx.windSpeed < 150 ? 'Windy' : 'Extreme winds'}</div>
        <div>• {wx.stormFrequency < 20 ? 'Rare storms' : wx.stormFrequency < 50 ? 'Occasional storms' : 'Frequent storms'}</div>
        {wx.extremeEvents.length > 0 && (
          <div>• Active: {wx.extremeEvents.join(', ')}</div>
        )}
      </div>
    </div>
  );
};

export default WeatherPanel;
