import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

export default function Collections() {
  const collections = [
    {
      id: 'everyday-elegance',
      name: 'Everyday Elegance',
      description: 'Pieces designed for daily wear — lightweight, versatile, effortlessly beautiful.',
      imgId: 'coll-everyday-j1k2l3',
      titleId: 'coll-everyday-title',
      descId: 'coll-everyday-desc',
    },
    {
      id: 'golden-hour',
      name: 'Golden Hour',
      description: 'Warm-toned statement pieces that catch the light and turn heads.',
      imgId: 'coll-golden-m4n5o6',
      titleId: 'coll-golden-title',
      descId: 'coll-golden-desc',
    },
    {
      id: 'gift-edit',
      name: 'The Gift Edit',
      description: 'Curated sets and standalone pieces, ready to delight — wrapped in our signature box.',
      imgId: 'coll-gift-p7q8r9',
      titleId: 'coll-gift-title',
      descId: 'coll-gift-desc',
    },
  ]

  const containerRef = useRef(null)

  useEffect(() => {
    if (containerRef.current) {
      return ImageHelper.loadImages(strkImgConfig, containerRef.current)
    }
  }, [])

  return (
    <div ref={containerRef} className="pt-24 md:pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <h1 className="font-serif text-3xl md:text-4xl tracking-wide text-charcoal">
            Collections
          </h1>
          <div className="w-12 h-px bg-gold mx-auto mt-4" />
        </div>

        <div className="space-y-16">
          {collections.map((coll, i) => (
            <div
              key={coll.id}
              className={`grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center ${
                i % 2 === 1 ? 'md:direction-rtl' : ''
              }`}
            >
              <div className={`aspect-[4/3] overflow-hidden ${i % 2 === 1 ? 'md:order-2' : ''}`}>
                <img
                  data-strk-img-id={coll.imgId}
                  data-strk-img={`[${coll.descId}] [${coll.titleId}] gold jewelry collection editorial`}
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="800"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={coll.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className={i % 2 === 1 ? 'md:order-1' : ''}>
                <h2
                  id={coll.titleId}
                  className="font-serif text-2xl md:text-3xl tracking-wide text-charcoal"
                >
                  {coll.name}
                </h2>
                <div className="w-12 h-px bg-gold mt-4 mb-4" />
                <p id={coll.descId} className="text-muted leading-relaxed mb-6">
                  {coll.description}
                </p>
                <Link
                  to="/shop"
                  className="inline-block border border-gold text-gold px-8 py-3 text-xs tracking-[0.2em] uppercase font-medium hover:bg-gold hover:text-white transition-all duration-300"
                >
                  Shop Now
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
