import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { Link } from 'react-router-dom'
import { Cpu, Factory, ShoppingBag, Shirt, Hammer, ArrowRight, CheckCircle, Package, Zap, Home, Car, Heart, UtensilsCrossed, Dumbbell, Lightbulb, Wrench } from 'lucide-react'

const categories = [
  {
    icon: Cpu,
    title: 'Electronics & Components',
    description: 'From consumer electronics to industrial components, we source from verified manufacturers with proper certifications.',
    items: [
      'PCBs and electronic components',
      'Cables, connectors, and wiring',
      'Sensors and control systems',
      'LED lighting and displays',
      'Consumer electronics',
      'Smart home devices',
    ],
  },
  {
    icon: Factory,
    title: 'Machinery & Industrial Equipment',
    description: 'We help you find reliable manufacturers of industrial machinery, CNC parts, and custom manufacturing equipment.',
    items: [
      'CNC machined parts',
      'Molds and tooling',
      'Packaging machines',
      'Industrial automation equipment',
      'Hydraulic and pneumatic components',
      'Custom manufacturing equipment',
    ],
  },
  {
    icon: ShoppingBag,
    title: 'Consumer Goods',
    description: 'From home products to promotional items, we source quality consumer goods at competitive prices.',
    items: [
      'Home and kitchen products',
      'Toys and games',
      'Sports and outdoor equipment',
      'Gifts and promotional items',
      'Pet supplies',
      'Garden and outdoor products',
    ],
  },
  {
    icon: Shirt,
    title: 'Textiles & Apparel',
    description: 'We connect you with verified garment factories and textile manufacturers for private label and bulk orders.',
    items: [
      'Garments and clothing',
      'Fabrics and materials',
      'Accessories and jewelry',
      'Footwear',
      'Bags and luggage',
      'Home textiles',
    ],
  },
  {
    icon: Hammer,
    title: 'Building Materials & Hardware',
    description: 'Source construction materials, hardware, and building supplies from established Chinese manufacturers.',
    items: [
      'Hardware and fasteners',
      'Tiles and flooring',
      'Lighting fixtures',
      'Furniture',
      'Bathroom and kitchen fixtures',
      'Construction supplies',
    ],
  },
  {
    icon: Package,
    title: 'Packaging & Printing',
    description: 'Custom packaging solutions and printing services for product branding and shipping needs.',
    items: [
      'Custom packaging boxes',
      'Labels and stickers',
      'Shopping bags',
      'Product catalogs and brochures',
      'Shipping materials',
      'Display stands',
    ],
  },
  {
    icon: Zap,
    title: 'Automotive Parts & Accessories',
    description: 'Source automotive components, accessories, and aftermarket parts from verified manufacturers.',
    items: [
      'Auto parts and components',
      'Car accessories',
      'Motorcycle parts',
      'EV charging equipment',
      'Car electronics',
      'Tools and maintenance equipment',
    ],
  },
  {
    icon: Home,
    title: 'Home & Garden',
    description: 'Quality home improvement products, garden supplies, and outdoor living products.',
    items: [
      'Furniture and decor',
      'Garden tools and equipment',
      'Outdoor furniture',
      'Kitchen appliances',
      'Storage and organization',
      'Home improvement supplies',
    ],
  },
  {
    icon: Heart,
    title: 'Health & Beauty',
    description: 'Source cosmetics, personal care products, and health-related items from certified manufacturers.',
    items: [
      'Cosmetics and skincare',
      'Personal care products',
      'Health supplements',
      'Beauty tools and accessories',
      'Medical supplies',
      'Wellness products',
    ],
  },
  {
    icon: UtensilsCrossed,
    title: 'Food & Beverage Equipment',
    description: 'Commercial kitchen equipment, food processing machinery, and restaurant supplies.',
    items: [
      'Commercial kitchen equipment',
      'Food processing machinery',
      'Restaurant supplies',
      'Beverage equipment',
      'Food packaging',
      'Catering equipment',
    ],
  },
  {
    icon: Dumbbell,
    title: 'Sports & Fitness',
    description: 'Sports equipment, fitness gear, and outdoor recreation products from quality manufacturers.',
    items: [
      'Fitness equipment',
      'Sports gear and accessories',
      'Outdoor recreation products',
      'Athletic apparel',
      'Camping equipment',
      'Water sports gear',
    ],
  },
  {
    icon: Lightbulb,
    title: 'Custom & OEM Products',
    description: 'Custom manufacturing and OEM services for unique product requirements and private label brands.',
    items: [
      'Custom product development',
      'OEM manufacturing',
      'Private label production',
      'Prototype development',
      'Custom packaging design',
      'Product modification',
    ],
  },
]

export default function ProductsPage() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <div ref={containerRef}>
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary to-primary/90 text-white py-16 md:py-24">
        <div className="container-custom">
          <div className="max-w-3xl">
            <span className="text-sm font-semibold text-amber-400 uppercase tracking-wider">Product Categories</span>
            <h1 className="text-4xl md:text-5xl font-bold mt-3 mb-4">Products We Source</h1>
            <p className="text-lg text-white/80 leading-relaxed">
              We source a wide range of products from verified Chinese manufacturers. If you do not see your
              product category below, contact us — we likely have experience with it.
            </p>
          </div>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {categories.map((cat) => (
              <div
                key={cat.title}
                className="bg-white rounded-xl border border-border p-6 hover:shadow-md transition-shadow"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <cat.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold">{cat.title}</h3>
                </div>

                <p className="text-muted-foreground text-sm leading-relaxed mb-4">{cat.description}</p>

                <ul className="space-y-2">
                  {cat.items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm">
                      <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-foreground/80">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-secondary/50">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Do Not See Your Product?</h2>
            <p className="text-muted-foreground mb-8">
              We source many product categories beyond what is listed here. Tell us what you need and we will let you know if we can help.
            </p>
            <Link to="/contact" className="btn-primary">
              Get a Free Sourcing Quote
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
