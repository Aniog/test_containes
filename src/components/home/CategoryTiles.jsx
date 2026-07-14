import { Link } from 'react-router-dom'
import ImageScope from '@/components/common/ImageScope'
import SectionHeader from '@/components/common/SectionHeader'
import { categories } from '@/data/products'

export default function CategoryTiles() {
  return (
    <ImageScope>
      <section className="bg-velmora-pearl px-5 py-20 sm:px-8 lg:px-10 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <SectionHeader idPrefix="category" eyebrow="Shop by category" title="Find your signature glint" />
          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            {categories.map((category) => (
              <Link key={category.name} to={category.href} className="group relative aspect-[4/5] overflow-hidden bg-velmora-champagne text-velmora-pearl">
                <div
                  className="absolute inset-0 transition duration-700 group-hover:scale-105"
                  data-strk-bg-id={`category-${category.name.toLowerCase()}`}
                  data-strk-bg={`[category-${category.name}-desc] [category-${category.name}-title] [category-title]`}
                  data-strk-bg-ratio="4x3"
                  data-strk-bg-width="900"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-velmora-ink/72 via-velmora-ink/18 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-6">
                  <h3 id={`category-${category.name}-title`} className="font-serif text-4xl text-velmora-pearl">{category.name}</h3>
                  <p id={`category-${category.name}-desc`} className="mt-2 translate-y-2 text-sm leading-6 text-velmora-pearl/85 opacity-100 transition duration-300 group-hover:translate-y-0 lg:opacity-0 lg:group-hover:opacity-100">{category.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </ImageScope>
  )
}
