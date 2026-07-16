import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { categories } from '@/data/products'
import useScrollReveal from '@/hooks/useScrollReveal'

export default function CategoryTiles() {
  const sectionRef = useScrollReveal([])

  return (
    <section ref={sectionRef} className="py-16 md:py-24">
      <div className="max-w-screen-2xl mx-auto px-4 md:px-8">
        <div className="text-center mb-10">
          <p className="section-subtitle" data-reveal>Find Your Perfect Piece</p>
          <h2 className="section-title mt-2" data-reveal>Shop by Category</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {categories.map((cat, i) => (
            <Link
              key={cat.id}
              to={`/shop?category=${cat.id}`}
              data-reveal
              style={{ transitionDelay: `${i * 100}ms` }}
              className="group relative aspect-[4/3] md:aspect-[3/4] overflow-hidden rounded-sm bg-midnight-100"
            >
              <img
                src={cat.image}
                alt={cat.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-midnight-950/20 group-hover:bg-midnight-950/40 transition-colors duration-500" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center transform group-hover:scale-105 transition-transform duration-500">
                  <h3 className="font-serif text-2xl md:text-3xl text-white font-light mb-2">
                    {cat.name}
                  </h3>
                  <span className="inline-flex items-center gap-1 text-xs uppercase tracking-widest text-white/80 font-sans group-hover:text-white transition-colors">
                    Shop Now
                    <ArrowRight className="w-3 h-3" />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}