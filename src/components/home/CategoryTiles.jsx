import { Link } from 'react-router-dom'
import SectionHeading from '@/components/store/SectionHeading'
import { categories } from '@/data/storeData.js'

const CategoryTiles = () => {
  return (
    <section className="page-shell py-20 sm:py-24">
      <SectionHeading
        eyebrow="Shop by category"
        title="Curated around the way you wear it"
        description="Choose sculptural earrings, luminous necklaces, or close-fitting huggies designed to stack with ease."
        align="center"
      />

      <div className="mt-10 grid gap-5 md:grid-cols-3">
        {categories.map((category) => {
          const titleId = `category-${category.id}-title`
          const descId = `category-${category.id}-desc`
          return (
            <Link
              key={category.id}
              to={`/shop?category=${encodeURIComponent(category.name)}`}
              className="group relative overflow-hidden rounded-[30px] bg-velmora-noir shadow-velmora"
            >
              <img
                alt={category.name}
                className="aspect-[3/4] w-full object-cover transition duration-700 group-hover:scale-105"
                data-strk-img-id={category.imageId}
                data-strk-img={`[${descId}] [${titleId}]`}
                data-strk-img-ratio="3x4"
                data-strk-img-width="900"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-velmora-noir via-velmora-noir/35 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-6 text-velmora-ivory sm:p-7">
                <p id={titleId} className="font-display text-4xl leading-none text-velmora-ivory">
                  {category.name}
                </p>
                <p
                  id={descId}
                  className="mt-3 max-w-xs text-sm leading-6 text-velmora-ivory/75 opacity-90 transition duration-500 group-hover:opacity-100"
                >
                  {category.description}
                </p>
                <span className="mt-5 inline-block text-xs font-semibold uppercase tracking-[0.3em] text-velmora-gold">
                  Shop now
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
