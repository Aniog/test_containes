import { useState } from 'react';
import OrganismCard from '@/components/organisms/OrganismCard';

const organisms = [
  {
    id: 'org-ecoli',
    name: 'E. coli',
    scientific: 'Escherichia coli',
    kingdom: 'Bacteria',
    description: 'One of the most studied organisms on Earth. Most strains are harmless gut residents, but some cause severe illness. A cornerstone of genetic research.',
    habitat: 'Intestines',
    size: '1–2 µm',
    danger: 'Variable',
    dangerColor: 'bg-yellow-500/20 text-yellow-300',
    imgId: 'org-img-ecoli01',
  },
  {
    id: 'org-staph',
    name: 'Staphylococcus',
    scientific: 'Staphylococcus aureus',
    kingdom: 'Bacteria',
    description: 'Grape-like clusters of gram-positive bacteria. Common skin resident that can cause serious infections when it enters the bloodstream.',
    habitat: 'Skin, Nose',
    size: '0.5–1.5 µm',
    danger: 'Pathogenic',
    dangerColor: 'bg-red-500/20 text-red-300',
    imgId: 'org-img-staph01',
  },
  {
    id: 'org-cyano',
    name: 'Cyanobacteria',
    scientific: 'Anabaena sp.',
    kingdom: 'Bacteria',
    description: 'Ancient photosynthetic bacteria responsible for oxygenating Earth\'s atmosphere 2.4 billion years ago. Still produce 20% of Earth\'s oxygen today.',
    habitat: 'Freshwater, Ocean',
    size: '1–10 µm',
    danger: 'Beneficial',
    dangerColor: 'bg-emerald-500/20 text-emerald-300',
    imgId: 'org-img-cyano01',
  },
  {
    id: 'org-influenza',
    name: 'Influenza Virus',
    scientific: 'Influenzavirus A',
    kingdom: 'Viruses',
    description: 'Enveloped RNA virus with characteristic hemagglutinin and neuraminidase spikes. Causes seasonal flu epidemics and occasional pandemics worldwide.',
    habitat: 'Respiratory tract',
    size: '80–120 nm',
    danger: 'Pathogenic',
    dangerColor: 'bg-red-500/20 text-red-300',
    imgId: 'org-img-flu01',
  },
  {
    id: 'org-phage',
    name: 'Bacteriophage T4',
    scientific: 'T4 phage',
    kingdom: 'Viruses',
    description: 'A virus that infects bacteria. With its lunar-lander shape, T4 is one of the most complex viruses known and a key tool in molecular biology.',
    habitat: 'Bacteria hosts',
    size: '200 nm',
    danger: 'Neutral',
    dangerColor: 'bg-blue-500/20 text-blue-300',
    imgId: 'org-img-phage01',
  },
  {
    id: 'org-aspergillus',
    name: 'Aspergillus',
    scientific: 'Aspergillus niger',
    kingdom: 'Fungi',
    description: 'A mold found everywhere in the environment. Used industrially to produce citric acid and enzymes, but can cause lung infections in immunocompromised individuals.',
    habitat: 'Soil, Air',
    size: '2–3 µm spores',
    danger: 'Variable',
    dangerColor: 'bg-yellow-500/20 text-yellow-300',
    imgId: 'org-img-asp01',
  },
  {
    id: 'org-yeast',
    name: 'Baker\'s Yeast',
    scientific: 'Saccharomyces cerevisiae',
    kingdom: 'Fungi',
    description: 'The workhorse of biotechnology. Used for millennia in baking and brewing, and now a key model organism for studying eukaryotic cell biology.',
    habitat: 'Soil, Fruit',
    size: '5–10 µm',
    danger: 'Beneficial',
    dangerColor: 'bg-emerald-500/20 text-emerald-300',
    imgId: 'org-img-yeast01',
  },
  {
    id: 'org-paramecium',
    name: 'Paramecium',
    scientific: 'Paramecium caudatum',
    kingdom: 'Protozoa',
    description: 'A slipper-shaped ciliate that moves by beating thousands of tiny hair-like cilia. A classic subject of microscopy and a predator of bacteria.',
    habitat: 'Freshwater ponds',
    size: '50–330 µm',
    danger: 'Neutral',
    dangerColor: 'bg-blue-500/20 text-blue-300',
    imgId: 'org-img-param01',
  },
  {
    id: 'org-diatom',
    name: 'Diatom',
    scientific: 'Coscinodiscus sp.',
    kingdom: 'Algae',
    description: 'Single-celled algae encased in ornate glass (silica) shells called frustules. Responsible for 20–25% of global oxygen production and a major carbon sink.',
    habitat: 'Ocean, Freshwater',
    size: '2–500 µm',
    danger: 'Beneficial',
    dangerColor: 'bg-emerald-500/20 text-emerald-300',
    imgId: 'org-img-diatom01',
  },
  {
    id: 'org-tardigrade',
    name: 'Tardigrade',
    scientific: 'Ramazzottius varieornatus',
    kingdom: 'Extremophiles',
    description: 'The toughest animal on Earth. Tardigrades survive vacuum, radiation, extreme temperatures, and even the void of space by entering cryptobiosis.',
    habitat: 'Everywhere',
    size: '0.1–1.5 mm',
    danger: 'Neutral',
    dangerColor: 'bg-blue-500/20 text-blue-300',
    imgId: 'org-img-tardi01',
  },
  {
    id: 'org-radiolaria',
    name: 'Radiolaria',
    scientific: 'Acantharia sp.',
    kingdom: 'Protozoa',
    description: 'Marine protozoa that produce intricate mineral skeletons of strontium sulfate. Their geometric beauty has inspired architects and artists for centuries.',
    habitat: 'Open ocean',
    size: '0.1–2 mm',
    danger: 'Neutral',
    dangerColor: 'bg-blue-500/20 text-blue-300',
    imgId: 'org-img-radio01',
  },
  {
    id: 'org-slime',
    name: 'Slime Mold',
    scientific: 'Physarum polycephalum',
    kingdom: 'Protozoa',
    description: 'Neither plant, animal, nor fungus. Slime molds can solve mazes, find optimal paths, and even recreate human transport networks — without a brain.',
    habitat: 'Forest floors',
    size: 'Up to 1 m',
    danger: 'Neutral',
    dangerColor: 'bg-blue-500/20 text-blue-300',
    imgId: 'org-img-slime01',
  },
];

const kingdoms = ['All', 'Bacteria', 'Viruses', 'Fungi', 'Protozoa', 'Algae', 'Extremophiles'];

const OrganismsList = () => {
  const [activeKingdom, setActiveKingdom] = useState('All');

  const filtered = activeKingdom === 'All'
    ? organisms
    : organisms.filter((o) => o.kingdom === activeKingdom);

  return (
    <div>
      <div className="flex flex-wrap gap-3 justify-center mb-10">
        {kingdoms.map((k) => (
          <button
            key={k}
            onClick={() => setActiveKingdom(k)}
            className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
              activeKingdom === k
                ? 'bg-teal-500 text-gray-950'
                : 'bg-gray-800 text-gray-300 hover:bg-gray-700 border border-gray-700'
            }`}
          >
            {k}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filtered.map((organism) => (
          <OrganismCard key={organism.id} organism={organism} />
        ))}
      </div>
    </div>
  );
};

export default OrganismsList;
