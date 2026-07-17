import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const MICRO_REALMS = [
  {
    id: 'pond-water',
    title: 'Pond Water',
    desc: 'A single drop teems with paramecia, amoebas, and rotifers.',
    imgId: 'realm-pond-water-4f7b1a',
    titleId: 'realm-pond-water-title',
    descId: 'realm-pond-water-desc',
  },
  {
    id: 'soil-ecosystem',
    title: 'Soil Ecosystem',
    desc: 'Bacteria, fungi, and nematodes form a hidden underground city.',
    imgId: 'realm-soil-ecosystem-a3d8e2',
    titleId: 'realm-soil-ecosystem-title',
    descId: 'realm-soil-ecosystem-desc',
  },
  {
    id: 'human-microbiome',
    title: 'Human Microbiome',
    desc: 'Trillions of microbes live on and inside us in delicate balance.',
    imgId: 'realm-human-microbiome-7c2f5b',
    titleId: 'realm-human-microbiome-title',
    descId: 'realm-human-microbiome-desc',
  },
  {
    id: 'marine-plankton',
    title: 'Marine Plankton',
    desc: "Phytoplankton produce half of Earth's oxygen from the ocean surface.",
    imgId: 'realm-marine-plankton-9e1d6c',
    titleId: 'realm-marine-plankton-title',
    descId: 'realm-marine-plankton-desc',
  },
  {
    id: 'insect-microcosm',
    title: 'Insect Microcosm',
    desc: 'Mites, springtails, and micro-wasps create miniature jungles on leaves.',
    imgId: 'realm-insect-microcosm-2b8a4f',
    titleId: 'realm-insect-microcosm-title',
    descId: 'realm-insect-microcosm-desc',
  },
  {
    id: 'extremophiles',
    title: 'Extremophiles',
    desc: 'Archaea and tardigrades survive boiling acid, radiation, and the vacuum of space.',
    imgId: 'realm-extremophiles-5d3c7e',
    titleId: 'realm-extremophiles-title',
    descId: 'realm-extremophiles-desc',
  },
]

const GALLERY_ITEMS = [
  {
    id: 'tardigrade',
    title: 'Tardigrade (Water Bear)',
    desc: 'An eight-legged micro-animal that can survive outer space.',
    imgId: 'gallery-tardigrade-e4a1f7',
    titleId: 'gallery-tardigrade-title',
    descId: 'gallery-tardigrade-desc',
  },
  {
    id: 'diatom',
    title: 'Diatom Silica Shell',
    desc: 'Intricate glass-like frustules built by single-celled algae.',
    imgId: 'gallery-diatom-1b6c3d',
    titleId: 'gallery-diatom-title',
    descId: 'gallery-diatom-desc',
  },
  {
    id: 'neuron',
    title: 'Neuron Network',
    desc: 'A fluorescent-stained neural network under confocal microscopy.',
    imgId: 'gallery-neuron-8f2e9a',
    titleId: 'gallery-neuron-title',
    descId: 'gallery-neuron-desc',
  },
  {
    id: 'pollen',
    title: 'Pollen Grains',
    desc: 'The sculptured surfaces of pollen revealed by electron microscopy.',
    imgId: 'gallery-pollen-3d7a5c',
    titleId: 'gallery-pollen-title',
    descId: 'gallery-pollen-desc',
  },
  {
    id: 'bacteria-colony',
    title: 'Bacteria Colony',
    desc: 'A vibrant petri dish showing diverse bacterial growth patterns.',
    imgId: 'gallery-bacteria-6c1b2e',
    titleId: 'gallery-bacteria-colony-title',
    descId: 'gallery-bacteria-colony-desc',
  },
  {
    id: 'rotifer',
    title: 'Rotifer Feeding',
    desc: "A rotifer's corona of cilia creates a vortex to capture prey.",
    imgId: 'gallery-rotifer-9a4d8f',
    titleId: 'gallery-rotifer-title',
    descId: 'gallery-rotifer-desc',
  },
  {
    id: 'snowflake',
    title: 'Snowflake Crystal',
    desc: 'The hexagonal symmetry of ice crystals magnified 100x.',
    imgId: 'gallery-snowflake-2f5b7c',
    titleId: 'gallery-snowflake-title',
    descId: 'gallery-snowflake-desc',
  },
  {
    id: 'butterfly-wing',
    title: 'Butterfly Wing Scales',
    desc: 'Overlapping chitin scales create iridescent structural colors.',
    imgId: 'gallery-butterfly-5e8a1d',
    titleId: 'gallery-butterfly-wing-title',
    descId: 'gallery-butterfly-wing-desc',
  },
]

const FUN_FACTS = [
  {
    id: 'bacteria-count',
    number: '39 Trillion',
    label: 'Bacteria live in your body — roughly equal to your human cells.',
    imgId: 'fact-bacteria-count-7d3f2a',
    titleId: 'fact-bacteria-count-title',
  },
  {
    id: 'tardigrade-size',
    number: '0.5 mm',
    label: 'The average length of a tardigrade, visible to the naked eye.',
    imgId: 'fact-tardigrade-size-1a9e4c',
    titleId: 'fact-tardigrade-size-title',
  },
  {
    id: 'soil-life',
    number: '1 Billion',
    label: 'Bacteria in a single teaspoon of healthy soil.',
    imgId: 'fact-soil-life-4c8b6d',
    titleId: 'fact-soil-life-title',
  },
  {
    id: 'plankton-oxygen',
    number: '50%',
    label: "Of Earth's oxygen is produced by microscopic phytoplankton.",
    imgId: 'fact-plankton-oxygen-9e2f5a',
    titleId: 'fact-plankton-oxygen-title',
  },
]

function App() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <div className="bg-navy-deep text-slate-200 min-h-screen font-sans" ref={containerRef}>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-navy-deep/80 backdrop-blur-md border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
          <span className="text-xl font-serif font-bold text-accent-cyan tracking-wide">
            MicroCosmos
          </span>
          <div className="hidden md:flex gap-8 text-sm font-medium text-slate-400">
            <a href="#about" className="hover:text-accent-cyan transition-colors">About</a>
            <a href="#gallery" className="hover:text-accent-cyan transition-colors">Gallery</a>
            <a href="#realms" className="hover:text-accent-cyan transition-colors">Realms</a>
            <a href="#facts" className="hover:text-accent-cyan transition-colors">Facts</a>
          </div>
        </div>
      </nav>

      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
        <div
          className="absolute inset-0"
          data-strk-bg-id="hero-bg-8f2a9c"
          data-strk-bg="[hero-subtitle] [hero-title]"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1600"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-navy-deep/70 via-navy-deep/50 to-navy-deep" />
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <h1 id="hero-title" className="text-5xl md:text-7xl font-serif font-bold text-white mb-6 leading-tight">
            Welcome to the <span className="text-accent-cyan">MicroCosmos</span>
          </h1>
          <p id="hero-subtitle" className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
            A breathtaking journey into the invisible universe that surrounds us —
            where every drop of water holds a galaxy of life.
          </p>
          <a
            href="#gallery"
            className="inline-block mt-10 px-8 py-3 bg-accent-cyan/10 border border-accent-cyan/30 text-accent-cyan rounded-full font-medium hover:bg-accent-cyan/20 transition-all"
          >
            Explore the Gallery
          </a>
        </div>
      </section>

      <section id="about" className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 id="about-section-title" className="text-3xl md:text-4xl font-serif font-bold text-white mb-6">
                What is the <span className="text-accent-cyan">MicroCosmos</span>?
              </h2>
              <p id="about-section-desc" className="text-slate-400 leading-relaxed text-lg mb-6">
                The MicroCosmos is the universe of life too small to see with the naked eye.
                From single-celled organisms to complex microscopic animals, this hidden world
                is all around us — in soil, water, air, and even inside our own bodies.
              </p>
              <p className="text-slate-400 leading-relaxed text-lg">
                Using powerful microscopes, scientists have revealed a realm of extraordinary
                beauty and complexity. Every glimpse through the lens reveals structures that
                rival the grandest architecture and creatures stranger than science fiction.
              </p>
            </div>
            <div className="relative">
              <img
                alt="Microscopic view of microorganisms"
                className="w-full h-80 md:h-96 object-cover rounded-2xl shadow-2xl shadow-accent-cyan/5 border border-white/5"
                data-strk-img-id="about-main-img-3d7a5c"
                data-strk-img="[about-section-desc] [about-section-title]"
                data-strk-img-ratio="4x3"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              />
              <div className="absolute -bottom-6 -left-6 w-32 h-32 rounded-xl overflow-hidden border-2 border-surface-card shadow-xl hidden md:block">
                <img
                  alt="Microscopic detail"
                  className="w-full h-full object-cover"
                  data-strk-img-id="about-detail-img-1c4b9e"
                  data-strk-img="[about-section-desc] microorganism detail"
                  data-strk-img-ratio="1x1"
                  data-strk-img-width="300"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="gallery" className="py-24 md:py-32 bg-navy-medium/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 id="gallery-section-title" className="text-3xl md:text-4xl font-serif font-bold text-white mb-4">
              Microscopic <span className="text-accent-green">Gallery</span>
            </h2>
            <p id="gallery-section-subtitle" className="text-slate-400 text-lg max-w-2xl mx-auto">
              Stunning images captured through the lens of microscopes from around the world.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {GALLERY_ITEMS.map((item) => (
              <div
                key={item.id}
                className="group bg-surface-card rounded-xl overflow-hidden border border-white/5 hover:border-accent-cyan/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-accent-cyan/5"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    data-strk-img-id={item.imgId}
                    data-strk-img={`[${item.descId}] [${item.titleId}] [gallery-section-subtitle] [gallery-section-title]`}
                    data-strk-img-ratio="4x3"
                    data-strk-img-width="600"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  />
                </div>
                <div className="p-5">
                  <h3 id={item.titleId} className="font-serif font-semibold text-white text-lg mb-2">
                    {item.title}
                  </h3>
                  <p id={item.descId} className="text-slate-400 text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="realms" className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 id="realms-section-title" className="text-3xl md:text-4xl font-serif font-bold text-white mb-4">
              Explore the <span className="text-accent-magenta">Realms</span>
            </h2>
            <p id="realms-section-subtitle" className="text-slate-400 text-lg max-w-2xl mx-auto">
              Each environment hosts a unique cast of microscopic characters.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {MICRO_REALMS.map((realm) => (
              <div
                key={realm.id}
                className="group bg-surface-dark rounded-2xl overflow-hidden border border-white/5 hover:border-accent-magenta/30 transition-all duration-300"
              >
                <div className="aspect-[16/9] overflow-hidden">
                  <img
                    alt={realm.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    data-strk-img-id={realm.imgId}
                    data-strk-img={`[${realm.descId}] [${realm.titleId}] [realms-section-subtitle] [realms-section-title]`}
                    data-strk-img-ratio="16x9"
                    data-strk-img-width="800"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  />
                </div>
                <div className="p-6">
                  <h3 id={realm.titleId} className="font-serif font-bold text-white text-xl mb-3">
                    {realm.title}
                  </h3>
                  <p id={realm.descId} className="text-slate-400 text-sm leading-relaxed">
                    {realm.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-24 md:py-28 overflow-hidden">
        <div
          className="absolute inset-0"
          data-strk-bg-id="quote-bg-6d34fa"
          data-strk-bg="[quote-text] microbiology microscope art"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1600"
        />
        <div className="absolute inset-0 bg-navy-deep/80" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <p id="quote-text" className="text-2xl md:text-3xl font-serif italic text-white leading-relaxed mb-6">
            "The microcosmos is not a lesser world — it is a universe unto itself,
            complete with beauty, terror, and endless wonder."
          </p>
          <p className="text-accent-cyan text-sm tracking-widest uppercase">— MicroCosmos Project</p>
        </div>
      </section>

      <section id="facts" className="py-24 md:py-32 bg-navy-medium/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 id="facts-section-title" className="text-3xl md:text-4xl font-serif font-bold text-white mb-4">
              Mind-Blowing <span className="text-accent-green">Facts</span>
            </h2>
            <p id="facts-section-subtitle" className="text-slate-400 text-lg max-w-2xl mx-auto">
              Numbers that will change how you see the world around you.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {FUN_FACTS.map((fact) => (
              <div
                key={fact.id}
                className="bg-surface-card rounded-2xl p-6 border border-white/5 hover:border-accent-green/30 transition-all duration-300 text-center"
              >
                <div className="w-20 h-20 mx-auto mb-5 rounded-full overflow-hidden border-2 border-accent-green/30">
                  <img
                    alt={fact.label}
                    className="w-full h-full object-cover"
                    data-strk-img-id={fact.imgId}
                    data-strk-img={`[${fact.titleId}] [facts-section-subtitle] [facts-section-title]`}
                    data-strk-img-ratio="1x1"
                    data-strk-img-width="200"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  />
                </div>
                <div id={fact.titleId} className="text-3xl font-serif font-bold text-accent-green mb-2">
                  {fact.number}
                </div>
                <p className="text-slate-400 text-sm leading-relaxed">
                  {fact.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 md:py-28">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-6">
            Ready to <span className="text-accent-cyan">Dive Deeper</span>?
          </h2>
          <p className="text-slate-400 text-lg max-w-xl mx-auto mb-10">
            The MicroCosmos is all around you — in every breath, every sip of water,
            every handful of soil. All you need is curiosity.
          </p>
          <a
            href="#about"
            className="inline-block px-8 py-3 bg-accent-cyan text-navy-deep rounded-full font-semibold hover:bg-accent-cyan/90 transition-all shadow-lg shadow-accent-cyan/20"
          >
            Start Your Journey
          </a>
        </div>
      </section>

      <footer className="border-t border-white/5 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <span className="text-xl font-serif font-bold text-accent-cyan tracking-wide">
            MicroCosmos
          </span>
          <p className="text-slate-500 text-sm">
            Exploring the invisible universe. &copy; {new Date().getFullYear()} MicroCosmos Project.
          </p>
          <div className="flex gap-6 text-sm text-slate-500">
            <a href="#about" className="hover:text-accent-cyan transition-colors">About</a>
            <a href="#gallery" className="hover:text-accent-cyan transition-colors">Gallery</a>
            <a href="#realms" className="hover:text-accent-cyan transition-colors">Realms</a>
            <a href="#facts" className="hover:text-accent-cyan transition-colors">Facts</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App