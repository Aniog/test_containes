import React from 'react'
import { Link } from 'react-router-dom'

const tiles = [
  { label: 'Earrings', href: '/shop?category=earrings', desc: 'From delicate studs to statement cuffs' },
  { label: 'Necklaces', href: '/shop?category=necklaces', desc: 'Layered chains & pendants' },
  { label: 'Huggies', href: '/shop?category=earrings', desc: 'The everyday essential' },
]

export default function CategoryTiles() {
  return (
    <section className="py-20 md:py-28 bg-surface">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <p className="font-sans text-[11px] text-accent uppercase tracking-[0.2em] mb-3">
            Categories
          </p>
          <h2 className="section-title">Shop by Category</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {tiles.map((tile) => (
            <Link
              key={tile.label}
              to={tile.href}
              className="group relative aspect-[4/3] overflow-hidden bg-border/30"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-amber-200/40 via-amber-100/20 to-amber-300/30 transition-all duration-500 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-base/70 via-base/10 to-transparent" />
              <div className="absolute inset-0 flex flex-col items-center justify-end pb-8 px-6 text-center">
                <h3 className="product-name text-xl md:text-2xl text-white mb-2 group-hover:text-accent transition-colors">
                  {tile.label}
                </h3>
                <p className="font-sans text-xs text-surface/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {tile.desc}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
