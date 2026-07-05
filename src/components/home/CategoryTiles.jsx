import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { homeCategories } from '../../lib/store-data.js'
import SectionHeading from '../shared/SectionHeading.jsx'

function CategoryTiles() {
  return (
    <section className="page-shell py-16 sm:py-20">
      <SectionHeading
        eyebrow="Shop by category"
        title="Choose your signature finish"
        description="Three easy entry points into the Velmora wardrobe, each designed to feel giftable and wearable beyond one season."
      />
      <div className="mt-10 grid gap-6 lg:grid-cols-3">
        {homeCategories.map((category) => {
          const slug = category.slug.toLowerCase()
          const titleId = `category-${slug}-title`
          const descId = `category-${slug}-desc`
          const visualId = `category-${slug}-visual`

          return (
            <Link key={category.slug} to={`/shop?category=${encodeURIComponent(category.slug)}`} className="group relative overflow-hidden rounded-panel bg-velmora-espresso shadow-soft">
              <span id={visualId} className="sr-only">{category.visual}</span>
              <div className="aspect-[5/6] overflow-hidden">
                <img
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={category.name}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                  data-strk-img-id={`category-${slug}-image`}
                  data-strk-img={`[${visualId}] [${descId}] [${titleId}]`}
                  data-strk-img-ratio="3x4"
                  data-strk-img-width="900"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-velmora-espresso via-velmora-espresso/20 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-6 text-white">
                <div>
                  <p id={descId} className="text-sm text-velmora-mist">{category.description}</p>
                  <h3 id={titleId} className="mt-2 font-display text-4xl text-white">{category.name}</h3>
                </div>
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/20 transition group-hover:border-white/50">
                  <ArrowUpRight className="h-4 w-4" />
                </span>
              </div>
            </Link>
          )
        })}
      </div>
    </section>
  )
}

export default CategoryTiles
