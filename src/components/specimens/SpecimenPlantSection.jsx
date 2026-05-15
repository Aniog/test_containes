import { Info } from 'lucide-react';

const annotations = [
  { id: 'xylem', label: 'Xylem', top: '28%', left: '38%', color: '#10B981' },
  { id: 'phloem', label: 'Phloem', top: '52%', left: '62%', color: '#06B6D4' },
  { id: 'epidermis', label: 'Epidermis', top: '15%', left: '72%', color: '#F97316' },
  { id: 'cortex', label: 'Cortex', top: '68%', left: '28%', color: '#10B981' },
];

const structureData = [
  {
    name: 'Xylem Vessels',
    detail:
      'Hollow, lignified conduits arranged in radial files. Secondary cell wall thickenings (annular, spiral, or reticulate) resist the negative pressure generated during transpiration-driven water ascent.',
    accent: '#10B981',
  },
  {
    name: 'Phloem Sieve Tubes',
    detail:
      'Living cells with perforated end walls (sieve plates) facilitating pressure-driven sucrose translocation from photosynthetic source tissues to metabolic sink organs.',
    accent: '#06B6D4',
  },
  {
    name: 'Epidermis & Cuticle',
    detail:
      'A single-layered boundary of tightly packed cells coated with a hydrophobic cutin polymer. Stomatal guard cells regulate gaseous exchange and transpirational water loss.',
    accent: '#F97316',
  },
];

export default function SpecimenPlantSection() {
  return (
    <section id="plant" className="py-24 px-6 bg-obsidian border-b border-subtle">
      <div className="max-w-7xl mx-auto">
        {/* Section label */}
        <div className="flex items-center gap-3 mb-4">
          <span className="w-8 h-px bg-bio-green" />
          <span className="font-mono-lab text-bio-green text-xs tracking-widest uppercase">
            Section A — Plant Histology
          </span>
        </div>
        <h2 className="font-grotesk font-bold text-primary-text text-3xl md:text-4xl mb-2">
          The Architecture of Flora
        </h2>
        <p className="font-inter text-secondary-text text-base mb-16 max-w-xl">
          Cross-sectional anatomy of vascular plant stems — where geometry serves function
          and every cell wall tells a story of evolutionary pressure.
        </p>

        {/* Split layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Annotated image */}
          <div className="relative group">
            <div className="relative overflow-hidden rounded-sm border border-subtle shadow-glow-green">
              <img
                src="https://images.unsplash.com/photo-1530026405186-ed1f139313f8?w=900&q=85&fit=crop"
                alt="Plant stem cross-section micrograph showing vascular bundles"
                className="w-full h-80 md:h-96 object-cover transition-transform duration-700 group-hover:scale-105"
              />
              {/* Dark overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-obsidian/60 to-transparent" />

              {/* Annotation dots */}
              {annotations.map((ann) => (
                <div
                  key={ann.id}
                  className="absolute flex items-center gap-2"
                  style={{ top: ann.top, left: ann.left }}
                >
                  <div
                    className="annotation-dot w-3 h-3 rounded-full border-2 cursor-pointer"
                    style={{ backgroundColor: `${ann.color}40`, borderColor: ann.color }}
                  />
                  <span
                    className="font-mono-lab text-xs tracking-wide hidden md:block"
                    style={{ color: ann.color }}
                  >
                    {ann.label}
                  </span>
                </div>
              ))}
            </div>

            {/* Metadata bar */}
            <div className="mt-3 flex items-center justify-between px-1">
              <span className="font-mono-lab text-xs text-muted-text tracking-widest">
                TILIA STEM — TRANSVERSE SECTION
              </span>
              <span className="font-mono-lab text-xs text-bio-green tracking-widest">
                400× BRIGHTFIELD
              </span>
            </div>
          </div>

          {/* Text content */}
          <div className="space-y-6">
            <div className="flex items-start gap-3 p-4 bg-card-dark border border-subtle rounded-sm">
              <Info className="w-4 h-4 text-bio-green mt-0.5 flex-shrink-0" strokeWidth={1.5} />
              <p className="font-inter text-secondary-text text-sm leading-relaxed">
                The Tilia (Linden) stem is a canonical specimen in plant histology, offering
                a textbook-perfect arrangement of primary and secondary vascular tissues.
                Safranin-Alcian Blue double staining differentiates lignified (red) from
                non-lignified (blue) cell walls with exceptional clarity.
              </p>
            </div>

            {structureData.map(({ name, detail, accent }) => (
              <div
                key={name}
                className="border-l-2 pl-5 py-1"
                style={{ borderColor: accent }}
              >
                <h4
                  className="font-grotesk font-semibold text-sm mb-2"
                  style={{ color: accent }}
                >
                  {name}
                </h4>
                <p className="font-inter text-secondary-text text-sm leading-relaxed">
                  {detail}
                </p>
              </div>
            ))}

            {/* Technical specs */}
            <div className="grid grid-cols-2 gap-3 mt-6">
              {[
                { label: 'Stain Protocol', value: 'Safranin / Alcian Blue' },
                { label: 'Magnification', value: '400× Objective' },
                { label: 'Illumination', value: 'Brightfield Transmitted' },
                { label: 'Section Thickness', value: '8–12 μm' },
              ].map(({ label, value }) => (
                <div key={label} className="p-3 bg-card-dark border border-subtle rounded-sm">
                  <div className="font-mono-lab text-xs text-muted-text tracking-widest uppercase mb-1">
                    {label}
                  </div>
                  <div className="font-inter text-primary-text text-sm font-medium">{value}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
