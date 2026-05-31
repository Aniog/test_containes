import { usePlanet } from '@/context/PlanetContext';
import { Globe, Wind, Gauge, Leaf, CloudRain, Map, Users, Star, AlertTriangle, CheckCircle } from 'lucide-react';

const ScoreBar = ({ value, color }) => (
  <div className="w-full bg-gray-700 rounded-full h-1.5">
    <div
      className={`h-1.5 rounded-full transition-all ${color}`}
      style={{ width: `${Math.min(100, Math.max(0, value))}%` }}
    />
  </div>
);

const OverviewPage = () => {
  const { planet } = usePlanet();
  const { atmosphere, gravity, ecosystems, weather, continents, civilizations } = planet;

  const habitabilityScore = Math.round(
    (atmosphere.type === 'nitrogen-oxygen' ? 25 : atmosphere.type === 'none' ? 0 : 10) +
    (atmosphere.oxygenLevel >= 18 && atmosphere.oxygenLevel <= 30 ? 15 : 0) +
    (gravity.strength >= 5 && gravity.strength <= 15 ? 15 : gravity.strength >= 2 && gravity.strength <= 20 ? 8 : 0) +
    (weather.avgTemperature >= -20 && weather.avgTemperature <= 50 ? 20 : weather.avgTemperature >= -40 && weather.avgTemperature <= 70 ? 10 : 0) +
    (ecosystems.biodiversity / 100) * 15 +
    (gravity.magneticField / 100) * 10
  );

  const sections = [
    {
      icon: Wind,
      label: 'Atmosphere',
      color: 'text-sky-400',
      bg: 'bg-sky-500/10',
      border: 'border-sky-500/20',
      barColor: 'bg-sky-400',
      score: atmosphere.type === 'none' ? 0 : atmosphere.density,
      details: [
        { label: 'Type', value: atmosphere.type },
        { label: 'Oxygen', value: `${atmosphere.oxygenLevel}%` },
        { label: 'Density', value: `${atmosphere.density}%` },
        { label: 'Clouds', value: `${atmosphere.cloudCoverage}%` },
      ],
    },
    {
      icon: Gauge,
      label: 'Gravity',
      color: 'text-violet-400',
      bg: 'bg-violet-500/10',
      border: 'border-violet-500/20',
      barColor: 'bg-violet-400',
      score: Math.min(100, (gravity.strength / 25) * 100),
      details: [
        { label: 'Gravity', value: `${gravity.strength.toFixed(1)} m/s²` },
        { label: 'Mass', value: `${gravity.planetMass.toFixed(1)}× Earth` },
        { label: 'Day', value: `${gravity.rotationSpeed}h` },
        { label: 'Tilt', value: `${gravity.axialTilt}°` },
      ],
    },
    {
      icon: Leaf,
      label: 'Ecosystems',
      color: 'text-emerald-400',
      bg: 'bg-emerald-500/10',
      border: 'border-emerald-500/20',
      barColor: 'bg-emerald-400',
      score: ecosystems.biodiversity,
      details: [
        { label: 'Biodiversity', value: `${ecosystems.biodiversity}%` },
        { label: 'Biomes', value: ecosystems.biomes.length },
        { label: 'Flora', value: ecosystems.dominantFlora },
        { label: 'Fauna', value: ecosystems.dominantFauna },
      ],
    },
    {
      icon: CloudRain,
      label: 'Weather',
      color: 'text-blue-400',
      bg: 'bg-blue-500/10',
      border: 'border-blue-500/20',
      barColor: 'bg-blue-400',
      score: Math.max(0, 100 - Math.abs(weather.avgTemperature - 15)),
      details: [
        { label: 'Avg Temp', value: `${weather.avgTemperature}°C` },
        { label: 'Rain', value: `${weather.precipitation}%` },
        { label: 'Wind', value: `${weather.windSpeed} km/h` },
        { label: 'Seasons', value: weather.seasonCount },
      ],
    },
    {
      icon: Map,
      label: 'Continents',
      color: 'text-amber-400',
      bg: 'bg-amber-500/10',
      border: 'border-amber-500/20',
      barColor: 'bg-amber-400',
      score: continents.landCoverage,
      details: [
        { label: 'Continents', value: continents.count },
        { label: 'Land', value: `${continents.landCoverage}%` },
        { label: 'Largest', value: continents.largestContinent },
        { label: 'Tectonics', value: `${continents.tectonicActivity}%` },
      ],
    },
    {
      icon: Users,
      label: 'Civilizations',
      color: 'text-rose-400',
      bg: 'bg-rose-500/10',
      border: 'border-rose-500/20',
      barColor: 'bg-rose-400',
      score: civilizations.exists ? civilizations.culturalDiversity : 0,
      details: civilizations.exists
        ? [
            { label: 'Species', value: civilizations.dominantSpecies },
            { label: 'Tech', value: civilizations.techLevel },
            { label: 'Population', value: `${civilizations.population.toFixed(1)}B` },
            { label: 'Government', value: civilizations.governmentType },
          ]
        : [{ label: 'Status', value: 'No intelligent life' }],
    },
  ];

  const habitabilityColor =
    habitabilityScore >= 70 ? 'text-emerald-400' :
    habitabilityScore >= 40 ? 'text-amber-400' :
    habitabilityScore >= 20 ? 'text-orange-400' : 'text-red-400';

  const habitabilityLabel =
    habitabilityScore >= 70 ? 'Highly Habitable' :
    habitabilityScore >= 40 ? 'Marginally Habitable' :
    habitabilityScore >= 20 ? 'Hostile' : 'Uninhabitable';

  const highlights = [
    atmosphere.hasAurora && { icon: '✨', text: 'Aurora Borealis visible at poles' },
    gravity.axialTilt > 60 && { icon: '💫', text: 'Extreme axial tilt — possible planetary rings' },
    ecosystems.biodiversity > 80 && { icon: '🌿', text: 'Exceptional biodiversity' },
    weather.extremeEvents.length > 2 && { icon: '⛈️', text: `${weather.extremeEvents.length} types of extreme weather` },
    continents.tectonicActivity > 70 && { icon: '🌋', text: 'Highly volcanic and seismically active' },
    civilizations.exists && civilizations.spaceCapable && { icon: '🚀', text: 'Civilization has achieved spaceflight' },
    civilizations.exists && civilizations.warlikeness > 75 && { icon: '⚔️', text: 'Highly warlike civilization' },
    gravity.magneticField < 20 && { icon: '☢️', text: 'Weak magnetic field — high radiation exposure' },
  ].filter(Boolean);

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-gray-800/80 to-gray-900/80 border border-gray-700/50">
        <div className="flex items-center justify-center gap-2 mb-2">
          <Globe className="w-6 h-6 text-sky-400" />
          <h2 className="text-2xl font-bold text-white">{planet.name}</h2>
        </div>
        <div className="flex items-center justify-center gap-3 mt-4">
          <div className="text-center">
            <div className={`text-4xl font-bold ${habitabilityColor}`}>{habitabilityScore}</div>
            <div className="text-xs text-gray-500 mt-1">Habitability Score</div>
          </div>
          <div className="w-px h-12 bg-gray-700" />
          <div className="text-center">
            <div className={`text-lg font-semibold ${habitabilityColor}`}>{habitabilityLabel}</div>
            <div className="text-xs text-gray-500 mt-1">Classification</div>
          </div>
        </div>
        <div className="mt-4 w-full bg-gray-700 rounded-full h-3">
          <div
            className={`h-3 rounded-full transition-all ${
              habitabilityScore >= 70 ? 'bg-gradient-to-r from-emerald-600 to-emerald-400' :
              habitabilityScore >= 40 ? 'bg-gradient-to-r from-amber-600 to-amber-400' :
              'bg-gradient-to-r from-red-700 to-red-500'
            }`}
            style={{ width: `${habitabilityScore}%` }}
          />
        </div>
      </div>

      {/* Section cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {sections.map(section => {
          const Icon = section.icon;
          return (
            <div key={section.label} className={`p-4 rounded-xl border ${section.bg} ${section.border}`}>
              <div className="flex items-center gap-2 mb-3">
                <Icon className={`w-4 h-4 ${section.color}`} />
                <span className={`text-sm font-semibold ${section.color}`}>{section.label}</span>
                <span className="ml-auto text-xs text-gray-500">{Math.round(section.score)}%</span>
              </div>
              <ScoreBar value={section.score} color={section.barColor} />
              <div className="mt-3 grid grid-cols-2 gap-x-4 gap-y-1.5">
                {section.details.map(d => (
                  <div key={d.label} className="flex justify-between items-center">
                    <span className="text-xs text-gray-500">{d.label}</span>
                    <span className="text-xs font-medium text-gray-200 capitalize">{d.value}</span>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>

      {/* Highlights */}
      {highlights.length > 0 && (
        <div className="p-4 rounded-xl bg-gray-800/50 border border-gray-700/50">
          <div className="flex items-center gap-2 mb-3">
            <Star className="w-4 h-4 text-yellow-400" />
            <span className="text-sm font-semibold text-gray-300">Notable Features</span>
          </div>
          <div className="space-y-2">
            {highlights.map((h, i) => (
              <div key={i} className="flex items-center gap-2 text-sm text-gray-300">
                <span className="text-base">{h.icon}</span>
                <span>{h.text}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Biomes list */}
      {ecosystems.biomes.length > 0 && (
        <div className="p-4 rounded-xl bg-gray-800/50 border border-gray-700/50">
          <div className="text-sm font-semibold text-gray-300 mb-3">Active Biomes</div>
          <div className="flex flex-wrap gap-2">
            {ecosystems.biomes.map(b => (
              <span key={b} className="px-2.5 py-1 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 text-xs font-medium capitalize">
                {b}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Extreme weather */}
      {weather.extremeEvents.length > 0 && (
        <div className="p-4 rounded-xl bg-gray-800/50 border border-gray-700/50">
          <div className="flex items-center gap-2 mb-3">
            <AlertTriangle className="w-4 h-4 text-amber-400" />
            <span className="text-sm font-semibold text-gray-300">Extreme Weather Events</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {weather.extremeEvents.map(e => (
              <span key={e} className="px-2.5 py-1 rounded-full bg-amber-500/15 border border-amber-500/30 text-amber-300 text-xs font-medium capitalize">
                {e}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default OverviewPage;
