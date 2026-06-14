import React from 'react'
import { Link } from 'react-router-dom'
import { 
  Cpu, Home, Shirt, Settings, Package, Dumbbell, 
  ArrowRight, CheckCircle
} from 'lucide-react'
import Button from '@/components/ui/Button'

const categories = [
  {
    id: 'electronics',
    icon: Cpu,
    title: 'Electronics & Components',
    description: 'Consumer electronics, PCBs, connectors, cables, and electronic components.',
    products: [
      'Consumer electronics',
      'PCBs and circuit boards',
      'Connectors and cables',
      'LED components',
      'Power supplies',
      'Electronic modules',
    ],
  },
  {
    id: 'home',
    icon: Home,
    title: 'Home & Garden',
    description: 'Furniture, home decor, kitchenware, and outdoor equipment.',
    products: [
      'Indoor furniture',
      'Home decor items',
      'Kitchenware and utensils',
      'Bedding and textiles',
      'Outdoor furniture',
      'Garden tools and equipment',
    ],
  },
  {
    id: 'textiles',
    icon: Shirt,
    title: 'Textiles & Apparel',
    description: 'Garments, fabrics, accessories, and footwear for all markets.',
    products: [
      'Casual and formal wear',
      'Sportswear and activewear',
      'Fabrics and materials',
      'Bags and accessories',
      'Footwear',
      'Custom embroidery and printing',
    ],
  },
  {
    id: 'industrial',
    icon: Settings,
    title: 'Industrial Parts',
    description: 'Machinery parts, metal components, tools, and industrial equipment.',
    products: [
      'Machinery components',
      'Metal fabrications',
      'Tools and hardware',
      'Industrial equipment',
      'Fasteners and fittings',
      'Custom metal parts',
    ],
  },
  {
    id: 'packaging',
    icon: Package,
    title: 'Packaging & Printing',
    description: 'Boxes, labels, bags, and promotional materials.',
    products: [
      'Cardboard boxes and cartons',
      'Paper and plastic bags',
      'Labels and stickers',
      'Promotional materials',
      'Cosmetic packaging',
      'Food-grade packaging',
    ],
  },
  {
    id: 'sports',
    icon: Dumbbell,
    title: 'Sports & Recreation',
    description: 'Fitness equipment, outdoor gear, toys, and sporting goods.',
    products: [
      'Fitness equipment',
      'Outdoor recreation gear',
      'Toys and games',
      'Camping equipment',
      'Cycling accessories',
      'Water sports equipment',
    ],
  },
]

const additionalCategories = [
  {
    title: 'Automotive Parts',
    description: 'Vehicle components, accessories, and aftermarket parts.',
  },
  {
    title: 'Beauty & Personal Care',
    description: 'Cosmetics, skincare products, and personal care items.',
  },
  {
    title: 'Medical & Health',
    description: 'Medical devices, health supplements, and wellness products.',
  },
  {
    title: 'Pet Supplies',
    description: 'Pet food, accessories, toys, and care products.',
  },
  {
    title: 'Office Supplies',
    description: 'Stationery, office equipment, and organizational products.',
  },
  {
    title: 'Food & Beverage',
    description: 'Food processing equipment, packaging, and ingredients.',
  },
]

const sourcingBenefits = [
  {
    title: 'Diverse Supplier Network',
    description: 'Access to 2000+ verified factories across all major product categories.',
  },
  {
    title: 'Quality Assurance',
    description: 'Professional inspections ensure products meet your specifications.',
  },
  {
    title: 'Competitive Pricing',
    description: 'Strong supplier relationships help secure favorable terms.',
  },
  {
    title: 'Flexible Order Quantities',
    description: 'From small sample runs to large-scale production orders.',
  },
]

const Products = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-secondary py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Products We Source
          </h1>
          <p className="text-xl text-primary-100 max-w-2xl mx-auto">
            We have experience across diverse product categories and industries, 
            helping global buyers find reliable suppliers in China
          </p>
        </div>
      </section>

      {/* Main Categories */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((category) => (
              <div 
                key={category.id}
                className="bg-surface rounded-xl p-6 border border-gray-100 hover:border-primary-200 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-14 h-14 bg-primary-50 rounded-xl flex items-center justify-center mb-4">
                  <category.icon className="h-7 w-7 text-primary" />
                </div>
                <h2 className="text-xl font-bold text-gray-900 mb-2">{category.title}</h2>
                <p className="text-gray-600 mb-4">{category.description}</p>
                <ul className="space-y-2">
                  {category.products.map((product) => (
                    <li key={product} className="flex items-start gap-2 text-sm text-gray-700">
                      <CheckCircle className="h-4 w-4 text-success mt-0.5" />
                      {product}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Categories */}
      <section className="py-16 lg:py-24 bg-surface">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Other Categories We Source
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Don't see your product category? Contact us — we likely have suppliers for it.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {additionalCategories.map((category) => (
              <div key={category.title} className="bg-white rounded-xl p-5 border border-gray-100 shadow-sm">
                <h3 className="font-semibold text-gray-900 mb-1">{category.title}</h3>
                <p className="text-sm text-gray-600">{category.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sourcing Benefits */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Source Through Us?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We bring expertise and reliability to your product sourcing
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {sourcingBenefits.map((benefit) => (
              <div key={benefit.title} className="text-center">
                <div className="w-16 h-16 bg-success-50 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="h-8 w-8 text-success" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">{benefit.title}</h3>
                <p className="text-sm text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-primary">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Can't Find Your Product Category?
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            Contact us with your requirements. We have extensive supplier networks and can often source products outside our standard categories.
          </p>
          <Link to="/contact">
            <Button size="lg" className="bg-white text-primary hover:bg-primary-50">
              Submit Your Requirements
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  )
}

export default Products
