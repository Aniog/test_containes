import React, { useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const CATEGORIES = [
  { id: 'earrings', title: 'Earrings', query: 'gold earrings on marble' },
  { id: 'necklaces', title: 'Necklaces', query: 'gold layered necklaces on silk' },
  { id: 'huggies', title: 'Huggies', query: 'small gold huggie hoop earrings' }
]

export function Categories() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section className="py-24" ref={containerRef}>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
          {CATEGORIES.map((cat) => (
            <Link 
              key={cat.id} 
              to={`/shop?category=${cat.id}`}
              className="relative aspect-square md:aspect-[4/5] overflow-hidden group block"
            >
              <img 
                alt={`${cat.title} Category`}
                data-strk-img-id={`cat-img-${cat.id}`}
                data-strk-img={`${cat.query}`}
                data-strk-img-ratio="4x5"
                data-strk-img-width="600"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-500" />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-white font-serif tracking-widest uppercase text-xl md:text-2xl pt-2 transition-transform duration-500 group-hover:-translate-y-2">
                  {cat.title}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
