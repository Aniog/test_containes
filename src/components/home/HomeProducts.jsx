import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import SectionHeader from '@/components/SectionHeader'

const PRODUCTS = [
  {
    id: 'consumer-electronics',
    title: 'Consumer Electronics',
    desc: 'Bluetooth audio, small appliances, accessories, IoT and smart home devices from Shenzhen, Dongguan and Huizhou.',
    imgId: 'prod-consumer-elec-aa11b2',
  },
  {
    id: 'home-kitchen',
    title: 'Home & Kitchen',
    desc: 'Cookware, storage, household goods, small kitchen appliances. Ningbo, Yiwu and Guangdong supplier clusters.',
    imgId: 'prod-home-kitchen-bb22c3',
  },
  {
    id: 'apparel-textiles',
    title: 'Apparel & Textiles',
    desc: 'Knit and woven garments, accessories, bags. Cut-and-sew factories with size grading and labeling support.',
    imgId: 'prod-apparel-cc33d4',
  },
  {
    id: 'industrial',
    title: 'Industrial Machinery',
    desc: 'Components, machinery parts, tools, and equipment. CE / RoHS compliant suppliers with engineering support.',
    imgId: 'prod-industrial-dd44e5',
  },
  {
    id: 'auto-parts',
    title: 'Auto Parts & Accessories',
    desc: 'Aftermarket parts, lighting, interior and exterior accessories, EV-related components.',
    imgId: 'prod-auto-ee55f6',
  },
  {
    id: 'gifts',
    title: 'Promotional Gifts',
    desc: 'Branded merchandise, trade-show giveaways, packaging and printing — Yiwu market specialty.',
    imgId: 'prod-gifts-ff66a7',
  },
  {
    id: 'furniture',
    title: 'Furniture',
    desc: 'Wood, metal and upholstered furniture from Foshan and surrounding clusters. Container-load optimization.',
    imgId: 'prod-furniture-aa77b8',
  },
  {
    id: 'beauty',
    title: 'Beauty & Personal Care',
    desc: 'Cosmetic accessories, packaging, and personal care devices with documentation for regulated markets.',
    imgId: 'prod-beauty-bb88c9',
  },
  {
    id: 'sports',
    title: 'Sports & Outdoors',
    desc: 'Fitness equipment, outdoor gear, bags and travel accessories with rigorous safety testing options.',
    imgId: 'prod-sports-cc99da',
  },
]

export default function HomeProducts() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section ref={containerRef} className="py-16 lg:py-24 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Products We Source"
          title="Categories we know in depth"
          description="We focus on categories where we have factory relationships and category-specific QC checklists. If your product is not listed, ask us — we may still be a fit."
        />

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {PRODUCTS.map((p) => (
            <article
              key={p.id}
              className="group bg-white rounded-2xl border border-line overflow-hidden shadow-sm hover:shadow-md transition"
            >
              <div className="aspect-[3/2] overflow-hidden bg-surface-2">
                <img
                  alt={p.title}
                  className="w-full h-full object-cover group-hover:scale-[1.03] transition"
                  data-strk-img-id={p.imgId}
                  data-strk-img={`[prod-${p.id}-title] [prod-${p.id}-desc]`}
                  data-strk-img-ratio="3x2"
                  data-strk-img-width="800"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 3 2'/%3E"
                />
              </div>
              <div className="p-5">
                <h3 id={`prod-${p.id}-title`} className="font-semibold text-brand text-lg">{p.title}</h3>
                <p id={`prod-${p.id}-desc`} className="mt-2 text-sm text-ink-soft leading-relaxed">{p.desc}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            to="/products"
            className="inline-flex items-center gap-2 text-accent font-semibold hover:underline"
          >
            See full product capabilities →
          </Link>
        </div>
      </div>
    </section>
  )
}
