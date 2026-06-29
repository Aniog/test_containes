import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from './strk-img-config.json'
import './App.css'

function App() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-blue-900 to-black text-white" ref={containerRef}>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 z-0"
          data-strk-bg-id="hero-bg-microcosmos-main"
          data-strk-bg="[hero-title] [hero-subtitle]"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1920"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 z-10" />
        <div className="relative z-20 text-center px-6 max-w-4xl">
          <h1 id="hero-title" className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            MicroCosmos
          </h1>
          <p id="hero-subtitle" className="text-xl md:text-2xl mb-8 text-gray-200">
            Exploring the Hidden Universe Within - A Journey Through Microscopic Worlds
          </p>
          <button className="bg-cyan-500 hover:bg-cyan-600 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105">
            Begin Your Journey
          </button>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 id="intro-title" className="text-4xl font-bold mb-6 text-cyan-400">
                The Invisible Universe
              </h2>
              <p id="intro-description" className="text-lg text-gray-300 mb-6 leading-relaxed">
                Step into a world invisible to the naked eye, where bacteria dance like cosmic entities, 
                crystals form geometric masterpieces, and cellular structures reveal nature's most 
                intricate architectural designs. MicroCosmos unveils the breathtaking beauty that 
                exists in the smallest scales of our universe.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                Through advanced microscopy techniques, we capture the extraordinary patterns, 
                colors, and forms that exist in drops of water, grains of sand, and living cells.
              </p>
            </div>
            <div className="relative">
              <img
                data-strk-img-id="intro-microscope-image"
                data-strk-img="[intro-description] [intro-title] microscope scientific equipment"
                data-strk-img-ratio="4x3"
                data-strk-img-width="600"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt="Advanced microscopy equipment"
                className="rounded-xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 px-6 bg-slate-800 bg-opacity-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 id="gallery-title" className="text-5xl font-bold mb-6 text-purple-400">
              Microscopic Wonders
            </h2>
            <p id="gallery-subtitle" className="text-xl text-gray-300 max-w-3xl mx-auto">
              A curated collection of the most stunning microscopic imagery, revealing the hidden beauty in our world
            </p>
          </div>

          {/* Featured Large Image */}
          <div className="mb-16">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                data-strk-img-id="featured-micro-image"
                data-strk-img="[featured-title] [featured-description] [gallery-title]"
                data-strk-img-ratio="16x9"
                data-strk-img-width="1200"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt="Featured microscopic view"
                className="w-full h-96 object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-8">
                <h3 id="featured-title" className="text-3xl font-bold mb-2 text-white">
                  Crystalline Formations
                </h3>
                <p id="featured-description" className="text-lg text-gray-200">
                  Intricate crystal structures forming geometric patterns at the molecular level
                </p>
              </div>
            </div>
          </div>

          {/* Image Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                id: 'bacteria-colony',
                title: 'Bacterial Colonies',
                description: 'Colorful bacterial formations creating natural art',
                imgId: 'bacteria-colony-micro-1'
              },
              {
                id: 'cell-division',
                title: 'Cell Division',
                description: 'The miracle of life captured at the cellular level',
                imgId: 'cell-division-micro-2'
              },
              {
                id: 'pollen-grains',
                title: 'Pollen Structures',
                description: 'Intricate pollen grain architectures in vivid detail',
                imgId: 'pollen-grains-micro-3'
              },
              {
                id: 'diatoms',
                title: 'Diatom Patterns',
                description: 'Glass-like algae with perfect geometric symmetry',
                imgId: 'diatoms-micro-4'
              },
              {
                id: 'snowflake-crystal',
                title: 'Ice Crystals',
                description: 'Frozen water molecules in perfect hexagonal harmony',
                imgId: 'snowflake-crystal-micro-5'
              },
              {
                id: 'insect-eye',
                title: 'Compound Eyes',
                description: 'The complex visual systems of insects revealed',
                imgId: 'insect-eye-micro-6'
              }
            ].map((item) => (
              <div key={item.id} className="bg-slate-700 bg-opacity-50 rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                <img
                  data-strk-img-id={item.imgId}
                  data-strk-img={`[${item.id}-description] [${item.id}-title] [gallery-subtitle]`}
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="500"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={item.title}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 id={`${item.id}-title`} className="text-xl font-bold mb-2 text-cyan-400">
                    {item.title}
                  </h3>
                  <p id={`${item.id}-description`} className="text-gray-300">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Science Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 id="science-title" className="text-4xl font-bold mb-6 text-purple-400">
              The Science Behind the Beauty
            </h2>
            <p id="science-subtitle" className="text-xl text-gray-300 max-w-3xl mx-auto">
              Understanding the techniques and technologies that reveal these hidden worlds
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                id: 'electron-microscopy',
                title: 'Electron Microscopy',
                description: 'Using electron beams to achieve magnifications up to 2 million times',
                imgId: 'electron-microscopy-tech-1'
              },
              {
                id: 'fluorescence',
                title: 'Fluorescence Imaging',
                description: 'Illuminating cellular structures with fluorescent markers',
                imgId: 'fluorescence-imaging-tech-2'
              },
              {
                id: 'atomic-force',
                title: 'Atomic Force Microscopy',
                description: 'Mapping surfaces at the atomic level with incredible precision',
                imgId: 'atomic-force-tech-3'
              }
            ].map((technique) => (
              <div key={technique.id} className="bg-slate-800 bg-opacity-50 rounded-xl p-8 text-center hover:bg-opacity-70 transition-all duration-300">
                <div className="mb-6">
                  <img
                    data-strk-img-id={technique.imgId}
                    data-strk-img={`[${technique.id}-description] [${technique.id}-title] [science-subtitle]`}
                    data-strk-img-ratio="1x1"
                    data-strk-img-width="300"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={technique.title}
                    className="w-24 h-24 mx-auto rounded-full object-cover"
                  />
                </div>
                <h3 id={`${technique.id}-title`} className="text-xl font-bold mb-4 text-cyan-400">
                  {technique.title}
                </h3>
                <p id={`${technique.id}-description`} className="text-gray-300">
                  {technique.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Discovery Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-purple-900 to-blue-900">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h2 id="discovery-title" className="text-4xl font-bold text-cyan-400">
                Recent Discoveries
              </h2>
              <div className="space-y-6">
                {[
                  {
                    id: 'quantum-dots',
                    title: 'Quantum Dot Behavior',
                    description: 'New insights into quantum mechanics at the nanoscale',
                    imgId: 'quantum-dots-discovery-1'
                  },
                  {
                    id: 'protein-folding',
                    title: 'Protein Folding Patterns',
                    description: 'Revolutionary understanding of protein structures',
                    imgId: 'protein-folding-discovery-2'
                  }
                ].map((discovery) => (
                  <div key={discovery.id} className="flex gap-4 bg-black bg-opacity-30 rounded-lg p-6">
                    <img
                      data-strk-img-id={discovery.imgId}
                      data-strk-img={`[${discovery.id}-description] [${discovery.id}-title] [discovery-title]`}
                      data-strk-img-ratio="1x1"
                      data-strk-img-width="200"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                      alt={discovery.title}
                      className="w-16 h-16 rounded-lg object-cover flex-shrink-0"
                    />
                    <div>
                      <h3 id={`${discovery.id}-title`} className="text-lg font-bold mb-2 text-white">
                        {discovery.title}
                      </h3>
                      <p id={`${discovery.id}-description`} className="text-gray-300 text-sm">
                        {discovery.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <img
                data-strk-img-id="discovery-main-image"
                data-strk-img="[discovery-title] scientific breakthrough microscopic research"
                data-strk-img-ratio="4x3"
                data-strk-img-width="600"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt="Scientific discovery"
                className="rounded-xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 bg-black">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-2xl font-bold mb-4 text-cyan-400">MicroCosmos</h3>
          <p className="text-gray-400 mb-6">
            Revealing the extraordinary beauty hidden in the microscopic world
          </p>
          <div className="flex justify-center space-x-6">
            <button className="text-gray-400 hover:text-cyan-400 transition-colors">
              Explore More
            </button>
            <button className="text-gray-400 hover:text-cyan-400 transition-colors">
              Research
            </button>
            <button className="text-gray-400 hover:text-cyan-400 transition-colors">
              Contact
            </button>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
