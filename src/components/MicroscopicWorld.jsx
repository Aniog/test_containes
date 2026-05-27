import React from 'react'

const MicroscopicWorld = () => {
  const microscopicElements = [
    {
      id: 'bacteria-colonies',
      title: 'Bacterial Colonies',
      description: 'Intricate bacterial communities forming complex patterns on bark surfaces',
      magnification: '1000x'
    },
    {
      id: 'fungal-networks',
      title: 'Fungal Networks',
      description: 'Mycelial threads connecting trees in underground communication networks',
      magnification: '500x'
    },
    {
      id: 'lichen-structures',
      title: 'Lichen Structures',
      description: 'Symbiotic organisms creating beautiful geometric patterns on tree bark',
      magnification: '200x'
    },
    {
      id: 'moss-spores',
      title: 'Moss Spores',
      description: 'Delicate spore structures ready to colonize new tree surfaces',
      magnification: '800x'
    },
    {
      id: 'leaf-stomata',
      title: 'Leaf Stomata',
      description: 'Microscopic pores on leaf surfaces controlling gas exchange',
      magnification: '400x'
    },
    {
      id: 'root-hairs',
      title: 'Root Hair Cells',
      description: 'Tiny root extensions maximizing nutrient absorption from soil',
      magnification: '300x'
    }
  ]

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-soft-cream to-light-green">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 id="micro-title" className="text-4xl md:text-5xl font-bold text-forest-green mb-6">
            The Microscopic Universe
          </h2>
          <p id="micro-subtitle" className="text-xl text-medium-gray max-w-3xl mx-auto leading-relaxed mb-8">
            Zoom into the invisible world where life unfolds at scales beyond human perception
          </p>
          <div className="w-24 h-1 bg-golden-amber mx-auto rounded-full"></div>
        </div>

        {/* Microscopic Gallery */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {microscopicElements.map((element, index) => (
            <div key={element.id} className="group">
              <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 hover:scale-105">
                {/* Microscopic Image */}
                <div className="relative overflow-hidden">
                  <img
                    alt={element.title}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                    data-strk-img-id={`micro-${element.id}-${index}`}
                    data-strk-img={`[micro-element-title-${element.id}] [micro-element-desc-${element.id}] microscopic tree structures`}
                    data-strk-img-ratio="4x3"
                    data-strk-img-width="600"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  />
                  
                  {/* Magnification Badge */}
                  <div className="absolute top-4 right-4 bg-forest-green text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {element.magnification}
                  </div>
                  
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-forest-green/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <div className="p-4 text-white">
                      <p className="text-sm font-medium">Click to explore</p>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 id={`micro-element-title-${element.id}`} className="text-xl font-semibold text-forest-green mb-3">
                    {element.title}
                  </h3>
                  <p id={`micro-element-desc-${element.id}`} className="text-medium-gray leading-relaxed">
                    {element.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Interactive Microscope Section */}
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-forest-green mb-6">
                Virtual Microscope Experience
              </h3>
              <p className="text-medium-gray text-lg leading-relaxed mb-6">
                Step into our virtual laboratory and explore tree microstructures 
                at different magnification levels. Discover the hidden architecture 
                that makes forest ecosystems possible.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-golden-amber rounded-full"></div>
                  <span className="text-dark-charcoal">High-resolution microscopic imagery</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-golden-amber rounded-full"></div>
                  <span className="text-dark-charcoal">Interactive zoom controls</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-golden-amber rounded-full"></div>
                  <span className="text-dark-charcoal">Educational annotations</span>
                </div>
              </div>
              
              <button className="mt-8 bg-moss-green hover:bg-forest-green text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:scale-105 shadow-lg">
                Launch Virtual Microscope
              </button>
            </div>
            
            <div className="relative">
              <img
                alt="Virtual Microscope Interface"
                className="w-full rounded-xl shadow-lg"
                data-strk-img-id="virtual-microscope-interface"
                data-strk-img="virtual microscope interface scientific equipment laboratory"
                data-strk-img-ratio="4x3"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              />
              
              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 bg-golden-amber text-dark-charcoal p-3 rounded-full shadow-lg">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default MicroscopicWorld