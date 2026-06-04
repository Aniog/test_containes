import { useState, useEffect, useRef } from 'react'
import { X, Maximize2 } from 'lucide-react'

const textures = [
  {
    id: 'dry-grass',
    title: 'Dry Grass',
    category: 'Flora',
    description: 'Golden blades bent low by the wind, each strand a testament to endurance.',
    imgId: 'texture-dry-grass-a1b2c3',
    titleId: 'texture-dry-grass-title',
    descId: 'texture-dry-grass-desc',
    catId: 'texture-dry-grass-cat',
  },
  {
    id: 'elephant-skin',
    title: 'Elephant Skin',
    category: 'Fauna',
    description: 'Deep creases and weathered folds tell the story of decades under the African sun.',
    imgId: 'texture-elephant-skin-d4e5f6',
    titleId: 'texture-elephant-skin-title',
    descId: 'texture-elephant-skin-desc',
    catId: 'texture-elephant-skin-cat',
  },
  {
    id: 'sunset-silhouette',
    title: 'Sunset Silhouette',
    category: 'Light',
    description: 'The last rays of sunlight bleed through the acacia canopy in ribbons of fire.',
    imgId: 'texture-sunset-silhouette-g7h8i9',
    titleId: 'texture-sunset-silhouette-title',
    descId: 'texture-sunset-silhouette-desc',
    catId: 'texture-sunset-silhouette-cat',
  },
  {
    id: 'cracked-earth',
    title: 'Cracked Earth',
    category: 'Earth',
    description: 'A mosaic of dried clay, the memory of water etched into the soil.',
    imgId: 'texture-cracked-earth-j1k2l3',
    titleId: 'texture-cracked-earth-title',
    descId: 'texture-cracked-earth-desc',
    catId: 'texture-cracked-earth-cat',
  },
  {
    id: 'dust-cloud',
    title: 'Dust Cloud',
    category: 'Light',
    description: 'Fine particles suspended in golden light, the very breath of the savanna made visible.',
    imgId: 'texture-dust-cloud-m4n5o6',
    titleId: 'texture-dust-cloud-title',
    descId: 'texture-dust-cloud-desc',
    catId: 'texture-dust-cloud-cat',
  },
  {
    id: 'acacia-bark',
    title: 'Acacia Bark',
    category: 'Flora',
    description: 'Rough, thorn-studded bark in ochre tones — nature\'s armor against the elements.',
    imgId: 'texture-acacia-bark-p7q8r9',
    titleId: 'texture-acacia-bark-title',
    descId: 'texture-acacia-bark-desc',
    catId: 'texture-acacia-bark-cat',
  },
  {
    id: 'zebra-stripes',
    title: 'Zebra Hide',
    category: 'Fauna',
    description: 'Nature\'s most elegant pattern — bold stripes dissolving into shadow and light.',
    imgId: 'texture-zebra-stripes-s1t2u3',
    titleId: 'texture-zebra-stripes-title',
    descId: 'texture-zebra-stripes-desc',
    catId: 'texture-zebra-stripes-cat',
  },
  {
    id: 'heat-haze',
    title: 'Heat Haze',
    category: 'Light',
    description: 'The shimmering distortion rising from sun-baked earth, blurring the horizon.',
    imgId: 'texture-heat-haze-v4w5x6',
    titleId: 'texture-heat-haze-title',
    descId: 'texture-heat-haze-desc',
    catId: 'texture-heat-haze-cat',
  },
  {
    id: 'migration-dust',
    title: 'Migration Dust',
    category: 'Earth',
    description: 'Thousands of hooves kick up a fine powder that hangs like a golden mist.',
    imgId: 'texture-migration-dust-y7z8a9',
    titleId: 'texture-migration-dust-title',
    descId: 'texture-migration-dust-desc',
    catId: 'texture-migration-dust-cat',
  },
]

const categories = ['All', 'Flora', 'Fauna', 'Earth', 'Light']

export default function Gallery() {
  const [activeFilter, setActiveFilter] = useState('All')
  const [lightbox, setLightbox] = useState(null)

  const filtered =
    activeFilter === 'All'
      ? textures
      : textures.filter((t) => t.category === activeFilter)

  return (
    <div className="min-h-screen bg-savanna-cream">
      {/* Header */}
      <section className="py-20 px-6 text-center max-w-4xl mx-auto">
        <p className="font-serif text-xs tracking-[0.3em] uppercase text-savanna-dust mb-4">
          Dust & Light
        </p>
        <h1 className="font-display text-4xl md:text-6xl font-bold text-savanna-earth mb-6">
          Textures of the Prairie
        </h1>
        <p className="font-serif text-lg text-savanna-dust max-w-2xl mx-auto leading-relaxed italic">
          A study in the tactile poetry of the savanna — the grain of parched earth,
          the rhythm of hide and horn, the quiet drama of light at dusk.
        </p>

        {/* Category filters */}
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-6 py-2 rounded-full font-serif text-sm tracking-widest uppercase transition-all duration-300 ${
                activeFilter === cat
                  ? 'bg-earth-600 text-savanna-cream shadow-md shadow-earth-500/20'
                  : 'bg-white border border-savanna-sand/60 text-savanna-dust hover:text-savanna-earth hover:border-earth-400'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Masonry-style grid */}
      <section className="px-6 pb-24 max-w-7xl mx-auto">
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {filtered.map((texture, i) => (
            <div
              key={texture.id}
              className="break-inside-avoid group relative rounded-2xl overflow-hidden bg-white shadow-md hover:shadow-xl transition-all duration-500 cursor-pointer"
              onClick={() => setLightbox(texture)}
            >
              {/* Image */}
              <div
                className="w-full"
                style={{ aspectRatio: i % 3 === 0 ? '3/4' : i % 3 === 1 ? '4/3' : '1/1' }}
              >
                <div
                  className="w-full h-full"
                  data-strk-bg-id={`gallery-bg-${texture.id}`}
                  data-strk-bg={`[${texture.descId}] [${texture.titleId}] [${texture.catId}] texture close-up`}
                  data-strk-bg-ratio={i % 3 === 0 ? '3x4' : i % 3 === 1 ? '4x3' : '1x1'}
                  data-strk-bg-width="800"
                  style={{
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    width: '100%',
                    height: '100%',
                  }}
                />
              </div>

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-savanna-shadow/0 group-hover:bg-savanna-shadow/30 transition-colors duration-500 flex items-center justify-center">
                <Maximize2 className="w-8 h-8 text-savanna-cream opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Info bar */}
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-savanna-shadow/80 to-transparent">
                <p
                  id={texture.catId}
                  className="text-earth-400 text-xs tracking-widest uppercase mb-1"
                >
                  {texture.category}
                </p>
                <h3 id={texture.titleId} className="font-display text-lg font-semibold text-savanna-cream">
                  {texture.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 z-50 bg-savanna-shadow/95 backdrop-blur-sm flex items-center justify-center p-6"
          onClick={() => setLightbox(null)}
        >
          <button
            className="absolute top-6 right-6 w-12 h-12 rounded-full bg-savanna-cream/10 border border-savanna-cream/20 flex items-center justify-center text-savanna-cream hover:bg-savanna-cream/20 transition-all z-10"
            onClick={() => setLightbox(null)}
            aria-label="Close lightbox"
          >
            <X className="w-6 h-6" />
          </button>

          <div
            className="max-w-4xl w-full max-h-[85vh] flex flex-col md:flex-row gap-8 items-center"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Lightbox image */}
            <div className="w-full md:w-2/3 aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
              <div
                className="w-full h-full"
                data-strk-bg-id={`lightbox-bg-${lightbox.id}`}
                data-strk-bg={`[${lightbox.descId}] [${lightbox.titleId}] texture close-up high resolution`}
                data-strk-bg-ratio="4x3"
                data-strk-bg-width="1200"
                style={{
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  width: '100%',
                  height: '100%',
                }}
              />
            </div>

            {/* Lightbox info */}
            <div className="w-full md:w-1/3 text-savanna-cream">
              <p className="text-earth-400 text-xs tracking-widest uppercase mb-3">
                {lightbox.category}
              </p>
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
                {lightbox.title}
              </h2>
              <p className="font-serif text-base text-savanna-sand/90 leading-relaxed italic">
                {lightbox.description}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}