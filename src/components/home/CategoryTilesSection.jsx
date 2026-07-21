import { Link } from 'react-router-dom'
import { useImageLoader } from '@/hooks/useImageLoader'
import { ResponsiveBackground } from '@/components/ui/ResponsiveImage'

const categories = [
  { id: 'earrings', label: 'Earrings', query: 'gold earrings flatlay dark background editorial jewelry', href: '/shop?category=Earrings' },
  { id: 'necklaces', label: 'Necklaces', query: 'gold necklaces layered on model editorial jewelry', href: '/shop?category=Necklaces' },
  { id: 'huggies', label: 'Huggies', query: 'gold huggie hoop earrings close up jewelry photography', href: '/shop?category=Huggies' },
]

export function CategoryTilesSection() {
  const containerRef = useImageLoader([])

  return (
    <section ref={containerRef} className="bg-cream py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 flex flex-col items-center text-center sm:mb-14">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-gold">Shop by Category</p>
          <h2 className="mt-3 font-serif text-3xl tracking-wide text-espresso sm:text-4xl md:text-5xl">
            Find Your Finish
          </h2>
        </div>

        <div className="grid gap-4 sm:grid-cols-3">
          {categories.map((category) => (
            <Link
              key={category.id}
              to={category.href}
              className="group relative aspect-[4/5] overflow-hidden bg-cream-dark sm:aspect-[3/4]"
            >
              <ResponsiveBackground
                bgId={`category-${category.id}`}
                query={category.query}
                ratio="3x4"
                width={800}
                className="absolute inset-0 h-full w-full transition-transform duration-700 ease-lux group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-espresso/20 transition-colors duration-300 group-hover:bg-espresso/35" />
              <div className="absolute inset-0 flex items-center justify-center">
                <h3 className="border-b border-transparent pb-1 font-serif text-2xl tracking-wide text-cream-light transition-all duration-300 group-hover:border-cream-light sm:text-3xl">
                  {category.label}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
