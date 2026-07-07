import { Link } from 'react-router-dom'
import { useImageLoader } from '@/hooks/useImageLoader'
import { categories } from '@/data/products'
import { cn } from '@/lib/utils'

export function CategoryTiles() {
  const containerRef = useImageLoader()

  return (
    <section className="py-16 md:py-24 bg-velmora-cream">
      <div className="max-w-[1440px] mx-auto px-5 md:px-8 lg:px-12">
        <div className="text-center mb-12 md:mb-16">
          <p className="font-sans text-xs tracking-[0.25em] uppercase text-velmora-gold-dark mb-3">Shop by Category</p>
          <h2 className="font-serif text-4xl md:text-5xl text-velmora-dark">Find Your Finish</h2>
        </div>

        <div ref={containerRef} className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {categories.map((category, index) => (
            <Link
              key={category.id}
              to={`/shop?category=${category.id}`}
              className={cn(
                'group relative aspect-[3/4] md:aspect-[4/5] overflow-hidden bg-velmora-warm',
                index === 0 ? 'md:aspect-[4/5]' : ''
              )}
            >
              <img
                data-strk-img-id={`category-${category.id}`}
                data-strk-img={category.query}
                data-strk-img-ratio="3x4"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={category.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-velmora-dark/20 group-hover:bg-velmora-dark/35 transition-colors duration-400" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <h3
                    id={`category-${category.id}-name`}
                    className="font-serif text-3xl md:text-4xl text-velmora-cream mb-3"
                  >
                    {category.name}
                  </h3>
                  <span className="inline-block font-sans text-xs tracking-[0.2em] uppercase text-velmora-cream border-b border-velmora-cream pb-1 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-400">
                    Shop Now
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
