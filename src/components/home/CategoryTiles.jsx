import { useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { categoryImages } from '@/data/images'

const categories = [
  { id: 'earrings', name: 'Earrings', description: 'Studs, drops & ear cuffs' },
  { id: 'necklaces', name: 'Necklaces', description: 'Pendants & chains' },
  { id: 'huggies', name: 'Huggies', description: 'Dome & hoop huggies' },
]

export default function CategoryTiles() {
  const containerRef = useRef(null)

  useEffect(() => {
    if (containerRef.current) {
      return ImageHelper.loadImages(strkImgConfig, containerRef.current)
    }
  }, [])

  return (
    <section ref={containerRef} className="py-16 md:py-24 bg-brand-cream">
      <div className="section-padding">
        {/* Section header */}
        <div className="text-center mb-10 md:mb-14">
          <p className="font-sans text-[0.65rem] tracking-[0.3em] uppercase text-brand-gold mb-3">
            Explore
          </p>
          <h2 className="section-title text-3xl md:text-heading">
            Shop by Category
          </h2>
        </div>

        {/* Category grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {categories.map((category) => {
            const imgData = categoryImages[category.id]
            return (
              <Link
                key={category.id}
                to={`/shop?category=${category.id}`}
                className="group relative aspect-[4/5] md:aspect-[3/4] overflow-hidden"
              >
                <img
                  data-strk-img-id={imgData.strkImgId}
                  data-strk-img={imgData.strkImgQuery}
                  data-strk-img-ratio="3x4"
                  data-strk-img-width="800"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={imgData.alt}
                  className="absolute inset-0 w-full h-full object-cover bg-brand-warm transition-transform duration-700 group-hover:scale-105"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-brand-charcoal/20 group-hover:bg-brand-charcoal/40 transition-colors duration-500" />

                {/* Label */}
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                  <h3 className="font-serif text-3xl md:text-4xl text-brand-ivory tracking-[-0.01em]">
                    {category.name}
                  </h3>
                  <p className="font-sans text-xs text-brand-ivory/70 mt-2 tracking-[0.1em] uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {category.description}
                  </p>
                </div>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}
