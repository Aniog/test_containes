import { Shirt, Cpu, Package, Home, Heart, Wrench, Building2, Baby, BookOpen, Bike, ShoppingBag, Dumbbell } from 'lucide-react'
import CTASection from '@/components/home/CTASection'

const categories = [
  {
    icon: Shirt,
    title: 'Apparel & Fashion',
    description: 'Clothing, accessories, textiles, footwear, bags, and fashion accessories for men, women, and children.',
    examples: ['Casual wear', 'Sportswear', 'Leather goods', 'Shoes', 'Bags & wallets', 'Scarves & hats'],
  },
  {
    icon: Cpu,
    title: 'Consumer Electronics',
    description: 'Electronics and gadgets for consumer and commercial use, from accessories to finished devices.',
    examples: ['Phone accessories', 'Audio equipment', 'Smart home devices', 'Wearables', 'Chargers & cables', 'Computer peripherals'],
  },
  {
    icon: Package,
    title: 'Home & Living',
    description: 'Furniture, home decor, kitchenware, and household items for residential and commercial spaces.',
    examples: ['Indoor furniture', 'Outdoor furniture', 'Kitchen appliances', 'Lighting', 'Home decor', 'Storage solutions'],
  },
  {
    icon: Home,
    title: 'Industrial & Hardware',
    description: 'Industrial equipment, machinery, tools, hardware supplies, and components for manufacturing and construction.',
    examples: ['Power tools', 'Hand tools', 'Industrial machinery', 'Safety equipment', 'Hardware supplies', 'MRO items'],
  },
  {
    icon: Heart,
    title: 'Health & Beauty',
    description: 'Cosmetics, personal care products, supplements, and wellness items for retail and professional use.',
    examples: ['Skincare', 'Hair care', 'Makeup', 'Vitamins & supplements', 'Essential oils', 'Personal care appliances'],
  },
  {
    icon: Wrench,
    title: 'Auto Parts & Accessories',
    description: 'Vehicle parts, automotive accessories, and maintenance products for cars, trucks, and motorcycles.',
    examples: ['Engine parts', 'Interior accessories', 'Exterior parts', 'Car electronics', 'Maintenance tools', 'Motorcycle parts'],
  },
  {
    icon: Building2,
    title: 'Building & Construction',
    description: 'Construction materials, building supplies, plumbing, electrical, and renovation products.',
    examples: ['Tiles & flooring', 'Pipes & fittings', 'Electrical supplies', 'Paints & coatings', 'Door & window hardware', 'Sanitary ware'],
  },
  {
    icon: Baby,
    title: 'Baby & Kids Products',
    description: 'Baby care items, children\'s products, toys, and educational supplies.',
    examples: ['Baby gear', 'Toys & games', 'Children\'s furniture', 'Educational toys', 'Baby clothing', 'Nursery items'],
  },
  {
    icon: BookOpen,
    title: 'Stationery & Office',
    description: 'Office supplies, stationery, paper products, and school supplies for businesses and institutions.',
    examples: ['Writing instruments', 'Paper products', 'Office organization', 'Art supplies', 'School supplies', 'Desk accessories'],
  },
  {
    icon: Bike,
    title: 'Sports & Outdoors',
    description: 'Sports equipment, outdoor gear, fitness products, and recreational items.',
    examples: ['Fitness equipment', 'Camping gear', 'Sports apparel', 'Cycling accessories', 'Water sports', 'Yoga & pilates'],
  },
  {
    icon: ShoppingBag,
    title: 'Packaging & Printing',
    description: 'Custom packaging, labels, printing services, and display materials for product branding.',
    examples: ['Cardboard boxes', 'Custom labels', 'Retail packaging', 'Shopping bags', 'Product displays', 'Printed materials'],
  },
  {
    icon: Dumbbell,
    title: 'Pet Supplies',
    description: 'Pet food, accessories, grooming products, and supplies for dogs, cats, and other pets.',
    examples: ['Pet beds', 'Food & treats', 'Grooming tools', 'Pet toys', 'Collars & leashes', 'Pet carriers'],
  },
]

export default function Products() {
  return (
    <div>
      {/* Page Header */}
      <section className="bg-gradient-to-br from-neutral-900 to-neutral-800 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Products We Source</h1>
          <p className="text-lg text-neutral-300 max-w-2xl mx-auto">
            We source across a broad range of industries and product categories. 
            If it is manufactured in China, we can help you find the right supplier.
          </p>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((cat) => (
              <div
                key={cat.title}
                className="bg-white rounded-xl border border-neutral-100 p-6 hover:shadow-md hover:border-brand-100 transition-all duration-200"
              >
                <div className="w-12 h-12 bg-brand-50 rounded-lg flex items-center justify-center mb-4">
                  <cat.icon className="w-6 h-6 text-brand-500" />
                </div>
                <h3 className="text-xl font-semibold text-neutral-900 mb-2">{cat.title}</h3>
                <p className="text-sm text-neutral-600 mb-4">{cat.description}</p>
                <div className="flex flex-wrap gap-2">
                  {cat.examples.slice(0, 4).map((ex) => (
                    <span key={ex} className="text-xs bg-neutral-50 text-neutral-600 px-2.5 py-1 rounded-full border border-neutral-100">
                      {ex}
                    </span>
                  ))}
                  {cat.examples.length > 4 && (
                    <span className="text-xs text-brand-500 font-medium px-2.5 py-1">
                      +{cat.examples.length - 4} more
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-neutral-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">Don't See Your Product Category?</h2>
          <p className="text-lg text-neutral-600 mb-8">
            We source products across virtually all manufacturing categories. Contact us and we will find the right supplier for your specific product.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 bg-brand-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-brand-600 transition-colors"
          >
            Get a Free Sourcing Quote
          </a>
        </div>
      </section>

      <CTASection />
    </div>
  )
}