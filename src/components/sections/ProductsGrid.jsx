import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const PRODUCTS = [
  {
    id: 'electronics',
    title: 'Consumer Electronics',
    desc: 'Bluetooth speakers, chargers, smart home devices, accessories and small appliances.',
    hubs: 'Shenzhen · Dongguan',
  },
  {
    id: 'home-kitchen',
    title: 'Home & Kitchen',
    desc: 'Cookware, storage, small kitchen tools, household goods and cleaning products.',
    hubs: 'Yiwu · Ningbo',
  },
  {
    id: 'apparel',
    title: 'Apparel & Textiles',
    desc: 'Knit & woven garments, activewear, accessories, fabrics and home textiles.',
    hubs: 'Guangzhou · Shaoxing',
  },
  {
    id: 'industrial',
    title: 'Industrial & Machinery',
    desc: 'Spare parts, tooling, hardware, hand tools and small industrial equipment.',
    hubs: 'Ningbo · Qingdao',
  },
  {
    id: 'furniture',
    title: 'Furniture & Decor',
    desc: 'Indoor and outdoor furniture, lighting, home decor and hospitality fittings.',
    hubs: 'Foshan · Guangzhou',
  },
  {
    id: 'beauty',
    title: 'Beauty & Personal Care',
    desc: 'Cosmetic accessories, packaging, skincare tools, brushes and wellness products.',
    hubs: 'Yiwu · Guangzhou',
  },
  {
    id: 'sports',
    title: 'Sports & Outdoors',
    desc: 'Fitness gear, camping, cycling accessories, sportswear and outdoor equipment.',
    hubs: 'Ningbo · Xiamen',
  },
  {
    id: 'auto',
    title: 'Auto Parts & Accessories',
    desc: 'Aftermarket parts, accessories, car care products and 12V electronics.',
    hubs: 'Guangzhou · Ruian',
  },
  {
    id: 'packaging',
    title: 'Packaging & Printing',
    desc: 'Custom boxes, mailers, retail packaging, labels and printed marketing materials.',
    hubs: 'Dongguan · Shanghai',
  },
]

export default function ProductsGrid({ kicker = 'Categories', title = 'Products we source', showCTA = true }) {
  const ref = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, ref.current)
  }, [])

  return (
    <section ref={ref} className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-wider text-blue-700">{kicker}</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
              {title}
            </h2>
            <p className="mt-4 text-base leading-relaxed text-slate-600 md:text-lg">
              We work across most consumer and light-industrial categories. If your product isn't
              listed, just ask — we'll tell you honestly whether we can help.
            </p>
          </div>
          {showCTA && (
            <Link
              to="/contact"
              className="inline-flex items-center justify-center rounded-md border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-900 hover:bg-slate-50"
            >
              Request a category quote
            </Link>
          )}
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {PRODUCTS.map((p) => (
            <article
              key={p.id}
              className="group overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm transition hover:shadow-md"
            >
              <div className="aspect-[4/3] overflow-hidden bg-slate-100">
                <img
                  alt={p.title}
                  data-strk-img-id={`product-${p.id}-img`}
                  data-strk-img={`[product-${p.id}-desc] [product-${p.id}-title] manufacturing factory China`}
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 id={`product-${p.id}-title`} className="text-lg font-semibold text-slate-900">
                  {p.title}
                </h3>
                <p id={`product-${p.id}-desc`} className="mt-2 text-sm leading-relaxed text-slate-600">
                  {p.desc}
                </p>
                <p className="mt-4 text-xs font-medium uppercase tracking-wider text-blue-700">
                  Hubs: <span className="text-slate-700 normal-case tracking-normal">{p.hubs}</span>
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
