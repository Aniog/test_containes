import { Link } from 'react-router-dom'
import SectionHeading from '../common/SectionHeading'

const CategoryTiles = ({ categories }) => (
  <section className="px-6 py-20 lg:px-10 lg:py-28">
    <div className="mx-auto max-w-7xl space-y-10">
      <SectionHeading
        eyebrow="Shop by category"
        title="The essentials, refined"
        description="Choose your Velmora mood, from sculptural earrings to layerable necklaces and everyday huggies."
      />
      <div className="grid gap-6 lg:grid-cols-3">
        {categories.map((category) => (
          <Link
            key={category.title}
            to={`/shop?category=${encodeURIComponent(category.filterValue)}`}
            className="group relative overflow-hidden rounded-[2rem] border border-stone-200/10 bg-stone-950"
          >
            <span id={category.titleId} className="sr-only">
              {category.title}
            </span>
            <span id={category.descId} className="sr-only">
              {category.description}
            </span>
            <span id={category.cueId} className="sr-only">
              {category.cueText}
            </span>
            <img
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt={category.title}
              className="aspect-[4/5] h-full w-full object-cover transition duration-500 group-hover:scale-105"
              data-strk-img-id={`category-${category.filterValue.toLowerCase()}-tile-97ab`}
              data-strk-img={`[${category.cueId}] [${category.descId}] [${category.titleId}]`}
              data-strk-img-ratio="4x3"
              data-strk-img-width="900"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/20 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-6 text-stone-50">
              <p className="font-display text-4xl leading-none transition duration-300 group-hover:text-amber-200">
                {category.title}
              </p>
              <p className="mt-3 max-w-xs text-sm leading-6 text-stone-200 opacity-0 transition duration-300 group-hover:opacity-100">
                {category.description}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  </section>
)

export default CategoryTiles
