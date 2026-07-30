import { Link } from 'react-router-dom'
import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import {
  ArrowRight, CheckCircle, Phone, Shield, Globe, Package,
  Cpu, Home, Shirt, Wrench, Gift, Building2, Armchair, Utensils,
  Smartphone, Watch, Bag, Bike, Baby, PawPrint
} from 'lucide-react'

const productCategories = [
  {
    id: 'electronics',
    icon: Cpu,
    title: 'Electronics & Gadgets',
    description: 'Consumer electronics, smart devices, and tech accessories from certified manufacturers.',
    items: ['Smart home devices', 'Phone and tablet accessories', 'Audio equipment', 'Wearable technology', 'Charging solutions', 'LED lighting'],
    imageQuery: 'electronics consumer gadgets technology',
    imageId: 'products-electronics-img',
  },
  {
    id: 'home-garden',
    icon: Home,
    title: 'Home & Garden',
    description: 'Quality home furnishings, kitchenware, and garden products for retail and wholesale.',
    items: ['Furniture and decor', 'Kitchen and dining', 'Storage solutions', 'Garden tools', 'Bathroom accessories', 'Home textiles'],
    imageQuery: 'home furniture kitchenware decor',
    imageId: 'products-home-img',
  },
  {
    id: 'fashion',
    icon: Shirt,
    title: 'Fashion & Apparel',
    description: 'Clothing, bags, shoes, and accessories from experienced garment manufacturers.',
    items: ['Men and women clothing', 'Bags and luggage', 'Shoes and footwear', 'Jewelry and watches', 'Sunglasses and eyewear', 'Fashion accessories'],
    imageQuery: 'fashion clothing apparel accessories',
    imageId: 'products-fashion-img',
  },
  {
    id: 'industrial',
    icon: Wrench,
    title: 'Industrial & Machinery',
    description: 'Industrial equipment, tools, and machinery for various manufacturing needs.',
    items: ['Power tools', 'Safety equipment', 'Hydraulic systems', 'CNC machinery', 'Welding equipment', 'Industrial supplies'],
    imageQuery: 'industrial machinery equipment tools',
    imageId: 'products-industrial-img',
  },
  {
    id: 'promotional',
    icon: Gift,
    title: 'Promotional Products',
    description: 'Custom branded merchandise and corporate gifts for marketing and events.',
    items: ['Custom merchandise', 'Corporate gifts', 'Trade show giveaways', 'Branded packaging', 'Custom printing', 'Event supplies'],
    imageQuery: 'promotional products corporate gifts branded',
    imageId: 'products-promotional-img',
  },
  {
    id: 'building',
    icon: Building2,
    title: 'Building Materials',
    description: 'Construction materials, hardware, and fixtures for residential and commercial projects.',
    items: ['Flooring and tiles', 'Lighting fixtures', 'Plumbing hardware', 'Door and window fittings', 'Construction hardware', 'Interior finishes'],
    imageQuery: 'building materials construction hardware',
    imageId: 'products-building-img',
  },
  {
    id: 'furniture',
    icon: Armchair,
    title: 'Office & Commercial Furniture',
    description: 'Quality furniture solutions for offices, hotels, restaurants, and commercial spaces.',
    items: ['Office desks and chairs', 'Hotel furniture', 'Restaurant seating', 'Reception counters', 'Storage systems', 'Outdoor furniture'],
    imageQuery: 'office furniture commercial seating',
    imageId: 'products-furniture-img',
  },
  {
    id: 'kitchen',
    icon: Utensils,
    title: 'Kitchen & Restaurant Equipment',
    description: 'Commercial kitchen equipment, cookware, and restaurant supplies.',
    items: ['Commercial ovens', 'Cookware sets', 'Food storage', 'Kitchen utensils', 'Restaurant supplies', 'Bar equipment'],
    imageQuery: 'kitchen equipment restaurant commercial',
    imageId: 'products-kitchen-img',
  },
  {
    id: 'automotive',
    icon: Bike,
    title: 'Automotive & Mobility',
    description: 'Auto parts, accessories, and mobility solutions from specialized manufacturers.',
    items: ['Auto accessories', 'Electric vehicles', 'Bicycle parts', 'Car electronics', 'Safety equipment', 'Maintenance tools'],
    imageQuery: 'automotive parts accessories vehicles',
    imageId: 'products-automotive-img',
  },
  {
    id: 'baby',
    icon: Baby,
    title: 'Baby & Kids Products',
    description: 'Safe, certified products for children and infants from trusted manufacturers.',
    items: ['Toys and games', 'Baby gear', 'Children clothing', 'Educational products', 'Safety equipment', 'Nursery furniture'],
    imageQuery: 'baby products children toys safe',
    imageId: 'products-baby-img',
  },
  {
    id: 'pets',
    icon: PawPrint,
    title: 'Pet Products',
    description: 'Pet supplies, accessories, and equipment from quality-focused manufacturers.',
    items: ['Pet food containers', 'Pet accessories', 'Grooming supplies', 'Pet furniture', 'Training equipment', 'Pet toys'],
    imageQuery: 'pet products supplies accessories',
    imageId: 'products-pets-img',
  },
  {
    id: 'sports',
    icon: Package,
    title: 'Sports & Outdoor',
    description: 'Sports equipment, outdoor gear, and fitness products for active lifestyles.',
    items: ['Fitness equipment', 'Outdoor gear', 'Camping supplies', 'Sports accessories', 'Water sports', 'Cycling equipment'],
    imageQuery: 'sports equipment outdoor fitness gear',
    imageId: 'products-sports-img',
  },
]

const whySourceFromChina = [
  { icon: Globe, title: 'Manufacturing Hub', description: 'China produces over 28% of global manufacturing output, offering unmatched variety and capability.' },
  { icon: Shield, title: 'Quality Standards', description: 'Modern Chinese factories maintain international quality certifications including ISO, CE, and UL.' },
  { icon: Package, title: 'Competitive Pricing', description: 'Economies of scale and efficient production processes result in highly competitive pricing.' },
  { icon: Wrench, title: 'Customization', description: 'Chinese manufacturers are experienced in custom product development and OEM/ODM services.' },
]

export default function Products() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <div ref={containerRef}>
      {/* Hero */}
      <section className="bg-navy-950 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-600/20 text-red-400 rounded-full mb-6 text-sm font-medium">
              <Package className="w-4 h-4" />
              Products We Source
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Wide Range of Products from Verified Chinese Suppliers
            </h1>
            <p className="text-xl text-navy-200 leading-relaxed">
              We source products across 12+ categories, always from verified manufacturers 
              that meet our strict quality and reliability standards.
            </p>
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Product Categories
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Browse our main product categories. We source virtually any product from China.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {productCategories.map((category) => (
              <div key={category.id} id={`product-${category.id}`} className="bg-gray-50 rounded-xl overflow-hidden border border-gray-100 hover:border-red-200 transition-colors">
                <div className="h-48 bg-gray-200">
                  <img
                    data-strk-img-id={category.imageId}
                    data-strk-img={`[product-title-${category.id}]`}
                    data-strk-img-ratio="16x9"
                    data-strk-img-width="600"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={category.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 bg-red-50 rounded-lg flex items-center justify-center">
                      <category.icon className="w-5 h-5 text-red-600" />
                    </div>
                    <h3 id={`product-title-${category.id}`} className="text-xl font-bold text-gray-900">{category.title}</h3>
                  </div>
                  <p className="text-gray-600 mb-4">{category.description}</p>
                  <ul className="space-y-2">
                    {category.items.map((item, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm text-gray-500">
                        <CheckCircle className="w-4 h-4 text-green-500 shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Source from China */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Source Products from China?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              China remains the world's leading manufacturing hub for good reasons.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whySourceFromChina.map((item, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                <div className="w-12 h-12 bg-red-50 rounded-lg flex items-center justify-center mb-4">
                  <item.icon className="w-6 h-6 text-red-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Sourcing */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-navy-950 rounded-2xl p-8 md:p-12">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-white mb-4">
                Don't See Your Product?
              </h2>
              <p className="text-lg text-navy-200 mb-8 max-w-2xl mx-auto">
                We source virtually any product from China. If you don't see your specific product category 
                listed, contact us with your requirements and we will find the right suppliers.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-red-600 text-white font-bold rounded-lg hover:bg-red-700 transition-colors text-lg"
                >
                  Submit Your Requirements
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <a
                  href="tel:+8612345678900"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 text-white font-semibold rounded-lg hover:bg-white/20 transition-colors text-lg border border-white/20"
                >
                  <Phone className="w-5 h-5" />
                  Call Us Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-red-600 to-red-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Source Products from China?
          </h2>
          <p className="text-xl text-red-100 mb-8 max-w-2xl mx-auto">
            Get a free sourcing quote and let us find the perfect suppliers for your products.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-red-600 font-bold rounded-lg hover:bg-gray-100 transition-colors text-lg"
          >
            Get a Free Sourcing Quote
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  )
}
