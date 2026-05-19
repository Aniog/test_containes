import { useEffect, useRef, useState } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { ChevronDown, ChevronUp } from 'lucide-react';

const organisms = [
  {
    id: 'org-bacteria',
    category: 'Bacteria',
    color: '#00d4ff',
    items: [
      {
        id: 'b1',
        name: 'Escherichia coli',
        nickname: 'E. coli',
        habitat: 'Intestinal tract',
        size: '1–2 μm',
        desc: 'One of the most studied organisms in biology. While most strains are harmless gut residents, some cause foodborne illness. E. coli is a workhorse of genetic engineering.',
        facts: ['Can divide every 20 minutes', 'Has over 4,000 genes', 'Used to produce insulin'],
      },
      {
        id: 'b2',
        name: 'Streptococcus pneumoniae',
        nickname: 'Pneumococcus',
        habitat: 'Respiratory tract',
        size: '0.5–1.25 μm',
        desc: 'A leading cause of pneumonia and meningitis, this bacterium forms characteristic pairs or chains. It was central to the discovery of DNA as the genetic material.',
        facts: ['Over 90 known serotypes', 'Gram-positive cocci', 'Vaccine-preventable'],
      },
      {
        id: 'b3',
        name: 'Cyanobacteria',
        nickname: 'Blue-green Algae',
        habitat: 'Aquatic environments',
        size: '0.5–40 μm',
        desc: 'Ancient photosynthetic bacteria responsible for producing the oxygen in Earth\'s atmosphere 2.4 billion years ago. They are the ancestors of plant chloroplasts.',
        facts: ['Produce 20–30% of Earth\'s oxygen', 'Can fix atmospheric nitrogen', '3.5 billion years old'],
      },
    ],
  },
  {
    id: 'org-fungi',
    category: 'Fungi',
    color: '#a855f7',
    items: [
      {
        id: 'f1',
        name: 'Penicillium chrysogenum',
        nickname: 'Penicillin Mold',
        habitat: 'Soil, decaying matter',
        size: '2–4 μm spores',
        desc: 'The mold that changed the world. Alexander Fleming\'s accidental discovery of its antibiotic properties in 1928 led to the development of penicillin, saving hundreds of millions of lives.',
        facts: ['Discovered in 1928', 'Produces penicillin antibiotic', 'Blue-green colored colonies'],
      },
      {
        id: 'f2',
        name: 'Saccharomyces cerevisiae',
        nickname: 'Baker\'s Yeast',
        habitat: 'Fruit skins, soil',
        size: '5–10 μm',
        desc: 'Humanity\'s oldest domesticated organism. Used for thousands of years in bread-making and brewing, it is also a key model organism in cell biology research.',
        facts: ['Used for 9,000+ years', 'First eukaryote genome sequenced', 'Produces CO₂ and ethanol'],
      },
      {
        id: 'f3',
        name: 'Aspergillus niger',
        nickname: 'Black Mold',
        habitat: 'Soil, plant debris',
        size: '3–5 μm spores',
        desc: 'A common black mold found worldwide. Despite its reputation, it is industrially important — used to produce citric acid (found in most sodas) and various enzymes.',
        facts: ['Produces citric acid industrially', 'Used in food production', 'Spores are highly resistant'],
      },
    ],
  },
  {
    id: 'org-protozoa',
    category: 'Protozoa',
    color: '#00ff88',
    items: [
      {
        id: 'p1',
        name: 'Paramecium caudatum',
        nickname: 'Slipper Animalcule',
        habitat: 'Freshwater ponds',
        size: '50–330 μm',
        desc: 'A classic model organism in biology classrooms. Covered in thousands of tiny hair-like cilia, it moves with remarkable speed and has two nuclei — a macronucleus and micronucleus.',
        facts: ['Covered in ~17,000 cilia', 'Has two nuclei', 'Reproduces by binary fission'],
      },
      {
        id: 'p2',
        name: 'Plasmodium falciparum',
        nickname: 'Malaria Parasite',
        habitat: 'Human blood, mosquitoes',
        size: '1–2 μm',
        desc: 'The deadliest human parasite, responsible for the most severe form of malaria. It has a complex life cycle involving both human hosts and Anopheles mosquitoes.',
        facts: ['Causes ~600,000 deaths/year', 'Complex 2-host life cycle', 'Evades immune system'],
      },
      {
        id: 'p3',
        name: 'Amoeba proteus',
        nickname: 'Shape-shifter',
        habitat: 'Freshwater, soil',
        size: '250–750 μm',
        desc: 'The iconic shape-shifting microorganism. It moves and feeds by extending pseudopods — temporary projections of its cell body — engulfing bacteria and algae.',
        facts: ['No fixed shape', 'Engulfs prey via phagocytosis', 'Can regenerate from fragments'],
      },
    ],
  },
  {
    id: 'org-micro-animals',
    category: 'Micro-animals',
    color: '#f59e0b',
    items: [
      {
        id: 'm1',
        name: 'Ramazzottius varieornatus',
        nickname: 'Tardigrade / Water Bear',
        habitat: 'Moss, lichens, water',
        size: '0.1–1.5 mm',
        desc: 'The most resilient animal known to science. Tardigrades can survive the vacuum of space, extreme radiation, temperatures from -272°C to 150°C, and pressures 6× greater than the deepest ocean.',
        facts: ['Survive in outer space', 'Can live 30 years without water', 'Over 1,300 known species'],
      },
      {
        id: 'm2',
        name: 'Bdelloid Rotifer',
        nickname: 'Wheel Animalcule',
        habitat: 'Freshwater, soil',
        size: '0.1–0.5 mm',
        desc: 'Remarkable microscopic animals that have survived without sex for over 80 million years. They can survive complete desiccation and have been revived from 24,000-year-old permafrost.',
        facts: ['No males exist in this group', 'Revived from 24,000-year permafrost', 'Can steal genes from other organisms'],
      },
    ],
  },
];

const OrganismCard = ({ organism, color }) => {
  const [expanded, setExpanded] = useState(false);
  const cardRef = useRef(null);

  useEffect(() => {
    if (cardRef.current) ImageHelper.loadImages(strkImgConfig, cardRef.current);
  }, []);

  return (
    <div
      ref={cardRef}
      className="bg-[#0f1f3d] border border-[#00d4ff]/15 rounded-2xl overflow-hidden hover:border-[#00d4ff]/30 transition-all"
    >
      <div className="relative h-56 overflow-hidden">
        <img
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={organism.name}
          className="w-full h-full object-cover"
          data-strk-img-id={`org-img-${organism.id}`}
          data-strk-img={`[org-desc-${organism.id}] [org-name-${organism.id}] microscopy organism`}
          data-strk-img-ratio="16x9"
          data-strk-img-width="700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0f1f3d] via-[#0f1f3d]/20 to-transparent" />
        <div className="absolute bottom-4 left-4 right-4">
          <div className="text-xs font-medium tracking-widest uppercase mb-1" style={{ color }}>
            {organism.nickname}
          </div>
          <h3 id={`org-name-${organism.id}`} className="font-grotesk font-bold text-xl text-[#f0f8ff] italic">
            {organism.name}
          </h3>
        </div>
      </div>

      <div className="p-5">
        <div className="flex gap-4 mb-4">
          <div className="bg-[#050d1a] rounded-lg px-3 py-2 text-center flex-1">
            <div className="text-xs text-slate-500 mb-1">Habitat</div>
            <div className="text-xs text-slate-300 font-medium">{organism.habitat}</div>
          </div>
          <div className="bg-[#050d1a] rounded-lg px-3 py-2 text-center flex-1">
            <div className="text-xs text-slate-500 mb-1">Size</div>
            <div className="text-xs text-slate-300 font-medium">{organism.size}</div>
          </div>
        </div>

        <p id={`org-desc-${organism.id}`} className="text-slate-400 text-sm leading-relaxed mb-4">
          {organism.desc}
        </p>

        <button
          onClick={() => setExpanded(!expanded)}
          className="flex items-center gap-1 text-xs font-medium transition-colors"
          style={{ color }}
        >
          {expanded ? 'Hide' : 'Show'} Key Facts
          {expanded ? <ChevronUp className="w-3 h-3" /> : <ChevronDown className="w-3 h-3" />}
        </button>

        {expanded && (
          <ul className="mt-3 space-y-2">
            {organism.facts.map((fact, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-slate-300">
                <span className="w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0" style={{ backgroundColor: color }} />
                {fact}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

const Organisms = () => {
  const headerRef = useRef(null);

  useEffect(() => {
    if (headerRef.current) ImageHelper.loadImages(strkImgConfig, headerRef.current);
  }, []);

  return (
    <div className="bg-[#050d1a] text-[#f0f8ff] min-h-screen">
      {/* Header */}
      <div ref={headerRef} className="relative pt-28 pb-16 px-4 md:px-8 overflow-hidden">
        <div
          className="absolute inset-0 z-0 opacity-20"
          data-strk-bg-id="organisms-header-bg-x9y8z7"
          data-strk-bg="[organisms-header-title] microscopy microorganisms diversity"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1600"
          style={{ backgroundSize: 'cover', backgroundPosition: 'center' }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#050d1a]/60 to-[#050d1a] z-10" />
        <div className="relative z-20 text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-[#00d4ff]/10 border border-[#00d4ff]/30 rounded-full px-4 py-2 mb-6">
            <span className="text-[#00d4ff] text-sm font-medium tracking-wide">Taxonomy & Biology</span>
          </div>
          <h1 id="organisms-header-title" className="font-grotesk font-bold text-4xl md:text-6xl text-[#f0f8ff] mb-4">
            Microorganisms
          </h1>
          <p className="text-slate-400 text-lg">
            From ancient bacteria to complex protozoa — explore the incredible diversity 
            of microscopic life that dominates our planet.
          </p>
        </div>
      </div>

      {/* Organism Groups */}
      <div className="px-4 md:px-8 pb-24">
        <div className="max-w-7xl mx-auto space-y-20">
          {organisms.map((group) => (
            <div key={group.id}>
              <div className="flex items-center gap-4 mb-8">
                <div className="w-1 h-10 rounded-full" style={{ backgroundColor: group.color }} />
                <h2 className="font-grotesk font-bold text-2xl md:text-3xl text-[#f0f8ff]">
                  {group.category}
                </h2>
                <div className="flex-1 h-px bg-gradient-to-r from-[#00d4ff]/20 to-transparent" />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {group.items.map((org) => (
                  <OrganismCard key={org.id} organism={org} color={group.color} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Organisms;
