import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import { StrkImage } from '@/components/StrkImage'
import Reveal from '@/components/Reveal'

const tiles = [
  {
    id: 'earrings',
    label: 'Earrings',
    note: 'Cuffs, drops & statements',
    alt: 'gold statement earrings on dark neutral background editorial still life',
  },
  {
    id: 'necklaces',
    label: 'Necklaces',
    note: 'Chains, pendants & layers',
    alt: 'delicate gold necklace on warm silk dark background editorial',
  },
  {
    id: 'huggies',
    label: 'Huggies',
    note: 'Everyday gold essentials',
    alt: 'gold huggie hoop earrings macro still life warm light',
  },
]

export default function CategoryTiles() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-20 md:px-10 md:py-28">
      <Reveal className="text-center">
        <p className="text-[11px] font-semibold uppercase tracking-widest3 text-gold">
          The Collection
        </p>
        <h2
          id="categories-title"
          className="mt-4 font-serif text-4xl font-light text-ivory md:text-5xl"
        >
          Shop by <span className="italic text-goldlight">Category</span>
        </h2>
      </Reveal>

      <div className="mt-12 grid gap-5 md:grid-cols-3 md:gap-8">
        {tiles.map((tile, i) => (
          <Reveal key={tile.id} delay={i * 100}>
            <Link
              to={`/shop?category=${tile.label}`}
              className="group relative block overflow-hidden border border-line/50 bg-mocha"
              aria-label={`Shop ${tile.label}`}
            >
              <div className="aspect-[3/4]">
                <StrkImage
                  id={`category-tile-${tile.id}`}
                  query={`[category-${tile.id}-label] [categories-title] ${tile.alt}`}
                  ratio="3x4"
                  width={700}
                  alt={tile.alt}
                  className="transition-transform duration-700 ease-out group-hover:scale-105"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-transparent to-transparent transition-opacity duration-500 group-hover:from-ink/90" />
              <div className="absolute inset-x-0 bottom-0 flex items-end justify-between p-6">
                <div>
                  <h3
                    id={`category-${tile.id}-label`}
                    className="font-serif text-2xl font-medium uppercase tracking-[0.18em] text-ivory"
                  >
                    {tile.label}
                  </h3>
                  <p className="mt-1 max-h-0 overflow-hidden text-xs tracking-wide text-sand opacity-0 transition-all duration-500 group-hover:max-h-8 group-hover:opacity-100">
                    {tile.note}
                  </p>
                </div>
                <span className="flex h-10 w-10 shrink-0 items-center justify-center border border-ivory/30 text-ivory transition-all duration-300 group-hover:border-gold group-hover:bg-gold group-hover:text-inkonaccent">
                  <ArrowUpRight className="h-4 w-4" />
                </span>
              </div>
            </Link>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
