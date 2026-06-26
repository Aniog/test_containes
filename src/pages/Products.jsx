import { useEffect, useRef } from 'react'
import PageHeader from '@/components/shared/PageHeader'
import CTASection from '@/components/shared/CTASection'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const categories = [
  {
    id: 'apparel-textiles',
    title: 'Apparel & Textiles',
    desc: 'Cut-and-sew apparel, knitwear, denim, activewear, accessories, uniforms and bags.',
    examples: ['T-shirts & hoodies', 'Denim & workwear', 'Activewear', 'Caps & accessories'],
    hubs: 'Guangdong, Zhejiang, Jiangsu',
  },
  {
    id: 'home-kitchen',
    title: 'Home & Kitchen',
    desc: 'Cookware, kitchen tools, small appliances, storage and home organization products.',
    examples: ['Cookware sets', 'Kitchen gadgets', 'Storage & organization', 'Tableware & ceramics'],
    hubs: 'Guangdong, Zhejiang',
  },
  {
    id: 'furniture',
    title: 'Furniture',
    desc: 'Indoor and outdoor furniture, office furniture, hospitality, flat-pack and custom designs.',
    examples: ['Office chairs & desks', 'Outdoor furniture', 'Hospitality furniture', 'Flat-pack furniture'],
    hubs: 'Guangdong, Fujian, Shandong',
  },
  {
    id: 'electronics',
    title: 'Electronics & Accessories',
    desc: 'Consumer electronics, accessories, IoT devices, lighting and audio products.',
    examples: ['Bluetooth audio', 'Phone accessories', 'Smart home devices', 'LED lighting'],
    hubs: 'Guangdong (Shenzhen, Dongguan)',
  },
  {
    id: 'beauty',
    title: 'Beauty & Personal Care',
    desc: 'Packaging, applicators, brushes and contract-manufactured personal care products.',
    examples: ['Cosmetic packaging', 'Brushes & applicators', 'Skincare tools', 'Hair accessories'],
    hubs: 'Guangdong, Zhejiang',
  },
  {
    id: 'sports-outdoor',
    title: 'Sports & Outdoor',
    desc: 'Fitness gear, camping equipment, cycling accessories, water sports and travel.',
    examples: ['Fitness equipment', 'Camping gear', 'Cycling accessories', 'Travel bags'],
    hubs: 'Zhejiang, Jiangsu, Fujian',
  },
  {
    id: 'industrial',
    title: 'Industrial & Machinery',
    desc: 'Components, tools, hardware, fittings and made-to-order industrial parts.',
    examples: ['Hand tools & hardware', 'Pumps & valves', 'Custom machined parts', 'Safety equipment'],
    hubs: 'Zhejiang, Shandong, Jiangsu',
  },
  {
    id: 'toys-baby',
    title: 'Toys & Baby',
    desc: 'Toys, plush, learning products and baby items compliant with EN71, CPSIA and ASTM.',
    examples: ['Educational toys', 'Plush toys', 'Baby gear', 'Outdoor play'],
    hubs: 'Guangdong, Shantou',
  },
  {
    id: 'packaging',
    title: 'Packaging & Printing',
    desc: 'Custom boxes, bags, labels, hangtags and printed marketing collateral.',
    examples: ['Custom boxes', 'Paper & poly bags', 'Labels & hangtags', 'Printed inserts'],
    hubs: 'Guangdong, Zhejiang, Shanghai',
  },
]

export default function Products() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <div ref={containerRef}>
      <PageHeader
        eyebrow="Products we source"
        title="Categories we know inside out"
        description="We focus on consumer and light industrial products manufactured in China. If your product isn't listed, we likely still cover it — get in touch and we'll confirm."
      />

      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((cat) => (
              <article
                key={cat.id}
                className="rounded-xl border border-slate-200 bg-white overflow-hidden shadow-sm hover:shadow-md hover:border-slate-300 transition flex flex-col"
              >
                <div className="aspect-[4/3] overflow-hidden bg-slate-100">
                  <img
                    alt={cat.title}
                    data-strk-img-id={`products-${cat.id}-img`}
                    data-strk-img={`[products-${cat.id}-desc] [products-${cat.id}-title]`}
                    data-strk-img-ratio="4x3"
                    data-strk-img-width="600"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 3'/%3E"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <h2 id={`products-${cat.id}-title`} className="text-lg font-semibold text-slate-900">
                    {cat.title}
                  </h2>
                  <p id={`products-${cat.id}-desc`} className="mt-2 text-sm text-slate-600 leading-relaxed">
                    {cat.desc}
                  </p>
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {cat.examples.map((ex) => (
                      <li
                        key={ex}
                        className="text-xs font-medium text-slate-700 bg-slate-100 border border-slate-200 px-2.5 py-1 rounded-md"
                      >
                        {ex}
                      </li>
                    ))}
                  </ul>
                  <p className="mt-5 text-xs text-slate-500">
                    <span className="font-semibold text-slate-700">Manufacturing hubs:</span> {cat.hubs}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Need a category not listed here?"
        description="We have audited factories across most consumer and light industrial sectors. Tell us your product and we'll confirm whether we can help."
      />
    </div>
  )
}
