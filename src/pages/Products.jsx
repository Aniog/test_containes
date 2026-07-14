import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { ArrowRight } from 'lucide-react'

const categories = [
  {
    id: 'electronics',
    title: 'Electronics & Components',
    items: ['Consumer electronics', 'PCB assemblies', 'LED lighting', 'Cables & connectors', 'Smart home devices', 'Audio equipment'],
  },
  {
    id: 'textiles',
    title: 'Textiles & Apparel',
    items: ['Workwear & uniforms', 'Sportswear', 'Home textiles', 'Bags & luggage', 'Footwear', 'Fashion accessories'],
  },
  {
    id: 'home-garden',
    title: 'Home & Garden',
    items: ['Kitchenware', 'Bathroom fixtures', 'Garden tools', 'Storage solutions', 'Decorative items', 'Cleaning products'],
  },
  {
    id: 'industrial',
    title: 'Industrial & Machinery',
    items: ['CNC machined parts', 'Injection molding', 'Metal fabrication', 'Pumps & valves', 'Packaging machinery', 'Tools & hardware'],
  },
  {
    id: 'furniture',
    title: 'Furniture & Fixtures',
    items: ['Office furniture', 'Hotel furniture', 'Outdoor furniture', 'Display fixtures', 'Custom cabinetry', 'Mattresses & bedding'],
  },
  {
    id: 'auto-parts',
    title: 'Auto Parts & Accessories',
    items: ['Brake components', 'Filters', 'Body parts', 'Interior accessories', 'Lighting', 'Rubber & plastic parts'],
  },
  {
    id: 'health-beauty',
    title: 'Health & Beauty',
    items: ['Skincare products', 'Hair care', 'Supplements', 'Medical devices', 'Packaging', 'OEM/ODM cosmetics'],
  },
  {
    id: 'building',
    title: 'Building Materials',
    items: ['Tiles & flooring', 'Plumbing fittings', 'Electrical fixtures', 'Glass & mirrors', 'Steel structures', 'Insulation materials'],
  },
  {
    id: 'packaging',
    title: 'Packaging & Printing',
    items: ['Custom boxes', 'Labels & stickers', 'Plastic containers', 'Glass bottles', 'Flexible packaging', 'Display stands'],
  },
  {
    id: 'toys',
    title: 'Toys & Recreational',
    items: ['Educational toys', 'Outdoor play equipment', 'Board games', 'Plush toys', 'RC vehicles', 'Party supplies'],
  },
  {
    id: 'sports',
    title: 'Sports & Outdoors',
    items: ['Fitness equipment', 'Camping gear', 'Cycling accessories', 'Water sports', 'Yoga & pilates', 'Team sports gear'],
  },
  {
    id: 'consumer',
    title: 'Consumer Goods & Gifts',
    items: ['Promotional items', 'Stationery', 'Pet products', 'Seasonal goods', 'Novelty items', 'Custom merchandise'],
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
      <section className="bg-primary py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-5xl font-bold text-white tracking-tight">Products We Source</h1>
          <p className="mt-4 text-gray-200 text-lg max-w-2xl">
            We source across dozens of product categories from China's manufacturing hubs. If it's made in China, we can find the right supplier for you.
          </p>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="py-16 md:py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((cat) => (
              <div key={cat.id} className="bg-card rounded-xl border border-border p-6 hover:shadow-md transition-shadow">
                <h2 className="text-lg font-semibold text-primary mb-3">{cat.title}</h2>
                <ul className="space-y-1.5">
                  {cat.items.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-text-secondary">
                      <span className="w-1.5 h-1.5 bg-accent rounded-full flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Visual */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="rounded-xl overflow-hidden">
              <img
                data-strk-img-id="products-warehouse-img-n5o6p7"
                data-strk-img="[products-visual-desc] [products-visual-title]"
                data-strk-img-ratio="4x3"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt="Chinese manufacturing warehouse"
                className="w-full h-auto object-cover"
              />
            </div>
            <div>
              <h2 id="products-visual-title" className="text-2xl md:text-3xl font-bold text-primary tracking-tight">
                Don't See Your Product?
              </h2>
              <p id="products-visual-desc" className="mt-4 text-text-secondary leading-relaxed">
                This list is not exhaustive. China manufactures virtually every product category. If you need something specific, contact us with your requirements and we will confirm whether we can source it for you.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center mt-6 bg-accent text-white font-semibold px-6 py-3 rounded-lg hover:bg-accent-dark transition-colors no-underline text-sm"
              >
                Inquire About Your Product <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-20 bg-primary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">Tell Us What You Need</h2>
          <p className="mt-4 text-gray-200 text-lg">Share your product requirements and we will identify the best suppliers in China.</p>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center mt-8 bg-accent text-white font-semibold px-8 py-4 rounded-lg hover:bg-accent-dark transition-colors no-underline"
          >
            Get a Free Sourcing Quote <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  )
}
