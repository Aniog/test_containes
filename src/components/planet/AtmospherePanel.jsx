import { usePlanet } from '@/context/PlanetContext';
import SliderField from './SliderField';
import { Wind, Thermometer, Eye, Zap } from 'lucide-react';

const atmosphereTypes = [
  { value: 'nitrogen-oxygen', label: 'Nitrogen-Oxygen', desc: 'Breathable' },
  { value: 'carbon-dioxide', label: 'Carbon Dioxide', desc: 'Toxic' },
  { value: 'methane', label: 'Methane', desc: 'Flammable' },
  { value: 'hydrogen', label: 'Hydrogen', desc: 'Explosive' },
  { value: 'toxic', label: 'Toxic Mix', desc: 'Lethal' },
  { value: 'thin', label: 'Thin', desc: 'Sparse' },
  { value: 'none', label: 'None', desc: 'Vacuum' },
];

const atmosphereColors = [
  { color: '#87CEEB', label: 'Sky Blue' },
  { color: '#FF6B35', label: 'Rust Orange' },
  { color: '#9B59B6', label: 'Violet' },
  { color: '#2ECC71', label: 'Toxic Green' },
  { color: '#F39C12', label: 'Amber' },
  { color: '#E74C3C', label: 'Red' },
  { color: '#1ABC9C', label: 'Teal' },
  { color: '#ECF0F1', label: 'White' },
];

const AtmospherePanel = () => {
  const { planet, updateSection } = usePlanet();
  const atm = planet.atmosphere;
  const update = (key, val) => updateSection('atmosphere', { [key]: val });

  return (
    <div className="space-y-5">
      <div className="flex items-center gap-2 mb-4">
        <div className="p-2 rounded-lg bg-sky-500/20 border border-sky-500/30">
          <Wind className="w-4 h-4 text-sky-400" />
        </div>
        <div>
          <h3 className="text-base font-semibold text-white">Atmosphere</h3>
          <p className="text-xs text-gray-500">Configure atmospheric composition</p>
        </div>
      </div>

      {/* Atmosphere Type */}
      <div className="space-y-2">
        <label className="text-sm font-medium text-gray-300">Atmosphere Type</label>
        <div className="grid grid-cols-2 gap-2">
          {atmosphereTypes.map(type => (
            <button
              key={type.value}
              onClick={() => update('type', type.value)}
              className={`p-2.5 rounded-lg border text-left transition-all ${
                atm.type === type.value
                  ? 'border-sky-500 bg-sky-500/20 text-sky-300'
                  : 'border-gray-700 bg-gray-800/50 text-gray-400 hover:border-gray-600 hover:bg-gray-800'
              }`}
            >
              <div className="text-xs font-semibold">{type.label}</div>
              <div className="text-xs opacity-60">{type.desc}</div>
            </button>
          ))}
        </div>
      </div>

      {/* Atmosphere Color */}
      <div className="space-y-2">
        <label className="text-sm font-medium text-gray-300">Atmospheric Tint</label>
        <div className="flex flex-wrap gap-2">
          {atmosphereColors.map(c => (
            <button
              key={c.color}
              onClick={() => update('color', c.color)}
              title={c.label}
              className={`w-8 h-8 rounded-full border-2 transition-all ${
                atm.color === c.color ? 'border-white scale-110' : 'border-gray-600 hover:border-gray-400'
              }`}
              style={{ backgroundColor: c.color }}
            />
          ))}
        </div>
      </div>

      <SliderField label="Density" value={atm.density} min={0} max={100} onChange={v => update('density', v)} unit="%" color="sky" />
      <SliderField label="Oxygen Level" value={atm.oxygenLevel} min={0} max={40} onChange={v => update('oxygenLevel', v)} unit="%" color="sky" />
      <SliderField label="CO₂ Level" value={atm.co2Level} min={0} max={95} step={0.1} onChange={v => update('co2Level', v)} unit="%" color="sky" />
      <SliderField label="Toxicity" value={atm.toxicity} min={0} max={100} onChange={v => update('toxicity', v)} unit="%" color="sky" />
      <SliderField label="Cloud Coverage" value={atm.cloudCoverage} min={0} max={100} onChange={v => update('cloudCoverage', v)} unit="%" color="sky" />

      {/* Aurora Toggle */}
      <div className="flex items-center justify-between p-3 rounded-lg bg-gray-800/50 border border-gray-700">
        <div className="flex items-center gap-2">
          <Zap className="w-4 h-4 text-sky-400" />
          <div>
            <div className="text-sm font-medium text-gray-300">Aurora Borealis</div>
            <div className="text-xs text-gray-500">Polar light displays</div>
          </div>
        </div>
        <button
          onClick={() => update('hasAurora', !atm.hasAurora)}
          className={`relative w-11 h-6 rounded-full transition-colors ${atm.hasAurora ? 'bg-sky-500' : 'bg-gray-700'}`}
        >
          <span
            className={`absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full shadow transition-transform ${atm.hasAurora ? 'translate-x-5' : 'translate-x-0'}`}
          />
        </button>
      </div>

      {/* Breathability indicator */}
      <div className="p-3 rounded-lg bg-gray-800/50 border border-gray-700">
        <div className="flex items-center gap-2 mb-2">
          <Eye className="w-4 h-4 text-gray-400" />
          <span className="text-sm font-medium text-gray-300">Habitability Assessment</span>
        </div>
        <div className="space-y-1.5">
          {[
            {
              label: 'Breathable',
              ok: atm.type === 'nitrogen-oxygen' && atm.oxygenLevel >= 18 && atm.toxicity < 20,
            },
            { label: 'Survivable', ok: atm.density > 10 && atm.toxicity < 50 },
            { label: 'Has Atmosphere', ok: atm.type !== 'none' },
          ].map(item => (
            <div key={item.label} className="flex items-center gap-2">
              <div className={`w-2 h-2 rounded-full ${item.ok ? 'bg-emerald-400' : 'bg-red-500'}`} />
              <span className="text-xs text-gray-400">{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AtmospherePanel;
