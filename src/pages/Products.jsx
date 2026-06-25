import { Link } from 'react-router-dom'
import {
  ArrowRight,
  Monitor,
  Home as HomeIcon,
  Shirt,
  Wrench,
  Gift,
  Package,
  Lightbulb,
  Baby,
  Car,
  Building,
  Stethoscope,
  Dumbbell,
} from 'lucide-react'

const categories = [
  {
    icon: Monitor,
    title: 'Electronics & Components',
    desc: 'Consumer electronics, PCBs, LED products, cables, chargers, power banks, audio equipment, and electronic accessories.',
    examples: ['LED lighting', 'USB cables & chargers', 'Bluetooth speakers', 'PCB assemblies', 'Security cameras'],
  },
  {
    icon: HomeIcon,
    title: 'Home & Garden',
    desc: 'Furniture, kitchenware, storage solutions, garden tools, home decor, bathroom accessories, and household items.',
    examples: ['Kitchen gadgets', 'Storage organizers', 'Garden tools', 'Home decor', 'Bathroom accessories'],
  },
  {
    icon: Shirt,
    title: 'Apparel & Textiles',
    desc: 'Clothing, bags, fabrics, shoes, fashion accessories, sportswear, workwear, and custom embroidery.',
    examples: ['T-shirts & hoodies', 'Tote bags', 'Work uniforms', 'Sports apparel', 'Custom embroidery'],
  },
  {
    icon: Wrench,
    title: 'Machinery & Industrial',
    desc: 'Industrial equipment, CNC parts, molds, metal components, welding equipment, and custom fabrication.',
    examples: ['CNC machined parts', 'Custom molds', 'Metal fabrication', 'Industrial pumps', 'Conveyor systems'],
  },
  {
    icon: Gift,
    title: 'Promotional Products',
    desc: 'Custom branded merchandise, trade show giveaways, corporate gifts, pens, USB drives, and drinkware.',
    examples: ['Branded pens', 'Custom USB drives', 'Promotional mugs', 'Trade show displays', 'Corporate gift sets'],
  },
  {
    icon: Package,
    title: 'Packaging & Printing',
    desc: 'Custom boxes, labels, eco-friendly packaging, tissue paper, stickers, and packaging machinery.',
    examples: ['Custom boxes', 'Product labels', 'Eco packaging', 'Gift wrapping', 'Shrink wrap'],
  },
  {
    icon: Lightbulb,
    title: 'Building & Construction',
    desc: 'Building materials, hardware, plumbing fixtures, electrical components, tiles, and insulation products.',
    examples: ['Floor tiles', 'Plumbing fittings', 'Door hardware', 'LED panels', 'Insulation materials'],
  },
  {
    icon: Baby,
    title: 'Toys & Children',
    desc: 'Toys, educational products, baby items, children\'s furniture, outdoor play equipment, and stationery.',
    examples: ['Educational toys', 'Plush toys', 'Children\'s furniture', 'Art supplies', 'Outdoor play sets'],
  },
  {
    icon: Car,
    title: 'Automotive Parts',
    desc: 'Auto accessories, replacement parts, lighting, wheels, rubber components, and custom automotive products.',
    examples: ['LED headlights', 'Floor mats', 'Car phone mounts', 'Rubber seals', 'Custom emblems'],
  },
  {
    icon: Building,
    title: 'Office & Commercial',
    desc: 'Office furniture, signage, display stands, retail fixtures, commercial lighting, and organizational products.',
    examples: ['Office desks', 'Retail displays', 'LED signage', 'Filing systems', 'Commercial lighting'],
  },
  {
    icon: Stethoscope,
    title: 'Health & Personal Care',
    desc: 'Personal care products, wellness items, cosmetics packaging, fitness accessories, and hygiene products.',
    examples: ['Cosmetic packaging', 'Wellness devices', 'Hygiene products', 'Fitness accessories', 'Essential oil bottles'],
  },
  {
    icon: Dumbbell,
    title: 'Sports & Outdoor',
    desc: 'Sporting goods, camping equipment, outdoor gear, fitness equipment, and recreational products.',
    examples: ['Yoga mats', 'Camping gear', 'Resistance bands', 'Water bottles', 'Bike accessories'],
  },
]

export default function Products() {
  return (
    <>
      {/* Hero */}
      <section className="bg-primary-dark py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-xs font-semibold uppercase tracking-widest text-accent mb-4 block">Product Categories</span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-6">Products We Source</h1>
          <p className="text-lg text-white/70 max-w-2xl mx-auto leading-relaxed">
            We source products across a wide range of categories from verified Chinese manufacturers. If your product is not listed below, contact us — we likely have experience in your industry.
          </p>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="bg-white py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((cat) => {
              const Icon = cat.icon
              return (
                <div
                  key={cat.title}
                  className="bg-surface border border-border rounded-xl p-6 hover:shadow-md hover:border-primary/20 transition-all group"
                >
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-text-primary mb-2">{cat.title}</h3>
                  <p className="text-text-secondary text-sm leading-relaxed mb-4">{cat.desc}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {cat.examples.map((ex) => (
                      <span key={ex} className="bg-white border border-border text-text-muted text-xs px-2.5 py-1 rounded-full">{ex}</span>
                    ))}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Note */}
      <section className="bg-surface-alt py-16 lg:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-text-primary mb-4">Don't See Your Product?</h2>
          <p className="text-text-secondary mb-8">
            We work across many more categories than listed here. Our team has experience sourcing a wide variety of products from Chinese manufacturers. Tell us what you need, and we will let you know if we can help.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-accent hover:bg-accent-hover text-white font-semibold px-8 py-4 rounded-lg transition-colors"
          >
            Ask About Your Product
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </>
  )
}
