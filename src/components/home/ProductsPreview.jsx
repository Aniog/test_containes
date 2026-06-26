import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import SectionHeader from '@/components/shared/SectionHeader'
import { products } from '@/data/content'

export default function ProductsPreview() {
  return (
    <section id="products" className="py-20 md:py-24 bg-white">
      <div className="container-page">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12 md:mb-16">
          <SectionHeader
            eyebrow="Products We Source"
            title="Coverage across the main B2B sourcing categories"
            description="We work with manufacturers across the categories most overseas buyers source from China."
          />
          <Link
            to="/products"
            className="inline-flex items-center gap-2 text-sm font-semibold text-brand-accent hover:text-brand-accent-2 self-start md:self-auto"
          >
            View all categories
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {products.map((cat) => (
            <div
              key={cat.id}
              className="bg-brand-mist rounded-xl p-6 md:p-7 border border-transparent hover:border-brand-line transition-colors"
            >
              <h3 className="text-lg md:text-xl font-semibold text-brand-ink">
                {cat.title}
              </h3>
              <ul className="mt-4 space-y-2">
                {cat.items.map((it) => (
                  <li
                    key={it}
                    className="flex items-start gap-2 text-sm md:text-base text-brand-text/85"
                  >
                    <span className="mt-2 inline-block w-1.5 h-1.5 rounded-full bg-brand-accent shrink-0" />
                    <span>{it}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}