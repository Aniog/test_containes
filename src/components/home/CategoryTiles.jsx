import { Link } from 'react-router-dom'

const categories = [
  { id: 'earrings', label: 'Earrings', href: '/shop?category=earrings' },
  { id: 'necklaces', label: 'Necklaces', href: '/shop?category=necklaces' },
  { id: 'huggies', label: 'Huggies', href: '/shop?category=huggies' },
]

export default function CategoryTiles() {
  return (
    <section className="py-14 md:py-20 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-serif text-2xl md:text-3xl text-charcoal-950 tracking-wide text-center mb-10 md:mb-14">
          Shop by Category
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {categories.map((cat) => (
            <Link
              key={cat.id}
              to={cat.href}
              className="group relative aspect-[4/5] overflow-hidden rounded-sm"
            >
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                data-strk-bg-id={`cat-${cat.id}`}
                data-strk-bg={`gold ${cat.label} jewelry flatlay editorial dark background`}
                data-strk-bg-ratio="4x3"
                data-strk-bg-width="800"
              />
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors duration-500" />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="font-serif text-xl md:text-2xl text-white tracking-widest uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  {cat.label}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
