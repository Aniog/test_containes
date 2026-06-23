import React from 'react'

const galleryData = [
  { id: '1', title: 'Neuron Network', category: 'Biology', imgId: 'gal-1' },
  { id: '2', title: 'Pollen Grains', category: 'Botany', imgId: 'gal-2' },
  { id: '3', title: 'Snowflake Structure', category: 'Chemistry', imgId: 'gal-3' },
  { id: '4', title: 'Tardigrade', category: 'Zoology', imgId: 'gal-4' },
  { id: '5', title: 'Bacterial Colony', category: 'Microbiology', imgId: 'gal-5' },
  { id: '6', title: 'Butterfly Wing', category: 'Entomology', imgId: 'gal-6' },
  { id: '7', title: 'Diatom Shells', category: 'Marine Biology', imgId: 'gal-7' },
  { id: '8', title: 'Spider Eye', category: 'Entomology', imgId: 'gal-8' },
  { id: '9', title: 'Leaf Stomata', category: 'Botany', imgId: 'gal-9' },
]

const Gallery = () => {
  return (
    <section className="py-24 px-6 bg-slate-900 border-t border-slate-800">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <h2 id="gallery-title" className="text-3xl md:text-4xl font-bold mb-4">Focus Gallery</h2>
          <p id="gallery-subtitle" className="text-slate-400">
            A diverse collection of microscopic photography highlighting the beauty of nature at its smallest scale.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryData.map((item) => {
            const titleId = `gal-title-${item.id}`
            const catId = `gal-cat-${item.id}`
            
            return (
              <div key={item.id} className="group relative overflow-hidden rounded-lg bg-slate-950 aspect-[3/4]">
                <img
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 opacity-80 group-hover:opacity-100"
                  data-strk-img-id={item.imgId}
                  data-strk-img={`[${catId}] [${titleId}] [gallery-title]`}
                  data-strk-img-ratio="3x4"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent flex flex-col justify-end p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span id={catId} className="text-cyan-400 text-sm font-semibold tracking-wider uppercase mb-1">
                    {item.category}
                  </span>
                  <h3 id={titleId} className="text-xl font-bold text-white">
                    {item.title}
                  </h3>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Gallery
