import KnowledgeCoordinates from '@/components/knowledge/KnowledgeCoordinates';
import KnowledgeStellarEvolution from '@/components/knowledge/KnowledgeStellarEvolution';
import KnowledgeObservational from '@/components/knowledge/KnowledgeObservational';

export default function Knowledge() {
  return (
    <>
      {/* Page hero */}
      <div className="pt-24 pb-16 px-6 md:px-12 lg:px-20 bg-cosmos-void border-b border-cosmos-border/40">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-8 h-px bg-amber-glow" />
            <span className="text-xs font-semibold uppercase tracking-widest text-amber-glow">
              Knowledge Hub
            </span>
          </div>
          <h1 className="font-display font-black text-4xl md:text-6xl text-star-white mb-4 leading-tight">
            The Physics of the Cosmos
          </h1>
          <p className="text-cosmos-subtle max-w-2xl text-lg leading-relaxed">
            Three interconnected modules — from mapping the sky to understanding how stars live and die, and how we observe the invisible universe.
          </p>
          {/* Quick nav */}
          <div className="flex flex-wrap gap-3 mt-8">
            {[
              { href: '#coordinates',      label: 'A — Constellations & Coordinates' },
              { href: '#stellar-evolution', label: 'B — Stellar Evolution' },
              { href: '#observational',     label: 'C — Observational Physics' },
            ].map(({ href, label }) => (
              <a
                key={href}
                href={href}
                className="px-4 py-2 rounded-lg border border-cosmos-border bg-cosmos-surface hover:border-amber-glow/40 hover:text-amber-glow text-cosmos-text text-sm font-medium transition-all duration-300"
              >
                {label}
              </a>
            ))}
          </div>
        </div>
      </div>

      <KnowledgeCoordinates />
      <KnowledgeStellarEvolution />
      <KnowledgeObservational />
    </>
  );
}
