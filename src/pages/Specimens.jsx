import SpecimenPlant from '@/components/specimens/SpecimenPlant';
import SpecimenProtists from '@/components/specimens/SpecimenProtists';
import SpecimenCytology from '@/components/specimens/SpecimenCytology';

export default function Specimens() {
  return (
    <main className="pt-20">
      {/* Page header */}
      <div className="py-20 px-6 lg:px-8 bg-charcoal border-b border-subtle">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-px bg-bio-green" />
            <span className="font-mono text-xs tracking-widest uppercase text-bio-green">
              Knowledge Base
            </span>
          </div>
          <h1 className="font-grotesk font-bold text-5xl md:text-6xl text-slate-100 leading-tight mb-4">
            Specimen Hub
          </h1>
          <p className="font-inter text-slate-400 text-lg max-w-2xl leading-relaxed">
            A curated collection of biological specimens examined under the microscope. Each entry pairs high-fidelity micrographs with structural annotations and scientific analysis.
          </p>

          {/* Quick nav */}
          <div className="flex flex-wrap gap-3 mt-8">
            {[
              { label: 'Plant Histology', href: '#plant', color: 'text-bio-green border-bio-green/30 hover:bg-bio-green/10' },
              { label: 'Protists & Micro-Invertebrates', href: '#protists', color: 'text-cyan-400 border-cyan-400/30 hover:bg-cyan-400/10' },
              { label: 'Human Cytology', href: '#cytology', color: 'text-phosphor border-phosphor/30 hover:bg-phosphor/10' },
            ].map((item) => (
              <a
                key={item.label}
                href={item.href}
                className={`font-mono text-xs tracking-wider uppercase px-4 py-2 rounded-lg border transition-colors duration-200 ${item.color}`}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </div>

      <SpecimenPlant />
      <SpecimenProtists />
      <SpecimenCytology />
    </main>
  );
}
