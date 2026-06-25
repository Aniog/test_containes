import { Link } from 'react-router-dom'
import { getPickedImageUrl } from '@/lib/img.js'
import { ArrowRight } from 'lucide-react'

const categories = [
  {
    id: 'electronics',
    name: 'Consumer Electronics',
    desc: 'Smartphones, accessories, IoT devices, audio equipment, wearables, and smart home products.',
    icon: '🔌',
    imgId: 'prod-cat-electronics-a1',
    titleId: 'prod-cat-title-electronics',
    descId: 'prod-cat-desc-electronics',
  },
  {
    id: 'furniture',
    name: 'Furniture & Home Decor',
    desc: 'Indoor and outdoor furniture, home textiles, lighting, kitchenware, and decorative items.',
    icon: '🪑',
    imgId: 'prod-cat-furniture-b2',
    titleId: 'prod-cat-title-furniture',
    descId: 'prod-cat-desc-furniture',
  },
  {
    id: 'packaging',
    name: 'Packaging & Printing',
    desc: 'Custom boxes, food packaging, labels, bags, gift boxes, and commercial printing.',
    icon: '📦',
    imgId: 'prod-cat-packaging-c3',
    titleId: 'prod-cat-title-packaging',
    descId: 'prod-cat-desc-packaging',
  },
  {
    id: 'apparel',
    name: 'Apparel & Textiles',
    desc: 'Clothing, footwear, bags, sportswear, uniforms, and fabric sourcing.',
    icon: '👕',
    imgId: 'prod-cat-apparel-d4',
    titleId: 'prod-cat-title-apparel',
    descId: 'prod-cat-desc-apparel',
  },
  {
    id: 'machinery',
    name: 'Industrial Machinery',
    desc: 'Manufacturing equipment, CNC machines, packaging machinery, tools, and industrial components.',
    icon: '⚙️',
    imgId: 'prod-cat-machinery-e5',
    titleId: 'prod-cat-title-machinery',
    descId: 'prod-cat-desc-machinery',
  },
  {
    id: 'hardware',
    name: 'Hardware & Building Materials',
    desc: 'Construction hardware, fasteners, plumbing, electrical, tools, and building materials.',
    icon: '🔧',
    imgId: 'prod-cat-hardware-f6',
    titleId: 'prod-cat-title-hardware',
    descId: 'prod-cat-desc-hardware',
  },
  {
    id: 'toys',
    name: 'Toys & Games',
    desc: 'Educational toys, plush toys, board games, outdoor play equipment, and collectibles.',
    icon: '🧸',
    imgId: 'prod-cat-toys-g7',
    titleId: 'prod-cat-title-toys',
    descId: 'prod-cat-desc-toys',
  },
  {
    id: 'beauty',
    name: 'Beauty & Personal Care',
    desc: 'Cosmetics, skincare, hair care, beauty tools, personal care appliances, and packaging.',
    icon: '💄',
    imgId: 'prod-cat-beauty-h8',
    titleId: 'prod-cat-title-beauty',
    descId: 'prod-cat-desc-beauty',
  },
  {
    id: 'automotive',
    name: 'Automotive Parts',
    desc: 'Auto components, accessories, aftermarket parts, car electronics, and maintenance products.',
    icon: '🚗',
    imgId: 'prod-cat-automotive-i9',
    titleId: 'prod-cat-title-automotive',
    descId: 'prod-cat-desc-automotive',
  },
  {
    id: 'sports',
    name: 'Sports & Outdoor',
    desc: 'Fitness equipment, outdoor gear, camping supplies, sports accessories, and activewear.',
    icon: '🏕️',
    imgId: 'prod-cat-sports-j0',
    titleId: 'prod-cat-title-sports',
    descId: 'prod-cat-desc-sports',
  },
  {
    id: 'medical',
    name: 'Medical Supplies',
    desc: 'Medical devices, PPE, diagnostic equipment, lab supplies, and healthcare products.',
    icon: '🏥',
    imgId: 'prod-cat-medical-k1',
    titleId: 'prod-cat-title-medical',
    descId: 'prod-cat-desc-medical',
  },
  {
    id: 'pet',
    name: 'Pet Products',
    desc: 'Pet toys, accessories, grooming supplies, pet furniture, and pet care products.',
    icon: '🐾',
    imgId: 'prod-cat-pet-l2',
    titleId: 'prod-cat-title-pet',
    descId: 'prod-cat-desc-pet',
  },
]

export default function Products() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-primary py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Products We Source</h1>
            <p className="text-lg text-white/70 leading-relaxed">
              We source across 12+ major product categories from China's manufacturing hubs. Whatever your product, we can find the right supplier.
            </p>
          </div>
        </div>
      </section>

      {/* Product Categories Grid */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((cat) => {
              const catImg = getPickedImageUrl(cat.imgId)
              return (
              <div key={cat.id} className="bg-background rounded-xl overflow-hidden border border-border hover:shadow-md transition-shadow group">
                <div className="aspect-[16/10] bg-gray-100 overflow-hidden">
                  {catImg && (
                    <img
                      alt={cat.name}
                      src={catImg}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  )}
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-2xl">{cat.icon}</span>
                    <h3 id={cat.titleId} className="font-semibold text-text-primary text-lg">{cat.name}</h3>
                  </div>
                  <p id={cat.descId} className="text-text-secondary text-sm leading-relaxed">{cat.desc}</p>
                </div>
              </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">Manufacturing Regions We Cover</h2>
            <p className="text-lg text-text-secondary max-w-2xl mx-auto">
              Our team is based in Shenzhen with access to all major manufacturing hubs across China.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { region: 'Shenzhen & Dongguan', focus: 'Electronics, IoT, hardware' },
              { region: 'Guangzhou & Foshan', focus: 'Furniture, ceramics, lighting' },
              { region: 'Yiwu & Zhejiang', focus: 'General merchandise, textiles' },
              { region: 'Shanghai & Jiangsu', focus: 'Machinery, automotive, chemicals' },
              { region: 'Fujian Province', focus: 'Apparel, footwear, stone products' },
              { region: 'Shandong Province', focus: 'Building materials, tires, food' },
              { region: 'Hebei Province', focus: 'Steel, hardware, glass products' },
              { region: 'Sichuan & Chongqing', focus: 'Electronics, automotive, machinery' },
            ].map((region) => (
              <div key={region.region} className="bg-white rounded-xl border border-border p-6">
                <h3 className="font-semibold text-text-primary mb-2">{region.region}</h3>
                <p className="text-text-secondary text-sm">{region.focus}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
            Don't See Your Product?
          </h2>
          <p className="text-lg text-text-secondary mb-8">
            If your product category isn't listed, contact us. We have sourcing capabilities across virtually all manufacturing sectors in China.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-accent text-white font-semibold px-8 py-3.5 rounded-lg hover:bg-accent-hover transition-colors text-base"
          >
            Get a Free Sourcing Quote
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  )
}