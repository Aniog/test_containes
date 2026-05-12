import ConstellationsSection from '../components/knowledge/ConstellationsSection';
import StellarEvolutionSection from '../components/knowledge/StellarEvolutionSection';
import ObservationalSection from '../components/knowledge/ObservationalSection';

const sections = [
  { id: 'constellations',    label: 'A — Constellations' },
  { id: 'stellar-evolution', label: 'B — Stellar Evolution' },
  { id: 'observational',     label: 'C — Observational Physics' },
];

export default function Knowledge() {
  return (
    <main className="pt-16">
      {/* Page header */}
      <div className="bg-hero-gradient py-20 md:py-28 border-b border-stardust/30">
        <div className="max-w-6xl mx-auto px-6 md:px-12 space-y-4">
          <p className="font-inter text-xs uppercase tracking-widest text-aurora">Knowledge Hub</p>
          <h1 className="font-cormorant text-4xl md:text-6xl font-light text-moonlight">
            Astronomy Fundamentals
          </h1>
          <p className="font-inter text-base text-comet max-w-xl leading-relaxed">
            Three essential pillars of astronomical knowledge — from mapping the sky to understanding
            the life and death of stars.
          </p>

          {/* Section jump links */}
          <div className="flex flex-wrap gap-3 pt-4">
            {sections.map(({ id, label }) => (
              <a
                key={id}
                href={`#${id}`}
                className="font-inter text-xs border border-stardust/60 text-comet px-4 py-2 rounded-lg hover:border-aurora/40 hover:text-moonlight transition-all duration-200"
              >
                {label}
              </a>
            ))}
          </div>
        </div>
      </div>

      <ConstellationsSection />
      <StellarEvolutionSection />
      <ObservationalSection />
    </main>
  );
}
