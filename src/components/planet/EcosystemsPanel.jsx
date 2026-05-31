import { usePlanet } from '@/context/PlanetContext';
import SliderField from './SliderField';
import { Leaf, Fish, Bug, TreePine } from 'lucide-react';

const allBiomes = [
  { id: 'forest', label: 'Forest', icon: '🌲', desc: 'Temperate woodlands' },
  { id: 'ocean', label: 'Ocean', icon: '🌊', desc: 'Deep water bodies' },
  { id: 'desert', label: 'Desert', icon: '🏜️', desc: 'Arid wastelands' },
  { id: 'tundra', label: 'Tundra', icon: '❄️', desc: 'Frozen plains' },
  { id: 'jungle', label: 'Jungle', icon: '🌿', desc: 'Dense rainforest' },
  { id: 'savanna', label: 'Savanna', icon: '🌾', desc: 'Grasslands' },
  { id: 'wetlands', label: 'Wetlands', icon: '🌱', desc: 'Marshes & swamps' },
  { id: 'volcanic', label: 'Volcanic', icon: '🌋', desc: 'Lava fields' },
];

const floraOptions = ['Deciduous Trees', 'Conifers', 'Ferns', 'Cacti', 'Fungi', 'Algae', 'Crystal Trees', 'Vines', 'Mosses', 'None'];
const faunaOptions = ['Mammals', 'Reptiles', 'Insects', 'Birds', 'Fish', 'Arachnids', 'Amphibians', 'Megafauna', 'None'];

const EcosystemsPanel = () => {
  const { planet, updateSection } = usePlanet();
  const eco = planet.ecosystems;
  const update = (key, val) => updateSection('ecosystems', { [key]: val });

  const toggleBiome = (biomeId) => {
    const current = eco.biomes;
    if (current.includes(biomeId)) {
      update('biomes', current.filter(b => b !== biomeId));
    } else {
      update('biomes', [...current, biomeId]);
    }
  };

  const lifeScore = Math.round(
    (eco.plantLife + eco.animalLife + eco.marineLife + eco.microbialLife) / 4
  );

  return (
    <div className="space-y-5">
      <div className="flex items-center gap-2 mb-4">
        <div className="p-2 rounded-lg bg-emerald-500/20 border border-emerald-500/30">
          <Leaf className="w-4 h-4 text-emerald-400" />
        </div>
        <div>
          <h3 className="text-base font-semibold text-white">Ecosystems</h3>
          <p className="text-xs text-gray-500">Life forms and biome distribution</p>
        </div>
      </div>

      {/* Life score */}
      <div className="p-4 rounded-xl bg-gray-800/50 border border-emerald-500/20">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-medium text-gray-300">Overall Biodiversity</span>
          <span className="text-lg font-bold text-emerald-400">{eco.biodiversity}%</span>
        </div>
        <div className="w-full bg-gray-700 rounded-full h-2">
          <div
            className="h-2 rounded-full bg-gradient-to-r from-emerald-600 to-emerald-400 transition-all"
            style={{ width: `${eco.biodiversity}%` }}
          />
        </div>
        <div className="text-xs text-gray-500 mt-2">
          {eco.biodiversity < 20 ? 'Barren — minimal life' :
           eco.biodiversity < 50 ? 'Sparse — limited ecosystems' :
           eco.biodiversity < 75 ? 'Moderate — diverse life' :
           'Thriving — rich biodiversity'}
        </div>
      </div>

      <SliderField label="Biodiversity Index" value={eco.biodiversity} min={0} max={100} onChange={v => update('biodiversity', v)} unit="%" color="emerald" />

      {/* Biomes */}
      <div className="space-y-2">
        <label className="text-sm font-medium text-gray-300">Active Biomes ({eco.biomes.length})</label>
        <div className="grid grid-cols-2 gap-2">
          {allBiomes.map(biome => (
            <button
              key={biome.id}
              onClick={() => toggleBiome(biome.id)}
              className={`p-2.5 rounded-lg border text-left transition-all ${
                eco.biomes.includes(biome.id)
                  ? 'border-emerald-500 bg-emerald-500/15 text-emerald-300'
                  : 'border-gray-700 bg-gray-800/50 text-gray-400 hover:border-gray-600'
              }`}
            >
              <div className="flex items-center gap-1.5">
                <span className="text-base">{biome.icon}</span>
                <div>
                  <div className="text-xs font-semibold">{biome.label}</div>
                  <div className="text-xs opacity-60">{biome.desc}</div>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Life levels */}
      <div className="border-t border-gray-700/50 pt-4 space-y-4">
        <div className="flex items-center gap-2 mb-1">
          <TreePine className="w-4 h-4 text-emerald-400" />
          <span className="text-sm font-semibold text-gray-300">Life Abundance</span>
        </div>
        <SliderField label="Plant Life" value={eco.plantLife} min={0} max={100} onChange={v => update('plantLife', v)} unit="%" color="emerald" />
        <SliderField label="Animal Life" value={eco.animalLife} min={0} max={100} onChange={v => update('animalLife', v)} unit="%" color="emerald" />
        <SliderField label="Marine Life" value={eco.marineLife} min={0} max={100} onChange={v => update('marineLife', v)} unit="%" color="emerald" />
        <SliderField label="Microbial Life" value={eco.microbialLife} min={0} max={100} onChange={v => update('microbialLife', v)} unit="%" color="emerald" />
      </div>

      {/* Dominant species */}
      <div className="border-t border-gray-700/50 pt-4 space-y-3">
        <div className="space-y-2">
          <label className="text-sm font-medium text-gray-300">Dominant Flora</label>
          <div className="flex flex-wrap gap-1.5">
            {floraOptions.map(f => (
              <button
                key={f}
                onClick={() => update('dominantFlora', f)}
                className={`px-2.5 py-1 rounded-full text-xs font-medium border transition-all ${
                  eco.dominantFlora === f
                    ? 'border-emerald-500 bg-emerald-500/20 text-emerald-300'
                    : 'border-gray-700 bg-gray-800/50 text-gray-400 hover:border-gray-600'
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>
        <div className="space-y-2">
          <label className="text-sm font-medium text-gray-300">Dominant Fauna</label>
          <div className="flex flex-wrap gap-1.5">
            {faunaOptions.map(f => (
              <button
                key={f}
                onClick={() => update('dominantFauna', f)}
                className={`px-2.5 py-1 rounded-full text-xs font-medium border transition-all ${
                  eco.dominantFauna === f
                    ? 'border-emerald-500 bg-emerald-500/20 text-emerald-300'
                    : 'border-gray-700 bg-gray-800/50 text-gray-400 hover:border-gray-600'
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EcosystemsPanel;
