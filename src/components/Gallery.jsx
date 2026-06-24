import React from 'react'

const galleryImages = [
  { id: 'gal-1', ratio: '1x1', width: 600, titleId: 'gal-1-text', text: 'Glowing fungus spores microscopic view' },
  { id: 'gal-2', ratio: '16x9', width: 800, titleId: 'gal-2-text', text: 'Macro flower stamen pollen' },
  { id: 'gal-3', ratio: '3x4', width: 600, titleId: 'gal-3-text', text: 'Microscopic crystal formations bioluminescence' },
  { id: 'gal-4', ratio: '4x3', width: 600, titleId: 'gal-4-text', text: 'Macro compound eye of a fly' },
  { id: 'gal-5', ratio: '1x1', width: 600, titleId: 'gal-5-text', text: 'Cell division mitosis colorful' },
  { id: 'gal-6', ratio: '16x9', width: 800, titleId: 'gal-6-text', text: 'Snowflake crystal structure macro' },
]

const Gallery = () => {
  return (
    <section id="gallery" className="py-24 bg-slate-950 px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 id="gallery-section-title" className="text-4xl font-bold text-white mb-4">The Art of Macro</h2>
          <p id="gallery-section-desc" className="text-slate-400 max-w-2xl mx-auto">
            A visual exhibition of the cosmos hiding right beneath our fingertips.
          </p>
        </div>

        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {galleryImages.map((img) => (
            <div key={img.id} className="relative rounded-xl overflow-hidden group break-inside-avoid">
              <img
                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                alt={img.text}
                data-strk-img-id={`gallery-img-${img.id}`}
                data-strk-img={`[${img.titleId}] [gallery-section-title]`}
                data-strk-img-ratio={img.ratio}
                data-strk-img-width={img.width}
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              />
              <div className="absolute inset-0 bg-slate-950/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center p-4 text-center">
                <span id={img.titleId} className="text-emerald-400 font-semibold">{img.text}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Gallery;
