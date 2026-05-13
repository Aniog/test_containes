import { Activity } from 'lucide-react';

const cellTypes = [
  { name: 'Erythrocyte', abbr: 'RBC', color: 'orange', count: '4.5–5.5 M/μL', diameter: '6–8 μm', stain: 'Eosinophilic (pink)', function: 'O₂ / CO₂ transport via hemoglobin' },
  { name: 'Neutrophil', abbr: 'PMN', color: 'emerald', count: '1.8–7.7 K/μL', diameter: '10–12 μm', stain: 'Multi-lobed nucleus (purple)', function: 'First-line phagocytic defense' },
  { name: 'Lymphocyte', abbr: 'LYM', color: 'purple', count: '1.0–4.8 K/μL', diameter: '7–10 μm', stain: 'Large round nucleus (dark)', function: 'Adaptive immune response' },
  { name: 'Monocyte', abbr: 'MON', color: 'cyan', count: '0.2–0.8 K/μL', diameter: '14–20 μm', stain: 'Kidney-shaped nucleus', function: 'Macrophage precursor, phagocytosis' },
];

const accentMap = {
  orange: { bar: 'bg-orange-400', label: 'text-orange-400', border: 'border-orange-500/30', bg: 'bg-orange-500/10' },
  emerald: { bar: 'bg-emerald-400', label: 'text-emerald-400', border: 'border-emerald-500/30', bg: 'bg-emerald-500/10' },
  purple: { bar: 'bg-purple-400', label: 'text-purple-400', border: 'border-purple-500/30', bg: 'bg-purple-500/10' },
  cyan: { bar: 'bg-cyan-400', label: 'text-cyan-400', border: 'border-cyan-500/30', bg: 'bg-cyan-500/10' },
};

export default function CytologySection() {
  return (
    <section id="cytology" className="py-24 md:py-32 px-6 md:px-12 lg:px-16 bg-[#090D16]">
      <div className="max-w-7xl mx-auto">
        {/* Section Label */}
        <div className="flex items-center gap-3 mb-4">
          <span className="w-8 h-px bg-orange-400" />
          <span className="text-orange-400 font-mono text-xs tracking-widest uppercase">
            Section C · Human Cytology & Staining
          </span>
        </div>
        <h2 className="text-3xl md:text-4xl font-light tracking-widest uppercase text-slate-100 mb-16 max-w-2xl">
          The Canvas of Pathology
        </h2>

        {/* Main Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start mb-16">
          {/* Right: Content (shown first on mobile) */}
          <div className="order-2 lg:order-1 flex flex-col gap-8">
            <div>
              <h3 className="text-slate-100 font-semibold text-xl mb-4 tracking-wide">
                Hematological Staining & Differential Analysis
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-4">
                The peripheral blood smear remains one of the most diagnostically powerful tools in clinical medicine. A thin film of anticoagulated blood, spread across a glass slide and stained with <em className="text-orange-400 not-italic">Wright-Giemsa</em> or <em className="text-orange-400 not-italic">Romanowsky</em> stain, reveals the morphological characteristics of all circulating blood cell populations simultaneously.
              </p>
              <p className="text-slate-400 text-sm leading-relaxed">
                The staining mechanism exploits differential affinity: acidic cellular components (nucleic acids, ribosomes) bind the basic dye <strong className="text-slate-300">hematoxylin</strong> (appearing blue-purple), while basic components (cytoplasmic proteins, hemoglobin) bind the acidic dye <strong className="text-slate-300">eosin</strong> (appearing pink-red). This chromatic contrast allows pathologists to identify cell lineage, maturation stage, and morphological anomalies indicative of disease.
              </p>
            </div>

            {/* Staining Physics */}
            <div className="bg-[#0E1520] border border-slate-800/60 p-5">
              <div className="flex items-center gap-2 mb-4">
                <Activity className="w-4 h-4 text-orange-400" />
                <p className="text-[9px] font-mono tracking-widest uppercase text-orange-400">Optical Physics of Staining</p>
              </div>
              <p className="text-slate-500 text-xs leading-relaxed mb-4">
                Biological stains function as chromophores — molecules that selectively absorb specific wavelengths of visible light (400–700 nm). Hematoxylin absorbs in the red-orange range (λ ≈ 600–650 nm), transmitting blue-violet light. Eosin absorbs in the blue-green range (λ ≈ 490–530 nm), transmitting pink-red light.
              </p>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { stain: 'Hematoxylin', absorbs: '600–650 nm', appears: 'Blue-violet', targets: 'DNA, RNA, ribosomes' },
                  { stain: 'Eosin Y', absorbs: '490–530 nm', appears: 'Pink-red', targets: 'Proteins, cytoplasm' },
                ].map((s) => (
                  <div key={s.stain} className="bg-[#121824] p-3">
                    <p className="text-slate-300 text-xs font-semibold mb-2">{s.stain}</p>
                    <div className="flex flex-col gap-1">
                      <p className="text-[9px] text-slate-600 font-mono">Absorbs: <span className="text-slate-400">{s.absorbs}</span></p>
                      <p className="text-[9px] text-slate-600 font-mono">Appears: <span className="text-slate-400">{s.appears}</span></p>
                      <p className="text-[9px] text-slate-600 font-mono">Targets: <span className="text-slate-400">{s.targets}</span></p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Left: Micrograph */}
          <div className="order-1 lg:order-2 relative">
            <div className="relative border border-slate-800/60 overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1582719471384-894fbb16e074?w=900&q=80"
                alt="Blood smear micrograph showing erythrocytes and leukocytes"
                className="w-full h-[420px] md:h-[480px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#090D16]/60 to-transparent" />

              {/* Metadata */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#090D16] to-transparent p-5">
                <p className="text-slate-200 text-xs font-medium">Peripheral Blood Smear</p>
                <p className="text-slate-500 text-[10px] font-mono mt-0.5">Wright-Giemsa Stain · 1000× Oil Immersion · Brightfield</p>
              </div>

              {/* Corner accents */}
              <div className="absolute top-0 left-0 w-12 h-12 border-t-2 border-l-2 border-orange-500/30" />
              <div className="absolute top-0 right-0 w-12 h-12 border-t-2 border-r-2 border-orange-500/30" />
            </div>
          </div>
        </div>

        {/* Cell Type Reference Cards */}
        <div>
          <p className="text-[9px] font-mono tracking-widest uppercase text-slate-600 mb-6">Blood Cell Reference — Normal Morphology</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {cellTypes.map((cell) => {
              const c = accentMap[cell.color];
              return (
                <div key={cell.name} className={`bg-[#0E1520] border border-slate-800/60 hover:${c.border} transition-colors p-5`}>
                  <div className="flex items-center justify-between mb-4">
                    <span className={`text-[9px] font-mono tracking-widest uppercase ${c.label} ${c.bg} px-2 py-1`}>{cell.abbr}</span>
                    <div className={`w-2 h-2 rounded-full ${c.bar}`} />
                  </div>
                  <h4 className="text-slate-200 font-semibold text-sm mb-3">{cell.name}</h4>
                  <div className="flex flex-col gap-2">
                    {[
                      { label: 'Count', value: cell.count },
                      { label: 'Diameter', value: cell.diameter },
                      { label: 'Stain', value: cell.stain },
                    ].map((spec) => (
                      <div key={spec.label}>
                        <p className="text-[9px] font-mono tracking-widest uppercase text-slate-600">{spec.label}</p>
                        <p className="text-slate-400 text-xs mt-0.5">{spec.value}</p>
                      </div>
                    ))}
                    <div className="pt-2 border-t border-slate-800/60">
                      <p className="text-[9px] font-mono tracking-widest uppercase text-slate-600 mb-1">Function</p>
                      <p className="text-slate-400 text-xs">{cell.function}</p>
                    </div>
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
