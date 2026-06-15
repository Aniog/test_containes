import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const categories = [
  { id: 'cat-earrings', label: 'EARRINGS', desc: 'Delicate drops, studs & ear cuffs', href: '/shop?category=earrings' },
  { id: 'cat-necklaces', label: 'NECKLACES', desc: 'Pendants, chains & statement pieces', href: '/shop?category=necklaces' },
  { id: 'cat-huggies', label: 'HUGGIES', desc: 'Sculptural hoops that hug the ear', href: '/shop?category=huggies' },
]

export default function CategoryTiles() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section className="py-20 md:py-28 bg-parchment">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <p className="font-manrope text-[10px] tracking-widest3 text-gold mb-3">EXPLORE</p>
          <h2 className="font-serif text-4xl md:text-5xl font-light text-obsidian">Shop by Category</h2>
          <div className="w-12 h-px bg-gold/40 mx-auto mt-5" />
        </div>

        <div ref={containerRef} className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {categories.map(cat => (
            <Link key={cat.id} to={cat.href} className="group relative overflow-hidden block">
              <div className="relative aspect-[3/4] md:aspect-[4/5] overflow-hidden bg-linen">
                <img
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={cat.label}
                  data-strk-img-id={`${cat.id}-img`}
                  data-strk-img={`[${cat.id}-desc] [${cat.id}-label]`}
                  data-strk-img-ratio="3x4"
                  data-strk-img-width="600"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-obsidian/20 group-hover:bg-obsidian/40 transition-colors duration-500" />
                {/* Content */}
                <div className="absolute inset-0 flex flex-col items-center justify-end pb-8 px-6 text-center">
                  <h3 id={`${cat.id}-label`} className="font-serif text-2xl md:text-3xl font-light text-ivory tracking-widest">{cat.label}</h3>
                  <p id={`${cat.id}-desc`} className="font-manrope text-xs text-ivory/70 mt-2">{cat.desc}</p>
                  <div className="mt-4 overflow-hidden h-5">
                    <span className="block font-manrope text-[10px] tracking-widest text-gold translate-y-5 group-hover:translate-y-0 transition-transform duration-300">
                      SHOP NOW
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
