import {useRef, useEffect} from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { PLACEHOLDER } from '@/components/ui/Button'

const tiles = [
  { id: 'Earrings', name: 'Earrings', desc: 'Hoops, drops & cuffs', query: 'gold earrings jewelry editorial' },
  { id: 'Necklaces', name: 'Necklaces', desc: 'Chains & pendants', query: 'gold necklace jewelry editorial' },
  { id: 'Huggies', name: 'Huggies', desc: 'Everyday huggies', query: 'gold huggie earring jewelry editorial' },
]

export default function CategoryTiles() {
  const ref = useRef(null)

  useEffect(() => {
    const node = ref.current
    if (!node) return
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, node)
    })
    return () => window.cancelAnimationFrame(frameId)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <section ref={ref} className="bg-ivory py-20 md:py-28">
      <div className="max-w-8xl mx-auto px-6 md:px-10">
        <div className="text-center mb-12 md:mb-16">
          <p className="text-[11px] uppercase tracking-widest3 text-gold mb-3">
            Explore
          </p>
          <h2 className="font-serif text-4xl md:text-5xl text-ink">
            Shop by Category
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
          {tiles.map((t) => (
            <Link
              key={t.id}
              to={`/shop?category=${t.id}`}
              className="group relative aspect-[4/5] md:aspect-[3/4] overflow-hidden bg-cream"
            >
              <img
                alt={t.name}
                data-strk-img-id={`cat-${t.id}-img`}
                data-strk-img={`[cat-${t.id}-desc] [cat-${t.id}-name] ${t.query}`}
                data-strk-img-ratio="3x4"
                data-strk-img-width="700"
                src={PLACEHOLDER}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-espresso/70 via-espresso/10 to-transparent transition-opacity duration-500 group-hover:from-espresso/80" />
              <div className="absolute bottom-0 inset-x-0 p-7 text-center translate-y-2 group-hover:translate-y-0 transition-transform duration-400">
                <h3
                  id={`cat-${t.id}-name`}
                  className="font-serif text-2xl md:text-3xl text-ivory uppercase tracking-wider"
                >
                  {t.name}
                </h3>
                <p
                  id={`cat-${t.id}-desc`}
                  className="text-[11px] uppercase tracking-widest3 text-ivory/80 mt-2"
                >
                  {t.desc}
                </p>
                <span className="inline-block mt-4 text-[11px] uppercase tracking-widest3 text-gold-soft border-b border-gold-soft/60 pb-1">
                  Shop Now
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
