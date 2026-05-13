import { useState } from 'react';
import { MapPin, Grid, Compass } from 'lucide-react';

export default function ConstellationsSection() {
  const [hoveredStar, setHoveredStar] = useState(null);

  // Ursa Major (Big Dipper) approximate positions as percentages
  const stars = [
    { id: 'Dubhe', x: 72, y: 28, name: 'Dubhe', ra: '11h 03m', dec: '+61°45\'', mag: 1.79 },
    { id: 'Merak', x: 68, y: 38, name: 'Merak', ra: '11h 01m', dec: '+56°22\'', mag: 2.37 },
    { id: 'Phecda', x: 55, y: 42, name: 'Phecda', ra: '11h 53m', dec: '+53°41\'', mag: 2.44 },
    { id: 'Megrez', x: 52, y: 32, name: 'Megrez', ra: '12h 15m', dec: '+57°01\'', mag: 3.31 },
    { id: 'Alioth', x: 40, y: 30, name: 'Alioth', ra: '12h 54m', dec: '+55°57\'', mag: 1.77 },
    { id: 'Mizar', x: 30, y: 26, name: 'Mizar', ra: '13h 23m', dec: '+54°55\'', mag: 2.27 },
    { id: 'Alkaid', x: 18, y: 18, name: 'Alkaid', ra: '13h 47m', dec: '+49°18\'', mag: 1.86 },
  ];

  const lines = [
    ['Dubhe', 'Merak'],
    ['Merak', 'Phecda'],
    ['Phecda', 'Megrez'],
    ['Megrez', 'Dubhe'],
    ['Megrez', 'Alioth'],
    ['Alioth', 'Mizar'],
    ['Mizar', 'Alkaid'],
  ];

  const getStarById = (id) => stars.find((s) => s.id === id);

  return (
    <section className="py-24 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-8 rounded-full bg-indigo-400/10 border border-indigo-400/30 flex items-center justify-center">
              <Compass className="w-4 h-4 text-indigo-400" />
            </div>
            <span className="text-indigo-400 text-xs tracking-widest uppercase font-medium">
              Section A
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-light text-gray-50 tracking-tight mb-4">
            Constellations &amp; Coordinate Systems
          </h2>
          <div className="w-12 h-px bg-indigo-400/40" />
        </div>

        {/* Main Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left: Interactive Constellation Diagram */}
          <div className="space-y-4">
            <div className="relative bg-[#080C14] rounded-2xl border border-gray-800 overflow-hidden aspect-[4/3]">
              {/* Grid lines for RA/Dec */}
              <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 75" preserveAspectRatio="none">
                {/* RA lines (vertical) */}
                {[10, 20, 30, 40, 50, 60, 70, 80, 90].map((x) => (
                  <line key={`ra-${x}`} x1={x} y1="0" x2={x} y2="75"
                    stroke="#1e3a5f" strokeWidth="0.3" strokeDasharray="1,2" />
                ))}
                {/* Dec lines (horizontal) */}
                {[10, 20, 30, 40, 50, 60, 70].map((y) => (
                  <line key={`dec-${y}`} x1="0" y1={y} x2="100" y2={y}
                    stroke="#1e3a5f" strokeWidth="0.3" strokeDasharray="1,2" />
                ))}

                {/* RA Labels */}
                {['10h', '11h', '12h', '13h', '14h'].map((label, i) => (
                  <text key={label} x={20 + i * 15} y="72" fill="#374151"
                    fontSize="2.5" textAnchor="middle" fontFamily="Inter">
                    {label}
                  </text>
                ))}

                {/* Dec Labels */}
                {['+70°', '+60°', '+50°', '+40°'].map((label, i) => (
                  <text key={label} x="2" y={12 + i * 15} fill="#374151"
                    fontSize="2.5" fontFamily="Inter">
                    {label}
                  </text>
                ))}

                {/* Constellation lines */}
                {lines.map(([a, b]) => {
                  const starA = getStarById(a);
                  const starB = getStarById(b);
                  return (
                    <line
                      key={`${a}-${b}`}
                      x1={starA.x} y1={starA.y}
                      x2={starB.x} y2={starB.y}
                      stroke="#6366f1" strokeWidth="0.5" opacity="0.6"
                    />
                  );
                })}

                {/* Stars */}
                {stars.map((star) => (
                  <g key={star.id}>
                    <circle
                      cx={star.x} cy={star.y} r="1.5"
                      fill={hoveredStar === star.id ? '#F59E0B' : '#e2e8f0'}
                      className="cursor-pointer transition-all duration-200"
                      onMouseEnter={() => setHoveredStar(star.id)}
                      onMouseLeave={() => setHoveredStar(null)}
                    />
                    {/* Glow */}
                    <circle
                      cx={star.x} cy={star.y} r="3"
                      fill={hoveredStar === star.id ? '#F59E0B' : 'white'}
                      opacity={hoveredStar === star.id ? 0.15 : 0.05}
                    />
                    <text x={star.x + 2} y={star.y - 2} fill="#9ca3af"
                      fontSize="2" fontFamily="Inter">
                      {star.name}
                    </text>
                  </g>
                ))}
              </svg>

              {/* Axis Labels */}
              <div className="absolute bottom-2 left-1/2 -translate-x-1/2 text-gray-600 text-xs tracking-widest uppercase flex items-center gap-1">
                <Grid className="w-3 h-3" />
                Right Ascension (RA)
              </div>
              <div className="absolute left-2 top-1/2 -translate-y-1/2 -rotate-90 text-gray-600 text-xs tracking-widest uppercase">
                Declination (Dec)
              </div>

              {/* Constellation Label */}
              <div className="absolute top-4 right-4 bg-[#0B0F19]/80 border border-indigo-400/20 rounded-lg px-3 py-2">
                <p className="text-indigo-400 text-xs tracking-wide font-medium">Ursa Major</p>
                <p className="text-gray-500 text-xs">The Great Bear</p>
              </div>
            </div>

            {/* Hover tooltip */}
            {hoveredStar && (() => {
              const star = getStarById(hoveredStar);
              return (
                <div className="bg-[#111827] border border-indigo-400/20 rounded-xl p-4 grid grid-cols-3 gap-4">
                  <div>
                    <p className="text-gray-500 text-xs uppercase tracking-wide mb-1">Star</p>
                    <p className="text-gray-100 text-sm font-medium">{star.name}</p>
                  </div>
                  <div>
                    <p className="text-gray-500 text-xs uppercase tracking-wide mb-1">RA</p>
                    <p className="text-indigo-400 text-sm font-mono">{star.ra}</p>
                  </div>
                  <div>
                    <p className="text-gray-500 text-xs uppercase tracking-wide mb-1">Dec</p>
                    <p className="text-indigo-400 text-sm font-mono">{star.dec}</p>
                  </div>
                </div>
              );
            })()}

            {!hoveredStar && (
              <p className="text-gray-600 text-xs text-center tracking-wide">
                Hover over a star to view its celestial coordinates
              </p>
            )}
          </div>

          {/* Right: Explanatory Text */}
          <div className="space-y-8 lg:pt-4">
            <div>
              <h3 className="text-xl font-medium text-amber-400 mb-4">
                Mapping the 3D Sky onto 2D Coordinates
              </h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                Just as geographers use latitude and longitude to pinpoint locations on Earth,
                astronomers use the <strong className="text-gray-100">Celestial Coordinate System</strong> to
                precisely locate objects in the sky. This system projects an imaginary sphere —
                the <em className="text-indigo-300">Celestial Sphere</em> — around Earth.
              </p>
              <p className="text-gray-400 leading-relaxed">
                The two primary axes are <strong className="text-gray-100">Right Ascension (RA)</strong>,
                analogous to longitude and measured in hours (0h–24h), and{' '}
                <strong className="text-gray-100">Declination (Dec)</strong>, analogous to latitude
                and measured in degrees (−90° to +90°).
              </p>
            </div>

            <div className="space-y-4">
              {[
                {
                  icon: MapPin,
                  title: 'Right Ascension (RA)',
                  desc: 'Measured eastward from the Vernal Equinox in hours, minutes, and seconds. One full rotation = 24 hours = 360°.',
                  color: 'text-indigo-400',
                  bg: 'bg-indigo-400/5 border-indigo-400/20',
                },
                {
                  icon: Compass,
                  title: 'Declination (Dec)',
                  desc: 'The angular distance north (+) or south (−) of the Celestial Equator. The North Celestial Pole sits at Dec = +90°.',
                  color: 'text-amber-400',
                  bg: 'bg-amber-400/5 border-amber-400/20',
                },
              ].map(({ icon: Icon, title, desc, color, bg }) => (
                <div key={title} className={`rounded-xl border p-4 ${bg}`}>
                  <div className="flex items-start gap-3">
                    <Icon className={`w-4 h-4 mt-0.5 flex-shrink-0 ${color}`} />
                    <div>
                      <h4 className={`text-sm font-medium mb-1 ${color}`}>{title}</h4>
                      <p className="text-gray-400 text-sm leading-relaxed">{desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-[#111827] rounded-xl border border-gray-800 p-5">
              <p className="text-gray-500 text-xs uppercase tracking-widest mb-3">
                Physics Insight
              </p>
              <p className="text-gray-300 text-sm leading-relaxed">
                Because Earth's axis precesses like a spinning top over a ~26,000-year cycle
                (Axial Precession), the celestial poles slowly drift. This means stellar
                coordinates must be referenced to a specific <em className="text-indigo-300">epoch</em> —
                currently <strong className="text-gray-100">J2000.0</strong>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
