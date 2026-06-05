import { useRef, useEffect, useState } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const textures = [
  {
    id: 'dry-grass',
    title: 'Dry Grass',
    category: 'Flora',
    desc: 'Golden blades of wild grass catch the low-angle light of late afternoon, each stem a thread in the vast tapestry of the plains.',
    quote: '"The grass whispers stories the wind cannot carry alone."',
    imgId: 'texture-grass-e1f2g3',
    titleId: 'texture-dry-grass-title',
    descId: 'texture-dry-grass-desc',
    quoteId: 'texture-dry-grass-quote',
    ratio: '3x2',
    width: 900,
  },
  {
    id: 'elephant-skin',
    title: 'Elephant Skin',
    category: 'Fauna',
    desc: 'Deep crevasses map decades of survival across the hide of an elder bull. Each wrinkle holds a memory of drought, rain, and migration.',
    quote: '"Time writes itself into the skin of giants."',
    imgId: 'texture-elephant-h4i5j6',
    titleId: 'texture-elephant-skin-title',
    descId: 'texture-elephant-skin-desc',
    quoteId: 'texture-elephant-skin-quote',
    ratio: '3x2',
    width: 900,
  },
  {
    id: 'sunset-silhouette',
    title: 'Sunset Silhouette',
    category: 'Light',
    desc: 'The final blaze of the sun dissolves the horizon into a gradient of amber, rose, and violet. Distant figures fade into myth.',
    quote: '"Every sunset is the Serengeti\'s signature."',
    imgId: 'texture-sunset-k7l8m9',
    titleId: 'texture-sunset-silhouette-title',
    descId: 'texture-sunset-silhouette-desc',
    quoteId: 'texture-sunset-silhouette-quote',
    ratio: '3x2',
    width: 900,
  },
  {
    id: 'dust-cloud',
    title: 'Dust Cloud',
    category: 'Atmosphere',
    desc: 'A billowing veil of ochre dust rises behind a distant herd, suspended in the still air like a slow-motion explosion of earth and light.',
    quote: '"The dust never truly settles — it only waits for the next hoof-fall."',
    imgId: 'texture-dust-n0o1p2',
    titleId: 'texture-dust-cloud-title',
    descId: 'texture-dust-cloud-desc',
    quoteId: 'texture-dust-cloud-quote',
    ratio: '3x2',
    width: 900,
  },
  {
    id: 'acacia-bark',
    title: 'Acacia Bark',
    category: 'Flora',
    desc: 'Thorns and rough bark armor the acacia against browsing giraffes. Up close, the golden-brown texture reveals an intricate landscape of survival.',
    quote: '"Defense becomes beauty when you look closely enough."',
    imgId: 'texture-acacia-q3r4s5',
    titleId: 'texture-acacia-bark-title',
    descId: 'texture-acacia-bark-desc',
    quoteId: 'texture-acacia-bark-quote',
    ratio: '3x2',
    width: 900,
  },
  {
    id: 'cracked-earth',
    title: 'Cracked Earth',
    category: 'Earth',
    desc: 'During the dry season, the savanna floor fractures into a mosaic of parched polygons, each crack a testament to the land\'s resilience.',
    quote: '"The earth remembers every drought and every rain."',
    imgId: 'texture-cracked-t6u7v8',
    titleId: 'texture-cracked-earth-title',
    descId: 'texture-cracked-earth-desc',
    quoteId: 'texture-cracked-earth-quote',
    ratio: '3x2',
    width: 900,
  },
  {
    id: 'zebra-stripes',
    title: 'Zebra Stripes',
    category: 'Fauna',
    desc: 'Nature\'s most elegant pattern dissolves into abstraction at close range. Each stripe is as unique as a signature written in light and shadow.',
    quote: '"Pattern is the language of the wild."',
    imgId: 'texture-zebra-w9x0y1',
    titleId: 'texture-zebra-stripes-title',
    descId: 'texture-zebra-stripes-desc',
    quoteId: 'texture-zebra-stripes-quote',
    ratio: '3x2',
    width: 900,
  },
  {
    id: 'morning-mist',
    title: 'Morning Mist',
    category: 'Atmosphere',
    desc: 'Before the heat of the day, a cool mist clings to the hollows of the plains. The world is soft, quiet, and full of hidden possibility.',
    quote: '"Dawn is when the Serengeti takes its first breath."',
    imgId: 'texture-mist-z2a3b4',
    titleId: 'texture-morning-mist-title',
    descId: 'texture-morning-mist-desc',
    quoteId: 'texture-morning-mist-quote',
    ratio: '3x2',
    width: 900,
  },
  {
    id: 'hoof-print',
    title: 'Hoof Print',
    category: 'Earth',
    desc: 'A single wildebeest hoof print pressed into drying mud, soon to be erased by the next rain. A fleeting signature of a passing life.',
    quote: '"Every footprint is a sentence in the story of movement."',
    imgId: 'texture-hoof-c5d6e7',
    titleId: 'texture-hoof-print-title',
    descId: 'texture-hoof-print-desc',
    quoteId: 'texture-hoof-print-quote',
    ratio: '3x2',
    width: 900,
  },
]

const categories = ['All', 'Flora', 'Fauna', 'Earth', 'Light', 'Atmosphere']

export default function DustLight() {
  const containerRef = useRef(null)
  const [activeFilter, setActiveFilter] = useState('All')
  const [selectedTexture, setSelectedTexture] = useState(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  const filtered = activeFilter === 'All'
    ? textures
    : textures.filter((t) => t.category === activeFilter)

  return (
    <div ref={containerRef}>
      {/* Hero */}
      <section className="relative h-[50vh] md:h-[60vh] overflow-hidden">
        <img
          data-strk-img-id="dust-hero-f6g7h8"
          data-strk-img="[dust-hero-desc] [dust-hero-title]"
          data-strk-img-ratio="16x9"
          data-strk-img-width={1600}
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt="Dust & Light hero"
          className="absolute inset-0 w-full h-full object-cover animate-slow-drift"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-dark-earth/90 via-dark-earth/40 to-transparent" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
          <h1
            id="dust-hero-title"
            className="font-serif text-4xl md:text-6xl font-bold text-warm-sand mb-4 drop-shadow-lg"
          >
            Dust & Light
          </h1>
          <p
            id="dust-hero-desc"
            className="text-warm-sand/70 max-w-xl text-sm md:text-base leading-relaxed"
          >
            The textures of the prairie — a gallery of grass, skin, earth, and sky
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="py-12 bg-parchment border-b border-dust/20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap items-center justify-center gap-2 md:gap-3">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-4 py-2 text-xs md:text-sm tracking-wider uppercase transition-all ${
                  activeFilter === cat
                    ? 'bg-burnt-orange text-warm-sand'
                    : 'bg-transparent text-clay border border-dust/40 hover:border-burnt-orange hover:text-burnt-orange'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16 md:py-24 bg-parchment">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1 md:gap-2">
            {filtered.map((texture) => (
              <div
                key={texture.id}
                onClick={() => setSelectedTexture(texture)}
                className="group relative aspect-[3/2] overflow-hidden cursor-pointer bg-dark-earth"
              >
                <img
                  data-strk-img-id={texture.imgId}
                  data-strk-img={`[${texture.descId}] [${texture.titleId}]`}
                  data-strk-img-ratio={texture.ratio}
                  data-strk-img-width={texture.width}
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={texture.title}
                  className="w-full h-full object-cover transition-all duration-[2500ms] ease-in-out group-hover:scale-110 group-hover:brightness-75"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-earth/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                  <p className="text-xs tracking-[0.2em] uppercase text-burnt-orange mb-1">
                    {texture.category}
                  </p>
                  <h3
                    id={texture.titleId}
                    className="font-serif text-xl md:text-2xl font-bold text-warm-sand"
                  >
                    {texture.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Detail Modal */}
      {selectedTexture && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-dark-earth/90 backdrop-blur-sm"
          onClick={() => setSelectedTexture(null)}
        >
          <div
            className="relative bg-dark-earth max-w-2xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedTexture(null)}
              className="absolute top-4 right-4 z-10 w-10 h-10 flex items-center justify-center bg-dark-earth/60 hover:bg-burnt-orange text-warm-sand transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
            </button>

            <div className="aspect-[3/2] overflow-hidden">
              <img
                data-strk-img-id={`modal-${selectedTexture.id}`}
                data-strk-img={`[modal-${selectedTexture.descId}] [modal-${selectedTexture.titleId}]`}
                data-strk-img-ratio="3x2"
                data-strk-img-width={900}
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={selectedTexture.title}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="p-8">
              <p className="text-xs tracking-[0.2em] uppercase text-burnt-orange mb-2">
                {selectedTexture.category}
              </p>
              <h2
                id={`modal-${selectedTexture.titleId}`}
                className="font-serif text-2xl md:text-3xl font-bold text-warm-sand mb-4"
              >
                {selectedTexture.title}
              </h2>
              <blockquote
                id={`modal-${selectedTexture.quoteId}`}
                className="font-serif italic text-lg md:text-xl text-sunset-glow mb-6 pl-4 border-l-2 border-burnt-orange"
              >
                {selectedTexture.quote}
              </blockquote>
              <p
                id={`modal-${selectedTexture.descId}`}
                className="text-warm-sand/70 leading-relaxed"
              >
                {selectedTexture.desc}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}