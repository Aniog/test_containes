import { Link } from 'react-router-dom'
import SectionHeading from '@/components/ui/SectionHeading.jsx'

export default function CategoryTiles({ categories }) {
  return (
    <section className="bg-velmora-ivory px-5 py-20 sm:px-6 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-7xl space-y-12">
        <SectionHeading
          eyebrow="Collections"
          title="Shop by category"
          description="Built for layering, gifting, and quiet confidence — explore pieces by how you wear them."
        />
        <div className="grid gap-6 lg:grid-cols-3">
          {categories.map((category) => {
            const titleId = `category-${category.id}-title`
            const descId = `category-${category.id}-desc`

            return (
              <Link
                className="group relative isolate min-h-[26rem] overflow-hidden rounded-[2rem] bg-velmora-obsidian shadow-velmora"
                key={category.id}
                to={`/shop?category=${category.label}`}
              >
                <div
                  className="absolute inset-0 transition duration-500 group-hover:scale-105"
                  data-strk-bg={`[${descId}] [${titleId}]`}
                  data-strk-bg-id={category.imageId}
                  data-strk-bg-ratio="3x4"
                  data-strk-bg-width="1000"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-velmora-obsidian via-velmora-obsidian/10 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-8">
                  <p id={descId} className="text-sm leading-7 text-velmora-ivory/75">
                    {category.description}
                  </p>
                  <h3 id={titleId} className="mt-3 font-serif text-4xl text-velmora-ivory">
                    {category.label}
                  </h3>
                  <span className="mt-5 inline-block border-b border-velmora-gold pb-2 text-xs uppercase tracking-eyebrow text-velmora-gold">
                    Explore
                  </span>
                </div>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}
