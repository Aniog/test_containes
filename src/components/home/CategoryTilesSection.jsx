import { Link } from 'react-router-dom'
import { categoryTiles } from '@/data/products'
import SectionHeading from '@/components/ui/SectionHeading'

function CategoryTilesSection() {
  return (
    <section id="collections" className="bg-stone-50 py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Shop by Category"
          title="Curated around the pieces you wear most."
          description="Explore sculptural earrings, layered necklaces, and polished huggies designed to move seamlessly from day to evening."
        />

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {categoryTiles.map((tile) => {
            const titleId = `category-${tile.name.toLowerCase()}-title`
            const descId = `category-${tile.name.toLowerCase()}-desc`

            return (
              <Link
                key={tile.name}
                to={tile.href}
                className="group relative block overflow-hidden rounded-[2rem] bg-stone-950"
              >
                <div
                  className="h-[420px] w-full transition duration-500 group-hover:scale-105"
                  data-strk-bg-id={tile.imageId}
                  data-strk-bg={`[${descId}] [${titleId}]`}
                  data-strk-bg-ratio="3x4"
                  data-strk-bg-width="900"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/10 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-6 text-stone-50">
                  <p id={titleId} className="font-serif-display text-3xl transition duration-300 group-hover:text-amber-300">
                    {tile.name}
                  </p>
                  <p id={descId} className="mt-3 max-w-xs text-sm leading-6 text-stone-200 opacity-0 transition duration-300 group-hover:opacity-100">
                    {tile.description}
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

export default CategoryTilesSection
