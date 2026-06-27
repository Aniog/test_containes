import { Link } from 'react-router-dom'
import { useImageLoader } from '@/hooks/useImageLoader'

const CATEGORIES = [
  {
    id: 'earrings',
    label: 'Earrings',
    imgId: 'cat-earrings-1a2b3c',
    titleId: 'cat-title-earrings',
  },
  {
    id: 'necklaces',
    label: 'Necklaces',
    imgId: 'cat-necklaces-2b3c4d',
    titleId: 'cat-title-necklaces',
  },
  {
    id: 'huggies',
    label: 'Huggies',
    imgId: 'cat-huggies-3c4d5e',
    titleId: 'cat-title-huggies',
  },
]

export default function CategoryTiles() {
  const containerRef = useImageLoader()

  return (
    <section ref={containerRef} className="py-16 md:py-24 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 md:mb-14">
          <h2 className="font-serif text-3xl md:text-4xl text-espresso">
            Shop by Category
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {CATEGORIES.map((cat) => (
            <Link
              key={cat.id}
              to={`/shop?category=${cat.id}`}
              className="relative aspect-[4/5] overflow-hidden group"
            >
              <img
                data-strk-img-id={cat.imgId}
                data-strk-img={`[${cat.titleId}]`}
                data-strk-img-ratio="4x5"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={cat.label}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-espresso/20 group-hover:bg-espresso/40 transition-colors duration-500" />
              <div className="absolute inset-0 flex items-center justify-center">
                <span
                  id={cat.titleId}
                  className="font-serif text-xl md:text-2xl tracking-[0.14em] uppercase text-cream border-b border-transparent group-hover:border-cream pb-1 transition-all duration-300"
                >
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
