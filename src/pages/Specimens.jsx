import { Link } from 'react-router-dom';
import { Microscope, ChevronRight } from 'lucide-react';
import PlantHistologySection from '../components/specimens/PlantHistologySection';
import ProtistsSection from '../components/specimens/ProtistsSection';
import HumanCytologySection from '../components/specimens/HumanCytologySection';

const sectionNav = [
  { id: 'plant', label: 'Plant Histology', color: '#10B981' },
  { id: 'protists', label: 'Protists & Micro-Invertebrates', color: '#06B6D4' },
  { id: 'cytology', label: 'Human Cytology', color: '#F97316' },
];

const Specimens = () => {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <main className="pt-16">
      {/* Page header */}
      <div className="bg-charcoal border-b border-border-dim">
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-16 md:py-20">
          <div className="flex items-center gap-2 text-text-muted text-xs font-mono mb-6">
            <Link to="/" className="hover:text-bio-green transition-colors">Home</Link>
            <ChevronRight className="w-3 h-3" />
            <span className="text-text-secondary">Specimen Hub</span>
          </div>
          <div className="flex items-center gap-4 mb-4">
            <Microscope className="w-6 h-6 text-bio-green" />
            <span className="font-mono text-[11px] text-bio-green tracking-widest uppercase">
              Knowledge Base
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-text-primary mb-4 leading-tight">
            Specimen Hub
          </h1>
          <p className="text-text-secondary text-lg max-w-2xl leading-relaxed font-light">
            A curated compendium of annotated micrographs, structural analyses, and biological data across three domains of microscopic life.
          </p>

          {/* Section quick-nav */}
          <div className="flex flex-wrap gap-3 mt-8">
            {sectionNav.map(({ id, label, color }) => (
              <button
                key={id}
                onClick={() => scrollTo(id)}
                className="flex items-center gap-2 px-4 py-2 rounded-full border text-sm font-medium transition-all duration-200 hover:opacity-90"
                style={{
                  borderColor: `${color}30`,
                  color,
                  backgroundColor: `${color}08`,
                }}
              >
                <span
                  className="w-1.5 h-1.5 rounded-full"
                  style={{ backgroundColor: color }}
                />
                {label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Sections */}
      <PlantHistologySection />
      <ProtistsSection />
      <HumanCytologySection />
    </main>
  );
};

export default Specimens;
