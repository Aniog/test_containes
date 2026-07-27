import { useEffect, useRef, useState } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import PageHero from '@/components/PageHero.jsx'
import SectionHeader from '@/components/SectionHeader.jsx'
import CtaBand from '@/components/CtaBand.jsx'
import { cn } from '@/lib/utils'
import { PRODUCT_CATEGORIES } from '@/data/site.js'

const FILTERS = [
  { key: 'all', label: 'All Categories' },
  { key: 'consumer', label: 'Consumer Goods', match: ['consumer-electronics', 'home-kitchen', 'beauty-personal-care', 'toys-games', 'pet-supplies', 'sports-outdoor'] },
  { key: 'home-living', label: 'Home & Living', match: ['home-kitchen', 'furniture-decor', 'building-materials'] },
  { key: 'industrial', label: 'Industrial & Auto', match: ['industrial-equipment', 'automotive-accessories', 'building-materials'] },
  { key: 'apparel', label: 'Apparel & Packaging', match: ['apparel-textiles', 'packaging-printing'] },
]

export default function Products() {
  const [active, setActive] = useState('all')
  const gridRef = useRef(null)

  const visible = active === 'all'
    ? PRODUCT_CATEGORIES
    : PRODUCT_CATEGORIES.filter((c) => FILTERS.find((f) => f.key === active)?.match.includes(c.id))

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, gridRef.current)
    })
    return () => window.cancelAnimationFrame(frameId)
  }, [active])

  return (
    <>
      <PageHero
        eyebrow="Products We Source"
        title="12 product categories, sourced from the right industrial clusters"
        subtitle="We place your product with factories that already specialize in it — because that is where quality and price are both best."
        id="products-title"
        subId="products-subtitle"
        bgId="products-hero-bg-l8"
      />

      <section className="bg-white py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" ref={gridRef}>
          <div className="flex flex-wrap gap-2">
            {FILTERS.map((f) => (
              <button
                key={f.key}
                onClick={() => setActive(f.key)}
                className={cn(
                  'rounded-full border px-4 py-2 text-sm font-medium transition-colors',
                  active === f.key
                    ? 'border-brand-600 bg-brand-600 text-white'
                    : 'border-slate-300 bg-white text-slate-600 hover:border-slate-400 hover:text-slate-900'
                )}
              >
                {f.label}
              </button>
            ))}
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {visible.map((c) => (
              <article key={c.id} className="group overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm transition-shadow hover:shadow-md">
                <div className="aspect-[3/2] w-full overflow-hidden bg-slate-100">
                  <img
                    alt={c.title}
                    data-strk-img-id={`prod-${c.imgId}`}
                    data-strk-img={`[prod-${c.id}-desc] [prod-${c.id}-title]`}
                    data-strk-img-ratio="3x2"
                    data-strk-img-width="600"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 id={`prod-${c.id}-title`} className="text-base font-semibold text-slate-900">{c.title}</h3>
                  <p id={`prod-${c.id}-desc`} className="mt-1.5 text-sm leading-relaxed text-slate-600">{c.desc}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-16 md:py-24">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Don't See Your Product?"
            title="If it's made in China, we can source it"
            subtitle="The categories above are our most common projects, not a limit. Send us your specifications — unusual or highly engineered products are often where a sourcing agent adds the most value."
          />
        </div>
      </section>

      <CtaBand
        title="Tell us what you want to source"
        subtitle="Send your specifications, reference links, or drawings and receive a free sourcing quote within one business day."
      />
    </>
  )
}
