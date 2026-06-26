import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { ArrowRight, MapPin } from 'lucide-react'
import PageHero from '@/components/PageHero.jsx'
import { CATEGORIES } from '@/data/content.js'

const HUBS = [
  { city: 'Shenzhen / Dongguan', specialty: 'Electronics, accessories, smart devices' },
  { city: 'Guangzhou / Foshan', specialty: 'Furniture, lighting, hardware, ceramics' },
  { city: 'Yiwu', specialty: 'Promotional gifts, stationery, accessories' },
  { city: 'Ningbo / Hangzhou', specialty: 'Apparel, textiles, kitchenware' },
  { city: 'Xiamen / Fujian', specialty: 'Outdoor goods, ceramics, paper products' },
  { city: 'Qingdao', specialty: 'Industrial parts, rubber, machinery' },
]

export default function Products() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <div ref={containerRef}>
      <PageHero
        eyebrow="Products We Source"
        breadcrumb="Products We Source"
        title="Categories we work with every week"
        desc="Our team focuses on consumer goods, light industrial and B2B supplies — the categories where China remains the world's most competitive supply base."
      />

      <section className="py-16 md:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {CATEGORIES.map(({ id, icon: Icon, title, desc }, idx) => (
              <article
                key={id}
                id={`category-${id}-card`}
                className="rounded-xl border border-slate-200 bg-white overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col"
              >
                <div className="aspect-[4/3] overflow-hidden bg-slate-100">
                  <img
                    alt={title}
                    data-strk-img-id={`category-img-${id}-${idx}`}
                    data-strk-img={`[category-${id}-title] ${title} manufacturing in china`}
                    data-strk-img-ratio="4x3"
                    data-strk-img-width="700"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <div className="flex items-center gap-2.5">
                    <span className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-red-50 text-red-600">
                      <Icon className="h-5 w-5" />
                    </span>
                    <h3 id={`category-${id}-title`} className="text-lg font-semibold text-slate-900">{title}</h3>
                  </div>
                  <p className="mt-3 text-sm text-slate-600 leading-relaxed flex-1">{desc}</p>
                  <Link
                    to="/contact"
                    className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-red-600 hover:text-red-700"
                  >
                    Source this category <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-block text-xs uppercase tracking-[0.18em] font-semibold text-red-600">Manufacturing hubs</span>
            <h2 className="mt-3 text-3xl md:text-4xl font-bold tracking-tight text-slate-900">
              Where we source from in China
            </h2>
            <p className="mt-4 text-base text-slate-600 leading-relaxed">
              Our project managers travel to factories in the six manufacturing clusters that produce most of the consumer goods exported from China.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {HUBS.map((h) => (
              <div key={h.city} className="rounded-xl border border-slate-200 bg-white p-5 flex items-start gap-3">
                <MapPin className="h-5 w-5 text-red-600 mt-0.5 shrink-0" />
                <div>
                  <div className="text-base font-semibold text-slate-900">{h.city}</div>
                  <p className="text-sm text-slate-600 mt-1">{h.specialty}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
