import { useState } from 'react';
import { PlanetProvider, usePlanet } from '@/context/PlanetContext';
import PlanetCanvas from '@/components/planet/PlanetCanvas';
import AtmospherePanel from '@/components/planet/AtmospherePanel';
import GravityPanel from '@/components/planet/GravityPanel';
import EcosystemsPanel from '@/components/planet/EcosystemsPanel';
import WeatherPanel from '@/components/planet/WeatherPanel';
import ContinentsPanel from '@/components/planet/ContinentsPanel';
import CivilizationsPanel from '@/components/planet/CivilizationsPanel';
import OverviewPage from '@/components/planet/OverviewPage';
import {
  Globe, Wind, Gauge, Leaf, CloudRain, Map, Users,
  Shuffle, RotateCcw, ChevronLeft, ChevronRight, Menu, X
} from 'lucide-react';

const tabs = [
  { id: 'overview', label: 'Overview', icon: Globe, color: 'text-white' },
  { id: 'atmosphere', label: 'Atmosphere', icon: Wind, color: 'text-sky-400' },
  { id: 'gravity', label: 'Gravity', icon: Gauge, color: 'text-violet-400' },
  { id: 'ecosystems', label: 'Ecosystems', icon: Leaf, color: 'text-emerald-400' },
  { id: 'weather', label: 'Weather', icon: CloudRain, color: 'text-blue-400' },
  { id: 'continents', label: 'Continents', icon: Map, color: 'text-amber-400' },
  { id: 'civilizations', label: 'Civilizations', icon: Users, color: 'text-rose-400' },
];

const tabBgMap = {
  overview: 'bg-gray-700 border-gray-600',
  atmosphere: 'bg-sky-500/20 border-sky-500/40',
  gravity: 'bg-violet-500/20 border-violet-500/40',
  ecosystems: 'bg-emerald-500/20 border-emerald-500/40',
  weather: 'bg-blue-500/20 border-blue-500/40',
  continents: 'bg-amber-500/20 border-amber-500/40',
  civilizations: 'bg-rose-500/20 border-rose-500/40',
};

function PlanetDesigner() {
  const { planet, updateName, resetPlanet, randomizePlanet } = usePlanet();
  const [activeTab, setActiveTab] = useState('overview');
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [editingName, setEditingName] = useState(false);
  const [nameInput, setNameInput] = useState(planet.name);

  const activeTabData = tabs.find(t => t.id === activeTab);
  const Icon = activeTabData?.icon || Globe;

  const handleNameSubmit = () => {
    if (nameInput.trim()) updateName(nameInput.trim());
    setEditingName(false);
  };

  const renderPanel = () => {
    switch (activeTab) {
      case 'overview': return <OverviewPage />;
      case 'atmosphere': return <AtmospherePanel />;
      case 'gravity': return <GravityPanel />;
      case 'ecosystems': return <EcosystemsPanel />;
      case 'weather': return <WeatherPanel />;
      case 'continents': return <ContinentsPanel />;
      case 'civilizations': return <CivilizationsPanel />;
      default: return <OverviewPage />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-950 text-white flex flex-col">
      {/* Top header */}
      <header className="flex items-center justify-between px-4 py-3 bg-gray-900/90 border-b border-gray-800 backdrop-blur-sm sticky top-0 z-50">
        <div className="flex items-center gap-3">
          <button
            className="lg:hidden p-1.5 rounded-lg bg-gray-800 border border-gray-700 text-gray-400 hover:text-white"
            onClick={() => setSidebarOpen(!sidebarOpen)}
          >
            {sidebarOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-full bg-gradient-to-br from-sky-400 to-violet-500 flex items-center justify-center">
              <Globe className="w-4 h-4 text-white" />
            </div>
            <span className="font-bold text-white tracking-tight hidden sm:block">Planet Designer</span>
          </div>
        </div>

        {/* Planet name */}
        <div className="flex items-center gap-2">
          {editingName ? (
            <input
              autoFocus
              value={nameInput}
              onChange={e => setNameInput(e.target.value)}
              onBlur={handleNameSubmit}
              onKeyDown={e => e.key === 'Enter' && handleNameSubmit()}
              className="bg-gray-800 border border-gray-600 rounded-lg px-3 py-1 text-sm text-white focus:outline-none focus:border-sky-500 w-40"
            />
          ) : (
            <button
              onClick={() => { setNameInput(planet.name); setEditingName(true); }}
              className="text-sm font-semibold text-white hover:text-sky-400 transition-colors px-2 py-1 rounded-lg hover:bg-gray-800"
            >
              {planet.name}
            </button>
          )}
        </div>

        {/* Actions */}
        <div className="flex items-center gap-2">
          <button
            onClick={randomizePlanet}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-violet-500/20 border border-violet-500/40 text-violet-300 text-xs font-medium hover:bg-violet-500/30 transition-colors"
          >
            <Shuffle className="w-3.5 h-3.5" />
            <span className="hidden sm:block">Randomize</span>
          </button>
          <button
            onClick={resetPlanet}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-gray-800 border border-gray-700 text-gray-400 text-xs font-medium hover:bg-gray-700 hover:text-white transition-colors"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span className="hidden sm:block">Reset</span>
          </button>
        </div>
      </header>

      <div className="flex flex-1 overflow-hidden">
        {/* Left sidebar */}
        <aside className={`
          fixed lg:static inset-y-0 left-0 z-40 w-52 bg-gray-900 border-r border-gray-800
          flex flex-col pt-16 lg:pt-0 transition-transform duration-300
          ${sidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
        `}>
          <div className="p-3 flex-1 overflow-y-auto">
            <div className="text-xs font-semibold text-gray-600 uppercase tracking-wider px-2 mb-3">
              Design Sections
            </div>
            <nav className="space-y-1">
              {tabs.map(tab => {
                const TabIcon = tab.icon;
                const isActive = activeTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    onClick={() => { setActiveTab(tab.id); setSidebarOpen(false); }}
                    className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all ${
                      isActive
                        ? `${tabBgMap[tab.id]} border text-white`
                        : 'text-gray-400 hover:bg-gray-800 hover:text-gray-200 border border-transparent'
                    }`}
                  >
                    <TabIcon className={`w-4 h-4 ${isActive ? tab.color : 'text-gray-500'}`} />
                    {tab.label}
                  </button>
                );
              })}
            </nav>
          </div>
          <div className="p-3 border-t border-gray-800">
            <div className="text-xs text-gray-600 text-center">Click planet name to rename</div>
          </div>
        </aside>

        {/* Mobile overlay */}
        {sidebarOpen && (
          <div className="fixed inset-0 bg-black/50 z-30 lg:hidden" onClick={() => setSidebarOpen(false)} />
        )}

        {/* Main content */}
        <main className="flex-1 flex flex-col lg:flex-row overflow-hidden">
          {/* Planet canvas */}
          <div className="lg:w-80 xl:w-96 flex-shrink-0 bg-gray-950 stars-bg border-b lg:border-b-0 lg:border-r border-gray-800/50 flex items-center justify-center p-4 min-h-64 lg:min-h-0">
            <PlanetCanvas />
          </div>

          {/* Customization panel */}
          <div className="flex-1 overflow-y-auto">
            <div className="p-4 lg:p-6 max-w-2xl mx-auto">
              <div className="flex items-center gap-2 mb-5">
                <Icon className={`w-5 h-5 ${activeTabData?.color || 'text-white'}`} />
                <h2 className="text-lg font-bold text-white">{activeTabData?.label}</h2>
              </div>

              {renderPanel()}

              {/* Navigation arrows */}
              <div className="flex justify-between mt-8 pt-4 border-t border-gray-800">
                {tabs.findIndex(t => t.id === activeTab) > 0 ? (
                  <button
                    onClick={() => {
                      const idx = tabs.findIndex(t => t.id === activeTab);
                      setActiveTab(tabs[idx - 1].id);
                    }}
                    className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 text-gray-300 text-sm hover:bg-gray-700 transition-colors"
                  >
                    <ChevronLeft className="w-4 h-4" />
                    {tabs[tabs.findIndex(t => t.id === activeTab) - 1]?.label}
                  </button>
                ) : <div />}

                {tabs.findIndex(t => t.id === activeTab) < tabs.length - 1 ? (
                  <button
                    onClick={() => {
                      const idx = tabs.findIndex(t => t.id === activeTab);
                      setActiveTab(tabs[idx + 1].id);
                    }}
                    className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 text-gray-300 text-sm hover:bg-gray-700 transition-colors"
                  >
                    {tabs[tabs.findIndex(t => t.id === activeTab) + 1]?.label}
                    <ChevronRight className="w-4 h-4" />
                  </button>
                ) : <div />}
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

function App() {
  return (
    <PlanetProvider>
      <PlanetDesigner />
    </PlanetProvider>
  );
}

export default App;
