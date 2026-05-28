import { useEffect, useRef, useState } from 'react';
import { ArrowRight, ChevronDown, ChevronUp } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const organisms = [
  {
    id: 'bacteria',
    name: 'Bacteria',
    tagline: 'The Ancient Architects of Life',
    color: '#00d4aa',
    bgColor: 'rgba(0,212,170,0.08)',
    borderColor: 'rgba(0,212,170,0.25)',
    description:
      'Bacteria are single-celled prokaryotes that have existed for over 3.5 billion years. They inhabit every environment on Earth — from boiling hydrothermal vents to frozen Antarctic ice. Despite their simplicity, bacteria drive the nitrogen cycle, decompose organic matter, and form the foundation of most food webs.',
    facts: [
      'There are approximately 10³⁰ bacteria on Earth',
      'The human body contains more bacterial cells than human cells',
      'Some bacteria can survive in temperatures above 120°C',
      'Bacteria were the first organisms to produce oxygen via photosynthesis',
    ],
    images: [
      { id: 'bac-img-1', query: 'E coli bacteria microscope colorful fluorescence', ratio: '4x3', width: 600 },
      { id: 'bac-img-2', query: 'staphylococcus bacteria cluster electron microscopy', ratio: '1x1', width: 400 },
      { id: 'bac-img-3', query: 'streptococcus bacteria chain microscope', ratio: '1x1', width: 400 },
      { id: 'bac-img-4', query: 'cyanobacteria blue green algae microscope', ratio: '4x3', width: 600 },
    ],
  },
  {
    id: 'viruses',
    name: 'Viruses',
    tagline: 'Life at the Edge of Existence',
    color: '#7c3aed',
    bgColor: 'rgba(124,58,237,0.08)',
    borderColor: 'rgba(124,58,237,0.25)',
    description:
      'Viruses occupy a strange borderland between living and non-living. They are nanoscale packages of genetic information — DNA or RNA wrapped in a protein coat — that can only replicate inside a host cell. Viruses have shaped the evolution of all life on Earth and make up the most abundant biological entities in the biosphere.',
    facts: [
      'Viruses are 100x smaller than bacteria on average',
      'There are an estimated 10³¹ viruses on Earth',
      '8% of the human genome is derived from ancient viral infections',
      'Viruses exist in every ecosystem, including deep ocean sediments',
    ],
    images: [
      { id: 'vir-img-1', query: 'coronavirus spike protein electron microscopy', ratio: '4x3', width: 600 },
      { id: 'vir-img-2', query: 'bacteriophage virus electron microscopy', ratio: '1x1', width: 400 },
      { id: 'vir-img-3', query: 'influenza virus particle microscopy', ratio: '1x1', width: 400 },
      { id: 'vir-img-4', query: 'HIV virus electron microscopy science', ratio: '4x3', width: 600 },
    ],
  },
  {
    id: 'fungi',
    name: 'Fungi',
    tagline: 'The Hidden Network of the Forest',
    color: '#0ea5e9',
    bgColor: 'rgba(14,165,233,0.08)',
    borderColor: 'rgba(14,165,233,0.25)',
    description:
      'Fungi are neither plants nor animals — they form their own kingdom of life. From microscopic yeasts to vast underground mycelial networks, fungi are the great recyclers of the natural world. They break down dead organic matter, form symbiotic relationships with plant roots, and produce some of the most important medicines ever discovered.',
    facts: [
      'The largest organism on Earth is a fungal network in Oregon covering 2,385 acres',
      'Fungi produce penicillin, the first antibiotic',
      'Mycorrhizal fungi connect up to 90% of plant species',
      'Fungi are more closely related to animals than to plants',
    ],
    images: [
      { id: 'fun-img-1', query: 'penicillium fungal spores microscope colorful', ratio: '4x3', width: 600 },
      { id: 'fun-img-2', query: 'yeast cells budding microscope', ratio: '1x1', width: 400 },
      { id: 'fun-img-3', query: 'aspergillus mold hyphae microscope', ratio: '1x1', width: 400 },
      { id: 'fun-img-4', query: 'mycelium fungal network microscope', ratio: '4x3', width: 600 },
    ],
  },
  {
    id: 'algae',
    name: 'Algae',
    tagline: 'Photosynthetic Powerhouses',
    color: '#10b981',
    bgColor: 'rgba(16,185,129,0.08)',
    borderColor: 'rgba(16,185,129,0.25)',
    description:
      'Algae are photosynthetic organisms that range from single-celled microalgae to giant kelp forests. They produce over half of the world\'s oxygen and form the base of most aquatic food chains. Microalgae are among the most productive organisms on Earth and are being studied as a source of biofuel, food, and medicine.',
    facts: [
      'Algae produce 50-80% of the oxygen in Earth\'s atmosphere',
      'Some algae can double their biomass in just 24 hours',
      'Algae have been used as food for thousands of years',
      'Microalgae can contain up to 50% oil by dry weight',
    ],
    images: [
      { id: 'alg-img-1', query: 'spirulina algae filaments microscope blue green', ratio: '4x3', width: 600 },
      { id: 'alg-img-2', query: 'volvox algae colony microscope green', ratio: '1x1', width: 400 },
      { id: 'alg-img-3', query: 'chlorella algae green microscope', ratio: '1x1', width: 400 },
      { id: 'alg-img-4', query: 'dinoflagellate algae bioluminescence microscope', ratio: '4x3', width: 600 },
    ],
  },
  {
    id: 'protozoa',
    name: 'Protozoa',
    tagline: 'Single-Celled Predators',
    color: '#f59e0b',
    bgColor: 'rgba(245,158,11,0.08)',
    borderColor: 'rgba(245,158,11,0.25)',
    description:
      'Protozoa are single-celled eukaryotes that exhibit animal-like behaviors — they hunt, eat, and move with remarkable sophistication. From the shape-shifting amoeba to the spinning paramecium, protozoa are among the most complex single-celled organisms on Earth. They play crucial roles in nutrient cycling and as prey for larger organisms.',
    facts: [
      'Paramecium can swim at 1mm per second — 10x their body length',
      'Some protozoa can form protective cysts to survive harsh conditions',
      'Foraminifera shells form much of the ocean floor sediment',
      'Malaria is caused by the protozoan Plasmodium',
    ],
    images: [
      { id: 'pro-img-1', query: 'paramecium protozoa microscope cilia', ratio: '4x3', width: 600 },
      { id: 'pro-img-2', query: 'amoeba proteus microscope pseudopod', ratio: '1x1', width: 400 },
      { id: 'pro-img-3', query: 'euglena protozoa flagella microscope', ratio: '1x1', width: 400 },
      { id: 'pro-img-4', query: 'foraminifera shell microscope ocean', ratio: '4x3', width: 600 },
    ],
  },
  {
    id: 'diatoms',
    name: 'Diatoms',
    tagline: 'Microscopic Glass Architects',
    color: '#ec4899',
    bgColor: 'rgba(236,72,153,0.08)',
    borderColor: 'rgba(236,72,153,0.25)',
    description:
      'Diatoms are single-celled algae encased in intricate glass-like shells called frustules, made of silica. Each species has a unique, symmetrical pattern of extraordinary beauty. Diatoms are responsible for about 20% of global photosynthesis and their fossilized shells form diatomaceous earth, used in filtration and as a natural insecticide.',
    facts: [
      'There are over 100,000 known species of diatoms',
      'Diatoms produce 20% of the world\'s oxygen',
      'Diatom frustules are made of amorphous silica (glass)',
      'Fossilized diatoms form deposits up to 900 meters thick',
    ],
    images: [
      { id: 'dia-img-1', query: 'diatom silica shell microscope beautiful colorful', ratio: '4x3', width: 600 },
      { id: 'dia-img-2', query: 'coscinodiscus diatom circular microscope', ratio: '1x1', width: 400 },
      { id: 'dia-img-3', query: 'diatom frustule pattern microscope', ratio: '1x1', width: 400 },
      { id: 'dia-img-4', query: 'diatom collection microscope diverse', ratio: '4x3', width: 600 },
    ],
  },
];

function OrganismCard({ organism, isExpanded, onToggle }) {
  const cardRef = useRef(null);

  useEffect(() => {
    if (isExpanded && cardRef.current) {
      ImageHelper.loadImages(strkImgConfig, cardRef.current);
    }
  }, [isExpanded]);

  return (
    <div
      ref={cardRef}
      className="rounded-2xl border overflow-hidden transition-all duration-300"
      style={{
        backgroundColor: organism.bgColor,
        borderColor: organism.borderColor,
      }}
    >
      {/* Card Header */}
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between p-6 md:p-8 text-left hover:opacity-90 transition-opacity"
      >
        <div className="flex items-center gap-4">
          <div
            className="w-3 h-3 rounded-full flex-shrink-0"
            style={{ backgroundColor: organism.color, boxShadow: `0 0 12px ${organism.color}` }}
          />
          <div>
            <h2 className="text-2xl md:text-3xl font-black text-white">{organism.name}</h2>
            <p className="text-sm font-medium mt-1" style={{ color: organism.color }}>
              {organism.tagline}
            </p>
          </div>
        </div>
        <div
          className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 border"
          style={{ borderColor: organism.borderColor, color: organism.color }}
        >
          {isExpanded ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
        </div>
      </button>

      {/* Expanded Content */}
      {isExpanded && (
        <div className="px-6 md:px-8 pb-8">
          {/* Image Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
            {organism.images.map((img, i) => (
              <div
                key={img.id}
                className={`relative overflow-hidden rounded-xl bg-[#0f1f38] ${
                  i === 0 ? 'col-span-2 row-span-2' : ''
                }`}
              >
                <img
                  data-strk-img-id={img.id}
                  data-strk-img={img.query}
                  data-strk-img-ratio={img.ratio}
                  data-strk-img-width={img.width}
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={img.query}
                  className={`w-full object-cover ${i === 0 ? 'h-56 md:h-64' : 'h-28 md:h-32'}`}
                />
              </div>
            ))}
          </div>

          {/* Description & Facts */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-white font-bold text-lg mb-3">Overview</h3>
              <p className="text-slate-300 leading-relaxed text-sm md:text-base">
                {organism.description}
              </p>
            </div>
            <div>
              <h3 className="text-white font-bold text-lg mb-3">Key Facts</h3>
              <ul className="space-y-3">
                {organism.facts.map((fact, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span
                      className="w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5"
                      style={{ backgroundColor: organism.color, color: '#050d1a' }}
                    >
                      {i + 1}
                    </span>
                    <span className="text-slate-300 text-sm leading-relaxed">{fact}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default function Explore() {
  const [expandedId, setExpandedId] = useState('bacteria');
  const headerRef = useRef(null);

  useEffect(() => {
    if (headerRef.current) ImageHelper.loadImages(strkImgConfig, headerRef.current);
  }, []);

  return (
    <div className="bg-[#050d1a] text-[#f0f9ff] min-h-screen">
      {/* Page Header */}
      <div ref={headerRef} className="relative pt-32 pb-20 overflow-hidden">
        <div
          className="absolute inset-0 z-0"
          data-strk-bg-id="explore-hero-bg-mc002"
          data-strk-bg="[explore-title] [explore-subtitle]"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1600"
          style={{ backgroundSize: 'cover', backgroundPosition: 'center' }}
        />
        <div className="absolute inset-0 z-10 bg-gradient-to-b from-[#050d1a]/70 via-[#050d1a]/60 to-[#050d1a]" />
        <div className="absolute inset-0 z-10 bg-grid-pattern opacity-20" />

        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 bg-[#00d4aa]/10 border border-[#00d4aa]/30 rounded-full px-4 py-2 mb-6">
            <span className="text-[#00d4aa] text-sm font-medium">Scientific Explorer</span>
          </div>
          <h1 id="explore-title" className="text-4xl md:text-6xl font-black text-white mb-4">
            Explore the <span className="gradient-text">Kingdoms</span>
          </h1>
          <p id="explore-subtitle" className="text-slate-400 text-lg max-w-2xl">
            Dive deep into each domain of microbial life. Click any kingdom to expand 
            and discover stunning imagery, biology, and fascinating facts.
          </p>
        </div>
      </div>

      {/* Organism Cards */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24 space-y-4">
        {organisms.map((organism) => (
          <OrganismCard
            key={organism.id}
            organism={organism}
            isExpanded={expandedId === organism.id}
            onToggle={() => setExpandedId(expandedId === organism.id ? null : organism.id)}
          />
        ))}
      </div>

      {/* Bottom CTA */}
      <div className="bg-[#0a1628] border-t border-[#1e3a5f] py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Want to see more?
          </h2>
          <p className="text-slate-400 mb-8">
            Browse our full gallery of microscopic imagery from around the world.
          </p>
          <a
            href="/gallery"
            className="inline-flex items-center gap-2 bg-[#00d4aa] text-[#050d1a] font-bold px-8 py-4 rounded-full hover:bg-[#00bfa0] transition-all hover:scale-105"
          >
            View Gallery <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </div>
    </div>
  );
}
