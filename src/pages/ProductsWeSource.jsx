import PageHeader from '../components/PageHeader.jsx'
import Products from '../components/home/Products.jsx'
import CTABanner from '../components/CTABanner.jsx'
import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const HUBS = [
  {
    id: 'yiwu',
    name: 'Yiwu',
    desc: 'World\'s largest small commodities market. Strong for home goods, accessories, gifts, stationery, hardware, and consolidation of mixed-product containers.',
  },
  {
    id: 'shenzhen',
    name: 'Shenzhen',
    desc: 'China\'s electronics capital. We source consumer electronics, chargers, audio, smart devices, batteries, and tooling-intensive plastic products here.',
  },
  {
    id: 'guangzhou',
    name: 'Guangzhou',
    desc: 'Hub for apparel, leather, bags, beauty, and trade fairs. Best for fashion, private-label cosmetics, packaging and lifestyle goods.',
  },
  {
    id: 'ningbo',
    name: 'Ningbo',
    desc: 'Major manufacturing region for kitchenware, appliances, hand tools, electrical products and tooling. Close to a deep-water export port.',
  },
  {
    id: 'foshan',
    name: 'Foshan',
    desc: 'Furniture, ceramics, lighting, and bathroom fittings. Strong supply chain for hospitality and home interiors.',
  },
  {
    id: 'qingdao',
    name: 'Qingdao',
    desc: 'Specialised in outdoor, automotive accessories, rubber, machinery, and seafood-adjacent packaging.',
  },
]

export default function ProductsWeSource() {
  const ref = useRef(null)
  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, ref.current)
  }, [])

  return (
    <>
      <PageHeader
        eyebrow="Products We Source"
        title="The categories we source most often"
        subtitle="Our team has sourced thousands of SKUs for buyers across consumer goods, packaging and light industrial categories. Here's where we have the deepest supplier networks."
        crumbs={[{ label: 'Products We Source' }]}
      />

      <Products />

      <section ref={ref} className="bg-slate-50 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p id="hubs-eyebrow" className="text-xs font-semibold uppercase tracking-[0.18em] text-[#E63946]">Sourcing Hubs</p>
            <h2 id="hubs-title" className="mt-3 text-3xl md:text-4xl font-bold tracking-tight text-[#0B2545]">
              Where in China we source from
            </h2>
            <p className="mt-4 text-base text-slate-600 leading-relaxed">
              China is not one market &mdash; it's a network of industrial clusters. We match your product to the
              right region so you get better factories, better pricing and easier shipping.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {HUBS.map((h) => (
              <article key={h.id} className="rounded-xl overflow-hidden border border-slate-200 bg-white shadow-sm">
                <div className="aspect-[16/9] overflow-hidden">
                  <img
                    alt={`${h.name} sourcing hub`}
                    className="w-full h-full object-cover"
                    data-strk-img-id={`hub-${h.id}-img-${h.id.slice(0,4)}b3`}
                    data-strk-img={`[hub-${h.id}-desc] [hub-${h.id}-name]`}
                    data-strk-img-ratio="16x9"
                    data-strk-img-width="800"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  />
                </div>
                <div className="p-6">
                  <h3 id={`hub-${h.id}-name`} className="text-lg font-semibold text-[#0B2545]">{h.name}</h3>
                  <p id={`hub-${h.id}-desc`} className="mt-1.5 text-sm text-slate-600 leading-relaxed">{h.desc}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-[#0B2545]">
            Don't see your category?
          </h2>
          <p className="mt-4 text-base text-slate-600 leading-relaxed">
            We can support most consumer and light industrial products. Send us the product brief and we'll
            tell you within one business day whether we are a good fit &mdash; or recommend someone who is.
          </p>
        </div>
      </section>

      <CTABanner />
    </>
  )
}
