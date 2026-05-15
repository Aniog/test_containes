import { Info, Zap } from 'lucide-react';

const locomotionData = [
  {
    name: 'Ciliary Locomotion (Paramecium)',
    detail:
      'Thousands of cilia beat in coordinated metachronal waves, generating thrust via viscous coupling with the surrounding medium. The oral groove channels bacteria toward the cytostome for phagocytosis.',
    accent: '#06B6D4',
  },
  {
    name: 'Amoeboid Movement',
    detail:
      'Cytoplasmic streaming drives pseudopodial extension through sol-gel transitions of the actin cytoskeleton. Myosin II generates cortical tension, directing flow toward the leading edge.',
    accent: '#10B981',
  },
  {
    name: 'Tardigrade Cryptobiosis',
    detail:
      'Under desiccation, tardigrades enter a tun state — expelling cellular water and replacing it with trehalose, a disaccharide that vitrifies the cytoplasm and prevents membrane fusion.',
    accent: '#F97316',
  },
];

export default function SpecimenProtistSection() {
  return (
    <section id="protists" className="py-24 px-6 bg-charcoal border-b border-subtle">
      <div className="max-w-7xl mx-auto">
        {/* Section label */}
        <div className="flex items-center gap-3 mb-4">
          <span className="w-8 h-px bg-bio-cyan" />
          <span className="font-mono-lab text-bio-cyan text-xs tracking-widest uppercase">
            Section B — Protists & Micro-Invertebrates
          </span>
        </div>
        <h2 className="font-grotesk font-bold text-primary-text text-3xl md:text-4xl mb-2">
          The Micro-Zoo
        </h2>
        <p className="font-inter text-secondary-text text-base mb-16 max-w-xl">
          Single-celled organisms that defy simplicity — exhibiting complex behaviours,
          sophisticated organelles, and survival strategies that have persisted for
          hundreds of millions of years.
        </p>

        {/* Reversed split layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Text content — left on this section */}
          <div className="space-y-6 order-2 lg:order-1">
            <div className="flex items-start gap-3 p-4 bg-card-dark border border-subtle rounded-sm">
              <Zap className="w-4 h-4 text-bio-cyan mt-0.5 flex-shrink-0" strokeWidth={1.5} />
              <p className="font-inter text-secondary-text text-sm leading-relaxed">
                Phase-contrast microscopy reveals internal organelles without chemical fixation,
                preserving the living dynamics of vacuolar pulsation, nuclear rotation, and
                cytoplasmic streaming in real time. The refractive index differential between
                organelles and cytoplasm generates the characteristic halo contrast.
              </p>
            </div>

            {locomotionData.map(({ name, detail, accent }) => (
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
                { label: 'Imaging Mode', value: 'Phase Contrast' },
                { label: 'Magnification', value: '100× Objective' },
                { label: 'Specimen State', value: 'Live / Unfixed' },
                { label: 'Medium', value: 'Pond Water Culture' },
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

          {/* Annotated image — right */}
          <div className="relative group order-1 lg:order-2">
            <div className="relative overflow-hidden rounded-sm border border-subtle shadow-glow-cyan">
              <img
                src="https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=900&q=85&fit=crop"
                alt="Phase contrast micrograph of Paramecium showing cilia and internal organelles"
                className="w-full h-80 md:h-96 object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 to-transparent" />

              {/* Annotation dots */}
              <div className="absolute" style={{ top: '35%', left: '45%' }}>
                <div className="annotation-dot w-3 h-3 rounded-full border-2 border-bio-cyan bg-bio-cyan/30" />
              </div>
              <div className="absolute flex items-center gap-2" style={{ top: '55%', left: '25%' }}>
                <div className="annotation-dot w-3 h-3 rounded-full border-2 border-bio-green bg-bio-green/30" />
                <span className="font-mono-lab text-xs text-bio-green hidden md:block">Macronucleus</span>
              </div>
              <div className="absolute flex items-center gap-2" style={{ top: '22%', left: '60%' }}>
                <div className="annotation-dot w-3 h-3 rounded-full border-2 border-bio-orange bg-bio-orange/30" />
                <span className="font-mono-lab text-xs text-bio-orange hidden md:block">Cilia</span>
              </div>
            </div>

            {/* Metadata bar */}
            <div className="mt-3 flex items-center justify-between px-1">
              <span className="font-mono-lab text-xs text-muted-text tracking-widest">
                PARAMECIUM CAUDATUM — LIVE CULTURE
              </span>
              <span className="font-mono-lab text-xs text-bio-cyan tracking-widest">
                100× PHASE CONTRAST
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
