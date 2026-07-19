import React, { useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const categories = [
  { id: 'earrings', name: 'Earrings', path: '/shop?category=earrings', desc: 'Statement studs, hoops & cuffs', imgId: 'cat-earrings-1a2b' },
  { id: 'necklaces', name: 'Necklaces', path: '/shop?category=necklaces', desc: 'Delicate chains & pendants', imgId: 'cat-necklaces-3c4d' },
  { id: 'huggies', name: 'Huggies', path: '/shop?category=huggies', desc: 'Everyday gold hoops', imgId: 'cat-huggies-5e6f' },
]

export default function CategoryTiles() {
  const sectionRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, sectionRef.current)
  }, [])

  return (
    <section ref={sectionRef} className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl text-dark font-light">Shop by Category</h2>
          <div className="w-12 h-0.5 bg-gold mx-auto mt-4" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {categories.map((cat) => (
            <Link
              key={cat.id}
              to={cat.path}
              className="group relative aspect-[4/5] overflow-hidden bg-taupe-sand/20"
            >
              <img
                data-strk-img-id={cat.imgId}
                data-strk-img={`[cat-desc-${cat.id}] [cat-name-${cat.id}] [categories-title]`}
                data-strk-img-ratio="4x5"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={cat.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                <h3 id={`cat-name-${cat.id}`} className="font-serif text-2xl text-white">{cat.name}</h3>
                <p id={`cat-desc-${cat.id}`} className="text-white/70 text-sm mt-1">{cat.desc}</p>
                <div className="flex items-center gap-1 text-gold text-xs uppercase tracking-[0.1em] font-medium mt-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Shop Now <ArrowRight className="w-3 h-3" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        <h2 id="categories-title" className="sr-only">Shop by Category</h2>
      </div>
    </section>
  )
}