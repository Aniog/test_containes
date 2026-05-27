import React from 'react'

export default function TreeGallery() {
  const treeTypes = [
    {
      id: 'oak-trees',
      name: 'Oak Trees',
      description: 'Ancient giants with complex bark ecosystems and diverse microbial communities',
      features: ['Deep root systems', 'Thick bark microhabitats', 'Symbiotic fungi networks']
    },
    {
      id: 'pine-trees',
      name: 'Pine Trees',
      description: 'Evergreen conifers with resin-rich environments and unique needle structures',
      features: ['Resin production', 'Needle-like leaves', 'Cone reproduction systems']
    },
    {
      id: 'birch-trees',
      name: 'Birch Trees',
      description: 'Distinctive white bark harboring specialized microorganisms and insects',
      features: ['Papery bark layers', 'Seasonal leaf changes', 'Moisture retention systems']
    },
    {
      id: 'maple-trees',
      name: 'Maple Trees',
      description: 'Deciduous beauties with intricate leaf vein networks and sap flow systems',
      features: ['Complex vein patterns', 'Seasonal sap flow', 'Colorful autumn displays']
    }
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 
            id="gallery-title" 
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-800 mb-6"
          >
            Tree Gallery
          </h2>
          <p 
            id="gallery-subtitle" 
            className="text-xl md:text-2xl text-slate-600 max-w-4xl mx-auto leading-relaxed"
          >
            Explore the diverse world of trees and their microscopic inhabitants
          </p>
        </div>

        {/* Tree Types Grid */}
        <div className="space-y-20">
          {treeTypes.map((tree, index) => (
            <div key={tree.id} className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 items-center`}>
              {/* Image Grid */}
              <div className="flex-1">
                <div className="grid grid-cols-2 gap-4">
                  {/* Main large image */}
                  <div className="col-span-2">
                    <img
                      alt={`${tree.name} full view`}
                      className="w-full h-80 object-cover rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
                      data-strk-img-id={`${tree.id}-main-${Math.random().toString(36).substr(2, 6)}`}
                      data-strk-img={`[${tree.id}-name] [${tree.id}-description] full tree majestic forest`}
                      data-strk-img-ratio="16x9"
                      data-strk-img-width="800"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    />
                  </div>
                  
                  {/* Smaller detail images */}
                  <div>
                    <img
                      alt={`${tree.name} bark detail`}
                      className="w-full h-48 object-cover rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300"
                      data-strk-img-id={`${tree.id}-bark-${Math.random().toString(36).substr(2, 6)}`}
                      data-strk-img={`[${tree.id}-name] bark texture close-up detail microscopic`}
                      data-strk-img-ratio="4x3"
                      data-strk-img-width="400"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    />
                  </div>
                  
                  <div>
                    <img
                      alt={`${tree.name} leaves detail`}
                      className="w-full h-48 object-cover rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300"
                      data-strk-img-id={`${tree.id}-leaves-${Math.random().toString(36).substr(2, 6)}`}
                      data-strk-img={`[${tree.id}-name] leaves foliage detail close-up nature`}
                      data-strk-img-ratio="4x3"
                      data-strk-img-width="400"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    />
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="flex-1 space-y-6">
                <h3 
                  id={`${tree.id}-name`} 
                  className="text-3xl md:text-4xl font-bold text-slate-800"
                >
                  {tree.name}
                </h3>
                
                <p 
                  id={`${tree.id}-description`} 
                  className="text-lg text-slate-600 leading-relaxed"
                >
                  {tree.description}
                </p>

                <div className="space-y-3">
                  <h4 className="text-xl font-semibold text-emerald-700">Key Features:</h4>
                  <ul className="space-y-2">
                    {tree.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-slate-600">
                        <div className="w-2 h-2 bg-emerald-500 rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-300">
                  Explore {tree.name} Microscopy
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Gallery Grid */}
        <div className="mt-20">
          <h3 
            id="additional-gallery-title" 
            className="text-3xl md:text-4xl font-bold text-slate-800 text-center mb-12"
          >
            More Tree Wonders
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {Array.from({ length: 8 }, (_, i) => (
              <div key={i} className="group cursor-pointer">
                <img
                  alt={`Tree wonder ${i + 1}`}
                  className="w-full h-64 object-cover rounded-xl shadow-md group-hover:shadow-xl transition-all duration-300 group-hover:scale-105"
                  data-strk-img-id={`gallery-extra-${i}-${Math.random().toString(36).substr(2, 6)}`}
                  data-strk-img={`[additional-gallery-title] tree forest nature microscopic detail wonder ${i + 1}`}
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="400"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                />
                <div className="mt-3 text-center">
                  <p className="text-sm text-slate-500">Tree Wonder #{i + 1}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}