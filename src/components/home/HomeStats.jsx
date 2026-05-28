import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const STATS = [
  { value: '2.4', unit: 'GW', label: 'Net Electrical Output' },
  { value: '150M', unit: '°K', label: 'Core Plasma Temperature' },
  { value: '47', unit: '', label: 'Active Grid Nodes' },
  { value: '10⁻⁶', unit: 'Pa', label: 'Vacuum Chamber Pressure' },
  { value: '8.2', unit: 'T', label: 'Toroidal Field Strength' },
  { value: '1.12', unit: 'TBR', label: 'Tritium Breeding Ratio' },
];

export default function HomeStats() {
  const containerRef = useRef(null);

  useEffect(() => {
    if (containerRef.current) {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    }
  }, []);

  return (
    <section ref={containerRef} className="bg-[#050505] border-t border-[#262626]">
      {/* Stats grid */}
      <div className="border-b border-[#262626]">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 divide-x divide-y md:divide-y-0 divide-[#262626]">
          {STATS.map(({ value, unit, label }) => (
            <div key={label} className="px-6 py-10 text-center">
              <div className="font-mono text-3xl md:text-4xl font-black text-white leading-none mb-1">
                {value}
                <span className="text-[#555555] text-xl ml-1">{unit}</span>
              </div>
              <div className="font-mono text-[9px] text-[#555555] tracking-widest uppercase mt-2">{label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Feature split */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 divide-y lg:divide-y-0 lg:divide-x divide-[#262626]">
        {/* Left: text */}
        <div className="px-8 md:px-12 py-16">
          <div className="font-mono text-[10px] text-[#555555] tracking-widest uppercase mb-6">
            — Mission Statement
          </div>
          <h2 className="text-3xl md:text-4xl font-black tracking-tighter text-white mb-6 leading-tight">
            The Physics of<br />Civilizational Scale
          </h2>
          <p className="text-[#A0A0A0] text-base leading-relaxed mb-6">
            Ignition Dynamics operates at the intersection of plasma physics, superconducting engineering, and global energy infrastructure. Our Daedalus-class Tokamaks achieve sustained thermonuclear ignition — the Q ≥ 10 threshold that transforms fusion from laboratory curiosity to industrial reality.
          </p>
          <p className="text-[#555555] text-sm leading-relaxed mb-10">
            Each reactor unit integrates a 840 m³ plasma chamber, niobium-tin superconducting coils cooled to 4.2 K, and a lithium-6 tritium breeding blanket achieving TBR ≥ 1.12 — ensuring complete fuel self-sufficiency across the global grid.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              to="/reactors"
              className="flex items-center gap-2 bg-white text-black px-5 py-2.5 font-mono text-xs tracking-widest uppercase hover:bg-[#E0E0E0] transition-colors duration-200"
            >
              Technical Specs <ArrowRight className="w-3.5 h-3.5" />
            </Link>
            <Link
              to="/gallery"
              className="flex items-center gap-2 border border-[#262626] text-white px-5 py-2.5 font-mono text-xs tracking-widest uppercase hover:border-white transition-colors duration-200"
            >
              Telemetry Gallery
            </Link>
          </div>
        </div>

        {/* Right: image */}
        <div className="relative overflow-hidden min-h-[400px]">
          <img
            src="https://images.unsplash.com/photo-1518770660439-4636190af475?w=900&q=90"
            alt="Nuclear fusion reactor interior — superconducting coils and plasma chamber"
            className="absolute inset-0 w-full h-full object-cover img-zoom"
            data-strk-img-id="stats-reactor-interior-5c9d2f"
            data-strk-img="[stats-img-ref]"
            data-strk-img-ratio="4x3"
            data-strk-img-width="900"
          />
          {/* Telemetry overlay */}
          <div className="absolute top-6 left-6 right-6 z-10">
            <div className="bg-[#050505]/80 backdrop-blur-sm border border-[#262626] p-4 inline-block">
              <div className="font-mono text-[9px] text-[#555555] tracking-widest uppercase mb-2">REACTOR CORE — CROSS SECTION</div>
              <div className="font-mono text-xs text-white">DAEDALUS-VII / SECTOR 4-ALPHA</div>
            </div>
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#050505]/40 to-transparent z-[5]" />
        </div>
      </div>

      <span id="stats-img-ref" className="sr-only">nuclear fusion reactor interior superconducting coils plasma chamber engineering</span>
    </section>
  );
}
