import React from 'react'

const EcosystemSection = () => {
  const ecosystemLayers = [
    {
      id: 'canopy-layer',
      title: 'Canopy Layer',
      description: 'The uppermost layer where leaves capture sunlight and host aerial microorganisms',
      organisms: ['Epiphytic bacteria', 'Leaf-dwelling fungi', 'Photosynthetic microbes'],
      height: '30-60m'
    },
    {
      id: 'understory-layer',
      title: 'Understory Layer',
      description: 'The shaded middle layer with unique microclimates and specialized communities',
      organisms: ['Shade-adapted bacteria', 'Decomposer fungi', 'Nitrogen-fixing microbes'],
      height: '5-30m'
    },
    {
      id: 'forest-floor',
      title: 'Forest Floor',
      description: 'The nutrient-rich ground layer where decomposition and recycling occur',
      organisms: ['Soil bacteria', 'Mycorrhizal fungi', 'Decomposer microbes'],
      height: '0-2m'
    },
    {
      id: 'root-zone',
      title: 'Root Zone',
      description: 'The underground network where trees communicate and share resources',
      organisms: ['Rhizosphere bacteria', 'Fungal networks', 'Root symbionts'],
      height: '0-10m below'
    }
  ]

  const biodiversityStats = [
    { number: '10,000+', label: 'Microbial Species per Tree' },
    { number: '1 Million', label: 'Bacteria per Gram of Soil' },
    { number: '15km', label: 'Fungal Networks per Tree' },
    { number: '400+', label: 'Tree Species Worldwide' }
  ]

  return (
    <section className="py-20 px-4 bg-forest-green text-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 id="ecosystem-title" className="text-4xl md:text-5xl font-bold mb-6">
            Forest Ecosystem Layers
          </h2>
          <p id="ecosystem-subtitle" className="text-xl opacity-90 max-w-3xl mx-auto leading-relaxed">
            Every forest is a complex vertical ecosystem where microscopic life thrives 
            at different levels, each with its own unique communities and functions
          </p>
        </div>

        {/* Ecosystem Layers */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
          {ecosystemLayers.map((layer, index) => (
            <div key={layer.id} className="group">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300 hover:scale-105 border border-white/20">
                <div className="flex items-start space-x-4">
                  {/* Layer Image */}
                  <div className="flex-shrink-0">
                    <img
                      alt={layer.title}
                      className="w-20 h-20 rounded-lg object-cover"
                      data-strk-img-id={`ecosystem-${layer.id}-${index}`}
                      data-strk-img={`[layer-title-${layer.id}] [layer-desc-${layer.id}] forest ecosystem layer`}
                      data-strk-img-ratio="1x1"
                      data-strk-img-width="200"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    />
                  </div>
                  
                  {/* Layer Content */}
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-3">
                      <h3 id={`layer-title-${layer.id}`} className="text-xl font-semibold">
                        {layer.title}
                      </h3>
                      <span className="text-golden-amber text-sm font-medium bg-white/20 px-2 py-1 rounded">
                        {layer.height}
                      </span>
                    </div>
                    
                    <p id={`layer-desc-${layer.id}`} className="text-white/80 mb-4 leading-relaxed">
                      {layer.description}
                    </p>
                    
                    <div>
                      <h4 className="text-sm font-semibold text-golden-amber mb-2">Key Organisms:</h4>
                      <div className="flex flex-wrap gap-2">
                        {layer.organisms.map((organism, orgIndex) => (
                          <span key={orgIndex} className="text-xs bg-white/20 px-2 py-1 rounded-full">
                            {organism}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Biodiversity Statistics */}
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-white/20">
          <h3 className="text-3xl font-bold text-center mb-12">
            Biodiversity by the Numbers
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {biodiversityStats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="bg-golden-amber text-dark-charcoal rounded-full w-24 h-24 mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <span className="text-2xl font-bold">
                    {stat.number.split(' ')[0]}
                  </span>
                </div>
                <div className="text-golden-amber font-semibold text-lg mb-2">
                  {stat.number}
                </div>
                <div className="text-white/80 text-sm">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Interactive Ecosystem Diagram */}
        <div className="mt-20">
          <div className="bg-white/5 rounded-2xl p-8 md:p-12 border border-white/10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-3xl font-bold mb-6">
                  Interactive Forest Cross-Section
                </h3>
                <p className="text-white/80 text-lg leading-relaxed mb-6">
                  Explore how microscopic communities interact across different forest layers. 
                  Click on any layer to discover the unique microorganisms that call it home.
                </p>
                
                <div className="space-y-3">
                  {['Aerial microbiome interactions', 'Vertical nutrient cycling', 'Cross-layer communication', 'Seasonal microbial changes'].map((feature, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-golden-amber rounded-full"></div>
                      <span className="text-white/90">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <button className="mt-8 bg-golden-amber hover:bg-golden-amber/90 text-dark-charcoal px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:scale-105 shadow-lg">
                  Explore Interactive Diagram
                </button>
              </div>
              
              <div className="relative">
                <img
                  alt="Forest Cross-Section Diagram"
                  className="w-full rounded-xl"
                  data-strk-img-id="forest-cross-section-diagram"
                  data-strk-img="forest cross section diagram ecosystem layers scientific illustration"
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="800"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                />
                
                {/* Interactive Points */}
                <div className="absolute top-1/4 left-1/3 w-4 h-4 bg-golden-amber rounded-full animate-pulse cursor-pointer"></div>
                <div className="absolute top-1/2 left-1/2 w-4 h-4 bg-golden-amber rounded-full animate-pulse cursor-pointer"></div>
                <div className="absolute bottom-1/3 right-1/3 w-4 h-4 bg-golden-amber rounded-full animate-pulse cursor-pointer"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default EcosystemSection