import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { ChevronRight } from 'lucide-react'
import { CTAButton, SectionHeader } from '@/components/UI'

const categories = [
  {
    id: 'electronics',
    titleId: 'prod-title-electronics',
    descId: 'prod-desc-electronics',
    imgId: 'prod-img-electronics-3a7f2b',
    title: 'Electronics & Components',
    desc: 'LED lighting, circuit boards, cables, power supplies, consumer electronics, smart home devices, and electronic components.',
    hubs: 'Shenzhen, Dongguan, Guangzhou',
    examples: ['LED lights', 'PCBs', 'Cables & connectors', 'Smart home devices', 'Power banks', 'Sensors'],
  },
  {
    id: 'furniture',
    titleId: 'prod-title-furniture',
    descId: 'prod-desc-furniture',
    imgId: 'prod-img-furniture-b4c9d1',
    title: 'Furniture & Home Decor',
    desc: 'Office furniture, bedroom furniture, living room pieces, decorative items, and custom OEM furniture for retail and hospitality.',
    hubs: 'Foshan, Guangzhou, Shunde',
    examples: ['Office chairs', 'Tables & desks', 'Sofas', 'Decorative items', 'Lighting fixtures', 'Storage solutions'],
  },
  {
    id: 'textiles',
    titleId: 'prod-title-textiles',
    descId: 'prod-desc-textiles',
    imgId: 'prod-img-textiles-e2f5a8',
    title: 'Clothing & Textiles',
    desc: 'Garments, sportswear, workwear, uniforms, fabrics, and accessories. We work with factories holding OEKO-TEX and GOTS certifications.',
    hubs: 'Guangzhou, Hangzhou, Keqiao',
    examples: ['T-shirts & hoodies', 'Sportswear', 'Workwear', 'Uniforms', 'Fabrics', 'Bags & accessories'],
  },
  {
    id: 'machinery',
    titleId: 'prod-title-machinery',
    descId: 'prod-desc-machinery',
    imgId: 'prod-img-machinery-c7d3e6',
    title: 'Machinery & Industrial',
    desc: 'Industrial equipment, tools, hardware, pumps, motors, and manufacturing machinery for various industries.',
    hubs: 'Shanghai, Ningbo, Wenzhou',
    examples: ['Industrial pumps', 'Electric motors', 'Hand tools', 'Hardware', 'Valves', 'Conveyor systems'],
  },
  {
    id: 'toys',
    titleId: 'prod-title-toys',
    descId: 'prod-desc-toys',
    imgId: 'prod-img-toys-d8a1f4',
    title: 'Toys & Baby Products',
    desc: 'Plastic toys, wooden toys, educational toys, baby gear, and children\'s products. We verify EN71, ASTM, and CPSC compliance.',
    hubs: 'Shantou, Dongguan, Yiwu',
    examples: ['Plastic toys', 'Wooden toys', 'Educational toys', 'Baby gear', 'Outdoor play', 'Puzzles'],
  },
  {
    id: 'health',
    titleId: 'prod-title-health',
    descId: 'prod-desc-health',
    imgId: 'prod-img-health-f3b6c2',
    title: 'Health & Beauty',
    desc: 'Personal care products, cosmetics, wellness devices, medical supplies, and health equipment for retail and professional use.',
    hubs: 'Guangzhou, Shanghai, Hangzhou',
    examples: ['Skincare products', 'Hair care', 'Wellness devices', 'Medical supplies', 'Supplements packaging', 'Beauty tools'],
  },
  {
    id: 'sports',
    titleId: 'prod-title-sports',
    descId: 'prod-desc-sports',
    imgId: 'prod-img-sports-a5e7d9',
    title: 'Sports & Outdoor',
    desc: 'Fitness equipment, outdoor gear, camping products, cycling accessories, and sporting goods for retail and wholesale.',
    hubs: 'Xiamen, Ningbo, Guangzhou',
    examples: ['Fitness equipment', 'Camping gear', 'Cycling accessories', 'Water sports', 'Team sports', 'Yoga products'],
  },
  {
    id: 'packaging',
    titleId: 'prod-title-packaging',
    descId: 'prod-desc-packaging',
    imgId: 'prod-img-packaging-b2c4f7',
    title: 'Packaging & Printing',
    desc: 'Custom packaging, corrugated boxes, paper bags, labels, and printed materials for retail, e-commerce, and industrial use.',
    hubs: 'Shenzhen, Guangzhou, Dongguan',
    examples: ['Custom boxes', 'Paper bags', 'Labels & stickers', 'Retail packaging', 'Gift boxes', 'Printed materials'],
  },
  {
    id: 'auto',
    titleId: 'prod-title-auto',
    descId: 'prod-desc-auto',
    imgId: 'prod-img-auto-c9d1e3',
    title: 'Auto Parts',
    desc: 'Automotive components, accessories, tools, and aftermarket parts for passenger vehicles and commercial vehicles.',
    hubs: 'Guangzhou, Wenzhou, Taizhou',
    examples: ['Body parts', 'Lighting', 'Interior accessories', 'Filters', 'Brakes', 'Engine components'],
  },
  {
    id: 'kitchenware',
    titleId: 'prod-title-kitchenware',
    descId: 'prod-desc-kitchenware',
    imgId: 'prod-img-kitchenware-e4f6a2',
    title: 'Kitchenware & Housewares',
    desc: 'Cookware, kitchen tools, tableware, storage solutions, and household products for retail, hospitality, and e-commerce.',
    hubs: 'Guangdong, Zhejiang, Jiangsu',
    examples: ['Cookware sets', 'Kitchen tools', 'Tableware', 'Storage containers', 'Small appliances', 'Cleaning products'],
  },
]

export default function ProductsPage() {
  const containerRef = useRef(null)

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current)
    })
    return () => window.cancelAnimationFrame(frameId)
  }, [])

  return (
    <div ref={containerRef} className="pt-16 lg:pt-20">
      {/* Hero */}
      <section className="bg-primary py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block text-accent font-semibold text-sm uppercase tracking-widest mb-4">Product Categories</span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Products We Source from China</h1>
          <p className="text-blue-200 text-lg max-w-2xl mx-auto mb-8">
            We source across a wide range of product categories from China's major manufacturing regions. If your product is not listed, contact us — we likely cover it.
          </p>
          <CTAButton>Request a Sourcing Quote</CTAButton>
        </div>
      </section>

      {/* Categories grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="What We Source"
            title="Product Categories"
            subtitle="Each category is supported by our network of verified manufacturers in the relevant manufacturing hubs."
            center
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {categories.map((cat) => (
              <div key={cat.id} className="bg-white border border-bordercolor rounded-xl overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-[16/7] overflow-hidden">
                  <img
                    data-strk-img-id={cat.imgId}
                    data-strk-img={`[${cat.descId}] [${cat.titleId}] China manufacturing factory`}
                    data-strk-img-ratio="16x9"
                    data-strk-img-width="700"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={cat.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 id={cat.titleId} className="text-xl font-bold text-darktext mb-2">{cat.title}</h3>
                  <p id={cat.descId} className="text-mutedtext text-sm leading-relaxed mb-4">{cat.desc}</p>
                  <div className="mb-4">
                    <span className="text-xs font-semibold text-primary uppercase tracking-wide">Manufacturing Hubs: </span>
                    <span className="text-xs text-mutedtext">{cat.hubs}</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {cat.examples.map((ex) => (
                      <span key={ex} className="bg-lightblue text-primary text-xs px-3 py-1 rounded-full font-medium">{ex}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-accent">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Don't See Your Product Category?</h2>
          <p className="text-orange-100 mb-8">We source a wide range of products beyond those listed. Contact us with your requirements and we will advise on feasibility.</p>
          <Link to="/contact" className="inline-block bg-white text-accent px-10 py-4 rounded-lg font-bold hover:bg-orange-50 transition-colors">
            Contact Us
          </Link>
        </div>
      </section>
    </div>
  )
}
