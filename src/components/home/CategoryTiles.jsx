import { Link } from 'react-router-dom'
import SectionHeading from '@/components/shared/SectionHeading'
import { categories } from '@/data/products'

export default function CategoryTiles() {
  return (
    <section className="bg-velmora-mist px-5 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Shop by category"
          title="Choose the silhouette that suits the moment."
          description="Discover polished essentials for daily wear, occasion styling, and beautifully considered gifting."
        />

        <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {categories.map((category) => (
            <Link
              key={category.id}
              to={`/shop?category=${encodeURIComponent(category.label)}`}
              className="group relative block overflow-hidden rounded-[2rem] border border-velmora-line bg-velmora-espresso shadow-velmora-sm"
            >
              <img
                alt={category.label}
                className="h-[420px] w-full object-cover transition duration-700 group-hover:scale-[1.03]"
                data-strk-img-id={category.slotId}
                data-strk-img={`[category-${category.id}-desc] [category-${category.id}-title]`}
                data-strk-img-ratio="4x3"
                data-strk-img-width="1000"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(26,22,19,0.08)_0%,rgba(26,22,19,0.72)_100%)]" />
              <div className="absolute inset-x-0 bottom-0 p-6 text-velmora-ivory">
                <p
                  id={`category-${category.id}-title`}
                  className="font-serif text-4xl text-velmora-ivory"
                >
                  {category.label}
                </p>
                <p
                  id={`category-${category.id}-desc`}
                  className="mt-3 max-w-xs text-sm leading-7 text-velmora-ivory/78 opacity-80 transition duration-300 group-hover:opacity-100"
                >
                  {category.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
