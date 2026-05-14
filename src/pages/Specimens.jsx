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
              { label: 'Plant Histology', href: '#plant', color: 'text-white border-white/25 hover:bg-white/10' },
              { label: 'Protists & Micro-Invertebrates', href: '#protists', color: 'text-slate-300 border-white/15 hover:bg-white/8' },
              { label: 'Human Cytology', href: '#cytology', color: 'text-slate-400 border-white/12 hover:bg-white/6' },
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
