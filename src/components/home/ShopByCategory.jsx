import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { categories } from '@/data/products'
import { useScrollReveal } from '@/hooks/useScrollReveal'

const categoryData = [
  { ...categories[0], imgId: 'cat-earrings-a1b2c3', descId: 'cat-earrings-desc', description: 'Studs, drops & cuffs' },
  { ...categories[1], imgId: 'cat-necklaces-d4e5f6', descId: 'cat-necklaces-desc', description: 'Pendants, chains & layers' },
  { ...categories[2], imgId: 'cat-huggies-g7h8i9', descId: 'cat-huggies-desc', description: 'Snug-fit hoops & huggies' },
]

const ShopByCategory = () => {
  const containerRef = useRef(null)
  const [sectionRef, revealed] = useScrollReveal(containerRef)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section ref={containerRef} className="py-20 sm:py-28 bg-velmora-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-12 reveal ${revealed ? 'revealed' : ''}`}>
          <h2 className="font-serif text-3xl sm:text-4xl text-velmora-charcoal tracking-wide">Shop by Category</h2>
          <div className={`w-12 h-px bg-velmora-gold mx-auto mt-4 ${revealed ? 'line-expand' : ''}`} />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
          {categoryData.map((cat, i) => (
            <Link
              key={cat.id}
              to={`/shop?category=${cat.slug}`}
              className={`group relative aspect-[4/5] overflow-hidden reveal reveal-delay-${i + 1} ${revealed ? 'revealed' : ''}`}
            >
              <img
                alt={cat.name}
                data-strk-img-id={cat.imgId}
                data-strk-img={`[${cat.descId}] [cat-title-${cat.id}] gold jewelry editorial`}
                data-strk-img-ratio="4x5"
                data-strk-img-width="600"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all duration-500" />
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <h3
                  id={`cat-title-${cat.id}`}
                  className="font-serif text-2xl sm:text-3xl text-white tracking-wide"
                >
                  {cat.name}
                </h3>
                <p id={cat.descId} className="text-sm text-white/80 font-sans mt-1">{cat.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ShopByCategory
