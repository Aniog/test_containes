import { Link } from 'react-router-dom'
import SectionHeader from '@/components/storefront/SectionHeader'
import { collectionCategories } from '@/data/products'

export default function CategoryTiles() {
  return (
    <section className="bg-velmora-sand/75 px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-7xl space-y-10">
        <SectionHeader
          eyebrow="Browse"
          title="Shop by Category"
          description="Explore everyday earrings, layering necklaces, and polished huggies designed to move with you."
          align="center"
        />
        <div className="grid gap-6 md:grid-cols-3">
          {collectionCategories.map((category) => (
            <Link
              key={category.id}
              to={`/shop?category=${category.name}`}
              className="group relative overflow-hidden rounded-[2rem] bg-velmora-noir shadow-soft"
            >
              <img
                alt={category.name}
                className="aspect-[4/5] w-full object-cover transition duration-500 ease-velvet group-hover:scale-105"
                data-strk-img-id={category.imageId}
                data-strk-img={`[${category.descId}] [${category.titleId}]`}
                data-strk-img-ratio="4x3"
                data-strk-img-width="900"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              />
              <div className="absolute inset-0 flex items-end bg-gradient-to-t from-velmora-ink/75 via-velmora-ink/20 to-transparent p-6">
                <div className="translate-y-3 space-y-2 text-velmora-ivory transition duration-300 ease-velvet group-hover:translate-y-0">
                  <h3 id={category.titleId} className="font-serif text-4xl">
                    {category.name}
                  </h3>
                  <p id={category.descId} className="text-sm leading-7 text-velmora-ivory/80 opacity-0 transition duration-300 group-hover:opacity-100">
                    {category.blurb}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
