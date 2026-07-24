import { Link } from 'react-router-dom'
import { categories } from '@/data/products'
import SectionHeading from './SectionHeading'

function CategoryTiles() {
  return (
    <section className="bg-velmora-ivory px-4 py-20 text-velmora-ink sm:px-6 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10">
          <SectionHeading eyebrow="Shop by category" title="Find your signature shine." />
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          {categories.map((category) => (
            <Link
              key={category.name}
              to={`/shop?category=${category.name.toLowerCase()}`}
              className="group relative aspect-[4/5] overflow-hidden bg-velmora-espresso text-velmora-porcelain velmora-image shadow-sm transition duration-500 hover:-translate-y-1 hover:shadow-velvet"
            >
              <div
                className="absolute inset-0 transition duration-700 group-hover:scale-105"
                data-strk-bg-id={category.imageId}
                data-strk-bg={`[${category.descId}] [${category.titleId}]`}
                data-strk-bg-ratio="4x3"
                data-strk-bg-width="900"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-velmora-espresso/80 via-velmora-espresso/10 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-6">
                <p id={category.descId} className="mb-2 translate-y-2 text-sm leading-6 text-velmora-champagne opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                  {category.description}
                </p>
                <h3 id={category.titleId} className="font-serif text-4xl text-velmora-porcelain">{category.name}</h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

export default CategoryTiles
