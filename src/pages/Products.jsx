import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import {
  ArrowRight, Package, Cpu, Home, Shirt, Wrench, Printer, Car,
  CheckCircle, Search, ShieldCheck, ClipboardCheck
} from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const categories = [
  {
    icon: Cpu,
    name: 'Electronics & Components',
    shortDesc: 'Consumer electronics, PCBA, cables, chargers, IoT devices, LED lighting',
    details: [
      'Smartphones, tablets, and accessories',
      'PCBA and electronic components',
      'Cables, connectors, and adapters',
      'Power banks and charging stations',
      'IoT sensors and smart home devices',
      'LED modules and lighting systems',
    ],
    experience: '12+ years sourcing electronics from Shenzhen and Dongguan hubs',
    query: 'electronics manufacturing pcb assembly factory',
  },
  {
    icon: Home,
    name: 'Home & Garden',
    shortDesc: 'Furniture, lighting, kitchenware, decor, outdoor and gardening products',
    details: [
      'Indoor and outdoor furniture',
      'Kitchenware and small appliances',
      'Home decor and textiles',
      'Gardening tools and planters',
      'Lighting fixtures and lamps',
      'Bathroom accessories',
    ],
    experience: 'Strong network in Foshan furniture and Ningbo homeware clusters',
    query: 'furniture manufacturing home products factory',
  },
  {
    icon: Shirt,
    name: 'Apparel & Textiles',
    shortDesc: 'Garments, bags, fabrics, accessories, footwear, and textile products',
    details: [
      'Casual and sportswear',
      'Bags, backpacks, and luggage',
      'Fabrics and raw textiles',
      'Fashion accessories',
      'Footwear and shoe components',
      'Workwear and uniforms',
    ],
    experience: 'Access to Guangzhou and Hangzhou garment manufacturing zones',
    query: 'textile garment factory production line',
  },
  {
    icon: Wrench,
    name: 'Machinery & Hardware',
    shortDesc: 'Industrial equipment, tools, metal parts, fasteners, and hardware',
    details: [
      'Hand and power tools',
      'Metal stamping and machining parts',
      'Fasteners, screws, and bolts',
      'Industrial machinery components',
      'Construction hardware',
      'Hydraulic and pneumatic parts',
    ],
    experience: 'Deep connections in Ningbo hardware and Wenzhou valve clusters',
    query: 'machinery hardware metal parts manufacturing',
  },
  {
    icon: Printer,
    name: 'Packaging & Printing',
    shortDesc: 'Boxes, labels, bags, promotional materials, and custom packaging',
    details: [
      'Corrugated and rigid boxes',
      'Flexible packaging and pouches',
      'Labels and stickers',
      'Retail display packaging',
      'Promotional printed materials',
      'Eco-friendly packaging options',
    ],
    experience: 'Packaging sourcing across Shenzhen, Dongguan, and Shanghai regions',
    query: 'packaging printing factory boxes labels',
  },
  {
    icon: Car,
    name: 'Automotive Parts',
    shortDesc: 'Auto accessories, replacement parts, EV components, and car care',
    details: [
      'Interior and exterior accessories',
      'Replacement and aftermarket parts',
      'EV charging components',
      'Car care and maintenance products',
      'Lighting and electrical parts',
      'Tools and diagnostic equipment',
    ],
    experience: 'Growing supplier base in automotive manufacturing hubs',
    query: 'automotive parts manufacturing factory',
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
      <section className="bg-slate-900 py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-secondary font-semibold text-sm uppercase tracking-wider">Industries</span>
            <h1 className="text-4xl md:text-5xl font-extrabold text-white mt-3 mb-6">
              Products We Source
            </h1>
            <p className="text-slate-300 text-lg leading-relaxed mb-8">
              We have deep expertise across China&apos;s major manufacturing clusters. Whether you need electronics from Shenzhen or furniture from Foshan, we know where to find the best suppliers.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-secondary text-white font-semibold rounded-md hover:bg-secondary-hover transition-colors"
            >
              Discuss Your Product <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {categories.map((cat, idx) => (
              <div
                key={cat.name}
                className={`grid lg:grid-cols-2 gap-10 items-center ${idx % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
              >
                <div className={idx % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <cat.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h2 className="text-2xl md:text-3xl font-bold text-slate-800">{cat.name}</h2>
                  </div>
                  <p className="text-slate-500 leading-relaxed mb-6">{cat.shortDesc}</p>

                  <div className="grid sm:grid-cols-2 gap-3 mb-6">
                    {cat.details.map((detail) => (
                      <div key={detail} className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                        <span className="text-slate-600 text-sm">{detail}</span>
                      </div>
                    ))}
                  </div>

                  <div className="bg-primary-light rounded-lg p-4 mb-6">
                    <p className="text-primary text-sm font-medium">
                      {cat.experience}
                    </p>
                  </div>

                  <Link
                    to="/contact"
                    className="inline-flex items-center text-primary font-semibold hover:text-primary-hover transition-colors"
                  >
                    Source {cat.name.split(' ')[0]} products <ArrowRight className="w-5 h-5 ml-2" />
                  </Link>
                </div>

                <div className={`${idx % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <div
                    className="aspect-[4/3] rounded-lg bg-slate-100 overflow-hidden"
                    data-strk-bg-id={`product-bg-${idx}-ssourcing`}
                    data-strk-bg={`[product-title-${idx}]`}
                    data-strk-bg-ratio="4x3"
                    data-strk-bg-width="800"
                  />
                  <span id={`product-title-${idx}`} className="sr-only">{cat.query}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How We Source */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
              How We Source Any Product
            </h2>
            <p className="text-slate-500 text-lg">
              Even if your product category is not listed above, our process works for virtually any manufactured good.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-white rounded-lg border border-slate-100 shadow-sm">
              <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-5">
                <Search className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-lg font-bold text-slate-800 mb-2">Market Mapping</h3>
              <p className="text-slate-500 text-sm leading-relaxed">
                We identify the right manufacturing region for your product. China has specialized clusters for almost every industry.
              </p>
            </div>
            <div className="text-center p-8 bg-white rounded-lg border border-slate-100 shadow-sm">
              <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-5">
                <ShieldCheck className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-lg font-bold text-slate-800 mb-2">Supplier Vetting</h3>
              <p className="text-slate-500 text-sm leading-relaxed">
                Every supplier is evaluated on capability, capacity, certifications, and track record before we present them to you.
              </p>
            </div>
            <div className="text-center p-8 bg-white rounded-lg border border-slate-100 shadow-sm">
              <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-5">
                <ClipboardCheck className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-lg font-bold text-slate-800 mb-2">Quality Assurance</h3>
              <p className="text-slate-500 text-sm leading-relaxed">
                We implement inspection protocols tailored to your product type, ensuring consistent quality on every order.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Have a product in mind?
          </h2>
          <p className="text-primary-light text-lg mb-8">
            Send us your specs and we will tell you exactly how we can help source it from China.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center px-8 py-4 bg-secondary text-white text-base font-semibold rounded-md hover:bg-secondary-hover transition-colors"
          >
            Submit Your Inquiry <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </section>
    </div>
  )
}