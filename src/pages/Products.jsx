import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { ArrowRight, CheckCircle2 } from 'lucide-react'

const categories = [
  {
    id: 'electronics',
    title: 'Electronics & Accessories',
    desc: 'Consumer electronics, mobile accessories, cables, chargers, power banks, Bluetooth devices, smart home products, and audio equipment.',
    subcategories: ['Mobile Phone Accessories', 'Cables & Chargers', 'Bluetooth Speakers', 'Smart Home Devices', 'LED Lighting', 'Power Banks'],
    imgId: 'products-electronics-a1b2c3',
    titleId: 'products-electronics-title',
    descId: 'products-electronics-desc',
  },
  {
    id: 'home-garden',
    title: 'Home & Garden',
    desc: 'Furniture, kitchenware, home decor, garden tools, storage solutions, bathroom accessories, and household cleaning products.',
    subcategories: ['Kitchen & Dining', 'Home Decor', 'Garden Tools', 'Storage Solutions', 'Bathroom Accessories', 'Cleaning Products'],
    imgId: 'products-home-d4e5f6',
    titleId: 'products-home-title',
    descId: 'products-home-desc',
  },
  {
    id: 'apparel',
    title: 'Apparel & Textiles',
    desc: 'Men\'s and women\'s clothing, workwear, sportswear, bags, shoes, hats, fabrics, and fashion accessories from established garment manufacturers.',
    subcategories: ['Casual Wear', 'Workwear & Uniforms', 'Sportswear', 'Bags & Luggage', 'Shoes & Footwear', 'Hats & Accessories'],
    imgId: 'products-apparel-g7h8i9',
    titleId: 'products-apparel-title',
    descId: 'products-apparel-desc',
  },
  {
    id: 'industrial',
    title: 'Industrial Equipment',
    desc: 'Manufacturing machinery, CNC equipment, welding tools, hydraulic components, conveyor systems, and industrial spare parts.',
    subcategories: ['Manufacturing Machinery', 'CNC Equipment', 'Welding Tools', 'Hydraulic Components', 'Conveyor Systems', 'Spare Parts'],
    imgId: 'products-industrial-j1k2l3',
    titleId: 'products-industrial-title',
    descId: 'products-industrial-desc',
  },
  {
    id: 'health-beauty',
    title: 'Health & Beauty',
    desc: 'Cosmetics, skincare products, personal care items, fitness equipment, wellness products, and health supplements.',
    subcategories: ['Cosmetics', 'Skincare', 'Personal Care', 'Fitness Equipment', 'Wellness Products', 'Supplements'],
    imgId: 'products-health-m4n5o6',
    titleId: 'products-health-title',
    descId: 'products-health-desc',
  },
  {
    id: 'automotive',
    title: 'Automotive Parts',
    desc: 'Auto parts, car accessories, tires, wheels, vehicle electronics, LED headlights, and aftermarket components.',
    subcategories: ['Auto Parts', 'Car Accessories', 'Tires & Wheels', 'Vehicle Electronics', 'LED Headlights', 'Aftermarket Parts'],
    imgId: 'products-auto-p7q8r9',
    titleId: 'products-auto-title',
    descId: 'products-auto-desc',
  },
  {
    id: 'toys',
    title: 'Toys & Children\'s Products',
    desc: 'Educational toys, outdoor play equipment, children\'s furniture, baby products, and toys meeting international safety standards.',
    subcategories: ['Educational Toys', 'Outdoor Play', 'Baby Products', 'Children\'s Furniture', 'Board Games', 'RC Toys'],
    imgId: 'products-toys-s1t2u3',
    titleId: 'products-toys-title',
    descId: 'products-toys-desc',
  },
  {
    id: 'building',
    title: 'Building Materials',
    desc: 'Flooring, tiles, hardware, plumbing fixtures, electrical components, insulation, and construction tools.',
    subcategories: ['Flooring & Tiles', 'Hardware', 'Plumbing Fixtures', 'Electrical Components', 'Insulation', 'Construction Tools'],
    imgId: 'products-building-v4w5x6',
    titleId: 'products-building-title',
    descId: 'products-building-desc',
  },
  {
    id: 'packaging',
    title: 'Packaging & Printing',
    desc: 'Custom packaging boxes, labels, shopping bags, gift packaging, paper products, and promotional items.',
    subcategories: ['Custom Boxes', 'Labels & Stickers', 'Shopping Bags', 'Gift Packaging', 'Paper Products', 'Promotional Items'],
    imgId: 'products-packaging-y7z8a9',
    titleId: 'products-packaging-title',
    descId: 'products-packaging-desc',
  },
]

export default function Products() {
  const containerRef = useRef(null)

  useEffect(() => {
    if (containerRef.current) {
      return ImageHelper.loadImages(strkImgConfig, containerRef.current)
    }
  }, [])

  return (
    <div ref={containerRef}>
      {/* Hero */}
      <section className="bg-primary-800 py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block bg-white/10 text-white px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
            Product Categories
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
            Products We Source from China
          </h1>
          <p className="text-primary-100 text-lg max-w-2xl mx-auto">
            We work with verified manufacturers across dozens of product categories.
            Whatever you need to source, we can help you find the right supplier.
          </p>
        </div>
      </section>

      {/* Product Grid */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((cat) => (
              <div
                key={cat.id}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow border border-gray-100 group"
              >
                <div className="h-52 relative overflow-hidden">
                  <img
                    data-strk-img-id={cat.imgId}
                    data-strk-img={`[${cat.descId}] [${cat.titleId}] China manufacturing`}
                    data-strk-img-ratio="16x9"
                    data-strk-img-width="600"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={cat.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 id={cat.titleId} className="text-xl font-bold text-primary-800 mb-3">{cat.title}</h3>
                  <p id={cat.descId} className="text-gray-600 text-sm mb-4 leading-relaxed">{cat.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {cat.subcategories.map((sub) => (
                      <span
                        key={sub}
                        className="inline-block bg-primary-50 text-primary-600 text-xs font-medium px-3 py-1 rounded-full"
                      >
                        {sub}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Custom sourcing */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-800 mb-6">
            Don't See Your Product Category?
          </h2>
          <p className="text-gray-600 text-lg mb-8">
            We work with manufacturers across hundreds of product categories. Contact us with your
            specific product requirements and we will find the right supplier for you.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-primary-500 hover:bg-primary-600 text-white px-8 py-4 rounded-lg font-bold text-lg transition-colors no-underline"
          >
            Request Custom Sourcing <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </div>
  )
}
