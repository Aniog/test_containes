import { Layers, Eye, FlaskConical, BookOpen } from 'lucide-react';

const features = [
  {
    icon: Layers,
    title: 'Multi-Modal Imaging',
    description:
      'From brightfield to fluorescence confocal, explore specimens across four distinct illumination paradigms.',
    accent: '#10B981',
  },
  {
    icon: Eye,
    title: 'Annotated Micrographs',
    description:
      'Every image is paired with precise structural annotations identifying organelles, tissues, and cellular boundaries.',
    accent: '#06B6D4',
  },
  {
    icon: FlaskConical,
    title: 'Staining Protocols',
    description:
      'Understand the chemistry behind H&E, Gram, and silver staining — and how differential dye affinity reveals hidden structure.',
    accent: '#F97316',
  },
  {
    icon: BookOpen,
    title: 'Academic Rigour',
    description:
      'Content curated for advanced biology and biophysics students, aligned with university-level microscopy curricula.',
    accent: '#10B981',
  },
];

export default function HomeFeatures() {
  return (
    <section className="bg-obsidian py-24 px-6 border-t border-subtle">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="w-8 h-px bg-bio-orange" />
            <span className="font-mono-lab text-bio-orange text-xs tracking-widest uppercase">
              Platform Capabilities
            </span>
            <span className="w-8 h-px bg-bio-orange" />
          </div>
          <h2 className="font-grotesk font-bold text-primary-text text-3xl md:text-4xl">
            Precision Tools for<br />
            <span className="text-secondary-text font-light">Scientific Discovery</span>
          </h2>
        </div>

        {/* Feature grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map(({ icon: Icon, title, description, accent }) => (
            <div
              key={title}
              className="group p-6 bg-card-dark border border-subtle rounded-sm hover:border-opacity-60 transition-all duration-300"
              style={{ '--accent': accent }}
            >
              <div
                className="w-10 h-10 rounded-sm flex items-center justify-center mb-5 transition-all duration-300"
                style={{ backgroundColor: `${accent}15`, border: `1px solid ${accent}30` }}
              >
                <Icon className="w-5 h-5" style={{ color: accent }} strokeWidth={1.5} />
              </div>
              <h3 className="font-grotesk font-semibold text-primary-text text-base mb-3">
                {title}
              </h3>
              <p className="font-inter text-secondary-text text-sm leading-relaxed">
                {description}
              </p>
            </div>
          ))}
        </div>

        {/* Divider quote */}
        <div className="mt-20 text-center">
          <blockquote className="font-grotesk font-light text-xl md:text-2xl text-secondary-text max-w-2xl mx-auto leading-relaxed">
            "The cell is the fundamental unit of life — and the microscope is the
            instrument through which we first learned to read its language."
          </blockquote>
          <cite className="block mt-4 font-mono-lab text-xs text-muted-text tracking-widest uppercase">
            — Robert Hooke, Micrographia, 1665
          </cite>
        </div>
      </div>
    </section>
  );
}
