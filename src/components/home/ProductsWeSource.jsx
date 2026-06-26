import { Link } from 'react-router-dom'
import SectionHeader from '@/components/shared/SectionHeader'

const categories = [
  {
    name: 'Electronics & Components',
    items: 'Consumer electronics, PCBs, LED lighting, sensors, cables & connectors',
    imgId: 'prod-electronics-d4e5f6',
    titleId: 'prod-electronics-title',
    descId: 'prod-electronics-desc',
  },
  {
    name: 'Home & Garden',
    items: 'Furniture, kitchenware, home textiles, garden tools, storage solutions',
    imgId: 'prod-home-g7h8i9',
    titleId: 'prod-home-title',
    descId: 'prod-home-desc',
  },
  {
    name: 'Apparel & Textiles',
    items: 'Clothing, fabrics, bags, shoes, sportswear, accessories',
    imgId: 'prod-apparel-j1k2l3',
    titleId: 'prod-apparel-title',
    descId: 'prod-apparel-desc',
  },
  {
    name: 'Industrial & Machinery',
    items: 'Auto parts, CNC parts, molds, pumps, valves, hardware',
    imgId: 'prod-industrial-m4n5o6',
    titleId: 'prod-industrial-title',
    descId: 'prod-industrial-desc',
  },
  {
    name: 'Health & Beauty',
    items: 'Cosmetics, skincare, supplements, medical devices, packaging',
    imgId: 'prod-health-p7q8r9',
    titleId: 'prod-health-title',
    descId: 'prod-health-desc',
  },
  {
    name: 'Building Materials',
    items: 'Tiles, sanitary ware, doors, windows, plumbing, fixtures',
    imgId: 'prod-building-s1t2u3',
    titleId: 'prod-building-title',
    descId: 'prod-building-desc',
  },
]

export default function ProductsWeSource() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          subtitle="Products We Source"
          title="Wide Range of Product Categories"
          description="We source across diverse industries. If it's made in China, we can help you find the right supplier."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {categories.map((cat) => (
            <div
              key={cat.name}
              className="group rounded-xl overflow-hidden border border-border-gray bg-white hover:shadow-lg transition-all duration-300"
            >
              <div className="relative h-48 overflow-hidden bg-section-bg">
                <img
                  alt={cat.name}
                  data-strk-img-id={cat.imgId}
                  data-strk-img={`[${cat.descId}] [${cat.titleId}]`}
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-5">
                <h3 id={cat.titleId} className="text-lg font-bold text-navy mb-2">{cat.name}</h3>
                <p id={cat.descId} className="text-muted-text text-sm leading-relaxed">{cat.items}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            to="/products"
            className="inline-flex items-center gap-2 text-sky-blue font-semibold hover:text-sky-blue-dark transition-colors"
          >
            View All Product Categories
          </Link>
        </div>
      </div>
    </section>
  )
}
