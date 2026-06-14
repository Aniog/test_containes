import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { 
  Factory, 
  ArrowRight, 
  CheckCircle2,
  Cpu,
  Home,
  Shirt,
  Cog,
  ShoppingBag,
  Car,
  Smartphone,
  Laptop,
  Tv,
  Sofa,
  Lightbulb,
  Wrench
} from 'lucide-react'

const categories = [
  {
    icon: Cpu,
    title: 'Electronics',
    description: 'Consumer electronics, components, accessories, and electronic devices.',
    products: ['Smartphones', 'Laptops', 'Tablets', 'Audio equipment', 'Wearables', 'Electronic components'],
  },
  {
    icon: Home,
    title: 'Home & Garden',
    description: 'Furniture, decor, kitchenware, and outdoor living products.',
    products: ['Furniture', 'Kitchenware', 'Home decor', 'Garden tools', 'Lighting', 'Storage solutions'],
  },
  {
    icon: Shirt,
    title: 'Apparel & Textiles',
    description: 'Clothing, fabrics, accessories, and textile products.',
    products: ['Casual wear', 'Sportswear', 'Workwear', 'Fabrics', 'Bags', 'Accessories'],
  },
  {
    icon: Cog,
    title: 'Industrial Equipment',
    description: 'Machinery, tools, hardware, and industrial supplies.',
    products: ['Power tools', 'Hardware', 'Machinery parts', 'Safety equipment', 'Measuring tools', 'Fasteners'],
  },
  {
    icon: ShoppingBag,
    title: 'Consumer Goods',
    description: 'Everyday consumer products, toys, and personal care items.',
    products: ['Toys', 'Personal care', 'Stationery', 'Sports equipment', 'Pet supplies', 'Gifts'],
  },
  {
    icon: Car,
    title: 'Auto Parts',
    description: 'Vehicle components, accessories, and replacement parts.',
    products: ['Engine parts', 'Body parts', 'Electrical systems', 'Interior accessories', 'Tires', 'Tools'],
  },
]

const featuredProducts = [
  {
    name: 'Wireless Earbuds',
    category: 'Electronics',
    description: 'High-quality TWS earbuds with noise cancellation, long battery life, and competitive pricing.',
  },
  {
    name: 'Smart Home Devices',
    category: 'Electronics',
    description: 'Smart speakers, plugs, cameras, and home automation devices from verified manufacturers.',
  },
  {
    name: 'Outdoor Furniture',
    category: 'Home & Garden',
    description: 'Weather-resistant patio furniture, garden sets, and outdoor decor.',
  },
  {
    name: 'Organic Cotton Apparel',
    category: 'Apparel',
    description: 'Sustainable clothing options with GOTS certification available.',
  },
  {
    name: 'LED Lighting',
    category: 'Home & Garden',
    description: 'Energy-efficient LED bulbs, panels, and commercial lighting solutions.',
  },
  {
    name: 'Power Tools',
    category: 'Industrial',
    description: 'Professional-grade power tools with CE and UL certifications.',
  },
]

function Products() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-slate-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
              Products We Source
            </h1>
            <p className="text-lg text-slate-600 mb-8">
              We source a wide range of products across multiple industries. If you don't see your product category listed, contact us anyway—we likely can help.
            </p>
            <Link to="/contact">
              <Button size="lg">Tell Us What You Need</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
              Product Categories
            </h2>
            <p className="text-lg text-slate-600">
              Our expertise spans multiple industries. Click on a category to learn more about our sourcing capabilities.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((category, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-sm border border-slate-200 hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center mb-6">
                  <category.icon className="w-6 h-6 text-slate-700" />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-3">{category.title}</h3>
                <p className="text-slate-600 mb-6 leading-relaxed">{category.description}</p>
                <div className="flex flex-wrap gap-2">
                  {category.products.slice(0, 4).map((product, idx) => (
                    <span key={idx} className="text-xs bg-slate-100 text-slate-700 px-2 py-1 rounded">
                      {product}
                    </span>
                  ))}
                  {category.products.length > 4 && (
                    <span className="text-xs bg-slate-100 text-slate-500 px-2 py-1 rounded">
                      +{category.products.length - 4} more
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
              Recently Sourced Products
            </h2>
            <p className="text-lg text-slate-600">
              Examples of products we've recently sourced for our clients. These represent the quality and variety we can deliver.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProducts.map((product, index) => (
              <div key={index} className="bg-white rounded-xl overflow-hidden shadow-sm border border-slate-200 hover:shadow-md transition-shadow">
                <div className="aspect-video bg-slate-100 flex items-center justify-center">
                  <Factory className="w-12 h-12 text-slate-400" />
                </div>
                <div className="p-6">
                  <div className="text-sm text-slate-500 mb-2">{product.category}</div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">{product.name}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed mb-4">{product.description}</p>
                  <Link to="/contact" className="text-sm font-medium text-slate-900 hover:text-slate-700 inline-flex items-center gap-1">
                    Inquire about this product <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
              Our Sourcing Capabilities
            </h2>
            <p className="text-lg text-slate-600">
              We handle every aspect of the sourcing process, from initial search to final delivery.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: 'Product Sourcing',
                description: 'We search for products that match your specifications, quality requirements, and budget. Our extensive network of verified suppliers ensures you get competitive options.',
              },
              {
                title: 'Supplier Verification',
                description: 'Before recommending any supplier, we conduct thorough on-site audits to verify their credentials, capacity, quality systems, and business legitimacy.',
              },
              {
                title: 'Price Negotiation',
                description: 'We leverage our local presence and relationships to negotiate the best possible prices, MOQs, and payment terms on your behalf.',
              },
              {
                title: 'Quality Control',
                description: 'Our experienced QC inspectors conduct pre-shipment and in-production inspections to ensure products meet your standards.',
              },
              {
                title: 'Logistics Coordination',
                description: 'We handle freight forwarding, customs documentation, and delivery tracking to ensure your products arrive safely and on time.',
              },
              {
                title: 'Ongoing Support',
                description: 'We provide continuous support throughout your partnership, helping you scale your sourcing operations over time.',
              },
            ].map((capability, index) => (
              <div key={index} className="flex gap-4">
                <div className="flex-shrink-0">
                  <CheckCircle2 className="w-6 h-6 text-green-500 mt-1" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">{capability.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{capability.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">
            Don't See Your Product Category?
          </h2>
          <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto">
            We're constantly expanding our network and capabilities. Contact us with your specific product requirements—we likely can help.
          </p>
          <Link to="/contact">
            <Button size="lg">Contact Us</Button>
          </Link>
        </div>
      </section>
    </div>
  )
}

export default Products
