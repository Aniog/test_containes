import { useEffect, useRef } from 'react'
import PageHero from '@/components/PageHero'
import CtaBanner from '@/components/CtaBanner'
import InquiryForm from '@/components/sections/InquiryForm'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const productCategories = [
  {
    id: 'consumer-electronics',
    title: 'Consumer Electronics',
    description:
      'Wireless audio, charging accessories, smart home devices, gadgets and small electronics. We help confirm CE, FCC, RoHS and battery compliance with the supplier before production.',
    hubs: 'Main hubs: Shenzhen, Dongguan',
    examples: [
      'Bluetooth speakers and earbuds',
      'USB-C cables and chargers',
      'Smart plugs and sensors',
      'Power banks',
      'Wearable accessories',
    ],
  },
  {
    id: 'home-kitchen',
    title: 'Home & Kitchen',
    description:
      'Cookware, kitchen tools, storage and small home appliances. We pay attention to food-contact materials and FDA / LFGB requirements during sample review.',
    hubs: 'Main hubs: Yangjiang, Ningbo, Jinhua',
    examples: [
      'Stainless steel cookware',
      'Silicone kitchen tools',
      'Glass storage containers',
      'Cutting boards',
      'Small home appliances',
    ],
  },
  {
    id: 'apparel-textiles',
    title: 'Apparel & Textiles',
    description:
      'Knitwear, woven garments, uniforms, bags and accessories. Tech packs, fabric sourcing, dye matching and on-site inspection of fabric and stitching quality.',
    hubs: 'Main hubs: Shaoxing, Guangzhou',
    examples: [
      'Workwear and uniforms',
      'Promotional T-shirts and hoodies',
      'Bags and backpacks',
      'Caps and hats',
      'Sportswear basics',
    ],
  },
  {
    id: 'promotional-gifts',
    title: 'Promotional & Gifts',
    description:
      'Branded merchandise for marketing, events and corporate gifts. We are based in Yiwu, the world’s largest small commodities market, which keeps MOQs realistic.',
    hubs: 'Main hub: Yiwu',
    examples: [
      'Branded drinkware',
      'Notebooks and stationery',
      'Tote bags and pouches',
      'Tech accessories with logos',
      'Tradeshow giveaways',
    ],
  },
  {
    id: 'industrial-hardware',
    title: 'Industrial & Hardware',
    description:
      'Tools, fittings, fasteners, OEM components and small machinery. We help with engineering drawings, tolerance checks and material certificates.',
    hubs: 'Main hubs: Ningbo, Yongkang',
    examples: [
      'Hand tools and power tool accessories',
      'Pipe fittings and valves',
      'Fasteners and connectors',
      'OEM metal parts',
      'Small machinery and spare parts',
    ],
  },
  {
    id: 'beauty-personal-care',
    title: 'Beauty & Personal Care',
    description:
      'OEM cosmetics, skincare packaging, brushes, applicators and personal care tools. NDA-protected workflows for private-label brands.',
    hubs: 'Main hubs: Guangzhou, Shanghai',
    examples: [
      'OEM skincare formulations',
      'Cosmetic packaging',
      'Makeup brushes',
      'Hair tools and accessories',
      'Personal care devices',
    ],
  },
  {
    id: 'sports-outdoor',
    title: 'Sports & Outdoor',
    description:
      'Fitness, camping, cycling and outdoor equipment. We pay close attention to safety standards and load / drop testing where relevant.',
    hubs: 'Main hubs: Ningbo, Dongguan',
    examples: [
      'Yoga and fitness accessories',
      'Camping gear and tents',
      'Cycling accessories',
      'Outdoor lighting',
      'Water bottles and flasks',
    ],
  },
  {
    id: 'furniture',
    title: 'Furniture',
    description:
      'Wooden, metal and upholstered furniture for retail, hospitality and contract projects. We can manage container consolidation for mixed loads.',
    hubs: 'Main hubs: Foshan, Dongguan',
    examples: [
      'Office furniture',
      'Hospitality furniture',
      'Outdoor furniture',
      'Storage and shelving',
      'Children’s furniture',
    ],
  },
  {
    id: 'auto-parts',
    title: 'Auto Parts',
    description:
      'Aftermarket auto parts and accessories. We help with quality grading, fitment confirmation and documentation for export.',
    hubs: 'Main hubs: Ruian, Hangzhou',
    examples: [
      'Aftermarket body parts',
      'Lighting and electronics',
      'Interior accessories',
      'Maintenance parts',
      'EV accessories',
    ],
  },
]

export default function Products() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <div ref={containerRef}>
      <PageHero
        eyebrow="Products we source"
        title="Categories and example items we work with"
        description="If you don’t see your category here, it doesn’t mean we can’t help — just tell us what you are sourcing and we will let you know honestly if it is a fit."
        breadcrumbs={[{ label: 'Products We Source' }]}
      />

      <section className="bg-white py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {productCategories.map((cat) => (
              <article
                key={cat.id}
                className="flex flex-col overflow-hidden rounded-xl border border-slate-200 bg-white transition-shadow hover:shadow-md"
              >
                <img
                  alt={cat.title}
                  className="aspect-[4/3] w-full object-cover"
                  data-strk-img-id={`product-${cat.id}-img`}
                  data-strk-img={`[product-${cat.id}-title] [product-${cat.id}-desc] china factory`}
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="700"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                />
                <div className="flex flex-1 flex-col p-6">
                  <h3
                    id={`product-${cat.id}-title`}
                    className="text-lg font-semibold text-[#0B2545]"
                  >
                    {cat.title}
                  </h3>
                  <p
                    id={`product-${cat.id}-desc`}
                    className="mt-2 text-sm leading-relaxed text-slate-600"
                  >
                    {cat.description}
                  </p>
                  <p className="mt-3 text-xs font-semibold uppercase tracking-wider text-[#1B6FB8]">
                    {cat.hubs}
                  </p>
                  <ul className="mt-4 space-y-1.5 text-sm text-slate-700">
                    {cat.examples.map((ex) => (
                      <li key={ex} className="flex items-start gap-2">
                        <span className="mt-1.5 h-1.5 w-1.5 flex-none rounded-full bg-[#1B6FB8]" />
                        {ex}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner />
      <InquiryForm />
    </div>
  )
}
