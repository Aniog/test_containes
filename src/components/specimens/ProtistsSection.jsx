import { Zap, Info, Droplets } from 'lucide-react';

const organisms = [
  {
    name: 'Paramecium caudatum',
    classification: 'Phylum Ciliophora',
    image: 'https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=700&q=85&fit=crop',
    mag: '400× Phase-Contrast',
    color: '#06B6D4',
    features: [
      { label: 'Locomotion', value: 'Coordinated metachronal ciliary beating (~10–40 μm/s)' },
      { label: 'Feeding', value: 'Oral groove → cytostome → food vacuole formation' },
      { label: 'Osmoregulation', value: 'Contractile vacuoles expel excess water every 6–10 sec' },
      { label: 'Reproduction', value: 'Binary fission (transverse); conjugation for genetic exchange' },
    ],
    description:
      'Paramecium caudatum is a slipper-shaped ciliate approximately 150–300 μm in length. Its entire pellicle is covered with ~2,500 cilia arranged in longitudinal rows, enabling precise three-dimensional navigation. The macronucleus governs vegetative functions while the micronucleus participates in sexual reproduction.',
  },
  {
    name: 'Ramazzottius oberhaeuseri',
    classification: 'Phylum Tardigrada',
    image: 'https://images.unsplash.com/photo-1582719471384-894fbb16e074?w=700&q=85&fit=crop',
    mag: '200× Brightfield',
    color: '#F97316',
    features: [
      { label: 'Cryptobiosis', value: 'Tun state: metabolism drops to <0.01% of normal' },
      { label: 'Radiation Tolerance', value: 'Survives >570,000 mGy (human lethal: ~5,000 mGy)' },
      { label: 'Vacuum Survival', value: 'Confirmed survival in low Earth orbit vacuum' },
      { label: 'Desiccation', value: 'Survives complete dehydration for decades' },
    ],
    description:
      'Tardigrades ("water bears") are microscopic metazoans 0.1–1.5 mm in length with four pairs of stubby, clawed legs. Their extraordinary resilience stems from the production of intrinsically disordered proteins (TDPs) that vitrify cellular contents during desiccation, preventing structural damage.',
  },
];

const ProtistsSection = () => {
  return (
    <section id="protists" className="py-24 md:py-32 bg-charcoal border-y border-border-dim scroll-mt-16">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Section header */}
        <div className="flex items-center gap-4 mb-4">
          <div className="w-8 h-8 rounded-lg bg-bio-cyan/10 flex items-center justify-center">
            <Zap className="w-4 h-4 text-bio-cyan" />
          </div>
          <span className="font-mono text-[11px] text-bio-cyan tracking-widest uppercase">
            Section B — Protists & Micro-Invertebrates
          </span>
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-3 leading-tight">
          The Micro-Zoo
        </h2>
        <p className="text-text-secondary text-base max-w-2xl mb-16 leading-relaxed">
          Single-celled organisms and microscopic invertebrates exhibit behavioral complexity that rivals macroscopic animals. These specimens challenge our intuitions about the minimum requirements for life, sensation, and survival.
        </p>

        {/* Organism cards */}
        <div className="space-y-12">
          {organisms.map((org, idx) => (
            <div
              key={org.name}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-10 items-start ${idx % 2 === 1 ? 'lg:grid-flow-dense' : ''}`}
            >
              {/* Image */}
              <div className={`relative group ${idx % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                <div
                  className="relative rounded-2xl overflow-hidden border bg-charcoal-light"
                  style={{ borderColor: `${org.color}25` }}
                >
                  <img
                    src={org.image}
                    alt={org.name}
                    className="w-full aspect-[4/3] object-cover specimen-img"
                    style={{ filter: 'saturate(1.2) contrast(1.1)' }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 to-transparent" />
                  {/* Scan overlay */}
                  <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div
                      className="absolute left-0 right-0 h-0.5 animate-scan"
                      style={{ background: `linear-gradient(90deg, transparent, ${org.color}50, transparent)` }}
                    />
                  </div>
                </div>
                <div className="mt-3 flex flex-wrap gap-2">
                  <span className="font-mono text-[10px] text-text-muted tracking-widest uppercase">{org.name}</span>
                  <span
                    className="font-mono text-[10px] px-2 py-0.5 rounded-full"
                    style={{ color: org.color, backgroundColor: `${org.color}15` }}
                  >
                    {org.mag}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className={`flex flex-col gap-5 ${idx % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                <div>
                  <div
                    className="font-mono text-[10px] tracking-widest uppercase mb-2"
                    style={{ color: org.color }}
                  >
                    {org.classification}
                  </div>
                  <h3 className="text-text-primary font-bold text-2xl italic mb-3">{org.name}</h3>
                  <p className="text-text-secondary text-sm leading-relaxed">{org.description}</p>
                </div>

                {/* Feature table */}
                <div
                  className="rounded-xl border overflow-hidden"
                  style={{ borderColor: `${org.color}20` }}
                >
                  <div
                    className="px-4 py-2.5 border-b"
                    style={{ backgroundColor: `${org.color}08`, borderColor: `${org.color}20` }}
                  >
                    <span className="font-mono text-[10px] tracking-widest uppercase" style={{ color: org.color }}>
                      Biological Parameters
                    </span>
                  </div>
                  <div className="divide-y" style={{ borderColor: `${org.color}10` }}>
                    {org.features.map(({ label, value }) => (
                      <div key={label} className="flex gap-4 px-4 py-3">
                        <span
                          className="font-mono text-[10px] tracking-wide uppercase shrink-0 w-28 mt-0.5"
                          style={{ color: `${org.color}AA` }}
                        >
                          {label}
                        </span>
                        <span className="text-text-secondary text-xs leading-relaxed">{value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Amoeba callout */}
        <div className="mt-16 p-6 md:p-8 rounded-2xl bg-charcoal-light border border-border-dim relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-bio-cyan/3 blur-3xl pointer-events-none" />
          <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <Droplets className="w-4 h-4 text-bio-cyan" />
                <span className="font-mono text-[11px] text-bio-cyan tracking-widest uppercase">
                  Spotlight: Amoeba proteus
                </span>
              </div>
              <h3 className="text-text-primary font-bold text-xl mb-3">Pseudopodial Locomotion</h3>
              <p className="text-text-secondary text-sm leading-relaxed">
                Amoeba proteus navigates its environment through the dynamic extension and retraction of pseudopodia — cytoplasmic projections driven by actin polymerization at the leading edge and actomyosin contraction at the trailing uropod. This sol-gel transformation of cytoplasm (cytoplasmic streaming) enables both locomotion and phagocytic engulfment of prey organisms.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {[
                { label: 'Cell Size', value: '250–750 μm' },
                { label: 'Pseudopod Speed', value: '0.5–2 μm/s' },
                { label: 'Genome Size', value: '290 Gbp' },
                { label: 'Vacuole pH', value: '4.5–5.0' },
              ].map(({ label, value }) => (
                <div key={label} className="bg-charcoal rounded-xl p-3 border border-border-dim text-center">
                  <div className="font-mono text-bio-cyan text-sm font-medium">{value}</div>
                  <div className="text-text-muted text-[10px] mt-1">{label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProtistsSection;
