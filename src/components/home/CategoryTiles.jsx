import { Link } from 'react-router-dom'
import { categories } from '@/data/products'

const CategoryTiles = () => (
  <section className="bg-velmora-parchment px-4 py-20 text-velmora-ink sm:px-6 lg:px-8 lg:py-28">
    <div className="mx-auto max-w-7xl">
      <div className="mb-10 text-center">
        <p className="text-xs font-bold uppercase tracking-[0.32em] text-velmora-gold">Shop by category</p>
        <h2 className="mt-3 font-serif text-5xl text-velmora-ink sm:text-6xl">Find your signature</h2>
      </div>
      <div className="grid gap-5 md:grid-cols-3">
        {categories.map((category) => (
          <Link key={category.id} to={`/shop?category=${category.title}`} className="group relative block aspect-[4/5] overflow-hidden rounded-[2rem] bg-velmora-ivory text-velmora-ivory shadow-soft">
            <img
              alt={category.title}
              className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
              data-strk-img-id={category.imgId}
              data-strk-img={`[${category.descId}] [${category.titleId}]`}
              data-strk-img-ratio="4x3"
              data-strk-img-width="900"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-velmora-ink/75 via-transparent to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-7 transition duration-500 group-hover:translate-y-[-0.5rem]">
              <h3 id={category.titleId} className="font-serif text-4xl text-velmora-ivory">{category.title}</h3>
              <p id={category.descId} className="mt-3 max-w-xs text-sm leading-6 text-velmora-blush opacity-0 transition duration-500 group-hover:opacity-100">
                {category.desc}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  </section>
)

export default CategoryTiles
