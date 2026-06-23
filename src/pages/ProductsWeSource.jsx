import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import PageHero from '@/components/PageHero'
import InquiryForm from '@/components/InquiryForm'
import { MapPin } from 'lucide-react'

const PRODUCTS = [
  {
    id: 'consumer-electronics',
    title: 'Consumer Electronics',
    desc: 'Bluetooth audio, wearables, small appliances, accessories, IoT and smart home devices.',
    clusters: ['Shenzhen', 'Dongguan', 'Huizhou'],
    examples: ['TWS earbuds', 'Bluetooth speakers', 'Power banks', 'Smart plugs', 'LED lighting'],
    imgId: 'pp-elec-aa11',
  },
  {
    id: 'home-kitchen',
    title: 'Home & Kitchen',
    desc: 'Cookware, storage, household goods and small kitchen appliances for retail and DTC brands.',
    clusters: ['Ningbo', 'Yiwu', 'Guangdong'],
    examples: ['Cookware sets', 'Food storage', 'Coffee accessories', 'Small appliances'],
    imgId: 'pp-home-bb22',
  },
  {
    id: 'apparel-textiles',
    title: 'Apparel & Textiles',
    desc: 'Knit and woven garments, accessories, bags and home textiles with size grading and labeling support.',
    clusters: ['Guangzhou', 'Hangzhou', 'Suzhou'],
    examples: ['T-shirts & hoodies', 'Activewear', 'Outerwear', 'Caps & accessories', 'Bags'],
    imgId: 'pp-apparel-cc33',
  },
  {
    id: 'industrial',
    title: 'Industrial Machinery & Components',
    desc: 'Components, machinery parts, tools and equipment with engineering support and CE/RoHS compliance.',
    clusters: ['Ningbo', 'Wenzhou', 'Suzhou'],
    examples: ['Hardware', 'Tooling', 'Hydraulic parts', 'Motors', 'PCBA'],
    imgId: 'pp-industrial-dd44',
  },
  {
    id: 'auto-parts',
    title: 'Auto Parts & Accessories',
    desc: 'Aftermarket parts, lighting, interior and exterior accessories, and EV-related components.',
    clusters: ['Wenzhou', 'Ruian', 'Guangzhou'],
    examples: ['Lighting', 'Brake parts', 'Sensors', 'Cabin accessories', 'EV chargers'],
    imgId: 'pp-auto-ee55',
  },
  {
    id: 'gifts',
    title: 'Promotional Gifts & Trade-show Merch',
    desc: 'Branded merchandise, giveaways, packaging and printing — Yiwu market specialty with low-MOQ options.',
    clusters: ['Yiwu', 'Wenzhou', 'Shantou'],
    examples: ['Branded mugs', 'Tote bags', 'Notebooks', 'Custom packaging', 'Lanyards'],
    imgId: 'pp-gifts-ff66',
  },
  {
    id: 'furniture',
    title: 'Furniture',
    desc: 'Wood, metal and upholstered furniture from Foshan and surrounding clusters with container-load optimization.',
    clusters: ['Foshan', 'Dongguan', 'Bazhou'],
    examples: ['Sofas', 'Dining sets', 'Office desks', 'Outdoor furniture'],
    imgId: 'pp-furniture-aa77',
  },
  {
    id: 'beauty',
    title: 'Beauty & Personal Care',
    desc: 'Cosmetic accessories, packaging and personal care devices with documentation for regulated markets.',
    clusters: ['Guangzhou', 'Yiwu', 'Shenzhen'],
    examples: ['Makeup brushes', 'Cosmetic packaging', 'Hair tools', 'Skincare devices'],
    imgId: 'pp-beauty-bb88',
  },
  {
    id: 'sports',
    title: 'Sports & Outdoors',
    desc: 'Fitness equipment, outdoor gear, bags and travel accessories with safety testing options.',
    clusters: ['Ningbo', 'Quanzhou', 'Yongkang'],
    examples: ['Yoga & fitness', 'Camping gear', 'Travel bags', 'Cycling accessories'],
    imgId: 'pp-sports-cc99',
  },
]

export default function ProductsWeSource() {
  const containerRef = useRef(null)
  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <>
      <PageHero
        eyebrow="Products We Source"
        title="Categories where we have factory relationships and category-specific QC checklists"
        description="If your product is not listed here, it does not mean we cannot source it — please send us the brief and we will tell you honestly whether we are the right fit."
        breadcrumbs={[{ label: 'Products We Source' }]}
      />

      <section ref={containerRef} className="py-16 lg:py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {PRODUCTS.map((p) => (
              <article key={p.id} className="bg-white rounded-2xl border border-line overflow-hidden shadow-sm hover:shadow-md transition flex flex-col">
                <div className="aspect-[3/2] bg-surface-2 overflow-hidden">
                  <img
                    alt={p.title}
                    className="w-full h-full object-cover"
                    data-strk-img-id={p.imgId}
                    data-strk-img={`[pp-${p.id}-title] [pp-${p.id}-desc]`}
                    data-strk-img-ratio="3x2"
                    data-strk-img-width="800"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 3 2'/%3E"
                  />
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <h3 id={`pp-${p.id}-title`} className="font-semibold text-brand text-xl">{p.title}</h3>
                  <p id={`pp-${p.id}-desc`} className="mt-2 text-sm text-ink-soft leading-relaxed">{p.desc}</p>

                  <div className="mt-4">
                    <div className="text-xs font-bold uppercase tracking-wider text-brand mb-1.5">Main clusters</div>
                    <div className="flex flex-wrap gap-1.5">
                      {p.clusters.map((c) => (
                        <span key={c} className="inline-flex items-center gap-1 text-xs bg-surface-2 text-brand px-2 py-0.5 rounded">
                          <MapPin className="w-3 h-3" /> {c}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mt-4">
                    <div className="text-xs font-bold uppercase tracking-wider text-brand mb-1.5">Examples</div>
                    <div className="flex flex-wrap gap-1.5">
                      {p.examples.map((e) => (
                        <span key={e} className="text-xs px-2 py-0.5 rounded border border-line text-ink-soft bg-white">
                          {e}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <InquiryForm />
    </>
  )
}
