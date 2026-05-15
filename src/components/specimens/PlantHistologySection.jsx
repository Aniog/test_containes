import { Leaf, Info } from 'lucide-react';

const annotations = [
  { label: 'Epidermis', color: '#10B981', top: '12%', left: '8%', description: 'Outermost protective cell layer' },
  { label: 'Xylem', color: '#06B6D4', top: '38%', left: '42%', description: 'Water & mineral transport vessels' },
  { label: 'Phloem', color: '#F97316', top: '55%', left: '62%', description: 'Photosynthate distribution network' },
  { label: 'Cortex', color: '#8B5CF6', top: '72%', left: '22%', description: 'Parenchyma storage tissue' },
];

const structureData = [
  {
    title: 'Xylem Vessels',
    detail: 'Composed of dead, lignified tracheary elements — tracheids and vessel members — forming a continuous conduit for apoplastic water flow driven by transpiration-generated negative pressure (cohesion-tension theory).',
  },
  {
    title: 'Phloem Sieve Tubes',
    detail: 'Living cells with perforated sieve plates enabling symplastic transport of sucrose and amino acids via pressure-flow (Münch) mechanism, from photosynthetic sources to metabolic sinks.',
  },
  {
    title: 'Sclerenchyma Fibers',
    detail: 'Heavily lignified support cells with secondary cell walls providing mechanical rigidity. Absent of living protoplast at maturity; function purely as structural reinforcement.',
  },
  {
    title: 'Endodermis & Casparian Strip',
    detail: 'A single-cell layer with suberin-impregnated radial walls (Casparian strip) that forces all water and solutes through the symplast, enabling selective ion uptake regulation.',
  },
];

const PlantHistologySection = () => {
  return (
    <section id="plant" className="py-24 md:py-32 bg-obsidian scroll-mt-16">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Section header */}
        <div className="flex items-center gap-4 mb-4">
          <div className="w-8 h-8 rounded-lg bg-bio-green/10 flex items-center justify-center">
            <Leaf className="w-4 h-4 text-bio-green" />
          </div>
          <span className="font-mono text-[11px] text-bio-green tracking-widest uppercase">
            Section A — Plant Histology
          </span>
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-3 leading-tight">
          The Architecture of Flora
        </h2>
        <p className="text-text-secondary text-base max-w-2xl mb-16 leading-relaxed">
          Cross-sectional analysis of vascular plant stems reveals a masterwork of biological engineering — concentric tissue systems optimized for structural support, fluid transport, and metabolic exchange.
        </p>

        {/* Main split layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start mb-16">
          {/* Annotated image */}
          <div className="relative group">
            <div className="relative rounded-2xl overflow-hidden border border-border-dim bg-charcoal">
              <img
                src="https://images.unsplash.com/photo-1530026405186-ed1f139313f8?w=900&q=85&fit=crop"
                alt="Cross-section of a plant stem showing vascular bundles"
                className="w-full aspect-[4/3] object-cover specimen-img"
              />
              {/* Scan line */}
              <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-bio-green/40 to-transparent animate-scan" />
              </div>
              {/* Annotation dots */}
              {annotations.map((ann) => (
                <div
                  key={ann.label}
                  className="absolute group/ann"
                  style={{ top: ann.top, left: ann.left }}
                >
                  <div
                    className="w-3 h-3 rounded-full border-2 cursor-pointer animate-pulse-slow"
                    style={{ borderColor: ann.color, backgroundColor: `${ann.color}30` }}
                  />
                  <div
                    className="absolute left-4 top-0 hidden group-hover/ann:flex items-center gap-2 bg-charcoal border rounded-lg px-3 py-1.5 whitespace-nowrap z-10 shadow-card"
                    style={{ borderColor: `${ann.color}40` }}
                  >
                    <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: ann.color }} />
                    <span className="text-text-primary text-xs font-medium">{ann.label}</span>
                    <span className="text-text-muted text-xs">— {ann.description}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Image metadata */}
            <div className="mt-3 flex flex-wrap items-center gap-3">
              <span className="font-mono text-[10px] text-text-muted tracking-widest uppercase">Tilia Stem × Section</span>
              <span className="font-mono text-[10px] text-bio-green bg-bio-green/10 px-2 py-0.5 rounded-full">400× Brightfield</span>
              <span className="font-mono text-[10px] text-bio-cyan bg-bio-cyan/10 px-2 py-0.5 rounded-full">Safranin-Fast Green</span>
            </div>
          </div>

          {/* Text content */}
          <div className="flex flex-col gap-6">
            <div className="p-5 rounded-xl bg-charcoal border border-border-dim">
              <div className="flex items-start gap-3 mb-3">
                <Info className="w-4 h-4 text-bio-green mt-0.5 shrink-0" />
                <h3 className="text-text-primary font-semibold text-sm">Specimen Overview</h3>
              </div>
              <p className="text-text-secondary text-sm leading-relaxed">
                The Tilia (Linden) stem cross-section is a canonical specimen in plant histology, exhibiting a clearly differentiated vascular cylinder with distinct xylem and phloem bundles arranged in a ring pattern characteristic of dicotyledonous angiosperms. Safranin stains lignified cell walls red; Fast Green counterstains cellulosic walls blue-green.
              </p>
            </div>

            {/* Structure breakdown */}
            <div className="space-y-4">
              {structureData.map(({ title, detail }) => (
                <div key={title} className="border-l-2 border-bio-green/30 pl-4">
                  <h4 className="text-text-primary font-medium text-sm mb-1">{title}</h4>
                  <p className="text-text-secondary text-xs leading-relaxed">{detail}</p>
                </div>
              ))}
            </div>

            {/* Key metrics */}
            <div className="grid grid-cols-3 gap-3 mt-2">
              {[
                { label: 'Cell Wall Thickness', value: '2–15 μm' },
                { label: 'Vessel Diameter', value: '20–500 μm' },
                { label: 'Sieve Pore Ø', value: '0.5–5 μm' },
              ].map(({ label, value }) => (
                <div key={label} className="bg-charcoal-light rounded-xl p-3 border border-border-dim text-center">
                  <div className="font-mono text-bio-green text-sm font-medium">{value}</div>
                  <div className="text-text-muted text-[10px] mt-1 leading-tight">{label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Additional micrograph row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            {
              src: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=500&q=80&fit=crop',
              label: 'Stomatal Complex',
              detail: 'Guard cells & subsidiary cells',
              mag: '1000×',
            },
            {
              src: 'https://images.unsplash.com/photo-1576086213369-97a306d36557?w=500&q=80&fit=crop',
              label: 'Chloroplast Array',
              detail: 'Palisade mesophyll layer',
              mag: '400×',
            },
            {
              src: 'https://images.unsplash.com/photo-1530026405186-ed1f139313f8?w=500&q=80&fit=crop',
              label: 'Vascular Bundle',
              detail: 'Collateral bundle detail',
              mag: '200×',
            },
          ].map(({ src, label, detail, mag }) => (
            <div key={label} className="group rounded-xl overflow-hidden border border-border-dim bg-charcoal">
              <div className="relative h-36 overflow-hidden">
                <img
                  src={src}
                  alt={label}
                  className="w-full h-full object-cover opacity-70 group-hover:opacity-90 group-hover:scale-105 transition-all duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 to-transparent" />
                <span className="absolute bottom-2 right-2 font-mono text-[10px] text-bio-green bg-bio-green/15 px-2 py-0.5 rounded-full">
                  {mag}
                </span>
              </div>
              <div className="p-3">
                <div className="text-text-primary text-xs font-medium">{label}</div>
                <div className="text-text-muted text-[10px] mt-0.5">{detail}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PlantHistologySection;
