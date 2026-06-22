import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const categories = [
  {
    name: 'Electronics & Technology',
    items: ['Consumer electronics', 'LED lighting', 'PCBs and components', 'Cables and accessories', 'Smart home devices', 'Industrial electronics'],
    emoji: '⚡',
  },
  {
    name: 'Furniture & Home Goods',
    items: ['Wooden furniture', 'Metal furniture', 'Upholstered furniture', 'Home décor', 'Storage solutions', 'Outdoor furniture'],
    emoji: '🪑',
  },
  {
    name: 'Apparel & Textiles',
    items: ['Clothing and garments', 'Sportswear', 'Workwear and uniforms', 'Bags and accessories', 'Fabrics and textiles', 'Footwear'],
    emoji: '👕',
  },
  {
    name: 'Toys & Baby Products',
    items: ['Plastic toys', 'Wooden toys', 'Educational toys', 'Baby gear', 'Outdoor play equipment', 'Stuffed animals'],
    emoji: '🧸',
  },
  {
    name: 'Health & Beauty',
    items: ['Skincare products', 'Hair care', 'Cosmetics', 'Medical devices', 'Fitness equipment', 'Wellness products'],
    emoji: '💄',
  },
  {
    name: 'Industrial & Hardware',
    items: ['Tools and equipment', 'Fasteners and fittings', 'Safety equipment', 'Machinery parts', 'Construction materials', 'Automotive parts'],
    emoji: '🔧',
  },
  {
    name: 'Packaging & Print',
    items: ['Custom packaging boxes', 'Paper bags', 'Labels and stickers', 'Promotional materials', 'Gift packaging', 'Eco-friendly packaging'],
    emoji: '📦',
  },
  {
    name: 'Sports & Outdoor',
    items: ['Sports equipment', 'Camping gear', 'Cycling accessories', 'Water sports', 'Gym equipment', 'Outdoor apparel'],
    emoji: '⛺',
  },
  {
    name: 'Pet Products',
    items: ['Pet food and treats', 'Pet accessories', 'Pet toys', 'Pet grooming', 'Pet furniture', 'Aquarium supplies'],
    emoji: '🐾',
  },
];

const notSourcing = [
  'Pharmaceuticals and controlled substances',
  'Weapons and military equipment',
  'Products requiring specialized import licenses we cannot support',
  'Counterfeit or IP-infringing goods',
];

export default function Products() {
  return (
    <div>
      {/* Page Header */}
      <section className="bg-brand-navy py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-brand-gold text-sm font-semibold uppercase tracking-widest mb-3">Product Categories</p>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Products We Source</h1>
          <p className="text-slate-300 text-lg max-w-2xl">
            We source across a wide range of product categories. If your product is manufactured in China, we can likely help you find the right supplier.
          </p>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="py-16 md:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-brand-red text-sm font-semibold uppercase tracking-widest mb-3">Categories</p>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Our Sourcing Categories</h2>
            <p className="text-slate-600 text-lg max-w-2xl mx-auto">
              We have established supplier networks across these major product categories.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map(({ name, items, emoji }) => (
              <div key={name} className="bg-white rounded-xl border border-slate-200 p-6 hover:shadow-md transition-shadow">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-2xl">{emoji}</span>
                  <h3 className="font-bold text-slate-900 text-base">{name}</h3>
                </div>
                <ul className="flex flex-col gap-1.5">
                  {items.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-slate-600 text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-red flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Not Sourcing */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-slate-50 rounded-xl border border-slate-200 p-8">
            <h3 className="font-bold text-slate-900 text-lg mb-4">Products We Do Not Source</h3>
            <p className="text-slate-600 text-sm mb-4">
              We maintain strict ethical and legal standards. We do not source the following:
            </p>
            <ul className="flex flex-col gap-2">
              {notSourcing.map((item) => (
                <li key={item} className="flex items-center gap-2 text-slate-600 text-sm">
                  <span className="text-brand-red font-bold">✕</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-brand-navy">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Don't See Your Product Category?</h2>
          <p className="text-slate-300 text-lg mb-8">
            Contact us anyway. If it's made in China, we can likely help you source it.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-brand-red hover:bg-red-700 text-white font-bold px-8 py-4 rounded-lg transition-colors"
          >
            Ask About Your Product <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
