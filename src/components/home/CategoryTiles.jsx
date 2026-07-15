import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { useStrkImages } from '@/hooks/useStrkImages'

const categories = [
  { id: 'earrings', label: 'Earrings' },
  { id: 'necklaces', label: 'Necklaces' },
  { id: 'huggies', label: 'Huggies' },
]

export function CategoryTiles() {
  const containerRef = useRef(null)
  useStrkImages(containerRef)

  return (
    <section ref={containerRef} className="py-16 md:py-24">
      <div className="container-vel">
        <h2 id="category-section-title" className="heading-serif mb-10 text-center text-3xl md:text-4xl">
          Shop by Category
        </h2>

        <div className="grid gap-4 md:grid-cols-3 md:gap-6">
          {categories.map((cat) => {
            const labelId = `category-label-${cat.id}`
            return (
              <Link
                key={cat.id}
                to={`/shop?category=${cat.id}`}
                className="group relative aspect-[3/4] overflow-hidden bg-vel-base"
              >
                <div
                  data-strk-bg-id={`category-bg-${cat.id}`}
                  data-strk-bg={`[${labelId}] [category-section-title]`}
                  data-strk-bg-ratio="3x4"
                  data-strk-bg-width="800"
                  className="absolute inset-0 transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-vel-base/20 transition-colors duration-300 group-hover:bg-vel-base/30" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span
                    id={labelId}
                    className="border border-white/60 bg-white/90 px-8 py-3 font-serif text-lg uppercase tracking-widest text-vel-base opacity-100 transition-all duration-300 md:opacity-0 md:group-hover:opacity-100"
                  >
                    {cat.label}
                  </span>
                </div>
                <span className="sr-only">{cat.label}</span>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}
