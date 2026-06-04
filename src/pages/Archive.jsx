import { useState } from 'react'
import { Search } from 'lucide-react'

const species = [
  {
    id: 'african-elephant',
    name: 'African Elephant',
    latin: 'Loxodonta africana',
    habitat: 'Savanna woodlands & grasslands',
    description: 'The largest land animal on Earth, moving in matriarchal herds across vast territories.',
    imgId: 'species-african-elephant-7a3b1c',
    habId: 'species-hab-african-elephant-9d4e2f',
  },
  {
    id: 'masai-giraffe',
    name: 'Masai Giraffe',
    latin: 'Giraffa tippelskirchi',
    habitat: 'Acacia woodlands',
    description: 'Towering browsers with distinctive jagged spots, reaching high into the canopy.',
    imgId: 'species-masai-giraffe-2b8c5d',
    habId: 'species-hab-masai-giraffe-3e7a1f',
  },
  {
    id: 'african-lion',
    name: 'African Lion',
    latin: 'Panthera leo',
    habitat: 'Open plains & scrubland',
    description: 'The apex predator of the savanna, commanding the grasslands with regal authority.',
    imgId: 'species-african-lion-5f1a9b',
    habId: 'species-hab-african-lion-8c2d4e',
  },
  {
    id: 'plains-zebra',
    name: 'Plains Zebra',
    latin: 'Equus quagga',
    habitat: 'Grasslands & open plains',
    description: 'Striped nomads of the savanna, their patterns unique as fingerprints against the golden grass.',
    imgId: 'species-plains-zebra-4d7e1a',
    habId: 'species-hab-plains-zebra-6b9f3c',
  },
  {
    id: 'cheetah',
    name: 'Cheetah',
    latin: 'Acinonyx jubatus',
    habitat: 'Open savanna & grasslands',
    description: 'The fastest land animal, a sleek hunter built for explosive speed across the open plains.',
    imgId: 'species-cheetah-9a3f7c',
    habId: 'species-hab-cheetah-2e5b8d',
  },
  {
    id: 'african-buffalo',
    name: 'African Buffalo',
    latin: 'Syncerus caffer',
    habitat: 'Savanna & woodland mosaics',
    description: 'Formidable and resilient, moving in massive herds that shape the landscape itself.',
    imgId: 'species-african-buffalo-1c6d4a',
    habId: 'species-hab-african-buffalo-7f2e9b',
  },
  {
    id: 'spotted-hyena',
    name: 'Spotted Hyena',
    latin: 'Crocuta crocuta',
    habitat: 'Savanna & semi-arid regions',
    description: 'Intelligent clan hunters whose eerie calls echo across the twilight grasslands.',
    imgId: 'species-spotted-hyena-3a8e5f',
    habId: 'species-hab-spotted-hyena-6d1b4c',
  },
  {
    id: 'secretary-bird',
    name: 'Secretary Bird',
    latin: 'Sagittarius serpentarius',
    habitat: 'Open grasslands & savanna',
    description: 'A striking terrestrial raptor, stalking the plains on long legs in search of serpents.',
    imgId: 'species-secretary-bird-8b2f6d',
    habId: 'species-hab-secretary-bird-4e9a1c',
  },
  {
    id: 'black-rhino',
    name: 'Black Rhinoceros',
    latin: 'Diceros bicornis',
    habitat: 'Thorny scrub & savanna',
    description: 'An ancient armored browser, solitary and powerful, a living relic of the Pleistocene.',
    imgId: 'species-black-rhino-5c7e2a',
    habId: 'species-hab-black-rhino-1f4d9b',
  },
]

export default function Archive() {
  const [hoveredId, setHoveredId] = useState(null)
  const [search, setSearch] = useState('')

  const filtered = species.filter(
    (s) =>
      s.name.toLowerCase().includes(search.toLowerCase()) ||
      s.latin.toLowerCase().includes(search.toLowerCase()) ||
      s.habitat.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div className="min-h-screen bg-savanna-cream">
      {/* Header */}
      <section className="py-20 px-6 text-center max-w-4xl mx-auto">
        <p className="font-serif text-xs tracking-[0.3em] uppercase text-savanna-dust mb-4">
          Species Archive
        </p>
        <h1 className="font-display text-4xl md:text-6xl font-bold text-savanna-earth mb-6">
          Portraits of the Prairie
        </h1>
        <p className="font-serif text-lg text-savanna-dust max-w-2xl mx-auto leading-relaxed italic">
          Each creature tells a story carved by millennia of wind and sun.
          Explore the living tapestry of the Serengeti.
        </p>

        {/* Search */}
        <div className="mt-10 max-w-md mx-auto relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-savanna-dust" />
          <input
            type="text"
            placeholder="Search species..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-12 pr-4 py-3 bg-white border border-savanna-sand/60 rounded-full font-serif text-savanna-earth placeholder:text-savanna-dust/50 focus:outline-none focus:border-earth-500 focus:ring-2 focus:ring-earth-500/20 transition-all"
          />
        </div>
      </section>

      {/* Grid */}
      <section className="px-6 pb-24 max-w-7xl mx-auto">
        {filtered.length === 0 && (
          <p className="text-center text-savanna-dust font-serif italic py-20">
            No species found matching your search.
          </p>
        )}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((s) => (
            <div
              key={s.id}
              className="group relative h-[480px] rounded-2xl overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl transition-shadow duration-500"
              onMouseEnter={() => setHoveredId(s.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              {/* Habitat background — revealed on hover */}
              <div
                className={`absolute inset-0 transition-all duration-700 ease-out ${
                  hoveredId === s.id ? 'opacity-100 scale-105' : 'opacity-0 scale-100'
                }`}
              >
                <div
                  className="w-full h-full"
                  data-strk-bg-id={`archive-hab-bg-${s.id}`}
                  data-strk-bg={`[archive-${s.id}-habitat] [archive-${s.id}-name] African savanna habitat`}
                  data-strk-bg-ratio="3x4"
                  data-strk-bg-width="800"
                  style={{
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    width: '100%',
                    height: '100%',
                    filter: 'blur(12px)',
                  }}
                />
              </div>

              {/* Animal portrait — always visible, subtle zoom on hover */}
              <div
                className={`absolute inset-0 transition-transform duration-700 ease-out ${
                  hoveredId === s.id ? 'scale-105' : 'scale-100'
                }`}
              >
                <div
                  className="w-full h-full"
                  data-strk-bg-id={`archive-portrait-bg-${s.id}`}
                  data-strk-bg={`[archive-${s.id}-name] [archive-${s.id}-latin] animal portrait high resolution`}
                  data-strk-bg-ratio="3x4"
                  data-strk-bg-width="600"
                  style={{
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    width: '100%',
                    height: '100%',
                  }}
                />
              </div>

              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-savanna-shadow via-savanna-shadow/20 to-transparent pointer-events-none" />

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6 transition-all duration-500">
                <h3
                  id={`archive-${s.id}-name`}
                  className="font-display text-2xl font-bold text-savanna-cream mb-1"
                >
                  {s.name}
                </h3>
                <p
                  id={`archive-${s.id}-latin`}
                  className="font-serif text-sm italic text-savanna-sand/80 mb-2"
                >
                  {s.latin}
                </p>
                <p
                  id={`archive-${s.id}-habitat`}
                  className={`font-serif text-xs tracking-widest uppercase text-earth-400 transition-all duration-500 ${
                    hoveredId === s.id ? 'opacity-100 max-h-8' : 'opacity-0 max-h-0 overflow-hidden'
                  }`}
                >
                  {s.habitat}
                </p>
                <p
                  className={`font-serif text-sm text-savanna-sand/90 leading-relaxed mt-2 transition-all duration-500 ${
                    hoveredId === s.id ? 'opacity-100 max-h-20' : 'opacity-0 max-h-0 overflow-hidden'
                  }`}
                >
                  {s.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}