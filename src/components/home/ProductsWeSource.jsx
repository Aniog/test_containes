import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import SectionHeading from '@/components/shared/SectionHeading'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const categories = [
  {
    id: 'apparel-textiles',
    title: 'Apparel & Textiles',
    desc: 'T-shirts, hoodies, uniforms, denim, knitwear, accessories and custom OEM apparel.',
  },
  {
    id: 'home-kitchen',
    title: 'Home & Kitchen',
    desc: 'Cookware, utensils, small appliances, storage, ceramics and home organization products.',
  },
  {
    id: 'furniture',
    title: 'Furniture',
    desc: 'Indoor and outdoor furniture, office chairs, hospitality furniture and flat-pack designs.',
  },
  {
    id: 'electronics',
    title: 'Electronics & Accessories',
    desc: 'Consumer electronics, cables, chargers, lighting, audio and Bluetooth accessories.',
  },
  {
    id: 'beauty',
    title: 'Beauty & Personal Care',
    desc: 'Packaging, brushes, accessories and contract-manufactured personal care products.',
  },
  {
    id: 'sports-outdoor',
    title: 'Sports & Outdoor',
    desc: 'Fitness gear, camping equipment, cycling accessories and branded outdoor products.',
  },
  {
    id: 'industrial',
    title: 'Industrial & Machinery',
    desc: 'Components, tools, hardware, fittings and made-to-order industrial parts.',
  },
  {
    id: 'packaging',
    title: 'Packaging & Printing',
    desc: 'Custom packaging, boxes, bags, labels, hangtags and printed marketing collateral.',
  },
]

export default function ProductsWeSource() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section ref={containerRef} className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <SectionHeading
          eyebrow="Products we source"
          title="Categories we know inside out"
          description="If your product is not listed below, we likely still cover it. We work across most consumer and light industrial categories made in China."
        />

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((cat) => (
            <div
              key={cat.id}
              className="group rounded-xl border border-slate-200 bg-white overflow-hidden shadow-sm hover:shadow-md hover:border-slate-300 transition"
            >
              <div className="aspect-[4/3] overflow-hidden bg-slate-100">
                <img
                  alt={cat.title}
                  data-strk-img-id={`home-cat-${cat.id}-img`}
                  data-strk-img={`[home-cat-${cat.id}-desc] [home-cat-${cat.id}-title]`}
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="500"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 3'/%3E"
                  className="w-full h-full object-cover transition group-hover:scale-105"
                />
              </div>
              <div className="p-5">
                <h3 id={`home-cat-${cat.id}-title`} className="text-base font-semibold text-slate-900">
                  {cat.title}
                </h3>
                <p id={`home-cat-${cat.id}-desc`} className="mt-2 text-sm text-slate-600 leading-relaxed">
                  {cat.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            to="/products"
            className="inline-flex items-center gap-1 text-blue-700 font-semibold hover:text-blue-800"
          >
            See all categories <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
