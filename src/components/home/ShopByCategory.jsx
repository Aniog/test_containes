import { Link } from 'react-router-dom'
import { categories } from '@/data/products'

const categoryDescriptions = {
  Earrings: 'Statement & everyday earrings',
  Necklaces: 'Layered chains & pendants',
  Huggies: 'Close-fit ear essentials',
}

export default function ShopByCategory() {
  return (
    <section className="py-16 md:py-24">
      <div className="max-w-content mx-auto px-5 md:px-8">
        <div className="text-center mb-10 md:mb-14">
          <h2 className="font-serif text-3xl md:text-4xl tracking-[0.05em] text-charcoal">Shop by Category</h2>
          <div className="w-12 h-px bg-gold mx-auto mt-4" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {categories.map((cat) => (
            <Link
              key={cat.id}
              to={`/shop?category=${cat.slug}`}
              className="group relative aspect-[4/3] overflow-hidden"
            >
              <img
                data-strk-img-id={`category-${cat.id}`}
                data-strk-img={`[cat-desc-${cat.id}] [cat-name-${cat.id}]`}
                data-strk-img-ratio="4x3"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={cat.name}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-charcoal/30 group-hover:bg-charcoal/50 transition-colors duration-300" />
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <h3
                  id={`cat-name-${cat.id}`}
                  className="font-serif text-2xl md:text-3xl text-white tracking-[0.15em] uppercase"
                >
                  {cat.name}
                </h3>
                <p
                  id={`cat-desc-${cat.id}`}
                  className="text-white/70 text-xs tracking-[0.1em] uppercase mt-1"
                >
                  {categoryDescriptions[cat.name]}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
