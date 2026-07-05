import { Link } from 'react-router-dom'
import SectionHeading from './SectionHeading'
import { categories } from '@/data/storeData'
import { useStockImages } from '@/hooks/useStockImages'

export default function CategoryTilesSection() {
  const containerRef = useStockImages([])

  return (
    <section ref={containerRef} className="bg-velmora-ivory py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <SectionHeading
          eyebrow="Shop by Category"
          title="Find the silhouette that suits your rhythm."
          description="From softly sculpted huggies to delicate necklaces, each category is designed to layer seamlessly into your day."
        />
        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {categories.map((category) => {
            const titleId = `category-${category.slug}-title`
            const descId = `category-${category.slug}-desc`

            return (
              <Link
                key={category.slug}
                to={`/shop?category=${category.slug}`}
                className="group relative overflow-hidden rounded-[2.25rem] bg-velmora-panel shadow-soft"
              >
                <img
                  data-strk-img-id={`velmora-category-${category.slug}-tile`}
                  data-strk-img={`[${descId}] [${titleId}]`}
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="1000"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={category.name}
                  className="aspect-[4/5] w-full object-cover transition duration-500 group-hover:scale-[1.03]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-velmora-ink/70 via-transparent to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-6 text-velmora-soft">
                  <p className="text-xs uppercase tracking-velmora text-velmora-soft/75">
                    {category.eyebrow}
                  </p>
                  <h3 id={titleId} className="mt-2 font-display text-3xl text-velmora-soft">
                    {category.name}
                  </h3>
                  <p
                    id={descId}
                    className="mt-3 max-w-xs text-sm leading-6 text-velmora-soft/85 opacity-0 transition duration-300 group-hover:opacity-100"
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
