import { Microscope } from 'lucide-react';
import SpecimenPlantSection from '../components/specimens/SpecimenPlantSection';
import SpecimenProtistSection from '../components/specimens/SpecimenProtistSection';
import SpecimenHumanSection from '../components/specimens/SpecimenHumanSection';

const sections = [
  { id: 'plant', label: 'Plant Histology', accent: '#10B981' },
  { id: 'protists', label: 'Protists & Micro-Invertebrates', accent: '#06B6D4' },
  { id: 'human', label: 'Human Cytology', accent: '#F97316' },
];

export default function Specimens() {
  return (
    <>
      {/* Page header */}
      <section className="pt-32 pb-16 px-6 bg-charcoal border-b border-subtle">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-3 mb-4">
            <Microscope className="w-5 h-5 text-bio-green" strokeWidth={1.5} />
            <span className="font-mono-lab text-bio-green text-xs tracking-widest uppercase">
              Specimen Hub — Knowledge Base
            </span>
          </div>
          <h1 className="font-grotesk font-bold text-primary-text text-4xl md:text-5xl mb-4">
            Biological Specimens
          </h1>
          <p className="font-inter text-secondary-text text-base max-w-2xl leading-relaxed mb-10">
            A curated compendium of microscopic specimens spanning the kingdoms of life.
            Each entry pairs high-resolution micrography with rigorous structural analysis,
            staining methodology, and biophysical interpretation.
          </p>

          {/* Section navigation */}
          <div className="flex flex-wrap gap-3">
            {sections.map(({ id, label, accent }) => (
              <a
                key={id}
                href={`#${id}`}
                className="flex items-center gap-2 px-4 py-2 border border-subtle rounded-sm text-sm font-inter text-secondary-text hover:text-primary-text transition-all duration-300"
                style={{ '--accent': accent }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = accent;
                  e.currentTarget.style.color = accent;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = '';
                  e.currentTarget.style.color = '';
                }}
              >
                <span
                  className="w-2 h-2 rounded-full"
                  style={{ backgroundColor: accent }}
                />
                {label}
              </a>
            ))}
          </div>
        </div>
      </section>

      <SpecimenPlantSection />
      <SpecimenProtistSection />
      <SpecimenHumanSection />
    </>
  );
}
