import { Info } from 'lucide-react';

const annotations = [
  { id: 'xylem', label: 'Xylem', top: '28%', left: '38%', color: 'emerald', desc: 'Water-conducting vessels' },
  { id: 'phloem', label: 'Phloem', top: '52%', left: '62%', color: 'cyan', desc: 'Sugar-transport sieve tubes' },
  { id: 'epidermis', label: 'Epidermis', top: '15%', left: '72%', color: 'orange', desc: 'Protective outer layer' },
  { id: 'cortex', label: 'Cortex', top: '68%', left: '28%', color: 'purple', desc: 'Parenchyma storage tissue' },
];

const colorMap = {
  emerald: { dot: 'bg-emerald-400', ring: 'ring-emerald-400/30', label: 'text-emerald-400', badge: 'bg-emerald-500/10 border-emerald-500/30 text-emerald-300' },
  cyan: { dot: 'bg-cyan-400', ring: 'ring-cyan-400/30', label: 'text-cyan-400', badge: 'bg-cyan-500/10 border-cyan-500/30 text-cyan-300' },
  orange: { dot: 'bg-orange-400', ring: 'ring-orange-400/30', label: 'text-orange-400', badge: 'bg-orange-500/10 border-orange-500/30 text-orange-300' },
  purple: { dot: 'bg-purple-400', ring: 'ring-purple-400/30', label: 'text-purple-400', badge: 'bg-purple-500/10 border-purple-500/30 text-purple-300' },
};

export default function PlantHistologySection() {
  return (
    <section id="plant" className="py-24 md:py-32 px-6 md:px-12 lg:px-16 bg-[#090D16]">
      <div className="max-w-7xl mx-auto">
        {/* Section Label */}
        <div className="flex items-center gap-3 mb-4">
          <span className="w-8 h-px bg-emerald-400" />
          <span className="text-emerald-400 font-mono text-xs tracking-widest uppercase">
            Section A · Plant Histology
          </span>
        </div>
        <h2 className="text-3xl md:text-4xl font-light tracking-widest uppercase text-slate-100 mb-16 max-w-2xl">
          The Architecture of Flora
        </h2>

        {/* Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left: Annotated Micrograph */}
          <div className="relative">
            <div className="relative border border-slate-800/60 overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1530026405186-ed1f139313f8?w=900&q=80"
                alt="Plant stem cross-section micrograph"
                className="w-full h-[420px] md:h-[500px] object-cover"
              />
              {/* Dark overlay for contrast */}
              <div className="absolute inset-0 bg-[#090D16]/20" />

              {/* Annotation dots */}
              {annotations.map((ann) => {
                const c = colorMap[ann.color];
                return (
                  <div
                    key={ann.id}
                    className="absolute group cursor-pointer"
                    style={{ top: ann.top, left: ann.left, transform: 'translate(-50%, -50%)' }}
                  >
                    {/* Pulsing ring */}
                    <div className={`absolute inset-0 w-5 h-5 rounded-full ring-2 ${c.ring} annotation-ping -translate-x-0.5 -translate-y-0.5`} />
                    {/* Dot */}
                    <div className={`w-4 h-4 rounded-full ${c.dot} border-2 border-[#090D16] relative z-10`} />
                    {/* Tooltip */}
                    <div className={`absolute bottom-6 left-1/2 -translate-x-1/2 bg-[#090D16]/95 backdrop-blur-sm border ${c.badge.includes('emerald') ? 'border-emerald-500/30' : c.badge.includes('cyan') ? 'border-cyan-500/30' : c.badge.includes('orange') ? 'border-orange-500/30' : 'border-purple-500/30'} px-3 py-2 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none z-20`}>
                      <p className={`text-[9px] font-mono tracking-widest uppercase ${c.label} mb-0.5`}>{ann.label}</p>
                      <p className="text-slate-400 text-[10px]">{ann.desc}</p>
                    </div>
                  </div>
                );
              })}

              {/* Metadata overlay */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#090D16] to-transparent p-5">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-slate-200 text-xs font-medium">Tilia Stem — Cross Section</p>
                    <p className="text-slate-500 text-[10px] font-mono mt-0.5">Brightfield · Safranin-O / Fast Green · 100×</p>
                  </div>
                  <Info className="w-4 h-4 text-slate-600" />
                </div>
              </div>
            </div>

            {/* Annotation Legend */}
            <div className="mt-4 grid grid-cols-2 gap-2">
              {annotations.map((ann) => {
                const c = colorMap[ann.color];
                return (
                  <div key={ann.id} className={`flex items-center gap-2 px-3 py-2 border ${c.badge} text-[10px] font-mono tracking-wide`}>
                    <div className={`w-2 h-2 rounded-full ${c.dot} flex-shrink-0`} />
                    <span>{ann.label}</span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right: Scientific Content */}
          <div className="flex flex-col gap-8">
            <div>
              <h3 className="text-slate-100 font-semibold text-xl mb-4 tracking-wide">
                Vascular Architecture & Cellular Geometry
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-4">
                The cross-section of a <em className="text-cyan-400 not-italic">Tilia</em> (linden) stem reveals the elegant organizational hierarchy of dicotyledonous plant anatomy. The outermost <strong className="text-slate-300">epidermis</strong> — a single layer of tightly packed cells — forms the primary barrier against desiccation and pathogen infiltration, its cuticle composed of polymerized cutin wax.
              </p>
              <p className="text-slate-400 text-sm leading-relaxed">
                Beneath the epidermis lies the <strong className="text-slate-300">cortex</strong>, a broad zone of parenchyma cells with thin primary cell walls, functioning as a reservoir for photosynthate storage and lateral gas exchange. The cortex transitions inward to the <strong className="text-slate-300">vascular cylinder</strong>, where the twin transport systems of the plant converge.
              </p>
            </div>

            {/* Data Cards */}
            <div className="grid grid-cols-1 gap-4">
              {[
                {
                  title: 'Xylem — Apoplastic Water Transport',
                  color: 'emerald',
                  content: 'Xylem vessels are dead at functional maturity, their lignified secondary cell walls forming hollow conduits. Water ascent is driven by the cohesion-tension mechanism: transpirational pull from leaf stomata creates a continuous negative pressure gradient (−0.5 to −3.0 MPa) that draws water upward against gravity without metabolic expenditure.',
                },
                {
                  title: 'Phloem — Symplastic Sugar Translocation',
                  color: 'cyan',
                  content: 'Phloem sieve tube elements, connected by sieve plates, transport photosynthetically fixed sucrose via pressure-flow (Münch) mechanism. Companion cells, metabolically active and rich in mitochondria, maintain the electrochemical gradient necessary for active sucrose loading at source tissues.',
                },
              ].map((card) => {
                const c = colorMap[card.color];
                return (
                  <div key={card.title} className={`bg-[#0E1520] border border-slate-800/60 p-5 hover:border-${card.color}-500/30 transition-colors`}>
                    <div className={`w-6 h-px ${c.dot} mb-3`} />
                    <h4 className={`text-sm font-semibold ${c.label} mb-2 tracking-wide`}>{card.title}</h4>
                    <p className="text-slate-500 text-xs leading-relaxed">{card.content}</p>
                  </div>
                );
              })}
            </div>

            {/* Technical Specs */}
            <div className="bg-[#121824] border border-slate-800/40 p-5">
              <p className="text-[9px] font-mono tracking-widest uppercase text-slate-600 mb-4">Preparation Protocol</p>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { label: 'Fixative', value: 'FAA (Formalin-Acetic-Alcohol)' },
                  { label: 'Embedding', value: 'Paraffin wax, 58°C' },
                  { label: 'Section Thickness', value: '8–12 μm' },
                  { label: 'Stain', value: 'Safranin-O / Fast Green FCF' },
                  { label: 'Objective', value: '10× / 40× Plan Achromat' },
                  { label: 'Illumination', value: 'Köhler Brightfield' },
                ].map((spec) => (
                  <div key={spec.label}>
                    <p className="text-[9px] font-mono tracking-widest uppercase text-slate-600">{spec.label}</p>
                    <p className="text-slate-300 text-xs mt-0.5">{spec.value}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
