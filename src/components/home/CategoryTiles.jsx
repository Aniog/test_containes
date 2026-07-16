import { Link } from 'react-router-dom'
import { categories } from '@/lib/products'
import SectionHeading from '@/components/shared/SectionHeading'

export default function CategoryTiles() {
  return (
    <section id="collections" className="bg-velmora-mist/45 px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Collections"
          title="Shop by category"
          description="From polished daily huggies to giftable necklace moments, each category is designed for modern collecting."
        />

        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {categories.map((category) => (
            <Link
              key={category.id}
              to={`/shop?category=${category.name}`}
              className="group relative overflow-hidden rounded-[2rem] bg-velmora-ink text-velmora-ivory shadow-soft"
            >
              <div className="aspect-[4/5]">
                <img
                  alt={category.name}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.03]"
                  data-strk-img-id={category.imageId}
                  data-strk-img={`[${category.descId}] [${category.titleId}] [collections-title]`}
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="900"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-velmora-ink via-transparent to-transparent opacity-90" />
              <div className="absolute inset-x-0 bottom-0 flex items-end justify-between px-6 py-6">
                <div>
                  <h3 id={category.titleId} className="font-heading text-3xl text-velmora-ivory">
                    {category.name}
                  </h3>
                  <p id={category.descId} className="mt-2 text-sm text-velmora-ivory/75">
                    {category.description}
                  </p>
                </div>
                <span className="translate-y-2 text-xs uppercase tracking-[0.26em] text-velmora-gold opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                  Explore
                </span>
              </div>
            </Link>
          ))}
        </div>
        <h2 id="collections-title" className="sr-only">
          Velmora Collections
        </h2>
      </div>
    </section>
  )
}
