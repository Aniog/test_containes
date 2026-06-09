import { Link } from 'react-router-dom'
import { ArrowRight, Zap, Cpu, Monitor, Wifi, Lightbulb, Home, Utensils, Sofa, Wrench, Factory, Cog, Shirt, ShoppingBag, Building, Hammer, Bike, Car, Gem, Heart, Stethoscope, Sprout, Coffee, Baby, Gamepad2, Music, Book, Tent, Dumbbell, Package } from 'lucide-react'

const categories = [
  {
    icon: Cpu,
    name: 'Electronics & Gadgets',
    desc: 'Consumer electronics, LED lighting, smart home devices, power banks, chargers, cables, audio equipment, and electronic accessories.',
    items: ['Consumer Electronics', 'LED Lighting', 'Smart Home Devices', 'Power Banks & Chargers', 'Audio Equipment', 'Electronic Accessories'],
  },
  {
    icon: Home,
    name: 'Home & Garden',
    desc: 'Furniture, kitchenware, storage solutions, bathroom accessories, garden tools, outdoor furniture, home decoration, and household items.',
    items: ['Kitchen & Dining', 'Furniture', 'Storage Solutions', 'Bathroom Accessories', 'Garden Tools', 'Home Decor'],
  },
  {
    icon: Factory,
    name: 'Machinery & Industrial',
    desc: 'CNC machines, industrial equipment, manufacturing tools, spare parts, hydraulic systems, pumps, motors, and automation components.',
    items: ['CNC & Manufacturing', 'Industrial Equipment', 'Hydraulic Systems', 'Pumps & Motors', 'Automation Parts', 'Power Tools'],
  },
  {
    icon: Shirt,
    name: 'Textiles & Apparel',
    desc: 'Clothing, bags, fabrics, promotional products, sportswear, workwear, uniforms, accessories, and fashion items.',
    items: ['Clothing & Fashion', 'Bags & Luggage', 'Fabrics & Materials', 'Promotional Products', 'Sportswear', 'Workwear & Uniforms'],
  },
  {
    icon: Building,
    name: 'Building & Hardware',
    desc: 'Construction materials, hardware fittings, plumbing supplies, electrical components, tiles, flooring, roofing materials, and safety equipment.',
    items: ['Construction Materials', 'Hardware Fittings', 'Plumbing Supplies', 'Electrical Components', 'Tiles & Flooring', 'Safety Equipment'],
  },
  {
    icon: Car,
    name: 'Automotive & Transport',
    desc: 'Vehicle parts and accessories, electric bikes and scooters, tires, car electronics, LED lights, lubricants, and transport equipment.',
    items: ['Vehicle Parts', 'Electric Bikes & Scooters', 'Tires & Wheels', 'Car Electronics', 'Car LED Lights', 'Lubricants & Fluids'],
  },
  {
    icon: Gem,
    name: 'Jewelry & Accessories',
    desc: 'Fashion jewelry, watches, sunglasses, belts, scarves, hair accessories, phone cases, and personal accessories.',
    items: ['Fashion Jewelry', 'Watches', 'Sunglasses', 'Belts & Scarves', 'Hair Accessories', 'Phone Cases'],
  },
  {
    icon: Heart,
    name: 'Health & Beauty',
    desc: 'Cosmetics, skincare products, personal care items, health supplements, fitness equipment, medical supplies, and beauty tools.',
    items: ['Cosmetics', 'Skincare Products', 'Personal Care', 'Health Supplements', 'Fitness Equipment', 'Beauty Tools'],
  },
  {
    icon: Sprout,
    name: 'Agriculture & Food',
    desc: 'Agricultural tools and equipment, food processing machinery, packaging materials, seeds, fertilizers, and food products.',
    items: ['Farm Equipment', 'Food Processing', 'Packaging Materials', 'Seeds & Fertilizers', 'Food Products', 'Irrigation Systems'],
  },
  {
    icon: Gamepad2,
    name: 'Toys & Entertainment',
    desc: 'Children toys, board games, outdoor recreation equipment, seasonal items, party supplies, educational toys, and hobby products.',
    items: ['Children Toys', 'Board Games', 'Outdoor Recreation', 'Seasonal Items', 'Party Supplies', 'Educational Products'],
  },
  {
    icon: Package,
    name: 'Packaging & Printing',
    desc: 'Custom packaging solutions, boxes, labels, stickers, bags, printing services, promotional materials, and branding products.',
    items: ['Custom Boxes', 'Labels & Stickers', 'Shopping Bags', 'Print Materials', 'Promotional Items', 'Branding Solutions'],
  },
  {
    icon: Tent,
    name: 'Sports & Outdoor',
    desc: 'Camping gear, sports equipment, fitness accessories, cycling equipment, water sports, outdoor furniture, and adventure gear.',
    items: ['Camping Gear', 'Sports Equipment', 'Fitness Accessories', 'Cycling Equipment', 'Water Sports', 'Outdoor Furniture'],
  },
]

const ProductCategory = ({ category, index }) => (
  <div className="group bg-white rounded-xl border border-neutral-200 overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-primary/10">
    <div className="p-6">
      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary transition-colors">
        <category.icon className="w-6 h-6 text-primary group-hover:text-white" />
      </div>
      <h3 className="text-lg font-semibold text-neutral-900 mb-2">{category.name}</h3>
      <p className="text-sm text-neutral-500 leading-relaxed mb-4">{category.desc}</p>
      <div className="flex flex-wrap gap-2">
        {category.items.map((item) => (
          <span key={item} className="text-xs font-medium text-primary bg-primary/5 px-2.5 py-1 rounded-full">
            {item}
          </span>
        ))}
      </div>
    </div>
  </div>
)

export default function Products() {
  return (
    <div>
      <section className="bg-primary py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-sm font-semibold text-secondary uppercase tracking-widest">Products We Source</span>
          <h1 className="mt-3 text-4xl md:text-5xl font-bold text-white tracking-tight">Product Categories We Cover</h1>
          <p className="mt-4 text-lg text-neutral-300 max-w-2xl mx-auto">
            We source products across all major categories with deep supplier networks in each sector. If you do not see your product here, ask us.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((cat, i) => (
              <ProductCategory key={cat.name} category={cat} index={i} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-neutral-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 tracking-tight mb-4">Product Not Listed?</h2>
          <p className="text-lg text-neutral-500 mb-8">We source virtually any product manufactured in China. Send us your product details and we will find the right supplier for you.</p>
          <Link to="/contact" className="btn-primary text-base px-8 py-4">
            Submit Your Product Inquiry <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </section>
    </div>
  )
}
