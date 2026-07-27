import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import {
  Cpu, Shirt, Armchair, Factory, Gem, Wrench,
  ArrowRight, CheckCircle, Package, Globe
} from 'lucide-react'

const categories = [
  {
    icon: Cpu,
    title: 'Electronics & Technology',
    description: 'Consumer electronics, components, accessories, and smart devices sourced from verified manufacturers.',
    products: [
      'LED Lighting Systems',
      'Phone & Tablet Accessories',
      'Smart Home Devices',
      'Power Banks & Chargers',
      'Bluetooth Speakers',
      'Security Cameras',
      'Wearable Technology',
      'Electronic Components',
    ],
    image: 'electronics tech products circuit board components',
    imageId: 'cat-electronics-n1o2p3',
  },
  {
    icon: Shirt,
    title: 'Textiles & Apparel',
    description: 'Clothing, fabrics, fashion accessories, and promotional textiles from quality manufacturers.',
    products: [
      'Custom Apparel',
      'Workwear & Uniforms',
      'Fashion Accessories',
      'Bags & Luggage',
      'Fabrics & Materials',
      'Sportswear',
      'Children\'s Clothing',
      'Promotional Textiles',
    ],
    image: 'textile factory fabric apparel manufacturing',
    imageId: 'cat-textiles-q4r5s6',
  },
  {
    icon: Armchair,
    title: 'Home & Garden',
    description: 'Furniture, home décor, kitchenware, garden products, and household items.',
    products: [
      'Indoor & Outdoor Furniture',
      'Kitchen Tools & Gadgets',
      'Home Décor Items',
      'Garden Equipment',
      'Storage Solutions',
      'Bathroom Accessories',
      'Lighting Fixtures',
      'Seasonal Decorations',
    ],
    image: 'home furniture interior design products',
    imageId: 'cat-home-t7u8v9',
  },
  {
    icon: Factory,
    title: 'Industrial & Tools',
    description: 'Machinery, hardware, hand tools, power tools, and industrial equipment.',
    products: [
      'Power Tools',
      'Hand Tools',
      'Hardware & Fasteners',
      'Industrial Machinery',
      'Safety Equipment',
      'Welding Equipment',
      'Measuring Instruments',
      'Material Handling',
    ],
    image: 'industrial machinery factory equipment tools',
    imageId: 'cat-industrial-w1x2y3',
  },
  {
    icon: Gem,
    title: 'Beauty & Health',
    description: 'Cosmetics, personal care products, health supplements, and wellness items.',
    products: [
      'Skincare Products',
      'Makeup & Cosmetics',
      'Hair Care Products',
      'Health Supplements',
      'Personal Care Items',
      'Beauty Tools',
      'Packaging Solutions',
      'Private Label Options',
    ],
    image: 'beauty cosmetics skincare products packaging',
    imageId: 'cat-beauty-z4a5b6',
  },
  {
    icon: Wrench,
    title: 'Custom Manufacturing',
    description: 'OEM/ODM products tailored to your exact specifications, branding, and requirements.',
    products: [
      'Custom Molds & Dies',
      'Private Label Products',
      'Prototype Development',
      'Custom Packaging',
      'Branded Merchandise',
      'Specialty Components',
      'Made-to-Order Items',
      'Small Batch Production',
    ],
    image: 'custom manufacturing CNC prototype development',
    imageId: 'cat-custom-c7d8e9',
  },
]

const Products = () => {
  const containerRef = useRef(null)

  useEffect(() => {
    if (containerRef.current) {
      return ImageHelper.loadImages(strkImgConfig, containerRef.current)
    }
  }, [])

  return (
    <div ref={containerRef}>
      {/* Hero */}
      <section className="bg-gradient-to-br from-brand-800 to-brand-950 section-padding text-center">
        <div className="container-max">
          <span className="inline-block px-4 py-1 bg-brand-700 text-brand-200 text-sm font-medium rounded-full mb-4">
            Product Categories
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Products We Source
          </h1>
          <p className="text-lg text-brand-200 max-w-2xl mx-auto">
            We source products across diverse industries. Whatever you need manufactured or supplied
            from China, we have the expertise and network to deliver.
          </p>
        </div>
      </section>

      {/* Categories */}
      <section className="section-padding bg-white">
        <div className="container-max space-y-24">
          {categories.map((category, index) => {
            const Icon = category.icon
            const isEven = index % 2 === 0
            return (
              <div key={index} className={`grid lg:grid-cols-2 gap-12 items-center ${!isEven ? 'lg:flex-row-reverse' : ''}`}>
                {/* Image */}
                <div className={`${!isEven ? 'lg:order-2' : ''}`}>
                  <div className="relative rounded-xl overflow-hidden shadow-lg bg-slate-100">
                    <img
                      data-strk-img-id={category.imageId}
                      data-strk-img={`[cat-${category.title.toLowerCase().replace(/[^a-z]/g, '-')}] ${category.image}`}
                      data-strk-img-ratio="16x9"
                      data-strk-img-width="800"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                      alt={category.title}
                      className="w-full h-auto"
                      id={`cat-${category.title.toLowerCase().replace(/[^a-z]/g, '-')}`}
                    />
                  </div>
                </div>

                {/* Content */}
                <div className={`${!isEven ? 'lg:order-1' : ''}`}>
                  <div className="w-12 h-12 bg-brand-100 rounded-lg flex items-center justify-center mb-6">
                    <Icon size={24} className="text-brand-600" />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">{category.title}</h2>
                  <p className="text-lg text-slate-600 mb-6">{category.description}</p>

                  <h3 className="font-semibold text-slate-900 mb-3">Products We Source:</h3>
                  <div className="grid grid-cols-2 gap-2">
                    {category.products.map((product, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <CheckCircle size={14} className="text-green-500 flex-shrink-0" />
                        <span className="text-sm text-slate-700">{product}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </section>

      {/* Capabilities */}
      <section className="section-padding bg-slate-50">
        <div className="container-max">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Our Sourcing Capabilities
            </h2>
            <p className="text-lg text-slate-600">
              We work with manufacturers across China to deliver quality products at competitive prices.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 text-center shadow-sm">
              <Package size={40} className="text-brand-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-slate-900 mb-2">Small to Large Orders</h3>
              <p className="text-slate-600">From prototype quantities to container loads, we accommodate all order sizes.</p>
            </div>
            <div className="bg-white rounded-xl p-8 text-center shadow-sm">
              <Globe size={40} className="text-brand-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-slate-900 mb-2">Global Shipping</h3>
              <p className="text-slate-600">We ship to any destination worldwide with full logistics support.</p>
            </div>
            <div className="bg-white rounded-xl p-8 text-center shadow-sm">
              <CheckCircle size={40} className="text-brand-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-slate-900 mb-2">Quality Assured</h3>
              <p className="text-slate-600">Multi-stage quality control ensures products meet your specifications.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-brand-700 text-center">
        <div className="container-max">
          <h2 className="text-3xl font-bold text-white mb-4">
            Can't Find What You're Looking For?
          </h2>
          <p className="text-brand-200 mb-8 max-w-2xl mx-auto">
            We source virtually any product from China. Contact us with your requirements and we'll
            find the right supplier for you.
          </p>
          <Link to="/contact" className="btn-accent gap-2">
            Request Custom Sourcing
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </div>
  )
}

export default Products
