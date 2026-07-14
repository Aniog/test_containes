import { Link } from 'react-router-dom'
import { collectionTiles } from '@/data/products'
import SectionHeader from '@/components/shared/SectionHeader'

export default function CategoryTiles() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-24">
      <SectionHeader
        eyebrow="Shop by Category"
        title="Choose your signature silhouette"
        description="From polished huggies to quietly radiant necklaces, discover categories designed for everyday refinement."
      />

      <div className="mt-10 grid gap-5 md:grid-cols-3">
        {collectionTiles.map((tile) => {
          const titleId = `category-${tile.name.toLowerCase()}-title`
          const descId = `category-${tile.name.toLowerCase()}-desc`
          const imageId = `category-${tile.name.toLowerCase()}-image`

          return (
            <Link
              key={tile.name}
              to={`/shop?category=${tile.name}`}
              className="group relative overflow-hidden rounded-[2rem] bg-stone-950"
            >
              <img
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={tile.name}
                className="aspect-[4/5] w-full object-cover transition duration-700 group-hover:scale-[1.03]"
                data-strk-img-id={imageId}
                data-strk-img={`[${descId}] [${titleId}]`}
                data-strk-img-ratio="3x4"
                data-strk-img-width="900"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950/85 via-stone-950/20 to-transparent transition duration-500 group-hover:from-stone-950/90" />
              <div className="absolute inset-x-0 bottom-0 p-6 md:p-7">
                <p
                  id={titleId}
                  className="font-serif text-4xl text-stone-50 transition group-hover:-translate-y-1"
                >
                  {tile.name}
                </p>
                <p
                  id={descId}
                  className="mt-3 max-w-xs text-sm leading-6 text-stone-200 opacity-0 transition duration-300 group-hover:opacity-100"
                >
                  {tile.description}
                </p>
              </div>
            </Link>
          )
        })}
      </div>
    </section>
  )
}
