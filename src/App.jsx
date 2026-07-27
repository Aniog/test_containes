import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import './App.css'

const MICROBES = [
  {
    id: 'tardigrade',
    title: 'Tardigrade',
    subtitle: 'Water Bear',
    desc: 'Nearly indestructible micro-animals that survive extreme temperatures, radiation, and even the vacuum of space.',
    imgId: 'microbe-tardigrade-8a3b2c',
    titleId: 'microbe-tardigrade-title',
    descId: 'microbe-tardigrade-desc',
  },
  {
    id: 'diatom',
    title: 'Diatom',
    subtitle: 'Glass Algae',
    desc: 'Single-celled algae encased in intricate silica shells, producing 20% of Earth\'s oxygen through photosynthesis.',
    imgId: 'microbe-diatom-7c1d4e',
    titleId: 'microbe-diatom-title',
    descId: 'microbe-diatom-desc',
  },
  {
    id: 'rotifer',
    title: 'Rotifer',
    subtitle: 'Wheel Animal',
    desc: 'Microscopic filter-feeders with rotating cilia crowns, found in freshwater habitats across the globe.',
    imgId: 'microbe-rotifer-5f9a6b',
    titleId: 'microbe-rotifer-title',
    descId: 'microbe-rotifer-desc',
  },
  {
    id: 'paramecium',
    title: 'Paramecium',
    subtitle: 'Slipper Animalcule',
    desc: 'Ciliated protozoans that glide through water using thousands of tiny hair-like structures.',
    imgId: 'microbe-paramecium-2d8e1f',
    titleId: 'microbe-paramecium-title',
    descId: 'microbe-paramecium-desc',
  },
  {
    id: 'euglena',
    title: 'Euglena',
    subtitle: 'Green Wanderer',
    desc: 'Unique organisms that photosynthesize like plants yet swim like animals using a whip-like flagellum.',
    imgId: 'microbe-euglena-4b7c9a',
    titleId: 'microbe-euglena-title',
    descId: 'microbe-euglena-desc',
  },
  {
    id: 'amoeba',
    title: 'Amoeba',
    subtitle: 'Shape Shifter',
    desc: 'Shape-shifting single-celled organisms that move and feed by extending pseudopods in any direction.',
    imgId: 'microbe-amoeba-3f6d0b',
    titleId: 'microbe-amoeba-title',
    descId: 'microbe-amoeba-desc',
  },
]

const GALLERY = [
  {
    id: 'bacteria-colony',
    title: 'Bacteria Colony',
    desc: 'A thriving colony of rod-shaped bacteria multiplying on an agar surface.',
    imgId: 'gallery-bacteria-colony-1a2b3c',
    titleId: 'gallery-bacteria-colony-title',
    descId: 'gallery-bacteria-colony-desc',
  },
  {
    id: 'pollen-grain',
    title: 'Pollen Grain',
    desc: 'A spiky pollen grain magnified thousands of times, revealing its intricate protective shell.',
    imgId: 'gallery-pollen-grain-4d5e6f',
    titleId: 'gallery-pollen-grain-title',
    descId: 'gallery-pollen-grain-desc',
  },
  {
    id: 'neuron-network',
    title: 'Neuron Network',
    desc: 'Brain cells forming complex networks of dendrites and synapses under fluorescence microscopy.',
    imgId: 'gallery-neuron-network-7g8h9i',
    titleId: 'gallery-neuron-network-title',
    descId: 'gallery-neuron-network-desc',
  },
  {
    id: 'snowflake-crystal',
    title: 'Snowflake Crystal',
    desc: 'A single snowflake magnified to show its perfectly symmetrical crystalline structure.',
    imgId: 'gallery-snowflake-crystal-0j1k2l',
    titleId: 'gallery-snowflake-crystal-title',
    descId: 'gallery-snowflake-crystal-desc',
  },
  {
    id: 'mold-spores',
    title: 'Mold Spores',
    desc: 'Tiny fungal spores clustered on a stalk, ready to be released into the air.',
    imgId: 'gallery-mold-spores-3m4n5o',
    titleId: 'gallery-mold-spores-title',
    descId: 'gallery-mold-spores-desc',
  },
  {
    id: 'butterfly-wing',
    title: 'Butterfly Wing',
    desc: 'The overlapping scales on a butterfly wing, creating iridescent colors through nanostructures.',
    imgId: 'gallery-butterfly-wing-6p7q8r',
    titleId: 'gallery-butterfly-wing-title',
    descId: 'gallery-butterfly-wing-desc',
  },
  {
    id: 'leaf-stomata',
    title: 'Leaf Stomata',
    desc: 'Microscopic pores on a plant leaf surface that regulate gas exchange and water vapor.',
    imgId: 'gallery-leaf-stomata-9s0t1u',
    titleId: 'gallery-leaf-stomata-title',
    descId: 'gallery-leaf-stomata-desc',
  },
  {
    id: 'sand-magnified',
    title: 'Sand Magnified',
    desc: 'Tiny grains of beach sand, revealing a hidden world of shells, crystals, and fossils.',
    imgId: 'gallery-sand-magnified-2v3w4x',
    titleId: 'gallery-sand-magnified-title',
    descId: 'gallery-sand-magnified-desc',
  },
]

function App() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <div ref={containerRef} className="min-h-screen bg-white">
      <NavBar />
      <HeroSection />
      <MicrobeGallery microbes={MICROBES} />
      <ExploreSection />
      <ImageGallery items={GALLERY} />
      <FactsSection />
      <FooterSection />
    </div>
  )
}

function NavBar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-emerald-500 to-cyan-500" />
          <span className="text-xl font-bold text-slate-800 tracking-tight">MicroCosmos</span>
        </div>
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
          <a href="#microbes" className="hover:text-emerald-600 transition-colors">Microbes</a>
          <a href="#gallery" className="hover:text-emerald-600 transition-colors">Gallery</a>
          <a href="#explore" className="hover:text-emerald-600 transition-colors">Explore</a>
          <a href="#facts" className="hover:text-emerald-600 transition-colors">Facts</a>
        </div>
      </div>
    </nav>
  )
}

function HeroSection() {
  return (
    <section className="relative pt-16">
      <div className="relative overflow-hidden">
        <div
          className="absolute inset-0"
          data-strk-bg-id="hero-bg-a1b2c3"
          data-strk-bg="[hero-subtitle] [hero-title]"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1600"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/70 via-slate-900/50 to-slate-900/80" />

        <div className="relative max-w-7xl mx-auto px-6 py-32 md:py-48 flex flex-col items-center text-center">
          <h1
            id="hero-title"
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight leading-tight max-w-4xl"
          >
            Discover the Invisible Universe
          </h1>
          <p
            id="hero-subtitle"
            className="mt-6 text-lg md:text-xl text-slate-200 max-w-2xl leading-relaxed"
          >
            Journey into the microscopic world — a hidden realm teeming with extraordinary life forms
            that shape our planet in ways we are only beginning to understand.
          </p>
          <a
            href="#microbes"
            className="mt-10 inline-flex items-center gap-2 px-8 py-3.5 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-full transition-all shadow-lg shadow-emerald-600/25 hover:shadow-emerald-600/40"
          >
            Start Exploring
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}

function MicrobeGallery({ microbes }) {
  return (
    <section id="microbes" className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2
            id="microbes-section-title"
            className="text-3xl md:text-4xl font-bold text-slate-800 tracking-tight"
          >
            Meet the Microscopic Marvels
          </h2>
          <p
            id="microbes-section-subtitle"
            className="mt-4 text-lg text-slate-500 max-w-2xl mx-auto"
          >
            These tiny organisms reveal a universe of complexity and beauty hiding just beyond our sight.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {microbes.map((microbe) => (
            <article
              key={microbe.id}
              className="group bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden hover:shadow-md hover:border-slate-200 transition-all duration-300"
            >
              <div className="relative overflow-hidden">
                <img
                  alt={microbe.title}
                  data-strk-img-id={microbe.imgId}
                  data-strk-img={`[${microbe.descId}] [microbe-${microbe.id}-subtitle] [${microbe.titleId}] [microbes-section-subtitle] [microbes-section-title]`}
                  data-strk-img-ratio="16x9"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="w-full aspect-video object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3">
                  <span
                    id={`microbe-${microbe.id}-subtitle`}
                    className="inline-block px-3 py-1 text-xs font-semibold bg-white/90 text-emerald-700 rounded-full backdrop-blur-sm"
                  >
                    {microbe.subtitle}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3
                  id={microbe.titleId}
                  className="text-xl font-bold text-slate-800"
                >
                  {microbe.title}
                </h3>
                <p
                  id={microbe.descId}
                  className="mt-3 text-slate-500 leading-relaxed"
                >
                  {microbe.desc}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function ExploreSection() {
  return (
    <section id="explore" className="relative py-20 md:py-28 bg-slate-900 overflow-hidden">
      <div
        className="absolute inset-0 opacity-30"
        data-strk-bg-id="explore-bg-d4e5f6"
        data-strk-bg="[explore-section-subtitle] [explore-section-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/70 to-slate-900/90" />

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2
              id="explore-section-title"
              className="text-3xl md:text-4xl font-bold text-white tracking-tight"
            >
              A World Hidden in Plain Sight
            </h2>
            <p
              id="explore-section-subtitle"
              className="mt-6 text-lg text-slate-300 leading-relaxed"
            >
              Every drop of pond water, every grain of soil, and every surface you touch
              is a bustling ecosystem. The microscopic world is the foundation of all life on Earth — driving
              nutrient cycles, producing oxygen, and sustaining the food web from the bottom up.
            </p>
            <div className="mt-8 grid grid-cols-2 gap-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-5 border border-white/10">
                <div className="text-3xl font-bold text-emerald-400">1M+</div>
                <div className="mt-1 text-sm text-slate-300">Microbe species discovered</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-5 border border-white/10">
                <div className="text-3xl font-bold text-cyan-400">50%</div>
                <div className="mt-1 text-sm text-slate-300">Of Earth's oxygen from microbes</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-5 border border-white/10">
                <div className="text-3xl font-bold text-emerald-400">1T+</div>
                <div className="mt-1 text-sm text-slate-300">Microbes in a gram of soil</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-5 border border-white/10">
                <div className="text-3xl font-bold text-cyan-400">3.5B</div>
                <div className="mt-1 text-sm text-slate-300">Years microbes have existed</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <img
              alt="Microscopic exploration"
              data-strk-img-id="explore-side-7g8h9i"
              data-strk-img="[explore-section-subtitle] [explore-section-title]"
              data-strk-img-ratio="4x3"
              data-strk-img-width="700"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              className="w-full rounded-2xl shadow-2xl"
            />
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-emerald-500/20 rounded-2xl -z-10" />
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-cyan-500/20 rounded-2xl -z-10" />
          </div>
        </div>
      </div>
    </section>
  )
}

function ImageGallery({ items }) {
  return (
    <section id="gallery" className="py-20 md:py-28 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2
            id="gallery-section-title"
            className="text-3xl md:text-4xl font-bold text-slate-800 tracking-tight"
          >
            Magnified Wonders
          </h2>
          <p
            id="gallery-section-subtitle"
            className="mt-4 text-lg text-slate-500 max-w-2xl mx-auto"
          >
            Peer through the microscope lens at the astonishing details of our invisible world.
          </p>
        </div>

        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {items.map((item) => (
            <div
              key={item.id}
              className="break-inside-avoid group relative rounded-2xl overflow-hidden shadow-sm border border-slate-100 bg-white hover:shadow-md transition-all duration-300"
            >
              <img
                alt={item.title}
                data-strk-img-id={item.imgId}
                data-strk-img={`[${item.descId}] [${item.titleId}] [gallery-section-subtitle] [gallery-section-title]`}
                data-strk-img-ratio="4x3"
                data-strk-img-width="700"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                className="w-full group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <h3
                  id={item.titleId}
                  className="text-lg font-bold text-white"
                >
                  {item.title}
                </h3>
                <p
                  id={item.descId}
                  className="mt-1 text-sm text-slate-200"
                >
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function FactsSection() {
  const facts = [
    {
      title: 'Ancient Origins',
      desc: 'Microorganisms were the first life forms on Earth, appearing over 3.5 billion years ago and paving the way for all complex life.',
    },
    {
      title: 'Invisible Majority',
      desc: 'There are more microbes in a single teaspoon of soil than there are humans on the entire planet.',
    },
    {
      title: 'Extreme Survivors',
      desc: 'Tardigrades can survive temperatures from -272°C to 150°C, boiling water, and even the vacuum of space for days.',
    },
    {
      title: 'Ocean Engineers',
      desc: 'Phytoplankton — microscopic marine algae — produce more than half of the world\'s oxygen supply.',
    },
  ]

  return (
    <section id="facts" className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2
            id="facts-section-title"
            className="text-3xl md:text-4xl font-bold text-slate-800 tracking-tight"
          >
            Mind-Blowing Micro-Facts
          </h2>
          <p
            id="facts-section-subtitle"
            className="mt-4 text-lg text-slate-500 max-w-2xl mx-auto"
          >
            The microscopic world is full of surprises. Here are some of our favorites.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {facts.map((fact, i) => (
            <div
              key={i}
              className="flex gap-5 p-6 rounded-2xl bg-slate-50 border border-slate-100 hover:border-emerald-200 hover:bg-emerald-50/30 transition-all duration-300"
            >
              <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500 to-cyan-500 flex items-center justify-center text-white font-bold text-lg">
                {i + 1}
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-800">{fact.title}</h3>
                <p className="mt-2 text-slate-500 leading-relaxed">{fact.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function FooterSection() {
  return (
    <footer className="bg-slate-900 text-slate-400">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-emerald-500 to-cyan-500" />
            <div>
              <div className="text-xl font-bold text-white tracking-tight">MicroCosmos</div>
              <div className="text-sm text-slate-400 mt-0.5">Exploring the invisible universe</div>
            </div>
          </div>
          <div className="flex gap-6 text-sm">
            <a href="#microbes" className="hover:text-white transition-colors">Microbes</a>
            <a href="#gallery" className="hover:text-white transition-colors">Gallery</a>
            <a href="#explore" className="hover:text-white transition-colors">Explore</a>
            <a href="#facts" className="hover:text-white transition-colors">Facts</a>
          </div>
        </div>
        <div className="mt-10 pt-8 border-t border-slate-800 text-center text-sm text-slate-500">
          &copy; {new Date().getFullYear()} MicroCosmos. The microscopic world awaits your discovery.
        </div>
      </div>
    </footer>
  )
}

export default App
