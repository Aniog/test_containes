import { Link } from 'react-router-dom'
import StrkImage from '@/components/common/StrkImage.jsx'
import SectionHeader from '@/components/common/SectionHeader.jsx'

export default function CategoryTiles({ categories }) {
  return (
    <section id="collections" className="bg-velmora-pearl px-5 py-20 text-velmora-ink md:px-8 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Shop by category"
          title="Choose your golden signature"
          body="From sculptural huggies to delicate necklaces, each category is edited for easy daily wear."
        />
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {categories.map((category) => (
            <Link
              key={category.id}
              to={`/shop?category=${encodeURIComponent(category.name)}`}
              className="group relative aspect-[4/5] overflow-hidden bg-velmora-sand text-velmora-ivory shadow-soft"
            >
              <StrkImage
                id={category.imgId}
                query={`[${category.descId}] [${category.titleId}] [category-section-title]`}
                ratio="3x4"
                width="800"
                alt={category.name}
                className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-velmora-ink/85 via-velmora-ink/15 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-6 transition duration-500 md:translate-y-6 md:group-hover:translate-y-0">
                <h3 id={category.titleId} className="font-serif text-4xl font-medium text-velmora-ivory">
                  {category.name}
                </h3>
                <p id={category.descId} className="mt-3 text-sm leading-6 text-velmora-sand opacity-100 md:opacity-0 md:transition md:duration-500 md:group-hover:opacity-100">
                  {category.desc}
                </p>
              </div>
            </Link>
          ))}
        </div>
        <p id="category-section-title" className="sr-only">
          Velmora fine jewelry categories earrings necklaces huggies
        </p>
      </div>
    </section>
  )
}
