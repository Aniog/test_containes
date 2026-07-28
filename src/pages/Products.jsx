import React from 'react'
import { Link } from 'react-router-dom'
import {
  Cpu,
  Home,
  Shirt,
  Wrench,
  Package,
  Sofa,
  ArrowRight,
  Sparkles,
  Baby,
  Car,
  CheckCircle2,
  Phone,
} from 'lucide-react'

const productCategories = [
  {
    id: 'electronics',
    icon: Cpu,
    title: 'Electronics & Gadgets',
    description: 'Consumer electronics, smart devices, accessories, and electronic components sourced from specialized manufacturers.',
    products: [
      'LED lighting systems',
      'Phone and tablet accessories',
      'Smart home devices',
      'Audio equipment',
      'Power banks and chargers',
      'Computer peripherals',
    ],
    certifications: ['CE', 'FCC', 'RoHS', 'UL'],
  },
  {
    id: 'home-garden',
    icon: Home,
    title: 'Home & Garden',
    description: 'Furniture, home decor, kitchenware, garden tools, and outdoor living products for retail and wholesale.',
    products: [
      'Kitchen appliances',
      'Home decor items',
      'Garden tools and equipment',
      'Storage and organization',
      'Lighting fixtures',
      'Bathroom accessories',
    ],
    certifications: ['CE', 'FDA', 'LFGB'],
  },
  {
    id: 'apparel',
    icon: Shirt,
    title: 'Apparel & Textiles',
    description: 'Custom clothing, uniforms, bags, shoes, and fashion accessories with your branding.',
    products: [
      'Custom clothing lines',
      'Work uniforms and safety wear',
      'Bags and luggage',
      'Shoes and footwear',
      'Fashion accessories',
      'Home textiles',
    ],
    certifications: ['OEKO-TEX', 'GOTS', 'BSCI'],
  },
  {
    id: 'industrial',
    icon: Wrench,
    title: 'Industrial & Tools',
    description: 'Machinery, hardware, power tools, and industrial equipment for various applications.',
    products: [
      'Power tools',
      'Hand tools and hardware',
      'Safety equipment',
      'Industrial machinery',
      'Construction materials',
      'Automotive parts',
    ],
    certifications: ['CE', 'ISO', 'ANSI'],
  },
  {
    id: 'beauty',
    icon: Sparkles,
    title: 'Beauty & Health',
    description: 'Cosmetics, skincare, wellness products, and personal care items with private label options.',
    products: [
      'Skincare products',
      'Makeup and cosmetics',
      'Health supplements',
      'Personal care items',
      'Hair care products',
      'Beauty tools and accessories',
    ],
    certifications: ['FDA', 'GMP', 'ISO 22716'],
  },
  {
    id: 'custom',
    icon: Package,
    title: 'Custom & OEM Products',
    description: 'OEM/ODM manufacturing with your branding, specifications, and packaging requirements.',
    products: [
      'Private label products',
      'Custom packaging solutions',
      'Branded merchandise',
      'Prototype development',
      'Small batch production',
      'Custom formulations',
    ],
    certifications: ['Various per product'],
  },
]

const Products = () => {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary via-primary-light to-primary-dark pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center px-4 py-2 bg-white/10 rounded-full text-white/90 text-sm mb-6">
            Products We Source
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Wide Range of Product Categories
          </h1>
          <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto">
            Whatever product you need to source from China, we have the expertise,
            supplier network, and quality assurance processes to deliver.
          </p>
        </div>
      </section>

      {/* Product Categories */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {productCategories.map((category, index) => {
              const Icon = category.icon
              return (
                <div
                  key={category.id}
                  id={category.id}
                  className="grid lg:grid-cols-2 gap-12 items-start"
                >
                  {/* Visual */}
                  <div className={`${index % 2 === 0 ? '' : 'lg:order-2'}`}>
                    <div className="bg-gradient-to-br from-primary/5 to-primary/10 rounded-2xl p-12 relative">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <Icon className="h-32 w-32 text-primary/10" />
                      </div>
                      <div className="relative bg-white rounded-xl p-8 shadow-lg">
                        <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-4">
                          <Icon className="h-8 w-8 text-primary" />
                        </div>
                        <h3 className="text-xl font-semibold text-foreground mb-2">
                          {category.title}
                        </h3>
                        <p className="text-muted-foreground text-sm">
                          {category.description}
                        </p>
                        {category.certifications.length > 0 && (
                          <div className="flex flex-wrap gap-2 mt-4">
                            {category.certifications.map((cert, idx) => (
                              <span
                                key={idx}
                                className="inline-flex items-center px-2 py-1 bg-primary/10 rounded text-xs text-primary font-medium"
                              >
                                {cert}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className={`${index % 2 === 0 ? '' : 'lg:order-1'}`}>
                    <div className="w-14 h-14 bg-primary/5 rounded-xl flex items-center justify-center mb-6">
                      <Icon className="h-7 w-7 text-primary" />
                    </div>
                    <h2 className="text-3xl font-bold text-foreground mb-4">
                      {category.title}
                    </h2>
                    <p className="text-lg text-muted-foreground mb-6">
                      {category.description}
                    </p>
                    
                    <h4 className="text-sm font-semibold text-foreground mb-4">
                      Products We Source:
                    </h4>
                    <ul className="space-y-3 mb-8">
                      {category.products.map((product, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <CheckCircle2 className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                          <span className="text-muted-foreground">{product}</span>
                        </li>
                      ))}
                    </ul>

                    <Link
                      to="/contact"
                      className="inline-flex items-center justify-center px-6 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary-light transition-colors group"
                    >
                      Get a Quote for {category.title}
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Custom Products CTA */}
      <section className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Don't See Your Product Category?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            We source a wide variety of products beyond these categories. Contact us with
            your specific requirements and we'll let you know how we can help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-primary text-white font-semibold rounded-lg hover:bg-primary-light transition-colors group"
            >
              Contact Us
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <a
              href="tel:+8613800000000"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-primary font-semibold rounded-lg hover:bg-gray-50 transition-colors border border-border"
            >
              <Phone className="mr-2 h-5 w-5" />
              Call Us
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Products
