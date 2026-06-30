import { Link } from 'react-router-dom'

const categories = [
  { id: 'earrings', label: 'Earrings', query: 'Earrings' },
  { id: 'necklaces', label: 'Necklaces', query: 'Necklaces' },
  { id: 'huggies', label: 'Huggies', query: 'Huggies' },
]

export default function CategoryTiles() {
  return (
    <section className="py-20 md:py-28 bg-cream">
      <div className="container-narrow">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-warm-dark tracking-wider">
            Shop by Category
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {categories.map((cat) => (
            <Link
              key={cat.id}
              to={`/shop?category=${cat.query}`}
              className="group relative aspect-[4/5] bg-[#E8E0D5]/30 overflow-hidden"
            >
              <img
                data-strk-img-id={`category-${cat.id}-tile`}
                data-strk-img={`[category-${cat.id}-label]`}
                data-strk-img-ratio="4x5"
                data-strk-img-width="600"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={cat.label}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-warm-dark/20 group-hover:bg-warm-dark/30 transition-colors duration-500" />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="font-serif text-2xl md:text-3xl text-cream tracking-wider opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  {cat.label}
                </span>
              </div>
              <span id={`category-${cat.id}-label`} className="hidden">{cat.label} gold jewelry</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}