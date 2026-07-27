import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import {
  Smartphone, Wrench, ShoppingCart, Shirt, Sofa, Cpu,
  ArrowRight, CheckCircle2, Factory, Globe,
} from 'lucide-react'

const categories = [
  {
    icon: Smartphone,
    name: 'Electronics & Gadgets',
    desc: 'Consumer electronics, smart devices, mobile accessories, PCBA, electronic components, cables, chargers, and IoT devices.',
    subcategories: ['Smartphones & tablets', 'Wearables', 'Bluetooth audio', 'Power banks & chargers', 'PCBA & components', 'Cables & connectors'],
    regions: 'Shenzhen, Dongguan, Guangzhou',
    bgImgId: 'products-electronics-bg-a1b2c3',
    titleId: 'products-electronics-title',
    descId: 'products-electronics-desc',
  },
  {
    icon: Wrench,
    name: 'Industrial Equipment & Machinery',
    desc: 'Manufacturing machinery, industrial tools, automation equipment, CNC parts, molds, pumps, motors, and construction equipment.',
    subcategories: ['CNC machining parts', 'Injection molds', 'Industrial pumps & motors', 'Construction machinery', 'Packaging equipment', 'Automation systems'],
    regions: 'Shanghai, Suzhou, Ningbo, Qingdao',
    bgImgId: 'products-industrial-bg-d4e5f6',
    titleId: 'products-industrial-title',
    descId: 'products-industrial-desc',
  },
  {
    icon: ShoppingCart,
    name: 'Consumer Goods & Houseware',
    desc: 'Kitchenware, household items, storage solutions, personal care products, stationery, toys, and general merchandise for retail and e-commerce.',
    subcategories: ['Kitchenware & cookware', 'Storage & organization', 'Personal care items', 'Toys & hobbies', 'Stationery & office supplies', 'Pet products'],
    regions: 'Yiwu, Shantou, Jinhua, Wenzhou',
    bgImgId: 'products-consumer-bg-g7h8i9',
    titleId: 'products-consumer-title',
    descId: 'products-consumer-desc',
  },
  {
    icon: Shirt,
    name: 'Textiles, Apparel & Accessories',
    desc: 'Garments, sportswear, workwear, bags, footwear, home textiles, fabrics, and fashion accessories for brands and retailers.',
    subcategories: ['Casual wear & fashion', 'Sportswear & activewear', 'Workwear & uniforms', 'Bags & luggage', 'Home textiles', 'Footwear'],
    regions: 'Guangzhou, Shaoxing, Ningbo, Jinjiang',
    bgImgId: 'products-textiles-bg-j1k2l3',
    titleId: 'products-textiles-title',
    descId: 'products-textiles-desc',
  },
  {
    icon: Sofa,
    name: 'Furniture & Home Decor',
    desc: 'Indoor and outdoor furniture, office furniture, home decor items, lighting, and custom furniture for retail, hospitality, and residential.',
    subcategories: ['Living room furniture', 'Bedroom furniture', 'Office furniture', 'Outdoor furniture', 'Lighting fixtures', 'Home decor & art'],
    regions: 'Foshan, Dongguan, Shenzhen, Anji',
    bgImgId: 'products-furniture-bg-m4n5o6',
    titleId: 'products-furniture-title',
    descId: 'products-furniture-desc',
  },
  {
    icon: Cpu,
    name: 'Auto Parts & Hardware',
    desc: 'Vehicle components, aftermarket auto parts, fasteners, metal stamping parts, bearings, springs, and industrial hardware.',
    subcategories: ['Engine & transmission parts', 'Body & interior parts', 'Fasteners & hardware', 'Bearings & seals', 'Metal stamping & fabrication', 'Motorcycle & EV parts'],
    regions: 'Wenzhou, Yongkang, Taizhou, Changzhou',
    bgImgId: 'products-auto-bg-p7q8r9',
    titleId: 'products-auto-title',
    descId: 'products-auto-desc',
  },
]

const regions = [
  { name: 'Pearl River Delta', cities: 'Shenzhen, Guangzhou, Dongguan, Foshan', focus: 'Electronics, furniture, textiles, plastics' },
  { name: 'Yangtze River Delta', cities: 'Shanghai, Suzhou, Ningbo, Wenzhou', focus: 'Industrial equipment, auto parts, textiles, hardware' },
  { name: 'Zhejiang Province', cities: 'Yiwu, Jinhua, Yongkang, Shaoxing', focus: 'Consumer goods, hardware, textiles, small commodities' },
  { name: 'Fujian Province', cities: 'Xiamen, Quanzhou, Jinjiang', focus: 'Footwear, apparel, stone products, ceramics' },
]

export default function Products() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <div ref={containerRef}>
      {/* Hero */}
      <section className="bg-navy text-white py-16 md:py-24">
        <div className="container-main">
          <div className="max-w-3xl">
            <span className="text-sm font-semibold text-gold uppercase tracking-wider">Products We Source</span>
            <h1 className="mt-4 text-4xl md:text-5xl font-bold leading-tight">What Can We Source for You?</h1>
            <p className="mt-4 text-lg text-slate-300 leading-relaxed">
              We cover all major manufacturing categories across China's key industrial regions. Whatever your product, we can find the right factory.
            </p>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="section-padding">
        <div className="container-main">
          <div className="space-y-14">
            {categories.map((cat, i) => (
              <div key={i} className={`flex flex-col ${i % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-10 items-center`}>
                <div className="flex-1">
                  <div className="w-12 h-12 bg-navy/5 rounded-lg flex items-center justify-center mb-4">
                    <cat.icon className="w-6 h-6 text-navy" />
                  </div>
                  <h2 id={cat.titleId} className="text-2xl font-bold text-navy">{cat.name}</h2>
                  <p id={cat.descId} className="mt-3 text-slate-600 leading-relaxed">{cat.desc}</p>
                  <div className="mt-4">
                    <p className="text-sm font-semibold text-navy mb-2">Includes:</p>
                    <div className="grid grid-cols-2 gap-2">
                      {cat.subcategories.map((sub) => (
                        <span key={sub} className="flex items-center gap-1.5 text-sm text-slate-600">
                          <CheckCircle2 className="w-3.5 h-3.5 text-green-500 flex-shrink-0" />
                          {sub}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="mt-3 flex items-center gap-1.5 text-sm text-slate-500">
                    <Globe className="w-4 h-4" />
                    Key regions: {cat.regions}
                  </div>
                </div>
                <div className="flex-1 w-full">
                  <div className="rounded-xl overflow-hidden h-64 md:h-80 w-full">
                    <div
                      data-strk-bg-id={cat.bgImgId}
                      data-strk-bg={`[${cat.descId}] [${cat.titleId}]`}
                      data-strk-bg-ratio="4x3"
                      data-strk-bg-width="800"
                      className="w-full h-full"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Manufacturing Regions */}
      <section className="bg-[#f7f8fa] section-padding">
        <div className="container-main">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-navy">Key Manufacturing Regions We Cover</h2>
            <p className="mt-3 text-slate-600 max-w-2xl mx-auto">
              Our team is based in Shenzhen with reach across all major industrial clusters in China.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {regions.map((region) => (
              <div key={region.name} className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                <div className="flex items-center gap-2 mb-3">
                  <Factory className="w-5 h-5 text-navy" />
                  <h3 className="text-lg font-semibold text-navy">{region.name}</h3>
                </div>
                <p className="text-sm text-slate-500 mb-2">Cities: {region.cities}</p>
                <p className="text-sm text-slate-600">Focus industries: {region.focus}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding">
        <div className="container-main text-center">
          <h2 className="text-3xl font-bold text-navy">Don't See Your Product Category?</h2>
          <p className="mt-3 text-slate-600 max-w-xl mx-auto">
            China manufactures almost everything. Contact us with your specific product and we'll find the right supplier.
          </p>
          <Link
            to="/contact"
            className="mt-6 inline-flex items-center gap-2 bg-gold hover:bg-gold-hover text-white font-semibold px-8 py-3.5 rounded-lg transition-colors"
          >
            Tell Us What You Need <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  )
}
