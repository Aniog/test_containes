import { useState } from 'react';
import { Search } from 'lucide-react';

const species = [
  {
    id: 'african-elephant',
    name: 'African Elephant',
    latin: 'Loxodonta africana',
    habitat: 'Savanna & Woodlands',
    description: 'The largest land animal on Earth, a keystone species of the Serengeti ecosystem.',
    query: 'african elephant close portrait in savanna',
  },
  {
    id: 'lion',
    name: 'African Lion',
    latin: 'Panthera leo',
    habitat: 'Open Plains & Scrub',
    description: 'The apex predator of the savanna, ruling the grasslands with quiet authority.',
    query: 'african lion male portrait mane close up serengeti',
  },
  {
    id: 'masai-giraffe',
    name: 'Masai Giraffe',
    latin: 'Giraffa tippelskirchi',
    habitat: 'Acacia Woodlands',
    description: 'Towering above the acacia trees, a silent sentinel of the plains.',
    query: 'masai giraffe portrait close up acacia tree background',
  },
  {
    id: 'plains-zebra',
    name: 'Plains Zebra',
    latin: 'Equus quagga',
    habitat: 'Grasslands & Savanna',
    description: 'Striped travelers that follow the rains in their endless nomadic journey.',
    query: 'plains zebra portrait close up serengeti grassland',
  },
  {
    id: 'cheetah',
    name: 'Cheetah',
    latin: 'Acinonyx jubatus',
    habitat: 'Open Grasslands',
    description: 'The fastest land animal, a master of speed and precision on the open plains.',
    query: 'cheetah portrait close up looking at camera savanna',
  },
  {
    id: 'african-buffalo',
    name: 'African Buffalo',
    latin: 'Syncerus caffer',
    habitat: 'Savanna & Wetlands',
    description: 'Formidable and resilient, these massive bovines shape the landscape around them.',
    query: 'african buffalo close portrait mud savanna',
  },
  {
    id: 'greater-flamingo',
    name: 'Greater Flamingo',
    latin: 'Phoenicopterus roseus',
    habitat: 'Soda Lakes & Wetlands',
    description: 'A flash of pink against the alkaline waters of the Rift Valley lakes.',
    query: 'greater flamingo close portrait pink lake reflection',
  },
  {
    id: 'leopard',
    name: 'African Leopard',
    latin: 'Panthera pardus pardus',
    habitat: 'Riverine Forests & Rocky Outcrops',
    description: 'The elusive ghost of the night, draped in rosettes and silent grace.',
    query: 'african leopard close portrait in tree dappled light',
  },
  {
    id: 'white-rhino',
    name: 'White Rhinoceros',
    latin: 'Ceratotherium simum',
    habitat: 'Grasslands & Open Savanna',
    description: 'An ancient giant, peaceful but powerful, a relic of a bygone age.',
    query: 'white rhinoceros portrait close up savanna grass',
  },
  {
    id: 'secretary-bird',
    name: 'Secretary Bird',
    latin: 'Sagittarius serpentarius',
    habitat: 'Open Grasslands',
    description: 'A serpent-hunting raptor on stilts, patrolling the grasslands with purpose.',
    query: 'secretary bird close portrait african savanna grass',
  },
  {
    id: 'hippopotamus',
    name: 'Hippopotamus',
    latin: 'Hippopotamus amphibius',
    habitat: 'Rivers & Lakes',
    description: 'The river guardian, massive and surprisingly agile in its watery domain.',
    query: 'hippopotamus portrait close water surface africa',
  },
  {
    id: 'spotted-hyena',
    name: 'Spotted Hyena',
    latin: 'Crocuta crocuta',
    habitat: 'Savanna & Scrubland',
    description: 'A highly intelligent and social predator, the matriarch of the clan lands.',
    query: 'spotted hyena portrait close up savanna golden light',
  },
];

export default function SpeciesArchive() {
  const [search, setSearch] = useState('');
  const [hoveredId, setHoveredId] = useState(null);

  const filtered = species.filter(
    (s) =>
      s.name.toLowerCase().includes(search.toLowerCase()) ||
      s.latin.toLowerCase().includes(search.toLowerCase()) ||
      s.habitat.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <div className="min-h-screen bg-savanna-cream pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-burnt-orange tracking-[0.3em] uppercase text-xs font-serif font-semibold mb-3">
            Species Archive
          </p>
          <h1 className="text-5xl md:text-6xl font-serif font-bold text-dark-earth mb-4">
            The Keepers of the Plains
          </h1>
          <p className="text-dust-brown text-lg font-serif italic max-w-2xl mx-auto">
            A curated collection of the Serengeti's most iconic inhabitants,
            each a vital thread in the tapestry of life.
          </p>
        </div>

        {/* Search */}
        <div className="relative max-w-md mx-auto mb-12">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-dust-brown/50" />
          <input
            type="text"
            placeholder="Search by name, species, or habitat..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-12 pr-4 py-3 bg-warm-sand/50 border border-warm-sand rounded-lg font-serif text-dark-earth placeholder:text-dust-brown/40 focus:outline-none focus:border-burnt-orange/50 focus:ring-2 focus:ring-burnt-orange/10 transition-all"
          />
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filtered.map((animal) => (
            <article
              key={animal.id}
              className="group relative rounded-xl overflow-hidden cursor-pointer bg-warm-sand"
              onMouseEnter={() => setHoveredId(animal.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              {/* Blurred habitat background (shows on hover) */}
              <div
                className="absolute inset-0 transition-all duration-700 ease-out"
                style={{
                  opacity: hoveredId === animal.id ? 0.4 : 0,
                  filter: 'blur(12px)',
                  transform: 'scale(1.2)',
                }}
              >
                <img
                  data-strk-img-id={`habitat-bg-${animal.id}`}
                  data-strk-img={`${animal.habitat} african landscape texture background`}
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="800"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 3'/%3E"
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Animal portrait */}
              <div className="relative aspect-[3/4] overflow-hidden">
                <img
                  data-strk-img-id={`species-${animal.id}`}
                  data-strk-img={animal.query}
                  data-strk-img-ratio="3x4"
                  data-strk-img-width="800"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 3 4'/%3E"
                  alt={animal.name}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                {/* Gradient overlay at bottom */}
                <div className="absolute inset-0 bg-gradient-to-t from-dark-earth/80 via-transparent to-transparent" />
              </div>

              {/* Info overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-5 transition-all duration-500">
                <h3 className="text-xl font-serif font-bold text-savanna-cream mb-1">
                  {animal.name}
                </h3>
                <p className="text-savanna-cream/60 text-xs tracking-wider uppercase font-serif mb-2">
                  {animal.latin}
                </p>
                <div
                  className={`transition-all duration-500 overflow-hidden ${
                    hoveredId === animal.id ? 'max-h-24 opacity-100 mt-2' : 'max-h-0 opacity-0'
                  }`}
                >
                  <p className="text-savanna-cream/80 text-sm font-serif leading-relaxed">
                    {animal.description}
                  </p>
                  <span className="inline-block mt-2 text-xs text-acacia-green font-semibold tracking-wider uppercase bg-savanna-cream/10 px-2 py-1 rounded">
                    {animal.habitat}
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-20">
            <p className="text-dust-brown font-serif text-lg italic">
              No species found matching your search.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}