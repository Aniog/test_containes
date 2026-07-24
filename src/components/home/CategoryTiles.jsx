import { Link } from 'react-router-dom'

const categories = [
  { id: 'earrings', name: 'Earrings', imgQuery: 'gold earrings elegant display dark background' },
  { id: 'necklaces', name: 'Necklaces', imgQuery: 'gold necklace pendant elegant dark background' },
  { id: 'huggies', name: 'Huggies', imgQuery: 'gold huggie hoop earrings dark background' },
]

export default function CategoryTiles() {
  return (
    <section className="py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 id="category-section-title" className="font-serif text-3xl md:text-4xl font-light text-charcoal">
            Shop by Category
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {categories.map(cat => (
            <Link
              key={cat.id}
              to={`/shop?category=${cat.id}`}
              className="group relative aspect-[4/5] md:aspect-[3/4] overflow-hidden bg-dark-surface"
            >
              <img
                data-strk-img-id={`category-tile-${cat.id}-g7h8i9`}
                data-strk-img={`[category-name-${cat.id}] [category-section-title]`}
                data-strk-img-ratio="3x4"
                data-strk-img-width="600"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={cat.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300" />
              <div className="absolute inset-0 flex items-center justify-center">
                <h3
                  id={`category-name-${cat.id}`}
                  className="font-serif text-2xl md:text-3xl text-white font-light tracking-wide"
                >
                  {cat.name}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
