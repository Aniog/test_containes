import { Link } from 'react-router-dom'
import { ArrowRight, Cpu, Home, Shirt, Sparkles, Wrench, Package2, Bike, Sofa, PawPrint } from 'lucide-react'
import SectionHeading from '@/components/SectionHeading.jsx'
import { PRODUCT_CATEGORIES } from '@/data/content.js'
import { useStrkImages } from '@/hooks/useStrkImages.js'

const ICONS = {
  cpu: Cpu,
  home: Home,
  shirt: Shirt,
  sparkles: Sparkles,
  wrench: Wrench,
  'package-2': Package2,
  bike: Bike,
  sofa: Sofa,
  'paw-print': PawPrint,
}

export default function HomeProducts() {
  const ref = useStrkImages()

  return (
    <section ref={ref} className="section-pad bg-white" id="products">
      <div className="container-page">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <SectionHeading
            eyebrow="Products we source"
            title="Across most consumer and light-industrial categories"
            description="We focus on what we know best: physical products that benefit from on-the-ground factory relationships. If you do not see your category, ask — chances are we cover it."
          />
          <Link
            to="/products"
            className="hidden text-sm font-semibold text-brand-accent hover:text-brand-accent-dark md:inline-flex md:items-center md:gap-1.5"
          >
            See all categories
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {PRODUCT_CATEGORIES.map((cat, idx) => {
            const Icon = ICONS[cat.icon] || Cpu
            return (
              <div
                key={cat.name}
                className="flex items-start gap-4 rounded-xl border border-slate-200 bg-white p-5"
              >
                <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-md bg-brand-mist text-brand-ink">
                  <Icon className="h-5 w-5" />
                </span>
                <div>
                  <h3 className="text-base font-semibold text-brand-ink">{cat.name}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-slate-600">{cat.description}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
