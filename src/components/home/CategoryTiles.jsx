import { Link } from 'react-router-dom'
import { CATEGORIES } from '@/data/products'
import { useStrkImages } from '@/hooks/useStrkImages'

export default function CategoryTiles() {
  const containerRef = useStrkImages()

  return (
    <section ref={containerRef} className="py-16 md:py-24 lg:py-32 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 md:mb-14">
          <p className="text-xs font-sans uppercase tracking-ui text-gold mb-2">
            Shop by Category
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-medium text-espresso">
            Find Your Favorite
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {CATEGORIES.map((category) => (
            <Link
              key={category.id}
              to={`/shop?category=${encodeURIComponent(category.name)}`}
              className="group relative aspect-[4/5] md:aspect-[3/4] overflow-hidden bg-charcoal"
            >
              <div
                data-strk-bg-id={category.imgId}
                data-strk-bg={`[category-title-${category.id}]`}
                data-strk-bg-ratio="3x4"
                data-strk-bg-width="700"
                className="absolute inset-0 bg-charcoal transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-espresso/20 group-hover:bg-espresso/30 transition-colors duration-500" />
              <div className="absolute inset-0 flex items-center justify-center">
                <h3
                  id={`category-title-${category.id}`}
                  className="text-2xl md:text-3xl font-serif font-medium text-cream tracking-wide border-b border-transparent group-hover:border-cream pb-1 transition-all duration-300"
                >
                  {category.name}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
