import ConstellationsSection from '../components/knowledge/ConstellationsSection';
import StellarEvolutionSection from '../components/knowledge/StellarEvolutionSection';
import ObservationalSection from '../components/knowledge/ObservationalSection';
import StarField from '../components/home/StarField';

export default function Knowledge() {
  return (
    <div className="bg-void">
      {/* Page hero */}
      <div className="relative pt-32 pb-20 px-6 md:px-12 text-center overflow-hidden border-b border-subtle">
        <StarField count={60} />
        <div className="relative z-10 max-w-3xl mx-auto">
          <span className="text-xs font-medium tracking-widest uppercase text-amber">
            Physics Education
          </span>
          <h1 className="font-serif font-light text-4xl md:text-5xl text-star mt-4 mb-5 tracking-tight">
            Knowledge Hub
          </h1>
          <p className="text-muted text-base md:text-lg leading-relaxed">
            Three essential chapters of modern astronomy — from mapping the sky to understanding the life and death of stars, and the instruments that reveal it all.
          </p>
        </div>
      </div>

      {/* Sections */}
      <ConstellationsSection />
      <StellarEvolutionSection />
      <ObservationalSection />
    </div>
  );
}
