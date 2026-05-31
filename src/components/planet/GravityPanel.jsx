import { usePlanet } from '@/context/PlanetContext';
import SliderField from './SliderField';
import { Gauge, RotateCcw, Magnet } from 'lucide-react';

const GravityPanel = () => {
  const { planet, updateSection } = usePlanet();
  const grav = planet.gravity;
  const update = (key, val) => updateSection('gravity', { [key]: val });

  const earthComparison = grav.strength / 9.8;
  const getGravityLabel = (g) => {
    if (g < 2) return { label: 'Very Low', color: 'text-blue-400' };
    if (g < 6) return { label: 'Low', color: 'text-sky-400' };
    if (g < 12) return { label: 'Earth-like', color: 'text-emerald-400' };
    if (g < 20) return { label: 'High', color: 'text-amber-400' };
    return { label: 'Crushing', color: 'text-red-400' };
  };

  const gravLabel = getGravityLabel(grav.strength);

  const getDayLength = (hours) => {
    if (hours < 8) return 'Very Short Day';
    if (hours < 20) return 'Short Day';
    if (hours < 30) return 'Earth-like Day';
    if (hours < 72) return 'Long Day';
    return 'Extremely Long Day';
  };

  return (
    <div className="space-y-5">
      <div className="flex items-center gap-2 mb-4">
        <div className="p-2 rounded-lg bg-violet-500/20 border border-violet-500/30">
          <Gauge className="w-4 h-4 text-violet-400" />
        </div>
        <div>
          <h3 className="text-base font-semibold text-white">Gravity & Physics</h3>
          <p className="text-xs text-gray-500">Physical properties of your planet</p>
        </div>
      </div>

      {/* Gravity indicator */}
      <div className="p-4 rounded-xl bg-gray-800/50 border border-violet-500/20 text-center">
        <div className={`text-4xl font-bold ${gravLabel.color}`}>{grav.strength.toFixed(1)}</div>
        <div className="text-sm text-gray-400 mt-1">m/s² surface gravity</div>
        <div className={`text-xs font-semibold mt-2 ${gravLabel.color}`}>{gravLabel.label}</div>
        <div className="text-xs text-gray-500 mt-1">
          {earthComparison.toFixed(2)}× Earth gravity
        </div>
      </div>

      <SliderField label="Surface Gravity" value={grav.strength} min={0.5} max={25} step={0.1} onChange={v => update('strength', v)} unit=" m/s²" color="violet" />
      <SliderField label="Planet Mass" value={grav.planetMass} min={0.1} max={10} step={0.1} onChange={v => update('planetMass', v)} unit="× Earth" color="violet" />
      <SliderField label="Planet Radius" value={grav.planetRadius} min={0.3} max={5} step={0.1} onChange={v => update('planetRadius', v)} unit="× Earth" color="violet" />

      <div className="border-t border-gray-700/50 pt-4">
        <div className="flex items-center gap-2 mb-3">
          <RotateCcw className="w-4 h-4 text-violet-400" />
          <span className="text-sm font-semibold text-gray-300">Rotation & Orbit</span>
        </div>
        <div className="space-y-4">
          <SliderField label="Day Length" value={grav.rotationSpeed} min={4} max={200} onChange={v => update('rotationSpeed', v)} unit=" hrs" color="violet" />
          <div className="text-xs text-gray-500 -mt-2 pl-1">{getDayLength(grav.rotationSpeed)}</div>
          <SliderField label="Axial Tilt" value={grav.axialTilt} min={0} max={90} onChange={v => update('axialTilt', v)} unit="°" color="violet" />
          {grav.axialTilt > 60 && (
            <div className="text-xs text-amber-400 bg-amber-500/10 border border-amber-500/20 rounded-lg p-2">
              High axial tilt — extreme seasons and possible planetary rings
            </div>
          )}
        </div>
      </div>

      <div className="border-t border-gray-700/50 pt-4">
        <div className="flex items-center gap-2 mb-3">
          <Magnet className="w-4 h-4 text-violet-400" />
          <span className="text-sm font-semibold text-gray-300">Magnetic Field</span>
        </div>
        <SliderField label="Field Strength" value={grav.magneticField} min={0} max={100} onChange={v => update('magneticField', v)} unit="%" color="violet" />
        <div className="mt-2 p-3 rounded-lg bg-gray-800/50 border border-gray-700 text-xs text-gray-400">
          {grav.magneticField < 20
            ? 'Weak field — solar radiation reaches surface, harmful to life'
            : grav.magneticField < 50
            ? 'Moderate field — partial protection from solar winds'
            : 'Strong field — excellent protection, supports complex life'}
        </div>
      </div>

      {/* Physical summary */}
      <div className="grid grid-cols-2 gap-2">
        {[
          { label: 'Mass', value: `${grav.planetMass.toFixed(1)}× Earth` },
          { label: 'Radius', value: `${grav.planetRadius.toFixed(1)}× Earth` },
          { label: 'Day', value: `${grav.rotationSpeed}h` },
          { label: 'Tilt', value: `${grav.axialTilt}°` },
        ].map(item => (
          <div key={item.label} className="bg-gray-800/40 rounded-lg p-2.5 border border-gray-700/50">
            <div className="text-xs text-gray-500">{item.label}</div>
            <div className="text-sm font-semibold text-violet-300 mt-0.5">{item.value}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GravityPanel;
