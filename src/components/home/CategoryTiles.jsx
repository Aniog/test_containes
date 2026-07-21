import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import StockImage from '@/components/ui/StockImage'
import Reveal from '@/components/ui/Reveal'

const TILES = [
  {
    id: 'earrings',
    label: 'Earrings',
    desc: 'Statement drops and crystal ear cuffs in warm 18K gold',
  },
  {
    id: 'necklaces',
    label: 'Necklaces',
    desc: 'Fine gold chains and floral crystal pendants for layering',
  },
  {
    id: 'huggies',
    label: 'Huggies',
    desc: 'Chunky gold dome huggie earrings for everyday wear',
  },
]

export default function CategoryTiles() {
  return (
    <section className="py-20 md:py-28">
      <div className="velmora-container">
        <Reveal>
          <div className="text-center">
            <p className="eyebrow">Shop by Category</p>
            <h2 className="mt-4 font-display text-4xl font-medium text-velmora-ink md:text-5xl">
              Find Your Signature
            </h2>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-5 md:grid-cols-3 md:gap-8">
          {TILES.map((tile, i) => (
            <Reveal key={tile.id} delay={i * 100}>
              <Link
                to={`/shop?category=${tile.id}`}
                className="group relative block overflow-hidden bg-velmora-surface"
                aria-label={`Shop ${tile.label}`}
              >
                <div className="relative aspect-[3/4] overflow-hidden md:aspect-[4/5]">
                  <StockImage
                    imgId={`category-${tile.id}`}
                    query={`${tile.desc} elegant editorial jewelry photography`}
                    ratio="3x4"
                    width={700}
                    alt={tile.label}
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-velmora-bg/85 via-velmora-bg/10 to-transparent transition-opacity duration-500 group-hover:from-velmora-bg/95" />
                </div>
                <div className="absolute inset-x-0 bottom-0 flex items-end justify-between p-6 md:p-7">
                  <div>
                    <h3
                      id={`category-title-${tile.id}`}
                      className="font-display text-2xl font-medium uppercase tracking-[0.2em] text-velmora-ink md:text-3xl"
                    >
                      {tile.label}
                    </h3>
                    <p className="mt-2 max-w-[240px] text-xs leading-relaxed text-velmora-ink/70 opacity-0 transition-all duration-500 group-hover:opacity-100 max-lg:opacity-100">
                      {tile.desc}
                    </p>
                  </div>
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center border border-velmora-gold/50 text-velmora-gold transition-all duration-300 group-hover:bg-velmora-gold group-hover:text-[#1d130b]">
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
