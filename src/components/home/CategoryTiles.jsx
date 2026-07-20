import { Link } from 'react-router-dom'

const tiles = [
  { id: 'earrings', label: 'Earrings', query: 'gold earrings on model' },
  { id: 'necklaces', label: 'Necklaces', query: 'gold necklace editorial' },
  { id: 'huggies', label: 'Huggies', query: 'gold huggie earrings close up' },
]

export default function CategoryTiles() {
  return (
    <section className="py-16 md:py-24 bg-velmora-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="font-sans text-xs uppercase tracking-[0.25em] text-velmora-muted mb-3">
            Shop by Category
          </p>
          <h2 className="font-serif text-3xl md:text-4xl text-velmora-text tracking-wide">
            Find Your Shine
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {tiles.map((tile) => (
            <Link
              key={tile.id}
              to={`/shop?category=${tile.id}`}
              className="group relative aspect-[4/5] overflow-hidden bg-velmora-text"
            >
              <div
                className="absolute inset-0 transition-transform duration-700 group-hover:scale-105"
                data-strk-bg-id={`category-${tile.id}-bg`}
                data-strk-bg={`[category-${tile.id}-label]`}
                data-strk-bg-ratio="4x5"
                data-strk-bg-width="800"
              />
              <div className="absolute inset-0 bg-black/25 group-hover:bg-black/35 transition-colors" />
              <div className="absolute inset-0 flex items-center justify-center">
                <h3
                  id={`category-${tile.id}-label`}
                  className="font-serif text-2xl md:text-3xl text-white tracking-[0.15em] uppercase border-b border-transparent group-hover:border-white pb-1 transition-all"
                >
                  {tile.label}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
