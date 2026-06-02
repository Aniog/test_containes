import { useState, useRef, useEffect } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { ZoomIn, Layers, Cpu, HardDrive, MemoryStick } from 'lucide-react';

// SVG Blueprint schematic overlay
function BlueprintSchematic({ type }) {
  if (type === 'processor') {
    return (
      <svg viewBox="0 0 400 300" className="absolute inset-0 w-full h-full" style={{ mixBlendMode: 'screen' }}>
        <defs>
          <filter id="glow-blue">
            <feGaussianBlur stdDeviation="2" result="blur" />
            <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
          </filter>
        </defs>
        <g stroke="#4A90D9" strokeWidth="0.8" fill="none" opacity="0.7" filter="url(#glow-blue)">
          {/* Outer boundary */}
          <rect x="40" y="30" width="320" height="240" strokeDasharray="8,4" />
          {/* Center die */}
          <rect x="140" y="90" width="120" height="120" />
          <rect x="150" y="100" width="100" height="100" strokeDasharray="4,2" />
          {/* Core grid */}
          {[0,1,2,3].map(i => (
            <g key={i}>
              <line x1={155 + i * 24} y1="105" x2={155 + i * 24} y2="195" strokeDasharray="2,2" />
              <line x1="155" y1={105 + i * 24} x2="245" y2={105 + i * 24} strokeDasharray="2,2" />
            </g>
          ))}
          {/* Pin traces */}
          {[0,1,2,3,4,5,6].map(i => (
            <g key={i}>
              <line x1={60 + i * 40} y1="30" x2={60 + i * 40} y2="90" />
              <line x1={60 + i * 40} y1="210" x2={60 + i * 40} y2="270" />
              <circle cx={60 + i * 40} cy="30" r="3" fill="#4A90D9" />
              <circle cx={60 + i * 40} cy="270" r="3" fill="#4A90D9" />
            </g>
          ))}
          {[0,1,2,3,4].map(i => (
            <g key={i}>
              <line x1="40" y1={60 + i * 45} x2="140" y2={60 + i * 45} />
              <line x1="260" y1={60 + i * 45} x2="360" y2={60 + i * 45} />
              <circle cx="40" cy={60 + i * 45} r="3" fill="#4A90D9" />
              <circle cx="360" cy={60 + i * 45} r="3" fill="#4A90D9" />
            </g>
          ))}
          {/* Dimension lines */}
          <line x1="40" y1="285" x2="360" y2="285" strokeDasharray="none" />
          <line x1="40" y1="280" x2="40" y2="290" />
          <line x1="360" y1="280" x2="360" y2="290" />
          <text x="200" y="298" textAnchor="middle" fontSize="8" fill="#4A90D9" fontFamily="monospace">320.00mm</text>
          {/* Labels */}
          <text x="200" y="155" textAnchor="middle" fontSize="9" fill="#4A90D9" fontFamily="monospace">TC-X9 DIE</text>
          <text x="200" y="168" textAnchor="middle" fontSize="7" fill="#4A90D9" fontFamily="monospace" opacity="0.6">3nm PROCESS</text>
          <text x="55" y="25" fontSize="7" fill="#4A90D9" fontFamily="monospace">REV 4.2</text>
          <text x="300" y="25" fontSize="7" fill="#4A90D9" fontFamily="monospace">TITAN-CORE</text>
        </g>
      </svg>
    );
  }

  if (type === 'memory') {
    return (
      <svg viewBox="0 0 400 300" className="absolute inset-0 w-full h-full" style={{ mixBlendMode: 'screen' }}>
        <g stroke="#4A90D9" strokeWidth="0.8" fill="none" opacity="0.7">
          <rect x="30" y="60" width="340" height="180" strokeDasharray="6,3" />
          {/* PCB outline */}
          <rect x="40" y="70" width="320" height="160" />
          {/* Memory chips */}
          {[0,1,2,3,4,5,6,7].map(i => (
            <g key={i}>
              <rect x={50 + i * 38} y="90" width="28" height="50" />
              <rect x={50 + i * 38} y="160" width="28" height="50" />
              <text x={64 + i * 38} y="120" textAnchor="middle" fontSize="6" fill="#4A90D9" fontFamily="monospace">D{i}</text>
              <text x={64 + i * 38} y="190" textAnchor="middle" fontSize="6" fill="#4A90D9" fontFamily="monospace">D{i+8}</text>
            </g>
          ))}
          {/* Data bus */}
          <line x1="40" y1="145" x2="360" y2="145" strokeDasharray="3,2" />
          {/* Edge connector */}
          {[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15].map(i => (
            <rect key={i} x={42 + i * 20} y="225" width="8" height="15" fill="#4A90D9" opacity="0.4" />
          ))}
          <text x="200" y="258" textAnchor="middle" fontSize="8" fill="#4A90D9" fontFamily="monospace">DDR6-8400 — 32GB MODULE</text>
        </g>
      </svg>
    );
  }

  // Default: storage
  return (
    <svg viewBox="0 0 400 300" className="absolute inset-0 w-full h-full" style={{ mixBlendMode: 'screen' }}>
      <g stroke="#4A90D9" strokeWidth="0.8" fill="none" opacity="0.7">
        <rect x="50" y="40" width="300" height="220" rx="8" strokeDasharray="6,3" />
        <rect x="60" y="50" width="280" height="200" rx="6" />
        {/* Controller */}
        <rect x="80" y="70" width="80" height="60" />
        <text x="120" y="105" textAnchor="middle" fontSize="8" fill="#4A90D9" fontFamily="monospace">CTRL</text>
        {/* NAND chips */}
        {[0,1,2,3].map(i => (
          <g key={i}>
            <rect x={200 + (i % 2) * 70} y={70 + Math.floor(i / 2) * 70} width="55" height="55" />
            <text x={227 + (i % 2) * 70} y={102 + Math.floor(i / 2) * 70} textAnchor="middle" fontSize="7" fill="#4A90D9" fontFamily="monospace">NAND</text>
          </g>
        ))}
        {/* M.2 connector */}
        {[0,1,2,3,4,5,6,7,8,9].map(i => (
          <rect key={i} x={80 + i * 14} y="220" width="8" height="20" fill="#4A90D9" opacity="0.4" />
        ))}
        <text x="200" y="258" textAnchor="middle" fontSize="8" fill="#4A90D9" fontFamily="monospace">M.2 2280 — PCIe 5.0 x4</text>
        {/* Traces */}
        <line x1="160" y1="100" x2="200" y2="100" strokeDasharray="3,2" />
        <line x1="160" y1="110" x2="200" y2="140" strokeDasharray="3,2" />
      </g>
    </svg>
  );
}

const blueprints = [
  {
    id: 'bp-processor',
    title: 'TC-X9 Ultra Processor',
    subtitle: 'Custom Silicon Architecture',
    category: 'Processor',
    schematicType: 'processor',
    icon: Cpu,
    specs: ['3nm Process Node', '24 Physical Cores', '340W TDP', 'LGA-5000 Socket'],
    revision: 'REV 4.2',
    titleId: 'bp-processor-title',
    descId: 'bp-processor-desc',
    imgId: 'bp-img-processor-a1b2c3',
  },
  {
    id: 'bp-memory',
    title: 'TC-RAM DDR6 Module',
    subtitle: 'High-Bandwidth Memory Array',
    category: 'Memory',
    schematicType: 'memory',
    icon: MemoryStick,
    specs: ['DDR6-8400 Speed', '32GB Capacity', 'ECC Support', 'Brushed Aluminum IHS'],
    revision: 'REV 2.1',
    titleId: 'bp-memory-title',
    descId: 'bp-memory-desc',
    imgId: 'bp-img-memory-d4e5f6',
  },
  {
    id: 'bp-storage',
    title: 'TC-NVMe Pro Drive',
    subtitle: 'Carbon Fiber NVMe Storage',
    category: 'Storage',
    schematicType: 'storage',
    icon: HardDrive,
    specs: ['PCIe 5.0 x4', '14GB/s Read', 'Custom Controller', 'Carbon Fiber Shell'],
    revision: 'REV 3.0',
    titleId: 'bp-storage-title',
    descId: 'bp-storage-desc',
    imgId: 'bp-img-storage-g7h8i9',
  },
];

export default function Blueprints() {
  const [active, setActive] = useState(blueprints[0].id);
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  const current = blueprints.find(b => b.id === active);

  return (
    <div ref={containerRef} className="bg-[#1A1A1B] min-h-screen">
      {/* Hero */}
      <section className="relative pt-32 pb-16 px-6 md:px-12 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a1628] via-[#111112] to-[#1A1A1B]" />
        <div className="absolute inset-0 blueprint-grid opacity-40" />

        {/* Animated scan line */}
        <div
          className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#4A90D9]/60 to-transparent pointer-events-none"
          style={{ animation: 'scan 4s ease-in-out infinite', top: 0 }}
        />

        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="inline-flex items-center gap-2 mb-4 px-3 py-1.5 border border-[#4A90D9]/30 rounded bg-[#4A90D9]/5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#4A90D9] animate-pulse" />
            <span className="font-orbitron text-[10px] tracking-[0.25em] uppercase text-[#4A90D9]/80">
              Engineering Schematics
            </span>
          </div>
          <h1 className="font-orbitron font-black text-3xl md:text-5xl tracking-tight mb-4">
            <span className="text-[#4A90D9]">BLUE</span>
            <span className="text-metallic">PRINTS</span>
          </h1>
          <p className="font-inter text-[#C0C0C0]/50 max-w-xl leading-relaxed">
            Technical schematics overlaid on real-world product photography. Every trace, every via, every dimension — documented with precision.
          </p>
        </div>
      </section>

      {/* Blueprint Selector */}
      <section className="px-6 md:px-12 pb-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex gap-3 flex-wrap">
            {blueprints.map(({ id, title, icon: Icon, revision }) => (
              <button
                key={id}
                onClick={() => setActive(id)}
                className={`flex items-center gap-2 px-4 py-2.5 border rounded font-orbitron text-[10px] tracking-widest uppercase transition-all duration-300 ${
                  active === id
                    ? 'border-[#4A90D9]/60 bg-[#4A90D9]/10 text-[#4A90D9]'
                    : 'border-[#C0C0C0]/15 text-[#C0C0C0]/40 hover:border-[#C0C0C0]/30 hover:text-[#C0C0C0]/70'
                }`}
              >
                <Icon className="w-3 h-3" />
                {title}
                <span className="opacity-50">{revision}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Main Blueprint View */}
      <section className="px-6 md:px-12 pb-24">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Blueprint Canvas */}
            <div className="lg:col-span-2">
              <div className="relative rounded-xl overflow-hidden border border-[#4A90D9]/20 shadow-2xl shadow-black/60 bg-[#0a1628]">
                {/* Blueprint grid background */}
                <div className="absolute inset-0 blueprint-grid" />

                {/* Product photo */}
                <div className="relative h-[420px] md:h-[520px]">
                  <img
                    alt={current.title}
                    data-strk-img-id={current.imgId}
                    data-strk-img={`[${current.descId}] [${current.titleId}] hardware component technical`}
                    data-strk-img-ratio="16x9"
                    data-strk-img-width="900"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    className="w-full h-full object-cover opacity-40"
                  />

                  {/* Blueprint overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#1E3A5F]/60 to-[#0a1628]/40" />

                  {/* SVG Schematic */}
                  <BlueprintSchematic type={current.schematicType} />

                  {/* Corner markers */}
                  {['top-left', 'top-right', 'bottom-left', 'bottom-right'].map(pos => (
                    <div
                      key={pos}
                      className={`absolute w-6 h-6 ${
                        pos.includes('top') ? 'top-3' : 'bottom-3'
                      } ${
                        pos.includes('left') ? 'left-3' : 'right-3'
                      }`}
                    >
                      <div className={`absolute w-4 h-px bg-[#4A90D9]/60 ${pos.includes('left') ? 'left-0' : 'right-0'} top-0`} />
                      <div className={`absolute h-4 w-px bg-[#4A90D9]/60 ${pos.includes('left') ? 'left-0' : 'right-0'} top-0`} />
                    </div>
                  ))}

                  {/* Title overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <div
                      className="glass-panel p-4"
                      style={{ backdropFilter: 'blur(20px)', background: 'rgba(10,22,40,0.7)', borderColor: 'rgba(74,144,217,0.3)' }}
                    >
                      <div className="flex items-start justify-between">
                        <div>
                          <h2
                            id={current.titleId}
                            className="font-orbitron font-bold text-sm tracking-wider text-[#4A90D9] mb-1"
                          >
                            {current.title}
                          </h2>
                          <p
                            id={current.descId}
                            className="font-inter text-xs text-[#C0C0C0]/50"
                          >
                            {current.subtitle}
                          </p>
                        </div>
                        <div className="text-right">
                          <div className="font-orbitron text-[10px] text-[#4A90D9]/60 tracking-widest">{current.revision}</div>
                          <div className="font-orbitron text-[10px] text-[#C0C0C0]/30 tracking-widest">{current.category}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Specs Panel */}
            <div className="flex flex-col gap-4">
              {/* Spec list */}
              <div className="glass-panel p-6 shadow-lg shadow-black/30">
                <h3 className="font-orbitron text-xs tracking-[0.2em] uppercase text-[#4A90D9]/70 mb-4">
                  Technical Specs
                </h3>
                <ul className="flex flex-col gap-3">
                  {current.specs.map((spec, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#4A90D9]/60 shrink-0" />
                      <span className="font-inter text-sm text-[#C0C0C0]/70">{spec}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* All blueprints thumbnails */}
              <div className="glass-panel p-4 shadow-lg shadow-black/30">
                <h3 className="font-orbitron text-xs tracking-[0.2em] uppercase text-[#C0C0C0]/40 mb-3">
                  All Schematics
                </h3>
                <div className="flex flex-col gap-2">
                  {blueprints.map(({ id, title, icon: Icon, revision }) => (
                    <button
                      key={id}
                      onClick={() => setActive(id)}
                      className={`flex items-center gap-3 p-3 rounded border transition-all ${
                        active === id
                          ? 'border-[#4A90D9]/40 bg-[#4A90D9]/8'
                          : 'border-[#C0C0C0]/10 hover:border-[#C0C0C0]/20'
                      }`}
                    >
                      <Icon className={`w-4 h-4 shrink-0 ${active === id ? 'text-[#4A90D9]' : 'text-[#C0C0C0]/40'}`} />
                      <div className="text-left">
                        <div className={`font-orbitron text-[10px] tracking-wider ${active === id ? 'text-[#4A90D9]' : 'text-[#C0C0C0]/60'}`}>
                          {title}
                        </div>
                        <div className="font-inter text-[9px] text-[#C0C0C0]/30">{revision}</div>
                      </div>
                      {active === id && (
                        <ZoomIn className="w-3 h-3 text-[#4A90D9]/60 ml-auto" />
                      )}
                    </button>
                  ))}
                </div>
              </div>

              {/* Download CTA */}
              <div className="glass-panel p-5 border-[#4A90D9]/20 shadow-lg shadow-black/30">
                <p className="font-inter text-xs text-[#C0C0C0]/50 mb-3 leading-relaxed">
                  Request full technical documentation and CAD files for integration.
                </p>
                <button className="w-full font-orbitron text-[10px] tracking-[0.15em] uppercase py-2.5 border border-[#4A90D9]/40 text-[#4A90D9] hover:bg-[#4A90D9]/10 transition-colors rounded">
                  Request Docs
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
