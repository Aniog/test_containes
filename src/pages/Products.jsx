import React from 'react'
import { Link } from 'react-router-dom'
import { 
  Cpu, Home, Shirt, Cog, Package, Sparkles,
  ArrowRight, CheckCircle, Phone
} from 'lucide-react'

const productCategories = [
  {
    id: 'electronics',
    icon: Cpu,
    title: 'Electronics & Technology',
    description: 'Consumer electronics, components, accessories, and smart devices sourced from verified manufacturers.',
    products: [
      'LED lighting products',
      'Phone and tablet accessories',
      'Power banks and chargers',
      'Audio equipment',
      'Smart home devices',
      'Computer peripherals',
      'Security cameras',
      'Electronic components',
    ],
    certifications: ['CE', 'FCC', 'RoHS', 'UL'],
    image: 'Modern electronics manufacturing facility',
  },
  {
    id: 'home-garden',
    icon: Home,
    title: 'Home & Garden',
    description: 'Furniture, decor, kitchenware, and outdoor living products for residential and commercial use.',
    products: [
      'Indoor and outdoor furniture',
      'Kitchen appliances',
      'Garden tools and equipment',
      'Home decor items',
      'Bathroom accessories',
      'Lighting fixtures',
      'Storage solutions',
      'Seasonal decorations',
    ],
    certifications: ['CE', 'FDA', 'CPSIA'],
    image: 'Home furniture showroom with modern designs',
  },
  {
    id: 'apparel',
    icon: Shirt,
    title: 'Apparel & Textiles',
    description: 'Clothing, fabrics, bags, and fashion accessories for retail and wholesale distribution.',
    products: [
      'T-shirts and casual wear',
      'Workwear and uniforms',
      'Bags and luggage',
      'Fashion accessories',
      'Fabrics and textiles',
      'Sportswear',
      'Children\'s clothing',
      'Protective clothing',
    ],
    certifications: ['OEKO-TEX', 'GOTS', 'BSCI'],
    image: 'Textile factory with fabric rolls',
  },
  {
    id: 'machinery',
    icon: Cog,
    title: 'Machinery & Industrial Parts',
    description: 'Industrial equipment, spare parts, and manufacturing tools for various industries.',
    products: [
      'CNC machined parts',
      'Industrial tools',
      'Machine components',
      'Hardware and fasteners',
      'Hydraulic components',
      'Pneumatic parts',
      'Custom metal fabrication',
      'Injection molded parts',
    ],
    certifications: ['ISO 9001', 'CE', 'TS 16949'],
    image: 'Industrial machinery manufacturing',
  },
  {
    id: 'packaging',
    icon: Package,
    title: 'Packaging & Printing',
    description: 'Custom packaging, labels, promotional materials, and printing services.',
    products: [
      'Custom boxes and cartons',
      'Labels and stickers',
      'Promotional items',
      'Print materials',
      'Gift packaging',
      'Food packaging',
      'Cosmetic packaging',
      'Eco-friendly packaging',
    ],
    certifications: ['ISO 14001', 'FSC', 'FDA'],
    image: 'Custom packaging production line',
  },
  {
    id: 'custom',
    icon: Sparkles,
    title: 'Custom & OEM Products',
    description: 'OEM/ODM manufacturing for unique product requirements and private label products.',
    products: [
      'Custom mold development',
      'Private label products',
      'Prototype development',
      'Bulk custom orders',
      'Product modifications',
      'Custom specifications',
      'Branded merchandise',
      'Specialty items',
    ],
    certifications: ['ISO 9001', 'CE', 'Custom certifications'],
    image: 'Custom product development workshop',
  },
]

export default function Products() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-900 to-primary-700 text-white py-20 md:py-28">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="heading-1 mb-6">Products We Source</h1>
            <p className="body-large text-gray-300">
              From consumer electronics to industrial machinery, we source a wide range 
              of products from verified Chinese manufacturers across multiple industries.
            </p>
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="space-y-16">
            {productCategories.map((category, index) => (
              <div
                key={category.id}
                id={category.id}
                className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
              >
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="w-16 h-16 bg-accent-50 rounded-2xl flex items-center justify-center mb-6">
                    <category.icon className="w-8 h-8 text-accent" />
                  </div>
                  <h2 className="heading-2 text-foreground mb-4">{category.title}</h2>
                  <p className="body-large text-muted-foreground mb-6">{category.description}</p>
                  
                  <div className="mb-6">
                    <h3 className="font-semibold text-foreground mb-4">Products We Source:</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {category.products.map((product) => (
                        <div key={product} className="flex items-center gap-3">
                          <CheckCircle className="w-5 h-5 text-success flex-shrink-0" />
                          <span className="text-muted-foreground">{product}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="font-semibold text-foreground mb-3">Common Certifications:</h3>
                    <div className="flex flex-wrap gap-2">
                      {category.certifications.map((cert) => (
                        <span
                          key={cert}
                          className="inline-flex items-center px-3 py-1 bg-primary-50 text-primary text-sm font-medium rounded-full"
                        >
                          {cert}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className={`bg-gray-50 rounded-2xl p-8 ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <div className="aspect-video bg-gradient-to-br from-primary/10 to-accent/10 rounded-xl flex items-center justify-center">
                    <category.icon className="w-24 h-24 text-primary/30" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Served */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="section-title">
            <h2>Industries We Serve</h2>
            <p>
              We work with businesses across various industries, providing tailored 
              sourcing solutions for each sector.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              'Retail & E-commerce',
              'Manufacturing',
              'Hospitality',
              'Healthcare',
              'Construction',
              'Automotive',
              'Education',
              'Food & Beverage',
              'Fashion',
              'Technology',
              'Real Estate',
              'Energy',
            ].map((industry) => (
              <div
                key={industry}
                className="bg-white rounded-xl p-4 text-center shadow-soft hover:shadow-medium transition-shadow"
              >
                <span className="text-sm font-medium text-foreground">{industry}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary text-white">
        <div className="container-custom text-center">
          <h2 className="heading-2 mb-6">Need a Custom Product?</h2>
          <p className="body-large text-gray-300 mb-8 max-w-2xl mx-auto">
            We specialize in sourcing custom and OEM products. Contact us to discuss 
            your unique product requirements.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="btn-accent text-lg px-8 py-4 group">
              Get Custom Quote
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
            <a href="tel:+8612345678900" className="btn-secondary text-lg px-8 py-4 bg-white/10 border-white/20 text-white hover:bg-white/20">
              <Phone className="w-5 h-5 mr-2" />
              Call Us Now
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
