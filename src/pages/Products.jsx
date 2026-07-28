import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Cpu, Factory, Home, Shirt, Package, Building2, Car, Heart, ArrowUpRight } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import InquiryForm from '@/components/home/InquiryForm'

const categories = [
  {
    icon: Cpu,
    name: 'Electronics & Components',
    description: 'Consumer electronics, PCBs, cables, connectors, LED products, smart devices, and electronic components.',
    examples: ['Smart home devices', 'LED lighting', 'PCB assemblies', 'Cables & connectors', 'Audio equipment'],
    imgId: 'prod-electronics-d4e5f6',
  },
  {
    icon: Factory,
    name: 'Machinery & Industrial',
    description: 'Industrial equipment, CNC machines, pumps, valves, tools, and manufacturing components.',
    examples: ['CNC machines', 'Industrial pumps', 'Power tools', 'Hydraulic components', 'Packaging machines'],
    imgId: 'prod-machinery-g7h8i9',
  },
  {
    icon: Home,
    name: 'Home & Garden',
    description: 'Furniture, home decor, kitchenware, garden tools, lighting, and household products.',
    examples: ['Solid wood furniture', 'Kitchen appliances', 'Garden tools', 'Home decor items', 'Outdoor furniture'],
    imgId: 'prod-home-j1k2l3',
  },
  {
    icon: Shirt,
    name: 'Apparel & Textiles',
    description: 'Clothing, fabrics, accessories, footwear, and textile products for all markets.',
    examples: ['Custom clothing', 'Sportswear', 'Bags & accessories', 'Footwear', 'Fabric materials'],
    imgId: 'prod-apparel-m4n5o6',
  },
  {
    icon: Package,
    name: 'Packaging & Printing',
    description: 'Custom packaging, labels, boxes, bags, printing services, and promotional materials.',
    examples: ['Custom boxes', 'Product labels', 'Shopping bags', 'Gift packaging', 'Promotional items'],
    imgId: 'prod-packaging-p7q8r9',
  },
  {
    icon: Building2,
    name: 'Building Materials',
    description: 'Construction materials, tiles, sanitary ware, doors, windows, and hardware.',
    examples: ['Ceramic tiles', 'Sanitary ware', 'Steel structures', 'Door & window hardware', 'Flooring materials'],
    imgId: 'prod-building-s1t2u3',
  },
  {
    icon: Car,
    name: 'Automotive Parts',
    description: 'Auto parts, accessories, motorcycle components, and aftermarket products.',
    examples: ['Engine components', 'Body parts', 'LED auto lights', 'Motorcycle accessories', 'Car electronics'],
    imgId: 'prod-auto-v4w5x6',
  },
  {
    icon: Heart,
    name: 'Health & Beauty',
    description: 'Cosmetics, skincare, personal care, health products, and beauty tools.',
    examples: ['Skincare products', 'Makeup tools', 'Hair care', 'Health supplements', 'Beauty devices'],
    imgId: 'prod-health-y7z8a1',
  },
]

export default function ProductsPage() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <div ref={containerRef}>
      {/* Hero */}
      <section className="bg-slate-900 py-16 md:py-24">
        <div className="container-custom">
          <div className="max-w-3xl">
            <span className="text-blue-400 font-semibold text-sm uppercase tracking-wide">Product Categories</span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white mt-2 mb-4">
              Products We Source from China
            </h1>
            <p className="text-lg text-slate-300 leading-relaxed">
              We source across a wide range of industries and product categories. If it is manufactured in China, we can help you find the right supplier.
            </p>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {categories.map((cat, index) => (
              <div key={cat.name} className="card group">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-blue-100 transition-colors">
                    <cat.icon className="w-6 h-6 text-blue-800" />
                  </div>
                  <div className="flex-1">
                    <h3 className="heading-3 mb-2">{cat.name}</h3>
                    <p className="body-text text-sm mb-4">{cat.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {cat.examples.map((example) => (
                        <span key={example} className="text-xs bg-slate-100 text-slate-600 px-2 py-1 rounded-full">
                          {example}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Image showcase */}
      <section className="section-padding bg-slate-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="heading-2 mb-4">Manufacturing Hubs We Cover</h2>
            <p className="body-text max-w-2xl mx-auto">
              China has specialized manufacturing regions for different product categories. We have established networks in all major industrial areas.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[
              { city: 'Shenzhen', products: 'Electronics & Tech', imgId: 'hub-shenzhen-b2c3d4' },
              { city: 'Guangzhou', products: 'Apparel & Textiles', imgId: 'hub-guangzhou-e5f6g7' },
              { city: 'Foshan', products: 'Furniture & Ceramics', imgId: 'hub-foshan-h8i9j1' },
              { city: 'Yiwu', products: 'Small Commodities', imgId: 'hub-yiwu-k2l3m4' },
              { city: 'Ningbo', products: 'Hardware & Tools', imgId: 'hub-ningbo-n5o6p7' },
              { city: 'Dongguan', products: 'Manufacturing & Molds', imgId: 'hub-dongguan-q8r9s1' },
              { city: 'Shanghai', products: 'Industrial & Chemical', imgId: 'hub-shanghai-t2u3v4' },
              { city: 'Qingdao', products: 'Machinery & Textiles', imgId: 'hub-qingdao-w5x6y7' },
            ].map((hub) => (
              <div key={hub.city} className="relative rounded-lg overflow-hidden aspect-square bg-slate-200 group">
                <div
                  className="absolute inset-0 transition-transform duration-300 group-hover:scale-105"
                  data-strk-bg-id={hub.imgId}
                  data-strk-bg={`[${hub.city}-hub] [${hub.products}-products]`}
                  data-strk-bg-ratio="1x1"
                  data-strk-bg-width="400"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/30 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <span id={`${hub.city}-hub`} className="text-white font-bold text-lg block">{hub.city}</span>
                  <span id={`${hub.products}-products`} className="text-slate-300 text-sm">{hub.products}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-blue-800">
        <div className="container-custom text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Do Not See Your Product Category?
          </h2>
          <p className="text-blue-200 mb-8 max-w-2xl mx-auto">
            We source virtually any product manufactured in China. Tell us what you need and we will find the right supplier.
          </p>
          <Link to="/contact" className="btn-primary">
            Tell Us What You Need
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </section>

      <InquiryForm />
    </div>
  )
}
