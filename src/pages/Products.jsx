import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { 
  Zap, Factory, Package, Globe, Car, Shield, Printer, Wrench,
  ArrowRight, CheckCircle, Search
} from 'lucide-react'
import SectionHeader from '@/components/shared/SectionHeader'

const categories = [
  {
    id: 'electronics',
    icon: Zap,
    title: 'Electronics & Components',
    description: 'Consumer electronics, PCBs, connectors, LED lighting, power supplies, IoT devices, and electronic components.',
    products: ['Smartphones & Tablets', 'LED Lighting', 'PCB Assemblies', 'Power Banks', 'Chargers & Cables', 'IoT Devices'],
    supplierCount: '320+',
    color: 'bg-royal-50 border-royal-200',
    iconColor: 'bg-royal-100 text-royal-600',
    titleId: 'cat-electronics-title',
    descId: 'cat-electronics-desc',
  },
  {
    id: 'machinery',
    icon: Factory,
    title: 'Machinery & Equipment',
    description: 'Industrial machinery, CNC equipment, packaging machines, construction equipment, and specialized manufacturing tools.',
    products: ['CNC Machines', 'Packaging Equipment', 'Industrial Tools', 'Hydraulic Systems', 'Welding Equipment', 'Conveyor Systems'],
    supplierCount: '180+',
    color: 'bg-cta-50 border-cta-200',
    iconColor: 'bg-cta-100 text-cta-600',
    titleId: 'cat-machinery-title',
    descId: 'cat-machinery-desc',
  },
  {
    id: 'textiles',
    icon: Package,
    title: 'Textiles & Apparel',
    description: 'Fashion apparel, sportswear, workwear, fabrics, home textiles, and custom clothing manufacturing.',
    products: ['Fashion Apparel', 'Sportswear', 'Workwear & Uniforms', 'Fabrics & Materials', 'Home Textiles', 'Accessories'],
    supplierCount: '450+',
    color: 'bg-trust-50 border-trust-200',
    iconColor: 'bg-trust-100 text-trust-600',
    titleId: 'cat-textiles-title',
    descId: 'cat-textiles-desc',
  },
  {
    id: 'home-garden',
    icon: Globe,
    title: 'Home & Garden Products',
    description: 'Furniture, kitchenware, bathroom fixtures, garden tools, outdoor furniture, and home décor items.',
    products: ['Furniture', 'Kitchenware', 'Bathroom Fixtures', 'Garden Tools', 'Outdoor Furniture', 'Home Décor'],
    supplierCount: '280+',
    color: 'bg-navy-50 border-navy-200',
    iconColor: 'bg-navy-100 text-navy-600',
    titleId: 'cat-home-title',
    descId: 'cat-home-desc',
  },
  {
    id: 'automotive',
    icon: Car,
    title: 'Automotive Parts',
    description: 'OEM and aftermarket auto parts, electrical components, body parts, engine components, and accessories.',
    products: ['OEM Parts', 'Aftermarket Parts', 'Electrical Components', 'Body Panels', 'Engine Parts', 'Accessories'],
    supplierCount: '150+',
    color: 'bg-royal-50 border-royal-200',
    iconColor: 'bg-royal-100 text-royal-600',
    titleId: 'cat-automotive-title',
    descId: 'cat-automotive-desc',
  },
  {
    id: 'medical',
    icon: Shield,
    title: 'Medical Supplies',
    description: 'PPE, medical devices, diagnostic equipment, laboratory supplies, and healthcare products.',
    products: ['PPE Equipment', 'Medical Devices', 'Diagnostic Tools', 'Lab Supplies', 'Hospital Furniture', 'Healthcare Products'],
    supplierCount: '120+',
    color: 'bg-trust-50 border-trust-200',
    iconColor: 'bg-trust-100 text-trust-600',
    titleId: 'cat-medical-title',
    descId: 'cat-medical-desc',
  },
  {
    id: 'packaging',
    icon: Printer,
    title: 'Packaging & Printing',
    description: 'Custom packaging, labels, printed materials, corrugated boxes, and promotional items.',
    products: ['Custom Boxes', 'Labels & Stickers', 'Printed Materials', 'Corrugated Packaging', 'Promotional Items', 'Gift Packaging'],
    supplierCount: '200+',
    color: 'bg-cta-50 border-cta-200',
    iconColor: 'bg-cta-100 text-cta-600',
    titleId: 'cat-packaging-title',
    descId: 'cat-packaging-desc',
  },
  {
    id: 'custom',
    icon: Wrench,
    title: 'Custom Products',
    description: 'We source custom and specialized products based on your unique specifications, drawings, and requirements.',
    products: ['Custom Manufacturing', 'OEM/ODM Products', 'Prototype Production', 'Specialty Items', 'New Product Development', 'Small Batch Runs'],
    supplierCount: '500+',
    color: 'bg-navy-50 border-navy-200',
    iconColor: 'bg-navy-100 text-navy-600',
    titleId: 'cat-custom-title',
    descId: 'cat-custom-desc',
  },
]

export default function Products() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <div ref={containerRef}>
      {/* Page Header */}
      <section className="bg-gradient-to-br from-navy-900 to-navy-950 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block bg-cta-500/20 text-cta-400 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            Product Categories
          </span>
          <h1 className="text-4xl lg:text-5xl font-extrabold text-white mb-4">
            Products We Source
          </h1>
          <p className="text-lg text-navy-200 max-w-3xl mx-auto">
            We source a comprehensive range of products across major industries. 
            Our verified supplier network covers everything from consumer goods to industrial equipment.
          </p>
        </div>
      </section>

      {/* Product Categories */}
      <section className="bg-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            {categories.map((category) => (
              <div
                key={category.id}
                className={`${category.color} border rounded-2xl p-6 lg:p-8 hover:shadow-lg transition-shadow`}
              >
                <div className="flex items-start gap-4 mb-5">
                  <div className={`w-14 h-14 ${category.iconColor} rounded-xl flex items-center justify-center flex-shrink-0`}>
                    <category.icon className="w-7 h-7" />
                  </div>
                  <div>
                    <h2 id={category.titleId} className="text-xl lg:text-2xl font-bold text-navy-900">{category.title}</h2>
                    <span className="text-sm text-gray-500">{category.supplierCount} verified suppliers</span>
                  </div>
                </div>

                <p id={category.descId} className="text-gray-600 leading-relaxed mb-5">{category.description}</p>

                <div className="bg-white rounded-xl p-4">
                  <h4 className="font-semibold text-navy-900 text-sm mb-3">Common Products:</h4>
                  <div className="flex flex-wrap gap-2">
                    {category.products.map((product) => (
                      <span key={product} className="bg-gray-100 text-gray-700 text-xs font-medium px-3 py-1.5 rounded-full">
                        {product}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Don't See Your Product */}
      <section className="bg-gray-50 py-16 lg:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white rounded-2xl shadow-lg p-8 lg:p-12 border border-gray-100">
            <div className="w-16 h-16 bg-cta-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Search className="w-8 h-8 text-cta-600" />
            </div>
            <h2 className="text-2xl lg:text-3xl font-bold text-navy-900 mb-4">
              Don&apos;t See Your Product?
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-8 max-w-2xl mx-auto">
              We source virtually any product manufactured in China. Submit your requirements 
              and our team will find the right suppliers for your specific needs.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-cta-500 hover:bg-cta-600 text-white px-8 py-3.5 rounded-xl font-semibold transition-colors shadow-sm"
              >
                Submit Your Requirements
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/how-it-works"
                className="inline-flex items-center gap-2 text-cta-500 hover:text-cta-600 font-semibold transition-colors"
              >
                Learn About Our Process
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Source From China */}
      <section className="bg-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Why China"
            title="Why Source Products from China?"
            subtitle="China remains the world's manufacturing hub with significant advantages for global buyers."
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: 'Competitive Pricing', description: 'Lower manufacturing costs due to economies of scale, established supply chains, and efficient production.' },
              { title: 'Wide Product Range', description: 'Access to virtually every product category with thousands of specialized manufacturers.' },
              { title: 'Scalable Production', description: 'Factories equipped to handle orders from small batches to millions of units.' },
              { title: 'Established Infrastructure', description: 'World-class logistics, ports, and shipping infrastructure for efficient global delivery.' },
            ].map((reason) => (
              <div key={reason.title} className="bg-gray-50 rounded-xl p-6 border border-gray-100">
                <div className="w-10 h-10 bg-trust-100 rounded-lg flex items-center justify-center mb-4">
                  <CheckCircle className="w-5 h-5 text-trust-600" />
                </div>
                <h3 className="font-bold text-navy-900 mb-2">{reason.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{reason.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
