import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { CTASection, SectionHeader } from '../components/shared/CTASection'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '../strk-img-config.json'

const categories = [
  {
    name: 'Electronics & Components',
    desc: 'Consumer electronics, PCB assemblies, LED lighting, smart home devices, audio equipment, and electronic components.',
    imgId: 'prod-page-electronics-m1n2o3',
    titleId: 'prod-page-electronics-title',
    descId: 'prod-page-electronics-desc',
  },
  {
    name: 'Home & Garden Products',
    desc: 'Kitchenware, home decor, furniture, garden tools, storage solutions, and household items.',
    imgId: 'prod-page-home-p4q5r6',
    titleId: 'prod-page-home-title',
    descId: 'prod-page-home-desc',
  },
  {
    name: 'Apparel & Textiles',
    desc: 'Clothing, fabrics, sportswear, workwear, accessories, and textile raw materials.',
    imgId: 'prod-page-apparel-s7t8u9',
    titleId: 'prod-page-apparel-title',
    descId: 'prod-page-apparel-desc',
  },
  {
    name: 'Industrial & Hardware',
    desc: 'Machinery parts, fasteners, tools, valves, pumps, and industrial equipment components.',
    imgId: 'prod-page-industrial-v1w2x3',
    titleId: 'prod-page-industrial-title',
    descId: 'prod-page-industrial-desc',
  },
  {
    name: 'Auto Parts & Accessories',
    desc: 'OEM and aftermarket auto parts, car accessories, motorcycle components, and EV parts.',
    imgId: 'prod-page-auto-y4z5a6',
    titleId: 'prod-page-auto-title',
    descId: 'prod-page-auto-desc',
  },
  {
    name: 'Packaging & Printing',
    desc: 'Custom packaging, labels, boxes, bags, printing materials, and promotional items.',
    imgId: 'prod-page-packaging-b7c8d9',
    titleId: 'prod-page-packaging-title',
    descId: 'prod-page-packaging-desc',
  },
  {
    name: 'Health & Beauty',
    desc: 'Cosmetics, skincare, personal care products, beauty tools, and wellness items.',
    imgId: 'prod-page-beauty-e1f2g3',
    titleId: 'prod-page-beauty-title',
    descId: 'prod-page-beauty-desc',
  },
  {
    name: 'Sports & Outdoors',
    desc: 'Fitness equipment, outdoor gear, camping supplies, sporting goods, and recreational products.',
    imgId: 'prod-page-sports-h4i5j6',
    titleId: 'prod-page-sports-title',
    descId: 'prod-page-sports-desc',
  },
  {
    name: 'Toys & Baby Products',
    desc: 'Educational toys, plush toys, baby gear, children\'s products, and safety-certified items.',
    imgId: 'prod-page-toys-k7l8m9',
    titleId: 'prod-page-toys-title',
    descId: 'prod-page-toys-desc',
  },
]

const sourcingRegions = [
  { region: 'Guangdong (Shenzhen, Guangzhou, Dongguan)', specialties: 'Electronics, hardware, apparel, furniture' },
  { region: 'Zhejiang (Yiwu, Ningbo, Wenzhou)', specialties: 'Consumer goods, textiles, auto parts, machinery' },
  { region: 'Jiangsu (Suzhou, Wuxi, Changzhou)', specialties: 'Machinery, electronics, textiles, chemicals' },
  { region: 'Fujian (Xiamen, Quanzhou)', specialties: 'Shoes, stone products, tea, ceramics' },
  { region: 'Shandong (Qingdao, Jinan)', specialties: 'Machinery, chemicals, food processing, textiles' },
]

export default function Products() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <div ref={containerRef}>
      {/* Hero */}
      <section className="bg-navy-dark py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Products We Source</h1>
          <p className="text-xl text-gray-300 max-w-2xl">
            We source across a wide range of product categories from China's key manufacturing regions. If it is made in China, we can help you find a reliable supplier.
          </p>
        </div>
      </section>

      {/* Product Categories */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Product Categories"
            subtitle="Explore the types of products we regularly source for our clients."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((cat, i) => (
              <div key={i} className="bg-white rounded-lg border border-gray-200 overflow-hidden hover:shadow-md transition-shadow">
                <img
                  alt={cat.name}
                  data-strk-img-id={cat.imgId}
                  data-strk-img={`[${cat.descId}] [${cat.titleId}]`}
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="w-full h-48 object-cover bg-gray-100"
                />
                <div className="p-5">
                  <h3 id={cat.titleId} className="text-lg font-semibold text-gray-900 mb-2">{cat.name}</h3>
                  <p id={cat.descId} className="text-sm text-gray-600 leading-relaxed">{cat.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sourcing Regions */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Key Sourcing Regions"
            subtitle="We have established networks across China's major manufacturing hubs."
          />
          <div className="max-w-4xl mx-auto">
            <div className="space-y-4">
              {sourcingRegions.map((region, i) => (
                <div key={i} className="bg-white rounded-lg border border-gray-200 p-5 flex flex-col sm:flex-row sm:items-center gap-3">
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900">{region.region}</h3>
                  </div>
                  <div className="text-sm text-gray-600">{region.specialties}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Can't Find Your Product */}
      <section className="py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Don't See Your Product Category?</h2>
          <p className="text-gray-600 mb-8">
            The categories above represent our most common requests, but we are not limited to them. If your product is made in China, we can help you source it. Contact us with your requirements and we will let you know how we can help.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-sky-brand text-white px-8 py-4 rounded-md text-lg font-semibold hover:bg-sky-brand-hover transition-colors"
          >
            Tell Us What You Need
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      <CTASection />
    </div>
  )
}
