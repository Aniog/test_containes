import { Link } from 'react-router-dom'
import SectionHeading from '../ui/SectionHeading'

const CategoryTiles = ({ categories }) => {
  return (
    <section className="bg-ivory py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        <SectionHeading
          eyebrow="Shop by category"
          title="Designed for gifting, layering, and everyday wear"
          description="Three entry points to build a softly polished jewelry wardrobe."
        />
        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {categories.map((category) => {
            const titleId = `category-${category.slug}-title`
            const blurbId = `category-${category.slug}-blurb`
            const sceneId = `category-${category.slug}-scene`

            return (
              <Link
                key={category.slug}
                to={`/shop?category=${encodeURIComponent(category.name)}`}
                className="group relative overflow-hidden rounded-[2rem] bg-mist shadow-card"
              >
                <img
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={category.name}
                  data-strk-img-id={`category-${category.slug}-image-7c1f`}
                  data-strk-img={`[${sceneId}] [${blurbId}] [${titleId}]`}
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="900"
                  className="aspect-[4/5] h-full w-full object-cover transition duration-700 group-hover:scale-[1.04]"
                />
                <p id={sceneId} className="sr-only">
                  {category.scene}
                </p>
                <div className="absolute inset-0 bg-gradient-to-t from-noir via-noir/30 to-transparent opacity-90 transition group-hover:opacity-100" />
                <div className="absolute inset-x-0 bottom-0 p-6 text-ivory">
                  <p id={titleId} className="font-display text-4xl text-ivory">
                    {category.name}
                  </p>
                  <p id={blurbId} className="mt-2 max-w-xs text-sm leading-6 text-ivory/72 opacity-0 transition duration-300 group-hover:opacity-100">
                    {category.blurb}
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
