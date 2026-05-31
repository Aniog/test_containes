import { useState } from 'react';
import { usePlanet } from '@/context/PlanetContext';
import SliderField from './SliderField';
import { Map, Mountain, Waves } from 'lucide-react';

const continentNames = [
  'Pangara', 'Valdris', 'Koreth', 'Umara', 'Solenne', 'Dravex',
  'Thyros', 'Aelindra', 'Vorthas', 'Mirelon', 'Caelum', 'Zephyra',
];

const ContinentsPanel = () => {
  const { planet, updateSection } = usePlanet();
  const cont = planet.continents;
  const update = (key, val) => updateSection('continents', { [key]: val });
  const [customName, setCustomName] = useState('');

  const oceanCoverage = 100 - cont.landCoverage;

  return (
    <div className="space-y-5">
      <div className="flex items-center gap-2 mb-4">
        <div className="p-2 rounded-lg bg-amber-500/20 border border-amber-500/30">
          <Map className="w-4 h-4 text-amber-400" />
        </div>
        <div>
          <h3 className="text-base font-semibold text-white">Continents & Geography</h3>
          <p className="text-xs text-gray-500">Landmasses and geological features</p>
        </div>
      </div>

      {/* Land/Ocean split visual */}
      <div className="p-4 rounded-xl bg-gray-800/50 border border-amber-500/20">
        <div className="flex justify-between text-xs text-gray-400 mb-2">
          <span className="text-amber-400 font-semibold">Land {cont.landCoverage}%</span>
          <span className="text-blue-400 font-semibold">Ocean {oceanCoverage}%</span>
        </div>
        <div className="w-full h-4 rounded-full overflow-hidden bg-blue-900/50 border border-gray-700">
          <div
            className="h-full bg-gradient-to-r from-amber-600 to-amber-400 transition-all rounded-full"
            style={{ width: `${cont.landCoverage}%` }}
          />
        </div>
        <div className="flex justify-between text-xs text-gray-500 mt-2">
          <span>{cont.count} continent{cont.count !== 1 ? 's' : ''}</span>
          <span>{cont.oceanDepth.toLocaleString()}m avg depth</span>
        </div>
      </div>

      <SliderField label="Number of Continents" value={cont.count} min={0} max={12} onChange={v => update('count', v)} color="amber" />
      <SliderField label="Land Coverage" value={cont.landCoverage} min={5} max={90} onChange={v => update('landCoverage', v)} unit="%" color="amber" />
      <SliderField label="Ocean Depth" value={cont.oceanDepth} min={500} max={11000} step={100} onChange={v => update('oceanDepth', v)} unit="m" color="amber" />

      {/* Terrain features */}
      <div className="border-t border-gray-700/50 pt-4">
        <div className="flex items-center gap-2 mb-3">
          <Mountain className="w-4 h-4 text-amber-400" />
          <span className="text-sm font-semibold text-gray-300">Terrain Features</span>
        </div>
        <div className="space-y-4">
          <SliderField label="Mountain Ranges" value={cont.mountainRanges} min={0} max={100} onChange={v => update('mountainRanges', v)} unit="%" color="amber" />
          <SliderField label="Desert Coverage" value={cont.desertCoverage} min={0} max={80} onChange={v => update('desertCoverage', v)} unit="%" color="amber" />
          <SliderField label="Forest Coverage" value={cont.forestCoverage} min={0} max={80} onChange={v => update('forestCoverage', v)} unit="%" color="amber" />
          <SliderField label="Tectonic Activity" value={cont.tectonicActivity} min={0} max={100} onChange={v => update('tectonicActivity', v)} unit="%" color="amber" />
          {cont.tectonicActivity > 70 && (
            <div className="text-xs text-red-400 bg-red-500/10 border border-red-500/20 rounded-lg p-2">
              High tectonic activity — frequent earthquakes and volcanic eruptions
            </div>
          )}
        </div>
      </div>

      {/* Largest continent name */}
      <div className="border-t border-gray-700/50 pt-4 space-y-2">
        <label className="text-sm font-medium text-gray-300">Largest Continent Name</label>
        <div className="flex flex-wrap gap-1.5 mb-2">
          {continentNames.slice(0, 8).map(name => (
            <button
              key={name}
              onClick={() => update('largestContinent', name)}
              className={`px-2.5 py-1 rounded-full text-xs font-medium border transition-all ${
                cont.largestContinent === name
                  ? 'border-amber-500 bg-amber-500/20 text-amber-300'
                  : 'border-gray-700 bg-gray-800/50 text-gray-400 hover:border-gray-600'
              }`}
            >
              {name}
            </button>
          ))}
        </div>
        <div className="flex gap-2">
          <input
            type="text"
            value={customName}
            onChange={e => setCustomName(e.target.value)}
            placeholder="Custom name..."
            className="flex-1 bg-gray-800 border border-gray-700 rounded-lg px-3 py-1.5 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-amber-500"
          />
          <button
            onClick={() => { if (customName.trim()) { update('largestContinent', customName.trim()); setCustomName(''); } }}
            className="px-3 py-1.5 bg-amber-500/20 border border-amber-500/40 text-amber-300 rounded-lg text-sm hover:bg-amber-500/30 transition-colors"
          >
            Set
          </button>
        </div>
        <div className="text-xs text-gray-500">Current: <span className="text-amber-400 font-medium">{cont.largestContinent}</span></div>
      </div>

      {/* Geology summary */}
      <div className="grid grid-cols-2 gap-2">
        {[
          { label: 'Mountains', value: `${cont.mountainRanges}%`, icon: '⛰️' },
          { label: 'Deserts', value: `${cont.desertCoverage}%`, icon: '🏜️' },
          { label: 'Forests', value: `${cont.forestCoverage}%`, icon: '🌲' },
          { label: 'Tectonics', value: `${cont.tectonicActivity}%`, icon: '🌋' },
        ].map(item => (
          <div key={item.label} className="bg-gray-800/40 rounded-lg p-2.5 border border-gray-700/50">
            <div className="text-base">{item.icon}</div>
            <div className="text-xs text-gray-500 mt-1">{item.label}</div>
            <div className="text-sm font-semibold text-amber-300">{item.value}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContinentsPanel;
