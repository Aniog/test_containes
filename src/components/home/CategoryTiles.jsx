import { Link } from 'react-router-dom'

const categories = [
  {
    name: 'Earrings',
    slug: 'earrings',
    description: 'Sculptural cuffs, drops, and studs',
  },
  {
    name: 'Necklaces',
    slug: 'necklaces',
    description: 'Pendants and chains for every layer',
  },
  {
    name: 'Huggies',
    slug: 'huggies',
    description: 'The everyday essential',
  },
]

export default function CategoryTiles() {
  return (
    <section className="section-padding bg-velvet-950">
      <div className="container-site">
        <div className="text-center mb-14">
          <p className="text-xs tracking-super-wide uppercase text-gold-400 mb-4 font-medium">Curated For You</p>
          <h2 className="heading-lg text-velvet-50">Shop by Category</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {categories.map((cat) => (
            <Link
              key={cat.slug}
              to={`/shop?category=${cat.slug}`}
              className="group relative aspect-[4/5] bg-velvet-800 rounded-sm overflow-hidden"
            >
              <div className="w-full h-full bg-gradient-to-t from-velvet-950 via-velvet-950/20 to-transparent flex items-center justify-center">
                <span className="text-velvet-500 text-xs tracking-wider">GOLD {cat.name.toUpperCase()}</span>
              </div>

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center">
                <div className="text-center">
                  <h3 className="font-serif text-2xl md:text-3xl text-velvet-50 tracking-wide mb-2">
                    {cat.name}
                  </h3>
                  <p className="text-velvet-300 text-sm font-light">{cat.description}</p>
                </div>
              </div>

              {/* Label below */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="flex items-center justify-between">
                  <h3 className="font-serif text-xl text-velvet-50 tracking-wide">{cat.name}</h3>
                  <span className="text-xs tracking-wider uppercase text-gold-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    Explore →
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