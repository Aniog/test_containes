import { useState } from 'react';
import { usePlanet } from '@/context/PlanetContext';
import SliderField from './SliderField';
import { Users, Rocket, Crown, Swords } from 'lucide-react';

const techLevels = [
  { value: 'primitive', label: 'Primitive', desc: 'Stone tools', icon: '🪨' },
  { value: 'ancient', label: 'Ancient', desc: 'Bronze/Iron age', icon: '⚔️' },
  { value: 'medieval', label: 'Medieval', desc: 'Feudal society', icon: '🏰' },
  { value: 'industrial', label: 'Industrial', desc: 'Steam & machines', icon: '⚙️' },
  { value: 'modern', label: 'Modern', desc: 'Digital age', icon: '💻' },
  { value: 'advanced', label: 'Advanced', desc: 'Near-future tech', icon: '🔬' },
  { value: 'spacefaring', label: 'Spacefaring', desc: 'Interstellar travel', icon: '🚀' },
];

const govTypes = [
  { value: 'tribal', label: 'Tribal', icon: '🏕️' },
  { value: 'monarchy', label: 'Monarchy', icon: '👑' },
  { value: 'democracy', label: 'Democracy', icon: '🗳️' },
  { value: 'oligarchy', label: 'Oligarchy', icon: '💰' },
  { value: 'theocracy', label: 'Theocracy', icon: '⛪' },
  { value: 'hive-mind', label: 'Hive Mind', icon: '🧠' },
  { value: 'ai-governed', label: 'AI Governed', icon: '🤖' },
];

const speciesOptions = ['Humanoid', 'Reptilian', 'Insectoid', 'Aquatic', 'Gaseous', 'Crystalline', 'Fungal', 'Avian', 'Synthetic'];

const CivilizationsPanel = () => {
  const { planet, updateSection } = usePlanet();
  const civ = planet.civilizations;
  const update = (key, val) => updateSection('civilizations', { [key]: val });
  const [customSpecies, setCustomSpecies] = useState('');

  return (
    <div className="space-y-5">
      <div className="flex items-center gap-2 mb-4">
        <div className="p-2 rounded-lg bg-rose-500/20 border border-rose-500/30">
          <Users className="w-4 h-4 text-rose-400" />
        </div>
        <div>
          <h3 className="text-base font-semibold text-white">Civilizations</h3>
          <p className="text-xs text-gray-500">Intelligent life and societies</p>
        </div>
      </div>

      {/* Civilization exists toggle */}
      <div className="flex items-center justify-between p-4 rounded-xl bg-gray-800/50 border border-rose-500/20">
        <div>
          <div className="text-sm font-semibold text-white">Intelligent Life Exists</div>
          <div className="text-xs text-gray-500 mt-0.5">
            {civ.exists ? 'Civilizations are present' : 'No intelligent life'}
          </div>
        </div>
        <button
          onClick={() => update('exists', !civ.exists)}
          className={`relative w-12 h-6 rounded-full transition-colors ${civ.exists ? 'bg-rose-500' : 'bg-gray-700'}`}
        >
          <span
            className={`absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full shadow transition-transform ${civ.exists ? 'translate-x-6' : 'translate-x-0'}`}
          />
        </button>
      </div>

      {civ.exists && (
        <>
          {/* Population */}
          <div className="p-4 rounded-xl bg-gray-800/50 border border-rose-500/20 text-center">
            <div className="text-3xl font-bold text-rose-400">
              {civ.population >= 1 ? `${civ.population.toFixed(1)}B` : `${(civ.population * 1000).toFixed(0)}M`}
            </div>
            <div className="text-sm text-gray-400 mt-1">Total Population</div>
            <div className="text-xs text-gray-500 mt-1">{civ.count} civilization{civ.count !== 1 ? 's' : ''}</div>
          </div>

          <SliderField label="Number of Civilizations" value={civ.count} min={1} max={8} onChange={v => update('count', v)} color="rose" />
          <SliderField label="Population (Billions)" value={civ.population} min={0.001} max={50} step={0.1} onChange={v => update('population', v)} unit="B" color="rose" />
          <SliderField label="Cultural Diversity" value={civ.culturalDiversity} min={0} max={100} onChange={v => update('culturalDiversity', v)} unit="%" color="rose" />

          {/* Tech level */}
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-300">Technology Level</label>
            <div className="grid grid-cols-2 gap-2">
              {techLevels.map(tech => (
                <button
                  key={tech.value}
                  onClick={() => update('techLevel', tech.value)}
                  className={`p-2.5 rounded-lg border text-left transition-all ${
                    civ.techLevel === tech.value
                      ? 'border-rose-500 bg-rose-500/15 text-rose-300'
                      : 'border-gray-700 bg-gray-800/50 text-gray-400 hover:border-gray-600'
                  }`}
                >
                  <div className="flex items-center gap-1.5">
                    <span className="text-base">{tech.icon}</span>
                    <div>
                      <div className="text-xs font-semibold">{tech.label}</div>
                      <div className="text-xs opacity-60">{tech.desc}</div>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Government type */}
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <Crown className="w-4 h-4 text-rose-400" />
              <label className="text-sm font-medium text-gray-300">Government Type</label>
            </div>
            <div className="flex flex-wrap gap-2">
              {govTypes.map(gov => (
                <button
                  key={gov.value}
                  onClick={() => update('governmentType', gov.value)}
                  className={`px-2.5 py-1.5 rounded-lg border text-xs font-medium transition-all flex items-center gap-1 ${
                    civ.governmentType === gov.value
                      ? 'border-rose-500 bg-rose-500/20 text-rose-300'
                      : 'border-gray-700 bg-gray-800/50 text-gray-400 hover:border-gray-600'
                  }`}
                >
                  <span>{gov.icon}</span>
                  <span>{gov.label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Dominant species */}
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-300">Dominant Species</label>
            <div className="flex flex-wrap gap-1.5 mb-2">
              {speciesOptions.map(s => (
                <button
                  key={s}
                  onClick={() => update('dominantSpecies', s)}
                  className={`px-2.5 py-1 rounded-full text-xs font-medium border transition-all ${
                    civ.dominantSpecies === s
                      ? 'border-rose-500 bg-rose-500/20 text-rose-300'
                      : 'border-gray-700 bg-gray-800/50 text-gray-400 hover:border-gray-600'
                  }`}
                >
                  {s}
                </button>
              ))}
            </div>
            <div className="flex gap-2">
              <input
                type="text"
                value={customSpecies}
                onChange={e => setCustomSpecies(e.target.value)}
                placeholder="Custom species..."
                className="flex-1 bg-gray-800 border border-gray-700 rounded-lg px-3 py-1.5 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-rose-500"
              />
              <button
                onClick={() => { if (customSpecies.trim()) { update('dominantSpecies', customSpecies.trim()); setCustomSpecies(''); } }}
                className="px-3 py-1.5 bg-rose-500/20 border border-rose-500/40 text-rose-300 rounded-lg text-sm hover:bg-rose-500/30 transition-colors"
              >
                Set
              </button>
            </div>
          </div>

          {/* Warlikeness */}
          <div className="border-t border-gray-700/50 pt-4">
            <div className="flex items-center gap-2 mb-3">
              <Swords className="w-4 h-4 text-rose-400" />
              <span className="text-sm font-semibold text-gray-300">Conflict & Expansion</span>
            </div>
            <SliderField label="Warlikeness" value={civ.warlikeness} min={0} max={100} onChange={v => update('warlikeness', v)} unit="%" color="rose" />
            <div className="mt-2 text-xs text-gray-500">
              {civ.warlikeness < 20 ? 'Peaceful — cooperative societies' :
               civ.warlikeness < 50 ? 'Moderate — occasional conflicts' :
               civ.warlikeness < 75 ? 'Aggressive — frequent wars' :
               'Warlike — constant conflict'}
            </div>
          </div>

          {/* Space capable */}
          <div className="flex items-center justify-between p-3 rounded-lg bg-gray-800/50 border border-gray-700">
            <div className="flex items-center gap-2">
              <Rocket className="w-4 h-4 text-rose-400" />
              <div>
                <div className="text-sm font-medium text-gray-300">Space Capable</div>
                <div className="text-xs text-gray-500">Can travel beyond the planet</div>
              </div>
            </div>
            <button
              onClick={() => update('spaceCapable', !civ.spaceCapable)}
              className={`relative w-11 h-6 rounded-full transition-colors ${civ.spaceCapable ? 'bg-rose-500' : 'bg-gray-700'}`}
            >
              <span
                className={`absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full shadow transition-transform ${civ.spaceCapable ? 'translate-x-5' : 'translate-x-0'}`}
              />
            </button>
          </div>
        </>
      )}

      {!civ.exists && (
        <div className="p-6 rounded-xl bg-gray-800/30 border border-gray-700/50 text-center">
          <div className="text-4xl mb-3">🌑</div>
          <div className="text-sm text-gray-400">This planet has no intelligent life.</div>
          <div className="text-xs text-gray-600 mt-1">Toggle above to add civilizations.</div>
        </div>
      )}
    </div>
  );
};

export default CivilizationsPanel;
