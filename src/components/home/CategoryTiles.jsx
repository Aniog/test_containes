import { Link } from 'react-router-dom'

const categories = [
  {
    id: 'earrings',
    name: 'Earrings',
    query: 'gold drop earrings on dark background editorial still life',
  },
  {
    id: 'necklaces',
    name: 'Necklaces',
    query: 'gold chain pendant necklace on neutral background jewelry editorial',
  },
  {
    id: 'huggies',
    name: 'Huggies',
    query: 'gold huggie hoop earrings on dark background editorial still life',
  },
]

export default function CategoryTiles() {
  return (
    <section className="section-padding bg-cream">
      <div className="container-main">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {categories.map((category) => (
            <Link
              key={category.id}
              to={`/shop?category=${category.id}`}
              className="group relative aspect-[4/5] md:aspect-[3/4] overflow-hidden bg-ink-soft"
            >
              <div
                className="absolute inset-0 transition-transform duration-700 group-hover:scale-105"
                data-strk-bg-id={`category-${category.id}`}
                data-strk-bg={category.query}
                data-strk-bg-ratio="3x4"
                data-strk-bg-width="700"
              />
              <div className="absolute inset-0 bg-ink/30 group-hover:bg-ink/20 transition-colors duration-300" />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="font-serif text-2xl md:text-3xl text-cream uppercase tracking-widest font-medium border-b border-transparent group-hover:border-gold transition-all duration-300 pb-1">
                  {category.name}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
