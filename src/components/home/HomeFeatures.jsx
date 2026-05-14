import { Link } from 'react-router-dom';
import { ArrowRight, Eye, Layers, FlaskConical } from 'lucide-react';

const features = [
  {
    icon: Eye,
    title: 'High-Fidelity Micrographs',
    description: 'Every specimen is presented with professional-grade microscopy imagery, from brightfield to fluorescence illumination.',
    accent: 'text-bio-green',
    bg: 'bg-bio-green/10',
  },
  {
    icon: Layers,
    title: 'Structural Annotations',
    description: 'Key biological structures are labeled and explained, bridging the gap between visual observation and scientific understanding.',
    accent: 'text-cyan-400',
    bg: 'bg-cyan-400/10',
  },
  {
    icon: FlaskConical,
    title: 'Laboratory Context',
    description: 'Each specimen entry includes staining techniques, magnification data, and the physical principles behind microscopic illumination.',
    accent: 'text-phosphor',
    bg: 'bg-phosphor/10',
  },
];

export default function HomeFeatures() {
  return (
    <section className="py-28 px-6 lg:px-8 bg-charcoal border-y border-subtle">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: text */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-px bg-bio-green" />
              <span className="font-mono text-xs tracking-widest uppercase text-bio-green">
                Platform Features
              </span>
            </div>
            <h2 className="font-grotesk font-bold text-4xl md:text-5xl text-slate-100 leading-tight mb-6">
              Science Meets
              <br />
              <span className="text-bio-green">Visual Clarity</span>
            </h2>
            <p className="font-inter text-slate-400 text-base leading-relaxed mb-8 max-w-md">
              MicroCosmos is designed for students and educators who believe that understanding begins with seeing. Every pixel serves a pedagogical purpose.
            </p>
            <Link
              to="/specimens"
              className="inline-flex items-center gap-2 text-bio-green font-grotesk font-medium hover:gap-3 transition-all duration-200 group"
            >
              Browse the Specimen Hub
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
            </Link>
          </div>

          {/* Right: feature cards */}
          <div className="flex flex-col gap-4">
            {features.map((feat) => {
              const Icon = feat.icon;
              return (
                <div
                  key={feat.title}
                  className="flex items-start gap-5 p-6 rounded-2xl bg-surface border border-subtle hover:border-bio-green/20 transition-colors duration-300"
                >
                  <div className={`w-11 h-11 rounded-xl ${feat.bg} flex items-center justify-center flex-shrink-0`}>
                    <Icon className={`w-5 h-5 ${feat.accent}`} />
                  </div>
                  <div>
                    <h3 className="font-grotesk font-semibold text-slate-100 mb-1.5">{feat.title}</h3>
                    <p className="font-inter text-slate-400 text-sm leading-relaxed">{feat.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
