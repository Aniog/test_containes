import { Link } from 'react-router-dom'

const categories = [
  { name: 'Earrings', href: '/shop?category=Earrings', id: 'earrings' },
  { name: 'Necklaces', href: '/shop?category=Necklaces', id: 'necklaces' },
  { name: 'Huggies', href: '/shop?category=Huggies', id: 'huggies' },
]

export default function CategoryTiles() {
  return (
    <section className="section-padding py-20 md:py-28">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-velmora-gold font-sans text-xs tracking-widest uppercase mb-4">Explore</p>
          <h2 className="font-serif text-3xl md:text-4xl tracking-wide">Shop by Category</h2>
          <div className="w-12 h-px bg-velmora-gold mx-auto mt-6" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {categories.map((cat) => (
            <Link key={cat.id} to={cat.href} className="group relative overflow-hidden aspect-[4/5] bg-velmora-cream">
              <img
                data-strk-img-id={`category-${cat.id}`}
                data-strk-img={`[category-name-${cat.id}] gold jewelry`}
                data-strk-img-ratio="4x5"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={cat.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <span id={`category-name-${cat.id}`} className="hidden">{cat.name}</span>
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/35 transition-colors duration-500" />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="font-serif text-2xl md:text-3xl text-white tracking-wide opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  {cat.name}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}