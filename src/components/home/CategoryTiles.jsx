import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { categories } from '@/data/products'
import { useStrkImages } from '@/hooks/useStrkImages'

export default function CategoryTiles() {
  const sectionRef = useRef(null)
  useStrkImages(sectionRef, [])

  return (
    <section ref={sectionRef} className="bg-velmora-cream px-4 py-16 text-velmora-espresso sm:px-6 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 text-center">
          <p className="text-xs font-bold uppercase tracking-[0.36em] text-velmora-goldDark">
            Shop by category
          </p>
          <h2 className="mt-3 font-serif text-5xl font-semibold md:text-6xl">
            Choose your glow
          </h2>
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          {categories.map((category) => {
            const titleId = `category-${category.id}-title`
            const captionId = `category-${category.id}-caption`
            return (
              <Link
                key={category.id}
                to={`/shop?category=${category.name}`}
                className="group relative aspect-[4/5] overflow-hidden bg-velmora-stone text-velmora-cream shadow-card"
              >
                <div
                  className="absolute inset-0 bg-cover bg-center transition duration-700 group-hover:scale-105"
                  data-strk-bg-id={`category-${category.id}-bg-6d34fa`}
                  data-strk-bg={`[${captionId}] [${titleId}]`}
                  data-strk-bg-ratio="3x4"
                  data-strk-bg-width="900"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-velmora-espresso/80 via-velmora-espresso/20 to-transparent transition group-hover:from-velmora-espresso/70" />
                <div className="absolute inset-x-0 bottom-0 p-7 transition duration-300 md:translate-y-10 md:group-hover:translate-y-0">
                  <h3 id={titleId} className="font-serif text-5xl font-semibold">
                    {category.name}
                  </h3>
                  <p id={captionId} className="mt-3 max-w-xs text-sm leading-7 text-velmora-stone opacity-100 md:opacity-0 md:transition md:duration-300 md:group-hover:opacity-100">
                    {category.caption}
                  </p>
                </div>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}
