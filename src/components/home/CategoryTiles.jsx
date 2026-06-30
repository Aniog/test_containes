import { Link } from 'react-router-dom'

const categories = [
  { id: 'earrings', name: 'Earrings', gradient: 'from-gold/20 via-linen to-sand' },
  { id: 'necklaces', name: 'Necklaces', gradient: 'from-taupe/20 via-linen to-gold/10' },
  { id: 'huggies', name: 'Huggies', gradient: 'from-sand via-linen to-gold/15' },
]

export default function CategoryTiles() {
  return (
    <section className="py-20 md:py-28 border-t border-sand">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <div className="text-center mb-14">
          <p className="text-xs uppercase tracking-[0.3em] text-gold font-sans font-light mb-3">
            Explore
          </p>
          <h2 className="font-serif text-3xl md:text-4xl text-charcoal">
            Shop by Category
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {categories.map(cat => (
            <Link
              key={cat.id}
              to={`/shop?category=${cat.id}`}
              className="group relative aspect-[4/5] md:aspect-[3/4] overflow-hidden"
            >
              {/* Background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${cat.gradient} transition-transform duration-700 group-hover:scale-105`}>
                {/* Decorative element */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 rounded-full border border-gold/20 group-hover:border-gold/40 transition-colors duration-500" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full border border-gold/10 group-hover:border-gold/30 transition-colors duration-500" />
              </div>

              {/* Label */}
              <div className="absolute inset-0 flex items-end justify-center pb-8">
                <div className="text-center">
                  <h3 className="font-serif text-2xl md:text-3xl text-charcoal group-hover:text-gold transition-colors duration-300">
                    {cat.name}
                  </h3>
                  <span className="text-xs text-taupe uppercase tracking-wider font-sans mt-2 inline-block opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Shop Now →
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
