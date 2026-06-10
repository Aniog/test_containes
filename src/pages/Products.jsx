import { Link } from 'react-router-dom'
import { ArrowRight, Cpu, Home, Shirt, Sparkles, Wrench, Package2, Bike, Sofa, PawPrint } from 'lucide-react'
import PageHero, { CtaBanner } from '@/components/PageHero.jsx'
import { PRODUCT_CATEGORIES } from '@/data/content.js'

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

const EXTENDED_CATEGORIES = [
  ...PRODUCT_CATEGORIES,
  {
    name: 'Lighting & Electrical',
    description: 'LED fixtures, smart lighting, switches, power tools, electrical accessories.',
    icon: 'lightbulb',
  },
]

export default function Products() {
  return (
    <>
      <PageHero
        eyebrow="Products we source"
        title="Across most consumer and light-industrial categories"
        description="We focus on physical products where on-the-ground factory relationships matter most. If your category is not listed, ask — chances are we already work with relevant factories."
      />

      <section className="section-pad bg-white">
        <div className="container-page">
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {EXTENDED_CATEGORIES.map((cat) => {
              const Icon = ICONS[cat.icon] || Cpu
              return (
                <div
                  key={cat.name}
                  className="flex items-start gap-4 rounded-xl border border-slate-200 bg-white p-6 transition-all hover:border-brand-accent/40 hover:shadow-md"
                >
                  <span className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-md bg-brand-accent-soft text-brand-accent">
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

      <section className="section-pad bg-brand-mist">
        <div className="container-page">
          <div className="grid items-center gap-10 md:grid-cols-12">
            <div className="md:col-span-5">
              <div className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-accent">
                Not on the list?
              </div>
              <h2 className="mt-3 text-2xl font-bold tracking-tight text-brand-ink md:text-3xl">
                Tell us your category — we will tell you honestly if we can help
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                We are generalists by design: our team covers most physical-product categories from electronics to soft goods. For highly specialized categories (medical devices, food imports, hazmat) we will be upfront about what we can and cannot do.
              </p>
              <Link to="/contact" className="btn-primary mt-6">
                Ask about your category
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="md:col-span-7">
              <div className="grid grid-cols-2 gap-3 text-sm">
                {[
                  ['OEM / ODM', 'Yes — full private label and design support'],
                  ['White label', 'Yes — fast, low-MOQ options in many categories'],
                  ['Custom tooling', 'Yes — we manage tooling timeline and sample approval'],
                  ['Certifications', 'We coordinate CE, FCC, FDA, LFGB, RoHS, REACH, BSCI'],
                  ['Sample runs', 'Yes — short runs welcome before committing to bulk'],
                  ['Recurring orders', 'Yes — many clients run quarterly or monthly programs'],
                ].map(([k, v]) => (
                  <div key={k} className="rounded-lg border border-slate-200 bg-white p-4">
                    <div className="text-xs font-semibold uppercase tracking-wider text-slate-500">{k}</div>
                    <div className="mt-1 text-sm font-medium text-brand-ink">{v}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  )
}
