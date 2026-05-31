import { usePlanet } from '@/context/PlanetContext';

const getAtmosphereGradient = (type, color) => {
  const gradients = {
    'nitrogen-oxygen': 'from-sky-400/30 via-blue-500/20 to-transparent',
    'carbon-dioxide': 'from-orange-500/30 via-red-500/20 to-transparent',
    'methane': 'from-teal-400/30 via-cyan-500/20 to-transparent',
    'hydrogen': 'from-yellow-300/30 via-amber-400/20 to-transparent',
    'toxic': 'from-green-500/30 via-lime-500/20 to-transparent',
    'thin': 'from-gray-400/20 via-gray-500/10 to-transparent',
    'none': 'from-transparent to-transparent',
  };
  return gradients[type] || gradients['nitrogen-oxygen'];
};

const getPlanetColors = (planet) => {
  const { atmosphere, ecosystems, continents } = planet;
  const landRatio = continents.landCoverage / 100;
  const oceanRatio = 1 - landRatio;

  const biomeColorMap = {
    forest: '#2d6a4f',
    ocean: '#1a6b8a',
    desert: '#c9a84c',
    tundra: '#a8c5da',
    jungle: '#1b4332',
    savanna: '#b5835a',
    wetlands: '#4a7c59',
    volcanic: '#8b2500',
  };

  const primaryBiome = ecosystems.biomes[0] || 'ocean';
  const secondaryBiome = ecosystems.biomes[1] || 'forest';

  return {
    primary: biomeColorMap[primaryBiome] || '#1a6b8a',
    secondary: biomeColorMap[secondaryBiome] || '#2d6a4f',
    atmosphere: atmosphere.color || '#87CEEB',
    landRatio,
    oceanRatio,
  };
};

const PlanetCanvas = () => {
  const { planet } = usePlanet();
  const colors = getPlanetColors(planet);
  const atmGradient = getAtmosphereGradient(planet.atmosphere.type, planet.atmosphere.color);
  const hasAtmosphere = planet.atmosphere.type !== 'none';
  const cloudOpacity = planet.atmosphere.cloudCoverage / 100;
  const glowColor = planet.atmosphere.color || '#87CEEB';

  const continentPaths = [
    { d: "M 120 100 Q 150 80 180 110 Q 200 140 170 160 Q 140 175 115 155 Q 95 135 120 100 Z", opacity: 0.9 },
    { d: "M 200 130 Q 230 115 255 135 Q 270 155 250 175 Q 225 185 205 168 Q 190 150 200 130 Z", opacity: 0.85 },
    { d: "M 130 175 Q 155 165 175 185 Q 185 205 165 215 Q 140 220 128 200 Q 120 185 130 175 Z", opacity: 0.8 },
    { d: "M 220 80 Q 240 70 255 85 Q 262 100 248 110 Q 230 115 220 100 Q 215 90 220 80 Z", opacity: 0.75 },
    { d: "M 155 210 Q 175 200 190 215 Q 198 230 182 240 Q 162 245 152 230 Q 147 218 155 210 Z", opacity: 0.7 },
  ];

  const visibleContinents = Math.min(
    Math.ceil((planet.continents.count / 12) * continentPaths.length),
    continentPaths.length
  );

  return (
    <div className="flex flex-col items-center justify-center h-full gap-6">
      <div className="relative animate-float" style={{ width: 320, height: 320 }}>
        {/* Outer glow */}
        {hasAtmosphere && (
          <div
            className="absolute inset-0 rounded-full animate-pulse-glow"
            style={{
              background: `radial-gradient(circle, transparent 45%, ${glowColor}22 60%, ${glowColor}11 75%, transparent 85%)`,
              transform: 'scale(1.3)',
            }}
          />
        )}

        {/* Atmosphere ring */}
        {hasAtmosphere && (
          <div
            className="absolute inset-0 rounded-full"
            style={{
              background: `radial-gradient(circle, transparent 47%, ${glowColor}33 52%, ${glowColor}22 58%, transparent 65%)`,
              transform: 'scale(1.12)',
            }}
          />
        )}

        {/* Planet body */}
        <svg
          viewBox="0 0 360 360"
          className="w-full h-full drop-shadow-2xl"
          style={{ filter: `drop-shadow(0 0 30px ${glowColor}44)` }}
        >
          <defs>
            <radialGradient id="planetGrad" cx="35%" cy="30%" r="70%">
              <stop offset="0%" stopColor={colors.primary} stopOpacity="1" />
              <stop offset="50%" stopColor={colors.secondary} stopOpacity="1" />
              <stop offset="100%" stopColor="#0a0a1a" stopOpacity="1" />
            </radialGradient>
            <radialGradient id="oceanGrad" cx="40%" cy="35%" r="65%">
              <stop offset="0%" stopColor="#1e90ff" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#003366" stopOpacity="0.8" />
            </radialGradient>
            <radialGradient id="atmosphereGrad" cx="30%" cy="25%" r="80%">
              <stop offset="0%" stopColor={glowColor} stopOpacity="0.15" />
              <stop offset="70%" stopColor={glowColor} stopOpacity="0.05" />
              <stop offset="100%" stopColor="transparent" stopOpacity="0" />
            </radialGradient>
            <radialGradient id="highlightGrad" cx="30%" cy="25%" r="50%">
              <stop offset="0%" stopColor="white" stopOpacity="0.15" />
              <stop offset="100%" stopColor="transparent" stopOpacity="0" />
            </radialGradient>
            <clipPath id="planetClip">
              <circle cx="180" cy="180" r="155" />
            </clipPath>
          </defs>

          {/* Base planet */}
          <circle cx="180" cy="180" r="155" fill="url(#planetGrad)" />

          {/* Ocean overlay */}
          {colors.oceanRatio > 0.3 && (
            <circle cx="180" cy="180" r="155" fill="url(#oceanGrad)" opacity={colors.oceanRatio * 0.5} />
          )}

          {/* Continents */}
          <g clipPath="url(#planetClip)" transform="translate(20, 20)">
            {continentPaths.slice(0, visibleContinents).map((path, i) => (
              <path
                key={i}
                d={path.d}
                fill={colors.primary}
                opacity={path.opacity * (colors.landRatio + 0.3)}
                stroke={colors.primary}
                strokeWidth="1"
              />
            ))}
          </g>

          {/* Cloud layer */}
          {hasAtmosphere && cloudOpacity > 0.1 && (
            <g clipPath="url(#planetClip)" opacity={cloudOpacity * 0.7}>
              <ellipse cx="140" cy="120" rx="55" ry="18" fill="white" opacity="0.6" />
              <ellipse cx="220" cy="150" rx="45" ry="14" fill="white" opacity="0.5" />
              <ellipse cx="160" cy="220" rx="60" ry="16" fill="white" opacity="0.55" />
              <ellipse cx="240" cy="200" rx="35" ry="12" fill="white" opacity="0.45" />
              <ellipse cx="110" cy="190" rx="40" ry="13" fill="white" opacity="0.5" />
            </g>
          )}

          {/* Atmosphere overlay */}
          {hasAtmosphere && (
            <circle cx="180" cy="180" r="155" fill="url(#atmosphereGrad)" />
          )}

          {/* Highlight */}
          <circle cx="180" cy="180" r="155" fill="url(#highlightGrad)" />

          {/* Aurora effect */}
          {planet.atmosphere.hasAurora && (
            <g clipPath="url(#planetClip)" opacity="0.4">
              <ellipse cx="180" cy="50" rx="80" ry="20" fill="#00ff88" opacity="0.3" />
              <ellipse cx="180" cy="310" rx="80" ry="20" fill="#8800ff" opacity="0.3" />
            </g>
          )}

          {/* Planet edge shadow */}
          <circle cx="180" cy="180" r="155" fill="none" stroke="#000" strokeWidth="3" opacity="0.3" />
        </svg>

        {/* Rings (if high tilt) */}
        {planet.gravity.axialTilt > 60 && (
          <div
            className="absolute inset-0 flex items-center justify-center pointer-events-none"
            style={{ transform: 'rotateX(75deg)' }}
          >
            <div
              className="rounded-full border-4 opacity-40"
              style={{
                width: '140%',
                height: '140%',
                borderColor: glowColor,
                boxShadow: `0 0 20px ${glowColor}44`,
              }}
            />
          </div>
        )}
      </div>

      {/* Planet name */}
      <div className="text-center">
        <h2 className="text-2xl font-bold text-white tracking-wide">{planet.name}</h2>
        <p className="text-sm text-gray-400 mt-1">
          {planet.atmosphere.type !== 'none' ? `${planet.atmosphere.type} atmosphere` : 'No atmosphere'} •{' '}
          {planet.gravity.strength.toFixed(1)}g gravity
        </p>
      </div>

      {/* Quick stats */}
      <div className="grid grid-cols-3 gap-3 w-full max-w-xs">
        {[
          { label: 'Temp', value: `${planet.weather.avgTemperature}°C`, color: 'text-orange-400' },
          { label: 'Land', value: `${planet.continents.landCoverage}%`, color: 'text-amber-400' },
          { label: 'Life', value: `${planet.ecosystems.biodiversity}%`, color: 'text-emerald-400' },
        ].map(stat => (
          <div key={stat.label} className="bg-gray-800/60 rounded-lg p-2 text-center border border-gray-700/50">
            <div className={`text-base font-bold ${stat.color}`}>{stat.value}</div>
            <div className="text-xs text-gray-500">{stat.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PlanetCanvas;
