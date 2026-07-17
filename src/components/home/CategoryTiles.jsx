import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import StrkImage from '@/components/ui/StrkImage'
import { Reveal } from '@/hooks/useReveal'

const TILES = [
  {
    id: 'cat-earrings',
    label: 'Earrings',
    note: 'Cuffs, drops & statements',
    imgId: 'cat-earrings-6e2f48',
    query: 'gold statement earrings on neutral linen still life editorial',
  },
  {
    id: 'cat-necklaces',
    label: 'Necklaces',
    note: 'Chains & pendants',
    imgId: 'cat-necklaces-1a84d7',
    query: 'delicate gold pendant necklace on silk fabric warm light still life',
  },
  {
    id: 'cat-huggies',
    label: 'Huggies',
    note: 'Everyday essentials',
    imgId: 'cat-huggies-9c35b1',
    query: 'small gold huggie hoop earrings pair macro on stone still life',
  },
]

export default function CategoryTiles() {
  return (
    <section className="bg-sand py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <Reveal className="flex flex-col items-center text-center">
          <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-gold-deep">Shop by Category</p>
          <h2 className="mt-4 font-serif text-3xl font-medium tracking-wide text-ink md:text-5xl">
            Find Your Signature
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-5 md:grid-cols-3 md:gap-6">
          {TILES.map((tile, i) => (
            <Reveal key={tile.id} delay={i * 100}>
              <Link
                to={`/shop?category=${tile.label}`}
                className="group relative block overflow-hidden bg-stone-warm"
                aria-label={`Shop ${tile.label}`}
              >
                <div className="relative aspect-[3/4] overflow-hidden">
                  <StrkImage
                    imgId={tile.imgId}
                    query={`${tile.query} [brand-tagline]`}
                    ratio="3x4"
                    width={800}
                    alt={tile.label}
                    className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-espresso-deep/60 via-transparent to-transparent opacity-80 transition-opacity duration-500 group-hover:opacity-95" />
                </div>
                <div className="absolute inset-x-0 bottom-0 flex items-end justify-between p-6 md:p-8">
                  <div>
                    <p className="text-[10px] font-medium uppercase tracking-[0.25em] text-gold-soft opacity-0 transition-all duration-400 group-hover:opacity-100">
                      {tile.note}
                    </p>
                    <h3 className="mt-1.5 font-serif text-2xl font-medium uppercase tracking-[0.2em] text-cream md:text-3xl">
                      {tile.label}
                    </h3>
                  </div>
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center border border-cream/30 text-cream transition-all duration-400 group-hover:border-gold group-hover:bg-gold">
                    <ArrowUpRight className="h-4 w-4" strokeWidth={1.5} />
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
