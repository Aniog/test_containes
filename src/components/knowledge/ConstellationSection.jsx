import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const raLines = [0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330];
const decLines = [-60, -30, 0, 30, 60];

const stars = [
  { name: 'Dubhe', ra: 165, dec: 62, size: 4 },
  { name: 'Merak', ra: 165, dec: 57, size: 3.5 },
  { name: 'Phecda', ra: 178, dec: 54, size: 3 },
  { name: 'Megrez', ra: 183, dec: 57, size: 2.5 },
  { name: 'Alioth', ra: 193, dec: 56, size: 4 },
  { name: 'Mizar', ra: 200, dec: 55, size: 3.5 },
  { name: 'Alkaid', ra: 206, dec: 49, size: 3 },
];

function raToX(ra, width) {
  return ((ra - 150) / 80) * width;
}
function decToY(dec, height) {
  return ((70 - dec) / 40) * height;
}

export default function ConstellationDiagram() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  const W = 500;
  const H = 320;

  const starCoords = stars.map((s) => ({
    ...s,
    x: raToX(s.ra, W),
    y: decToY(s.dec, H),
  }));

  const lines = [
    [0, 1], [1, 2], [2, 3], [3, 4], [4, 5], [5, 6],
    [0, 3],
  ];

  return (
    <section ref={containerRef} id="constellations" className="py-24 px-6 md:px-12 lg:px-24 bg-[#0B0F19]">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <span className="text-xs uppercase tracking-widest text-indigo-400">Section A</span>
          <h2 className="text-4xl md:text-5xl font-light text-white mt-3 mb-4">
            Constellations & Coordinate Systems
          </h2>
          <p className="text-gray-400 max-w-2xl leading-relaxed">
            How physicists map the three-dimensional sky onto a two-dimensional coordinate system — 
            the celestial sphere and its angular grid.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Diagram */}
          <div className="bg-[#080C14] border border-[#1F2937] rounded-2xl overflow-hidden">
            <div className="px-6 py-4 border-b border-[#1F2937] flex items-center justify-between">
              <span className="text-xs uppercase tracking-widest text-gray-500">Celestial Coordinate Diagram</span>
              <span className="text-xs text-indigo-400 font-mono">Ursa Major</span>
            </div>

            {/* SVG Diagram */}
            <div className="p-4 coord-grid">
              <svg viewBox={`0 0 ${W} ${H}`} className="w-full" style={{ background: 'transparent' }}>
                {/* RA grid lines (vertical) */}
                {[165, 180, 195, 210].map((ra) => {
                  const x = raToX(ra, W);
                  return (
                    <g key={`ra-${ra}`}>
                      <line x1={x} y1={0} x2={x} y2={H} stroke="rgba(99,102,241,0.2)" strokeWidth="0.5" strokeDasharray="4,4" />
                      <text x={x} y={H - 4} fill="rgba(99,102,241,0.6)" fontSize="9" textAnchor="middle" fontFamily="JetBrains Mono, monospace">
                        {ra}h
                      </text>
                    </g>
                  );
                })}

                {/* Dec grid lines (horizontal) */}
                {[45, 55, 65].map((dec) => {
                  const y = decToY(dec, H);
                  return (
                    <g key={`dec-${dec}`}>
                      <line x1={0} y1={y} x2={W} y2={y} stroke="rgba(99,102,241,0.2)" strokeWidth="0.5" strokeDasharray="4,4" />
                      <text x={6} y={y - 3} fill="rgba(99,102,241,0.6)" fontSize="9" fontFamily="JetBrains Mono, monospace">
                        {dec}°
                      </text>
                    </g>
                  );
                })}

                {/* Constellation lines */}
                {lines.map(([a, b], i) => (
                  <line
                    key={i}
                    x1={starCoords[a].x} y1={starCoords[a].y}
                    x2={starCoords[b].x} y2={starCoords[b].y}
                    stroke="rgba(245,158,11,0.4)"
                    strokeWidth="1"
                  />
                ))}

                {/* Stars */}
                {starCoords.map((star) => (
                  <g key={star.name}>
                    <circle cx={star.x} cy={star.y} r={star.size + 3} fill="rgba(245,158,11,0.1)" />
                    <circle cx={star.x} cy={star.y} r={star.size} fill="#F59E0B" />
                    <text
                      x={star.x + star.size + 4}
                      y={star.y + 4}
                      fill="rgba(249,250,251,0.7)"
                      fontSize="9"
                      fontFamily="JetBrains Mono, monospace"
                    >
                      {star.name}
                    </text>
                  </g>
                ))}

                {/* Axis labels */}
                <text x={W / 2} y={H - 4} fill="rgba(99,102,241,0.8)" fontSize="10" textAnchor="middle" fontFamily="Inter, sans-serif">
                  Right Ascension (RA) →
                </text>
                <text
                  x={12}
                  y={H / 2}
                  fill="rgba(99,102,241,0.8)"
                  fontSize="10"
                  textAnchor="middle"
                  fontFamily="Inter, sans-serif"
                  transform={`rotate(-90, 12, ${H / 2})`}
                >
                  Declination (Dec) ↑
                </text>
              </svg>
            </div>

            {/* Legend */}
            <div className="px-6 py-4 border-t border-[#1F2937] flex flex-wrap gap-4 text-xs">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-amber-400" />
                <span className="text-gray-400">Stars</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-6 h-px bg-amber-400/40" />
                <span className="text-gray-400">Constellation lines</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-6 h-px bg-indigo-400/40 border-dashed border-t" />
                <span className="text-gray-400">Coordinate grid</span>
              </div>
            </div>
          </div>

          {/* Text Content */}
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-medium text-white mb-3">The Celestial Sphere</h3>
              <p className="text-gray-400 leading-relaxed">
                Astronomers project the sky onto an imaginary sphere of infinite radius centered on Earth. 
                This <span className="text-white">celestial sphere</span> allows us to specify the position 
                of any object using just two angular coordinates — analogous to latitude and longitude on Earth.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-[#111827] border border-indigo-500/20 rounded-xl p-5">
                <div className="text-indigo-400 text-xs uppercase tracking-widest mb-2">Right Ascension (RA)</div>
                <p className="text-gray-300 text-sm leading-relaxed">
                  The celestial equivalent of longitude. Measured in hours, minutes, and seconds (0h to 24h), 
                  eastward from the vernal equinox.
                </p>
                <div className="mt-3 font-mono text-xs text-indigo-300">0h 00m 00s → 23h 59m 59s</div>
              </div>
              <div className="bg-[#111827] border border-amber-500/20 rounded-xl p-5">
                <div className="text-amber-400 text-xs uppercase tracking-widest mb-2">Declination (Dec)</div>
                <p className="text-gray-300 text-sm leading-relaxed">
                  The celestial equivalent of latitude. Measured in degrees from the celestial equator 
                  (+90° at north pole, −90° at south pole).
                </p>
                <div className="mt-3 font-mono text-xs text-amber-300">−90° → +90°</div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-medium text-white mb-3">Ursa Major — The Great Bear</h3>
              <p className="text-gray-400 leading-relaxed mb-4">
                The diagram shows the seven brightest stars of Ursa Major (the Big Dipper asterism) 
                plotted on the celestial coordinate grid. Notice how the stars span roughly 
                <span className="text-white font-mono"> 40° in RA</span> and 
                <span className="text-white font-mono"> 15° in Dec</span>.
              </p>
              <div className="space-y-2">
                {[
                  { star: 'Dubhe (α UMa)', coords: 'RA 11h 03m, Dec +61° 45\'', note: 'Pointer star to Polaris' },
                  { star: 'Merak (β UMa)', coords: 'RA 11h 01m, Dec +56° 22\'', note: 'Second pointer star' },
                  { star: 'Alkaid (η UMa)', coords: 'RA 13h 47m, Dec +49° 18\'', note: 'Handle tip' },
                ].map((item) => (
                  <div key={item.star} className="flex items-start gap-3 text-sm">
                    <div className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-1.5 flex-shrink-0" />
                    <div>
                      <span className="text-white font-mono text-xs">{item.star}</span>
                      <span className="text-gray-500 mx-2">·</span>
                      <span className="text-indigo-300 font-mono text-xs">{item.coords}</span>
                      <div className="text-gray-500 text-xs mt-0.5">{item.note}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Celestial sphere image */}
            <div className="relative rounded-xl overflow-hidden aspect-video">
              <img
                data-strk-img-id="constellation-sphere-4a7b2c"
                data-strk-img="[constellation-sphere-desc] [constellation-sphere-title]"
                data-strk-img-ratio="16x9"
                data-strk-img-width="700"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt="Celestial sphere coordinate system"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F19]/80 to-transparent" />
              <div className="absolute bottom-3 left-4 right-4">
                <p id="constellation-sphere-title" className="text-white text-sm font-medium">Celestial Sphere Model</p>
                <p id="constellation-sphere-desc" className="text-gray-400 text-xs">The celestial coordinate system with right ascension and declination grid lines mapped onto the night sky</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
