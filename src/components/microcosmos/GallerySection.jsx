import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const galleryItems = [
  {
    id: 'g01',
    title: 'Tardigrade (Water Bear)',
    sciName: 'Ramazzottius oberhaeuseri',
    category: 'Micro-animals',
    mag: '500×',
    titleId: 'gallery-g01-title',
    descId: 'gallery-g01-desc',
    imgId: 'gallery-img-g01-mc020',
    size: 'large',
  },
  {
    id: 'g02',
    title: 'Snowflake Crystal',
    sciName: 'Ice crystal dendrite',
    category: 'Crystals',
    mag: '40×',
    titleId: 'gallery-g02-title',
    descId: 'gallery-g02-desc',
    imgId: 'gallery-img-g02-mc021',
    size: 'small',
  },
  {
    id: 'g03',
    title: 'Pollen Grain',
    sciName: 'Lilium longiflorum',
    category: 'Plants',
    mag: '1200×',
    titleId: 'gallery-g03-title',
    descId: 'gallery-g03-desc',
    imgId: 'gallery-img-g03-mc022',
    size: 'small',
  },
  {
    id: 'g04',
    title: 'Diatom Colony',
    sciName: 'Coscinodiscus radiatus',
    category: 'Aquatic',
    mag: '800×',
    titleId: 'gallery-g04-title',
    descId: 'gallery-g04-desc',
    imgId: 'gallery-img-g04-mc023',
    size: 'large',
  },
  {
    id: 'g05',
    title: 'Butterfly Wing Scale',
    sciName: 'Morpho menelaus',
    category: 'Insects',
    mag: '2000×',
    titleId: 'gallery-g05-title',
    descId: 'gallery-g05-desc',
    imgId: 'gallery-img-g05-mc024',
    size: 'small',
  },
  {
    id: 'g06',
    title: 'Red Blood Cells',
    sciName: 'Erythrocytes',
    category: 'Cells',
    mag: '3000×',
    titleId: 'gallery-g06-title',
    descId: 'gallery-g06-desc',
    imgId: 'gallery-img-g06-mc025',
    size: 'small',
  },
  {
    id: 'g07',
    title: 'Radiolarian Skeleton',
    sciName: 'Acantharia sp.',
    category: 'Aquatic',
    mag: '600×',
    titleId: 'gallery-g07-title',
    descId: 'gallery-g07-desc',
    imgId: 'gallery-img-g07-mc026',
    size: 'large',
  },
  {
    id: 'g08',
    title: 'Vitamin C Crystal',
    sciName: 'Ascorbic acid',
    category: 'Crystals',
    mag: '100×',
    titleId: 'gallery-g08-title',
    descId: 'gallery-g08-desc',
    imgId: 'gallery-img-g08-mc027',
    size: 'small',
  },
  {
    id: 'g09',
    title: 'Mosquito Eye',
    sciName: 'Aedes aegypti',
    category: 'Insects',
    mag: '400×',
    titleId: 'gallery-g09-title',
    descId: 'gallery-g09-desc',
    imgId: 'gallery-img-g09-mc028',
    size: 'small',
  },
]

const GallerySection = () => {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section id="gallery" ref={containerRef} className="bg-[#0a0f1e] py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-cyan-400 text-xs font-mono tracking-widest uppercase mb-4">Photo Gallery</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Microscopic Masterpieces</h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Award-winning microscopy photography from scientists and artists around the world.
          </p>
        </div>

        {/* Masonry-style grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {galleryItems.map((item) => (
            <div
              key={item.id}
              className={`group relative bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden hover:border-cyan-500/40 hover:shadow-xl hover:shadow-cyan-500/10 transition-all duration-300 cursor-pointer ${item.size === 'large' ? 'md:row-span-2' : ''}`}
            >
              <div className={`relative overflow-hidden ${item.size === 'large' ? 'aspect-[3/4]' : 'aspect-square'}`}>
                <img
                  alt={item.title}
                  data-strk-img-id={item.imgId}
                  data-strk-img={`[${item.descId}] [${item.titleId}]`}
                  data-strk-img-ratio={item.size === 'large' ? '3x4' : '1x1'}
                  data-strk-img-width={item.size === 'large' ? '600' : '500'}
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                {/* Magnification badge */}
                <div className="absolute top-3 left-3 bg-black/60 border border-cyan-500/30 text-cyan-400 text-xs font-mono px-2 py-1 rounded-full">
                  {item.mag}
                </div>
                <div className="absolute top-3 right-3 bg-black/60 border border-slate-700 text-slate-300 text-xs px-2 py-1 rounded-full">
                  {item.category}
                </div>
              </div>

              {/* Info */}
              <div className="p-4">
                <h3 id={item.titleId} className="text-white font-semibold text-base mb-1">{item.title}</h3>
                <p id={item.descId} className="text-cyan-400 text-xs font-mono italic">{item.sciName}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default GallerySection
