import { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, Zap, Shield, Cpu, Layers } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import ComponentViewer360 from '../components/ComponentViewer360';

const specs = [
  { label: 'Thermal Rating', value: '340W TDP', icon: Zap },
  { label: 'Material Grade', value: 'MIL-SPEC', icon: Shield },
  { label: 'Core Architecture', value: 'X9 Series', icon: Cpu },
  { label: 'Layer Count', value: '24-Layer PCB', icon: Layers },
];

const products = [
  {
    id: 'tc-x9-ultra',
    name: 'TC-X9 Ultra',
    category: 'Processor',
    desc: 'Flagship custom silicon with 3nm architecture and liquid-metal thermal interface.',
    titleId: 'prod-tc-x9-ultra-title',
    descId: 'prod-tc-x9-ultra-desc',
    imgId: 'prod-img-tc-x9-ultra-a1b2c3',
  },
  {
    id: 'tc-ram-ddr6',
    name: 'TC-RAM DDR6',
    category: 'Memory',
    desc: 'Brushed aluminum heat spreaders over hand-binned DDR6 modules at 8400MHz.',
    titleId: 'prod-tc-ram-ddr6-title',
    descId: 'prod-tc-ram-ddr6-desc',
    imgId: 'prod-img-tc-ram-ddr6-d4e5f6',
  },
  {
    id: 'tc-nvme-pro',
    name: 'TC-NVMe Pro',
    category: 'Storage',
    desc: 'Carbon fiber encased NVMe with 14GB/s sequential read and custom controller.',
    titleId: 'prod-tc-nvme-pro-title',
    descId: 'prod-tc-nvme-pro-desc',
    imgId: 'prod-img-tc-nvme-pro-g7h8i9',
  },
];

export default function Hardware() {
  const containerRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <div ref={containerRef} className="bg-[#1A1A1B]">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background layers */}
        <div className="absolute inset-0 bg-[#111112]" />
        <div className="absolute inset-0 bg-gradient-to-br from-[#1A1A1B] via-[#111112] to-[#0a0a0b]" />

        {/* Subtle grid */}
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: 'linear-gradient(rgba(192,192,192,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(192,192,192,0.06) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />

        {/* Radial glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-[#C0C0C0]/3 blur-[120px] pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 pt-24 pb-16 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left: Text */}
            <div>
              <div className="inline-flex items-center gap-2 glass-panel px-3 py-1.5 mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C0C0C0] animate-pulse-slow" />
                <span className="font-orbitron text-[10px] tracking-[0.25em] uppercase text-[#C0C0C0]/60">
                  Custom Hardware Division
                </span>
              </div>

              <h1 className="font-orbitron font-black text-4xl md:text-5xl xl:text-6xl leading-[1.05] tracking-tight mb-6">
                <span className="text-metallic block">ENGINEERED</span>
                <span className="text-metallic block">BEYOND</span>
                <span className="text-[#C0C0C0]/30 block">LIMITS</span>
              </h1>

              <p className="font-inter text-base text-[#C0C0C0]/60 leading-relaxed max-w-md mb-8">
                TITAN-CORE builds custom silicon, memory, and storage solutions for those who refuse to compromise. Every component is precision-machined, hand-tested, and built to outlast the industry standard.
              </p>

              <div className="flex flex-wrap gap-3">
                <button
                  onClick={() => navigate('/blueprints')}
                  className="flex items-center gap-2 font-orbitron text-xs tracking-[0.15em] uppercase px-6 py-3 bg-[#C0C0C0] text-[#1A1A1B] hover:bg-white transition-colors rounded font-semibold"
                >
                  View Blueprints
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
                <button
                  onClick={() => navigate('/forge')}
                  className="flex items-center gap-2 font-orbitron text-xs tracking-[0.15em] uppercase px-6 py-3 border border-[#C0C0C0]/30 text-[#C0C0C0] hover:border-[#C0C0C0]/60 hover:bg-[#C0C0C0]/5 transition-all rounded"
                >
                  The Forge
                </button>
              </div>
            </div>

            {/* Right: 360 Viewer */}
            <div className="flex flex-col items-center">
              <div className="glass-panel p-6 md:p-8 w-full max-w-sm mx-auto shadow-2xl shadow-black/50">
                <div className="text-center mb-4">
                  <span className="font-orbitron text-[10px] tracking-[0.3em] uppercase text-[#C0C0C0]/40">
                    TC-X9 Ultra — 360° View
                  </span>
                </div>
                <ComponentViewer360 />
              </div>
            </div>
          </div>

          {/* Spec strip */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4">
            {specs.map(({ label, value, icon: Icon }) => (
              <div key={label} className="glass-panel p-4 flex items-center gap-3">
                <div className="w-8 h-8 flex items-center justify-center border border-[#C0C0C0]/20 rounded shrink-0">
                  <Icon className="w-3.5 h-3.5 text-[#C0C0C0]/60" />
                </div>
                <div>
                  <div className="font-orbitron text-xs font-semibold text-[#C0C0C0]">{value}</div>
                  <div className="font-inter text-[10px] text-[#C0C0C0]/40 uppercase tracking-wider">{label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-24 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <span className="font-orbitron text-[10px] tracking-[0.3em] uppercase text-[#C0C0C0]/40">
              Product Line
            </span>
            <h2 className="font-orbitron font-bold text-2xl md:text-3xl text-metallic mt-2 tracking-wide">
              CORE COMPONENTS
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {products.map((product) => (
              <article key={product.id} className="glass-panel overflow-hidden group hover:border-[#C0C0C0]/40 transition-all duration-300 shadow-lg shadow-black/30">
                {/* Product image */}
                <div className="relative h-48 overflow-hidden bg-[#111112]">
                  <img
                    alt={product.name}
                    data-strk-img-id={product.imgId}
                    data-strk-img={`[${product.descId}] [${product.titleId}] custom hardware component`}
                    data-strk-img-ratio="3x2"
                    data-strk-img-width="600"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    className="w-full h-full object-cover opacity-70 group-hover:opacity-90 group-hover:scale-105 transition-all duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1B] via-transparent to-transparent" />
                  <div className="absolute top-3 left-3">
                    <span className="font-orbitron text-[9px] tracking-[0.2em] uppercase px-2 py-1 bg-[#C0C0C0]/10 border border-[#C0C0C0]/20 rounded text-[#C0C0C0]/70 backdrop-blur-sm">
                      {product.category}
                    </span>
                  </div>
                </div>

                <div className="p-5">
                  <h3
                    id={product.titleId}
                    className="font-orbitron font-semibold text-sm tracking-wider text-[#C0C0C0] mb-2"
                  >
                    {product.name}
                  </h3>
                  <p
                    id={product.descId}
                    className="font-inter text-sm text-[#C0C0C0]/50 leading-relaxed"
                  >
                    {product.desc}
                  </p>
                  <button className="mt-4 flex items-center gap-1.5 font-orbitron text-[10px] tracking-widest uppercase text-[#C0C0C0]/50 hover:text-[#C0C0C0] transition-colors group/btn">
                    Specifications
                    <ArrowRight className="w-3 h-3 group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-20 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="relative glass-panel-strong p-10 md:p-16 overflow-hidden text-center shadow-2xl shadow-black/50">
            <div className="absolute inset-0 bg-gradient-to-br from-[#C0C0C0]/5 to-transparent pointer-events-none" />
            <div className="relative z-10">
              <h2 className="font-orbitron font-black text-2xl md:text-4xl text-metallic tracking-wide mb-4">
                READY TO BUILD?
              </h2>
              <p className="font-inter text-[#C0C0C0]/50 max-w-lg mx-auto mb-8">
                Tell us your requirements. Our engineers will design a custom hardware solution from the ground up.
              </p>
              <button className="font-orbitron text-xs tracking-[0.2em] uppercase px-8 py-3 bg-[#C0C0C0] text-[#1A1A1B] hover:bg-white transition-colors rounded font-semibold shadow-lg shadow-black/30">
                Start Your Build
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
