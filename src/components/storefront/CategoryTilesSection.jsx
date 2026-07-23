import { Link } from 'react-router-dom'
import { categories } from '../../data/storefront.js'
import SectionHeading from './SectionHeading.jsx'

export default function CategoryTilesSection() {
  return (
    <section id="collections" className="bg-[var(--velmora-ivory)] py-16 md:py-24">
      <div className="mx-auto max-w-7xl space-y-10 px-5 md:px-8">
        <SectionHeading
          eyebrow="Shop by category"
          id="categories-title"
          title="Curated around how women actually wear jewelry."
          description="From everyday huggies to gift-ready sets, each category is shaped with layering, comfort, and longevity in mind."
        />

        <div className="grid gap-5 md:grid-cols-3">
          {categories.map((category) => {
            const titleId = `${category.id}-tile-title`
            const descId = `${category.id}-tile-desc`

            return (
              <Link key={category.id} to={`/shop?category=${category.name}`} className="group relative overflow-hidden rounded-[2rem] bg-stone-100 shadow-sm">
                <div className="aspect-[4/5] overflow-hidden">
                  <img
                    alt={category.name}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.04]"
                    data-strk-img-id={category.imageId}
                    data-strk-img={`[${descId}] [${titleId}] [categories-title]`}
                    data-strk-img-ratio="3x4"
                    data-strk-img-width="1000"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  />
                </div>
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(47,36,29,0.08),rgba(47,36,29,0.7))]" />
                <div className="absolute inset-0 flex items-end p-6 text-white">
                  <div className="space-y-2 transition duration-300 group-hover:translate-y-[-4px]">
                    <h3 id={titleId} className="text-4xl leading-none">
                      {category.name}
                    </h3>
                    <p id={descId} className="max-w-xs text-sm leading-6 text-white/82">
                      {category.description}
                    </p>
                    <span className="inline-flex pt-2 text-xs uppercase tracking-[0.24em] text-white/78">Explore</span>
                  </div>
                </div>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}
