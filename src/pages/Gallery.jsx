import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const galleryImages = [
  { id: 'factory-1', title: 'Assembly Line', description: 'Our precision assembly process ensuring quality at every step.' },
  { id: 'machine-detail-1', title: 'Servo Precision', description: 'Advanced servo-driven technology for perfect folds.' },
  { id: 'sheet-metal-1', title: 'Finished Profiles', description: 'Complex profiles achieved with our double folder technology.' },
  { id: 'control-system', title: 'Smart Controls', description: 'Intuitive CNC control system for operator efficiency.' },
  { id: 'factory-2', title: 'Production Facility', description: 'State-of-the-art manufacturing center in Chicago.' },
  { id: 'heavy-duty', title: 'Atlas Series', description: 'Robust frame construction of the heavy-duty folder.' }
]

export default function Gallery() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <div ref={containerRef} className="bg-white min-h-screen">
      <section className="py-24 bg-[#1a1a1a] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 id="gallery-title" className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">Our <span className="text-[#d4af37]">Factory</span> Floor</h1>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg font-light uppercase tracking-widest leading-relaxed">
            A window into the precision and dedication behind Artitect Machinery.
          </p>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {galleryImages.map((image) => (
              <div key={image.id} className="group relative overflow-hidden bg-gray-100 shadow-md">
                <img
                  alt={image.title}
                  data-strk-img-id={`gallery-img-${image.id}`}
                  data-strk-img={`[img-${image.id}-title] industrial metal machinery factory`}
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="800"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="w-full h-auto object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                  <h3 id={`img-${image.id}-title`} className="text-white text-xl font-bold mb-2 uppercase tracking-widest">{image.title}</h3>
                  <p className="text-gray-300 text-sm font-light leading-relaxed">{image.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-[#1a1a1a] mb-8 italic uppercase tracking-wider">Engineering Excellence</h2>
          <p className="text-gray-600 font-light leading-relaxed text-lg">
            "Artitect Machinery's commitment to precision has transformed our production line efficiency by over 40%."
          </p>
        </div>
      </section>
    </div>
  )
}
