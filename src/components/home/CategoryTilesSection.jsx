import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { categoryTiles } from '@/data/catalog'
import { IMAGE_PLACEHOLDER } from '@/lib/placeholders'
import SectionHeading from '@/components/ui/SectionHeading'

const CategoryTilesSection = () => {
  return (
    <section id="collections" className="bg-stone-50 py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Shop by category"
          title="Three ways to build your signature edit"
          description="From sculptural earrings to gift-worthy sets, each category is designed with an editorial, wearable point of view."
        />

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {categoryTiles.map((tile) => {
            const titleId = `${tile.id}-title`
            const descriptionId = `${tile.id}-description`

            return (
              <Link
                key={tile.id}
                to={tile.href}
                className="group relative overflow-hidden rounded-[32px] border border-stone-200 bg-white shadow-[0_18px_50px_rgba(28,25,23,0.08)]"
              >
                <img
                  alt={tile.name}
                  className="aspect-[4/5] w-full object-cover transition duration-500 group-hover:scale-[1.04]"
                  data-strk-img-id={`${tile.id}-tile-4b2e`}
                  data-strk-img={`[${descriptionId}] [${titleId}]`}
                  data-strk-img-ratio="3x4"
                  data-strk-img-width="900"
                  src={IMAGE_PLACEHOLDER}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/25 to-transparent opacity-90 transition duration-300 group-hover:opacity-100" />
                <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-6 text-stone-50">
                  <div>
                    <h3 id={titleId} className="font-serif text-4xl leading-none">
                      {tile.name}
                    </h3>
                    <p id={descriptionId} className="mt-3 max-w-xs text-sm leading-6 text-stone-100 opacity-0 transition duration-300 group-hover:opacity-100">
                      {tile.description}
                    </p>
                  </div>
                  <span className="inline-flex rounded-full border border-white/30 bg-white/10 p-3 backdrop-blur">
                    <ArrowUpRight className="h-5 w-5" />
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

export default CategoryTilesSection
