import React, { useState } from 'react'

export default function MicroscopicDetails() {
  const [activeTab, setActiveTab] = useState('cellular')

  const microscopicSections = {
    cellular: {
      title: 'Cellular Structures',
      description: 'Explore the intricate world of plant cells, their walls, and internal organelles',
      images: [
        { title: 'Cell Wall Architecture', description: 'Complex cellulose fiber networks' },
        { title: 'Chloroplast Details', description: 'Photosynthesis powerhouses' },
        { title: 'Xylem Vessels', description: 'Water transport highways' },
        { title: 'Phloem Tubes', description: 'Sugar distribution networks' },
        { title: 'Stomatal Guards', description: 'Breathing pore controllers' },
        { title: 'Trichome Structures', description: 'Protective hair-like extensions' }
      ]
    },
    microbes: {
      title: 'Microbial Communities',
      description: 'Discover the diverse ecosystem of bacteria, fungi, and other microorganisms',
      images: [
        { title: 'Bacterial Colonies', description: 'Beneficial bacteria communities' },
        { title: 'Fungal Networks', description: 'Mycorrhizal partnerships' },
        { title: 'Lichen Symbiosis', description: 'Algae-fungi cooperation' },
        { title: 'Biofilm Formation', description: 'Protective microbial layers' },
        { title: 'Spore Structures', description: 'Reproductive microscopic units' },
        { title: 'Enzyme Activity', description: 'Molecular machinery at work' }
      ]
    },
    insects: {
      title: 'Microscopic Insects',
      description: 'Tiny arthropods and their intricate body structures and behaviors',
      images: [
        { title: 'Mite Anatomy', description: 'Eight-legged micro-predators' },
        { title: 'Springtail Details', description: 'Soil-dwelling hexapods' },
        { title: 'Thrips Structures', description: 'Minute plant feeders' },
        { title: 'Aphid Colonies', description: 'Sap-sucking communities' },
        { title: 'Scale Insects', description: 'Armored plant parasites' },
        { title: 'Insect Eggs', description: 'Microscopic life beginnings' }
      ]
    }
  }

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 to-emerald-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 
            id="microscopic-title" 
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-800 mb-6"
          >
            Microscopic Universe
          </h2>
          <p 
            id="microscopic-subtitle" 
            className="text-xl md:text-2xl text-slate-600 max-w-4xl mx-auto leading-relaxed"
          >
            Journey into the invisible world where life's most fascinating stories unfold at the cellular level
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {Object.entries(microscopicSections).map(([key, section]) => (
            <button
              key={key}
              onClick={() => setActiveTab(key)}
              className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                activeTab === key
                  ? 'bg-emerald-600 text-white shadow-lg'
                  : 'bg-white text-slate-600 hover:bg-emerald-50 hover:text-emerald-700 shadow-md'
              }`}
            >
              {section.title}
            </button>
          ))}
        </div>

        {/* Active Section Content */}
        <div className="space-y-12">
          <div className="text-center">
            <h3 
              id={`${activeTab}-section-title`} 
              className="text-3xl md:text-4xl font-bold text-slate-800 mb-4"
            >
              {microscopicSections[activeTab].title}
            </h3>
            <p 
              id={`${activeTab}-section-description`} 
              className="text-lg text-slate-600 max-w-3xl mx-auto"
            >
              {microscopicSections[activeTab].description}
            </p>
          </div>

          {/* Image Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {microscopicSections[activeTab].images.map((image, index) => (
              <div key={index} className="group">
                <div className="relative overflow-hidden rounded-2xl shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                  <img
                    alt={image.title}
                    className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
                    data-strk-img-id={`${activeTab}-${index}-${Math.random().toString(36).substr(2, 6)}`}
                    data-strk-img={`[${activeTab}-section-title] [${activeTab}-section-description] ${image.title} ${image.description} microscopic close-up detail`}
                    data-strk-img-ratio="4x3"
                    data-strk-img-width="500"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <h4 className="text-xl font-bold mb-2">{image.title}</h4>
                    <p className="text-sm opacity-90">{image.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Magnification Scale */}
        <div className="mt-16 bg-white rounded-2xl p-8 shadow-lg">
          <h3 
            id="magnification-title" 
            className="text-2xl md:text-3xl font-bold text-slate-800 text-center mb-8"
          >
            Scale of Discovery
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { scale: '10x', view: 'Leaf Surface', description: 'Visible texture and basic structures' },
              { scale: '100x', view: 'Cell Walls', description: 'Individual cells become visible' },
              { scale: '1000x', view: 'Organelles', description: 'Internal cell structures revealed' },
              { scale: '10000x', view: 'Molecules', description: 'Protein and DNA structures' }
            ].map((level, index) => (
              <div key={index} className="text-center p-6 bg-gradient-to-br from-emerald-50 to-amber-50 rounded-xl">
                <div className="w-16 h-16 bg-emerald-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {level.scale}
                </div>
                <h4 className="text-lg font-semibold text-slate-800 mb-2">{level.view}</h4>
                <p className="text-sm text-slate-600">{level.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Interactive Microscope Simulation */}
        <div className="mt-16 bg-slate-800 rounded-2xl p-8 text-white">
          <div className="text-center mb-8">
            <h3 
              id="microscope-title" 
              className="text-2xl md:text-3xl font-bold mb-4"
            >
              Virtual Microscope
            </h3>
            <p 
              id="microscope-description" 
              className="text-slate-300"
            >
              Experience the thrill of discovery through our virtual microscope interface
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <div className="bg-slate-700 rounded-xl p-6">
                <h4 className="text-xl font-semibold mb-4">Microscope Controls</h4>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span>Magnification:</span>
                    <div className="flex gap-2">
                      {['40x', '100x', '400x', '1000x'].map((mag) => (
                        <button key={mag} className="px-3 py-1 bg-emerald-600 rounded text-sm hover:bg-emerald-700 transition-colors">
                          {mag}
                        </button>
                      ))}
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Focus:</span>
                    <input type="range" className="w-32" />
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Lighting:</span>
                    <input type="range" className="w-32" />
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-square bg-black rounded-full border-8 border-slate-600 overflow-hidden">
                <img
                  alt="Microscope view"
                  className="w-full h-full object-cover"
                  data-strk-img-id={`microscope-view-${Math.random().toString(36).substr(2, 6)}`}
                  data-strk-img={`[microscope-title] [microscope-description] microscope view cellular structure magnified`}
                  data-strk-img-ratio="1x1"
                  data-strk-img-width="400"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                />
              </div>
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-emerald-500 rounded-full animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-amber-500 rounded-full animate-pulse delay-1000"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}