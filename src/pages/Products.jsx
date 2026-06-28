import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle2 } from 'lucide-react'

const categories = [
  {
    name: 'Electronics & Components',
    description:
      'PCBs, cables, chargers, consumer electronics, semiconductors, and IoT devices. We source from factories in Shenzhen, Dongguan, and the Pearl River Delta.',
    capabilities: ['PCB Assembly', 'Cable & Connector Manufacturing', 'Consumer Electronics', 'Semiconductor Sourcing'],
    imgId: 'products-electronics-1a2b3c',
  },
  {
    name: 'Machinery & Industrial',
    description:
      'Custom machined parts, tooling, industrial equipment, automation components, and heavy machinery spare parts from specialized manufacturing zones.',
    capabilities: ['CNC Machining', 'Sheet Metal Fabrication', 'Industrial Automation Parts', 'Tooling & Dies'],
    imgId: 'products-machinery-2b3c4d',
  },
  {
    name: 'Textiles & Apparel',
    description:
      'Fabrics, garments, bags, and accessories from factories in Guangdong, Zhejiang, and Jiangsu with experience exporting to EU and US markets.',
    capabilities: ['OEM Garment Production', 'Fabric Sourcing', 'Bag & Accessory Manufacturing', 'Custom Printing & Embroidery'],
    imgId: 'products-textiles-3c4d5e',
  },
  {
    name: 'Home & Furniture',
    description:
      'Indoor and outdoor furniture, lighting, kitchenware, and home decor. We work with factories certified for BSCI, FSC, and other market requirements.',
    capabilities: ['Solid Wood & MDF Furniture', 'Metal & Upholstery Furniture', 'Lighting Fixtures', 'Kitchenware & Tableware'],
    imgId: 'products-furniture-4d5e6f',
  },
  {
    name: 'Packaging Materials',
    description:
      'Custom boxes, bags, labels, bottles, and retail packaging. From design to mass production with focus on sustainability and cost efficiency.',
    capabilities: ['Paper & Cardboard Packaging', 'Plastic Bottles & Containers', 'Flexible Packaging', 'Retail Display Boxes'],
    imgId: 'products-packaging-5e6f7g',
  },
  {
    name: 'Automotive Parts',
    description:
      'Replacement parts, accessories, and custom components for the automotive aftermarket. We verify IATF 16949 and other relevant certifications.',
    capabilities: ['Aftermarket Replacement Parts', 'Auto Accessories', 'Rubber & Plastic Components', 'Electrical Auto Parts'],
    imgId: 'products-automotive-6f7g8h',
  },
  {
    name: 'Tools & Hardware',
    description:
      'Hand tools, power tools, fasteners, hinges, locks, and construction hardware sourced from specialized industrial clusters in Zhejiang and Jiangsu.',
    capabilities: ['Hand & Power Tools', 'Fasteners & Fittings', 'Door & Cabinet Hardware', 'Construction Hardware'],
    imgId: 'products-tools-7g8h9i',
  },
  {
    name: 'Consumer Goods',
    description:
      'Toys, sports equipment, personal care items, pet products, and promotional merchandise with full compliance support for target market regulations.',
    capabilities: ['Toys & Games', 'Sports & Fitness Equipment', 'Personal Care Products', 'Pet Supplies'],
    imgId: 'products-consumer-8h9i0j',
  },
]

export default function Products() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <div ref={containerRef}>
      {/* Header */}
      <section className="bg-slate-900 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-semibold uppercase tracking-wider text-blue-400 mb-2 block">
            Industries
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Products We Source
          </h1>
          <p className="text-lg text-slate-300 max-w-2xl">
            We have experience sourcing across a broad range of product categories. If your product is not listed, contact us — we likely have relevant experience.
          </p>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {categories.map((cat) => (
              <div
                key={cat.name}
                className="group flex flex-col sm:flex-row gap-5 bg-surface rounded-lg border border-border-light overflow-hidden hover:shadow-md transition-shadow"
              >
                <div className="sm:w-48 shrink-0 overflow-hidden">
                  <img
                    data-strk-img-id={cat.imgId}
                    data-strk-img={`[products-page-${cat.name.toLowerCase().replace(/[^a-z0-9]+/g, '-')}-title]`}
                    data-strk-img-ratio="1x1"
                    data-strk-img-width="400"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={cat.name}
                    className="w-full h-48 sm:h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-5 flex flex-col justify-center">
                  <h3
                    id={`products-page-${cat.name.toLowerCase().replace(/[^a-z0-9]+/g, '-')}-title`}
                    className="text-lg font-bold text-slate-900 mb-2"
                  >
                    {cat.name}
                  </h3>
                  <p className="text-sm text-slate-500 leading-relaxed mb-3">
                    {cat.description}
                  </p>
                  <ul className="space-y-1">
                    {cat.capabilities.map((cap) => (
                      <li key={cap} className="flex items-center gap-1.5 text-xs text-slate-600">
                        <CheckCircle2 className="w-3.5 h-3.5 text-green-600 shrink-0" />
                        {cap}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-blue-700">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
            Do Not See Your Product Category?
          </h2>
          <p className="text-blue-100 mb-8">
            We have sourced thousands of unique products. Share your requirements and we will confirm if we can help.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-white text-blue-700 font-semibold rounded-md hover:bg-blue-50 transition-colors"
          >
            Submit Your Product Inquiry <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  )
}
