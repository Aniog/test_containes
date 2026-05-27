import { useEffect, useRef, useState } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const categories = [
  {
    id: 'bacteria',
    label: 'Bacteria',
    color: 'text-cyan-400',
    borderColor: 'border-cyan-400/40',
    bgColor: 'bg-cyan-400/10',
  },
  {
    id: 'fungi',
    label: 'Fungi',
    color: 'text-purple-400',
    borderColor: 'border-purple-400/40',
    bgColor: 'bg-purple-400/10',
  },
  {
    id: 'algae',
    label: 'Algae',
    color: 'text-green-400',
    borderColor: 'border-green-400/40',
    bgColor: 'bg-green-400/10',
  },
  {
    id: 'protozoa',
    label: 'Protozoa',
    color: 'text-yellow-400',
    borderColor: 'border-yellow-400/40',
    bgColor: 'bg-yellow-400/10',
  },
  {
    id: 'viruses',
    label: 'Viruses',
    color: 'text-red-400',
    borderColor: 'border-red-400/40',
    bgColor: 'bg-red-400/10',
  },
  {
    id: 'archaea',
    label: 'Archaea',
    color: 'text-orange-400',
    borderColor: 'border-orange-400/40',
    bgColor: 'bg-orange-400/10',
  },
];

const organisms = [
  {
    id: 'ecoli',
    category: 'bacteria',
    name: 'Escherichia coli',
    commonName: 'E. coli',
    habitat: 'Intestinal tract',
    size: '1–2 µm',
    desc: 'One of the most studied organisms in biology. Most strains are harmless and are part of the normal gut flora, but some can cause illness.',
    fact: 'E. coli can divide every 20 minutes under ideal conditions.',
  },
  {
    id: 'streptococcus',
    category: 'bacteria',
    name: 'Streptococcus pyogenes',
    commonName: 'Strep',
    habitat: 'Human throat & skin',
    size: '0.6–1 µm',
    desc: 'Gram-positive cocci that form chains. Responsible for strep throat and scarlet fever, but also studied for its fascinating chain-forming behavior.',
    fact: 'Forms distinctive bead-like chains visible under light microscopy.',
  },
  {
    id: 'cyanobacteria',
    category: 'bacteria',
    name: 'Anabaena',
    commonName: 'Cyanobacteria',
    habitat: 'Freshwater & soil',
    size: '4–7 µm',
    desc: 'Ancient photosynthetic bacteria responsible for producing much of Earth\'s early oxygen. They form beautiful filamentous chains.',
    fact: 'Cyanobacteria are responsible for the Great Oxidation Event 2.4 billion years ago.',
  },
  {
    id: 'aspergillus',
    category: 'fungi',
    name: 'Aspergillus niger',
    commonName: 'Black Mold',
    habitat: 'Soil & decaying matter',
    size: '2–3.5 µm spores',
    desc: 'A common mold with striking black spore heads. Used industrially to produce citric acid and various enzymes.',
    fact: 'Produces over 1 million spores per day from a single colony.',
  },
  {
    id: 'penicillium',
    category: 'fungi',
    name: 'Penicillium chrysogenum',
    commonName: 'Penicillin Mold',
    habitat: 'Soil & food',
    size: '2–4 µm',
    desc: 'The source of the world\'s first antibiotic. Its brush-like spore structures (penicilli) are iconic in microbiology.',
    fact: 'Alexander Fleming discovered penicillin from this mold in 1928.',
  },
  {
    id: 'saccharomyces',
    category: 'fungi',
    name: 'Saccharomyces cerevisiae',
    commonName: 'Baker\'s Yeast',
    habitat: 'Fruit skins & soil',
    size: '5–10 µm',
    desc: 'The workhorse of biotechnology. Used in baking, brewing, and as a model organism for genetics research.',
    fact: 'Shares about 31% of its genes with humans.',
  },
  {
    id: 'diatom',
    category: 'algae',
    name: 'Pinnularia',
    commonName: 'Diatom',
    habitat: 'Freshwater & marine',
    size: '20–200 µm',
    desc: 'Single-celled algae with intricate silica cell walls called frustules. Each species has a unique geometric pattern.',
    fact: 'Diatoms produce about 20% of the world\'s oxygen.',
  },
  {
    id: 'volvox',
    category: 'algae',
    name: 'Volvox globator',
    commonName: 'Volvox',
    habitat: 'Freshwater ponds',
    size: '100–500 µm',
    desc: 'A colonial green alga that forms hollow spheres of up to 50,000 cells. Daughter colonies develop inside the parent sphere.',
    fact: 'One of the earliest examples of cellular differentiation in evolution.',
  },
  {
    id: 'spirogyra',
    category: 'algae',
    name: 'Spirogyra',
    commonName: 'Water Silk',
    habitat: 'Freshwater',
    size: '10–100 µm wide',
    desc: 'Famous for its beautiful spiral chloroplasts that wind through each cell like a green ribbon. Forms long filamentous chains.',
    fact: 'The spiral chloroplasts can span the entire length of a cell.',
  },
  {
    id: 'paramecium',
    category: 'protozoa',
    name: 'Paramecium caudatum',
    commonName: 'Paramecium',
    habitat: 'Freshwater',
    size: '50–330 µm',
    desc: 'A slipper-shaped ciliate covered in thousands of tiny hair-like cilia used for movement and feeding. A classic model organism.',
    fact: 'Can swim at 1mm per second — equivalent to a human swimming at 500 mph.',
  },
  {
    id: 'amoeba',
    category: 'protozoa',
    name: 'Amoeba proteus',
    commonName: 'Amoeba',
    habitat: 'Freshwater & soil',
    size: '250–750 µm',
    desc: 'Moves and feeds by extending pseudopods — temporary projections of cytoplasm. A shape-shifting predator of the micro-world.',
    fact: 'Can engulf prey larger than itself using phagocytosis.',
  },
  {
    id: 'euglena',
    category: 'protozoa',
    name: 'Euglena gracilis',
    commonName: 'Euglena',
    habitat: 'Freshwater',
    size: '15–500 µm',
    desc: 'A fascinating organism that blurs the line between plant and animal — it can photosynthesize in light and hunt in darkness.',
    fact: 'Has a light-sensitive eyespot that guides it toward sunlight.',
  },
  {
    id: 'bacteriophage',
    category: 'viruses',
    name: 'T4 Bacteriophage',
    commonName: 'Phage T4',
    habitat: 'Infects E. coli',
    size: '200 nm',
    desc: 'A virus that infects bacteria. Its lunar-lander-like structure — with a head, tail, and leg-like fibers — is one of the most iconic in virology.',
    fact: 'Injects its DNA into bacteria in under 15 seconds.',
  },
  {
    id: 'influenza',
    category: 'viruses',
    name: 'Influenza A',
    commonName: 'Flu Virus',
    habitat: 'Respiratory tract',
    size: '80–120 nm',
    desc: 'A spherical virus covered in spike proteins (hemagglutinin and neuraminidase) that allow it to enter and exit host cells.',
    fact: 'Mutates so rapidly that new vaccines are needed every year.',
  },
  {
    id: 'haloarcula',
    category: 'archaea',
    name: 'Haloarcula marismortui',
    commonName: 'Halophile',
    habitat: 'Dead Sea & salt lakes',
    size: '1–3 µm',
    desc: 'An extremophile archaea that thrives in salt concentrations 10x higher than seawater. Contains red pigments that color salt lakes pink.',
    fact: 'Requires at least 2.5 M NaCl to survive — pure salt would kill most organisms.',
  },
  {
    id: 'methanobrevibacter',
    category: 'archaea',
    name: 'Methanobrevibacter smithii',
    commonName: 'Methanogen',
    habitat: 'Human gut',
    size: '0.5–1 µm',
    desc: 'An archaea that produces methane as a metabolic byproduct. Lives in the human gut and plays a role in digestion.',
    fact: 'Produces methane gas as a byproduct of consuming hydrogen.',
  },
];

const Explore = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const containerRef = useRef(null);

  const filtered = activeCategory === 'all'
    ? organisms
    : organisms.filter(o => o.category === activeCategory);

  useEffect(() => {
    if (containerRef.current) {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    }
  }, [activeCategory]);

  const getCategoryStyle = (catId) => {
    const cat = categories.find(c => c.id === catId);
    return cat || { color: 'text-[#00c9b1]', borderColor: 'border-[#00c9b1]/40', bgColor: 'bg-[#00c9b1]/10' };
  };

  return (
    <div className="bg-[#050d12] min-h-screen">
      {/* Hero */}
      <section className="relative py-28 px-6 text-center overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(0,201,177,0.08)_0%,_transparent_70%)]" />
        <div className="relative max-w-3xl mx-auto">
          <span className="text-xs tracking-widest uppercase text-[#00c9b1] font-medium">Taxonomy</span>
          <h1 id="explore-hero-title" className="font-heading text-5xl md:text-6xl font-bold text-white mt-3 mb-6">
            Explore Micro-Life
          </h1>
          <p id="explore-hero-desc" className="text-[#7fb3c8] text-lg leading-relaxed">
            Journey through the six major kingdoms of microscopic life. From ancient archaea to complex protozoa, discover the organisms that form the foundation of all life on Earth.
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="px-6 pb-10">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap gap-3 justify-center">
            <button
              onClick={() => setActiveCategory('all')}
              className={`px-5 py-2 rounded-full text-sm font-medium border transition-all duration-200 ${
                activeCategory === 'all'
                  ? 'bg-[#00c9b1] text-black border-[#00c9b1]'
                  : 'border-[#1a3a4a] text-[#7fb3c8] hover:border-[#00c9b1]/50 hover:text-white'
              }`}
            >
              All Organisms
            </button>
            {categories.map(cat => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-5 py-2 rounded-full text-sm font-medium border transition-all duration-200 ${
                  activeCategory === cat.id
                    ? `${cat.bgColor} ${cat.color} ${cat.borderColor}`
                    : 'border-[#1a3a4a] text-[#7fb3c8] hover:border-[#1a3a4a] hover:text-white'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Organism Grid */}
      <section ref={containerRef} className="px-6 pb-24">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filtered.map((org) => {
              const catStyle = getCategoryStyle(org.category);
              return (
                <div
                  key={org.id}
                  className="group bg-[#0f2233] border border-[#1a3a4a] rounded-2xl overflow-hidden hover:border-[#00c9b1]/40 transition-all duration-300 hover:shadow-[0_0_25px_rgba(0,201,177,0.08)] flex flex-col"
                >
                  <div className="relative overflow-hidden h-48">
                    <img
                      alt={org.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      data-strk-img-id={`explore-${org.id}-img-a2b3c4`}
                      data-strk-img={`[explore-${org.id}-desc] [explore-${org.id}-name] [explore-hero-desc] [explore-hero-title]`}
                      data-strk-img-ratio="4x3"
                      data-strk-img-width="500"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0f2233] via-transparent to-transparent" />
                    <span className={`absolute top-3 left-3 text-xs tracking-widest uppercase ${catStyle.bgColor} ${catStyle.color} border ${catStyle.borderColor} px-2.5 py-1 rounded-full`}>
                      {org.category}
                    </span>
                  </div>
                  <div className="p-5 flex flex-col flex-1">
                    <h3 id={`explore-${org.id}-name`} className="font-heading text-base font-bold text-white mb-0.5">{org.name}</h3>
                    <p className="text-[#00c9b1] text-xs mb-3">{org.commonName}</p>
                    <p id={`explore-${org.id}-desc`} className="text-[#7fb3c8] text-sm leading-relaxed mb-4 flex-1">{org.desc}</p>
                    <div className="border-t border-[#1a3a4a] pt-4 grid grid-cols-2 gap-3">
                      <div>
                        <p className="text-[#4a7a8a] text-xs uppercase tracking-wider mb-1">Habitat</p>
                        <p className="text-[#e8f4f8] text-xs">{org.habitat}</p>
                      </div>
                      <div>
                        <p className="text-[#4a7a8a] text-xs uppercase tracking-wider mb-1">Size</p>
                        <p className="text-[#e8f4f8] text-xs">{org.size}</p>
                      </div>
                    </div>
                    <div className="mt-4 bg-[#050d12] rounded-xl p-3">
                      <p className="text-[#4a7a8a] text-xs uppercase tracking-wider mb-1">Fun Fact</p>
                      <p className="text-[#7fb3c8] text-xs leading-relaxed">{org.fact}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Explore;
