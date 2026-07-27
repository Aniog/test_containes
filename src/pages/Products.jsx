import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Package, CheckCircle, Smartphone, Home, Shirt, Wrench, Box, Car, Cpu } from 'lucide-react'
import Button from '@/components/ui/Button'
import { cn } from '@/lib/utils'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const categories = [
  {
    icon: Smartphone,
    title: 'Electronics & Components',
    desc: 'Consumer electronics, PCBs, semiconductors, cables, connectors, sensors, and electronic components. We source from verified manufacturers across Shenzhen, Guangzhou, and Suzhou.',
    examples: ['Smart home devices', 'Circuit boards', 'Power adapters', 'Sensors & modules', 'Audio equipment', 'LED lighting'],
    imgId: 'products-electronics-1a2b3c',
  },
  {
    icon: Home,
    title: 'Home & Kitchen',
    desc: 'Household appliances, kitchenware, furniture, home decor, storage solutions, and bathroom accessories from manufacturers in Guangdong, Zhejiang, and Shandong.',
    examples: ['Kitchen appliances', 'Cookware sets', 'Home furniture', 'Decor items', 'Storage solutions', 'Bathroom accessories'],
    imgId: 'products-home-2b3c4d',
  },
  {
    icon: Shirt,
    title: 'Apparel & Textiles',
    desc: 'Garments, fabrics, accessories, footwear, and technical textiles from China\'s major textile manufacturing hubs including Zhejiang, Jiangsu, and Guangdong.',
    examples: ['Casual & formal wear', 'Sportswear', 'Denim & jeans', 'Accessories', 'Footwear', 'Technical textiles'],
    imgId: 'products-apparel-3c4d5e',
  },
  {
    icon: Wrench,
    title: 'Industrial Equipment',
    desc: 'Machinery, industrial tools, automation equipment, spare parts, and manufacturing components from industrial centers across China.',
    examples: ['CNC machines', 'Packaging machinery', 'Industrial pumps', 'Conveyor systems', 'Hydraulic components', 'Measuring instruments'],
    imgId: 'products-industrial-4d5e6f',
  },
  {
    icon: Box,
    title: 'Packaging & Materials',
    desc: 'Custom packaging, raw materials, labels, tapes, and sustainable packaging solutions from specialized manufacturers.',
    examples: ['Cardboard boxes', 'Plastic packaging', 'Labels & stickers', 'Protective packaging', 'Eco-friendly materials', 'Industrial tapes'],
    imgId: 'products-packaging-5e6f7a',
  },
  {
    icon: Car,
    title: 'Auto Parts & Accessories',
    desc: 'Automotive components, aftermarket parts, accessories, and EV components from China\'s growing automotive supply chain.',
    examples: ['Engine parts', 'Body panels', 'Interior accessories', 'EV components', 'Lighting systems', 'Brake systems'],
    imgId: 'products-auto-6f7a8b',
  },
  {
    icon: Cpu,
    title: 'Medical & Healthcare',
    desc: 'Medical devices, healthcare equipment, PPE, diagnostic tools, and laboratory supplies from certified medical manufacturers.',
    examples: ['Medical instruments', 'Diagnostic equipment', 'PPE & safety gear', 'Lab supplies', 'Rehabilitation aids', 'Hospital furniture'],
    imgId: 'products-medical-7a8b9c',
  },
  {
    icon: Package,
    title: 'Consumer Goods',
    desc: 'Toys, sporting goods, personal care products, pet supplies, and general consumer merchandise from manufacturers across China.',
    examples: ['Toys & games', 'Sporting goods', 'Personal care', 'Pet supplies', 'Stationery', 'Seasonal products'],
    imgId: 'products-consumer-8b9c1d',
  },
]

export default function Products() {
  const containerRef = useRef(null)

  useEffect(() => {
    if (containerRef.current) {
      ImageHelper.loadImages(strkImgConfig, containerRef.current)
    }
  }, [])

  return (
    <div ref={containerRef}>
      {/* Hero */}
      <section className="bg-neutral-900 py-16 md:py-24">
        <div className="container-page text-center">
          <span className="text-brand-300 text-sm font-medium tracking-wider uppercase">Categories</span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mt-3 mb-4">Products We Source</h1>
          <p className="text-lg text-neutral-300 max-w-2xl mx-auto">
            We source across all major manufacturing categories in China, from electronics to industrial equipment
          </p>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container-page">
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {categories.map((category) => {
              const Icon = category.icon
              return (
                <div key={category.title} className="flex flex-col sm:flex-row gap-6 p-6 rounded-xl border border-neutral-200 hover:shadow-lg transition-shadow">
                  <div className="w-14 h-14 rounded-xl bg-brand-50 flex items-center justify-center flex-shrink-0">
                    <Icon className="h-7 w-7 text-brand-500" />
                  </div>
                  <div>
                    <h2 className="text-xl font-bold text-neutral-900 mb-2">{category.title}</h2>
                    <p className="text-sm text-neutral-500 leading-relaxed mb-4">{category.desc}</p>
                    <div className="flex flex-wrap gap-2">
                      {category.examples.map((ex) => (
                        <span key={ex} className="inline-flex items-center gap-1 text-xs text-neutral-600 bg-neutral-50 px-2.5 py-1.5 rounded-md border border-neutral-100">
                          <CheckCircle className="h-3 w-3 text-brand-500" />
                          {ex}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-neutral-50">
        <div className="container-page text-center">
          <h2 className="text-3xl font-bold text-neutral-900 mb-4">Don't See Your Product Category?</h2>
          <p className="text-neutral-500 max-w-xl mx-auto mb-8">
            We source across virtually all manufacturing sectors. Contact us and we'll find the right suppliers for your specific products.
          </p>
          <Link to="/contact">
            <Button size="xl" variant="accent">
              Discuss Your Product
              <ArrowRight className="h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  )
}