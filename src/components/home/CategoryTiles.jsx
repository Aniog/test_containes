import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { categories } from '@/data/products'

export default function CategoryTiles() {
  return (
    <section className="section-padding">
      <div className="container-wide">
        <div className="text-center mb-12">
          <p className="font-sans text-xs uppercase tracking-[0.2em] text-velvet-gold mb-2">
            Collections
          </p>
          <h2 className="font-serif text-3xl md:text-4xl font-light text-velvet-text">
            Shop by Category
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {categories.map((cat) => (
            <Link
              key={cat.id}
              to={`/shop?category=${cat.id}`}
              className="group relative aspect-[4/5] overflow-hidden rounded-sm bg-velvet-surface"
            >
              <img
                src={cat.image}
                alt={cat.name}
                className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                <h3 className="font-serif text-2xl md:text-3xl text-velvet-text font-medium mb-1">
                  {cat.name}
                </h3>
                <p className="text-sm text-velvet-muted mb-3 font-sans">{cat.description}</p>
                <span className="inline-flex items-center gap-2 text-xs uppercase tracking-wider text-velvet-gold font-sans font-medium group-hover:gap-3 transition-all">
                  Shop Now <ArrowRight className="w-3 h-3" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}