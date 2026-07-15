import { Link } from 'react-router-dom'
import { categoryTiles } from '@/data/store'
import SectionHeading from '@/components/shared/SectionHeading'

const CategoryTiles = () => (
  <section className="bg-stone-50 py-16 sm:py-20 lg:py-24">
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <SectionHeading
        eyebrow="Shop by category"
        title="Curated essentials for every kind of jewelry wardrobe."
      />

      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {categoryTiles.map((tile) => {
          const titleId = `category-${tile.id}-title`
          const eyebrowId = `category-${tile.id}-eyebrow`

          return (
            <Link
              key={tile.id}
              className="group relative overflow-hidden rounded-[2rem] bg-stone-200"
              to={tile.href}
            >
              <img
                alt={tile.label}
                className="aspect-[4/5] w-full object-cover transition duration-500 ease-out group-hover:scale-105"
                data-strk-img-id={tile.imageId}
                data-strk-img={`[${eyebrowId}] [${titleId}]`}
                data-strk-img-ratio="3x4"
                data-strk-img-width="900"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/35 to-transparent transition duration-300 group-hover:from-stone-950/85" />
              <div className="absolute inset-x-0 bottom-0 flex items-end justify-between px-5 pb-5 text-stone-50 sm:px-7 sm:pb-7">
                <div>
                  <p className="text-[11px] uppercase tracking-[0.34em] text-amber-200" id={eyebrowId}>
                    {tile.eyebrow}
                  </p>
                  <h3
                    className="mt-2 font-['Cormorant_Garamond'] text-3xl text-stone-50"
                    id={titleId}
                  >
                    {tile.label}
                  </h3>
                </div>
                <span className="translate-y-2 text-xs uppercase tracking-[0.3em] opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                  Shop now
                </span>
              </div>
            </Link>
          )
        })}
      </div>
    </div>
  </section>
)

export default CategoryTiles
