import { ArrowRight, Package, Cpu, Home, Wrench, Sparkles, Shirt, Gift, Car, Baby, Dog, Building, ShoppingBag } from 'lucide-react'
import { SectionHeader, CTAButton } from '@/components/common/SharedComponents'

const categories = [
  {
    icon: Cpu,
    title: 'Consumer Electronics',
    products: ['Phone accessories', 'Bluetooth speakers', 'Power banks', 'LED lighting', 'Smart home devices', 'USB chargers', 'Audio equipment'],
    note: 'Shenzhen is the electronics capital of the world, and our base location gives us direct access to thousands of specialized manufacturers.',
  },
  {
    icon: Home,
    title: 'Home & Garden',
    products: ['Furniture', 'Kitchen appliances', 'Storage solutions', 'Garden tools', 'Home decor', 'Bathroom accessories', 'Lighting fixtures'],
    note: 'Furniture and home goods represent one of the largest export categories from China, with major production clusters in Guangdong and Zhejiang.',
  },
  {
    icon: Wrench,
    title: 'Industrial & Manufacturing',
    products: ['CNC parts', 'Injection molds', 'Metal fabrication', 'Safety equipment', 'Packaging machinery', 'Hydraulic components', 'Custom hardware'],
    note: 'We work with ISO-certified factories capable of precision manufacturing to tight tolerances for industrial applications.',
  },
  {
    icon: Sparkles,
    title: 'Health & Beauty',
    products: ['Skincare products', 'Cosmetics', 'Personal care items', 'Wellness supplements', 'Fitness equipment', 'Massage devices', 'Hair care tools'],
    note: 'Our health and beauty suppliers hold relevant certifications including GMP, FDA registration, and CE marking where required.',
  },
  {
    icon: Shirt,
    title: 'Apparel & Textiles',
    products: ['Casual wear', 'Sportswear', 'Work uniforms', 'Bags and luggage', 'Shoes', 'Accessories', 'Fabrics and materials'],
    note: 'We source from established garment factories with flexible MOQs, from small batch custom orders to large-scale production runs.',
  },
  {
    icon: Gift,
    title: 'Promotional & Corporate Gifts',
    products: ['Custom branded items', 'Trade show giveaways', 'Corporate gift sets', 'Drinkware', 'Tech accessories', 'Eco-friendly products', 'Packaging solutions'],
    note: 'Full customization available including logo printing, custom colors, and bespoke packaging design for brand consistency.',
  },
  {
    icon: Baby,
    title: 'Toys & Children\'s Products',
    products: ['Educational toys', 'Outdoor play equipment', 'Children\'s furniture', 'Baby products', 'Board games', 'Craft kits', 'Safety-certified items'],
    note: 'All children\'s product suppliers meet international safety standards including EN71, ASTM F963, and CPSIA compliance.',
  },
  {
    icon: Car,
    title: 'Automotive Parts',
    products: ['Replacement parts', 'Car accessories', 'LED headlamps', 'Maintenance tools', 'Interior accessories', 'EV components', 'Custom modifications'],
    note: 'We source from TS16949-certified automotive suppliers who serve both OEM and aftermarket channels.',
  },
  {
    icon: Dog,
    title: 'Pet Products',
    products: ['Pet furniture', 'Toys and accessories', 'Grooming supplies', 'Pet clothing', 'Feeding equipment', 'Travel accessories', 'Smart pet devices'],
    note: 'The pet products market is growing rapidly, and Chinese manufacturers offer competitive pricing with quality comparable to domestic production.',
  },
  {
    icon: Building,
    title: 'Building & Construction Materials',
    products: ['Flooring', 'Tiles and ceramics', 'Hardware and fasteners', 'Plumbing fixtures', 'Electrical components', 'Insulation materials', 'Solar panels'],
    note: 'Construction materials require careful quality assurance. We verify all certifications and conduct material testing before shipment.',
  },
]

export default function Products() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-brand-navy py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block bg-brand-orange/20 text-brand-orange text-xs font-semibold tracking-wider uppercase px-3 py-1 rounded-full mb-6">
            What We Source
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-5">
            Products We Source
          </h1>
          <p className="text-blue-200 text-lg max-w-2xl mx-auto">
            We source across a wide range of industries. If it is manufactured in China, we can find the right supplier for you.
          </p>
        </div>
      </section>

      {/* Category Grid */}
      <section className="bg-white py-20 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {categories.map((cat) => (
              <div key={cat.title} className="bg-surface-light rounded-xl p-6 md:p-8 border border-border-light hover:shadow-md transition-shadow">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-11 h-11 bg-brand-navy/5 rounded-xl flex items-center justify-center">
                    <cat.icon className="w-6 h-6 text-brand-navy" />
                  </div>
                  <h3 className="text-lg font-semibold text-content-primary">{cat.title}</h3>
                </div>
                <ul className="flex flex-wrap gap-2 mb-4">
                  {cat.products.map((p) => (
                    <li key={p} className="bg-white text-content-secondary text-xs font-medium px-2.5 py-1 rounded-full border border-border-light">
                      {p}
                    </li>
                  ))}
                </ul>
                <p className="text-content-muted text-xs leading-relaxed">{cat.note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Sourcing */}
      <section className="bg-surface-light py-20 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <SectionHeader
            label="Custom Requests"
            title="Don't See Your Product Category?"
            description="This is not an exhaustive list. We have sourced thousands of different products across virtually every industry. If it is made in China, we can find it."
          />
          <div className="grid sm:grid-cols-3 gap-6 mb-10">
            {[
              { num: '200+', label: 'Product Categories Sourced' },
              { num: '5,000+', label: 'Unique SKUs Delivered' },
              { num: '99.2%', label: 'On-Time Delivery Rate' },
            ].map((s) => (
              <div key={s.label} className="bg-white rounded-xl p-6 shadow-sm border border-border-light">
                <div className="text-3xl font-bold text-brand-navy mb-1">{s.num}</div>
                <div className="text-content-muted text-sm">{s.label}</div>
              </div>
            ))}
          </div>
          <CTAButton className="text-base px-8 py-4">
            Tell Us What You Need <ArrowRight className="ml-2 w-5 h-5" />
          </CTAButton>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-brand-navy py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-5">
            Ready to Source Your Products?
          </h2>
          <p className="text-blue-200 text-lg mb-8">
            Send us your product specifications and we will provide supplier options with competitive pricing within 24 hours.
          </p>
          <CTAButton className="text-base px-8 py-4">
            Get a Free Sourcing Quote <ArrowRight className="ml-2 w-5 h-5" />
          </CTAButton>
        </div>
      </section>
    </div>
  )
}
