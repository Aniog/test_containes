import { Link } from 'react-router-dom'
import { categories } from './data'

export default function CategoryTiles() {
  return (
    <section className="max-w-7xl mx-auto px-6 lg:px-10 py-20 md:py-28">
      <div className="text-center mb-14">
        <p className="font-sans text-xs tracking-widest uppercase text-velmora-taupe mb-4">
          Explore
        </p>
        <h2 className="font-serif text-3xl md:text-4xl text-velmora-charcoal">
          Shop by Category
        </h2>
        <div className="mx-auto mt-4 w-12 hairline-divider" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {categories.map((cat) => (
          <Link
            key={cat.id}
            to={`/shop?category=${cat.id}`}
            className="group relative aspect-[4/3] bg-velmora-blush overflow-hidden"
          >
            <div
              className="absolute inset-0 transition-transform duration-700 group-hover:scale-105"
              data-strk-img-id={`cat-${cat.id}`}
              data-strk-img={`[cat-${cat.id}-name] ${cat.query}`}
              data-strk-img-ratio="4x3"
              data-strk-img-width="800"
            />
            <div className="absolute inset-0 bg-velmora-softblack/20 group-hover:bg-velmora-softblack/35 transition-colors duration-500" />
            <div className="absolute inset-0 flex items-center justify-center">
              <span
                id={`cat-${cat.id}-name`}
                className="font-serif text-2xl md:text-3xl text-white tracking-wide opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              >
                {cat.name}
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}