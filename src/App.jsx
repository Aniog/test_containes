import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import './App.css'

const featuredAnimals = [
  {
    id: 'lion',
    name: 'African Lion',
    category: 'Mammal',
    description: 'The king of the savanna, known for its majestic mane and powerful roar that can be heard up to 8 km away.',
    fact: 'Lions are the only cats that live in groups called prides.',
    color: 'bg-amber-50',
    badge: 'bg-amber-100 text-amber-800',
  },
  {
    id: 'elephant',
    name: 'African Elephant',
    category: 'Mammal',
    description: 'The largest land animal on Earth, celebrated for its intelligence, memory, and deep family bonds.',
    fact: 'Elephants can recognize themselves in a mirror — a sign of self-awareness.',
    color: 'bg-stone-50',
    badge: 'bg-stone-200 text-stone-800',
  },
  {
    id: 'eagle',
    name: 'Bald Eagle',
    category: 'Bird',
    description: 'A symbol of freedom and power, the bald eagle soars high with a wingspan reaching over 2 meters.',
    fact: 'Eagles can spot prey from nearly 3 km away with their sharp vision.',
    color: 'bg-sky-50',
    badge: 'bg-sky-100 text-sky-800',
  },
  {
    id: 'dolphin',
    name: 'Bottlenose Dolphin',
    category: 'Marine',
    description: 'Playful and highly intelligent, dolphins communicate through clicks and whistles and love to surf waves.',
    fact: 'Dolphins sleep with one eye open, resting only half their brain at a time.',
    color: 'bg-teal-50',
    badge: 'bg-teal-100 text-teal-800',
  },
  {
    id: 'tiger',
    name: 'Bengal Tiger',
    category: 'Mammal',
    description: 'The largest wild cat species, the Bengal tiger is a solitary and powerful apex predator of the jungle.',
    fact: 'No two tigers have the same stripe pattern — like human fingerprints.',
    color: 'bg-orange-50',
    badge: 'bg-orange-100 text-orange-800',
  },
  {
    id: 'parrot',
    name: 'Scarlet Macaw',
    category: 'Bird',
    description: 'One of the most colorful birds on the planet, the scarlet macaw is intelligent and can mimic human speech.',
    fact: 'Macaws can live up to 80 years — longer than most humans expect!',
    color: 'bg-red-50',
    badge: 'bg-red-100 text-red-800',
  },
]

const categories = [
  { id: 'mammals', label: 'Mammals', icon: '🦁', desc: 'Warm-blooded vertebrates that nurse their young with milk.' },
  { id: 'birds', label: 'Birds', icon: '🦅', desc: 'Feathered creatures that rule the skies across every continent.' },
  { id: 'reptiles', label: 'Reptiles', icon: '🦎', desc: 'Cold-blooded animals with scales, from tiny geckos to giant crocs.' },
  { id: 'ocean', label: 'Ocean Life', icon: '🐬', desc: 'Mysterious creatures that inhabit the vast depths of our oceans.' },
]

const funFacts = [
  { emoji: '🐙', fact: 'Octopuses have three hearts and blue blood.' },
  { emoji: '🦒', fact: 'A giraffe\'s tongue is 45 cm long and dark purple.' },
  { emoji: '🐧', fact: 'Penguins propose to their mates with pebbles.' },
  { emoji: '🦋', fact: 'Butterflies taste with their feet.' },
]

export default function App() {
  const heroRef = useRef(null)
  const gridRef = useRef(null)
  const categoriesRef = useRef(null)

  useEffect(() => {
    if (heroRef.current) ImageHelper.loadImages(strkImgConfig, heroRef.current)
    if (gridRef.current) ImageHelper.loadImages(strkImgConfig, gridRef.current)
    if (categoriesRef.current) ImageHelper.loadImages(strkImgConfig, categoriesRef.current)
  }, [])

  return (
    <div className="min-h-screen bg-[#f0f7f4] text-[#1a2e1e]">

      {/* ── NAV ── */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#1b2e22]/90 backdrop-blur-md">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <span className="text-white font-extrabold text-xl tracking-tight">🌿 Animal World</span>
          <div className="hidden md:flex gap-8 text-sm font-medium text-white/80">
            <a href="#featured" className="hover:text-[#e9c46a] transition-colors">Featured</a>
            <a href="#facts" className="hover:text-[#e9c46a] transition-colors">Fun Facts</a>
            <a href="#categories" className="hover:text-[#e9c46a] transition-colors">Categories</a>
          </div>
        </div>
      </nav>

      {/* ── HERO ── */}
      <section ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          data-strk-bg-id="hero-bg-a1b2c3"
          data-strk-bg="[hero-subtitle] [hero-title]"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1600"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#1b2e22]/70 via-[#1b2e22]/50 to-[#1b2e22]/80" />
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <p id="hero-subtitle" className="text-[#e9c46a] font-semibold text-lg md:text-xl mb-4 tracking-widest uppercase">
            Discover the Natural World
          </p>
          <h1 id="hero-title" className="text-5xl md:text-7xl font-extrabold text-white leading-tight mb-6">
            The Wonders of<br />
            <span className="text-[#52b788]">Animal Life</span>
          </h1>
          <p className="text-white/80 text-lg md:text-xl max-w-2xl mx-auto mb-10">
            From the depths of the ocean to the peaks of the mountains, Earth is home to millions of extraordinary creatures.
          </p>
          <a
            href="#featured"
            className="inline-block bg-[#52b788] hover:bg-[#2d6a4f] text-white font-bold px-8 py-4 rounded-full text-lg transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Explore Animals ↓
          </a>
        </div>
      </section>

      {/* ── INTRO STATS ── */}
      <section className="bg-[#2d6a4f] py-12">
        <div className="max-w-5xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { value: '8.7M+', label: 'Species on Earth' },
            { value: '5,500+', label: 'Mammal Species' },
            { value: '10,000+', label: 'Bird Species' },
            { value: '1M+', label: 'Insect Species' },
          ].map((stat) => (
            <div key={stat.label}>
              <p className="text-3xl md:text-4xl font-extrabold text-[#e9c46a]">{stat.value}</p>
              <p className="text-white/80 text-sm mt-1 font-medium">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── FEATURED ANIMALS ── */}
      <section id="featured" ref={gridRef} className="py-20 md:py-28 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <p id="featured-label" className="text-[#52b788] font-semibold uppercase tracking-widest text-sm mb-2">Meet the Animals</p>
            <h2 id="featured-title" className="text-3xl md:text-5xl font-bold text-[#1a2e1e]">Featured Creatures</h2>
            <p className="text-[#4a6741] mt-4 max-w-xl mx-auto text-base md:text-lg">
              A handpicked selection of some of the most fascinating animals from around the globe.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredAnimals.map((animal) => (
              <div
                key={animal.id}
                className={`${animal.color} rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col`}
              >
                <div className="relative overflow-hidden" style={{ aspectRatio: '4/3' }}>
                  <img
                    alt={animal.name}
                    className="w-full h-full object-cover"
                    data-strk-img-id={`animal-img-${animal.id}-4f8a`}
                    data-strk-img={`[animal-desc-${animal.id}] [animal-name-${animal.id}] [featured-title]`}
                    data-strk-img-ratio="4x3"
                    data-strk-img-width="600"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  />
                  <span className={`absolute top-3 left-3 text-xs font-bold px-3 py-1 rounded-full ${animal.badge}`}>
                    {animal.category}
                  </span>
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <h3 id={`animal-name-${animal.id}`} className="text-xl font-bold text-[#1a2e1e] mb-2">{animal.name}</h3>
                  <p id={`animal-desc-${animal.id}`} className="text-[#4a6741] text-sm leading-relaxed mb-4 flex-1">{animal.description}</p>
                  <div className="bg-white/60 rounded-xl p-3 border border-white/80">
                    <p className="text-xs font-semibold text-[#2d6a4f] uppercase tracking-wide mb-1">Did you know?</p>
                    <p className="text-sm text-[#1a2e1e]">{animal.fact}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FUN FACTS BANNER ── */}
      <section id="facts" className="bg-[#1b2e22] py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white">Amazing Animal Facts</h2>
            <p className="text-white/60 mt-3 text-base">Nature never stops surprising us.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {funFacts.map((item, i) => (
              <div
                key={i}
                className="flex items-start gap-5 bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-colors"
              >
                <span className="text-4xl flex-shrink-0">{item.emoji}</span>
                <p className="text-white/90 text-base leading-relaxed">{item.fact}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CATEGORIES ── */}
      <section id="categories" ref={categoriesRef} className="py-20 md:py-28 px-6 bg-[#f0f7f4]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <p id="cat-label" className="text-[#52b788] font-semibold uppercase tracking-widest text-sm mb-2">Explore by Type</p>
            <h2 id="cat-title" className="text-3xl md:text-5xl font-bold text-[#1a2e1e]">Animal Kingdoms</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((cat) => (
              <div
                key={cat.id}
                className="relative rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer group"
                style={{ minHeight: '280px' }}
              >
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                  data-strk-bg-id={`cat-bg-${cat.id}-9z2x`}
                  data-strk-bg={`[cat-desc-${cat.id}] [cat-name-${cat.id}] [cat-title]`}
                  data-strk-bg-ratio="3x4"
                  data-strk-bg-width="400"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1b2e22]/90 via-[#1b2e22]/30 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <span className="text-3xl">{cat.icon}</span>
                  <h3 id={`cat-name-${cat.id}`} className="text-white font-bold text-xl mt-1">{cat.label}</h3>
                  <p id={`cat-desc-${cat.id}`} className="text-white/75 text-sm mt-1 leading-snug">{cat.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CONSERVATION CALLOUT ── */}
      <section className="bg-[#e9c46a] py-16 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-4xl mb-4">🌍</p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#1a2e1e] mb-4">Protect Our Wildlife</h2>
          <p className="text-[#2d6a4f] text-lg leading-relaxed">
            Over 40,000 species are currently threatened with extinction. Every action counts — from reducing plastic use to supporting conservation organizations. Together, we can protect the incredible diversity of life on our planet.
          </p>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="bg-[#1b2e22] py-10 px-6 text-center">
        <p className="text-white font-bold text-xl mb-2">🌿 Animal World</p>
        <p className="text-white/50 text-sm">Celebrating the beauty and diversity of life on Earth.</p>
        <p className="text-white/30 text-xs mt-4">© {new Date().getFullYear()} Animal World. Made with ❤️ for nature.</p>
      </footer>

    </div>
  )
}
