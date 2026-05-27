import { useEffect, useRef, useState } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { ChevronDown, ChevronUp } from 'lucide-react';

const organisms = [
  {
    id: 'bacteria',
    category: 'Bacteria',
    color: 'from-teal-900/40 to-cosmos-blue',
    accent: 'text-teal-400',
    items: [
      {
        id: 'ecoli',
        name: 'Escherichia coli',
        common: 'E. coli',
        habitat: 'Intestinal tract',
        size: '1–2 µm',
        desc: 'One of the most studied organisms in biology. Most strains are harmless and live in the gut, but some cause serious illness. E. coli is a workhorse of genetic research.',
        facts: ['Can divide every 20 minutes', 'Has over 4,000 genes', 'Used to produce insulin'],
      },
      {
        id: 'streptococcus',
        name: 'Streptococcus pyogenes',
        common: 'Strep',
        habitat: 'Throat, skin',
        size: '0.6–1 µm',
        desc: 'A gram-positive bacterium responsible for strep throat and scarlet fever. It forms characteristic chains under the microscope.',
        facts: ['Forms chains of cells', 'Produces over 20 virulence factors', 'Causes 700M infections/year'],
      },
      {
        id: 'cyanobacteria',
        name: 'Anabaena',
        common: 'Cyanobacteria',
        habitat: 'Freshwater, soil',
        size: '4–6 µm',
        desc: 'Ancient photosynthetic bacteria that produced the oxygen in Earth\'s atmosphere. They form long filaments and can fix atmospheric nitrogen.',
        facts: ['Produced Earth\'s oxygen', '2.7 billion years old', 'Can fix nitrogen gas'],
      },
    ],
  },
  {
    id: 'protozoa',
    category: 'Protozoa',
    color: 'from-cyan-900/40 to-cosmos-blue',
    accent: 'text-cyan-400',
    items: [
      {
        id: 'paramecium',
        name: 'Paramecium caudatum',
        common: 'Paramecium',
        habitat: 'Freshwater ponds',
        size: '50–300 µm',
        desc: 'A slipper-shaped ciliate covered in thousands of tiny hair-like cilia used for movement and feeding. One of the most recognizable microorganisms.',
        facts: ['Has two nuclei', 'Covered in ~17,000 cilia', 'Can swim 1mm/second'],
      },
      {
        id: 'amoeba',
        name: 'Amoeba proteus',
        common: 'Amoeba',
        habitat: 'Freshwater, soil',
        size: '250–750 µm',
        desc: 'A shapeshifting single-celled organism that moves and feeds by extending pseudopods. It engulfs prey through a process called phagocytosis.',
        facts: ['No fixed shape', 'Engulfs food whole', 'Reproduces by splitting in two'],
      },
      {
        id: 'radiolarian',
        name: 'Acantharia',
        common: 'Radiolarian',
        habitat: 'Open ocean',
        size: '100–200 µm',
        desc: 'Marine protozoa that build intricate mineral skeletons of strontium sulfate. Their geometric beauty has inspired artists and architects for centuries.',
        facts: ['Skeleton made of strontium sulfate', 'Inspired Ernst Haeckel\'s art', 'Found in all oceans'],
      },
    ],
  },
  {
    id: 'fungi',
    category: 'Fungi',
    color: 'from-purple-900/40 to-cosmos-blue',
    accent: 'text-purple-400',
    items: [
      {
        id: 'penicillium',
        name: 'Penicillium chrysogenum',
        common: 'Penicillin Mold',
        habitat: 'Soil, decaying matter',
        size: '2–4 µm spores',
        desc: 'The mold that changed medicine forever. Alexander Fleming discovered that this fungus produces a substance lethal to bacteria — penicillin.',
        facts: ['Source of penicillin', 'Saved millions of lives', 'Produces blue-green spores'],
      },
      {
        id: 'yeast',
        name: 'Saccharomyces cerevisiae',
        common: "Baker's Yeast",
        habitat: 'Fruit skins, soil',
        size: '5–10 µm',
        desc: 'The workhorse of biotechnology and baking. This single-celled fungus ferments sugars into alcohol and CO₂, making bread rise and beer ferment.',
        facts: ['Used in baking and brewing', 'First eukaryote genome sequenced', 'Shares 31% genes with humans'],
      },
    ],
  },
  {
    id: 'algae',
    category: 'Algae',
    color: 'from-green-900/40 to-cosmos-blue',
    accent: 'text-green-400',
    items: [
      {
        id: 'diatom',
        name: 'Coscinodiscus',
        common: 'Diatom',
        habitat: 'Ocean, freshwater',
        size: '10–200 µm',
        desc: 'Single-celled algae encased in ornate glass shells called frustules. Diatoms produce about 20% of the world\'s oxygen and form the base of aquatic food chains.',
        facts: ['Produce 20% of Earth\'s oxygen', 'Glass shells called frustules', 'Over 100,000 species'],
      },
      {
        id: 'volvox',
        name: 'Volvox globator',
        common: 'Volvox',
        habitat: 'Freshwater ponds',
        size: '100–500 µm',
        desc: 'A colonial green alga that forms hollow spheres of up to 50,000 cells. Volvox is a key organism for studying the evolution of multicellularity.',
        facts: ['Up to 50,000 cells per colony', 'Rolls through water like a ball', 'Key to multicellularity research'],
      },
    ],
  },
];

const OrganismCard = ({ item, accent, sectionTitle, sectionSub }) => {
  const [expanded, setExpanded] = useState(false);
  const cardRef = useRef(null);

  useEffect(() => {
    if (cardRef.current) ImageHelper.loadImages(strkImgConfig, cardRef.current);
  }, []);

  return (
    <div ref={cardRef} className="bg-cosmos-blue rounded-2xl overflow-hidden border border-teal-900/40 hover:border-teal-500/50 transition-all duration-300">
      <div className="relative h-56 overflow-hidden">
        <img
          alt={item.name}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
          data-strk-img-id={`org-card-${item.id}-m4n5o6`}
          data-strk-img={`[org-desc-${item.id}] [org-name-${item.id}] [${sectionSub}] [${sectionTitle}]`}
          data-strk-img-ratio="16x9"
          data-strk-img-width="600"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-cosmos-blue/80 to-transparent" />
        <div className="absolute bottom-3 left-4 right-4 flex justify-between items-end">
          <div>
            <p className={`text-xs font-medium ${accent} mb-0.5`}>{item.common}</p>
            <h3 id={`org-name-${item.id}`} className="font-heading font-bold text-slate-100 text-lg italic">{item.name}</h3>
          </div>
        </div>
      </div>

      <div className="p-5">
        <div className="flex gap-4 mb-3">
          <span className="text-xs text-slate-400">Habitat: <span className="text-slate-300">{item.habitat}</span></span>
          <span className="text-xs text-slate-400">Size: <span className="text-slate-300">{item.size}</span></span>
        </div>
        <p id={`org-desc-${item.id}`} className="text-slate-300 text-sm leading-relaxed">{item.desc}</p>

        <button
          onClick={() => setExpanded(!expanded)}
          className={`mt-4 flex items-center gap-1 text-sm font-medium ${accent} hover:opacity-80 transition-opacity`}
        >
          {expanded ? 'Less' : 'Key Facts'} {expanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
        </button>

        {expanded && (
          <ul className="mt-3 space-y-1.5">
            {item.facts.map((fact, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-slate-300">
                <span className={`mt-1 w-1.5 h-1.5 rounded-full flex-shrink-0 bg-teal-400`} />
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
    <div className="bg-cosmos-dark text-slate-100 min-h-screen">
      {/* Hero Header */}
      <div ref={headerRef} className="relative py-24 px-4 text-center overflow-hidden">
        <div
          className="absolute inset-0 z-0"
          data-strk-bg-id="organisms-hero-bg-p7q8r9"
          data-strk-bg="[organisms-hero-sub] [organisms-hero-title]"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1400"
          style={{ backgroundSize: 'cover', backgroundPosition: 'center' }}
        />
        <div className="absolute inset-0 bg-cosmos-dark/75 z-10" />
        <div className="relative z-20">
          <p className="text-teal-400 font-heading font-medium tracking-widest uppercase text-sm mb-3">Taxonomy</p>
          <h1 id="organisms-hero-title" className="font-heading font-bold text-4xl md:text-6xl text-slate-100 mb-4">
            Microorganisms
          </h1>
          <p id="organisms-hero-sub" className="text-slate-400 max-w-xl mx-auto text-lg">
            Bacteria, protozoa, fungi, and algae — the four kingdoms of the microscopic world.
          </p>
        </div>
      </div>

      {/* Organism Sections */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-16 space-y-20">
        {organisms.map((group) => (
          <section key={group.id}>
            <div className={`inline-flex items-center gap-3 mb-8`}>
              <div className={`w-1 h-8 rounded-full bg-gradient-to-b ${group.color.replace('from-', 'from-').replace('/40', '')}`} />
              <h2 id={`org-section-title-${group.id}`} className={`font-heading font-bold text-2xl md:text-3xl ${group.accent}`}>
                {group.category}
              </h2>
            </div>
            <p id={`org-section-sub-${group.id}`} className="text-slate-400 mb-8 max-w-2xl">
              {group.category === 'Bacteria' && 'Single-celled prokaryotes — the oldest and most abundant life forms on Earth.'}
              {group.category === 'Protozoa' && 'Single-celled eukaryotes with complex internal structures and diverse lifestyles.'}
              {group.category === 'Fungi' && 'Eukaryotic organisms that decompose organic matter and form vital ecological networks.'}
              {group.category === 'Algae' && 'Photosynthetic microorganisms that produce a significant portion of Earth\'s oxygen.'}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {group.items.map((item) => (
                <OrganismCard
                  key={item.id}
                  item={item}
                  accent={group.accent}
                  sectionTitle={`org-section-title-${group.id}`}
                  sectionSub={`org-section-sub-${group.id}`}
                />
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
};

export default Organisms;
