import { Link } from 'react-router-dom'
import {
  ArrowRight, Package, Boxes, Factory, Star, Award, Lightbulb,
  Cpu, Home, Wrench, Shirt, Heart, Megaphone, Laptop, Armchair,
  Zap, Gem, Baby, Car, Dumbbell
} from 'lucide-react'

const categories = [
  {
    icon: Cpu,
    name: 'Consumer Electronics',
    desc: 'Phone accessories, wireless chargers, Bluetooth speakers, earbuds, power banks, LED lights, smart devices.',
    examples: ['Bluetooth Speakers', 'Phone Cases', 'LED Strip Lights', 'Power Banks', 'Webcams', 'USB Hubs'],
    region: 'Shenzhen, Dongguan',
  },
  {
    icon: Home,
    name: 'Home & Garden',
    desc: 'Furniture, home decor, kitchenware, bathroom accessories, garden tools, storage solutions, lighting fixtures.',
    examples: ['Dining Tables', 'Kitchen Gadgets', 'Storage Bins', 'Garden Planters', 'LED Bulbs', 'Wall Art'],
    region: 'Foshan, Guangzhou',
  },
  {
    icon: Wrench,
    name: 'Industrial & Machinery',
    desc: 'CNC machined parts, metal hardware, hand tools, pumps, valves, industrial components, and custom fabrication.',
    examples: ['CNC Parts', 'Bolts & Fasteners', 'Hydraulic Pumps', 'Custom Stamping', 'Welding Equipment', 'Bearings'],
    region: 'Ningbo, Wenzhou',
  },
  {
    icon: Shirt,
    name: 'Fashion & Textiles',
    desc: 'Apparel, bags, shoes, fabrics, sportswear, denim, knitwear, and custom clothing manufacturing.',
    examples: ['T-Shirts', 'Denim Jeans', 'Canvas Bags', 'Sneakers', 'Activewear', 'Work Uniforms'],
    region: 'Guangzhou, Quanzhou',
  },
  {
    icon: Heart,
    name: 'Beauty & Personal Care',
    desc: 'Cosmetics, skincare, hair care, personal hygiene products, beauty tools, and custom packaging.',
    examples: ['Skincare Sets', 'Makeup Brushes', 'Hair Dryers', 'Face Masks', 'Lip Balm', 'Essential Oils'],
    region: 'Guangzhou, Yiwu',
  },
  {
    icon: Megaphone,
    name: 'Promotional Products',
    desc: 'Custom branded merchandise, corporate gifts, event giveaways, promotional items, and seasonal products.',
    examples: ['Custom Mugs', 'Branded Pens', 'Tote Bags', 'USB Drives', 'Lanyards', 'Keychains'],
    region: 'Yiwu, Shenzhen',
  },
  {
    icon: Baby,
    name: 'Baby & Kids Products',
    desc: 'Toys, educational materials, baby gear, children\'s clothing, strollers, and safety-certified products.',
    examples: ['Educational Toys', 'Baby Clothing', 'Strollers', 'Puzzles', 'Building Blocks', 'Plush Toys'],
    region: 'Shantou, Guangzhou',
  },
  {
    icon: Car,
    name: 'Automotive Parts',
    desc: 'Car accessories, spare parts, LED headlights, floor mats, dash cameras, and aftermarket components.',
    examples: ['LED Headlights', 'Floor Mats', 'Dash Cameras', 'Car Chargers', 'Seat Covers', 'Wiper Blades'],
    region: 'Guangzhou, Wenzhou',
  },
  {
    icon: Dumbbell,
    name: 'Sports & Outdoor',
    desc: 'Fitness equipment, camping gear, fishing accessories, yoga mats, water bottles, and sports apparel.',
    examples: ['Yoga Mats', 'Dumbbells', 'Camping Tents', 'Water Bottles', 'Resistance Bands', 'Fishing Rods'],
    region: 'Ningbo, Xiamen',
  },
  {
    icon: Gem,
    name: 'Jewelry & Accessories',
    desc: 'Fashion jewelry, watches, sunglasses, hair accessories, scarves, and custom OEM/ODM production.',
    examples: ['Necklaces', 'Watches', 'Sunglasses', 'Hair Clips', 'Bracelets', 'Earrings'],
    region: 'Yiwu, Guangzhou',
  },
]

const Products = () => {
  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary to-primary-dark py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block text-accent font-semibold text-sm uppercase tracking-wider mb-3">What We Source</span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-4">Products We Source from China</h1>
          <p className="text-blue-100 text-lg max-w-2xl mx-auto">
            We cover a wide range of product categories across China's major manufacturing regions.
            Whatever you need to source, we can find the right supplier.
          </p>
        </div>
      </section>

      {/* Product Categories Grid */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((cat) => (
              <div key={cat.name} className="group bg-slate-50 rounded-xl border border-slate-200 p-6 hover:border-accent/30 hover:bg-white hover:shadow-lg transition-all">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-accent/10 transition-colors">
                    <cat.icon className="w-5 h-5 text-primary group-hover:text-accent transition-colors" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900">{cat.name}</h3>
                </div>
                <p className="text-slate-600 text-sm leading-relaxed mb-4">{cat.desc}</p>
                <div className="mb-4">
                  <h4 className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">Common Products</h4>
                  <div className="flex flex-wrap gap-1.5">
                    {cat.examples.map((ex) => (
                      <span key={ex} className="px-2.5 py-1 bg-white border border-slate-200 text-xs text-slate-600 rounded-full">
                        {ex}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-500">
                  <span className="font-medium text-primary">{cat.region}</span>
                  <span>— Primary manufacturing region</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Note */}
      <section className="py-12 bg-slate-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-slate-600 text-sm">
            <span className="font-semibold text-slate-900">Don't see your product category?</span>{' '}
            We work across many more categories. Contact us with your specific product requirements
            and we will let you know if we can help.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4">Ready to Source Your Products?</h2>
          <p className="text-slate-500 text-lg mb-8">Submit your product requirements and get a free sourcing plan within 24 hours.</p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-accent text-white font-semibold rounded-xl hover:bg-accent-dark transition-colors shadow-lg"
          >
            Get a Free Sourcing Quote <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  )
}

export default Products
