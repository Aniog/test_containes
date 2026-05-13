import { Microscope } from 'lucide-react';
import PlantHistologySection from '../components/specimens/PlantHistologySection';
import ProtistsSection from '../components/specimens/ProtistsSection';
import CytologySection from '../components/specimens/CytologySection';

const sections = [
  { id: 'plant', label: 'A', title: 'Plant Histology', color: 'emerald' },
  { id: 'protists', label: 'B', title: 'Protists & Micro-Invertebrates', color: 'cyan' },
  { id: 'cytology', label: 'C', title: 'Human Cytology', color: 'orange' },
];

export default function Specimens() {
  return (
    <div className="bg-[#090D16]">
      {/* Page Header */}
      <div className="pt-32 pb-16 px-6 md:px-12 lg:px-16 bg-[#090D16] relative overflow-hidden">
        <div className="absolute inset-0 lab-grid opacity-30" />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex items-center gap-3 mb-5">
            <Microscope className="w-4 h-4 text-emerald-400" />
            <span className="text-emerald-400 font-mono text-xs tracking-widest uppercase">
              Specimen Hub · Knowledge Base
            </span>
          </div>
          <h1 className="text-4xl md:text-6xl font-light tracking-widest uppercase text-slate-100 mb-6">
            The Specimen<br />Repository
          </h1>
          <p className="text-slate-400 text-sm leading-relaxed max-w-2xl mb-10">
            A curated collection of annotated micrographs spanning three principal domains of biological microscopy. Each specimen entry integrates high-fidelity imaging with rigorous scientific commentary, designed for advanced undergraduate and graduate-level study.
          </p>

          {/* Section Navigation */}
          <div className="flex flex-wrap gap-3">
            {sections.map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                className={`flex items-center gap-2 px-4 py-2 border border-slate-800/60 hover:border-${s.color}-500/40 text-slate-400 hover:text-${s.color}-400 text-xs font-mono tracking-widest uppercase transition-all duration-300`}
              >
                <span className={`text-${s.color}-400`}>§{s.label}</span>
                {s.title}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-emerald-500/20 to-transparent" />

      {/* Sections */}
      <PlantHistologySection />
      <div className="h-px bg-gradient-to-r from-transparent via-slate-800/60 to-transparent" />
      <ProtistsSection />
      <div className="h-px bg-gradient-to-r from-transparent via-slate-800/60 to-transparent" />
      <CytologySection />
    </div>
  );
}
