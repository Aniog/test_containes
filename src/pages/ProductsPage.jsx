import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { ArrowRight } from 'lucide-react'

const categories = [
  {
    id: 'electronics',
    title: 'Electronics & Components',
    desc: 'Consumer electronics, PCBs, LED lighting, cables, connectors, smart home devices, and electronic accessories.',
    items: ['LED Lighting', 'Consumer Electronics', 'PCB Assembly', 'Smart Home Devices', 'Cables & Connectors', 'Battery Packs'],
  },
  {
    id: 'home-garden',
    title: 'Home & Garden',
    desc: 'Kitchenware, bathroom accessories, garden tools, storage solutions, cleaning products, and home organization.',
    items: ['Kitchenware', 'Bathroom Accessories', 'Garden Tools', 'Storage Solutions', 'Cleaning Products', 'Home Decor'],
  },
  {
    id: 'apparel-textiles',
    title: 'Apparel & Textiles',
    desc: 'Clothing, sportswear, uniforms, fabrics, bags, shoes, and fashion accessories for all markets.',
    items: ['Casual Wear', 'Sportswear', 'Workwear & Uniforms', 'Bags & Luggage', 'Footwear', 'Fashion Accessories'],
  },
  {
    id: 'auto-parts',
    title: 'Auto Parts & Accessories',
    desc: 'Replacement parts, car accessories, tools, tires, interior trim, and aftermarket components.',
    items: ['Replacement Parts', 'Car Accessories', 'Interior Trim', 'Tools & Equipment', 'Tires & Wheels', 'Aftermarket Parts'],
  },
  {
    id: 'machinery',
    title: 'Machinery & Equipment',
    desc: 'Industrial machinery, CNC machines, packaging equipment, food processing machines, and spare parts.',
    items: ['CNC Machines', 'Packaging Equipment', 'Food Processing', 'Printing Machines', 'Spare Parts', 'Industrial Tools'],
  },
  {
    id: 'packaging',
    title: 'Packaging & Printing',
    desc: 'Custom packaging, labels, boxes, bags, bottles, jars, and printing services for all industries.',
    items: ['Custom Boxes', 'Labels & Stickers', 'Plastic Packaging', 'Glass Bottles & Jars', 'Paper Bags', 'Flexible Packaging'],
  },
  {
    id: 'health-beauty',
    title: 'Health & Beauty',
    desc: 'Skincare, cosmetics, supplements, medical devices, personal care products, and beauty tools.',
    items: ['Skincare Products', 'Cosmetics', 'Supplements', 'Beauty Tools', 'Personal Care', 'Medical Devices'],
  },
  {
    id: 'sports-outdoors',
    title: 'Sports & Outdoors',
    desc: 'Fitness equipment, camping gear, cycling accessories, water sports, and outdoor furniture.',
    items: ['Fitness Equipment', 'Camping Gear', 'Cycling Accessories', 'Water Sports', 'Outdoor Furniture', 'Sports Apparel'],
  },
  {
    id: 'furniture',
    title: 'Furniture & Decor',
    desc: 'Office furniture, home furniture, hotel furniture, decorative items, and custom millwork.',
    items: ['Office Furniture', 'Home Furniture', 'Hotel Furniture', 'Decorative Items', 'Custom Millwork', 'Lighting Fixtures'],
  },
  {
    id: 'toys-baby',
    title: 'Toys & Baby Products',
    desc: 'Educational toys, plush toys, baby gear, children\'s furniture, and safety-certified products.',
    items: ['Educational Toys', 'Plush Toys', 'Baby Gear', 'Children\'s Furniture', 'Outdoor Play', 'Safety Products'],
  },
  {
    id: 'building-materials',
    title: 'Building Materials',
    desc: 'Tiles, sanitary ware, hardware, steel products, glass, and construction materials.',
    items: ['Tiles & Flooring', 'Sanitary Ware', 'Hardware & Fittings', 'Steel Products', 'Glass & Mirrors', 'Insulation'],
  },
  {
    id: 'food-equipment',
    title: 'Food & Beverage Equipment',
    desc: 'Commercial kitchen equipment, food processing machines, refrigeration, and restaurant supplies.',
    items: ['Kitchen Equipment', 'Food Processing', 'Refrigeration', 'Restaurant Supplies', 'Bakery Equipment', 'Beverage Machines'],
  },
]

const ProductsPage = () => {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <div ref={containerRef}>
      {/* Hero */}
      <section className="bg-slate-50 py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 id="products-page-title" className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight">
            Products We Source
          </h1>
          <p id="products-page-subtitle" className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
            We source across 50+ product categories from China's top manufacturing regions. If it's made in China, we can find it for you.
          </p>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((cat) => (
              <div key={cat.id} className="bg-white rounded-xl border border-slate-200 p-6 hover:shadow-md transition">
                <h3 className="text-lg font-semibold text-slate-900 mb-2">{cat.title}</h3>
                <p className="text-sm text-slate-600 mb-4">{cat.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {cat.items.map((item, i) => (
                    <span key={i} className="bg-slate-50 text-slate-600 text-xs px-2.5 py-1 rounded-md border border-slate-100">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Sourcing */}
      <section className="py-16 md:py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 id="custom-sourcing-title" className="text-3xl font-bold text-slate-900 tracking-tight">
                Don't See Your Product Category?
              </h2>
              <p id="custom-sourcing-subtitle" className="mt-4 text-slate-600 leading-relaxed">
                Our sourcing capabilities extend far beyond the categories listed above. Whether you need a niche industrial component or a custom consumer product, our team has the network and expertise to find the right supplier.
              </p>
              <div className="mt-8">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 bg-orange text-white px-6 py-3.5 rounded-lg font-semibold hover:bg-orange-dark transition"
                >
                  Tell Us What You Need
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
            <div>
              <img
                data-strk-img-id="custom-sourcing-img-d5f1a3"
                data-strk-img="[custom-sourcing-subtitle] [custom-sourcing-title]"
                data-strk-img-ratio="4x3"
                data-strk-img-width="700"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt="Diverse products sourced from China"
                className="rounded-xl shadow-lg w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-20 bg-navy">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
            Let Us Find Your Ideal Supplier
          </h2>
          <p className="mt-4 text-lg text-slate-300 max-w-2xl mx-auto">
            Share your product requirements and get matched with verified manufacturers within days.
          </p>
          <div className="mt-8">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-orange text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-orange-dark transition"
            >
              Get a Free Sourcing Quote
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ProductsPage
