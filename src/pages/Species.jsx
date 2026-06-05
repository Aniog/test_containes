import { useRef, useEffect, useState } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { Search } from 'lucide-react'

const species = [
  {
    id: 'african-elephant',
    name: 'African Elephant',
    latin: 'Loxodonta africana',
    category: 'Mammal',
    status: 'Endangered',
    habitat: 'Savanna & Woodlands',
    desc: 'The largest land animal on Earth, with ears shaped like the African continent. Their deep rumbles travel miles across the plains.',
    imgId: 'species-elephant-a1b2c3',
    titleId: 'species-african-elephant-title',
    descId: 'species-african-elephant-desc',
    habitatId: 'species-african-elephant-habitat',
  },
  {
    id: 'masai-giraffe',
    name: 'Masai Giraffe',
    latin: 'Giraffa camelopardalis tippelskirchi',
    category: 'Mammal',
    status: 'Endangered',
    habitat: 'Open Woodlands',
    desc: 'The tallest of all giraffe subspecies, with jagged, vine-leaf spots. They browse acacia canopies that no other creature can reach.',
    imgId: 'species-giraffe-d4e5f6',
    titleId: 'species-masai-giraffe-title',
    descId: 'species-masai-giraffe-desc',
    habitatId: 'species-masai-giraffe-habitat',
  },
  {
    id: 'african-lion',
    name: 'African Lion',
    latin: 'Panthera leo',
    category: 'Mammal',
    status: 'Vulnerable',
    habitat: 'Grasslands & Savanna',
    desc: 'The apex predator of the Serengeti. Their dawn chorus resonates across the plains, a sound that defines the African wilderness.',
    imgId: 'species-lion-g7h8i9',
    titleId: 'species-african-lion-title',
    descId: 'species-african-lion-desc',
    habitatId: 'species-african-lion-habitat',
  },
  {
    id: 'plains-zebra',
    name: 'Plains Zebra',
    latin: 'Equus quagga',
    category: 'Mammal',
    status: 'Near Threatened',
    habitat: 'Grasslands',
    desc: 'Each zebra wears a pattern as unique as a fingerprint. They form the backbone of the Great Migration alongside the wildebeest.',
    imgId: 'species-zebra-j0k1l2',
    titleId: 'species-plains-zebra-title',
    descId: 'species-plains-zebra-desc',
    habitatId: 'species-plains-zebra-habitat',
  },
  {
    id: 'secretary-bird',
    name: 'Secretary Bird',
    latin: 'Sagittarius serpentarius',
    category: 'Bird',
    status: 'Endangered',
    habitat: 'Open Grasslands',
    desc: 'A raptor that stalks the savanna on long legs, hunting snakes with precise, stomping strikes. Its quill-like crest gives it its name.',
    imgId: 'species-secretary-m3n4o5',
    titleId: 'species-secretary-bird-title',
    descId: 'species-secretary-bird-desc',
    habitatId: 'species-secretary-bird-habitat',
  },
  {
    id: 'cheetah',
    name: 'Cheetah',
    latin: 'Acinonyx jubatus',
    category: 'Mammal',
    status: 'Vulnerable',
    habitat: 'Open Savanna',
    desc: 'Built for speed, the cheetah can accelerate faster than a sports car. Its tear-marked face is one of the most iconic sights on the plains.',
    imgId: 'species-cheetah-p6q7r8',
    titleId: 'species-cheetah-title',
    descId: 'species-cheetah-desc',
    habitatId: 'species-cheetah-habitat',
  },
  {
    id: 'lilac-breasted-roller',
    name: 'Lilac-Breasted Roller',
    latin: 'Coracias caudatus',
    category: 'Bird',
    status: 'Least Concern',
    habitat: 'Open Woodlands',
    desc: 'A flash of rainbow feathers against the golden grass. Kenya\'s national bird and one of the most photographed birds in Africa.',
    imgId: 'species-roller-s9t0u1',
    titleId: 'species-lilac-breasted-roller-title',
    descId: 'species-lilac-breasted-roller-desc',
    habitatId: 'species-lilac-breasted-roller-habitat',
  },
  {
    id: 'african-wild-dog',
    name: 'African Wild Dog',
    latin: 'Lycaon pictus',
    category: 'Mammal',
    status: 'Endangered',
    habitat: 'Savanna & Woodlands',
    desc: 'Also called the painted wolf, these highly social hunters have a success rate that puts lions to shame. Their tri-colored coats are unmistakable.',
    imgId: 'species-wilddog-v2w3x4',
    titleId: 'species-african-wild-dog-title',
    descId: 'species-african-wild-dog-desc',
    habitatId: 'species-african-wild-dog-habitat',
  },
  {
    id: 'hippopotamus',
    name: 'Hippopotamus',
    latin: 'Hippopotamus amphibius',
    category: 'Mammal',
    status: 'Vulnerable',
    habitat: 'Rivers & Lakes',
    desc: 'Despite their rotund appearance, hippos are among the most dangerous animals in Africa. They shape river ecosystems with their nightly grazing.',
    imgId: 'species-hippo-y5z6a7',
    titleId: 'species-hippopotamus-title',
    descId: 'species-hippopotamus-desc',
    habitatId: 'species-hippopotamus-habitat',
  },
]

const categories = ['All', 'Mammal', 'Bird']
const statusColors = {
  'Endangered': 'bg-red-800/80 text-red-100',
  'Vulnerable': 'bg-deep-ochre/80 text-warm-sand',
  'Near Threatened': 'bg-acacia-green/80 text-warm-sand',
  'Least Concern': 'bg-acacia-green/60 text-warm-sand',
}

export default function Species() {
  const containerRef = useRef(null)
  const [filter, setFilter] = useState('All')
  const [search, setSearch] = useState('')

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  const filtered = species.filter((s) => {
    const matchesCategory = filter === 'All' || s.category === filter
    const matchesSearch =
      s.name.toLowerCase().includes(search.toLowerCase()) ||
      s.latin.toLowerCase().includes(search.toLowerCase()) ||
      s.habitat.toLowerCase().includes(search.toLowerCase())
    return matchesCategory && matchesSearch
  })

  return (
    <div ref={containerRef}>
      {/* Hero */}
      <section className="relative h-[50vh] md:h-[60vh] overflow-hidden">
        <img
          data-strk-img-id="species-hero-b8c9d0"
          data-strk-img="[species-hero-desc] [species-hero-title]"
          data-strk-img-ratio="16x9"
          data-strk-img-width={1600}
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt="Species Archive hero"
          className="absolute inset-0 w-full h-full object-cover animate-slow-drift"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-dark-earth/80 via-dark-earth/30 to-transparent" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
          <h1
            id="species-hero-title"
            className="font-serif text-4xl md:text-6xl font-bold text-warm-sand mb-4 drop-shadow-lg"
          >
            Species Archive
          </h1>
          <p
            id="species-hero-desc"
            className="text-warm-sand/70 max-w-xl text-sm md:text-base leading-relaxed"
          >
            A living catalog of the creatures that inhabit the Serengeti ecosystem
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="py-12 bg-parchment border-b border-dust/20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex gap-3">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setFilter(cat)}
                  className={`px-5 py-2 text-sm tracking-wider uppercase transition-all ${
                    filter === cat
                      ? 'bg-burnt-orange text-warm-sand'
                      : 'bg-transparent text-clay border border-dust/40 hover:border-burnt-orange hover:text-burnt-orange'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
            <div className="relative w-full md:w-64">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-clay" />
              <input
                type="text"
                placeholder="Search species..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-10 pr-4 py-2 bg-warm-sand border border-dust/30 text-dark-earth placeholder:text-dust focus:outline-none focus:border-burnt-orange transition-colors text-sm"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="py-16 md:py-24 bg-parchment">
        <div className="max-w-7xl mx-auto px-6">
          {filtered.length === 0 ? (
            <div className="text-center py-20">
              <p className="font-serif text-xl text-clay">No species found matching your criteria.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filtered.map((animal) => (
                <div
                  key={animal.id}
                  className="group relative bg-dark-earth rounded-sm overflow-hidden cursor-pointer"
                >
                  {/* Habitat blurred background on hover */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-40 transition-opacity duration-700 ease-in-out">
                    <img
                      data-strk-img-id={`species-bg-${animal.id}`}
                      data-strk-img={`[${animal.habitatId}] [${animal.titleId}]`}
                      data-strk-img-ratio="4x3"
                      data-strk-img-width={800}
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                      alt=""
                      className="w-full h-full object-cover blur-xl scale-110"
                    />
                  </div>

                  {/* Main portrait */}
                  <div className="relative aspect-[4/5] overflow-hidden">
                    <img
                      data-strk-img-id={animal.imgId}
                      data-strk-img={`[${animal.descId}] [${animal.titleId}]`}
                      data-strk-img-ratio="4x3"
                      data-strk-img-width={600}
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                      alt={animal.name}
                      className="w-full h-full object-cover transition-transform duration-[2000ms] ease-in-out group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-dark-earth/90 via-transparent to-transparent" />

                    {/* Status badge */}
                    <div className="absolute top-4 right-4">
                      <span
                        className={`text-xs px-3 py-1 tracking-wider uppercase ${
                          statusColors[animal.status] || 'bg-dust/60 text-dark-earth'
                        }`}
                      >
                        {animal.status}
                      </span>
                    </div>

                    {/* Card text */}
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <h3
                        id={animal.titleId}
                        className="font-serif text-xl md:text-2xl font-bold text-warm-sand mb-1"
                      >
                        {animal.name}
                      </h3>
                      <p className="text-warm-sand/50 text-xs italic tracking-wide mb-2">
                        {animal.latin}
                      </p>
                      <p
                        id={animal.habitatId}
                        className="text-dust/60 text-xs tracking-wider uppercase"
                      >
                        {animal.habitat}
                      </p>
                    </div>
                  </div>

                  {/* Description revealed on hover */}
                  <div className="relative max-h-0 group-hover:max-h-40 overflow-hidden transition-all duration-500 ease-in-out">
                    <div className="px-6 py-4">
                      <p
                        id={animal.descId}
                        className="text-warm-sand/70 text-sm leading-relaxed"
                      >
                        {animal.desc}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  )
}