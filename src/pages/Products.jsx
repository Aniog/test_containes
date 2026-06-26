import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { ArrowRight } from 'lucide-react'

const categories = [
  {
    name: 'Electronics & Components',
    description: 'Consumer electronics, PCBs, LED lighting, sensors, cables, connectors, smart home devices, and electronic accessories.',
    items: ['Bluetooth speakers & headphones', 'LED lighting & fixtures', 'PCBs & electronic components', 'Smart home devices', 'Cables & connectors', 'Power banks & chargers'],
    imgId: 'prod-page-electronics-f1g2h3',
    titleId: 'prod-page-electronics-title',
    descId: 'prod-page-electronics-desc',
  },
  {
    name: 'Home & Garden',
    description: 'Furniture, kitchenware, home textiles, garden tools, storage solutions, and home decor items.',
    items: ['Indoor & outdoor furniture', 'Kitchen utensils & cookware', 'Home textiles & bedding', 'Garden tools & equipment', 'Storage & organization', 'Home decor & accessories'],
    imgId: 'prod-page-home-i4j5k6',
    titleId: 'prod-page-home-title',
    descId: 'prod-page-home-desc',
  },
  {
    name: 'Apparel & Textiles',
    description: 'Clothing, fabrics, bags, shoes, sportswear, and fashion accessories for men, women, and children.',
    items: ['Casual & formal wear', 'Sportswear & activewear', 'Bags & luggage', 'Footwear', 'Fabrics & textiles', 'Fashion accessories'],
    imgId: 'prod-page-apparel-l7m8n9',
    titleId: 'prod-page-apparel-title',
    descId: 'prod-page-apparel-desc',
  },
  {
    name: 'Industrial & Machinery',
    description: 'Auto parts, CNC machined parts, molds, pumps, valves, hardware, and industrial equipment.',
    items: ['Auto parts & components', 'CNC machined parts', 'Injection molds', 'Pumps & valves', 'Hardware & fasteners', 'Industrial equipment'],
    imgId: 'prod-page-industrial-o1p2q3',
    titleId: 'prod-page-industrial-title',
    descId: 'prod-page-industrial-desc',
  },
  {
    name: 'Health & Beauty',
    description: 'Cosmetics, skincare products, supplements, medical devices, and beauty packaging.',
    items: ['Skincare & cosmetics', 'Dietary supplements', 'Medical devices', 'Beauty tools', 'Packaging & containers', 'Personal care products'],
    imgId: 'prod-page-health-r4s5t6',
    titleId: 'prod-page-health-title',
    descId: 'prod-page-health-desc',
  },
  {
    name: 'Building Materials',
    description: 'Tiles, sanitary ware, doors, windows, plumbing fixtures, and construction materials.',
    items: ['Ceramic & porcelain tiles', 'Sanitary ware & bathroom fixtures', 'Doors & windows', 'Plumbing & piping', 'Flooring materials', 'Construction hardware'],
    imgId: 'prod-page-building-u7v8w9',
    titleId: 'prod-page-building-title',
    descId: 'prod-page-building-desc',
  },
  {
    name: 'Packaging & Printing',
    description: 'Custom packaging, labels, printing materials, and promotional products.',
    items: ['Custom boxes & cartons', 'Labels & stickers', 'Printing materials', 'Promotional products', 'Gift packaging', 'Eco-friendly packaging'],
    imgId: 'prod-page-packaging-x1y2z3',
    titleId: 'prod-page-packaging-title',
    descId: 'prod-page-packaging-desc',
  },
  {
    name: 'Sports & Outdoors',
    description: 'Sporting goods, outdoor equipment, fitness accessories, and recreational products.',
    items: ['Fitness equipment', 'Outdoor gear', 'Camping equipment', 'Water sports gear', 'Team sports equipment', 'Cycling accessories'],
    imgId: 'prod-page-sports-a4b5c6',
    titleId: 'prod-page-sports-title',
    descId: 'prod-page-sports-desc',
  },
]

export default function Products() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <div ref={containerRef}>
      <section className="bg-navy py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl md:text-5xl font-extrabold text-white mb-4">Products We Source</h1>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            We source across diverse industries. If it's made in China, we can help you find the right supplier.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {categories.map((cat) => (
              <div
                key={cat.name}
                className="group rounded-xl overflow-hidden border border-border-gray bg-white hover:shadow-lg transition-all duration-300"
              >
                <div className="relative h-52 overflow-hidden bg-section-bg">
                  <img
                    alt={cat.name}
                    data-strk-img-id={cat.imgId}
                    data-strk-img={`[${cat.descId}] [${cat.titleId}]`}
                    data-strk-img-ratio="16x9"
                    data-strk-img-width="800"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 id={cat.titleId} className="text-xl font-bold text-navy mb-2">{cat.name}</h3>
                  <p id={cat.descId} className="text-muted-text text-sm leading-relaxed mb-4">{cat.description}</p>
                  <div className="grid grid-cols-2 gap-2">
                    {cat.items.map((item) => (
                      <div key={item} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-sky-blue rounded-full flex-shrink-0" />
                        <span className="text-body-text text-xs">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-section-bg">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-navy mb-4">Don't See Your Product Category?</h2>
          <p className="text-muted-text text-lg mb-8">
            We source many more product types than listed here. Tell us what you need and we will find the right supplier.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-sky-blue text-white px-8 py-4 rounded-lg font-semibold hover:bg-sky-blue-dark transition-colors"
          >
            Tell Us What You Need
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  )
}
