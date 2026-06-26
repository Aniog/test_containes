import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import PageHeader from '@/components/common/PageHeader'
import Icon from '@/components/ui/Icon'
import CtaBanner from '@/components/common/CtaBanner'
import { PRODUCT_CATEGORIES } from '@/data/siteContent'

const PLACEHOLDER =
  'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1 1"%3E%3C/svg%3E'

const HUBS = [
  { city: 'Shenzhen', focus: 'Electronics, smart devices, accessories' },
  { city: 'Dongguan', focus: 'OEM manufacturing, molds, hardware' },
  { city: 'Yiwu', focus: 'Small commodities, gifts, home goods' },
  { city: 'Ningbo', focus: 'Home appliances, hardware, export logistics' },
  { city: 'Guangzhou', focus: 'Apparel, textiles, leather goods' },
  { city: 'Foshan', focus: 'Furniture, ceramics, building materials' },
]

export default function Products() {
  const ref = useRef(null)
  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, ref.current)
  }, [])

  return (
    <div ref={ref}>
      <PageHeader
        eyebrow="Products We Source"
        title="If it is made in China, we can source it"
        description="We work across the manufacturing hubs that specialize in each product category, matching you to factories with the right capability and export experience."
        breadcrumbs={[{ label: 'Products We Source' }]}
      />

      <section className="bg-white py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {PRODUCT_CATEGORIES.map((p) => (
              <div
                key={p.id}
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
                <div className="p-6">
                  <h3 id={p.titleId} className="text-lg font-bold text-ink">
                    {p.title}
                  </h3>
                  <p id={p.descId} className="mt-2 text-sm leading-relaxed text-ink-muted">
                    {p.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 rounded-2xl border border-dashed border-slate-300 bg-surface p-6 text-center">
            <p className="text-base text-ink">
              Don't see your category?{' '}
              <span className="text-ink-muted">
                We source across many more industries. Just ask.
              </span>
            </p>
          </div>
        </div>
      </section>

      <section className="bg-surface py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-wider text-accent">
              Manufacturing Hubs
            </p>
            <h2 className="mt-3 text-3xl font-bold text-ink sm:text-4xl">
              Sourced from the right regions
            </h2>
            <p className="mt-4 text-base leading-relaxed text-ink-muted">
              China's manufacturing is specialized by region. We work in the hubs that lead each
              category, so you get factories with deep experience in your product.
            </p>
          </div>
          <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {HUBS.map((h) => (
              <div
                key={h.city}
                className="flex items-start gap-3 rounded-xl border border-slate-200 bg-white p-5 shadow-sm"
              >
                <Icon name="MapPin" className="mt-0.5 h-5 w-5 shrink-0 text-amber" />
                <div>
                  <p className="font-bold text-ink">{h.city}</p>
                  <p className="mt-0.5 text-sm text-ink-muted">{h.focus}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner
        title="Looking for a specific product?"
        description="Tell us what you want to source and we will confirm whether it is a fit, with a free quote."
      />
    </div>
  )
}
