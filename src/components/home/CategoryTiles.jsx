import { Link } from 'react-router-dom'
import { categories } from '@/data/products'
import SectionHeader from '@/components/common/SectionHeader'

const CategoryTiles = () => {
  return (
    <section className="bg-stone-100 py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Shop by category"
          title="A refined edit for every kind of glow"
          description="Curated silhouettes designed to layer with ease, gift beautifully, and slip into the everyday without effort."
        />

        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {categories.map((category) => {
            const titleId = `category-${category.id}-title`
            const descId = `category-${category.id}-desc`

            return (
              <Link
                key={category.id}
                to={`/shop?category=${category.label}`}
                className="group relative overflow-hidden rounded-[2rem] border border-stone-200 bg-stone-200"
              >
                <div className="aspect-[4/5] overflow-hidden">
                  <img
                    alt={category.label}
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                    data-strk-img-id={`category-card-${category.id}`}
                    data-strk-img={`[${descId}] [${titleId}]`}
                    data-strk-img-ratio="4x3"
                    data-strk-img-width="900"
                    loading="lazy"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/10 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-6">
                  <h3 id={titleId} className="font-display text-4xl text-stone-50">
                    {category.label}
                  </h3>
                  <p
                    id={descId}
                    className="mt-3 max-w-xs text-sm leading-6 text-stone-200 opacity-0 transition duration-300 group-hover:opacity-100"
                  >
                    {category.description}
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

export default CategoryTiles
