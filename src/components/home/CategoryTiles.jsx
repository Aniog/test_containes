import React, { useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

export function CategoryTiles() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  const categories = [
    { title: 'Earrings', id: 'earrings', query: 'gold drop earrings on model aesthetic' },
    { title: 'Necklaces', id: 'necklaces', query: 'gold pendant necklace on collarbone elegant' },
    { title: 'Huggies', id: 'huggies', query: 'gold huggie hoop earrings close up ear' }
  ]

  return (
    <section className="py-24 bg-background" ref={containerRef}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {categories.map((cat) => (
            <Link key={cat.id} to={`/category/${cat.id}`} className="group block relative overflow-hidden bg-secondary aspect-[3/4]">
              <img 
                data-strk-img-id={`cat-${cat.id}`}
                data-strk-img={`${cat.query}`}
                data-strk-img-ratio="4x5"
                data-strk-img-width="600"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={cat.title}
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-500" />
              <div className="absolute inset-0 flex items-center justify-center">
                <h3 className="text-white font-serif text-3xl tracking-widest uppercase relative overflow-hidden pb-2 drop-shadow-md">
                  {cat.title}
                  <span className="absolute bottom-0 left-0 w-full h-[1px] bg-white transform -translate-x-[101%] group-hover:translate-x-0 transition-transform duration-500 ease-out" />
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
