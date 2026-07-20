import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { BackgroundImage } from '@/components/ui/BackgroundImage'

const categories = [
  { id: 'earrings', label: 'Earrings', href: '/shop?category=earrings' },
  { id: 'necklaces', label: 'Necklaces', href: '/shop?category=necklaces' },
  { id: 'huggies', label: 'Huggies', href: '/shop?category=huggies' },
]

export default function CategoryTiles() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section ref={containerRef} className="bg-velmora-cream py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="mb-12 text-center">
          <p className="mb-2 text-xs font-medium uppercase tracking-[0.25em] text-velmora-gold">
            Shop by Category
          </p>
          <h2 className="font-serif text-4xl md:text-5xl">Find Your Shine</h2>
        </div>

        <div className="grid gap-4 md:grid-cols-3 md:gap-6">
          {categories.map((cat) => {
            const titleId = `category-title-${cat.id}`
            return (
              <Link
                key={cat.id}
                to={cat.href}
                className="group relative aspect-[3/4] overflow-hidden md:aspect-[3/4]"
              >
                <BackgroundImage
                  bgId={`category-bg-${cat.id}`}
                  query={`[${titleId}]`}
                  ratio="3x4"
                  width="800"
                  className="absolute inset-0 h-full w-full transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-velmora-charcoal/20 transition-colors duration-500 group-hover:bg-velmora-charcoal/35" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <h3
                    id={titleId}
                    className="border border-white/40 bg-white/10 px-8 py-3 font-serif text-xl uppercase tracking-[0.2em] text-white backdrop-blur-sm transition-all duration-500 group-hover:border-white group-hover:bg-white/20"
                  >
                    {cat.label}
                  </h3>
                </div>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}
