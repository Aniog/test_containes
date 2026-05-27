import React from 'react'

const TreeGallery = () => {
  const treeTypes = [
    {
      id: 'oak-tree',
      name: 'Ancient Oak',
      description: 'Majestic oak trees with their complex bark ecosystems',
      details: 'Home to countless microorganisms, lichens, and tiny creatures'
    },
    {
      id: 'pine-forest',
      name: 'Pine Forest',
      description: 'Evergreen giants with needle-covered floors',
      details: 'Rich in resin compounds and unique microbial communities'
    },
    {
      id: 'birch-grove',
      name: 'Birch Grove',
      description: 'Elegant white-barked trees in serene groves',
      details: 'Distinctive bark patterns harbor specialized microorganisms'
    },
    {
      id: 'redwood-giants',
      name: 'Redwood Giants',
      description: 'Towering ancient redwoods reaching for the sky',
      details: 'Centuries-old ecosystems in their massive trunks'
    },
    {
      id: 'maple-canopy',
      name: 'Maple Canopy',
      description: 'Vibrant maple trees with seasonal transformations',
      details: 'Leaf surfaces teem with microscopic life forms'
    },
    {
      id: 'willow-streams',
      name: 'Weeping Willow',
      description: 'Graceful willows by water sources',
      details: 'Moisture-loving microbes thrive in their environment'
    }
  ]

  return (
    <section className="py-16 px-4 bg-soft-cream">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 id="gallery-title" className="text-4xl md:text-5xl font-bold text-forest-green mb-6">
            Tree Gallery
          </h2>
          <p id="gallery-subtitle" className="text-xl text-medium-gray max-w-3xl mx-auto leading-relaxed">
            Each tree species creates its own unique microcosmos, hosting diverse communities 
            of microscopic life that shape our natural world
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {treeTypes.map((tree, index) => (
            <div key={tree.id} className="group">
              <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105">
                {/* Tree Image */}
                <div className="aspect-w-4 aspect-h-3 relative overflow-hidden">
                  <img
                    alt={tree.name}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                    data-strk-img-id={`tree-${tree.id}-${index}`}
                    data-strk-img={`[tree-name-${tree.id}] [tree-desc-${tree.id}] [gallery-subtitle] [gallery-title]`}
                    data-strk-img-ratio="4x3"
                    data-strk-img-width="600"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 id={`tree-name-${tree.id}`} className="text-xl font-semibold text-forest-green mb-3">
                    {tree.name}
                  </h3>
                  <p id={`tree-desc-${tree.id}`} className="text-medium-gray mb-3 leading-relaxed">
                    {tree.description}
                  </p>
                  <p className="text-sm text-moss-green font-medium">
                    {tree.details}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Gallery Section */}
        <div className="mt-20">
          <h3 className="text-3xl font-bold text-forest-green text-center mb-12">
            Seasonal Transformations
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {['Spring Buds', 'Summer Canopy', 'Autumn Colors', 'Winter Branches'].map((season, index) => (
              <div key={season} className="group">
                <div className="bg-light-green rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300">
                  <div className="aspect-square relative overflow-hidden">
                    <img
                      alt={season}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      data-strk-img-id={`season-${index}-${season.toLowerCase().replace(' ', '-')}`}
                      data-strk-img={`${season} trees microscopic details seasonal changes`}
                      data-strk-img-ratio="1x1"
                      data-strk-img-width="400"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    />
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-forest-green text-center">
                      {season}
                    </h4>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default TreeGallery