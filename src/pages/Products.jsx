import React from 'react'
import { Link } from 'react-router-dom'
import { 
  Smartphone, Home, Shirt, Cog, Package, Gift, 
  ArrowRight, CheckCircle, Search 
} from 'lucide-react'

const categories = [
  {
    id: 'electronics',
    icon: Smartphone,
    title: 'Electronics & Tech',
    description: 'Consumer electronics, components, and technology accessories sourced from leading manufacturers.',
    products: [
      'LED lighting products',
      'Phone and tablet accessories',
      'Audio equipment and speakers',
      'Power banks and chargers',
      'Smart home devices',
      'Computer peripherals',
    ],
    imageId: 'products-electronics-img',
    imageRatio: '4x3',
  },
  {
    id: 'home-garden',
    icon: Home,
    title: 'Home & Garden',
    description: 'Furniture, home decor, kitchenware, and garden tools for residential and commercial use.',
    products: [
      'Indoor and outdoor furniture',
      'Kitchen appliances and utensils',
      'Home decor and accessories',
      'Garden tools and equipment',
      'Bathroom fixtures',
      'Storage solutions',
    ],
    imageId: 'products-home-garden-img',
    imageRatio: '4x3',
  },
  {
    id: 'fashion',
    icon: Shirt,
    title: 'Fashion & Apparel',
    description: 'Clothing, bags, shoes, and fashion accessories for men, women, and children.',
    products: [
      'Men\'s and women\'s clothing',
      'Bags, luggage, and wallets',
      'Shoes and footwear',
      'Fashion accessories',
      'Sportswear and activewear',
      'Children\'s clothing',
    ],
    imageId: 'products-fashion-img',
    imageRatio: '4x3',
  },
  {
    id: 'industrial',
    icon: Cog,
    title: 'Industrial & Machinery',
    description: 'Machinery parts, hardware tools, and industrial components for manufacturing.',
    products: [
      'Auto parts and accessories',
      'Hardware and hand tools',
      'Machinery components',
      'Fasteners and connectors',
      'Hydraulic and pneumatic parts',
      'Safety equipment',
    ],
    imageId: 'products-industrial-img',
    imageRatio: '4x3',
  },
  {
    id: 'packaging',
    icon: Package,
    title: 'Packaging & Printing',
    description: 'Custom packaging solutions, labels, and printing for product branding.',
    products: [
      'Custom boxes and cartons',
      'Labels, stickers, and tags',
      'Bags and pouches',
      'Gift wrapping materials',
      'Product manuals and inserts',
      'Promotional printing',
    ],
    imageId: 'products-packaging-img',
    imageRatio: '4x3',
  },
  {
    id: 'promotional',
    icon: Gift,
    title: 'Promotional Products',
    description: 'Custom branded items for marketing campaigns, events, and corporate gifts.',
    products: [
      'Custom pens and stationery',
      'Branded drinkware',
      'Promotional bags and totes',
      'Corporate gift sets',
      'Event giveaways',
      'Custom USB drives',
    ],
    imageId: 'products-promotional-img',
    imageRatio: '4x3',
  },
]

const whyChooseUs = [
  {
    icon: Search,
    title: 'Verified Suppliers',
    description: 'All suppliers undergo thorough background checks and factory audits.',
  },
  {
    icon: CheckCircle,
    title: 'Quality Assurance',
    description: 'Multi-stage inspection process ensures product quality.',
  },
  {
    icon: ArrowRight,
    title: 'Competitive Pricing',
    description: 'Direct factory relationships for the best possible prices.',
  },
]

export default function Products() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 to-blue-800 text-white py-20">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Products We Source
            </h1>
            <p className="text-xl text-blue-100 mb-8">
              We source a wide range of products across multiple industries. 
              Whatever you need, we can find the right supplier in China.
            </p>
            <Link
              to="/contact"
              className="bg-white text-blue-900 hover:bg-blue-50 px-8 py-4 rounded-lg font-semibold transition-colors inline-flex items-center gap-2"
            >
              Request Product Sourcing
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="section bg-white" id="categories">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="section-title">Product Categories</h2>
            <p className="section-subtitle">
              We specialize in sourcing products across these key categories
            </p>
          </div>

          <div className="space-y-20">
            {categories.map((category, index) => (
              <div
                key={category.id}
                id={category.id}
                className={`grid lg:grid-cols-2 gap-12 items-start ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                {/* Content */}
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center">
                      <category.icon className="w-7 h-7 text-primary" />
                    </div>
                    <h3 className="text-3xl font-bold text-gray-900">
                      {category.title}
                    </h3>
                  </div>
                  
                  <p className="text-lg text-gray-600 mb-8">
                    {category.description}
                  </p>
                  
                  <div className="mb-8">
                    <h4 className="text-lg font-semibold text-gray-900 mb-4">
                      Products We Source
                    </h4>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {category.products.map((product) => (
                        <li key={product} className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-600">{product}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                {/* Visual */}
                <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                  <div 
                    className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl aspect-[4/3] flex items-center justify-center"
                    data-strk-bg-id={category.imageId}
                    data-strk-bg={`[products-hero-title] [product-${category.id}-title]`}
                    data-strk-bg-ratio={category.imageRatio}
                    data-strk-bg-width="800"
                  >
                    <category.icon className="w-20 h-20 text-gray-400" />
                  </div>
                </div>
                
                {/* Hidden element for interpolation */}
                <h3 id={`product-${category.id}-title`} className="sr-only">
                  {category.title}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hidden element for interpolation */}
      <h1 id="products-hero-title" className="sr-only">Products We Source</h1>

      {/* Why Choose Us */}
      <section className="section bg-gray-50">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="section-title">Why Source With Us</h2>
            <p className="section-subtitle">
              Benefits of working with SSourcing China
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {whyChooseUs.map((item) => (
              <div key={item.title} className="text-center p-6">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <item.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section bg-primary text-white">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Need Help Sourcing Products?
          </h2>
          <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
            Get in touch with our team to discuss your product requirements and receive a customized quote.
          </p>
          <Link
            to="/contact"
            className="bg-white text-primary hover:bg-blue-50 px-8 py-4 rounded-lg font-semibold text-lg transition-colors inline-flex items-center gap-2"
          >
            Get a Free Quote
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  )
}
