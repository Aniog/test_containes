import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const animals = [
  { id: 'g-lion', name: 'African Lion', habitat: 'Savanna', tag: 'Mammal', span: 'col-span-1 row-span-2' },
  { id: 'g-eagle', name: 'Bald Eagle', habitat: 'Mountains', tag: 'Bird', span: 'col-span-1 row-span-1' },
  { id: 'g-dolphin', name: 'Bottlenose Dolphin', habitat: 'Ocean', tag: 'Marine', span: 'col-span-1 row-span-1' },
  { id: 'g-tiger', name: 'Bengal Tiger', habitat: 'Jungle', tag: 'Mammal', span: 'col-span-1 row-span-1' },
  { id: 'g-parrot', name: 'Scarlet Macaw', habitat: 'Rainforest', tag: 'Bird', span: 'col-span-1 row-span-1' },
  { id: 'g-elephant', name: 'African Elephant', habitat: 'Savanna', tag: 'Mammal', span: 'col-span-2 row-span-1' },
  { id: 'g-turtle', name: 'Sea Turtle', habitat: 'Ocean', tag: 'Reptile', span: 'col-span-1 row-span-1' },
  { id: 'g-wolf', name: 'Gray Wolf', habitat: 'Forest', tag: 'Mammal', span: 'col-span-1 row-span-1' },
]

const GalleryCard = ({ animal }) => (
  <div className={`relative rounded-2xl overflow-hidden group cursor-pointer hover:-translate-y-1 transition-transform duration-300 ${animal.span}`}>
    <img
      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
      alt={animal.name}
      className="w-full h-full object-cover min-h-[200px]"
      data-strk-img-id={`gallery-img-${animal.id}`}
      data-strk-img={`[${animal.id}-name] [${animal.id}-habitat]`}
      data-strk-img-ratio="4x3"
      data-strk-img-width="600"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-2 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
      <span className="text-xs font-bold text-amber-400 uppercase tracking-wider">{animal.tag}</span>
      <h3 id={`${animal.id}-name`} className="text-white font-bold text-lg leading-tight">{animal.name}</h3>
      <p id={`${animal.id}-habitat`} className="text-white/70 text-sm">{animal.habitat}</p>
    </div>
  </div>
)

const GallerySection = () => {
  const containerRef = useRef(null)

  useEffect(() => {
    ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section id="gallery" ref={containerRef} className="py-20 px-4 md:px-8 bg-[#2d1f0e]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-amber-400 font-semibold tracking-widest uppercase text-sm mb-3">Photo Gallery</p>
          <h2
            className="text-3xl md:text-4xl font-bold text-[#f5f0e8]"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Animals in the Wild
          </h2>
          <p className="text-[#a8a090] mt-4 max-w-xl mx-auto">
            Stunning photographs capturing the raw beauty and power of wildlife across the globe.
          </p>
        </div>

        {/* Masonry-style grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-[200px]">
          {animals.map((animal) => (
            <GalleryCard key={animal.id} animal={animal} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default GallerySection
