import { Link } from 'react-router-dom';
import { Layers, ArrowRight, Eye } from 'lucide-react';

const features = [
  {
    icon: Layers,
    title: 'Annotated Micrographs',
    description: 'Every specimen is presented with precision-labeled structural annotations, bridging visual observation with scientific nomenclature.',
  },
  {
    icon: Eye,
    title: 'Multi-Modal Illumination',
    description: 'Compare specimens across brightfield, darkfield, phase-contrast, and fluorescence imaging modalities to understand how light reveals hidden structure.',
  },
];

export default function HomeFeatureStrip() {
  return (
    <section className="py-24 md:py-32 px-6 md:px-12 lg:px-16 bg-[#121824] relative overflow-hidden">
      {/* Subtle grid */}
      <div className="absolute inset-0 lab-grid opacity-30" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Image */}
          <div className="relative">
            <div className="relative overflow-hidden border border-slate-800/60">
              <img
                src="https://images.unsplash.com/photo-1614935151651-0bea6508db6b?w=900&q=80"
                alt="Microscope laboratory setup"
                className="w-full h-80 md:h-96 object-cover opacity-70"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-[#121824]/80 via-transparent to-transparent" />

              {/* Floating data overlay */}
              <div className="absolute bottom-6 left-6 bg-[#090D16]/90 backdrop-blur-sm border border-slate-800/60 px-5 py-4">
                <p className="text-[9px] font-mono tracking-widest uppercase text-emerald-400 mb-2">Live Session</p>
                <p className="text-slate-200 text-sm font-medium">Olympus BX53 Compound</p>
                <p className="text-slate-500 text-xs mt-1">Brightfield · 100× Objective</p>
              </div>

              {/* Corner accent */}
              <div className="absolute top-0 right-0 w-16 h-16 border-t-2 border-r-2 border-emerald-500/30" />
              <div className="absolute bottom-0 left-0 w-16 h-16 border-b-2 border-l-2 border-emerald-500/30" />
            </div>

            {/* Decorative element */}
            <div className="absolute -bottom-4 -right-4 w-32 h-32 border border-slate-800/40 -z-10" />
          </div>

          {/* Right: Content */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <span className="w-8 h-px bg-emerald-400" />
              <span className="text-emerald-400 font-mono text-xs tracking-widest uppercase">
                Platform Features
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-light tracking-widest uppercase text-slate-100 mb-6 leading-tight">
              Science Meets<br />Visual Clarity
            </h2>
            <p className="text-slate-400 text-sm leading-relaxed mb-10">
              MicroCosmos is engineered for the rigorous demands of higher-level biology education. Each specimen entry is curated with academic precision, pairing high-fidelity micrographs with structured scientific commentary.
            </p>

            <div className="flex flex-col gap-8 mb-10">
              {features.map((f) => {
                const Icon = f.icon;
                return (
                  <div key={f.title} className="flex gap-5">
                    <div className="flex-shrink-0 w-10 h-10 border border-emerald-500/30 flex items-center justify-center">
                      <Icon className="w-4 h-4 text-emerald-400" />
                    </div>
                    <div>
                      <h4 className="text-slate-200 font-semibold text-sm mb-1.5">{f.title}</h4>
                      <p className="text-slate-500 text-sm leading-relaxed">{f.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            <Link
              to="/specimens"
              className="inline-flex items-center gap-2 text-emerald-400 text-xs tracking-widest uppercase font-medium hover:text-emerald-300 transition-colors group"
            >
              Begin Exploration
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
