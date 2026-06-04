import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const ROOTS_ITEMS = [
  {
    id: 'ancient-oak',
    title: 'Ancient Oak',
    desc: 'Centuries of growth etched into bark and branch.',
    ratio: '2x3',
    width: 600,
    tall: true,
  },
  {
    id: 'moss-carpet',
    title: 'Moss Carpet',
    desc: 'A velvet floor of emerald moss swallowing fallen limbs.',
    ratio: '1x1',
    width: 500,
  },
  {
    id: 'twisted-roots',
    title: 'Twisted Roots',
    desc: 'Subterranean arteries breaking through the forest floor.',
    ratio: '3x2',
    width: 700,
  },
  {
    id: 'bark-river',
    title: 'Bark River',
    desc: 'Deep furrows of weathered bark flowing like a vertical river.',
    ratio: '3x4',
    width: 500,
    tall: true,
  },
  {
    id: 'fallen-giant',
    title: 'Fallen Giant',
    desc: 'A toppled elder returning to the soil, draped in fern and fungi.',
    ratio: '16x9',
    width: 800,
  },
  {
    id: 'root-cavern',
    title: 'Root Cavern',
    desc: 'A hollow beneath exposed roots where the earth breathes.',
    ratio: '4x3',
    width: 600,
  },
  {
    id: 'fern-unfurl',
    title: 'Fern Unfurl',
    desc: 'New life spiraling upward through last season\'s decay.',
    ratio: '1x1',
    width: 500,
  },
  {
    id: 'mist-hollow',
    title: 'Mist Hollow',
    desc: 'Morning fog pooling in the valley between ancient trunks.',
    ratio: '16x9',
    width: 900,
    wide: true,
  },
  {
    id: 'lichen-veil',
    title: 'Lichen Veil',
    desc: 'Silver-green lichen spreading across stone and bark alike.',
    ratio: '3x2',
    width: 600,
  },
]

function getImgQuery(item) {
  return `[${item.id}-desc] [${item.id}-title]`
}

export default function Home() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <div ref={containerRef}>
      {/* Hero */}
      <section className="relative py-32 md:py-48 px-6 text-center overflow-hidden">
        <div
          className="absolute inset-0 z-0"
          data-strk-bg-id="home-hero-bg-a1b2c3"
          data-strk-bg="[home-subtitle] [home-title]"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1600"
        />
        <div className="absolute inset-0 z-10 bg-canopy-deep/60" />
        <div className="relative z-20 max-w-3xl mx-auto">
          <h1
            id="home-title"
            className="font-display text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight text-white mb-6"
          >
            The Roots
          </h1>
          <p
            id="home-subtitle"
            className="font-body text-lg md:text-xl text-canopy-mist-light max-w-xl mx-auto leading-relaxed"
          >
            Where the old growth begins. A portrait of the ancient forest floor — trunk, moss, root, and stone.
          </p>
        </div>
      </section>

      {/* Masonry Grid */}
      <section className="max-w-[1400px] mx-auto px-4 md:px-6 py-16 md:py-24">
        <div className="masonry-grid">
          {ROOTS_ITEMS.map((item) => (
            <div key={item.id} className="masonry-item group relative rug-border overflow-hidden bg-canopy-moss">
              {/* Image */}
              <img
                alt={item.title}
                data-strk-img-id={`roots-${item.id}-img`}
                data-strk-img={getImgQuery(item)}
                data-strk-img-ratio={item.ratio}
                data-strk-img-width={item.width}
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                className={`w-full block object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105 ${
                  item.tall ? 'aspect-[2/3]' : item.wide ? 'aspect-[16/9]' : ''
                }`}
                style={
                  !item.tall && !item.wide
                    ? { aspectRatio: item.ratio.replace('x', '/') }
                    : undefined
                }
              />

              {/* Fog overlay — clears on hover */}
              <div className="fog-overlay absolute inset-0 z-10 opacity-100 group-hover:opacity-0 transition-opacity duration-700" />

              {/* Text overlay */}
              <div className="absolute bottom-0 left-0 right-0 z-20 p-5 bg-gradient-to-t from-canopy-deep/90 via-canopy-deep/40 to-transparent translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-700">
                <h3 id={`${item.id}-title`} className="font-display text-xl font-bold text-white mb-1">
                  {item.title}
                </h3>
                <p id={`${item.id}-desc`} className="font-body text-sm text-canopy-mist-light leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Closing passage */}
      <section className="max-w-2xl mx-auto px-6 py-24 md:py-32 text-center">
        <p className="font-display text-2xl md:text-3xl text-canopy-mist italic leading-relaxed">
          "The forest is not a collection of trees. It is a single, breathing entity — slow, patient, eternal."
        </p>
        <p className="mt-6 font-body text-sm uppercase tracking-[0.3em] text-canopy-stone">
          — Ancient Canopy
        </p>
      </section>
    </div>
  )
}