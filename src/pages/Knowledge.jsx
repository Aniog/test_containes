import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import ConstellationSection from '@/components/knowledge/ConstellationSection';
import StellarEvolutionSection from '@/components/knowledge/StellarEvolutionSection';
import WavelengthsSection from '@/components/knowledge/WavelengthsSection';

function KnowledgeHero() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="relative pt-32 pb-16 px-6 md:px-12 lg:px-24 overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 z-0"
        data-strk-bg-id="knowledge-hero-bg-3f7a1b"
        data-strk-bg="[knowledge-hero-desc] [knowledge-hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
      />
      <div className="absolute inset-0 z-10 bg-[#0B0F19]/85" />
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-transparent to-[#0B0F19]" />

      <div className="relative z-20 max-w-7xl mx-auto">
        <div className="max-w-3xl">
          <span className="text-xs uppercase tracking-widest text-amber-400">Knowledge Hub</span>
          <h1 id="knowledge-hero-title" className="text-5xl md:text-6xl font-light text-white mt-4 mb-6 leading-tight">
            The Physics of
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">
              the Night Sky
            </span>
          </h1>
          <p id="knowledge-hero-desc" className="text-gray-400 text-lg leading-relaxed max-w-2xl">
            Three comprehensive modules covering celestial coordinates, stellar lifecycles, 
            and the electromagnetic spectrum — the foundations of modern observational astronomy.
          </p>

          {/* Module quick links */}
          <div className="flex flex-wrap gap-3 mt-8">
            {[
              { label: 'A — Constellations', href: '#constellations', color: 'indigo' },
              { label: 'B — Stellar Evolution', href: '#stellar-evolution', color: 'amber' },
              { label: 'C — Wavelengths', href: '#wavelengths', color: 'cyan' },
            ].map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`px-4 py-2 rounded-full border text-sm transition-all duration-300 ${
                  link.color === 'indigo' ? 'border-indigo-500/30 text-indigo-400 hover:bg-indigo-500/10' :
                  link.color === 'amber' ? 'border-amber-500/30 text-amber-400 hover:bg-amber-500/10' :
                  'border-cyan-500/30 text-cyan-400 hover:bg-cyan-500/10'
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Knowledge() {
  return (
    <>
      <KnowledgeHero />
      <ConstellationSection />
      <StellarEvolutionSection />
      <WavelengthsSection />
    </>
  );
}
