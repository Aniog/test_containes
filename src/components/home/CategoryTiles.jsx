import { Link } from 'react-router-dom'

const categories = [
  { name: 'Earrings', slug: 'earrings', query: 'elegant gold earrings collection flatlay warm' },
  { name: 'Necklaces', slug: 'necklaces', query: 'gold necklace pendant elegant warm light' },
  { name: 'Huggies', slug: 'huggies', query: 'gold huggie hoop earrings close up warm' },
]

export default function CategoryTiles() {
  return (
    <section className="py-16 md:py-24 bg-base">
      <div className="max-w-7xl mx-auto px-5 md:px-10 lg:px-16">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="font-serif text-3xl md:text-4xl text-foreground">Shop by Category</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {categories.map((cat) => (
            <Link
              key={cat.slug}
              to={`/shop?category=${cat.slug}`}
              className="group relative aspect-[4/5] overflow-hidden bg-surface-warm"
            >
              <img
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={cat.name}
                data-strk-img-id={`category-${cat.slug}`}
                data-strk-img={`[category-title-${cat.slug}]`}
                data-strk-img-ratio="4x3"
                data-strk-img-width="800"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-300" />
              <div className="absolute inset-0 flex items-center justify-center">
                <h3
                  id={`category-title-${cat.slug}`}
                  className="font-serif text-2xl md:text-3xl text-white tracking-wide"
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
