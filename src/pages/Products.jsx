import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import SectionHeader from '@/components/shared/SectionHeader'
import CtaBanner from '@/components/shared/CtaBanner'

const categories = [
  {
    id: 'electronics',
    titleId: 'cat-title-electronics',
    descId: 'cat-desc-electronics',
    title: 'Electronics & Components',
    description:
      'Consumer electronics, cables, PCBA, chargers, adapters, headphones, smart devices, and electronic components.',
    examples: ['Mobile accessories', 'PCB assemblies', 'Power banks', 'Cables'],
    imgId: 'cat-img-electronics-3c4d',
  },
  {
    id: 'apparel',
    titleId: 'cat-title-apparel',
    descId: 'cat-desc-apparel',
    title: 'Apparel & Textiles',
    description:
      'Men, women, and children clothing, fabrics, bags, shoes, and fashion accessories from Guangdong and Zhejiang suppliers.',
    examples: ['T-shirts', 'Denim', 'Handbags', 'Sportswear'],
    imgId: 'cat-img-apparel-8e2a',
  },
  {
    id: 'hardware',
    titleId: 'cat-title-hardware',
    descId: 'cat-desc-hardware',
    title: 'Hardware & Tools',
    description:
      'Building materials, fasteners, hand tools, power tools, locks, hinges, and industrial metal parts.',
    examples: ['Screws & bolts', 'Hand tools', 'Door hardware', 'LED lighting'],
    imgId: 'cat-img-hardware-5b7f',
  },
  {
    id: 'home-goods',
    titleId: 'cat-title-home-goods',
    descId: 'cat-desc-home-goods',
    title: 'Home & Kitchen Goods',
    description:
      'Furniture, kitchenware, tableware, home décor, storage items, and cleaning products.',
    examples: ['Cookware', 'Storage boxes', 'Furniture parts', 'Ceramics'],
    imgId: 'cat-img-home-goods-1a9c',
  },
  {
    id: 'packaging',
    titleId: 'cat-title-packaging',
    descId: 'cat-desc-packaging',
    title: 'Packaging & Printing',
    description:
      'Retail boxes, mailer boxes, paper bags, labels, stickers, catalogs, and custom printed materials.',
    examples: ['Gift boxes', 'Kraft bags', 'Hang tags', 'Labels'],
    imgId: 'cat-img-packaging-6d3e',
  },
  {
    id: 'machinery',
    titleId: 'cat-title-machinery',
    descId: 'cat-desc-machinery',
    title: 'Machinery & Equipment',
    description:
      'Small machinery, automation parts, OEM equipment, machine components, and industrial accessories.',
    examples: ['Automation parts', 'Conveyor parts', 'Workshop equipment'],
    imgId: 'cat-img-machinery-4f8b',
  },
]

export default function Products() {
  const ref = useRef(null)
  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, ref.current)
  }, [])

  return (
    <div ref={ref}>
      <section className="bg-slate-900 py-20 md:py-28">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm font-semibold tracking-wide uppercase text-brand-300 mb-3">
            Product Categories
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-white">
            Products we source from China
          </h1>
          <p className="mt-5 text-lg text-slate-300 leading-relaxed">
            We work across the main export categories. If you do not see your
            product, send us an inquiry — we likely have supplier contacts for
            it.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Industries and product categories"
            description="Our supplier network is strongest in the categories below. We focus on finding factories that match your quality level, order size, and certification needs."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {categories.map((cat) => (
              <article
                key={cat.id}
                className="flex flex-col sm:flex-row gap-6 p-6 rounded-2xl border border-slate-200 bg-slate-50"
              >
                <div className="shrink-0 w-full sm:w-40 h-36 sm:h-auto rounded-xl overflow-hidden bg-slate-200">
                  <img
                    alt={cat.title}
                    className="w-full h-full object-cover"
                    data-strk-img-id={cat.imgId}
                    data-strk-img={`[${cat.descId}] [${cat.titleId}] [page-products-title]`}
                    data-strk-img-ratio="4x3"
                    data-strk-img-width="400"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  />
                </div>
                <div className="flex-1">
                  <h2
                    id={cat.titleId}
                    className="text-xl font-semibold text-slate-900"
                  >
                    {cat.title}
                  </h2>
                  <p
                    id={cat.descId}
                    className="mt-2 text-sm text-slate-600 leading-relaxed"
                  >
                    {cat.description}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {cat.examples.map((example) => (
                      <span
                        key={example}
                        className="px-2.5 py-1 rounded-md bg-white border border-slate-200 text-xs font-medium text-slate-600"
                      >
                        {example}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner />
    </div>
  )
}
