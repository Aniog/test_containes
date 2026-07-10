import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import './App.css'

const organisms = [
  {
    id: 'tardigrade',
    title: 'Tardigrades',
    desc: 'Nearly indestructible micro-animals that survive extreme conditions including space vacuum',
    imgId: 'organism-tardigrade-a1b2c3',
    titleId: 'organism-tardigrade-title',
    descId: 'organism-tardigrade-desc',
  },
  {
    id: 'diatom',
    title: 'Diatoms',
    desc: 'Microscopic algae with intricate glass-like silica shells in stunning geometric patterns',
    imgId: 'organism-diatom-d4e5f6',
    titleId: 'organism-diatom-title',
    descId: 'organism-diatom-desc',
  },
  {
    id: 'rotifer',
    title: 'Rotifers',
    desc: 'Tiny aquatic animals with spinning wheel-like cilia used for feeding and locomotion',
    imgId: 'organism-rotifer-g7h8i9',
    titleId: 'organism-rotifer-title',
    descId: 'organism-rotifer-desc',
  },
  {
    id: 'amoeba',
    title: 'Amoebas',
    desc: 'Shape-shifting single-celled organisms that move by extending pseudopods',
    imgId: 'organism-amoeba-j1k2l3',
    titleId: 'organism-amoeba-title',
    descId: 'organism-amoeba-desc',
  },
  {
    id: 'paramecium',
    title: 'Paramecium',
    desc: 'Slipper-shaped protists covered in thousands of tiny hair-like cilia',
    imgId: 'organism-paramecium-m4n5o6',
    titleId: 'organism-paramecium-title',
    descId: 'organism-paramecium-desc',
  },
  {
    id: 'radiolaria',
    title: 'Radiolaria',
    desc: 'Marine protozoa with elaborate mineral skeletons of breathtaking symmetry',
    imgId: 'organism-radiolaria-p7q8r9',
    titleId: 'organism-radiolaria-title',
    descId: 'organism-radiolaria-desc',
  },
]

const gallery = [
  {
    id: 'cell-division',
    title: 'Cell Division',
    desc: 'Mitosis captured under fluorescence microscopy showing chromosomes separating',
    imgId: 'gallery-celldiv-s1t2u3',
    titleId: 'gallery-cell-division-title',
    descId: 'gallery-cell-division-desc',
  },
  {
    id: 'pollen-grain',
    title: 'Pollen Grains',
    desc: 'Colorful scanning electron microscope image of various flower pollen grains',
    imgId: 'gallery-pollen-v4w5x6',
    titleId: 'gallery-pollen-grain-title',
    descId: 'gallery-pollen-grain-desc',
  },
  {
    id: 'neuron-network',
    title: 'Neural Networks',
    desc: 'Fluorescent stained neurons forming intricate branching connections in brain tissue',
    imgId: 'gallery-neuron-y7z8a1',
    titleId: 'gallery-neuron-network-title',
    descId: 'gallery-neuron-network-desc',
  },
  {
    id: 'crystal-formation',
    title: 'Crystal Formations',
    desc: 'Polarized light microscopy revealing colorful crystal structures in minerals',
    imgId: 'gallery-crystal-b2c3d4',
    titleId: 'gallery-crystal-formation-title',
    descId: 'gallery-crystal-formation-desc',
  },
  {
    id: 'blood-cells',
    title: 'Blood Cells',
    desc: 'Red and white blood cells flowing through capillaries under high magnification',
    imgId: 'gallery-blood-e5f6g7',
    titleId: 'gallery-blood-cells-title',
    descId: 'gallery-blood-cells-desc',
  },
  {
    id: 'butterfly-wing',
    title: 'Butterfly Wing Scales',
    desc: 'Iridescent nano-scale structures on butterfly wings creating vivid colors',
    imgId: 'gallery-butterfly-h8i9j1',
    titleId: 'gallery-butterfly-wing-title',
    descId: 'gallery-butterfly-wing-desc',
  },
  {
    id: 'bacteria-colony',
    title: 'Bacteria Colonies',
    desc: 'Colorful bacterial cultures growing in petri dishes forming organic patterns',
    imgId: 'gallery-bacteria-k2l3m4',
    titleId: 'gallery-bacteria-colony-title',
    descId: 'gallery-bacteria-colony-desc',
  },
  {
    id: 'snowflake',
    title: 'Snowflake Crystals',
    desc: 'Macro photography of individual snowflakes showing hexagonal ice crystal symmetry',
    imgId: 'gallery-snowflake-n5o6p7',
    titleId: 'gallery-snowflake-title',
    descId: 'gallery-snowflake-desc',
  },
]

const features = [
  {
    id: 'electron-microscopy',
    title: 'Electron Microscopy',
    desc: 'Scanning and transmission electron microscopes reveal structures at nanometer scale',
    imgId: 'feature-electron-q8r9s1',
    titleId: 'feature-electron-microscopy-title',
    descId: 'feature-electron-microscopy-desc',
  },
  {
    id: 'fluorescence',
    title: 'Fluorescence Imaging',
    desc: 'Fluorescent dyes illuminate specific cellular structures in brilliant colors',
    imgId: 'feature-fluorescence-t2u3v4',
    titleId: 'feature-fluorescence-title',
    descId: 'feature-fluorescence-desc',
  },
  {
    id: 'confocal',
    title: 'Confocal Microscopy',
    desc: 'Laser scanning creates sharp optical sections for three-dimensional reconstruction',
    imgId: 'feature-confocal-w5x6y7',
    titleId: 'feature-confocal-title',
    descId: 'feature-confocal-desc',
  },
]

function App() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <div ref={containerRef} className="min-h-screen bg-cosmos-dark text-cosmos-text">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 z-0"
          data-strk-bg-id="hero-bg-mc01a2b3"
          data-strk-bg="[hero-subtitle] [hero-title]"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1600"
        />
        <div className="absolute inset-0 bg-cosmos-dark/70 z-10" />
        <div className="relative z-20 text-center max-w-5xl mx-auto px-4">
          <p className="text-cosmos-primary font-semibold text-sm md:text-base uppercase tracking-widest mb-4">
            Explore the Invisible
          </p>
          <h1
            id="hero-title"
            className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight mb-6 bg-gradient-to-r from-cosmos-primary via-cosmos-secondary to-cosmos-accent bg-clip-text text-transparent"
          >
            MicroCosmos
          </h1>
          <p
            id="hero-subtitle"
            className="text-lg md:text-2xl text-cosmos-muted max-w-3xl mx-auto leading-relaxed"
          >
            A journey into the breathtaking hidden world beneath our eyes — where single cells become universes and water drops hold entire ecosystems
          </p>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center">
            <div>
              <h2
                id="intro-title"
                className="text-3xl md:text-5xl font-bold tracking-tight mb-6"
              >
                The Unseen World
              </h2>
              <p
                id="intro-desc"
                className="text-cosmos-muted text-lg leading-relaxed mb-6"
              >
                Beneath the threshold of human vision lies a universe of extraordinary complexity and beauty. Every drop of pond water teems with life — predators and prey, architects and wanderers, all engaged in an ancient dance of survival.
              </p>
              <p className="text-cosmos-muted text-lg leading-relaxed">
                Modern microscopy has opened windows into this realm, revealing organisms of stunning elegance and environments of unexpected drama. Welcome to the MicroCosmos.
              </p>
            </div>
            <div className="rounded-2xl overflow-hidden border border-cosmos-border">
              <img
                alt="Microscopic pond water ecosystem"
                data-strk-img-id="intro-img-c4d5e6"
                data-strk-img="[intro-desc] [intro-title]"
                data-strk-img-ratio="4x3"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Organisms Grid Section */}
      <section className="py-20 md:py-32 bg-cosmos-surface">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <h2
              id="organisms-title"
              className="text-3xl md:text-5xl font-bold tracking-tight mb-4"
            >
              Microscopic Inhabitants
            </h2>
            <p
              id="organisms-subtitle"
              className="text-cosmos-muted text-lg max-w-2xl mx-auto"
            >
              Meet the remarkable creatures that thrive in the microscopic realm, each with unique adaptations and extraordinary abilities
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {organisms.map((org) => (
              <article
                key={org.id}
                className="group rounded-2xl border border-cosmos-border bg-cosmos-dark overflow-hidden hover:border-cosmos-primary/50 transition-all duration-300"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    alt={org.title}
                    data-strk-img-id={org.imgId}
                    data-strk-img={`[${org.descId}] [${org.titleId}] [organisms-title]`}
                    data-strk-img-ratio="4x3"
                    data-strk-img-width="600"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 id={org.titleId} className="text-xl font-bold mb-2">
                    {org.title}
                  </h3>
                  <p id={org.descId} className="text-cosmos-muted text-sm leading-relaxed">
                    {org.desc}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Full-width Feature Image */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div
          className="absolute inset-0"
          data-strk-bg-id="feature-bg-f7g8h9"
          data-strk-bg="[feature-banner-desc] [feature-banner-title]"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1600"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-cosmos-dark via-cosmos-dark/80 to-transparent" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8">
          <div className="max-w-xl">
            <h2
              id="feature-banner-title"
              className="text-3xl md:text-5xl font-bold tracking-tight mb-6"
            >
              Worlds Within Worlds
            </h2>
            <p
              id="feature-banner-desc"
              className="text-cosmos-muted text-lg leading-relaxed"
            >
              A single teaspoon of seawater contains millions of bacteria, hundreds of thousands of phytoplankton, and thousands of protists. Each organism is a universe of molecular machinery working in perfect harmony.
            </p>
          </div>
        </div>
      </section>

      {/* Imaging Techniques Section */}
      <section className="py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <h2
              id="techniques-title"
              className="text-3xl md:text-5xl font-bold tracking-tight mb-4"
            >
              Imaging the Invisible
            </h2>
            <p
              id="techniques-subtitle"
              className="text-cosmos-muted text-lg max-w-2xl mx-auto"
            >
              Advanced microscopy techniques that reveal the hidden architecture of life at nanometer resolution
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feat) => (
              <article
                key={feat.id}
                className="rounded-2xl border border-cosmos-border bg-cosmos-surface overflow-hidden hover:shadow-lg hover:shadow-cosmos-primary/5 transition-all duration-300"
              >
                <div className="aspect-[3/2] overflow-hidden">
                  <img
                    alt={feat.title}
                    data-strk-img-id={feat.imgId}
                    data-strk-img={`[${feat.descId}] [${feat.titleId}] [techniques-title]`}
                    data-strk-img-ratio="3x2"
                    data-strk-img-width="600"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6 md:p-8">
                  <h3 id={feat.titleId} className="text-xl font-bold mb-3">
                    {feat.title}
                  </h3>
                  <p id={feat.descId} className="text-cosmos-muted text-sm leading-relaxed">
                    {feat.desc}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 md:py-32 bg-cosmos-surface">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <h2
              id="gallery-title"
              className="text-3xl md:text-5xl font-bold tracking-tight mb-4"
            >
              Micro Gallery
            </h2>
            <p
              id="gallery-subtitle"
              className="text-cosmos-muted text-lg max-w-2xl mx-auto"
            >
              A curated collection of stunning microscopy images showcasing the art hidden in science
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {gallery.map((item) => (
              <article
                key={item.id}
                className="group relative rounded-xl overflow-hidden border border-cosmos-border aspect-square"
              >
                <img
                  alt={item.title}
                  data-strk-img-id={item.imgId}
                  data-strk-img={`[${item.descId}] [${item.titleId}] [gallery-title]`}
                  data-strk-img-ratio="1x1"
                  data-strk-img-width="500"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-cosmos-dark/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <div>
                    <h3 id={item.titleId} className="text-sm font-bold text-cosmos-text">
                      {item.title}
                    </h3>
                    <p id={item.descId} className="text-xs text-cosmos-muted mt-1 line-clamp-2">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { value: '10M+', label: 'Species of microorganisms estimated on Earth' },
              { value: '39T', label: 'Bacteria living in the human body' },
              { value: '0.2μm', label: 'Size of the smallest known bacteria' },
              { value: '3.5B', label: 'Years since first microbial life appeared' },
            ].map((stat, i) => (
              <div
                key={i}
                className="text-center p-8 rounded-2xl border border-cosmos-border bg-cosmos-surface"
              >
                <p className="text-3xl md:text-4xl font-extrabold text-cosmos-primary mb-2">
                  {stat.value}
                </p>
                <p className="text-cosmos-muted text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Second Feature Banner */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div
          className="absolute inset-0"
          data-strk-bg-id="feature2-bg-i1j2k3"
          data-strk-bg="[feature2-desc] [feature2-title]"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1600"
        />
        <div className="absolute inset-0 bg-gradient-to-l from-cosmos-dark via-cosmos-dark/80 to-transparent" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 flex justify-end">
          <div className="max-w-xl text-right">
            <h2
              id="feature2-title"
              className="text-3xl md:text-5xl font-bold tracking-tight mb-6"
            >
              Beauty in Symmetry
            </h2>
            <p
              id="feature2-desc"
              className="text-cosmos-muted text-lg leading-relaxed"
            >
              From the hexagonal perfection of diatom shells to the fractal branching of neurons, the microscopic world reveals nature's deepest mathematical principles in forms of extraordinary beauty.
            </p>
          </div>
        </div>
      </section>

      {/* Two-column Image + Text Sections */}
      <section className="py-20 md:py-32 bg-cosmos-surface">
        <div className="max-w-7xl mx-auto px-4 md:px-8 space-y-20 md:space-y-32">
          {/* Row 1 */}
          <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center">
            <div className="rounded-2xl overflow-hidden border border-cosmos-border">
              <img
                alt="Plankton under microscope"
                data-strk-img-id="detail-plankton-l4m5n6"
                data-strk-img="[detail1-desc] [detail1-title]"
                data-strk-img-ratio="4x3"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                className="w-full h-auto"
              />
            </div>
            <div>
              <h3
                id="detail1-title"
                className="text-2xl md:text-4xl font-bold tracking-tight mb-4"
              >
                Ocean Plankton
              </h3>
              <p
                id="detail1-desc"
                className="text-cosmos-muted text-lg leading-relaxed"
              >
                Phytoplankton produce over half of Earth's oxygen through photosynthesis. These microscopic ocean drifters form the foundation of marine food webs and play a crucial role in regulating our planet's climate.
              </p>
            </div>
          </div>

          {/* Row 2 */}
          <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center">
            <div className="md:order-2 rounded-2xl overflow-hidden border border-cosmos-border">
              <img
                alt="Fungal hyphae network"
                data-strk-img-id="detail-fungi-o7p8q9"
                data-strk-img="[detail2-desc] [detail2-title]"
                data-strk-img-ratio="4x3"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                className="w-full h-auto"
              />
            </div>
            <div className="md:order-1">
              <h3
                id="detail2-title"
                className="text-2xl md:text-4xl font-bold tracking-tight mb-4"
              >
                Fungal Networks
              </h3>
              <p
                id="detail2-desc"
                className="text-cosmos-muted text-lg leading-relaxed"
              >
                Beneath the forest floor, vast networks of fungal hyphae connect trees in a "wood wide web." These microscopic threads transfer nutrients and chemical signals between plants across entire ecosystems.
              </p>
            </div>
          </div>

          {/* Row 3 */}
          <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center">
            <div className="rounded-2xl overflow-hidden border border-cosmos-border">
              <img
                alt="Virus particles electron microscopy"
                data-strk-img-id="detail-virus-r1s2t3"
                data-strk-img="[detail3-desc] [detail3-title]"
                data-strk-img-ratio="4x3"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                className="w-full h-auto"
              />
            </div>
            <div>
              <h3
                id="detail3-title"
                className="text-2xl md:text-4xl font-bold tracking-tight mb-4"
              >
                Viral Architecture
              </h3>
              <p
                id="detail3-desc"
                className="text-cosmos-muted text-lg leading-relaxed"
              >
                Viruses are nature's most efficient machines — geometric protein shells encasing genetic material. Their icosahedral symmetry and molecular precision make them both fascinating and formidable.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 border-t border-cosmos-border">
        <div className="max-w-7xl mx-auto px-4 md:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 bg-gradient-to-r from-cosmos-primary to-cosmos-secondary bg-clip-text text-transparent">
            MicroCosmos
          </h2>
          <p className="text-cosmos-muted text-sm max-w-md mx-auto">
            Exploring the extraordinary beauty and complexity of the microscopic world. Every image tells a story of life at its most fundamental scale.
          </p>
          <p className="text-cosmos-muted/60 text-xs mt-8">
            &copy; 2026 MicroCosmos. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}

export default App
