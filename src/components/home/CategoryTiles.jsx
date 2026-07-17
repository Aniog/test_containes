import { Link } from 'react-router-dom'
import SectionHeading from '@/components/common/SectionHeading'
import { categories } from '@/data/products'

const CategoryTiles = () => {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeading
          eyebrow="Shop by category"
          title="Signature silhouettes for every kind of stack"
          description="A tight edit of categories that keeps the Velmora wardrobe polished and easy to navigate."
        />

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {categories.map((category) => (
            <Link
              key={category.name}
              to={`/shop?category=${encodeURIComponent(category.name)}`}
              className="group relative overflow-hidden rounded-[32px] border border-velmora-line bg-velmora-stone"
            >
              <img
                data-strk-img-id={category.imageId}
                data-strk-img={`[${category.descId}] [${category.titleId}]`}
                data-strk-img-ratio="4x3"
                data-strk-img-width="900"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={category.name}
                className="aspect-[4/5] h-full w-full object-cover transition duration-700 group-hover:scale-[1.04]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[rgba(29,23,20,0.8)] via-[rgba(29,23,20,0.18)] to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-6 text-velmora-ivory">
                <p id={category.titleId} className="font-display text-4xl leading-none">
                  {category.name}
                </p>
                <p
                  id={category.descId}
                  className="mt-3 max-w-xs text-sm leading-6 text-velmora-ivory/78 opacity-0 transition duration-300 group-hover:opacity-100"
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

export default CategoryTiles
