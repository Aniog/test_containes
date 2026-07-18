import { Link } from 'react-router-dom'

const categories = [
  { id: 'earrings', label: 'Earrings', line: 'Sculptural drops, cuffs, and crystal accents.' },
  { id: 'necklaces', label: 'Necklaces', line: 'Luminous pendants made to layer softly.' },
  { id: 'huggies', label: 'Huggies', line: 'Everyday polish in comfortable rounded forms.' },
]

export default function CategoryTiles() {
  return (
    <section className="bg-velmora-pearl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs font-bold uppercase tracking-nav text-velmora-gold">Shop by category</p>
            <h2 id="category-title" className="mt-3 font-serif text-4xl font-semibold text-velmora-ink sm:text-5xl">Find your signature glow</h2>
          </div>
          <Link to="/shop" className="text-xs font-bold uppercase tracking-nav text-velmora-gold underline-offset-4 hover:underline">View all jewelry</Link>
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          {categories.map((category) => (
            <Link key={category.id} to="/shop" className="group relative aspect-[4/5] overflow-hidden bg-velmora-espresso text-velmora-pearl shadow-velmora">
              <img
                alt={category.label}
                className="h-full w-full object-cover opacity-80 transition duration-700 group-hover:scale-105 group-hover:opacity-65"
                data-strk-img-id={`category-${category.id}-c81f`}
                data-strk-img={`[category-line-${category.id}] [category-label-${category.id}] [category-title]`}
                data-strk-img-ratio="3x4"
                data-strk-img-width="900"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-velmora-espresso/85 via-velmora-espresso/15 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 translate-y-3 p-7 transition duration-500 group-hover:translate-y-0">
                <h3 id={`category-label-${category.id}`} className="font-serif text-4xl font-semibold text-velmora-pearl">{category.label}</h3>
                <p id={`category-line-${category.id}`} className="mt-2 max-w-xs text-sm leading-6 text-velmora-linen opacity-0 transition duration-500 group-hover:opacity-100">{category.line}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
