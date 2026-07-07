import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const CATEGORIES = [
  {
    id: 'earrings',
    label: 'Earrings',
    href: '/shop?category=earrings',
    imgId: 'category-tile-earrings',
    titleId: 'category-title-earrings',
  },
  {
    id: 'necklaces',
    label: 'Necklaces',
    href: '/shop?category=necklaces',
    imgId: 'category-tile-necklaces',
    titleId: 'category-title-necklaces',
  },
  {
    id: 'huggies',
    label: 'Huggies',
    href: '/shop?category=huggies',
    imgId: 'category-tile-huggies',
    titleId: 'category-title-huggies',
  },
]

export default function CategoryTiles() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section ref={containerRef} className="py-16 md:py-24 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 md:mb-14">
          <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl text-espresso">
            Shop by Category
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {CATEGORIES.map((category) => (
            <Link
              key={category.id}
              to={category.href}
              className="relative aspect-[3/4] md:aspect-[4/5] overflow-hidden group bg-charcoal"
            >
              <div
                data-strk-bg-id={category.imgId}
                data-strk-bg={`[${category.titleId}]`}
                data-strk-bg-ratio="3x4"
                data-strk-bg-width="800"
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-espresso/20 group-hover:bg-espresso/30 transition-colors duration-500" />
              <div className="absolute inset-0 flex items-center justify-center">
                <h3
                  id={category.titleId}
                  className="font-serif text-2xl md:text-3xl text-cream tracking-[0.12em] uppercase border-b border-transparent group-hover:border-gold pb-1 transition-all duration-500"
                >
                  {category.label}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
