import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

const categories = [
  {
    id: 'earrings',
    name: 'Earrings',
    image: 'https://images.unsplash.com/photo-1651160670627-2896ddf7822f?w=800&auto=format&fit=crop',
    description: 'From everyday studs to statement drops',
  },
  {
    id: 'necklaces',
    name: 'Necklaces',
    image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&auto=format&fit=crop',
    description: 'Chains, pendants, and layered looks',
  },
  {
    id: 'huggies',
    name: 'Huggies',
    image: 'https://images.unsplash.com/photo-1608508644127-ba99d7732fee?w=800&auto=format&fit=crop',
    description: 'Modern hoops with endless versatility',
  },
]

export default function CategoryTiles() {
  return (
    <section className="py-16 md:py-24 bg-cream-50">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <p className="text-gold-500 text-xs tracking-widest uppercase font-sans mb-3">
            Shop by Category
          </p>
          <h2 className="section-title">Find Your Perfect Piece</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {categories.map((cat) => (
            <Link
              key={cat.id}
              to="/shop"
              className="group relative aspect-[4/5] md:aspect-[3/4] overflow-hidden rounded-sm bg-ink-100"
            >
              <img
                src={cat.image}
                alt={cat.name}
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink-900/70 via-ink-900/10 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                <h3 className="font-serif text-2xl md:text-3xl text-cream-50 font-light mb-1">
                  {cat.name}
                </h3>
                <p className="text-cream-50/60 text-xs md:text-sm font-sans mb-3">
                  {cat.description}
                </p>
                <span className="inline-flex items-center gap-1.5 text-xs tracking-widest uppercase text-cream-50/80 group-hover:text-cream-50 transition-colors font-sans">
                  Shop Now
                  <ArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-1" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}