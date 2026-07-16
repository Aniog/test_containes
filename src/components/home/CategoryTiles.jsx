import { Link } from 'react-router-dom'

const categories = [
  {
    id: 'earrings',
    name: 'Earrings',
    gradient: 'linear-gradient(135deg, #2d2318 0%, #4a3828 40%, #1a1410 100%)',
  },
  {
    id: 'necklaces',
    name: 'Necklaces',
    gradient: 'linear-gradient(135deg, #3d2e1f 0%, #5a4530 40%, #2a1f15 100%)',
  },
  {
    id: 'huggies',
    name: 'Huggies',
    gradient: 'linear-gradient(135deg, #352818 0%, #4d3a25 40%, #221a10 100%)',
  },
]

export default function CategoryTiles() {
  return (
    <section className="section-padding py-20 md:py-28">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-velmora-gold text-xs tracking-widest-2xl uppercase font-medium mb-3">
            Explore
          </p>
          <h2 className="font-serif text-3xl md:text-4xl text-velmora-black">
            Shop by Category
          </h2>
          <div className="w-12 h-px bg-velmora-gold mx-auto mt-5" />
        </div>

        {/* Tiles */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {categories.map((cat) => (
            <Link
              key={cat.id}
              to={`/shop?category=${cat.id}`}
              className="group relative aspect-[4/5] rounded-sm overflow-hidden"
            >
              <div
                className="absolute inset-0 transition-transform duration-700 group-hover:scale-105"
                style={{ background: cat.gradient }}
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/25 group-hover:bg-black/40 transition-colors duration-500" />

              {/* Label */}
              <div className="absolute inset-0 flex items-end justify-center pb-10">
                <div className="text-center">
                  <h3 className="font-serif text-2xl md:text-3xl text-white tracking-wider uppercase mb-2">
                    {cat.name}
                  </h3>
                  <span className="text-white/70 text-xs tracking-widest uppercase font-medium border-b border-white/40 pb-0.5 group-hover:border-velmora-gold-light group-hover:text-velmora-gold-light transition-colors">
                    Discover
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
