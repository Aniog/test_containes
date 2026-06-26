import { Link } from 'react-router-dom'
import SectionHeading from '@/components/ui/SectionHeading'
import Icon from '@/components/ui/Icon'
import { PRODUCT_CATEGORIES } from '@/data/siteContent'

const PLACEHOLDER =
  'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1 1"%3E%3C/svg%3E'

export default function HomeProducts() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Products We Source"
          title="Categories we know inside out"
          description="We work across the manufacturing hubs that specialize in each category, so you get the right factory for your product."
        />
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {PRODUCT_CATEGORIES.map((p) => (
            <Link
              key={p.id}
              to="/products"
              className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all hover:border-accent hover:shadow-md"
            >
              <div className="aspect-[4/3] overflow-hidden bg-slate-100">
                <img
                  alt={p.title}
                  data-strk-img-id={p.imgId}
                  data-strk-img={`[${p.descId}] [${p.titleId}]`}
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="600"
                  src={PLACEHOLDER}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-5">
                <h3 id={p.titleId} className="text-lg font-bold text-ink">
                  {p.title}
                </h3>
                <p id={p.descId} className="mt-2 text-sm leading-relaxed text-ink-muted">
                  {p.desc}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
