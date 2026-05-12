import KnowledgeConstellations from '@/components/knowledge/KnowledgeConstellations';
import KnowledgeStellarEvolution from '@/components/knowledge/KnowledgeStellarEvolution';
import KnowledgeObservational from '@/components/knowledge/KnowledgeObservational';

export default function Knowledge() {
  return (
    <>
      <div className="pt-32 pb-16 bg-[#0a0e1a] border-b border-[#1e2a4a]">
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <p className="text-xs font-mono tracking-[0.3em] uppercase text-[#f5c842] mb-4">
            Educational Resource
          </p>
          <h1 className="font-serif text-4xl md:text-6xl font-light text-[#f0f4ff] mb-4">
            Knowledge Hub
          </h1>
          <p className="text-[#8892b0] text-lg max-w-2xl leading-relaxed">
            Three essential pillars of astronomy — from mapping the sky to
            understanding how stars live and die, and how we observe the cosmos
            across the full electromagnetic spectrum.
          </p>
          <div className="flex flex-wrap gap-3 mt-8">
            {[
              { href: '#constellations', label: 'A — Constellations & Coordinates', color: '#6366f1' },
              { href: '#stellar-evolution', label: 'B — Stellar Evolution', color: '#f5c842' },
              { href: '#observational', label: 'C — Observational Physics', color: '#2dd4bf' },
            ].map(({ href, label, color }) => (
              <a
                key={href}
                href={href}
                className="px-4 py-2 text-xs font-mono tracking-wide rounded-full border transition-all duration-200 hover:bg-white/5"
                style={{ borderColor: `${color}40`, color }}
              >
                {label}
              </a>
            ))}
          </div>
        </div>
      </div>

      <KnowledgeConstellations />
      <KnowledgeStellarEvolution />
      <KnowledgeObservational />
    </>
  );
}
