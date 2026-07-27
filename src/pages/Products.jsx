import { useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Cpu, Package, Shirt, HardHat, Building2, Globe, ChevronRight, ArrowRight, CheckCircle, Factory } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const categories = [
  {
    icon: Cpu,
    name: 'Electronics & Components',
    desc: 'We source consumer electronics, PCBs, sensors, displays, and industrial electronic components from certified manufacturers across China\'s major electronics hubs.',
    examples: ['Smart home devices', 'PCBs & components', 'Sensors & IoT modules', 'LED lighting', 'Power supplies', 'Audio equipment'],
  },
  {
    icon: Package,
    name: 'Home & Living',
    desc: 'From furniture to kitchenware, our supplier network covers all home and living categories with factories known for quality craftsmanship.',
    examples: ['Furniture & upholstery', 'Kitchenware & utensils', 'Home decor & textiles', 'Storage solutions', 'Bathroom accessories', 'Garden & outdoor'],
  },
  {
    icon: Shirt,
    name: 'Apparel & Accessories',
    desc: 'We connect you with garment factories, textile mills, and accessory manufacturers that meet international quality and compliance standards.',
    examples: ['Casual & formal wear', 'Sportswear & activewear', 'Bags & luggage', 'Shoes & footwear', 'Hats & caps', 'Scarves & accessories'],
  },
  {
    icon: HardHat,
    name: 'Industrial Parts',
    desc: 'Our network includes precision machining, metal fabrication, and industrial component suppliers serving global manufacturing companies.',
    examples: ['CNC machined parts', 'Metal stamping', 'Injection molding', 'Automotive components', 'Hardware & tools', 'Hydraulic parts'],
  },
  {
    icon: Building2,
    name: 'Packaging Materials',
    desc: 'From custom boxes to sustainable packaging, we source from verified packaging manufacturers who meet international quality standards.',
    examples: ['Corrugated boxes', 'Paper & cardboard', 'Plastic packaging', 'Glass & metal containers', 'Labels & stickers', 'Eco-friendly packaging'],
  },
  {
    icon: Globe,
    name: 'Specialty Products',
    desc: 'We handle unique and specialized product categories with dedicated supplier networks and expert knowledge.',
    examples: ['Pet supplies', 'Baby & kids products', 'Sporting goods', 'Promotional items', 'Beauty & personal care', 'Medical supplies'],
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
      <section className="bg-primary-900 pt-24 pb-16 md:pt-32 md:pb-20">
        <div className="section-container">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Products We Source
            </h1>
            <p className="text-lg md:text-xl text-neutral-300 leading-relaxed">
              Thousands of product categories across hundreds of industries. Our supplier network spans all major manufacturing regions in China.
            </p>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="section-padding">
        <div className="section-container">
          <div className="space-y-20">
            {categories.map((cat, i) => (
              <div key={i} className="grid md:grid-cols-2 gap-10 items-center">
                <div className={i % 2 === 1 ? 'md:order-2' : ''}>
                  <div className="w-14 h-14 bg-accent-50 rounded-xl flex items-center justify-center mb-5">
                    <cat.icon className="w-7 h-7 text-accent-600" />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold mb-4">{cat.name}</h2>
                  <p className="text-neutral-600 leading-relaxed mb-6">{cat.desc}</p>
                  <div className="grid grid-cols-2 gap-3">
                    {cat.examples.map((ex, j) => (
                      <div key={j} className="flex items-center gap-2 text-sm text-neutral-700">
                        <CheckCircle className="w-4 h-4 text-accent-500 flex-shrink-0" />
                        <span>{ex}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className={i % 2 === 1 ? 'md:order-1' : ''}>
                  <div
                    className="rounded-xl overflow-hidden shadow-lg aspect-[4/3] bg-primary-100"
                    data-strk-bg-id={`product-img-${i}`}
                    data-strk-bg={`[product-cat-${i}]`}
                    data-strk-bg-ratio="4x3"
                    data-strk-bg-width="800"
                  />
                  <div className="hidden">
                    <span id={`product-cat-${i}`}>{cat.name}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Manufacturing Regions */}
      <section className="section-padding bg-primary-50">
        <div className="section-container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Major Manufacturing Regions
            </h2>
            <p className="text-lg text-neutral-600">
              We have boots on the ground in China's key manufacturing hubs.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="card">
              <Factory className="w-8 h-8 text-primary-600 mb-4" />
              <h3 className="font-semibold mb-2">Guangdong Province</h3>
              <p className="text-neutral-600 text-sm">Electronics, consumer goods, apparel, and furniture. Home to Shenzhen, Guangzhou, and Dongguan.</p>
            </div>
            <div className="card">
              <Factory className="w-8 h-8 text-primary-600 mb-4" />
              <h3 className="font-semibold mb-2">Zhejiang Province</h3>
              <p className="text-neutral-600 text-sm">Light manufacturing, textiles, hardware, and small appliances. Yiwu, Ningbo, and Wenzhou hubs.</p>
            </div>
            <div className="card">
              <Factory className="w-8 h-8 text-primary-600 mb-4" />
              <h3 className="font-semibold mb-2">Jiangsu Province</h3>
              <p className="text-neutral-600 text-sm">Industrial parts, machinery, textiles, and chemical products. Suzhou, Nanjing, and Changzhou.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-primary-900">
        <div className="section-container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Can We Source Your Product?
            </h2>
            <p className="text-lg text-neutral-300 mb-8">
              Tell us what you need and we will check our supplier network. Most products can be sourced within 2-4 weeks.
            </p>
            <Link to="/contact" className="btn-primary text-lg inline-flex items-center gap-2">
              Submit Your Inquiry <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}