import React from 'react'
import { Link } from 'react-router-dom'
import { 
  Package, Factory, Monitor, Settings, Shirt, Home, 
  Heart, Dumbbell, Package as PackageBox, Car, ShoppingBag,
  Wrench, Sparkles, Building2, ArrowRight, CheckCircle
} from 'lucide-react'
import SectionHeader from '@/components/common/SectionHeader'

const productCategories = [
  {
    category: 'Electronics & Components',
    icon: <Monitor className="w-8 h-8" />,
    description: 'Consumer and industrial electronics, components, and accessories.',
    products: [
      'Smartphones and accessories',
      'Computer hardware and peripherals',
      'Audio equipment and speakers',
      'LED lighting products',
      'Electronic components',
      'PCB assemblies',
      'Battery and power products',
      'Smart home devices'
    ]
  },
  {
    category: 'Machinery & Equipment',
    icon: <Settings className="w-8 h-8" />,
    description: 'Industrial machinery, equipment, and mechanical components.',
    products: [
      'CNC machines',
      'Industrial automation equipment',
      'Agricultural machinery',
      'Construction equipment',
      'Packaging machinery',
      'Textile machinery',
      'Food processing equipment',
      'HVAC systems'
    ]
  },
  {
    category: 'Textiles & Garments',
    icon: <Shirt className="w-8 h-8" />,
    description: 'Apparel, fabrics, and textile products.',
    products: [
      'Casual and sportswear',
      'Formal wear and suits',
      'Activewear and yoga wear',
      'Outdoor and adventure clothing',
      'Fabrics and raw materials',
      'Home textiles',
      'Bags and luggage',
      'Shoes and footwear'
    ]
  },
  {
    category: 'Home & Garden',
    icon: <Home className="w-8 h-8" />,
    description: 'Home furnishings, decor, and outdoor products.',
    products: [
      'Furniture and seating',
      'Kitchenware and cookware',
      'Home decor and art',
      'Bedding and linens',
      'Garden furniture',
      'Outdoor equipment',
      'Storage solutions',
      'Bathroom accessories'
    ]
  },
  {
    category: 'Medical & Health',
    icon: <Heart className="w-8 h-8" />,
    description: 'Medical supplies, equipment, and health products.',
    products: [
      'Medical devices',
      'Personal protective equipment',
      'Health monitoring devices',
      'Medical consumables',
      'Rehabilitation equipment',
      'Dental supplies',
      'Laboratory equipment',
      'Pharmaceutical packaging'
    ]
  },
  {
    category: 'Sports & Outdoors',
    icon: <Dumbbell className="w-8 h-8" />,
    description: 'Fitness, sports equipment, and outdoor gear.',
    products: [
      'Fitness equipment',
      'Camping gear',
      'Hiking and climbing equipment',
      'Water sports equipment',
      'Cycling products',
      'Sports accessories',
      'Fishing equipment',
      'Yoga and meditation supplies'
    ]
  },
  {
    category: 'Packaging Materials',
    icon: <PackageBox className="w-8 h-8" />,
    description: 'Packaging solutions for various industries.',
    products: [
      'Corrugated boxes',
      'Flexible packaging',
      'Plastic containers',
      'Glass packaging',
      'Metal containers',
      'Labels and stickers',
      'Pallet wrapping',
      'Eco-friendly packaging'
    ]
  },
  {
    category: 'Automotive Parts',
    icon: <Car className="w-8 h-8" />,
    description: 'Auto parts, accessories, and vehicle components.',
    products: [
      'Engine components',
      'Brake systems',
      'Electrical parts',
      'Interior accessories',
      'Exterior accessories',
      'Safety equipment',
      'Replacement parts',
      'Diagnostic equipment'
    ]
  },
  {
    category: 'Consumer Goods',
    icon: <ShoppingBag className="w-8 h-8" />,
    description: 'General consumer products and daily use items.',
    products: [
      'Kitchen appliances',
      'Personal care products',
      'Cleaning supplies',
      'Pet supplies',
      'Toys and games',
      'Stationery supplies',
      'Baby products',
      'Party supplies'
    ]
  },
  {
    category: 'Industrial Hardware',
    icon: <Wrench className="w-8 h-8" />,
    description: 'Hardware, tools, and industrial supplies.',
    products: [
      'Hand tools',
      'Power tools',
      'Fasteners and screws',
      'Plumbing supplies',
      'Electrical hardware',
      'Safety equipment',
      'Measuring instruments',
      'Welding equipment'
    ]
  },
  {
    category: 'Beauty & Personal Care',
    icon: <Sparkles className="w-8 h-8" />,
    description: 'Cosmetics, skincare, and beauty products.',
    products: [
      'Skincare products',
      'Hair care items',
      'Makeup and cosmetics',
      'Fragrances',
      'Nail care products',
      'Beauty tools',
      'Organic beauty',
      'Cosmetic packaging'
    ]
  },
  {
    category: 'Office & Business',
    icon: <Building2 className="w-8 h-8" />,
    description: 'Office supplies and business products.',
    products: [
      'Office furniture',
      'Printers and copiers',
      'Office supplies',
      'Computer accessories',
      'Presentation equipment',
      'Signage products',
      'Retail displays',
      'Point of sale materials'
    ]
  }
]

const ProductsPage = () => {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[--color-primary] to-[--color-primary-light] py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Products We Source
          </h1>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            From electronics to machinery, textiles to medical supplies — we source products across 50+ industries with verified suppliers.
          </p>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="What We Source"
            title="Comprehensive Product Categories"
            subtitle="We have expertise across diverse industries and product types. If you need it, we'll find a way to source it."
          />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {productCategories.slice(0, 8).map((category, index) => (
              <div key={index} className="bg-[--color-bg-light] rounded-xl p-6 hover:shadow-md transition-shadow cursor-pointer group">
                <div className="w-14 h-14 bg-[--color-primary] rounded-xl flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform">
                  {category.icon}
                </div>
                <h3 className="text-lg font-semibold text-[--color-text-dark] mb-2">{category.category}</h3>
                <p className="text-sm text-[--color-text-muted] line-clamp-2">{category.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Categories */}
      <section className="py-20 bg-[--color-bg-light]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {productCategories.map((category, index) => (
              <div key={index} className={`grid lg:grid-cols-2 gap-8 items-start ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-14 h-14 bg-[--color-primary] rounded-xl flex items-center justify-center text-white">
                      {category.icon}
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-[--color-text-dark]">{category.category}</h3>
                      <p className="text-[--color-text-muted] text-sm">{category.description}</p>
                    </div>
                  </div>
                  <div className="mt-6">
                    <h4 className="font-semibold text-[--color-text-dark] mb-3">Products We Source:</h4>
                    <div className="flex flex-wrap gap-2">
                      {category.products.map((product, idx) => (
                        <span key={idx} className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white text-[--color-text-muted] text-sm rounded-full border border-[--color-border]">
                          <CheckCircle className="w-3.5 h-3.5 text-[--color-success]" />
                          {product}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                
                <div className={`bg-white rounded-2xl p-8 shadow-sm ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <div className="aspect-[4/3] bg-[--color-bg-light] rounded-xl flex items-center justify-center mb-6">
                    <div className="text-center p-8">
                      <div className="w-20 h-20 bg-[--color-primary]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                        {React.cloneElement(category.icon, { className: 'w-10 h-10 text-[--color-primary]' })}
                      </div>
                      <p className="text-[--color-text-muted] text-sm font-medium">{category.category}</p>
                    </div>
                  </div>
                  <Link
                    to="/contact"
                    className="inline-flex items-center justify-center w-full px-6 py-3 bg-[--color-accent] text-white font-semibold rounded-lg hover:bg-[--color-accent-dark] transition-colors"
                  >
                    Request Quote for {category.category.split(' ')[0]}
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Not Seeing Your Product */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <Package className="w-16 h-16 text-[--color-primary] mx-auto mb-6" />
          <h2 className="text-3xl font-bold text-[--color-text-dark] mb-4">
            Don't See Your Product Category?
          </h2>
          <p className="text-lg text-[--color-text-muted] mb-8 max-w-2xl mx-auto">
            We source products across many more categories than listed here. If you have a specific product need, contact us and we'll find the right suppliers for you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-[--color-accent] text-white font-bold text-lg rounded-lg hover:bg-[--color-accent-dark] transition-colors"
            >
              Contact Us
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link
              to="/how-it-works"
              className="inline-flex items-center justify-center px-8 py-4 bg-[--color-bg-light] text-[--color-text-dark] font-semibold text-lg rounded-lg hover:bg-[--color-border] transition-colors"
            >
              Learn How It Works
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[--color-primary]">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Source Your Products?
          </h2>
          <p className="text-xl text-white/80 mb-8">
            Get a free consultation and quote for your sourcing needs.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center px-8 py-4 bg-[--color-accent] text-white font-bold text-lg rounded-lg hover:bg-[--color-accent-dark] transition-colors"
          >
            Get a Free Quote
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  )
}

export default ProductsPage
