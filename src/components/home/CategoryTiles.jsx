import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import SectionHeading from '@/components/SectionHeading'

const TILES = [
  { id: 'earrings', label: 'Earrings', note: 'Cuffs, drops & studs' },
  { id: 'necklaces', label: 'Necklaces', note: 'Pendants & chains' },
  { id: 'huggies', label: 'Huggies', note: 'Everyday hoops' },
]

export default function CategoryTiles() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-24">
      <SectionHeading
        eyebrow="The collections"
        title="Shop by Category"
      />
      <div className="mt-10 grid gap-5 md:mt-14 md:grid-cols-3 md:gap-7">
        {TILES.map((tile) => (
          <Link
            key={tile.id}
            to={`/shop?category=${tile.id}`}
            className="reveal group relative block overflow-hidden bg-sand"
          >
            <div className="aspect-[4/5] w-full md:aspect-[3/4]">
              <img
                data-strk-img-id={`tile-${tile.id}`}
                data-strk-img={`[tile-label-${tile.id}] gold jewelry editorial still life, warm neutral backdrop`}
                data-strk-img-ratio="3x4"
                data-strk-img-width="700"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={tile.label}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent opacity-90 transition-opacity duration-500 group-hover:opacity-100" />
            <div className="absolute inset-x-0 bottom-0 flex items-end justify-between p-6">
              <div>
                <h3
                  id={`tile-label-${tile.id}`}
                  className="font-serif text-2xl uppercase tracking-[0.18em] text-cream md:text-3xl"
                >
                  {tile.label}
                </h3>
                <p className="mt-1 text-[10px] font-semibold uppercase tracking-[0.22em] text-cream/70">
                  {tile.note}
                </p>
              </div>
              <span className="flex h-11 w-11 translate-y-2 items-center justify-center border border-cream/40 text-cream opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                <ArrowRight className="h-4 w-4" strokeWidth={1.5} />
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}
