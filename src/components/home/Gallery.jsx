import React from 'react'

const galleryImages = [
  { id: 1, title: 'Neuron Network', query: 'neuron synapse brain activity microscopic', size: 'large' },
  { id: 2, title: 'Sand Grains', query: 'microscopic sand grains colorful macro', size: 'small' },
  { id: 3, title: 'Coffee Crystal', query: 'coffee crystal microscope polarization', size: 'small' },
  { id: 4, title: 'Butterfly Wing', query: 'butterfly wing scales microscope structure', size: 'medium' },
  { id: 5, title: 'Pollen Grain', query: 'pollen grain sem microscopic biology', size: 'small' },
  { id: 6, title: 'Water Drop', query: 'water droplet micro refract light macro', size: 'medium' },
  { id: 7, title: 'Diatom Shell', query: 'diatom shell silica microscope ocean', size: 'small' },
  { id: 8, title: 'Plant Stomata', query: 'plant leaf stomata microscope breathing', size: 'small' },
]

const Gallery = () => {
  return (
    <section id="gallery" className="py-24 bg-slate-900">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-xl">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Capturing the <span className="text-emerald-400 font-['Playfair_Display'] italic">Invisible</span></h2>
            <p className="text-slate-400">Our latest collection of high-resolution micro-photography from across the globe.</p>
          </div>
          <button className="px-6 py-3 border border-emerald-500/30 text-emerald-400 rounded-full hover:bg-emerald-500/10 transition-colors">
            View All Collection
          </button>
        </div>

        <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6">
          {galleryImages.map((img) => (
            <div key={img.id} className="relative group overflow-hidden rounded-xl break-inside-avoid shadow-lg">
              <img 
                data-strk-img-id={`gallery-item-${img.id}`}
                data-strk-img={img.query}
                data-strk-img-ratio="4x3"
                data-strk-img-width="600"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={img.title}
                className="w-full h-auto transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-end p-6">
                <p className="text-white font-bold">{img.title}</p>
                <p className="text-emerald-400 text-sm">Micro-photography</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Gallery
