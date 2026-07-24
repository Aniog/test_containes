import { Link } from 'react-router-dom'
import { categories } from '@/data/storeData'
import SectionHeading from './SectionHeading'

const CategoryTiles = () => {
  return (
    <section className="velmora-shell space-y-8 py-16 sm:py-20">
      <SectionHeading
        eyebrow="Shop by category"
        title="Curated for how you wear jewelry now"
        description="Explore sculptural silhouettes designed to move from giftable favorites to everyday signatures."
      />
      <div className="grid gap-6 lg:grid-cols-3">
        {categories.map((category) => {
          const titleId = `category-${category.slug}-title`
          const descId = `category-${category.slug}-desc`

          return (
            <Link
              key={category.slug}
              to={`/shop?category=${category.slug}`}
              className="group relative overflow-hidden rounded-[2rem] border border-velmora-sand bg-velmora-card shadow-soft"
            >
              <img
                src=""
                alt={category.name}
                className="aspect-[4/5] w-full object-cover transition duration-500 group-hover:scale-105"
                data-strk-img-id={`category-${category.slug}-image`}
                data-strk-img={`[${descId}] [${titleId}]`}
                data-strk-img-ratio="4x3"
                data-strk-img-width="900"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-velmora-cocoa via-velmora-cocoa/10 to-transparent opacity-80 transition duration-300 group-hover:opacity-95" />
              <div className="absolute inset-x-0 bottom-0 p-6 text-velmora-ivory">
                <h3 id={titleId} className="font-display text-4xl text-velmora-ivory">
                  {category.name}
                </h3>
                <p id={descId} className="mt-2 max-w-xs text-sm leading-6 text-velmora-sand">
                  {category.blurb}
                </p>
                <span className="mt-4 inline-flex text-xs uppercase tracking-widest text-velmora-blush transition duration-300 group-hover:translate-x-1">
                  Explore {category.name}
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
