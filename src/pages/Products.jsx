import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { ArrowRight } from 'lucide-react'

const categories = [
  {
    id: 'electronics',
    title: 'Electronics & Components',
    description: 'Consumer electronics, PCBs, LED products, cables, connectors, smart devices, and electronic accessories.',
    examples: ['Bluetooth speakers', 'USB cables', 'LED lighting', 'Smart home devices', 'Power banks'],
    titleId: 'prod-cat-electronics-title',
    descId: 'prod-cat-electronics-desc',
    imgId: 'prod-cat-electronics-img-1a2b3c',
  },
  {
    id: 'textiles',
    title: 'Textiles & Apparel',
    description: 'Clothing, uniforms, sportswear, fabrics, home textiles, bags, and fashion accessories.',
    examples: ['Custom uniforms', 'Sportswear', 'Bed linens', 'Promotional bags', 'Scarves & accessories'],
    titleId: 'prod-cat-textiles-title',
    descId: 'prod-cat-textiles-desc',
    imgId: 'prod-cat-textiles-img-4d5e6f',
  },
  {
    id: 'furniture',
    title: 'Furniture & Home Goods',
    description: 'Office furniture, home décor, kitchenware, bathroom fixtures, storage solutions, and garden products.',
    examples: ['Office desks & chairs', 'Kitchen utensils', 'Bathroom vanities', 'Storage racks', 'Outdoor furniture'],
    titleId: 'prod-cat-furniture-title',
    descId: 'prod-cat-furniture-desc',
    imgId: 'prod-cat-furniture-img-7g8h9i',
  },
  {
    id: 'machinery',
    title: 'Machinery & Industrial Parts',
    description: 'CNC parts, molds, industrial equipment, auto parts, hardware, and precision components.',
    examples: ['CNC machined parts', 'Injection molds', 'Auto components', 'Fasteners & hardware', 'Pumps & valves'],
    titleId: 'prod-cat-machinery-title',
    descId: 'prod-cat-machinery-desc',
    imgId: 'prod-cat-machinery-img-1j2k3l',
  },
  {
    id: 'packaging',
    title: 'Packaging & Printing',
    description: 'Custom packaging, corrugated boxes, labels, shopping bags, display stands, and promotional materials.',
    examples: ['Custom gift boxes', 'Product labels', 'Paper bags', 'Display stands', 'Blister packaging'],
    titleId: 'prod-cat-packaging-title',
    descId: 'prod-cat-packaging-desc',
    imgId: 'prod-cat-packaging-img-4m5n6o',
  },
  {
    id: 'health-beauty',
    title: 'Health & Beauty',
    description: 'Cosmetics, skincare, supplements, medical devices, personal care products, and beauty tools.',
    examples: ['Skincare products', 'Makeup brushes', 'Essential oils', 'Massage devices', 'Supplement packaging'],
    titleId: 'prod-cat-health-title',
    descId: 'prod-cat-health-desc',
    imgId: 'prod-cat-health-img-7p8q9r',
  },
  {
    id: 'toys-gifts',
    title: 'Toys & Promotional Gifts',
    description: 'Plush toys, educational toys, promotional items, corporate gifts, and novelty products.',
    examples: ['Plush toys', 'Puzzles & games', 'Branded merchandise', 'Corporate gift sets', 'Keychains & badges'],
    titleId: 'prod-cat-toys-title',
    descId: 'prod-cat-toys-desc',
    imgId: 'prod-cat-toys-img-1s2t3u',
  },
  {
    id: 'construction',
    title: 'Building & Construction',
    description: 'Building materials, tiles, sanitary ware, doors, windows, steel structures, and solar panels.',
    examples: ['Ceramic tiles', 'Steel structures', 'Solar panels', 'PVC pipes', 'Glass panels'],
    titleId: 'prod-cat-construction-title',
    descId: 'prod-cat-construction-desc',
    imgId: 'prod-cat-construction-img-4v5w6x',
  },
]

export default function Products() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <div ref={containerRef}>
      <section className="bg-brand-navy py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-5xl font-bold text-white tracking-tight">
              Products We Source
            </h1>
            <p className="mt-4 text-lg text-slate-300 leading-relaxed">
              We source across all major product categories from China's manufacturing hubs. If it's made in China, we can find it for you.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {categories.map((cat) => (
              <div key={cat.id} className="bg-white rounded-xl border border-brand-border overflow-hidden hover:shadow-lg transition-shadow">
                <img
                  alt={cat.title}
                  data-strk-img-id={cat.imgId}
                  data-strk-img={`[${cat.descId}] [${cat.titleId}]`}
                  data-strk-img-ratio="16x9"
                  data-strk-img-width="700"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 9'/%3E"
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h2 id={cat.titleId} className="text-xl font-bold text-brand-navy mb-2">{cat.title}</h2>
                  <p id={cat.descId} className="text-slate-600 text-sm leading-relaxed mb-4">{cat.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {cat.examples.map((example, i) => (
                      <span key={i} className="text-xs bg-brand-gray text-brand-slate px-2.5 py-1 rounded-full border border-brand-border">
                        {example}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-brand-gray">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-navy tracking-tight">
            Don't See Your Product Category?
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            We source virtually any product manufactured in China. Contact us with your specific requirements.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center mt-8 bg-brand-blue text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            Send Us Your Requirements <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  )
}
