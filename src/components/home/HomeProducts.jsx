import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { PRODUCT_CATEGORIES } from '@/data/content'

const featured = PRODUCT_CATEGORIES.slice(0, 6)

const HomeProducts = () => (
  <section className="bg-white">
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-24 lg:px-8">
      <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-wider text-blue-800">Products we source</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
            Product categories we know from the factory floor
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate-600 md:text-lg">
            We work across consumer and light-industrial categories, with audited
            factories in the main manufacturing regions of Guangdong, Zhejiang,
            Jiangsu, and Fujian.
          </p>
        </div>
        <Link
          to="/products"
          className="inline-flex shrink-0 items-center gap-2 text-sm font-semibold text-blue-800 hover:text-blue-900"
        >
          View all categories <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {featured.map((category) => (
          <Link
            key={category.id}
            to="/products"
            className="group overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm transition-shadow hover:shadow-md"
          >
            <div className="aspect-[3/2] w-full overflow-hidden bg-slate-100">
              <img
                alt={category.name}
                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                data-strk-img-id={`home-cat-${category.id}-a1`}
                data-strk-img={`[home-cat-desc-${category.id}] [home-cat-name-${category.id}]`}
                data-strk-img-ratio="3x2"
                data-strk-img-width="600"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              />
            </div>
            <div className="p-5">
              <h3 id={`home-cat-name-${category.id}`} className="text-base font-semibold text-slate-900 group-hover:text-blue-800">
                {category.name}
              </h3>
              <p id={`home-cat-desc-${category.id}`} className="mt-1.5 text-sm leading-relaxed text-slate-600">
                {category.desc}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  </section>
)

export default HomeProducts
