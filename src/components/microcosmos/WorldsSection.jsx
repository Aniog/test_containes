import { useEffect, useRef, useState } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { ChevronRight } from 'lucide-react';

const worlds = [
  {
    id: 'cellular',
    titleId: 'world-cellular-title',
    descId: 'world-cellular-desc',
    imgId: 'world-img-cellular-mn1op2',
    title: 'The Cellular World',
    subtitle: '1–100 micrometers',
    description: 'Every living organism is built from cells — the fundamental unit of life. Inside each cell lies a complete universe: DNA encoding billions of years of evolution, proteins folding into molecular machines, and membranes regulating the flow of life itself.',
    facts: ['10 trillion cells in the human body', 'Cells divide 25 million times per second', 'DNA in one cell stretches 2 meters'],
  },
  {
    id: 'molecular',
    titleId: 'world-molecular-title',
    descId: 'world-molecular-desc',
    imgId: 'world-img-molecular-qr3st4',
    title: 'The Molecular World',
    subtitle: '0.1–10 nanometers',
    description: 'At the nanoscale, chemistry becomes architecture. Proteins fold into precise 3D shapes that determine their function. DNA double helices store information with four-letter code. Enzymes catalyze reactions with atomic precision.',
    facts: ['Proteins fold in microseconds', 'DNA stores 215 petabytes per gram', 'Enzymes speed reactions 10 billion times'],
  },
  {
    id: 'quantum',
    titleId: 'world-quantum-title',
    descId: 'world-quantum-desc',
    imgId: 'world-img-quantum-uv5wx6',
    title: 'The Quantum World',
    subtitle: 'Below 0.1 nanometers',
    description: 'At the subatomic scale, classical physics breaks down. Electrons exist in probability clouds, particles tunnel through barriers, and quantum entanglement connects distant particles instantaneously. Life itself may exploit quantum effects.',
    facts: ['Photosynthesis uses quantum coherence', 'Bird navigation uses quantum entanglement', 'Enzyme tunneling defies classical physics'],
  },
];

export default function WorldsSection() {
  const containerRef = useRef(null);
  const [active, setActive] = useState(worlds[0].id);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, [active]);

  const activeWorld = worlds.find((w) => w.id === active);

  return (
    <section id="worlds" ref={containerRef} className="py-20 md:py-28 bg-[#050a0f]">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-xs font-semibold tracking-widest uppercase text-[#00d4c8] mb-3 block">
            Scale of Life
          </span>
          <h2 id="worlds-section-title" className="text-3xl md:text-5xl font-bold text-[#e8f4f8] mb-4">
            Three Hidden Worlds
          </h2>
          <p className="text-[#7fb3c8] text-lg max-w-2xl mx-auto">
            From cells to molecules to quantum particles — each scale reveals a new layer of reality.
          </p>
        </div>

        {/* Tab selector */}
        <div className="flex flex-col md:flex-row gap-8 items-start">
          <div className="flex md:flex-col gap-3 w-full md:w-64 shrink-0">
            {worlds.map((w) => (
              <button
                key={w.id}
                onClick={() => setActive(w.id)}
                className={`text-left px-5 py-4 rounded-xl border transition-all duration-200 w-full ${
                  active === w.id
                    ? 'bg-[#0d1a24] border-[#00d4c8]/50 shadow-[0_0_20px_rgba(0,212,200,0.1)]'
                    : 'bg-transparent border-[#00d4c8]/10 hover:border-[#00d4c8]/30'
                }`}
              >
                <div className="text-xs font-semibold tracking-widest uppercase text-[#4a7a8a] mb-1">{w.subtitle}</div>
                <div className={`font-bold text-sm ${active === w.id ? 'text-[#00d4c8]' : 'text-[#7fb3c8]'}`}>{w.title}</div>
              </button>
            ))}
          </div>

          {/* Active world content */}
          {activeWorld && (
            <div className="flex-1 rounded-2xl overflow-hidden border border-[#00d4c8]/15 bg-[#0d1a24]">
              <div className="relative h-64 md:h-80">
                <img
                  alt={activeWorld.title}
                  data-strk-img-id={activeWorld.imgId}
                  data-strk-img={`[${activeWorld.descId}] [${activeWorld.titleId}] [worlds-section-title]`}
                  data-strk-img-ratio="16x9"
                  data-strk-img-width="900"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0d1a24] via-[#0d1a24]/20 to-transparent" />
                <div className="absolute bottom-4 left-6">
                  <span className="text-xs font-semibold tracking-widest uppercase text-[#00d4c8]">{activeWorld.subtitle}</span>
                </div>
              </div>
              <div className="p-6 md:p-8">
                <h3 id={activeWorld.titleId} className="text-2xl font-bold text-[#e8f4f8] mb-3">{activeWorld.title}</h3>
                <p id={activeWorld.descId} className="text-[#7fb3c8] leading-relaxed mb-6">{activeWorld.description}</p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {activeWorld.facts.map((fact, i) => (
                    <div key={i} className="flex items-start gap-2 p-3 rounded-xl bg-[#112233] border border-[#00d4c8]/10">
                      <ChevronRight className="w-4 h-4 text-[#00d4c8] mt-0.5 shrink-0" />
                      <span className="text-[#7fb3c8] text-xs leading-relaxed">{fact}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
