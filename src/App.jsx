import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import './App.css'

const microorganisms = [
  {
    id: 'amoeba',
    title: 'Amoeba',
    subtitle: 'The Shape-Shifter',
    description: 'Single-celled organisms that constantly change shape as they move and feed. They extend pseudopods to engulf food particles.',
    funFact: 'An amoeba can divide into two new amoebas in just 30 minutes!',
    titleId: 'micro-amoeba-title',
    descId: 'micro-amoeba-desc',
    imgId: 'micro-amoeba-img'
  },
  {
    id: 'paramecium',
    title: 'Paramecium',
    subtitle: 'The Slipper Organism',
    description: 'Slipper-shaped protists covered in tiny hair-like cilia that beat in waves to help them swim through water.',
    funFact: 'Paramecia have two types of nuclei - a large macronucleus and a small micronucleus!',
    titleId: 'micro-paramecium-title',
    descId: 'micro-paramecium-desc',
    imgId: 'micro-paramecium-img'
  },
  {
    id: 'euglena',
    title: 'Euglena',
    subtitle: 'The Light Seeker',
    description: 'Unique organisms that can both photosynthesize like plants and consume food like animals.',
    funFact: 'Euglena have a red eyespot that helps them detect light for photosynthesis!',
    titleId: 'micro-euglena-title',
    descId: 'micro-euglena-desc',
    imgId: 'micro-euglena-img'
  },
  {
    id: 'vorticella',
    title: 'Vorticella',
    subtitle: 'The Bell Animalcule',
    description: 'Bell-shaped ciliates that anchor themselves with a spring-like stalk to surfaces in freshwater.',
    funFact: 'When disturbed, vorticella contract their stalks at incredible speed - one of the fastest movements in nature!',
    titleId: 'micro-vorticella-title',
    descId: 'micro-vorticella-desc',
    imgId: 'micro-vorticella-img'
  },
  {
    id: 'stentor',
    title: 'Stentor',
    subtitle: 'The Trumpet Animalcule',
    description: 'Among the largest single-celled organisms, shaped like a trumpet and filter-feeding through their cilia.',
    funFact: 'Stentor can regenerate from tiny fragments - even a small piece can grow into a complete organism!',
    titleId: 'micro-stentor-title',
    descId: 'micro-stentor-desc',
    imgId: 'micro-stentor-img'
  },
  {
    id: 'rotifer',
    title: 'Rotifer',
    subtitle: 'The Wheel Animal',
    description: 'Microscopic animals with a corona of cilia that creates a vortex to draw in food particles.',
    funFact: 'Some rotifer species can survive being completely dried out for years!',
    titleId: 'micro-rotifer-title',
    descId: 'micro-rotifer-desc',
    imgId: 'micro-rotifer-img'
  },
  {
    id: 'tardigrade',
    title: 'Tardigrade',
    subtitle: 'The Water Bear',
    description: 'Microscopic animals famous for their extreme survival abilities, found everywhere from deep oceans to mountain peaks.',
    funFact: 'Tardigrades can survive in space, withstand extreme radiation, and endure temperatures from -272°C to 150°C!',
    titleId: 'micro-tardigrade-title',
    descId: 'micro-tardigrade-desc',
    imgId: 'micro-tardigrade-img'
  },
  {
    id: 'hydra',
    title: 'Hydra',
    subtitle: 'The Immortal Creature',
    description: 'Tiny freshwater cnidarians with tentacles that stun prey with specialized stinging cells.',
    funFact: 'Hydra show negligible senescence - they essentially do not age and can regenerate from small tissue fragments!',
    titleId: 'micro-hydra-title',
    descId: 'micro-hydra-desc',
    imgId: 'micro-hydra-img'
  }
]

const galleryItems = [
  { id: 'diatom', title: 'Diatom', subtitle: 'Glass Houses', titleId: 'gallery-diatom-title', descId: 'gallery-diatom-desc', imgId: 'gallery-diatom-img' },
  { id: 'radiolarian', title: 'Radiolarian', subtitle: 'Silicate Skeletons', titleId: 'gallery-radiolarian-title', descId: 'gallery-radiolarian-desc', imgId: 'gallery-radiolarian-img' },
  { id: 'foram', title: 'Foraminifera', subtitle: 'Shell Builders', titleId: 'gallery-foram-title', descId: 'gallery-foram-desc', imgId: 'gallery-foram-img' },
  { id: 'volvox', title: 'Volvox', subtitle: 'Colonial Algae', titleId: 'gallery-volvox-title', descId: 'gallery-volvox-desc', imgId: 'gallery-volvox-img' },
  { id: 'spirogyra', title: 'Spirogyra', subtitle: 'Spiral Algae', titleId: 'gallery-spirogyra-title', descId: 'gallery-spirogyra-desc', imgId: 'gallery-spirogyra-img' },
  { id: 'desmid', title: 'Desmid', subtitle: 'Green Gems', titleId: 'gallery-desmid-title', descId: 'gallery-desmid-desc', imgId: 'gallery-desmid-img' },
  { id: 'actinosphaerium', title: 'Actinosphaerium', subtitle: 'Sun Animalcule', titleId: 'gallery-actinosphaerium-title', descId: 'gallery-actinosphaerium-desc', imgId: 'gallery-actinosphaerium-img' },
  { id: 'didinium', title: 'Didinium', subtitle: 'The Hunter', titleId: 'gallery-didinium-title', descId: 'gallery-didinium-desc', imgId: 'gallery-didinium-img' },
  { id: 'blepharisma', title: 'Blepharisma', subtitle: 'Pink Beauty', titleId: 'gallery-blepharisma-title', descId: 'gallery-blepharisma-desc', imgId: 'gallery-blepharisma-img' },
  { id: 'lacrymaria', title: 'Lacrymaria', subtitle: 'The Teardrop', titleId: 'gallery-lacrymaria-title', descId: 'gallery-lacrymaria-desc', imgId: 'gallery-lacrymaria-img' },
  { id: 'ciliate', title: 'Ciliate', subtitle: 'Hair Swimmers', titleId: 'gallery-ciliate-title', descId: 'gallery-ciliate-desc', imgId: 'gallery-ciliate-img' },
  { id: 'noctiluca', title: 'Noctiluca', subtitle: 'Sea Sparkle', titleId: 'gallery-noctiluca-title', descId: 'gallery-noctiluca-desc', imgId: 'gallery-noctiluca-img' }
]

function App() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <div ref={containerRef} className="min-h-screen bg-[#0a0a0f]">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0f]/80 backdrop-blur-md border-b border-indigo-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-2">
              <svg className="w-8 h-8 text-indigo-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10" />
                <circle cx="12" cy="12" r="4" />
                <line x1="12" y1="2" x2="12" y2="6" />
                <line x1="12" y1="18" x2="12" y2="22" />
                <line x1="2" y1="12" x2="6" y2="12" />
                <line x1="18" y1="12" x2="22" y2="12" />
              </svg>
              <span className="text-xl font-semibold text-indigo-300" style={{ fontFamily: "'Playfair Display', serif" }}>
                MicroCosmos
              </span>
            </div>
            <div className="hidden md:flex items-center gap-8">
              <a href="#about" className="text-sm text-slate-300 hover:text-indigo-400 transition-colors">About</a>
              <a href="#organisms" className="text-sm text-slate-300 hover:text-indigo-400 transition-colors">Organisms</a>
              <a href="#gallery" className="text-sm text-slate-300 hover:text-indigo-400 transition-colors">Gallery</a>
              <a href="#facts" className="text-sm text-slate-300 hover:text-indigo-400 transition-colors">Facts</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 z-0"
          data-strk-bg-id="hero-bg-microcosmos"
          data-strk-bg="[hero-title] [hero-subtitle] microscopy microorganisms"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1600"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0f]/70 via-[#0a0a0f]/50 to-[#0a0a0f] z-10" />
        
        <div className="relative z-20 text-center px-4 max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-900/50 border border-indigo-500/30 mb-8">
            <span className="w-2 h-2 bg-indigo-400 rounded-full animate-pulse" />
            <span className="text-sm text-indigo-300">Discover the Invisible</span>
          </div>
          
          <h1 id="hero-title" className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-tight">
            Micro<span className="text-indigo-400">Cosmos</span>
          </h1>
          
          <p id="hero-subtitle" className="text-xl md:text-2xl text-slate-300 mb-10 max-w-2xl mx-auto">
            A Journey Into The Hidden World of Microscopic Life
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#organisms" className="px-8 py-4 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg font-medium transition-all hover:shadow-lg hover:shadow-indigo-500/25">
              Explore Organisms
            </a>
            <a href="#gallery" className="px-8 py-4 bg-transparent border border-indigo-500/50 hover:border-indigo-400 text-indigo-300 rounded-lg font-medium transition-all">
              View Gallery
            </a>
          </div>
        </div>
        
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 animate-bounce">
          <svg className="w-6 h-6 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 px-4 relative">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-indigo-400 text-sm font-medium tracking-wider uppercase">About MicroCosmos</span>
              <h2 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-6">
                A World Beyond <br />
                <span className="text-indigo-400">The Naked Eye</span>
              </h2>
              <p className="text-slate-400 text-lg mb-6 leading-relaxed">
                Every drop of water, every grain of soil, every breath of air contains thousands of microscopic organisms. These tiny creatures, invisible to the naked eye, form the foundation of all life on Earth.
              </p>
              <p className="text-slate-400 text-lg mb-8 leading-relaxed">
                From the single-celled amoeba to the nearly indestructible tardigrade, the microcosmos is filled with incredible diversity, beauty, and survival strategies that challenge our understanding of life itself.
              </p>
              <div className="grid grid-cols-3 gap-6">
                <div className="text-center p-4 bg-indigo-900/20 rounded-xl border border-indigo-800/30">
                  <div className="text-3xl font-bold text-indigo-400">50+</div>
                  <div className="text-sm text-slate-400 mt-1">Species Featured</div>
                </div>
                <div className="text-center p-4 bg-indigo-900/20 rounded-xl border border-indigo-800/30">
                  <div className="text-3xl font-bold text-indigo-400">100x</div>
                  <div className="text-sm text-slate-400 mt-1">Magnification</div>
                </div>
                <div className="text-center p-4 bg-indigo-900/20 rounded-xl border border-indigo-800/30">
                  <div className="text-3xl font-bold text-indigo-400">3.5B</div>
                  <div className="text-sm text-slate-400 mt-1">Years of Evolution</div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden border border-indigo-800/30">
                <img
                  alt="Microscopic view of organisms"
                  className="w-full h-full object-cover"
                  data-strk-img-id="about-micro-img"
                  data-strk-img="[about-title] microscopy microorganisms cell biology"
                  data-strk-img-ratio="1x1"
                  data-strk-img-width="800"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                />
              </div>
              <div id="about-title" className="absolute -bottom-4 -right-4 bg-indigo-600 text-white px-6 py-3 rounded-xl text-sm font-medium">
                Under The Microscope
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Organisms */}
      <section id="organisms" className="py-24 px-4 bg-gradient-to-b from-[#0a0a0f] via-[#0f0f1a] to-[#0a0a0f]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-indigo-400 text-sm font-medium tracking-wider uppercase">Featured Species</span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mt-4">
              Meet The <span className="text-indigo-400">Inhabitants</span>
            </h2>
            <p className="text-slate-400 text-lg mt-4 max-w-2xl mx-auto">
              Discover some of the most fascinating microscopic organisms that call our planet home
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {microorganisms.slice(0, 4).map((org) => (
              <div key={org.id} className="group bg-[#111118] rounded-xl overflow-hidden border border-indigo-900/30 hover:border-indigo-500/50 transition-all hover:shadow-lg hover:shadow-indigo-500/10">
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    alt={org.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    data-strk-img-id={org.imgId}
                    data-strk-img={`[${org.descId}] [${org.titleId}] microscopic organism`}
                    data-strk-img-ratio="4x3"
                    data-strk-img-width="600"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  />
                </div>
                <div className="p-5">
                  <div className="text-xs text-indigo-400 font-medium mb-2">{org.subtitle}</div>
                  <h3 id={org.titleId} className="text-xl font-semibold text-white mb-2">{org.title}</h3>
                  <p id={org.descId} className="text-slate-400 text-sm leading-relaxed">{org.description}</p>
                </div>
              </div>
            ))}
          </div>
          
          {/* Second row of organisms */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
            {microorganisms.slice(4, 8).map((org) => (
              <div key={org.id} className="group bg-[#111118] rounded-xl overflow-hidden border border-indigo-900/30 hover:border-indigo-500/50 transition-all hover:shadow-lg hover:shadow-indigo-500/10">
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    alt={org.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    data-strk-img-id={org.imgId}
                    data-strk-img={`[${org.descId}] [${org.titleId}] microscopic organism`}
                    data-strk-img-ratio="4x3"
                    data-strk-img-width="600"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  />
                </div>
                <div className="p-5">
                  <div className="text-xs text-indigo-400 font-medium mb-2">{org.subtitle}</div>
                  <h3 id={org.titleId} className="text-xl font-semibold text-white mb-2">{org.title}</h3>
                  <p id={org.descId} className="text-slate-400 text-sm leading-relaxed">{org.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Parallax Banner */}
      <section className="py-32 px-4 relative">
        <div
          className="absolute inset-0 z-0"
          data-strk-bg-id="parallax-bg-micro"
          data-strk-bg="[parallax-quote] microscopy cells biology microscopic life"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1600"
        />
        <div className="absolute inset-0 bg-[#0a0a0f]/70 z-10" />
        <div className="relative z-20 text-center max-w-4xl mx-auto">
          <svg className="w-12 h-12 text-indigo-400 mx-auto mb-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
          </svg>
          <blockquote id="parallax-quote" className="text-3xl md:text-4xl text-white font-light leading-relaxed mb-8" style={{ fontFamily: "'Playfair Display', serif" }}>
            "In every drop of water, there is a universe of life waiting to be discovered."
          </blockquote>
          <div className="text-indigo-400 font-medium">- The World of Microscopy</div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-indigo-400 text-sm font-medium tracking-wider uppercase">Visual Collection</span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mt-4">
              The <span className="text-indigo-400">Gallery</span>
            </h2>
            <p className="text-slate-400 text-lg mt-4 max-w-2xl mx-auto">
              A curated collection of stunning microscopic organisms captured under the lens
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {galleryItems.map((item, index) => (
              <div
                key={item.id}
                className={`group relative rounded-xl overflow-hidden border border-indigo-900/30 hover:border-indigo-500/50 transition-all ${
                  index === 0 || index === 5 ? 'md:col-span-2 md:row-span-2' : ''
                }`}
              >
                <div className={`aspect-square overflow-hidden ${index === 0 || index === 5 ? 'aspect-auto h-full' : ''}`}>
                  <img
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    data-strk-img-id={item.imgId}
                    data-strk-img={`[${item.descId}] [${item.titleId}] microscopic organism biology`}
                    data-strk-img-ratio="1x1"
                    data-strk-img-width="600"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h3 id={item.titleId} className="text-white font-semibold text-lg">{item.title}</h3>
                    <p id={item.descId} className="text-indigo-300 text-sm">{item.subtitle}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Fun Facts Section */}
      <section id="facts" className="py-24 px-4 bg-gradient-to-b from-[#0a0a0f] via-[#0f0f1a] to-[#0a0a0f]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-indigo-400 text-sm font-medium tracking-wider uppercase">Did You Know?</span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mt-4">
              Fascinating <span className="text-indigo-400">Facts</span>
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {microorganisms.map((org) => (
              <div key={org.id} className="bg-[#111118] rounded-xl p-6 border border-indigo-900/30 hover:border-indigo-500/30 transition-all">
                <div className="w-12 h-12 bg-indigo-900/50 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{org.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{org.funFact}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-indigo-900/50 via-purple-900/50 to-indigo-900/50 rounded-2xl p-12 border border-indigo-500/20">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Explore?
            </h2>
            <p className="text-slate-300 text-lg mb-8 max-w-2xl mx-auto">
              The microcosmos is waiting to be discovered. Grab a microscope and start your journey into the invisible world.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg font-medium transition-all hover:shadow-lg hover:shadow-indigo-500/25">
                Start Exploring
              </button>
              <button className="px-8 py-4 bg-transparent border border-indigo-500/50 hover:border-indigo-400 text-indigo-300 rounded-lg font-medium transition-all">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 border-t border-indigo-900/30">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <svg className="w-6 h-6 text-indigo-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10" />
                  <circle cx="12" cy="12" r="4" />
                </svg>
                <span className="text-lg font-semibold text-indigo-300" style={{ fontFamily: "'Playfair Display', serif" }}>
                  MicroCosmos
                </span>
              </div>
              <p className="text-slate-400 text-sm">
                Exploring the hidden universe of microscopic life.
              </p>
            </div>
            <div>
              <h4 className="text-white font-medium mb-4">Explore</h4>
              <ul className="space-y-2">
                <li><a href="#organisms" className="text-slate-400 hover:text-indigo-400 text-sm transition-colors">Organisms</a></li>
                <li><a href="#gallery" className="text-slate-400 hover:text-indigo-400 text-sm transition-colors">Gallery</a></li>
                <li><a href="#facts" className="text-slate-400 hover:text-indigo-400 text-sm transition-colors">Fun Facts</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-medium mb-4">Learn</h4>
              <ul className="space-y-2">
                <li><a href="#about" className="text-slate-400 hover:text-indigo-400 text-sm transition-colors">About Microscopy</a></li>
                <li><a href="#" className="text-slate-400 hover:text-indigo-400 text-sm transition-colors">Resources</a></li>
                <li><a href="#" className="text-slate-400 hover:text-indigo-400 text-sm transition-colors">Research</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-medium mb-4">Connect</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-slate-400 hover:text-indigo-400 text-sm transition-colors">Contact</a></li>
                <li><a href="#" className="text-slate-400 hover:text-indigo-400 text-sm transition-colors">Newsletter</a></li>
                <li><a href="#" className="text-slate-400 hover:text-indigo-400 text-sm transition-colors">Social Media</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-indigo-900/30 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-slate-400 text-sm">
              © 2024 MicroCosmos. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-slate-400 hover:text-indigo-400 text-sm transition-colors">Privacy Policy</a>
              <a href="#" className="text-slate-400 hover:text-indigo-400 text-sm transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
