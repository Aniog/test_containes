import { useEffect, useRef } from 'react';
import { Compass, Globe, Navigation } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const coordinateFacts = [
  {
    icon:  Globe,
    term:  'Right Ascension (RA)',
    value: '0h – 24h',
    desc:  'The celestial equivalent of longitude, measured in hours eastward from the vernal equinox. One hour = 15° of arc.',
  },
  {
    icon:  Navigation,
    term:  'Declination (Dec)',
    value: '−90° to +90°',
    desc:  'The celestial equivalent of latitude, measured in degrees north (+) or south (−) of the celestial equator.',
  },
  {
    icon:  Compass,
    term:  'Celestial Sphere',
    value: '360° × 180°',
    desc:  'An imaginary sphere of infinite radius centred on Earth — the projection surface for mapping all astronomical objects.',
  },
];

export default function KnowledgeCoordinates() {
  const containerRef = useRef(null);

  useEffect(() => {
    if (containerRef.current) {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    }
  }, []);

  return (
    <section
      id="coordinates"
      ref={containerRef}
      className="py-20 md:py-28 px-6 md:px-12 lg:px-20 bg-cosmos-deep"
    >
      <div className="max-w-7xl mx-auto">

        {/* Section label */}
        <div className="flex items-center gap-3 mb-4">
          <div className="w-8 h-px bg-amber-glow" />
          <span className="text-xs font-semibold uppercase tracking-widest text-amber-glow">
            Section A
          </span>
        </div>
        <h2
          id="coord-section-title"
          className="font-display font-bold text-3xl md:text-4xl text-star-white mb-4"
        >
          Constellations & Celestial Coordinates
        </h2>
        <p
          id="coord-section-subtitle"
          className="text-cosmos-subtle max-w-2xl text-base leading-relaxed mb-12"
        >
          Before telescopes, navigators and astronomers mapped the sky using angular coordinates. Today, the same system — Right Ascension and Declination — allows physicists to pinpoint any object in the 3D universe with precision.
        </p>

        {/* Main visual + overlay */}
        <div className="relative rounded-2xl overflow-hidden mb-12 aspect-[16/7] md:aspect-[16/6]">
          {/* Background: wide-field night sky photograph showing constellations and Milky Way */}
          <div
            className="absolute inset-0"
            data-strk-bg-id="coord-bg-nightsky-1a4f8b"
            data-strk-bg="[coord-section-subtitle] [coord-section-title]"
            data-strk-bg-ratio="16x9"
            data-strk-bg-width="1600"
            style={{ backgroundSize: 'cover', backgroundPosition: 'center' }}
          />
          <div className="absolute inset-0 bg-cosmos-void/50" />

          {/* Coordinate grid overlay — SVG diagram */}
          <svg
            className="absolute inset-0 w-full h-full opacity-40"
            viewBox="0 0 800 350"
            preserveAspectRatio="xMidYMid slice"
          >
            {/* RA lines (vertical) */}
            {[0, 1, 2, 3, 4, 5, 6].map((i) => (
              <line
                key={`ra-${i}`}
                x1={i * 133}
                y1="0"
                x2={i * 133}
                y2="350"
                stroke="#F5A623"
                strokeWidth="0.5"
                strokeDasharray="4 6"
              />
            ))}
            {/* Dec lines (horizontal) */}
            {[0, 1, 2, 3, 4].map((i) => (
              <line
                key={`dec-${i}`}
                x1="0"
                y1={i * 87.5}
                x2="800"
                y2={i * 87.5}
                stroke="#A8C4FF"
                strokeWidth="0.5"
                strokeDasharray="4 6"
              />
            ))}
            {/* RA labels */}
            {['0h', '4h', '8h', '12h', '16h', '20h'].map((label, i) => (
              <text
                key={label}
                x={i * 133 + 4}
                y="14"
                fill="#F5A623"
                fontSize="10"
                fontFamily="Inter, sans-serif"
                opacity="0.9"
              >
                {label}
              </text>
            ))}
            {/* Dec labels */}
            {['+60°', '+30°', '0°', '−30°', '−60°'].map((label, i) => (
              <text
                key={label}
                x="4"
                y={i * 87.5 + 14}
                fill="#A8C4FF"
                fontSize="10"
                fontFamily="Inter, sans-serif"
                opacity="0.9"
              >
                {label}
              </text>
            ))}
            {/* Celestial equator highlight */}
            <line x1="0" y1="175" x2="800" y2="175" stroke="#A8C4FF" strokeWidth="1.5" opacity="0.6" />
            {/* Sample star markers */}
            {[
              { x: 80,  y: 120, name: 'Betelgeuse', ra: '5h 55m', dec: '+7°' },
              { x: 200, y: 200, name: 'Sirius',     ra: '6h 45m', dec: '−16°' },
              { x: 450, y: 90,  name: 'Vega',       ra: '18h 37m', dec: '+38°' },
              { x: 600, y: 160, name: 'Altair',     ra: '19h 51m', dec: '+9°' },
            ].map((star) => (
              <g key={star.name}>
                <circle cx={star.x} cy={star.y} r="4" fill="#FFB84D" opacity="0.9" />
                <circle cx={star.x} cy={star.y} r="8" fill="none" stroke="#FFB84D" strokeWidth="0.8" opacity="0.5" />
                <text x={star.x + 10} y={star.y - 6} fill="#F0F4FF" fontSize="9" fontFamily="Inter, sans-serif" opacity="0.9">
                  {star.name}
                </text>
                <text x={star.x + 10} y={star.y + 5} fill="#8892A4" fontSize="8" fontFamily="Inter, sans-serif" opacity="0.8">
                  RA {star.ra} / Dec {star.dec}
                </text>
              </g>
            ))}
          </svg>

          {/* Legend */}
          <div className="absolute bottom-4 right-4 glass-card rounded-xl p-4 text-xs space-y-2">
            <div className="flex items-center gap-2">
              <div className="w-6 h-px border-t border-dashed border-amber-glow" />
              <span className="text-cosmos-text">Right Ascension (RA)</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-6 h-px border-t border-dashed border-star-blue" />
              <span className="text-cosmos-text">Declination (Dec)</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-amber-glow" />
              <span className="text-cosmos-text">Named Star</span>
            </div>
          </div>
        </div>

        {/* Fact cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {coordinateFacts.map((fact) => {
            const Icon = fact.icon;
            return (
              <div
                key={fact.term}
                className="bg-cosmos-card border border-cosmos-border rounded-xl p-6 hover:border-amber-glow/30 transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-9 h-9 rounded-lg bg-amber-glow/10 border border-amber-glow/20 flex items-center justify-center">
                    <Icon className="w-4 h-4 text-amber-glow" />
                  </div>
                  <div>
                    <div className="text-xs text-cosmos-subtle uppercase tracking-wider">{fact.term}</div>
                    <div className="font-display font-bold text-amber-glow text-lg">{fact.value}</div>
                  </div>
                </div>
                <p className="text-sm text-cosmos-subtle leading-relaxed">{fact.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
