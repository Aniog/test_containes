import { Link } from 'react-router-dom'

const categories = [
  {
    id: 'earrings',
    label: 'Earrings',
    to: '/shop/earrings',
    query: 'gold earrings jewelry elegant',
  },
  {
    id: 'necklaces',
    label: 'Necklaces',
    to: '/shop/necklaces',
    query: 'gold necklace jewelry elegant',
  },
  {
    id: 'huggies',
    label: 'Huggies',
    to: '/shop/huggies',
    query: 'gold huggie earrings jewelry',
  },
]

export default function CategoryTiles() {
  return (
    <section className="py-20 md:py-28 bg-cream">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <p className="text-xs tracking-[0.2em] uppercase text-taupe font-sans font-medium mb-3">
            Curated Collections
          </p>
          <h2 className="font-serif text-3xl md:text-4xl text-espresso tracking-wide">
            Shop by Category
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {categories.map((cat) => (
            <Link key={cat.id} to={cat.to} className="group block relative overflow-hidden aspect-[4/5] md:aspect-[3/4]">
              {/* Background placeholder */}
              <div className="absolute inset-0 bg-sand flex items-center justify-center overflow-hidden">
                <div
                  className="w-full h-full"
                  data-strk-bg-id={`cat-bg-${cat.id}`}
                  data-strk-bg={cat.query}
                  data-strk-bg-ratio="3x4"
                  data-strk-bg-width="800"
                />
              </div>

              {/* Overlay */}
              <div className="absolute inset-0 bg-espresso/25 group-hover:bg-espresso/40 transition-colors duration-500" />

              {/* Label */}
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="font-serif text-2xl md:text-3xl tracking-wider text-cream opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0">
                  {cat.label}
                </span>
              </div>

              {/* Permanent label (visible on mobile) */}
              <div className="absolute bottom-6 left-6 md:hidden">
                <span className="font-serif text-xl tracking-wider text-cream">
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
