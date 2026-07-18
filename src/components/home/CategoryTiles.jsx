import { Link } from 'react-router-dom'
import { categoryTiles } from '@/data/products.js'
import SectionHeading from '@/components/common/SectionHeading.jsx'

export default function CategoryTiles() {
  return (
    <section className="px-5 py-16 md:px-8 md:py-24">
      <div className="mx-auto max-w-7xl space-y-10">
        <SectionHeading
          eyebrow="Shop by Category"
          title="A curated way to browse"
          description="Discover soft sculptural earrings, luminous necklaces, and comfortable huggies designed to layer beautifully."
        />
        <div className="grid gap-6 md:grid-cols-3">
          {categoryTiles.map((category) => (
            <Link
              key={category.id}
              to={`/shop?category=${encodeURIComponent(category.name)}`}
              className="group relative overflow-hidden rounded-[2rem] border border-[var(--color-line-dark)]"
            >
              <div className="aspect-[4/5] overflow-hidden bg-[var(--color-surface)]">
                <img
                  alt={category.name}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.04]"
                  data-strk-img-id={`category-${category.id}`}
                  data-strk-img={`[category-${category.id}-desc] [category-${category.id}-title]`}
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="900"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                />
              </div>
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(20,14,14,0.1)_15%,rgba(20,14,14,0.75)_100%)] p-6">
                <div className="flex h-full flex-col justify-end">
                  <p
                    id={`category-${category.id}-title`}
                    className="font-serif text-3xl text-[var(--color-text-dark)]"
                  >
                    {category.name}
                  </p>
                  <p
                    id={`category-${category.id}-desc`}
                    className="mt-2 max-w-xs text-sm leading-7 text-[var(--color-muted-dark)] opacity-0 transition group-hover:opacity-100"
                  >
                    {category.description}
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
