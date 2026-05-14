import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const cellTypes = [
  {
    name: 'Erythrocytes',
    subtitle: 'Red Blood Cells',
    color: 'text-red-400',
    bg: 'bg-red-400/10',
    border: 'border-red-400/20',
    stain: 'Eosin (pink)',
    desc: 'Biconcave discs ~7–8 μm diameter. Lack nucleus and organelles — maximizing hemoglobin content. The concave shape increases surface area for O₂/CO₂ exchange.',
  },
  {
    name: 'Neutrophils',
    subtitle: 'Polymorphonuclear Leukocytes',
    color: 'text-phosphor',
    bg: 'bg-phosphor/10',
    border: 'border-phosphor/20',
    stain: 'Hematoxylin (purple nucleus)',
    desc: 'Multi-lobed nucleus (2–5 lobes) connected by thin chromatin strands. First responders to bacterial infection; phagocytose pathogens and release antimicrobial enzymes.',
  },
  {
    name: 'Lymphocytes',
    subtitle: 'Mononuclear Leukocytes',
    color: 'text-cyan-400',
    bg: 'bg-cyan-400/10',
    border: 'border-cyan-400/20',
    stain: 'Hematoxylin (dark round nucleus)',
    desc: 'Large, round nucleus occupying most of the cell. B-lymphocytes produce antibodies; T-lymphocytes coordinate adaptive immune responses and directly kill infected cells.',
  },
];

const stainingSteps = [
  { step: '01', label: 'Fixation', desc: 'Methanol fixes cells to slide, preserving morphology' },
  { step: '02', label: 'Hematoxylin', desc: 'Basic dye binds acidic nuclei → blue/purple' },
  { step: '03', label: 'Differentiation', desc: 'Acid alcohol removes excess stain' },
  { step: '04', label: 'Eosin', desc: 'Acidic dye binds basic cytoplasm → pink/red' },
  { step: '05', label: 'Dehydration', desc: 'Graded alcohols remove water for mounting' },
];

export default function SpecimenCytology() {
  const containerRef = useRef(null);

  useEffect(() => {
    if (containerRef.current) {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    }
  }, []);

  return (
    <section id="cytology" ref={containerRef} className="py-28 px-6 lg:px-8 bg-obsidian">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="flex items-center gap-3 mb-4">
          <div className="w-8 h-px bg-phosphor" />
          <span className="font-mono text-xs tracking-widest uppercase text-phosphor">
            Section C — Human Cytology & Staining
          </span>
        </div>
        <h2 className="font-grotesk font-bold text-4xl md:text-5xl text-slate-100 leading-tight mb-16">
          The Canvas of Pathology
        </h2>

        {/* Main split */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 items-start mb-16">
          {/* Image — 3 cols */}
          <div className="lg:col-span-3">
            <div className="relative rounded-2xl overflow-hidden border border-subtle">
              <img
                alt="Blood smear micrograph showing erythrocytes and leukocytes"
                className="w-full h-80 lg:h-[460px] object-cover"
                data-strk-img-id="blood-smear-mc012"
                data-strk-img="[blood-img-title] [blood-section-label] blood smear erythrocytes neutrophils lymphocytes H&E stain microscope 400x"
                data-strk-img-ratio="4x3"
                data-strk-img-width="900"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-charcoal/95 to-transparent p-5">
                <div className="flex items-center justify-between">
                  <div>
                    <div
                      id="blood-img-title"
                      className="font-grotesk font-semibold text-slate-100 text-sm"
                    >
                      Peripheral Blood Smear
                    </div>
                    <div
                      id="blood-section-label"
                      className="font-mono text-xs text-slate-500 mt-0.5"
                    >
                      Hematoxylin & Eosin (H&E) Stain
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-xs text-phosphor bg-phosphor/10 px-2 py-1 rounded border border-phosphor/20">
                      400×
                    </span>
                    <span className="font-mono text-xs text-cyan-400 bg-cyan-400/10 px-2 py-1 rounded border border-cyan-400/20">
                      Brightfield
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Cell type legend */}
            <div className="mt-4 grid grid-cols-3 gap-3">
              {cellTypes.map((cell) => (
                <div
                  key={cell.name}
                  className={`p-3 rounded-xl border ${cell.border} ${cell.bg} text-center`}
                >
                  <div className={`font-mono text-xs font-medium ${cell.color} mb-0.5`}>{cell.name}</div>
                  <div className="font-inter text-xs text-slate-500">{cell.subtitle}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Text — 2 cols */}
          <div className="lg:col-span-2 space-y-6">
            <div>
              <h3 className="font-grotesk font-semibold text-2xl text-slate-100 mb-4">
                Staining Techniques & Light Wavelength Analysis
              </h3>
              <p className="font-inter text-slate-400 text-sm leading-relaxed">
                The H&E stain is the cornerstone of histopathology. By exploiting the differential affinity of cellular components for acidic and basic dyes, pathologists can identify cell types, detect anomalies, and diagnose disease — all from a thin slice of tissue mounted on glass.
              </p>
            </div>

            {/* Cell type details */}
            {cellTypes.map((cell) => (
              <div
                key={cell.name}
                className={`p-4 rounded-xl bg-charcoal border ${cell.border}`}
              >
                <div className="flex items-center justify-between mb-2">
                  <div className={`font-grotesk font-semibold text-sm ${cell.color}`}>{cell.name}</div>
                  <span className={`font-mono text-xs ${cell.color} ${cell.bg} px-2 py-0.5 rounded`}>
                    {cell.stain}
                  </span>
                </div>
                <p className="font-inter text-slate-400 text-xs leading-relaxed">{cell.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* H&E Staining Protocol */}
        <div className="p-8 rounded-2xl bg-charcoal border border-subtle">
          <div className="font-mono text-xs text-phosphor tracking-widest uppercase mb-6">
            H&E Staining Protocol — Step by Step
          </div>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {stainingSteps.map((s, i) => (
              <div key={s.step} className="relative">
                {i < stainingSteps.length - 1 && (
                  <div className="hidden md:block absolute top-4 left-full w-full h-px bg-subtle z-0" />
                )}
                <div className="relative z-10">
                  <div className="font-mono text-xs text-slate-600 mb-1">{s.step}</div>
                  <div className="font-grotesk font-semibold text-sm text-slate-200 mb-1">{s.label}</div>
                  <p className="font-inter text-xs text-slate-500 leading-relaxed">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
