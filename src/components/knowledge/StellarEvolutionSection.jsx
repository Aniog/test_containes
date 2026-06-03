import { useState, useEffect, useRef } from 'react';
import { ChevronRight, ChevronLeft } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const stages = [
  {
    id: 'nebula',
    step: '01',
    title: 'Stellar Nebula',
    titleId: 'stage-nebula-title',
    descId: 'stage-nebula-desc',
    imgId: 'stellar-nebula-img-a1b2c3',
    color: 'indigo',
    mass: 'All masses',
    duration: '~10 million years',
    temp: '10–30 K',
    description: 'A stellar nebula is a vast cloud of gas (primarily hydrogen and helium) and dust. Under the influence of gravity, regions of higher density begin to collapse inward. As the cloud contracts, gravitational potential energy converts to thermal energy, heating the core.',
    physics: 'Gravitational collapse follows the Jeans instability criterion: when the thermal pressure can no longer support the cloud against gravity, fragmentation and collapse begin.',
    detail: 'Stellar nursery — interstellar gas and dust cloud collapsing under gravity',
  },
  {
    id: 'protostar',
    step: '02',
    title: 'Protostar',
    titleId: 'stage-protostar-title',
    descId: 'stage-protostar-desc',
    imgId: 'stellar-protostar-img-d4e5f6',
    color: 'amber',
    mass: 'All masses',
    duration: '~100,000 years',
    temp: '2,000–3,000 K',
    description: 'As the nebula collapses, a protostar forms at the center. The core temperature rises dramatically. The protostar is not yet fusing hydrogen — it radiates energy from gravitational contraction (Kelvin-Helmholtz mechanism).',
    physics: 'The Kelvin-Helmholtz timescale τ_KH = GM²/RL describes how long a star can shine from gravitational contraction alone — typically millions of years.',
    detail: 'Young stellar object forming from collapsing nebula, surrounded by accretion disk',
  },
  {
    id: 'main-sequence',
    step: '03',
    title: 'Main Sequence Star',
    titleId: 'stage-main-title',
    descId: 'stage-main-desc',
    imgId: 'stellar-main-img-g7h8i9',
    color: 'yellow',
    mass: 'All masses',
    duration: '10M – 10B years',
    temp: '3,000–50,000 K',
    description: 'When core temperature reaches ~10 million K, hydrogen fusion ignites. The star enters hydrostatic equilibrium — the outward radiation pressure exactly balances the inward gravitational force. Our Sun has been on the main sequence for 4.6 billion years.',
    physics: 'Hydrostatic equilibrium: dP/dr = −ρg. The proton-proton chain (for stars like the Sun) or CNO cycle (for massive stars) converts 4H → He + energy via E=mc².',
    detail: 'Stable hydrogen-burning star in hydrostatic equilibrium on the Hertzsprung-Russell diagram',
  },
  {
    id: 'red-giant',
    step: '04',
    title: 'Red Giant / Supergiant',
    titleId: 'stage-giant-title',
    descId: 'stage-giant-desc',
    imgId: 'stellar-giant-img-j1k2l3',
    color: 'orange',
    mass: 'All masses',
    duration: '~1 billion years',
    temp: '3,500–5,000 K',
    description: 'When hydrogen in the core is exhausted, the core contracts while the outer layers expand enormously. Low-mass stars become red giants; high-mass stars become red supergiants. Helium fusion begins in the core (triple-alpha process).',
    physics: 'The triple-alpha process: 3 ⁴He → ¹²C + γ. This requires temperatures above 100 million K and is the primary source of carbon in the universe.',
    detail: 'Evolved star with exhausted hydrogen core, expanding outer envelope and helium fusion',
  },
  {
    id: 'supernova',
    step: '05',
    title: 'Supernova',
    titleId: 'stage-supernova-title',
    descId: 'stage-supernova-desc',
    imgId: 'stellar-supernova-img-m4n5o6',
    color: 'rose',
    mass: '>8 solar masses',
    duration: 'Seconds to weeks',
    temp: '>10 billion K',
    description: 'Massive stars end their lives in a catastrophic supernova explosion. The iron core collapses in milliseconds, releasing more energy than the Sun will emit in its entire lifetime. The explosion disperses heavy elements throughout the galaxy.',
    physics: 'Core collapse occurs when the iron core exceeds the Chandrasekhar limit (~1.4 M☉). The bounce creates a shockwave. Neutrino emission carries away ~99% of the gravitational binding energy.',
    detail: 'Catastrophic stellar explosion dispersing heavy elements — the cosmic forge of all elements heavier than iron',
  },
  {
    id: 'remnant',
    step: '06',
    title: 'Stellar Remnant',
    titleId: 'stage-remnant-title',
    descId: 'stage-remnant-desc',
    imgId: 'stellar-remnant-img-p7q8r9',
    color: 'cyan',
    mass: 'Varies',
    duration: 'Billions of years',
    temp: 'Varies widely',
    description: 'The final fate depends on the original mass. Low-mass stars leave a white dwarf (electron degeneracy pressure supports it). Massive stars leave a neutron star (neutron degeneracy) or black hole (gravity overcomes all pressure).',
    physics: 'White dwarfs are supported by electron degeneracy pressure. Neutron stars by neutron degeneracy. Black holes form when the remnant mass exceeds the Tolman-Oppenheimer-Volkoff limit (~3 M☉).',
    detail: 'White dwarf, neutron star, or black hole — the final state of stellar evolution determined by initial mass',
  },
];

const colorMap = {
  indigo: { bg: 'bg-indigo-500/10', border: 'border-indigo-500/30', text: 'text-indigo-400', dot: 'bg-indigo-400' },
  amber: { bg: 'bg-amber-500/10', border: 'border-amber-500/30', text: 'text-amber-400', dot: 'bg-amber-400' },
  yellow: { bg: 'bg-yellow-500/10', border: 'border-yellow-500/30', text: 'text-yellow-400', dot: 'bg-yellow-400' },
  orange: { bg: 'bg-orange-500/10', border: 'border-orange-500/30', text: 'text-orange-400', dot: 'bg-orange-400' },
  rose: { bg: 'bg-rose-500/10', border: 'border-rose-500/30', text: 'text-rose-400', dot: 'bg-rose-400' },
  cyan: { bg: 'bg-cyan-500/10', border: 'border-cyan-500/30', text: 'text-cyan-400', dot: 'bg-cyan-400' },
};

// Mini H-R Diagram SVG
function HRDiagram({ activeStage }) {
  const hrStars = [
    { label: 'O', x: 60, y: 30, r: 5, color: '#6366f1' },
    { label: 'B', x: 100, y: 50, r: 4.5, color: '#818cf8' },
    { label: 'A', x: 140, y: 80, r: 4, color: '#a5b4fc' },
    { label: 'F', x: 175, y: 110, r: 3.5, color: '#fde68a' },
    { label: 'G (Sun)', x: 205, y: 140, r: 4, color: '#fbbf24', active: activeStage === 'main-sequence' },
    { label: 'K', x: 235, y: 175, r: 3.5, color: '#f97316' },
    { label: 'M', x: 265, y: 215, r: 3, color: '#ef4444' },
    { label: 'Red Giant', x: 240, y: 80, r: 8, color: '#f97316', active: activeStage === 'red-giant' },
    { label: 'White Dwarf', x: 100, y: 230, r: 2.5, color: '#e0e7ff', active: activeStage === 'remnant' },
  ];

  return (
    <div className="bg-[#080C14] border border-[#1F2937] rounded-xl p-4">
      <div className="text-xs uppercase tracking-widest text-gray-500 mb-3">H-R Diagram</div>
      <svg viewBox="0 0 320 280" className="w-full">
        {/* Axes */}
        <line x1="40" y1="10" x2="40" y2="260" stroke="#374151" strokeWidth="1" />
        <line x1="40" y1="260" x2="310" y2="260" stroke="#374151" strokeWidth="1" />

        {/* Main sequence band */}
        <path d="M 55 25 Q 120 80 210 150 Q 260 185 280 230" stroke="rgba(99,102,241,0.3)" strokeWidth="12" fill="none" strokeLinecap="round" />

        {/* Stars */}
        {hrStars.map((star) => (
          <g key={star.label}>
            {star.active && <circle cx={star.x} cy={star.y} r={star.r + 6} fill={star.color} opacity="0.2" />}
            <circle cx={star.x} cy={star.y} r={star.r} fill={star.color} opacity={star.active ? 1 : 0.6} />
            {star.active && (
              <text x={star.x + star.r + 4} y={star.y + 4} fill={star.color} fontSize="8" fontFamily="JetBrains Mono">
                ← {star.label}
              </text>
            )}
          </g>
        ))}

        {/* Labels */}
        <text x="40" y="8" fill="#6B7280" fontSize="8" textAnchor="middle" fontFamily="Inter">L↑</text>
        <text x="175" y="275" fill="#6B7280" fontSize="8" textAnchor="middle" fontFamily="Inter">Temperature →</text>
        <text x="8" y="140" fill="#6B7280" fontSize="8" textAnchor="middle" fontFamily="Inter" transform="rotate(-90,8,140)">Luminosity</text>
        <text x="55" y="275" fill="#6B7280" fontSize="7" fontFamily="Inter">Hot</text>
        <text x="270" y="275" fill="#6B7280" fontSize="7" fontFamily="Inter">Cool</text>
      </svg>
    </div>
  );
}

export default function StellarEvolutionSection() {
  const [activeStage, setActiveStage] = useState(0);
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  const stage = stages[activeStage];
  const colors = colorMap[stage.color];

  return (
    <section ref={containerRef} id="stellar-evolution" className="py-24 px-6 md:px-12 lg:px-24 bg-[#080C14]">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <span className="text-xs uppercase tracking-widest text-amber-400">Section B</span>
          <h2 className="text-4xl md:text-5xl font-light text-white mt-3 mb-4">
            Stellar Evolution Timeline
          </h2>
          <p className="text-gray-400 max-w-2xl leading-relaxed">
            From a cold molecular cloud to a stellar remnant — the complete lifecycle of a star, 
            governed by the interplay of gravity, nuclear fusion, and quantum mechanics.
          </p>
        </div>

        {/* Timeline Steps */}
        <div className="flex gap-2 mb-10 overflow-x-auto pb-2">
          {stages.map((s, i) => {
            const c = colorMap[s.color];
            return (
              <button
                key={s.id}
                onClick={() => setActiveStage(i)}
                className={`flex-shrink-0 flex items-center gap-2 px-4 py-2.5 rounded-full border text-sm transition-all duration-300 ${
                  activeStage === i
                    ? `${c.bg} ${c.border} ${c.text}`
                    : 'border-[#1F2937] text-gray-500 hover:text-gray-300 hover:border-[#374151]'
                }`}
              >
                <span className="font-mono text-xs">{s.step}</span>
                <span className="hidden sm:inline">{s.title}</span>
              </button>
            );
          })}
        </div>

        {/* Active Stage Detail */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {/* Image */}
          <div className="space-y-4">
            <div className="relative rounded-2xl overflow-hidden aspect-[4/3]">
              <img
                data-strk-img-id={stage.imgId}
                data-strk-img={`[${stage.descId}] [${stage.titleId}]`}
                data-strk-img-ratio="4x3"
                data-strk-img-width="700"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={stage.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#080C14] via-transparent to-transparent" />
              <div className={`absolute top-4 left-4 px-3 py-1.5 rounded-full ${colors.bg} border ${colors.border}`}>
                <span className={`text-xs font-mono ${colors.text}`}>Stage {stage.step}</span>
              </div>
              <div className="absolute bottom-4 left-4 right-4">
                <h3 id={stage.titleId} className="text-white text-xl font-light">{stage.title}</h3>
                <p id={stage.descId} className="text-gray-400 text-xs mt-1">{stage.detail}</p>
              </div>
            </div>

            {/* H-R Diagram */}
            <HRDiagram activeStage={stage.id} />
          </div>

          {/* Text */}
          <div className="space-y-6">
            <div className="flex flex-wrap gap-4">
              {[
                { label: 'Mass Range', value: stage.mass },
                { label: 'Duration', value: stage.duration },
                { label: 'Temperature', value: stage.temp },
              ].map((item) => (
                <div key={item.label} className={`px-4 py-3 rounded-xl ${colors.bg} border ${colors.border}`}>
                  <div className="text-xs text-gray-500 uppercase tracking-widest mb-1">{item.label}</div>
                  <div className={`text-sm font-mono ${colors.text}`}>{item.value}</div>
                </div>
              ))}
            </div>

            <div>
              <h3 className="text-xl font-medium text-white mb-3">{stage.title}</h3>
              <p className="text-gray-400 leading-relaxed">{stage.description}</p>
            </div>

            <div className={`border-l-2 ${colors.border} pl-4`}>
              <div className="text-xs uppercase tracking-widest text-gray-500 mb-2">Physics Principle</div>
              <p className="text-gray-300 text-sm leading-relaxed">{stage.physics}</p>
            </div>

            {/* Navigation */}
            <div className="flex items-center gap-3 pt-4">
              <button
                onClick={() => setActiveStage(Math.max(0, activeStage - 1))}
                disabled={activeStage === 0}
                className="flex items-center gap-2 px-4 py-2 rounded-full border border-[#1F2937] text-gray-400 text-sm hover:border-[#374151] hover:text-white disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-200"
              >
                <ChevronLeft className="w-4 h-4" />
                Previous
              </button>
              <button
                onClick={() => setActiveStage(Math.min(stages.length - 1, activeStage + 1))}
                disabled={activeStage === stages.length - 1}
                className="flex items-center gap-2 px-4 py-2 rounded-full border border-[#1F2937] text-gray-400 text-sm hover:border-[#374151] hover:text-white disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-200"
              >
                Next Stage
                <ChevronRight className="w-4 h-4" />
              </button>
              <span className="text-gray-600 text-xs ml-auto">{activeStage + 1} / {stages.length}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
