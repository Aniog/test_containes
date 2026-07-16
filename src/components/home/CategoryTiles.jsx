import { Link } from 'react-router-dom'
import SectionHeading from '@/components/common/SectionHeading'
import { collections } from '@/data/storefront'

const CategoryTiles = () => {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 md:px-6 lg:px-8 lg:py-24">
      <SectionHeading
        eyebrow="Categories"
        title="Shop by silhouette"
        titleId="home-categories-title"
        description="From polished huggies to layerable necklaces, discover the forms that define the Velmora wardrobe."
        descriptionId="home-categories-desc"
      />

      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {collections.map((collection) => (
          <Link
            key={collection.id}
            to={`/shop?category=${collection.name}`}
            className="group relative overflow-hidden rounded-[2rem] border border-velmora-line/80 bg-velmora-panel shadow-velmora-soft"
          >
            <img
              alt={collection.name}
              className="aspect-[4/5] w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
              data-strk-img-id={collection.imageId}
              data-strk-img={`[${collection.descId}] [${collection.titleId}] [home-categories-desc] [home-categories-title]`}
              data-strk-img-ratio="4x3"
              data-strk-img-width="900"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(23,20,19,0.12)_20%,rgba(23,20,19,0.8)_100%)]" />
            <div className="absolute inset-x-0 bottom-0 p-6 text-velmora-ivory">
              <p id={collection.titleId} className="font-serif text-4xl text-velmora-ivory transition-transform duration-300 group-hover:-translate-y-1">
                {collection.name}
              </p>
              <p id={collection.descId} className="mt-2 max-w-xs text-sm leading-7 text-velmora-mist opacity-0 transition-all duration-300 group-hover:opacity-100">
                {collection.description}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}

export default CategoryTiles
