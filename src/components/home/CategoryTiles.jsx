import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { categories } from '../../data/products'
import AnimateIn from '../AnimateIn'

export default function CategoryTiles() {
  return (
    <section className="section-padding bg-cream">
      <div className="container-page">
        <AnimateIn className="text-center mb-12 md:mb-16">
          <p className="text-gold text-xs tracking-widest uppercase font-sans font-medium mb-3">Browse by Category</p>
          <h2 className="heading-lg">Shop Our Collections</h2>
          <div className="w-12 h-0.5 bg-gold/30 mx-auto mt-4" />
        </AnimateIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {categories.map((cat, i) => (
            <AnimateIn key={cat.id} delay={Math.min(i, 3)}>
              <Link
                to={`/collection?category=${cat.slug}`}
                className="group relative aspect-[4/5] md:aspect-square overflow-hidden rounded-sm bg-warm-100 block"
              >
                <img
                  src={cat.image}
                  alt={cat.name}
                  className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-6">
                  <h3 className="font-serif text-2xl md:text-3xl tracking-wide mb-2">{cat.name}</h3>
                  <p className="text-sm text-white/70 mb-4">{cat.count}</p>
                  <span className="inline-flex items-center gap-2 text-xs tracking-widest uppercase font-sans font-medium text-gold-light
                                   opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                    Shop Now <ArrowRight className="w-3 h-3" />
                  </span>
                </div>
              </Link>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  )
}