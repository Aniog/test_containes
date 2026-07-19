import { Link } from 'react-router-dom'
import StockImage from '@/components/ui/StockImage'

const categories = [
  { id: 'earrings', label: 'Earrings' },
  { id: 'necklaces', label: 'Necklaces' },
  { id: 'huggies', label: 'Huggies' },
]

export default function CategoryTiles() {
  return (
    <section className="py-16 md:py-24 lg:py-32 bg-ivory">
      <div className="mx-auto px-5 md:px-8 lg:px-12 xl:px-16">
        <div className="text-center mb-10 md:mb-14">
          <p className="text-xs uppercase tracking-[0.2em] text-gold mb-3">
            Shop by Category
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-espresso">
            Find Your Finish
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {categories.map((category) => (
            <Link
              key={category.id}
              to={`/shop?category=${category.id}`}
              className="group relative aspect-[3/4] overflow-hidden bg-cream"
            >
              <StockImage
                id={`category-${category.id}`}
                query={`[category-${category.id}-label]`}
                ratio="3x4"
                width={600}
                alt={category.label}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-espresso/20 group-hover:bg-espresso/40 transition-colors duration-500" />
              <div className="absolute inset-0 flex items-center justify-center">
                <h3
                  id={`category-${category.id}-label`}
                  className="font-serif text-3xl md:text-4xl text-ivory italic relative"
                >
                  {category.label}
                  <span className="block h-px w-0 bg-ivory mx-auto mt-2 transition-all duration-500 group-hover:w-full" />
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
