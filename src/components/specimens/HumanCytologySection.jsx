import { Activity, Info, FlaskConical } from 'lucide-react';

const cellTypes = [
  {
    name: 'Erythrocytes',
    subtitle: 'Red Blood Cells',
    color: '#F97316',
    diameter: '6–8 μm',
    count: '4.5–5.5 × 10⁶/μL',
    lifespan: '~120 days',
    description: 'Biconcave, anucleate discs optimized for gas exchange. The concave morphology maximizes surface-area-to-volume ratio, reducing O₂ diffusion distance to hemoglobin. Deformability allows passage through capillaries narrower than the cell diameter.',
  },
  {
    name: 'Neutrophils',
    subtitle: 'Polymorphonuclear Leukocytes',
    color: '#8B5CF6',
    diameter: '10–12 μm',
    count: '1.8–7.7 × 10³/μL',
    lifespan: '6–12 hours (circulation)',
    description: 'The most abundant leukocyte, identifiable by their multi-lobed (2–5 lobes) nucleus and pale cytoplasmic granules. First responders to bacterial infection; employ phagocytosis, degranulation, and neutrophil extracellular traps (NETs) as antimicrobial strategies.',
  },
  {
    name: 'Lymphocytes',
    subtitle: 'Mononuclear Leukocytes',
    color: '#06B6D4',
    diameter: '7–15 μm',
    count: '1.0–4.8 × 10³/μL',
    lifespan: 'Days to decades',
    description: 'Small cells with a large, round nucleus and scant cytoplasm. B lymphocytes produce antibodies; T lymphocytes mediate cellular immunity. Natural killer (NK) cells provide innate cytotoxicity against virally infected and neoplastic cells.',
  },
];

const stainingTechniques = [
  {
    name: 'Wright-Giemsa Stain',
    purpose: 'Differential blood cell identification',
    mechanism: 'Methylene blue (basic dye) stains acidic components (nuclei, RNA) blue-purple; eosin (acidic dye) stains basic components (hemoglobin, granules) pink-orange.',
    application: 'Standard peripheral blood smear analysis; malaria parasite detection.',
  },
  {
    name: 'Hematoxylin & Eosin (H&E)',
    purpose: 'General tissue histopathology',
    mechanism: 'Hematoxylin forms a blue-black complex with nucleic acids; eosin binds to cytoplasmic proteins and extracellular matrix, producing pink-red counterstain.',
    application: 'Universal diagnostic stain in surgical pathology; tumor grading and tissue architecture assessment.',
  },
  {
    name: 'Periodic Acid-Schiff (PAS)',
    purpose: 'Glycogen and polysaccharide detection',
    mechanism: 'Periodic acid oxidizes vicinal diols in polysaccharides to aldehydes; Schiff reagent reacts with aldehydes to produce magenta coloration.',
    application: 'Fungal cell wall detection; glycogen storage disease diagnosis; basement membrane visualization.',
  },
];

const HumanCytologySection = () => {
  return (
    <section id="cytology" className="py-24 md:py-32 bg-obsidian scroll-mt-16">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Section header */}
        <div className="flex items-center gap-4 mb-4">
          <div className="w-8 h-8 rounded-lg bg-bio-orange/10 flex items-center justify-center">
            <Activity className="w-4 h-4 text-bio-orange" />
          </div>
          <span className="font-mono text-[11px] text-bio-orange tracking-widest uppercase">
            Section C — Human Cytology & Staining
          </span>
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-3 leading-tight">
          The Canvas of Pathology
        </h2>
        <p className="text-text-secondary text-base max-w-2xl mb-16 leading-relaxed">
          The peripheral blood smear is one of the most information-dense specimens in clinical medicine. A single drop of blood, properly stained and examined, can reveal systemic disease, infection, nutritional deficiency, and malignancy.
        </p>

        {/* Main image + cell types */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 mb-16">
          {/* Image — wider */}
          <div className="lg:col-span-3 relative group">
            <div className="relative rounded-2xl overflow-hidden border border-bio-orange/20 bg-charcoal">
              <img
                src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=1000&q=85&fit=crop"
                alt="Blood smear showing erythrocytes and leukocytes"
                className="w-full aspect-[4/3] object-cover specimen-img"
                style={{ filter: 'saturate(1.3) hue-rotate(-5deg)' }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/50 to-transparent" />
              {/* Scan overlay */}
              <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-bio-orange/40 to-transparent animate-scan" />
              </div>
              {/* Corner labels */}
              <div className="absolute top-3 left-3 flex flex-col gap-1.5">
                <span className="font-mono text-[10px] text-bio-orange bg-bio-orange/15 px-2 py-0.5 rounded-full">
                  1000× Oil Immersion
                </span>
                <span className="font-mono text-[10px] text-text-muted bg-charcoal/80 px-2 py-0.5 rounded-full">
                  Wright-Giemsa Stain
                </span>
              </div>
            </div>
            <div className="mt-3">
              <span className="font-mono text-[10px] text-text-muted tracking-widest uppercase">
                Peripheral Blood Smear — Normal Morphology
              </span>
            </div>
          </div>

          {/* Cell type cards */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            {cellTypes.map(({ name, subtitle, color, diameter, count, lifespan, description }) => (
              <div
                key={name}
                className="rounded-xl border bg-charcoal p-4 flex flex-col gap-3"
                style={{ borderColor: `${color}25` }}
              >
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <div className="text-text-primary font-semibold text-sm">{name}</div>
                    <div className="font-mono text-[10px] tracking-wide" style={{ color: `${color}AA` }}>
                      {subtitle}
                    </div>
                  </div>
                  <div
                    className="w-3 h-3 rounded-full shrink-0 mt-1"
                    style={{ backgroundColor: color, boxShadow: `0 0 8px ${color}60` }}
                  />
                </div>
                <p className="text-text-secondary text-xs leading-relaxed">{description}</p>
                <div className="grid grid-cols-3 gap-2 pt-1 border-t" style={{ borderColor: `${color}15` }}>
                  {[
                    { l: 'Diameter', v: diameter },
                    { l: 'Count', v: count },
                    { l: 'Lifespan', v: lifespan },
                  ].map(({ l, v }) => (
                    <div key={l}>
                      <div className="font-mono text-[9px] text-text-muted tracking-wide uppercase">{l}</div>
                      <div className="font-mono text-[10px] mt-0.5" style={{ color }}>{v}</div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Staining techniques */}
        <div>
          <div className="flex items-center gap-3 mb-6">
            <FlaskConical className="w-4 h-4 text-bio-orange" />
            <h3 className="text-text-primary font-semibold text-lg">Histological Staining Techniques</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {stainingTechniques.map(({ name, purpose, mechanism, application }) => (
              <div
                key={name}
                className="rounded-xl border border-border-dim bg-charcoal p-5 flex flex-col gap-3 hover:border-bio-orange/25 transition-colors duration-200"
              >
                <div>
                  <h4 className="text-text-primary font-semibold text-sm mb-1">{name}</h4>
                  <span className="font-mono text-[10px] text-bio-orange bg-bio-orange/10 px-2 py-0.5 rounded-full">
                    {purpose}
                  </span>
                </div>
                <div>
                  <div className="font-mono text-[10px] text-text-muted tracking-widest uppercase mb-1.5">Mechanism</div>
                  <p className="text-text-secondary text-xs leading-relaxed">{mechanism}</p>
                </div>
                <div className="pt-2 border-t border-border-dim">
                  <div className="font-mono text-[10px] text-text-muted tracking-widest uppercase mb-1.5">Clinical Application</div>
                  <p className="text-text-secondary text-xs leading-relaxed">{application}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HumanCytologySection;
