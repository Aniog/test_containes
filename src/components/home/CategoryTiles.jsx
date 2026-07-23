import { Link } from 'react-router-dom'
import { categories } from '@/data/storeData'
import { getStrkImageUrl } from '@/lib/strk-image'

const CategoryTiles = () => {
  return (
    <section>
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="mb-10 flex items-end justify-between gap-4">
          <div>
            <p className="text-xs uppercase tracking-[0.35em] text-amber-700">Shop by Category</p>
            <h2 className="mt-3 font-serif text-4xl text-stone-900 md:text-5xl">Quiet icons, thoughtfully arranged.</h2>
          </div>
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          {categories.map((category) => {
            const titleId = `${category.id}-title`
            const descId = `${category.id}-desc`
            const imageId = `${category.id}-tile-image`
            const imageSrc = getStrkImageUrl(imageId)

            return (
              <Link
                key={category.id}
                to={`/shop?category=${category.id}`}
                className="group relative overflow-hidden rounded-[2rem] bg-stone-200"
              >
                <img
                  alt={category.name}
                  className="aspect-[4/5] w-full object-cover transition duration-700 group-hover:scale-[1.04]"
                  data-strk-img-id={imageId}
                  data-strk-img={`[${descId}] [${titleId}]`}
                  data-strk-img-ratio="3x4"
                  data-strk-img-width="900"
                  src={imageSrc}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950/70 via-stone-950/15 to-transparent" />
                <div className="absolute inset-x-6 bottom-6 translate-y-2 transition duration-500 group-hover:translate-y-0">
                  <h3 id={titleId} className="font-serif text-3xl text-stone-50">
                    {category.name}
                  </h3>
                  <p id={descId} className="mt-2 text-sm leading-6 text-stone-200 opacity-0 transition duration-500 group-hover:opacity-100">
                    {category.blurb}
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

export default CategoryTiles
