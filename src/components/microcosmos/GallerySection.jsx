import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const galleryItems = [
  { id: 'gal-01', imgId: 'gal-img-mc010', title: 'Diatom Colony', category: 'Algae', ratio: '1x1', width: 500 },
  { id: 'gal-02', imgId: 'gal-img-mc011', title: 'Pollen Grain', category: 'Botany', ratio: '1x1', width: 500 },
  { id: 'gal-03', imgId: 'gal-img-mc012', title: 'Snowflake Crystal', category: 'Crystallography', ratio: '1x1', width: 500 },
  { id: 'gal-04', imgId: 'gal-img-mc013', title: 'Tardigrade', category: 'Micro-animals', ratio: '1x1', width: 500 },
  { id: 'gal-05', imgId: 'gal-img-mc014', title: 'Butterfly Wing Scale', category: 'Entomology', ratio: '1x1', width: 500 },
  { id: 'gal-06', imgId: 'gal-img-mc015', title: 'Red Blood Cells', category: 'Hematology', ratio: '1x1', width: 500 },
  { id: 'gal-07', imgId: 'gal-img-mc016', title: 'Neuron Network', category: 'Neuroscience', ratio: '1x1', width: 500 },
  { id: 'gal-08', imgId: 'gal-img-mc017', title: 'Salt Crystal', category: 'Mineralogy', ratio: '1x1', width: 500 },
  { id: 'gal-09', imgId: 'gal-img-mc018', title: 'Moss Spores', category: 'Botany', ratio: '1x1', width: 500 },
]

export default function GallerySection() {
  const containerRef = useRef(null)
  useEffect(() => {
    ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section id="gallery" ref={containerRef} className="py-24 px-4 md:px-8 bg-[#0a1628]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-[#7c3aed] text-sm font-medium tracking-widest uppercase mb-3">Image Gallery</p>
          <h2 id="gallery-heading" className="text-4xl md:text-5xl font-bold text-white mb-4">
            The Microscopic Gallery
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            A curated collection of stunning microscopy images from across the natural world.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {galleryItems.map((item) => (
            <div
              key={item.id}
              className="group relative overflow-hidden rounded-2xl bg-[#0d1f2d] border border-slate-700/40 hover:border-[#00d4aa]/40 transition-all duration-300 cursor-pointer"
            >
              <div className="aspect-square overflow-hidden">
                <img
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  data-strk-img-id={item.imgId}
                  data-strk-img={`[${item.id}-title] [${item.id}-cat] [gallery-heading]`}
                  data-strk-img-ratio={item.ratio}
                  data-strk-img-width={item.width}
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                />
              </div>
              {/* Overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#050a0e]/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-5">
                <div>
                  <span id={`${item.id}-cat`} className="text-[#00d4aa] text-xs font-semibold tracking-widest uppercase">
                    {item.category}
                  </span>
                  <h3 id={`${item.id}-title`} className="text-white font-bold text-lg mt-1">
                    {item.title}
                  </h3>
                </div>
              </div>
              {/* Always-visible label at bottom */}
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-[#050a0e]/80 to-transparent group-hover:opacity-0 transition-opacity duration-300">
                <p className="text-slate-300 text-sm font-medium">{item.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
