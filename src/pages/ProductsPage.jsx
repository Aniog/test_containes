import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle, Clock, Package, Minimize2 } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const products = [
  {
    id: 'electronics',
    name: 'Electronics',
    description:
      'From consumer electronics to industrial components, we source high-quality electronic products from verified manufacturers.',
    subcategories: [
      'Consumer Electronics',
      'Smart Devices',
      'Electronic Components',
      'LED Lighting',
      'Power Banks & Batteries',
      'Cables & Connectors',
    ],
    moq: '500-5,000 units',
    leadTime: '3-8 weeks',
    certifications: ['CE', 'FCC', 'RoHS', 'UL'],
    image: 'electronics manufacturing factory',
  },
  {
    id: 'furniture',
    name: 'Furniture',
    description:
      'We connect you with reliable furniture manufacturers offering competitive pricing and consistent quality for home and commercial use.',
    subcategories: [
      'Home Furniture',
      'Office Furniture',
      'Outdoor Furniture',
      'Custom Woodwork',
      'Metal Furniture',
      'Upholstered Items',
    ],
    moq: '100-500 units',
    leadTime: '4-10 weeks',
    certifications: ['ISO 9001', 'FSC', 'CARB'],
    image: 'furniture manufacturing warehouse',
  },
  {
    id: 'textiles',
    name: 'Textiles & Apparel',
    description:
      'Access a wide network of textile manufacturers for fabrics, garments, and custom textile production with quality assurance.',
    subcategories: [
      'Fabrics & Materials',
      'Ready-made Garments',
      'Custom Apparel',
      'Home Textiles',
      'Sportswear',
      'Accessories',
    ],
    moq: '500-10,000 units',
    leadTime: '3-8 weeks',
    certifications: ['OEKO-TEX', 'ISO 9001', 'WRAP'],
    image: 'textile factory production',
  },
  {
    id: 'machinery',
    name: 'Machinery',
    description:
      'Source industrial machinery and equipment parts from certified manufacturers with comprehensive quality control.',
    subcategories: [
      'Industrial Machinery',
      'Equipment Parts',
      'Manufacturing Tools',
      'Agricultural Machinery',
      'Construction Equipment',
      'Packaging Machinery',
    ],
    moq: '10-500 units',
    leadTime: '6-16 weeks',
    certifications: ['ISO 9001', 'CE', 'CCC'],
    image: 'industrial machinery factory',
  },
  {
    id: 'packaging',
    name: 'Packaging',
    description:
      'Find custom packaging solutions that protect your products and enhance your brand presence at competitive prices.',
    subcategories: [
      'Custom Boxes',
      'Paper Packaging',
      'Plastic Packaging',
      'Labels & Stickers',
      'Bags & Pouches',
      'Promotional Materials',
    ],
    moq: '1,000-50,000 units',
    leadTime: '2-6 weeks',
    certifications: ['FSC', 'ISO 9001'],
    image: 'packaging manufacturing facility',
  },
  {
    id: 'consumer-goods',
    name: 'Consumer Goods',
    description:
      'We source a wide variety of consumer products for retail, from kitchenware to toys, with strict quality standards.',
    subcategories: [
      'Kitchenware',
      'Home Goods',
      'Toys & Games',
      'Sports Equipment',
      'Pet Supplies',
      'Beauty & Personal Care',
    ],
    moq: '500-10,000 units',
    leadTime: '3-8 weeks',
    certifications: ['CE', 'ASTM', 'EN71', 'REACH'],
    image: 'consumer goods warehouse',
  },
]

const capabilities = [
  {
    icon: Package,
    title: 'Custom Manufacturing',
    description:
      'We can arrange custom production based on your specifications, drawings, or samples.',
  },
  {
    icon: Minimize2,
    title: 'Flexible MOQs',
    description:
      'We work with suppliers who offer flexible minimum order quantities to suit businesses of all sizes.',
  },
  {
    icon: CheckCircle,
    title: 'Quality Assurance',
    description:
      'Every product category comes with our quality control inspection protocol.',
  },
  {
    icon: Clock,
    title: 'Fast Turnaround',
    description:
      'Our established supplier relationships enable efficient production timelines.',
  },
]

export default function ProductsPage() {
  const containerRef = useRef(null)
  const [activeProduct, setActiveProduct] = useState(products[0])

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <div ref={containerRef}>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#1E3A5F] to-[#2D5A87] py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="font-plus text-4xl sm:text-5xl font-bold text-white mb-6">
              Products We Source
            </h1>
            <p className="font-inter text-lg sm:text-xl text-white/80 max-w-3xl mx-auto">
              Extensive experience across multiple product categories. We help
              you find the right manufacturers for your specific needs.
            </p>
          </div>
        </div>

        {/* Wave Divider */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg
            viewBox="0 0 1440 120"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
              fill="#F8FAFC"
            />
          </svg>
        </div>
      </section>

      {/* Capabilities */}
      <section className="py-16 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-6">
            {capabilities.map((cap, index) => (
              <div
                key={index}
                className="flex gap-4 p-6 bg-white rounded-xl border border-[#E2E8F0]"
              >
                <div className="w-12 h-12 bg-[#1E3A5F]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <cap.icon className="w-6 h-6 text-[#1E3A5F]" />
                </div>
                <div>
                  <h3 className="font-plus font-semibold text-[#1E293B] mb-1">
                    {cap.title}
                  </h3>
                  <p className="font-inter text-sm text-[#64748B]">
                    {cap.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Product Tabs */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {products.map((product) => (
              <button
                key={product.id}
                onClick={() => setActiveProduct(product)}
                className={`px-6 py-3 rounded-lg font-inter font-medium transition-all ${
                  activeProduct.id === product.id
                    ? 'bg-[#E67E22] text-white'
                    : 'bg-[#F8FAFC] text-[#1E293B] hover:bg-[#E2E8F0]'
                }`}
              >
                {product.name}
              </button>
            ))}
          </div>

          {/* Product Detail */}
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Image */}
            <div className="relative rounded-2xl overflow-hidden aspect-[4/3]">
              <img
                data-strk-img-id={`product-detail-${activeProduct.id}-8f2a9c`}
                data-strk-img={`[product-detail-title-${activeProduct.id}]`}
                data-strk-img-ratio="4x3"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={activeProduct.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/60 to-transparent" />
              <div className="absolute bottom-6 left-6">
                <p
                  id={`product-detail-title-${activeProduct.id}`}
                  className="font-plus text-white font-semibold text-2xl"
                >
                  {activeProduct.name}
                </p>
              </div>
            </div>

            {/* Details */}
            <div>
              <p className="font-inter text-lg text-[#64748B] mb-8">
                {activeProduct.description}
              </p>

              <div className="mb-8">
                <h3 className="font-plus font-semibold text-[#1E293B] mb-4">
                  Subcategories
                </h3>
                <div className="flex flex-wrap gap-2">
                  {activeProduct.subcategories.map((sub, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-[#F8FAFC] border border-[#E2E8F0] rounded-full font-inter text-sm text-[#64748B]"
                    >
                      {sub}
                    </span>
                  ))}
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-6 mb-8">
                <div className="p-4 bg-[#F8FAFC] rounded-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <Minimize2 className="w-4 h-4 text-[#1E3A5F]" />
                    <span className="font-plus font-semibold text-[#1E293B]">
                      Minimum Order
                    </span>
                  </div>
                  <p className="font-inter text-[#64748B]">{activeProduct.moq}</p>
                </div>
                <div className="p-4 bg-[#F8FAFC] rounded-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <Clock className="w-4 h-4 text-[#1E3A5F]" />
                    <span className="font-plus font-semibold text-[#1E293B]">
                      Lead Time
                    </span>
                  </div>
                  <p className="font-inter text-[#64748B]">{activeProduct.leadTime}</p>
                </div>
              </div>

              <div>
                <h3 className="font-plus font-semibold text-[#1E293B] mb-3">
                  Common Certifications
                </h3>
                <div className="flex flex-wrap gap-2">
                  {activeProduct.certifications.map((cert, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-[#27AE60]/10 text-[#27AE60] rounded-full font-inter text-sm font-medium"
                    >
                      {cert}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* All Products Grid */}
      <section className="py-20 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-plus text-3xl sm:text-4xl font-bold text-[#1E293B] mb-4">
              Explore Product Categories
            </h2>
            <p className="font-inter text-lg text-[#64748B]">
              Click on any category to learn more
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <button
                key={index}
                onClick={() => setActiveProduct(product)}
                className="group relative overflow-hidden rounded-xl aspect-[4/3] text-left"
              >
                <img
                  data-strk-img-id={`product-grid-${index}-8f2a9c`}
                  data-strk-img={`[product-grid-title-${index}]`}
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/80 via-[#0F172A]/40 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3
                    id={`product-grid-title-${index}`}
                    className="font-plus text-xl font-semibold text-white mb-1"
                  >
                    {product.name}
                  </h3>
                  <p className="font-inter text-sm text-white/80 line-clamp-2">
                    {product.description}
                  </p>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#1E3A5F] to-[#2D5A87]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-plus text-3xl sm:text-4xl font-bold text-white mb-4">
            Don't See Your Product Category?
          </h2>
          <p className="font-inter text-lg text-white/80 mb-8">
            Contact us with your specific requirements. We have access to
            thousands of suppliers across various industries.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#E67E22] text-white font-inter font-semibold text-lg rounded-lg hover:bg-[#D35400] transition-all hover:scale-105"
          >
            Discuss Your Requirements
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  )
}