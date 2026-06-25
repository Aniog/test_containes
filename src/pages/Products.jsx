import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { Link } from 'react-router-dom'
import CTASection from '@/components/shared/CTASection'

const categories = [
  {
    id: 'electronics',
    title: 'Electronics & Components',
    desc: 'Consumer electronics, PCBs, LED lighting, cables, connectors, IoT devices, and electronic accessories.',
    examples: ['LED lighting', 'USB cables', 'Bluetooth speakers', 'PCB assemblies', 'Smart home devices'],
  },
  {
    id: 'textiles',
    title: 'Textiles & Apparel',
    desc: 'Clothing, uniforms, sportswear, fabrics, home textiles, bags, and fashion accessories.',
    examples: ['Custom clothing', 'Sportswear', 'Workwear & uniforms', 'Bags & backpacks', 'Home textiles'],
  },
  {
    id: 'home-garden',
    title: 'Home & Garden',
    desc: 'Furniture, kitchenware, bathroom fixtures, garden tools, decorative items, and storage solutions.',
    examples: ['Furniture', 'Kitchenware', 'Bathroom accessories', 'Garden tools', 'Storage solutions'],
  },
  {
    id: 'industrial',
    title: 'Industrial & Machinery',
    desc: 'CNC machines, pumps, valves, industrial tools, safety equipment, and manufacturing components.',
    examples: ['CNC machines', 'Pumps & valves', 'Industrial tools', 'Safety equipment', 'Fasteners'],
  },
  {
    id: 'auto-parts',
    title: 'Auto Parts & Accessories',
    desc: 'Replacement parts, accessories, tires, filters, lighting, and aftermarket components.',
    examples: ['Brake pads', 'LED headlights', 'Car accessories', 'Filters', 'Body parts'],
  },
  {
    id: 'packaging',
    title: 'Packaging & Printing',
    desc: 'Custom packaging, labels, boxes, bags, bottles, jars, and printing services.',
    examples: ['Custom boxes', 'Labels & stickers', 'Plastic bottles', 'Paper bags', 'Blister packaging'],
  },
  {
    id: 'building',
    title: 'Building & Construction',
    desc: 'Steel structures, tiles, plumbing, electrical fittings, doors, windows, and construction tools.',
    examples: ['Steel structures', 'Ceramic tiles', 'Plumbing fittings', 'Doors & windows', 'Solar panels'],
  },
  {
    id: 'health-beauty',
    title: 'Health & Beauty',
    desc: 'Cosmetics, skincare, supplements, medical devices, personal care products, and salon equipment.',
    examples: ['Skincare products', 'Cosmetics', 'Supplements', 'Medical devices', 'Salon equipment'],
  },
  {
    id: 'toys-gifts',
    title: 'Toys, Gifts & Promotional',
    desc: 'Toys, games, promotional items, corporate gifts, stationery, and seasonal products.',
    examples: ['Plush toys', 'Promotional items', 'Corporate gifts', 'Stationery', 'Party supplies'],
  },
]

const Products = () => {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <div ref={containerRef}>
      {/* Hero */}
      <section className="bg-slate-900 py-16 md:py-24 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-20"
          data-strk-bg-id="products-hero-bg-e7f8a9"
          data-strk-bg="[products-hero-desc]"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1600"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/80 to-slate-900" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
            Products We Source
          </h1>
          <p id="products-hero-desc" className="mt-4 text-lg text-slate-300 max-w-2xl mx-auto">
            We source across dozens of product categories from China's manufacturing hubs. If it's made in China, we can find the right supplier for you.
          </p>
        </div>
      </section>

      {/* Categories */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((cat) => (
              <div key={cat.id} className="bg-white rounded-xl p-6 border border-slate-200 hover:shadow-md transition-shadow">
                <img
                  alt={cat.title}
                  data-strk-img-id={`product-cat-${cat.id}-g1h2i3`}
                  data-strk-img={`[product-cat-title-${cat.id}]`}
                  data-strk-img-ratio="16x9"
                  data-strk-img-width="400"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="rounded-lg w-full mb-4"
                />
                <h3 id={`product-cat-title-${cat.id}`} className="text-lg font-semibold text-slate-900 mb-2">{cat.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-4">{cat.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {cat.examples.map((ex) => (
                    <span key={ex} className="text-xs bg-slate-100 text-slate-600 px-2 py-1 rounded">{ex}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Not Listed */}
      <section className="bg-slate-50 py-16 md:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900">Don't See Your Product?</h2>
          <p className="mt-4 text-slate-600">
            This is not an exhaustive list. We source virtually any manufactured product from China. Contact us with your specific requirements and we'll let you know how we can help.
          </p>
          <Link
            to="/contact"
            className="inline-block mt-6 bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-3 rounded-lg transition-colors no-underline"
          >
            Tell Us What You Need
          </Link>
        </div>
      </section>

      <CTASection />
    </div>
  )
}

export default Products
