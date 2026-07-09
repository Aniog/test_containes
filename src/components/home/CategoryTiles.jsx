import { Link } from 'react-router-dom'
import useImageLoader from '@/hooks/useImageLoader'

const categories = [
  { id: 'earrings', name: 'Earrings', query: 'gold earrings statement drop elegant' },
  { id: 'necklaces', name: 'Necklaces', query: 'gold necklace pendant layered fine jewelry' },
  { id: 'huggies', name: 'Huggies', query: 'gold huggie earrings chunky dome minimal' },
]

export default function CategoryTiles() {
  const containerRef = useImageLoader([])

  return (
    <section ref={containerRef} className="bg-cream-100 py-16 md:py-24">
      <div className="mx-auto max-w-[1440px] px-5 md:px-10">
        <div className="mb-10 text-center md:mb-14">
          <p className="label-uppercase mb-3 text-gold-600">Shop by Category</p>
          <h2 className="heading-display text-3xl md:text-5xl">Find Your Piece</h2>
        </div>

        <div className="grid gap-4 md:grid-cols-3 md:gap-6">
          {categories.map((category) => (
            <Link
              key={category.id}
              to={`/shop?category=${category.name}`}
              className="group relative aspect-[4/5] overflow-hidden bg-charcoal-900"
            >
              <img
                data-strk-img-id={`category-${category.id}`}
                data-strk-img={`[category-${category.id}-title] ${category.query}`}
                data-strk-img-ratio="4x5"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={category.name}
                className="img-zoom h-full w-full object-cover opacity-85"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-charcoal-900/20 transition-colors group-hover:bg-charcoal-900/10" />
              <div className="absolute inset-0 flex items-center justify-center">
                <span
                  id={`category-${category.id}-title`}
                  className="border border-cream-100/60 bg-cream-100/10 px-6 py-3 text-sm uppercase tracking-[0.2em] text-cream-100 backdrop-blur-sm transition-all group-hover:bg-cream-100/20"
                >
                  {category.name}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
