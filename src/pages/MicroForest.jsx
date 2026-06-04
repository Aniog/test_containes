import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const MICRO_ITEMS = [
  {
    id: 'amanita-muscaria',
    title: 'Amanita Muscaria',
    desc: 'A crimson dome rising from the moss — the forest\'s most iconic sentinel.',
    ratio: '1x1',
    width: 600,
  },
  {
    id: 'morning-dewdrops',
    title: 'Morning Dewdrops',
    desc: 'Tiny lenses of water catching the first light on a spider\'s silk.',
    ratio: '3x2',
    width: 800,
    wide: true,
  },
  {
    id: 'stag-beetle',
    title: 'Stag Beetle',
    desc: 'Armored knight of the undergrowth, mandibles locked in ancient ritual.',
    ratio: '3x2',
    width: 700,
  },
  {
    id: 'mycelium-network',
    title: 'Mycelium Network',
    desc: 'The hidden web beneath our feet — white threads binding the forest into one.',
    ratio: '2x3',
    width: 500,
    tall: true,
  },
  {
    id: 'emerald-damselfly',
    title: 'Emerald Damselfly',
    desc: 'A needle of iridescent green, poised on a reed above still water.',
    ratio: '1x1',
    width: 600,
  },
  {
    id: 'turkey-tail',
    title: 'Turkey Tail Fungi',
    desc: 'Layered fans of ochre and russet colonizing a fallen birch.',
    ratio: '16x9',
    width: 800,
  },
]

function getImgQuery(item) {
  return `[micro-${item.id}-desc] [micro-${item.id}-title] [micro-section-desc] [micro-section-title]`
}

export default function MicroForest() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <div ref={containerRef}>
      {/* Hero */}
      <section className="relative py-32 md:py-44 px-6 text-center overflow-hidden">
        <div
          className="absolute inset-0 z-0"
          data-strk-bg-id="micro-hero-bg-d4e5f6"
          data-strk-bg="[micro-section-desc] [micro-section-title]"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1600"
        />
        <div className="absolute inset-0 z-10 bg-canopy-deep/65" />
        <div className="relative z-20 max-w-3xl mx-auto">
          <h1
            id="micro-section-title"
            className="font-display text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight text-white mb-6"
          >
            Micro-Forest
          </h1>
          <p
            id="micro-section-desc"
            className="font-body text-lg md:text-xl text-canopy-mist-light max-w-xl mx-auto leading-relaxed"
          >
            A hidden world at your feet. Mushrooms, insects, and dewdrops — the forest revealed at extreme scale.
          </p>
        </div>
      </section>

      {/* Two-column macro gallery */}
      <section className="max-w-[1200px] mx-auto px-4 md:px-6 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {MICRO_ITEMS.map((item) => (
            <div
              key={item.id}
              className={`group relative rug-border overflow-hidden bg-canopy-moss ${
                item.wide ? 'md:col-span-2' : ''
              }`}
            >
              <img
                alt={item.title}
                data-strk-img-id={`micro-${item.id}-img`}
                data-strk-img={getImgQuery(item)}
                data-strk-img-ratio={item.ratio}
                data-strk-img-width={item.width}
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                className="w-full block object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105"
                style={
                  item.tall
                    ? { aspectRatio: '2/3' }
                    : { aspectRatio: item.ratio.replace('x', '/') }
                }
              />

              {/* Fog overlay on hover clear */}
              <div className="fog-overlay absolute inset-0 z-10 opacity-100 group-hover:opacity-0 transition-opacity duration-700" />

              {/* Caption */}
              <div className="absolute bottom-0 left-0 right-0 z-20 p-6 bg-gradient-to-t from-canopy-deep/90 via-canopy-deep/50 to-transparent">
                <h3
                  id={`micro-${item.id}-title`}
                  className="font-display text-xl md:text-2xl font-bold text-white mb-1"
                >
                  {item.title}
                </h3>
                <p
                  id={`micro-${item.id}-desc`}
                  className="font-body text-sm text-canopy-mist-light leading-relaxed max-w-md"
                >
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Closing */}
      <section className="max-w-2xl mx-auto px-6 py-24 md:py-32 text-center">
        <p className="font-display text-2xl md:text-3xl text-canopy-mist italic leading-relaxed">
          "In a single square meter of forest floor, ten thousand lives are unfolding."
        </p>
        <p className="mt-6 font-body text-sm uppercase tracking-[0.3em] text-canopy-stone">
          — E.O. Wilson
        </p>
      </section>
    </div>
  )
}