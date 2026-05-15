import { Activity } from 'lucide-react';

const stainingData = [
  {
    name: 'Haematoxylin (Basophilic Stain)',
    detail:
      'A natural dye derived from logwood that forms a complex with aluminium mordant, binding electrostatically to negatively charged nucleic acids and acidic proteins. Imparts the characteristic blue-purple nuclear staining.',
    accent: '#06B6D4',
  },
  {
    name: 'Eosin (Acidophilic Counterstain)',
    detail:
      'A synthetic xanthene dye that binds to positively charged cytoplasmic proteins, collagen, and red blood cell haemoglobin. The resulting pink-red contrast allows simultaneous visualisation of nuclear and cytoplasmic compartments.',
    accent: '#F97316',
  },
  {
    name: 'Erythrocyte Morphology',
    detail:
      'Normal erythrocytes exhibit a biconcave disc morphology (6–8 μm diameter) with central pallor occupying one-third of the cell diameter. Deviations — poikilocytosis, anisocytosis — are primary diagnostic indicators in haematological pathology.',
    accent: '#10B981',
  },
];

export default function SpecimenHumanSection() {
  return (
    <section id="human" className="py-24 px-6 bg-obsidian">
      <div className="max-w-7xl mx-auto">
        {/* Section label */}
        <div className="flex items-center gap-3 mb-4">
          <span className="w-8 h-px bg-bio-orange" />
          <span className="font-mono-lab text-bio-orange text-xs tracking-widest uppercase">
            Section C — Human Cytology & Staining
          </span>
        </div>
        <h2 className="font-grotesk font-bold text-primary-text text-3xl md:text-4xl mb-2">
          The Canvas of Pathology
        </h2>
        <p className="font-inter text-secondary-text text-base mb-16 max-w-xl">
          Haematoxylin and eosin staining transforms the invisible biochemistry of human
          blood into a diagnostic landscape — where colour encodes molecular identity.
        </p>

        {/* Split layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Annotated image */}
          <div className="relative group">
            <div className="relative overflow-hidden rounded-sm border border-subtle shadow-glow-orange">
              <img
                src="https://images.unsplash.com/photo-1582719471384-894fbb16e074?w=900&q=85&fit=crop"
                alt="Blood smear micrograph showing erythrocytes and leukocytes"
                className="w-full h-80 md:h-96 object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-obsidian/60 to-transparent" />

              {/* Annotation dots */}
              <div className="absolute flex items-center gap-2" style={{ top: '40%', left: '30%' }}>
                <div className="annotation-dot w-3 h-3 rounded-full border-2 border-bio-orange bg-bio-orange/30" />
                <span className="font-mono-lab text-xs text-bio-orange hidden md:block">Erythrocyte</span>
              </div>
              <div className="absolute flex items-center gap-2" style={{ top: '25%', left: '55%' }}>
                <div className="annotation-dot w-3 h-3 rounded-full border-2 border-bio-cyan bg-bio-cyan/30" />
                <span className="font-mono-lab text-xs text-bio-cyan hidden md:block">Neutrophil</span>
              </div>
              <div className="absolute flex items-center gap-2" style={{ top: '62%', left: '65%' }}>
                <div className="annotation-dot w-3 h-3 rounded-full border-2 border-bio-green bg-bio-green/30" />
                <span className="font-mono-lab text-xs text-bio-green hidden md:block">Lymphocyte</span>
              </div>
            </div>

            {/* Metadata bar */}
            <div className="mt-3 flex items-center justify-between px-1">
              <span className="font-mono-lab text-xs text-muted-text tracking-widest">
                PERIPHERAL BLOOD SMEAR — H&E STAIN
              </span>
              <span className="font-mono-lab text-xs text-bio-orange tracking-widest">
                1000× OIL IMMERSION
              </span>
            </div>

            {/* Cell count legend */}
            <div className="mt-4 grid grid-cols-3 gap-2">
              {[
                { label: 'Erythrocytes', count: '4.5–5.5M/μL', color: '#F97316' },
                { label: 'Neutrophils', count: '1.8–7.7K/μL', color: '#06B6D4' },
                { label: 'Lymphocytes', count: '1.0–4.8K/μL', color: '#10B981' },
              ].map(({ label, count, color }) => (
                <div key={label} className="p-3 bg-card-dark border border-subtle rounded-sm text-center">
                  <div
                    className="w-2 h-2 rounded-full mx-auto mb-2"
                    style={{ backgroundColor: color }}
                  />
                  <div className="font-mono-lab text-xs text-muted-text tracking-wide mb-1">{label}</div>
                  <div className="font-inter text-primary-text text-xs font-medium">{count}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Text content */}
          <div className="space-y-6">
            <div className="flex items-start gap-3 p-4 bg-card-dark border border-subtle rounded-sm">
              <Activity className="w-4 h-4 text-bio-orange mt-0.5 flex-shrink-0" strokeWidth={1.5} />
              <p className="font-inter text-secondary-text text-sm leading-relaxed">
                The peripheral blood smear remains the gold standard for haematological
                assessment. Under oil-immersion optics at 1000× magnification, individual
                cell morphology, nuclear lobulation, and cytoplasmic granularity become
                resolvable — enabling differential white cell counts and detection of
                parasitic infections, leukaemia, and anaemia subtypes.
              </p>
            </div>

            {stainingData.map(({ name, detail, accent }) => (
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
                { label: 'Stain Protocol', value: 'H&E (Wright-Giemsa)' },
                { label: 'Magnification', value: '1000× Oil Immersion' },
                { label: 'Illumination', value: 'Brightfield Köhler' },
                { label: 'Fixation', value: 'Methanol Air-Dry' },
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
