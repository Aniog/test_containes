import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { ArrowRight } from 'lucide-react'
import CTABanner from '../components/home/CTABanner'

const categories = [
  {
    id: 'electronics',
    title: 'Electronics & Components',
    description: 'Consumer electronics, PCBs, LED lighting, cables, batteries, smart home devices, and electronic components.',
    examples: ['LED bulbs & strips', 'Power banks & chargers', 'Smart home devices', 'PCB assemblies', 'Cables & connectors'],
    imgId: 'prod-page-electronics-a1b2',
    titleId: 'prod-page-title-electronics',
    descId: 'prod-page-desc-electronics',
  },
  {
    id: 'furniture',
    title: 'Furniture & Home Decor',
    description: 'Office furniture, home accessories, storage solutions, decorative items, and custom furniture manufacturing.',
    examples: ['Office chairs & desks', 'Shelving & storage', 'Decorative accessories', 'Outdoor furniture', 'Custom wood furniture'],
    imgId: 'prod-page-furniture-c3d4',
    titleId: 'prod-page-title-furniture',
    descId: 'prod-page-desc-furniture',
  },
  {
    id: 'clothing',
    title: 'Clothing & Textiles',
    description: 'Apparel, sportswear, uniforms, workwear, fabric, and private label fashion manufacturing.',
    examples: ['T-shirts & hoodies', 'Sportswear & activewear', 'Corporate uniforms', 'Fabric & yarn', 'Bags & accessories'],
    imgId: 'prod-page-clothing-e5f6',
    titleId: 'prod-page-title-clothing',
    descId: 'prod-page-desc-clothing',
  },
  {
    id: 'machinery',
    title: 'Machinery & Industrial',
    description: 'Industrial equipment, tools, spare parts, hardware, and manufacturing machinery.',
    examples: ['Power tools', 'Industrial machinery', 'Hardware & fasteners', 'Safety equipment', 'Spare parts'],
    imgId: 'prod-page-machinery-g7h8',
    titleId: 'prod-page-title-machinery',
    descId: 'prod-page-desc-machinery',
  },
  {
    id: 'toys',
    title: 'Toys & Baby Products',
    description: 'Toys, educational products, baby gear, and children\'s accessories with safety certification support.',
    examples: ['Educational toys', 'Outdoor play equipment', 'Baby clothing & gear', 'Board games', 'Plush toys'],
    imgId: 'prod-page-toys-i9j0',
    titleId: 'prod-page-title-toys',
    descId: 'prod-page-desc-toys',
  },
  {
    id: 'health',
    title: 'Health & Beauty',
    description: 'Cosmetics, personal care products, supplements, medical devices, and wellness products.',
    examples: ['Skincare products', 'Supplements & vitamins', 'Medical devices', 'Fitness equipment', 'Personal care items'],
    imgId: 'prod-page-health-k1l2',
    titleId: 'prod-page-title-health',
    descId: 'prod-page-desc-health',
  },
  {
    id: 'sports',
    title: 'Sports & Outdoor',
    description: 'Sports equipment, outdoor gear, camping products, and fitness accessories.',
    examples: ['Camping gear', 'Fitness equipment', 'Cycling accessories', 'Water sports gear', 'Team sports equipment'],
    imgId: 'prod-page-sports-m3n4',
    titleId: 'prod-page-title-sports',
    descId: 'prod-page-desc-sports',
  },
  {
    id: 'packaging',
    title: 'Packaging & Printing',
    description: 'Custom packaging, printed materials, labels, boxes, and branded packaging solutions.',
    examples: ['Custom boxes & cartons', 'Printed labels & stickers', 'Retail packaging', 'Bags & pouches', 'Display stands'],
    imgId: 'prod-page-packaging-o5p6',
    titleId: 'prod-page-title-packaging',
    descId: 'prod-page-desc-packaging',
  },
  {
    id: 'auto',
    title: 'Auto Parts',
    description: 'Automotive components, accessories, replacement parts, and vehicle electronics.',
    examples: ['Car accessories', 'Replacement parts', 'LED car lights', 'Tires & wheels', 'Car electronics'],
    imgId: 'prod-page-auto-q7r8',
    titleId: 'prod-page-title-auto',
    descId: 'prod-page-desc-auto',
  },
]

export default function Products() {
  const containerRef = useRef(null)

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current)
    })
    return () => window.cancelAnimationFrame(frameId)
  }, [])

  return (
    <div ref={containerRef}>
      {/* Header */}
      <div className="bg-[#1A3C6E] py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block text-[#D4A017] text-xs font-semibold uppercase tracking-widest mb-3">Product Categories</span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Products We Source</h1>
          <p className="text-[#CBD5E0] text-lg max-w-2xl mx-auto">
            We have established supplier networks across a wide range of product categories. Don't see yours? Contact us — we likely can help.
          </p>
        </div>
      </div>

      {/* Categories Grid */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {categories.map((cat) => (
              <div key={cat.id} className="bg-white rounded-xl border border-[#E2E8F0] overflow-hidden hover:shadow-lg transition-shadow duration-300 group">
                <div className="relative h-48 overflow-hidden bg-[#EBF2FA]">
                  <img
                    alt={cat.title}
                    data-strk-img-id={cat.imgId}
                    data-strk-img={`[${cat.descId}] [${cat.titleId}]`}
                    data-strk-img-ratio="3x2"
                    data-strk-img-width="600"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 id={cat.titleId} className="text-lg font-semibold text-[#1A1A2E] mb-2">{cat.title}</h3>
                  <p id={cat.descId} className="text-[#4A5568] text-sm leading-relaxed mb-4">{cat.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {cat.examples.map((ex) => (
                      <span key={ex} className="bg-[#EBF2FA] text-[#1A3C6E] text-xs px-2.5 py-1 rounded-full">{ex}</span>
                    ))}
                  </div>
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-1 text-[#C0392B] font-semibold text-sm hover:gap-2 transition-all"
                  >
                    Source This Category
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Not listed */}
          <div className="mt-12 bg-[#F7F9FC] rounded-2xl p-8 md:p-12 text-center border border-[#E2E8F0]">
            <h3 className="text-2xl font-bold text-[#1A1A2E] mb-3">Don't See Your Product?</h3>
            <p className="text-[#4A5568] mb-6 max-w-xl mx-auto">
              We source a wide variety of products beyond the categories listed above. Send us your requirements and we'll let you know if we can help.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-[#C0392B] hover:bg-[#A93226] text-white font-semibold px-8 py-3 rounded-lg transition-colors duration-200"
            >
              Submit Your Inquiry
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      <CTABanner />
    </div>
  )
}
