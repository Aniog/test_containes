import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Check } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const productCategories = [
  {
    id: 'electronics',
    icon: '🔌',
    title: 'Electronics & PCBs',
    desc: 'Consumer electronics, PCB assembly, cables, chargers, power banks, smart home devices, and IoT products.',
    suppliers: '85+ verified suppliers',
    imgId: 'product-electronics-a1',
  },
  {
    id: 'apparel',
    icon: '👕',
    title: 'Apparel & Textiles',
    desc: 'Casual wear, sportswear, uniforms, bags, footwear, fabrics, and textile accessories for brands of all sizes.',
    suppliers: '60+ verified suppliers',
    imgId: 'product-apparel-b2',
  },
  {
    id: 'furniture',
    icon: '🪑',
    title: 'Furniture & Home',
    desc: 'Indoor and outdoor furniture, home decor, kitchenware, storage solutions, and custom-designed pieces.',
    suppliers: '50+ verified suppliers',
    imgId: 'product-furniture-c3',
  },
  {
    id: 'hardware',
    icon: '🔧',
    title: 'Hardware & Tools',
    desc: 'Hand tools, power tools, fasteners, locks, hinges, industrial hardware, and custom metal components.',
    suppliers: '45+ verified suppliers',
    imgId: 'product-hardware-d4',
  },
  {
    id: 'packaging',
    icon: '📦',
    title: 'Packaging & Print',
    desc: 'Custom boxes, retail packaging, labels, bags, printed materials, and sustainable packaging solutions.',
    suppliers: '40+ verified suppliers',
    imgId: 'product-packaging-e5',
  },
  {
    id: 'automotive',
    icon: '🚗',
    title: 'Automotive Parts',
    desc: 'Aftermarket auto parts, accessories, replacement components, and custom machined parts.',
    suppliers: '30+ verified suppliers',
    imgId: 'product-automotive-f6',
  },
  {
    id: 'lighting',
    icon: '💡',
    title: 'Lighting & LED',
    desc: 'LED bulbs, commercial lighting, solar lights, decorative lighting, and custom lighting solutions.',
    suppliers: '35+ verified suppliers',
    imgId: 'product-lighting-g7',
  },
  {
    id: 'toys',
    icon: '🧸',
    title: 'Toys & Gifts',
    desc: 'Plush toys, educational toys, promotional gifts, seasonal items, and custom OEM products.',
    suppliers: '40+ verified suppliers',
    imgId: 'product-toys-h8',
  },
  {
    id: 'building',
    icon: '🏗️',
    title: 'Building Materials',
    desc: 'Flooring, tiles, sanitary ware, doors, windows, hardware, and construction materials.',
    suppliers: '25+ verified suppliers',
    imgId: 'product-building-i9',
  },
  {
    id: 'machinery',
    icon: '⚙️',
    title: 'Industrial Machinery',
    desc: 'CNC machines, packaging machines, food processing equipment, pumps, valves, and custom machinery.',
    suppliers: '30+ verified suppliers',
    imgId: 'product-machinery-j0',
  },
  {
    id: 'sports',
    icon: '⚽',
    title: 'Sports & Outdoor',
    desc: 'Fitness equipment, outdoor gear, camping supplies, sports accessories, and recreational products.',
    suppliers: '30+ verified suppliers',
    imgId: 'product-sports-k1',
  },
  {
    id: 'beauty',
    icon: '💄',
    title: 'Beauty & Personal Care',
    desc: 'Cosmetics, skincare, hair tools, beauty accessories, personal care devices, and packaging.',
    suppliers: '25+ verified suppliers',
    imgId: 'product-beauty-l2',
  },
  {
    id: 'pet',
    icon: '🐾',
    title: 'Pet Products',
    desc: 'Pet toys, accessories, grooming tools, beds, feeding supplies, and custom pet products.',
    suppliers: '20+ verified suppliers',
    imgId: 'product-pet-m3',
  },
  {
    id: 'medical',
    icon: '🏥',
    title: 'Medical Supplies',
    desc: 'Disposable medical products, diagnostic devices, PPE, rehabilitation equipment, and lab supplies.',
    suppliers: '20+ verified suppliers',
    imgId: 'product-medical-n4',
  },
  {
    id: 'kitchen',
    icon: '🍳',
    title: 'Kitchen & Houseware',
    desc: 'Cookware, bakeware, kitchen gadgets, tableware, food storage, and small kitchen appliances.',
    suppliers: '35+ verified suppliers',
    imgId: 'product-kitchen-o5',
  },
]

export default function Products() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <div ref={containerRef}>
      {/* Hero */}
      <section className="bg-navy py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-accent-gold font-semibold text-sm tracking-wide uppercase mb-3">
            Industries
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Products We Source
          </h1>
          <p className="text-gray-300 max-w-2xl mx-auto text-lg">
            Deep expertise across 15+ product categories. If it&apos;s manufactured
            in China, we can find the right supplier for you.
          </p>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {productCategories.map((cat) => (
              <div
                key={cat.id}
                id={`product-${cat.id}`}
                className="bg-gray-50 hover:bg-white rounded-xl p-6 border border-gray-100 hover:border-gray-200 hover:shadow-md transition-all group"
              >
                <div className="aspect-[3/2] rounded-lg overflow-hidden bg-gray-200 mb-5">
                  <img
                    alt={cat.title}
                    data-strk-img-id={cat.imgId}
                    data-strk-img={`[product-${cat.id}-title]`}
                    data-strk-img-ratio="3x2"
                    data-strk-img-width="600"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    className="w-full h-full object-cover"
                  />
                </div>
                <span className="text-3xl mb-2 block">{cat.icon}</span>
                <h3
                  id={`product-${cat.id}-title`}
                  className="font-semibold text-gray-900 mb-1"
                >
                  {cat.title}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed mb-3">
                  {cat.desc}
                </p>
                <span className="text-xs text-accent-red font-medium">
                  {cat.suppliers}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Note */}
      <section className="bg-gray-50 py-12">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Don&apos;t See Your Product Category?
          </h2>
          <p className="text-gray-500 mb-6">
            If your product isn&apos;t listed above, contact us anyway. With our
            extensive supplier network across China&apos;s major manufacturing hubs,
            we likely have experience in your industry or can quickly find the
            right supplier.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-accent-red hover:bg-red-700 text-white font-semibold rounded-lg px-8 py-3.5 transition-colors shadow-lg"
          >
            Tell Us About Your Product <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </div>
  )
}