import { useState } from 'react';
import { Zap, ChevronRight, Info } from 'lucide-react';

const stages = [
  {
    id: 0,
    name: 'Stellar Nebula',
    subtitle: 'The Birthplace',
    image: 'https://images.unsplash.com/photo-1462331940025-496dfbfc7564?w=600&q=80',
    alt: 'Nebula cloud',
    color: 'indigo',
    duration: '~10 million years',
    physics: 'Gravity causes a dense molecular cloud of hydrogen and helium to collapse. As the cloud contracts, gravitational potential energy converts to thermal energy, raising core temperatures.',
    detail: 'When core temperature reaches ~10 million K, hydrogen fusion ignites — a protostar is born.',
  },
  {
    id: 1,
    name: 'Main Sequence',
    subtitle: 'Stellar Adulthood',
    image: 'https://images.unsplash.com/photo-1614728894747-a83421e2b9c9?w=600&q=80',
    alt: 'Bright star',
    color: 'amber',
    duration: '~10 billion years (Sun)',
    physics: 'Hydrostatic equilibrium: the outward radiation pressure from nuclear fusion exactly balances the inward gravitational force. The star fuses H → He via the proton-proton chain.',
    detail: 'Our Sun has spent ~4.6 billion years here and has ~5 billion years remaining.',
  },
  {
    id: 2,
    name: 'Red Giant',
    subtitle: 'Stellar Expansion',
    image: 'https://images.unsplash.com/photo-1506318137071-a8e063b4bec0?w=600&q=80',
    alt: 'Red giant star',
    color: 'red',
    duration: '~1 billion years',
    physics: 'Hydrogen in the core is exhausted. The core contracts and heats, while the outer shell expands dramatically. Helium fusion begins via the triple-alpha process (3 He-4 → C-12).',
    detail: 'The Sun will expand to ~200× its current radius, engulfing Mercury and Venus.',
  },
  {
    id: 3,
    name: 'Supernova / Planetary Nebula',
    subtitle: 'The Dramatic End',
    image: 'https://images.unsplash.com/photo-1543722530-d2c3201371e7?w=600&q=80',
    alt: 'Supernova explosion',
    color: 'orange',
    duration: 'Seconds to weeks',
    physics: 'Massive stars (>8 M☉) undergo core collapse when iron accumulates — iron fusion is endothermic. The core implodes at ~0.25c, then rebounds in a shockwave releasing ~10⁴⁴ J.',
    detail: 'Lower-mass stars shed outer layers as a planetary nebula, exposing the hot core.',
  },
  {
    id: 4,
    name: 'White Dwarf / Neutron Star / Black Hole',
    subtitle: 'The Final State',
    image: 'https://images.unsplash.com/photo-1534796636912-3b95b3ab5986?w=600&q=80',
    alt: 'Black hole accretion disk',
    color: 'purple',
    duration: 'Trillions of years',
    physics: 'Remnant mass determines fate: <1.4 M☉ → White Dwarf (electron degeneracy pressure); 1.4–3 M☉ → Neutron Star (neutron degeneracy); >3 M☉ → Black Hole (spacetime singularity).',
    detail: 'Black holes warp spacetime so severely that escape velocity exceeds c — the speed of light.',
  },
];

const colorMap = {
  indigo: { border: 'border-indigo-400/40', bg: 'bg-indigo-400/10', text: 'text-indigo-400', dot: 'bg-indigo-400' },
  amber: { border: 'border-amber-400/40', bg: 'bg-amber-400/10', text: 'text-amber-400', dot: 'bg-amber-400' },
  red: { border: 'border-red-400/40', bg: 'bg-red-400/10', text: 'text-red-400', dot: 'bg-red-400' },
  orange: { border: 'border-orange-400/40', bg: 'bg-orange-400/10', text: 'text-orange-400', dot: 'bg-orange-400' },
  purple: { border: 'border-purple-400/40', bg: 'bg-purple-400/10', text: 'text-purple-400', dot: 'bg-purple-400' },
};

export default function StellarEvolutionSection() {
  const [activeStage, setActiveStage] = useState(0);
  const stage = stages[activeStage];
  const colors = colorMap[stage.color];

  return (
    <section className="py-24 px-6 md:px-12 bg-[#080C14]">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-8 rounded-full bg-amber-400/10 border border-amber-400/30 flex items-center justify-center">
              <Zap className="w-4 h-4 text-amber-400" />
            </div>
            <span className="text-amber-400 text-xs tracking-widest uppercase font-medium">
              Section B
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-light text-gray-50 tracking-tight mb-4">
            Stellar Evolution Timeline
          </h2>
          <div className="w-12 h-px bg-amber-400/40" />
        </div>

        {/* Timeline Navigation */}
        <div className="flex items-center gap-0 mb-12 overflow-x-auto scrollbar-hide pb-2">
          {stages.map((s, i) => {
            const c = colorMap[s.color];
            const isActive = activeStage === i;
            return (
              <button
                key={s.id}
                onClick={() => setActiveStage(i)}
                className="flex items-center group flex-shrink-0"
              >
                <div className={`flex flex-col items-center px-4 py-3 rounded-xl transition-all duration-200 ${
                  isActive ? `${c.bg} border ${c.border}` : 'hover:bg-gray-800/50'
                }`}>
                  <div className={`w-3 h-3 rounded-full mb-2 transition-all ${
                    isActive ? c.dot : 'bg-gray-700'
                  }`} />
                  <span className={`text-xs font-medium whitespace-nowrap transition-colors ${
                    isActive ? c.text : 'text-gray-500 group-hover:text-gray-300'
                  }`}>
                    {s.name.split(' ')[0]}
                  </span>
                </div>
                {i < stages.length - 1 && (
                  <ChevronRight className="w-4 h-4 text-gray-700 flex-shrink-0 mx-1" />
                )}
              </button>
            );
          })}
        </div>

        {/* Active Stage Detail — Side by Side */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          {/* Left: Image */}
          <div className="relative rounded-2xl overflow-hidden aspect-[4/3] border border-gray-800">
            <img
              key={stage.id}
              src={stage.image}
              alt={stage.alt}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#080C14] via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium mb-2 ${colors.bg} ${colors.text} border ${colors.border}`}>
                <span className={`w-1.5 h-1.5 rounded-full ${colors.dot}`} />
                Stage {activeStage + 1} of {stages.length}
              </div>
              <h3 className="text-2xl font-light text-gray-50">{stage.name}</h3>
              <p className={`text-sm ${colors.text}`}>{stage.subtitle}</p>
            </div>
          </div>

          {/* Right: Physics Content */}
          <div className="space-y-6">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="text-gray-500 text-xs uppercase tracking-widest">Duration</span>
                <span className={`text-xs font-mono ${colors.text}`}>{stage.duration}</span>
              </div>
              <h3 className="text-xl font-medium text-gray-50 mb-4">{stage.name}</h3>
              <p className="text-gray-300 leading-relaxed">{stage.physics}</p>
            </div>

            <div className={`rounded-xl border p-4 ${colors.bg} ${colors.border}`}>
              <div className="flex items-start gap-3">
                <Info className={`w-4 h-4 mt-0.5 flex-shrink-0 ${colors.text}`} />
                <p className="text-gray-300 text-sm leading-relaxed">{stage.detail}</p>
              </div>
            </div>

            {/* H-R Diagram snippet for Main Sequence */}
            {activeStage === 1 && (
              <div className="bg-[#0B0F19] rounded-xl border border-gray-800 p-5">
                <p className="text-gray-500 text-xs uppercase tracking-widest mb-4">
                  Hertzsprung-Russell Diagram
                </p>
                <div className="relative h-40">
                  <svg viewBox="0 0 200 120" className="w-full h-full">
                    {/* Axes */}
                    <line x1="20" y1="10" x2="20" y2="110" stroke="#374151" strokeWidth="1" />
                    <line x1="20" y1="110" x2="190" y2="110" stroke="#374151" strokeWidth="1" />
                    {/* Axis labels */}
                    <text x="100" y="118" fill="#6b7280" fontSize="6" textAnchor="middle">Temperature (K) →</text>
                    <text x="8" y="60" fill="#6b7280" fontSize="6" textAnchor="middle" transform="rotate(-90,8,60)">Luminosity →</text>
                    {/* Main sequence band */}
                    <path d="M 30 15 Q 80 40 130 75 Q 160 90 185 105" stroke="#F59E0B" strokeWidth="3" fill="none" opacity="0.8" />
                    {/* Sun marker */}
                    <circle cx="110" cy="65" r="4" fill="#FCD34D" />
                    <text x="118" y="62" fill="#FCD34D" fontSize="5">☉ Sun</text>
                    {/* Labels */}
                    <text x="35" y="20" fill="#818cf8" fontSize="5">Blue Giants</text>
                    <text x="155" y="100" fill="#f87171" fontSize="5">Red Dwarfs</text>
                    <text x="60" y="50" fill="#F59E0B" fontSize="5" transform="rotate(-30,60,50)">Main Sequence</text>
                  </svg>
                </div>
              </div>
            )}

            {/* Navigation buttons */}
            <div className="flex gap-3 pt-2">
              <button
                onClick={() => setActiveStage(Math.max(0, activeStage - 1))}
                disabled={activeStage === 0}
                className="px-4 py-2 rounded-full border border-gray-700 text-gray-400 text-sm hover:border-gray-500 hover:text-gray-200 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
              >
                ← Previous
              </button>
              <button
                onClick={() => setActiveStage(Math.min(stages.length - 1, activeStage + 1))}
                disabled={activeStage === stages.length - 1}
                className={`px-4 py-2 rounded-full border text-sm transition-all disabled:opacity-30 disabled:cursor-not-allowed ${colors.border} ${colors.text} hover:${colors.bg}`}
              >
                Next Stage →
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
