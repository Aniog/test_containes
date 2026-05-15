import { Link } from 'react-router-dom';
import { ArrowRight, Eye, Layers, Cpu } from 'lucide-react';

const features = [
  {
    icon: Eye,
    title: 'High-Fidelity Micrographs',
    description: 'Every specimen is documented with professional-grade optical and electron microscopy imagery, annotated for educational clarity.',
  },
  {
    icon: Layers,
    title: 'Structural Annotations',
    description: 'Interactive overlays identify key organelles, tissue layers, and cellular structures with precise scientific nomenclature.',
  },
  {
    icon: Cpu,
    title: 'Multi-Modal Illumination',
    description: 'Specimens are captured across brightfield, darkfield, phase-contrast, and fluorescence modalities to reveal different structural details.',
  },
];

const HomeFeatureStrip = () => {
  return (
    <section className="py-20 bg-charcoal border-y border-border-dim">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-16">
          {features.map(({ icon: Icon, title, description }) => (
            <div key={title} className="flex flex-col gap-4">
              <div className="w-10 h-10 rounded-xl bg-bio-green/10 flex items-center justify-center">
                <Icon className="w-5 h-5 text-bio-green" />
              </div>
              <h3 className="text-text-primary font-semibold text-base">{title}</h3>
              <p className="text-text-secondary text-sm leading-relaxed">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeFeatureStrip;
