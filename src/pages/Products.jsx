import { Link } from 'react-router-dom'
import { Sofa, Shirt, Gift, Wrench, Package, Building, Zap, Heart, Phone, ArrowRight, Check } from 'lucide-react'
import { Button } from '@/components/ui/Button'

const productCategories = [
  {
    icon: Sofa,
    name: 'Furniture',
    description: 'From modern to traditional styles, we source quality furniture for residential and commercial spaces.',
    items: [
      'Living room furniture (sofas, chairs, tables)',
      'Bedroom furniture (beds, wardrobes, nightstands)',
      'Office furniture (desks, chairs, storage)',
      'Outdoor and garden furniture',
      'Children furniture',
    ],
    minOrder: '50-500 units',
  },
  {
    icon: Shirt,
    name: 'Textiles & Apparel',
    description: 'Fashion and functional textiles sourced from established garment manufacturers.',
    items: [
      'Casual and formal wear',
      'Sportswear and activewear',
      'Home textiles (bedding, curtains, rugs)',
      'Bags, backpacks, and luggage',
      'Shoes and footwear',
    ],
    minOrder: '200-1000 units',
  },
  {
    icon: Zap,
    name: 'Electronics',
    description: 'Consumer and industrial electronics from certified manufacturers.',
    items: [
      'Consumer electronics (audio, wearables)',
      'Computer and mobile accessories',
      'LED lighting products',
      'Electronic components and PCBs',
      'Power supplies and adapters',
    ],
    minOrder: '100-500 units',
  },
  {
    icon: Wrench,
    name: 'Hardware & Tools',
    description: 'Quality hardware, tools, and fasteners for various industries.',
    items: [
      'Hand tools (hammers, wrenches, screwdrivers)',
      'Power tools and accessories',
      'Fasteners (screws, bolts, nuts)',
      'Hardware parts and components',
      'Industrial hardware',
    ],
    minOrder: '500-5000 units',
  },
  {
    icon: Gift,
    name: 'Consumer Goods',
    description: 'Everyday products that people love, from kitchen to living room.',
    items: [
      'Kitchenware and cookware',
      'Home decor and decorations',
      'Gifts and promotional items',
      'Pet supplies',
      'Sporting goods',
    ],
    minOrder: '200-1000 units',
  },
  {
    icon: Package,
    name: 'Packaging Materials',
    description: 'Comprehensive packaging solutions for all types of products.',
    items: [
      'Paper packaging (boxes, cartons)',
      'Plastic containers and bottles',
      'Labels and tags',
      'Protective packaging materials',
      'Eco-friendly packaging options',
    ],
    minOrder: '1000-10000 units',
  },
  {
    icon: Building,
    name: 'Industrial & Machinery',
    description: 'Machinery parts and industrial equipment for manufacturing.',
    items: [
      'Machinery parts and components',
      'Industrial equipment',
      'Construction materials',
      'Agricultural equipment',
      'Automotive parts',
    ],
    minOrder: '50-500 units',
  },
  {
    icon: Heart,
    name: 'Health & Beauty',
    description: 'Personal care and health products meeting international standards.',
    items: [
      'Cosmetics and skincare',
      'Personal care products',
      'Health supplements',
      'Medical supplies',
      'Baby care products',
    ],
    minOrder: '200-2000 units',
  },
]

export function Products() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-neutral-50 via-white to-primary-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-6">
            Products We Source
          </h1>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto mb-8">
            We have established supplier networks across various industries. 
            If you need it, we can source it from China.
          </p>
          <Link to="/contact">
            <Button size="lg">
              Request Custom Sourcing
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Categories */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {productCategories.map((category, index) => (
              <div
                key={category.name}
                className={`grid lg:grid-cols-2 gap-12 items-start ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                {/* Content */}
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="w-16 h-16 bg-primary-100 rounded-2xl flex items-center justify-center mb-6">
                    <category.icon className="w-8 h-8 text-primary-600" />
                  </div>
                  <h2 className="text-3xl font-bold text-neutral-900 mb-4">
                    {category.name}
                  </h2>
                  <p className="text-lg text-neutral-600 mb-6">
                    {category.description}
                  </p>

                  <div className="bg-neutral-50 rounded-xl p-6 mb-6">
                    <h3 className="font-semibold text-neutral-900 mb-4">Products We Source:</h3>
                    <ul className="space-y-3">
                      {category.items.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <Check className="w-5 h-5 text-accent-500 flex-shrink-0 mt-0.5" />
                          <span className="text-neutral-700">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex items-center gap-4 text-sm text-neutral-500">
                    <div className="px-4 py-2 bg-primary-50 rounded-lg">
                      <span className="font-medium text-primary-700">MOQ:</span> {category.minOrder}
                    </div>
                  </div>
                </div>

                {/* Visual Placeholder */}
                <div className={`bg-gradient-to-br from-primary-100 to-accent-100 rounded-3xl h-80 flex items-center justify-center ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <category.icon className="w-24 h-24 text-primary-300" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Sourcing CTA */}
      <section className="py-20 bg-neutral-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Don't See Your Product Category?
          </h2>
          <p className="text-xl text-neutral-300 mb-8">
            We source more than what's listed. Contact us with your specific requirements 
            and we'll find the right suppliers for you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" className="w-full sm:w-auto">
                <Phone className="w-5 h-5 mr-2" />
                Get Custom Quote
              </Button>
            </Link>
            <Link to="/how-it-works">
              <Button size="lg" variant="outline" className="w-full sm:w-auto border-white text-white hover:bg-white/10">
                Learn Our Process
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}