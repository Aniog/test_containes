import { Link } from 'react-router-dom'
import { categories } from '../../data/products'

const categoryImages = {
  earrings: { query: 'gold earrings collection display elegant warm', ratio: '4x3' },
  necklaces: { query: 'gold necklaces collection display warm elegant', ratio: '4x3' },
  huggies: { query: 'gold huggie earrings collection display warm minimal', ratio: '4x3' },
}

export default function CategoryTiles() {
  return (
    <section className="section-padding bg-cream-100">
      <div className="max-w-[1200px] mx-auto">
        <div className="text-center mb-12">
          <h2 className="heading-serif text-3xl md:text-4xl text-warm-900 mb-3">
            Shop by Category
          </h2>
          <p className="text-sm text-warm-800/60 tracking-wide">
            Find your perfect piece.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {categories.map((cat) => {
            const imgConfig = categoryImages[cat.id]
            return (
              <Link
                key={cat.id}
                to={`/shop?category=${cat.id}`}
                className="group relative overflow-hidden aspect-[4/3] block"
              >
                <img
                  data-strk-img-id={`cat-tile-${cat.id}`}
                  data-strk-img={`[cat-desc-${cat.id}] [cat-name-${cat.id}] jewelry`}
                  data-strk-img-ratio={imgConfig.ratio}
                  data-strk-img-width="800"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={cat.name}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-stone-950/30 group-hover:bg-stone-950/50 transition-colors duration-500" />
                {/* Label */}
                <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
                  <span id={`cat-name-${cat.id}`} className="heading-serif text-2xl md:text-3xl tracking-[0.1em] mb-1">
                    {cat.name}
                  </span>
                  <span id={`cat-desc-${cat.id}`} className="text-xs tracking-wider opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                    {cat.description}
                  </span>
                  <span className="mt-4 text-[10px] tracking-[0.2em] uppercase border-b border-white/60 pb-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Explore
                  </span>
                </div>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}
