import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { 
  Package, ArrowRight, CheckCircle, Smartphone, Sofa, Shirt, 
  Wrench, Box, Heart, ChevronRight
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const categories = [
  {
    icon: Smartphone,
    name: 'Electronics & Components',
    desc: 'Consumer electronics, PCBs, semiconductors, IoT devices, cables, and electronic components.',
    items: ['Smart home devices', 'PCB assembly', 'LED lighting', 'Battery packs', 'Sensors & modules'],
    imgId: 'products-electronics-3a5b7c',
  },
  {
    icon: Sofa,
    name: 'Home & Living',
    desc: 'Furniture, kitchenware, home decor, lighting fixtures, and household products.',
    items: ['Indoor & outdoor furniture', 'Kitchen appliances', 'Home textiles', 'Decorative items', 'Bathroom accessories'],
    imgId: 'products-home-5b7c9d',
  },
  {
    icon: Shirt,
    name: 'Apparel & Textiles',
    desc: 'Garments, fabrics, accessories, footwear, and technical textiles for various markets.',
    items: ['Casual & formal wear', 'Sportswear', 'Knitwear & sweaters', 'Denim & jeans', 'Technical fabrics'],
    imgId: 'products-apparel-7c9d1e',
  },
  {
    icon: Wrench,
    name: 'Industrial Parts',
    desc: 'Machinery components, hardware, tools, automotive parts, and industrial equipment.',
    items: ['CNC machined parts', 'Injection molded parts', 'Fasteners & hardware', 'Hydraulic components', 'Power tools'],
    imgId: 'products-industrial-9d1e2f',
  },
  {
    icon: Box,
    name: 'Packaging Materials',
    desc: 'Custom packaging, boxes, labels, containers, and sustainable packaging solutions.',
    items: ['Corrugated boxes', 'Retail packaging', 'Labels & stickers', 'Plastic containers', 'Eco-friendly packaging'],
    imgId: 'products-packaging-1e3f4g',
  },
  {
    icon: Heart,
    name: 'Health & Beauty',
    desc: 'Cosmetics, supplements, personal care products, and medical supplies.',
    items: ['Skincare products', 'Hair care', 'Vitamins & supplements', 'Medical devices', 'Personal care tools'],
    imgId: 'products-beauty-3f5g6h',
  },
]

const industries = [
  'Automotive', 'Construction', 'Food & Beverage', 'Furniture', 'Healthcare',
  'Hospitality', 'Logistics', 'Manufacturing', 'Retail', 'Technology',
  'Textile & Fashion', 'Wholesale & Distribution',
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
      {/* Page Header */}
      <section className="bg-brand-600 py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">Products We Source</h1>
            <p className="text-lg text-gray-300 leading-relaxed">
              We source across a wide range of industries and product categories. 
              If you need a product manufactured in China, we can help find the right supplier.
            </p>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {categories.map((cat) => (
              <div key={cat.name} className="bg-white rounded-lg overflow-hidden border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                <div className="h-48 bg-gray-200 relative overflow-hidden">
                  <img
                    data-strk-img-id={cat.imgId}
                    data-strk-img={`[product-cat-title-${cat.imgId}]`}
                    data-strk-img-ratio="3x2"
                    data-strk-img-width="600"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={cat.name}
                    className="w-full h-full object-cover"
                  />
                  <span id={`product-cat-title-${cat.imgId}`} className="hidden">{cat.name}</span>
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-2 mb-3">
                    <cat.icon className="w-5 h-5 text-accent-500" />
                    <h2 className="text-lg font-semibold text-gray-900">{cat.name}</h2>
                  </div>
                  <p className="text-sm text-gray-500 mb-4">{cat.desc}</p>
                  <ul className="space-y-1.5">
                    {cat.items.map((item) => (
                      <li key={item} className="flex items-center gap-2 text-sm text-gray-600">
                        <CheckCircle className="w-3.5 h-3.5 text-green-500 shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Industries We Serve</h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
              Our clients come from diverse industries, all united by the need for reliable Chinese manufacturing partners
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {industries.map((industry) => (
              <span key={industry} className="px-4 py-2 bg-white rounded-full border border-gray-200 text-sm text-gray-600 shadow-sm">
                {industry}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-20 bg-brand-500">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Don't See Your Product Category?
          </h2>
          <p className="text-brand-200 mb-8">
            We source products across virtually all categories. Contact us with your requirements and we'll assess feasibility.
          </p>
          <Link to="/contact">
            <Button variant="accent" size="lg" className="text-base">
              Get a Free Sourcing Quote
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  )
}