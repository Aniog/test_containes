import React from 'react'

export default function EcosystemSection() {
  const ecosystemLayers = [
    {
      id: 'canopy',
      name: 'Canopy Layer',
      height: '30-60m',
      description: 'The uppermost layer where photosynthesis peaks and aerial microorganisms thrive',
      microorganisms: ['Epiphytic bacteria', 'Aerial fungi', 'Pollen microbes', 'UV-resistant bacteria'],
      color: 'from-emerald-400 to-green-500'
    },
    {
      id: 'understory',
      name: 'Understory',
      height: '5-30m',
      description: 'Filtered light environment with specialized shade-adapted microbial communities',
      microorganisms: ['Shade bacteria', 'Decomposer fungi', 'Symbiotic algae', 'Moisture-loving microbes'],
      color: 'from-emerald-500 to-green-600'
    },
    {
      id: 'forest-floor',
      name: 'Forest Floor',
      height: '0-5m',
      description: 'Rich in organic matter, supporting diverse decomposer communities',
      microorganisms: ['Decomposer bacteria', 'Saprophytic fungi', 'Soil microbes', 'Nitrogen fixers'],
      color: 'from-amber-600 to-amber-700'
    },
    {
      id: 'root-zone',
      name: 'Root Zone',
      height: '0 to -3m',
      description: 'Underground network where trees communicate through fungal partnerships',
      microorganisms: ['Mycorrhizal fungi', 'Rhizosphere bacteria', 'Root endophytes', 'Soil archaea'],
      color: 'from-amber-700 to-amber-800'
    }
  ]

  const relationships = [
    {
      title: 'Mycorrhizal Networks',
      description: 'Fungal threads connecting tree roots, sharing nutrients and information across the forest',
      benefit: 'Enhanced nutrient uptake and stress resistance'
    },
    {
      title: 'Nitrogen Fixation',
      description: 'Specialized bacteria convert atmospheric nitrogen into forms trees can use',
      benefit: 'Natural fertilization and soil enrichment'
    },
    {
      title: 'Decomposition Cycles',
      description: 'Microorganisms break down organic matter, recycling nutrients back to living trees',
      benefit: 'Sustainable nutrient cycling and soil health'
    },
    {
      title: 'Pathogen Defense',
      description: 'Beneficial microbes protect trees from harmful pathogens and diseases',
      benefit: 'Natural immunity and forest health'
    }
  ]

  return (
    <section className="py-20 bg-gradient-to-b from-slate-800 to-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 
            id="ecosystem-title" 
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
          >
            Forest Ecosystem
          </h2>
          <p 
            id="ecosystem-subtitle" 
            className="text-xl md:text-2xl text-slate-300 max-w-4xl mx-auto leading-relaxed"
          >
            Understanding the complex relationships between trees and their microscopic partners
          </p>
        </div>

        {/* Ecosystem Layers Visualization */}
        <div className="mb-20">
          <h3 
            id="layers-title" 
            className="text-3xl md:text-4xl font-bold text-center mb-12"
          >
            Vertical Ecosystem Layers
          </h3>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Visual Representation */}
            <div className="relative">
              <div className="space-y-2">
                {ecosystemLayers.map((layer, index) => (
                  <div
                    key={layer.id}
                    className={`relative h-24 bg-gradient-to-r ${layer.color} rounded-lg flex items-center px-6 hover:scale-105 transition-transform duration-300 cursor-pointer`}
                  >
                    <div className="text-white">
                      <h4 className="font-bold text-lg">{layer.name}</h4>
                      <p className="text-sm opacity-90">{layer.height}</p>
                    </div>
                    
                    {/* Ecosystem Image */}
                    <div className="absolute right-4 w-16 h-16 rounded-full overflow-hidden border-2 border-white/30">
                      <img
                        alt={`${layer.name} ecosystem`}
                        className="w-full h-full object-cover"
                        data-strk-img-id={`${layer.id}-ecosystem-${Math.random().toString(36).substr(2, 6)}`}
                        data-strk-img={`[ecosystem-title] ${layer.name} ${layer.description} forest layer`}
                        data-strk-img-ratio="1x1"
                        data-strk-img-width="200"
                        src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Layer Details */}
            <div className="space-y-8">
              {ecosystemLayers.map((layer) => (
                <div key={layer.id} className="bg-slate-700 rounded-xl p-6 hover:bg-slate-600 transition-colors duration-300">
                  <h4 className="text-xl font-bold text-emerald-400 mb-3">{layer.name}</h4>
                  <p className="text-slate-300 mb-4 leading-relaxed">{layer.description}</p>
                  
                  <div>
                    <h5 className="font-semibold text-amber-400 mb-2">Key Microorganisms:</h5>
                    <div className="flex flex-wrap gap-2">
                      {layer.microorganisms.map((organism, idx) => (
                        <span key={idx} className="px-3 py-1 bg-slate-800 rounded-full text-sm text-slate-300">
                          {organism}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Symbiotic Relationships */}
        <div className="mb-20">
          <h3 
            id="relationships-title" 
            className="text-3xl md:text-4xl font-bold text-center mb-12"
          >
            Symbiotic Relationships
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {relationships.map((relationship, index) => (
              <div key={index} className="bg-gradient-to-br from-slate-700 to-slate-800 rounded-2xl p-8 hover:from-slate-600 hover:to-slate-700 transition-all duration-300">
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-emerald-400">
                      <img
                        alt={relationship.title}
                        className="w-full h-full object-cover"
                        data-strk-img-id={`relationship-${index}-${Math.random().toString(36).substr(2, 6)}`}
                        data-strk-img={`[relationships-title] ${relationship.title} ${relationship.description} microscopic symbiosis`}
                        data-strk-img-ratio="1x1"
                        data-strk-img-width="200"
                        src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                      />
                    </div>
                  </div>
                  
                  <div className="flex-1">
                    <h4 className="text-xl font-bold text-emerald-400 mb-3">{relationship.title}</h4>
                    <p className="text-slate-300 mb-4 leading-relaxed">{relationship.description}</p>
                    <div className="bg-amber-600/20 border border-amber-600/30 rounded-lg p-3">
                      <p className="text-amber-300 text-sm font-medium">
                        <span className="text-amber-400 font-semibold">Benefit: </span>
                        {relationship.benefit}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Interactive Network Visualization */}
        <div className="bg-gradient-to-br from-slate-700 to-slate-800 rounded-2xl p-8">
          <h3 
            id="network-title" 
            className="text-3xl md:text-4xl font-bold text-center mb-8"
          >
            The Wood Wide Web
          </h3>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <p 
                id="network-description" 
                className="text-slate-300 leading-relaxed"
              >
                Trees communicate through an underground network of fungal threads called the "Wood Wide Web." 
                This remarkable system allows forests to share resources, send warning signals, and support 
                struggling members of the community.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-4 h-4 bg-emerald-400 rounded-full"></div>
                  <span className="text-slate-300">Nutrient sharing pathways</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-4 h-4 bg-amber-400 rounded-full"></div>
                  <span className="text-slate-300">Chemical communication signals</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-4 h-4 bg-blue-400 rounded-full"></div>
                  <span className="text-slate-300">Water distribution networks</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-4 h-4 bg-purple-400 rounded-full"></div>
                  <span className="text-slate-300">Defense response coordination</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-square bg-slate-900 rounded-2xl p-8 overflow-hidden">
                <img
                  alt="Mycorrhizal network visualization"
                  className="w-full h-full object-cover rounded-xl"
                  data-strk-img-id={`network-viz-${Math.random().toString(36).substr(2, 6)}`}
                  data-strk-img={`[network-title] [network-description] mycorrhizal network fungal threads underground communication`}
                  data-strk-img-ratio="1x1"
                  data-strk-img-width="500"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                />
                
                {/* Animated connection points */}
                <div className="absolute top-1/4 left-1/4 w-3 h-3 bg-emerald-400 rounded-full animate-pulse"></div>
                <div className="absolute top-1/3 right-1/4 w-3 h-3 bg-amber-400 rounded-full animate-pulse delay-500"></div>
                <div className="absolute bottom-1/3 left-1/3 w-3 h-3 bg-blue-400 rounded-full animate-pulse delay-1000"></div>
                <div className="absolute bottom-1/4 right-1/3 w-3 h-3 bg-purple-400 rounded-full animate-pulse delay-1500"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}