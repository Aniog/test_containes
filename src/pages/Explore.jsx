import { useEffect, useRef, useState } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { ChevronDown, ChevronUp } from 'lucide-react';

const categories = [
  {
    id: 'bacteria',
    name: 'Bacteria',
    color: 'cosmos-cyan',
    colorHex: '#00e5ff',
    desc: 'Single-celled prokaryotes — the most abundant life forms on Earth, found in every environment imaginable.',
    organisms: [
      { id: 'b1', name: 'Escherichia coli', fact: 'Rod-shaped bacterium, 2μm long, essential for gut health and biotechnology.' },
      { id: 'b2', name: 'Streptococcus', fact: 'Chain-forming cocci responsible for strep throat and many other infections.' },
      { id: 'b3', name: 'Cyanobacteria', fact: 'Photosynthetic bacteria that produced Earth\'s first oxygen 2.7 billion years ago.' },
      { id: 'b4', name: 'Spirochetes', fact: 'Spiral-shaped bacteria with unique internal flagella for corkscrew movement.' },
    ],
  },
  {
    id: 'protozoa',
    name: 'Protozoa',
    color: 'cosmos-violet',
    colorHex: '#b57bee',
    desc: 'Diverse single-celled eukaryotes with complex internal structures and fascinating behaviors.',
    organisms: [
      { id: 'p1', name: 'Paramecium', fact: 'Covered in thousands of cilia, it can reverse direction in milliseconds.' },
      { id: 'p2', name: 'Amoeba', fact: 'Shapeshifting predator that engulfs prey using pseudopods.' },
      { id: 'p3', name: 'Radiolaria', fact: 'Marine protozoa with intricate mineral skeletons of silica or strontium sulfate.' },
      { id: 'p4', name: 'Foraminifera', fact: 'Their shells form limestone deposits and are used to date geological strata.' },
    ],
  },
  {
    id: 'algae',
    name: 'Algae & Diatoms',
    color: 'cosmos-green',
    colorHex: '#39ff14',
    desc: 'Photosynthetic microorganisms responsible for producing over 50% of Earth\'s oxygen.',
    organisms: [
      { id: 'a1', name: 'Diatoms', fact: 'Each species has a unique glass shell (frustule) with nanoscale precision.' },
      { id: 'a2', name: 'Volvox', fact: 'Colonial green algae forming hollow spheres of up to 50,000 cells.' },
      { id: 'a3', name: 'Spirogyra', fact: 'Filamentous algae with spiral chloroplasts, found in freshwater ponds.' },
      { id: 'a4', name: 'Dinoflagellates', fact: 'Cause bioluminescent ocean glows and some of the most toxic red tides.' },
    ],
  },
  {
    id: 'micro-animals',
    name: 'Micro-Animals',
    color: 'cosmos-cyan',
    colorHex: '#00e5ff',
    desc: 'Tiny multicellular animals with complex body plans, invisible to the naked eye.',
    organisms: [
      { id: 'm1', name: 'Tardigrade', fact: 'Can survive in space, extreme radiation, and temperatures from -272°C to 150°C.' },
      { id: 'm2', name: 'Rotifer', fact: 'Named for their spinning crown of cilia that creates feeding currents.' },
      { id: 'm3', name: 'Nematode', fact: 'Over 1 million nematodes live in a single square meter of soil.' },
      { id: 'm4', name: 'Copepod', fact: 'The most abundant multicellular animals on Earth, forming the base of ocean food webs.' },
    ],
  },
  {
    id: 'fungi',
    name: 'Fungi & Spores',
    color: 'cosmos-violet',
    colorHex: '#b57bee',
    desc: 'Microscopic fungi and their spores — nature\'s recyclers and some of its most beautiful structures.',
    organisms: [
      { id: 'f1', name: 'Yeast', fact: 'Single-celled fungi that reproduce by budding, essential for bread and fermentation.' },
      { id: 'f2', name: 'Penicillium', fact: 'The mold that gave us penicillin, the first antibiotic, saving millions of lives.' },
      { id: 'f3', name: 'Aspergillus', fact: 'Produces spores with intricate radial symmetry visible under microscopy.' },
      { id: 'f4', name: 'Myxomycetes', fact: 'Slime molds that can solve mazes and optimize network paths.' },
    ],
  },
  {
    id: 'pollen',
    name: 'Pollen & Spores',
    color: 'cosmos-green',
    colorHex: '#39ff14',
    desc: 'Plant reproductive structures with extraordinary surface textures and geometric forms.',
    organisms: [
      { id: 'pl1', name: 'Sunflower Pollen', fact: 'Covered in spiky projections that help it cling to pollinators.' },
      { id: 'pl2', name: 'Pine Pollen', fact: 'Has two air sacs allowing it to travel hundreds of kilometers on wind.' },
      { id: 'pl3', name: 'Fern Spore', fact: 'Ferns reproduce via spores that can remain dormant for decades.' },
      { id: 'pl4', name: 'Moss Capsule', fact: 'Releases spores through a complex valve system triggered by humidity.' },
    ],
  },
];

function CategoryCard({ cat }) {
  const cardRef = useRef(null);
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    if (cardRef.current) {
      ImageHelper.loadImages(strkImgConfig, cardRef.current);
    }
  }, []);

  return (
    <div
      ref={cardRef}
      className="bg-cosmos-card border border-cosmos-border rounded-2xl overflow-hidden hover:border-opacity-60 transition-all duration-300"
      style={{ '--accent': cat.colorHex }}
    >
      {/* Category hero image */}
      <div className="relative h-56 overflow-hidden">
        <img
          alt={cat.name}
          className="w-full h-full object-cover"
          data-strk-img-id={`cat-hero-${cat.id}`}
          data-strk-img={`[cat-desc-${cat.id}] [cat-name-${cat.id}]`}
          data-strk-img-ratio="16x9"
          data-strk-img-width="700"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-cosmos-card to-transparent" />
        <div className="absolute bottom-4 left-5">
          <p id={`cat-name-${cat.id}`} className="font-heading font-bold text-2xl text-cosmos-text">
            {cat.name}
          </p>
        </div>
      </div>

      <div className="p-5">
        <p id={`cat-desc-${cat.id}`} className="font-body text-cosmos-muted text-sm leading-relaxed mb-4">
          {cat.desc}
        </p>

        {/* Organism grid */}
        <div className="grid grid-cols-2 gap-3 mb-4">
          {cat.organisms.slice(0, expanded ? cat.organisms.length : 2).map((org) => (
            <div
              key={org.id}
              className="relative bg-cosmos-bg/60 border border-cosmos-border rounded-xl overflow-hidden group"
            >
              <div className="aspect-square overflow-hidden">
                <img
                  alt={org.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  data-strk-img-id={`org-img-${org.id}`}
                  data-strk-img={`[org-fact-${org.id}] [org-name-${org.id}] [cat-name-${cat.id}]`}
                  data-strk-img-ratio="1x1"
                  data-strk-img-width="300"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                />
              </div>
              <div className="p-2.5">
                <p id={`org-name-${org.id}`} className="font-heading font-semibold text-cosmos-text text-xs mb-1">
                  {org.name}
                </p>
                <p id={`org-fact-${org.id}`} className="font-body text-cosmos-muted text-xs leading-snug line-clamp-2">
                  {org.fact}
                </p>
              </div>
            </div>
          ))}
        </div>

        <button
          onClick={() => setExpanded((e) => !e)}
          className="flex items-center gap-1.5 text-xs font-body font-medium transition-colors duration-200"
          style={{ color: cat.colorHex }}
        >
          {expanded ? (
            <><ChevronUp className="w-3.5 h-3.5" /> Show less</>
          ) : (
            <><ChevronDown className="w-3.5 h-3.5" /> Show all {cat.organisms.length} organisms</>
          )}
        </button>
      </div>
    </div>
  );
}

export default function Explore() {
  const headerRef = useRef(null);

  useEffect(() => {
    if (headerRef.current) ImageHelper.loadImages(strkImgConfig, headerRef.current);
  }, []);

  return (
    <div className="bg-cosmos-bg min-h-screen pt-24 pb-20">
      {/* Header with background */}
      <div ref={headerRef} className="relative py-20 mb-16 overflow-hidden">
        <div
          className="absolute inset-0"
          data-strk-bg-id="explore-hero-bg"
          data-strk-bg="[explore-subtitle] [explore-title]"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1400"
          style={{ backgroundSize: 'cover', backgroundPosition: 'center' }}
        />
        <div className="absolute inset-0 bg-cosmos-bg/75" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <p id="explore-subtitle" className="font-body text-cosmos-cyan text-xs font-semibold tracking-[0.3em] uppercase mb-3">
            Taxonomy of the Invisible
          </p>
          <h1 id="explore-title" className="font-heading font-bold text-5xl md:text-6xl text-cosmos-text mb-4">
            Explore Organisms
          </h1>
          <div className="w-16 h-0.5 bg-cosmos-cyan mx-auto mb-6" />
          <p className="font-body text-cosmos-muted text-lg max-w-2xl mx-auto">
            Discover the major kingdoms of microscopic life — from ancient bacteria to complex micro-animals — each with their own extraordinary adaptations.
          </p>
        </div>
      </div>

      {/* Category grid */}
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {categories.map((cat) => (
            <CategoryCard key={cat.id} cat={cat} />
          ))}
        </div>
      </div>
    </div>
  );
}
