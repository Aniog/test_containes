import { Link } from 'react-router-dom'
import SectionHeading from '@/components/common/SectionHeading'
import StrkBackground from '@/components/common/StrkBackground'
import { categories } from '@/data/products'

export default function CategoryTiles() {
  return (
    <section className="bg-velmora-porcelain py-16 text-velmora-ink md:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Shop by category"
          title="Find Your Signature Shape"
          copy="From sculptural huggies to romantic necklaces, each category is curated for daily radiance."
        />
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {categories.map((category) => (
            <Link
              key={category.id}
              to={`/shop?category=${encodeURIComponent(category.name)}`}
              className="group relative min-h-[360px] overflow-hidden rounded-t-full border border-velmora-line bg-velmora-olive shadow-sm transition duration-500 hover:-translate-y-1 hover:shadow-soft"
            >
              <StrkBackground
                id={category.bgId}
                query={`[${category.descId}] [${category.titleId}]`}
                ratio="3x4"
                width="800"
                className="absolute inset-0 bg-velmora-olive transition duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-velmora-ink/78 via-velmora-ink/10 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-8 text-center">
                <p id={category.titleId} className="font-serif text-5xl font-medium text-velmora-ivory">
                  {category.name}
                </p>
                <p id={category.descId} className="mt-3 translate-y-2 text-sm leading-6 text-velmora-champagne opacity-0 transition duration-500 group-hover:translate-y-0 group-hover:opacity-100">
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
