import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

export default function HomeMetrics() {
  const containerRef = useRef(null);

  useEffect(() => {
    ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="bg-[#050505] border-t border-[#262626]">
      <div className="max-w-screen-2xl mx-auto px-6 lg:px-12 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
          {/* Left: Image */}
          <div className="relative h-80 lg:h-auto min-h-[400px] border border-[#262626] overflow-hidden">
            <img
              id="metrics-plasma-img"
              alt="Fusion plasma energy visualization"
              className="w-full h-full object-cover"
              data-strk-img-id="metrics-plasma-7b3c1d"
              data-strk-img="[metrics-section-title] nuclear fusion plasma energy high temperature particle physics laboratory"
              data-strk-img-ratio="4x3"
              data-strk-img-width="900"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6">
              <p className="font-mono text-[10px] text-neutral-600 tracking-widest uppercase">
                Plasma Diagnostics — Sector 4
              </p>
            </div>
          </div>

          {/* Right: Content */}
          <div className="border border-[#262626] border-l-0 p-10 lg:p-16 flex flex-col justify-center">
            <p className="font-mono text-[10px] tracking-[0.4em] text-neutral-600 uppercase mb-4">
              Performance Metrics
            </p>
            <h2 id="metrics-section-title" className="font-mono text-3xl lg:text-4xl text-white uppercase font-light tracking-tight mb-6">
              Beyond the<br />Lawson Criterion
            </h2>
            <p className="text-neutral-400 text-sm leading-relaxed mb-10">
              The Lawson Criterion defines the minimum plasma density-confinement time product required for net energy gain. Our Daedalus-class reactors operate at 340% above this threshold, sustaining ignition-grade plasma in steady-state H-mode confinement for operational periods exceeding 72 hours.
            </p>

            <div className="space-y-4 mb-10">
              {[
                { label: 'Triple Product nτT', value: '3.4 × 10²¹ keV·s/m³', target: '≥ 3×10²¹' },
                { label: 'Energy Gain Q', value: 'Q = 10.7', target: 'Breakeven Q = 1' },
                { label: 'Plasma Beta β', value: 'β = 0.034', target: 'Stability Limit' },
              ].map(({ label, value, target }) => (
                <div key={label} className="border-b border-[#1f1f1f] pb-4">
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-mono text-[10px] text-neutral-600 tracking-widest uppercase">{label}</span>
                    <span className="font-mono text-[10px] text-neutral-700">{target}</span>
                  </div>
                  <p className="font-mono text-sm text-white">{value}</p>
                </div>
              ))}
            </div>

            <Link
              to="/gallery"
              className="flex items-center gap-2 font-mono text-xs tracking-[0.2em] uppercase text-neutral-400 hover:text-white transition-colors duration-200 group"
            >
              View Telemetry Gallery
              <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform duration-200" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
