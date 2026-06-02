import { useState, useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import CircleCell from '../components/species/CircleCell';
import SpeciesModal from '../components/species/SpeciesModal';

const allSpecies = [
  {
    id: 'echeveria',
    name: 'Echeveria',
    latin: 'Echeveria elegans',
    family: 'Crassulaceae',
    category: 'Succulents',
    imgId: 'species-img-a1b2c3',
    titleId: 'species-title-echeveria',
    descId: 'species-desc-echeveria',
    description: 'A rosette-forming succulent native to Mexico, prized for its perfect geometric symmetry and silvery-blue leaves arranged in a tight Fibonacci spiral.',
    taxonomy: { Order: 'Saxifragales', Family: 'Crassulaceae', Genus: 'Echeveria', Species: 'E. elegans' },
    tags: ['Succulent', 'Rosette', 'Mexico', 'Drought-tolerant'],
  },
  {
    id: 'helianthus',
    name: 'Sunflower',
    latin: 'Helianthus annuus',
    family: 'Asteraceae',
    category: 'Flowering',
    imgId: 'species-img-d4e5f6',
    titleId: 'species-title-helianthus',
    descId: 'species-desc-helianthus',
    description: 'The sunflower\'s seed head is the most celebrated example of phyllotaxis — 55 clockwise and 89 counter-clockwise spirals, consecutive Fibonacci numbers.',
    taxonomy: { Order: 'Asterales', Family: 'Asteraceae', Genus: 'Helianthus', Species: 'H. annuus' },
    tags: ['Annual', 'Fibonacci', 'North America', 'Heliotropic'],
  },
  {
    id: 'aloe-polyphylla',
    name: 'Spiral Aloe',
    latin: 'Aloe polyphylla',
    family: 'Asphodelaceae',
    category: 'Succulents',
    imgId: 'species-img-g7h8i9',
    titleId: 'species-title-aloe-polyphylla',
    descId: 'species-desc-aloe-polyphylla',
    description: 'Endemic to Lesotho, the spiral aloe forms a perfect five-armed spiral of 75 leaves. It is one of the most geometrically precise plants in existence.',
    taxonomy: { Order: 'Asparagales', Family: 'Asphodelaceae', Genus: 'Aloe', Species: 'A. polyphylla' },
    tags: ['Succulent', 'Endangered', 'Lesotho', 'Spiral'],
  },
  {
    id: 'adiantum',
    name: 'Maidenhair Fern',
    latin: 'Adiantum capillus-veneris',
    family: 'Pteridaceae',
    category: 'Ferns',
    imgId: 'species-img-j1k2l3',
    titleId: 'species-title-adiantum',
    descId: 'species-desc-adiantum',
    description: 'Delicate fan-shaped pinnules on wiry black stems. The fronds unfurl in a tight crozier — a perfect logarithmic spiral — before expanding to full size.',
    taxonomy: { Order: 'Polypodiales', Family: 'Pteridaceae', Genus: 'Adiantum', Species: 'A. capillus-veneris' },
    tags: ['Fern', 'Shade', 'Cosmopolitan', 'Crozier'],
  },
  {
    id: 'mammillaria',
    name: 'Pincushion Cactus',
    latin: 'Mammillaria elongata',
    family: 'Cactaceae',
    category: 'Succulents',
    imgId: 'species-img-m4n5o6',
    titleId: 'species-title-mammillaria',
    descId: 'species-desc-mammillaria',
    description: 'Cylindrical stems covered in areoles arranged in precise helical rows. The spine clusters radiate outward in perfect symmetry from each tubercle.',
    taxonomy: { Order: 'Caryophyllales', Family: 'Cactaceae', Genus: 'Mammillaria', Species: 'M. elongata' },
    tags: ['Cactus', 'Mexico', 'Areoles', 'Spine'],
  },
  {
    id: 'sphagnum',
    name: 'Peat Moss',
    latin: 'Sphagnum palustre',
    family: 'Sphagnaceae',
    category: 'Moss',
    imgId: 'species-img-p7q8r9',
    titleId: 'species-title-sphagnum',
    descId: 'species-desc-sphagnum',
    description: 'A foundational bog plant whose star-shaped capitula form dense, spongy mats. Each capitulum is a miniature radial arrangement of branch clusters.',
    taxonomy: { Order: 'Sphagnales', Family: 'Sphagnaceae', Genus: 'Sphagnum', Species: 'S. palustre' },
    tags: ['Moss', 'Bog', 'Cosmopolitan', 'Capitulum'],
  },
  {
    id: 'drosera',
    name: 'Sundew',
    latin: 'Drosera rotundifolia',
    family: 'Droseraceae',
    category: 'Carnivorous',
    imgId: 'species-img-s1t2u3',
    titleId: 'species-title-drosera',
    descId: 'species-desc-drosera',
    description: 'Circular leaves fringed with glistening red tentacles, each tipped with a sticky mucilage droplet. The tentacles curl inward to trap insects.',
    taxonomy: { Order: 'Caryophyllales', Family: 'Droseraceae', Genus: 'Drosera', Species: 'D. rotundifolia' },
    tags: ['Carnivorous', 'Bog', 'Tentacles', 'Circinate'],
  },
  {
    id: 'asplenium',
    name: 'Bird\'s Nest Fern',
    latin: 'Asplenium nidus',
    family: 'Aspleniaceae',
    category: 'Ferns',
    imgId: 'species-img-v4w5x6',
    titleId: 'species-title-asplenium',
    descId: 'species-desc-asplenium',
    description: 'Broad, undivided fronds radiate from a central rosette, forming a nest-like structure. The sori run in parallel lines along the frond midrib.',
    taxonomy: { Order: 'Polypodiales', Family: 'Aspleniaceae', Genus: 'Asplenium', Species: 'A. nidus' },
    tags: ['Fern', 'Epiphyte', 'Tropical', 'Rosette'],
  },
  {
    id: 'sempervivum',
    name: 'Hens & Chicks',
    latin: 'Sempervivum tectorum',
    family: 'Crassulaceae',
    category: 'Succulents',
    imgId: 'species-img-y7z8a9',
    titleId: 'species-title-sempervivum',
    descId: 'species-desc-sempervivum',
    description: 'Hardy rosette succulents that propagate by producing offsets — "chicks" — around the mother plant. Each rosette is a textbook Fibonacci spiral.',
    taxonomy: { Order: 'Saxifragales', Family: 'Crassulaceae', Genus: 'Sempervivum', Species: 'S. tectorum' },
    tags: ['Succulent', 'Hardy', 'Europe', 'Offset'],
  },
  {
    id: 'polytrichum',
    name: 'Haircap Moss',
    latin: 'Polytrichum commune',
    family: 'Polytrichaceae',
    category: 'Moss',
    imgId: 'species-img-b1c2d3',
    titleId: 'species-title-polytrichum',
    descId: 'species-desc-polytrichum',
    description: 'One of the tallest mosses, with stiff, star-shaped leaf arrangements around each stem. The sporophytes are topped with distinctive hairy caps.',
    taxonomy: { Order: 'Polytrichales', Family: 'Polytrichaceae', Genus: 'Polytrichum', Species: 'P. commune' },
    tags: ['Moss', 'Upright', 'Cosmopolitan', 'Sporophyte'],
  },
  {
    id: 'dionaea',
    name: 'Venus Flytrap',
    latin: 'Dionaea muscipula',
    family: 'Droseraceae',
    category: 'Carnivorous',
    imgId: 'species-img-e4f5g6',
    titleId: 'species-title-dionaea',
    descId: 'species-desc-dionaea',
    description: 'The iconic carnivorous plant with hinged, toothed traps. The traps are modified leaves that snap shut in under 100 milliseconds when trigger hairs are touched.',
    taxonomy: { Order: 'Caryophyllales', Family: 'Droseraceae', Genus: 'Dionaea', Species: 'D. muscipula' },
    tags: ['Carnivorous', 'Endemic', 'Carolina', 'Trap'],
  },
  {
    id: 'nephrolepis',
    name: 'Boston Fern',
    latin: 'Nephrolepis exaltata',
    family: 'Lomariopsidaceae',
    category: 'Ferns',
    imgId: 'species-img-h7i8j9',
    titleId: 'species-title-nephrolepis',
    descId: 'species-desc-nephrolepis',
    description: 'Arching fronds with alternating pinnae create a feathery, cascading silhouette. One of the most widely cultivated ferns for its graceful, symmetrical form.',
    taxonomy: { Order: 'Polypodiales', Family: 'Lomariopsidaceae', Genus: 'Nephrolepis', Species: 'N. exaltata' },
    tags: ['Fern', 'Tropical', 'Cultivated', 'Arching'],
  },
];

const categories = ['All', 'Succulents', 'Ferns', 'Moss', 'Flowering', 'Carnivorous'];

export default function SpeciesIndexPage() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedSpecies, setSelectedSpecies] = useState(null);
  const containerRef = useRef(null);

  const filtered = activeCategory === 'All'
    ? allSpecies
    : allSpecies.filter(s => s.category === activeCategory);

  useEffect(() => {
    if (containerRef.current) {
      return ImageHelper.loadImages(strkImgConfig, containerRef.current);
    }
  }, [filtered]);

  return (
    <div className="pt-16 min-h-screen bg-[#F5F0E8]">
      {/* Header */}
      <section className="max-w-[1440px] mx-auto px-8 md:px-16 pt-24 pb-12">
        <p className="font-sans text-xs tracking-[0.3em] uppercase text-[#7A9E7E] mb-6">
          Species Index
        </p>
        <h1 className="font-serif text-5xl md:text-7xl font-light text-[#3D5C3A] leading-none mb-6">
          Circular<br />
          <em className="not-italic text-[#7A9E7E]">Taxonomy</em>
        </h1>
        <p className="font-sans text-sm text-[#8B7355] leading-relaxed max-w-md">
          Each cell is a window into a species. Click any circle to expand its full record.
        </p>
      </section>

      {/* Category filter */}
      <section className="max-w-[1440px] mx-auto px-8 md:px-16 pb-12">
        <div className="flex flex-wrap gap-2">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`font-sans text-xs tracking-[0.15em] uppercase px-4 py-2 rounded-full transition-all duration-300 border ${
                activeCategory === cat
                  ? 'bg-[#7A9E7E] text-[#FAF7F2] border-[#7A9E7E]'
                  : 'bg-transparent text-[#8B7355] border-[#E8E0D0] hover:border-[#7A9E7E] hover:text-[#3D5C3A]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Circular grid */}
      <section
        ref={containerRef}
        className="max-w-[1440px] mx-auto px-8 md:px-16 pb-24"
      >
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-x-8 gap-y-12">
          {filtered.map(species => (
            <CircleCell
              key={species.id}
              species={species}
              onClick={() => setSelectedSpecies(species)}
            />
          ))}
        </div>

        {filtered.length === 0 && (
          <p className="font-serif italic text-lg text-[#8B7355] text-center py-20">
            No species in this category yet.
          </p>
        )}
      </section>

      {/* Modal */}
      {selectedSpecies && (
        <SpeciesModal
          species={selectedSpecies}
          onClose={() => setSelectedSpecies(null)}
        />
      )}
    </div>
  );
}
