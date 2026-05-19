import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const galleryItems = [
  { id: 'gal-1', titleId: 'gal-t1', title: 'Paramecium', imgId: 'gal-img-mc001', ratio: '4x3', width: 600, span: '' },
  { id: 'gal-2', titleId: 'gal-t2', title: 'Amoeba', imgId: 'gal-img-mc002', ratio: '4x3', width: 600, span: '' },
  { id: 'gal-3', titleId: 'gal-t3', title: 'Spirulina Algae', imgId: 'gal-img-mc003', ratio: '4x3', width: 600, span: 'md:col-span-2' },
  { id: 'gal-4', titleId: 'gal-t4', title: 'Red Blood Cells', imgId: 'gal-img-mc004', ratio: '4x3', width: 600, span: 'md:col-span-2' },
  { id: 'gal-5', titleId: 'gal-t5', title: 'Dust Mite', imgId: 'gal-img-mc005', ratio: '4x3', width: 600, span: '' },
  { id: 'gal-6', titleId: 'gal-t6', title: 'Nematode Worm', imgId: 'gal-img-mc006', ratio: '4x3', width: 600, span: '' },
  { id: 'gal-7', titleId: 'gal-t7', title: 'Moss Spores', imgId: 'gal-img-mc007', ratio: '4x3', width: 600, span: '' },
  { id: 'gal-8', titleId: 'gal-t8', title: 'Bacteria Colony', imgId: 'gal-img-mc008', ratio: '4x3', width: 600, span: '' },
  { id: 'gal-9', titleId: 'gal-t9', title: 'Foraminifera Shell', imgId: 'gal-img-mc009', ratio: '4x3', width: 600, span: '' },
  { id: 'gal-10', titleId: 'gal-t10', title: 'Hydra Tentacles', imgId: 'gal-img-mc010', ratio: '4x3', width: 600, span: '' },
  { id: 'gal-11', titleId: 'gal-t11', title: 'Euglena', imgId: 'gal-img-mc011', ratio: '4x3', width: 600, span: '' },
  { id: 'gal-12', titleId: 'gal-t12', title: 'Volvox Colony', imgId: 'gal-img-mc012', ratio: '4x3', width: 600, span: '' },
]

export default function GallerySection() {
  const containerRef = useRef(null)

  useEffect(() => {
    ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section id="gallery" ref={containerRef} className="bg-[#050d12] py-20 md:py-28 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-sm font-medium tracking-widest uppercase text-[#00d4aa] mb-4">
            Photo Gallery
          </p>
          <h2
            id="gallery-title"
            className="text-3xl md:text-4xl font-bold text-[#f0faf8] mb-4"
          >
            A World Unseen
          </h2>
          <p
            id="gallery-subtitle"
            className="text-[#94b8b0] max-w-2xl mx-auto"
          >
            Stunning microscopy images from laboratories around the world, capturing the hidden beauty of life at its most fundamental scale.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
          {galleryItems.map((item) => (
            <div
              key={item.id}
              className={`group relative rounded-xl overflow-hidden aspect-[4/3] cursor-pointer ${item.span}`}
            >
              <img
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                data-strk-img-id={item.imgId}
                data-strk-img={`[${item.titleId}] [gallery-subtitle] [gallery-title]`}
                data-strk-img-ratio={item.ratio}
                data-strk-img-width={item.width}
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050d12]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-3 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <p id={item.titleId} className="text-sm font-semibold text-[#f0faf8]">
                  {item.title}
                </p>
              </div>
              {/* Subtle border glow on hover */}
              <div className="absolute inset-0 rounded-xl ring-0 group-hover:ring-1 group-hover:ring-[#00d4aa]/40 transition-all duration-300 pointer-events-none" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
