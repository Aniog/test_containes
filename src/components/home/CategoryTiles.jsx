import { Link } from 'react-router-dom'

const categories = [
  { id: 'earrings', name: 'Earrings', desc: 'Drops, studs, and cuffs', imgId: 'cat-earrings-tile' },
  { id: 'necklaces', name: 'Necklaces', desc: 'Pendants and chains', imgId: 'cat-necklaces-tile' },
  { id: 'huggies', name: 'Huggies', desc: 'Classic and contemporary', imgId: 'cat-huggies-tile' },
]

export default function CategoryTiles() {
  return (
    <section className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="section-heading">Shop by Category</h2>
          <p className="section-subheading mt-3">Find your perfect piece</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {categories.map((cat) => (
            <Link
              key={cat.id}
              to={`/shop?category=${cat.id}`}
              className="group relative aspect-[4/5] bg-velmora-200 rounded-sm overflow-hidden"
            >
              <div
                className="absolute inset-0 bg-velmora-300 transition-transform duration-700 group-hover:scale-105"
                data-strk-bg-id={`cat-${cat.id}`}
                data-strk-bg={`[cat-${cat.id}-desc] [cat-${cat.id}-name]`}
                data-strk-bg-ratio="4x5"
                data-strk-bg-width="800"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent transition-opacity duration-500" />
              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                <h3
                  id={`cat-${cat.id}-name`}
                  className="font-serif text-2xl md:text-3xl text-white font-medium"
                >
                  {cat.name}
                </h3>
                <p
                  id={`cat-${cat.id}-desc`}
                  className="text-sm text-white/70 font-sans font-light mt-1"
                >
                  {cat.desc}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}