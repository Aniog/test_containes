import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { PRODUCT_CATEGORIES } from '@/data/content'
import { Section, SectionHeader } from '@/components/ui/Section'

export default function ProductsSection({ showCta = true }) {
  return (
    <Section id="products" className="bg-white">
      <SectionHeader
        eyebrow="Products We Source"
        title="Categories we source every day"
        description="We work across China's main manufacturing hubs to source a wide range of product categories."
      />

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {PRODUCT_CATEGORIES.map((cat) => (
          <article key={cat.id} className="card group overflow-hidden">
            <div className="relative aspect-[4/3] overflow-hidden">
              <img
                alt={cat.name}
                data-strk-img-id={cat.imgId}
                data-strk-img={`[${cat.descId}] [${cat.titleId}]`}
                data-strk-img-ratio="4x3"
                data-strk-img-width="600"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
              />
            </div>
            <div className="p-6">
              <h3 id={cat.titleId} className="text-lg font-bold text-slate-900">
                {cat.name}
              </h3>
              <p id={cat.descId} className="mt-2 text-sm text-slate-600">
                {cat.description}
              </p>
            </div>
          </article>
        ))}
      </div>

      {showCta && (
        <div className="mt-10 text-center">
          <Link to="/products" className="btn-outline">
            Browse all categories
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      )}
    </Section>
  )
}
