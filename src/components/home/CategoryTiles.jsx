import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import SectionHeading from '@/components/shared/SectionHeading'

function CategoryTiles({ categories }) {
  return (
    <section className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-24 lg:px-10">
      <div className="space-y-10">
        <SectionHeading
          eyebrow="Shop by category"
          title="Discover your signature silhouette"
          description="From softly sculpted huggies to delicate necklaces, each category is designed to layer elegantly and wear with ease."
        />

        <div className="grid gap-5 md:grid-cols-3">
          {categories.map((category) => {
            const titleId = `category-${category.id}-title`
            const descId = `category-${category.id}-desc`

            return (
              <Link
                key={category.id}
                to={`/shop?category=${encodeURIComponent(category.name)}`}
                className="group relative overflow-hidden rounded-luxe border border-pearl bg-velvet shadow-card"
              >
                <img
                  alt={category.name}
                  className="h-80 w-full object-cover transition duration-500 ease-premium group-hover:scale-105"
                  data-strk-img-id={`category-${category.id}-image`}
                  data-strk-img={`[${descId}] [${titleId}]`}
                  data-strk-img-ratio="3x4"
                  data-strk-img-width="900"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-velvet via-velvet/25 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 px-5 pb-5 text-ivory">
                  <div className="space-y-2">
                    <h3 id={titleId} className="font-serif text-4xl leading-none">{category.name}</h3>
                    <p id={descId} className="max-w-xs text-sm leading-6 text-pearl transition duration-300 ease-premium group-hover:text-ivory">
                      {category.description}
                    </p>
                  </div>
                  <span className="rounded-full border border-ivory/30 p-3 transition duration-300 ease-premium group-hover:bg-ivory group-hover:text-velvet">
                    <ArrowUpRight className="h-4 w-4" />
                  </span>
                </div>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default CategoryTiles
