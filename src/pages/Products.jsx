import { ArrowRight, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const categories = [
  {
    title: 'Electronics & Components',
    desc: 'PCBs, consumer electronics, cables, connectors, batteries, LED lighting, and semiconductor components.',
    examples: ['Smartphone accessories', 'PCB assemblies', 'Power banks', 'LED drivers', 'Cables & connectors'],
  },
  {
    title: 'Machinery & Industrial Equipment',
    desc: 'Manufacturing machinery, packaging equipment, CNC machines, automation systems, and industrial tools.',
    examples: ['CNC machines', 'Packaging lines', 'Automation robots', 'Welding equipment', 'Industrial pumps'],
  },
  {
    title: 'Textiles & Apparel',
    desc: 'Fabrics, garments, bags, shoes, accessories, and home textiles from qualified manufacturers.',
    examples: ['Cotton fabrics', 'Sportswear', 'Leather bags', 'Canvas shoes', 'Home textiles'],
  },
  {
    title: 'Home & Hardware',
    desc: 'Furniture, kitchenware, bathroom fixtures, building hardware, and home decor products.',
    examples: ['Kitchen appliances', 'Furniture', 'Bathroom fittings', 'Door hardware', 'Home decor'],
  },
  {
    title: 'Automotive Parts',
    desc: 'OEM and aftermarket auto parts, electric vehicle components, accessories, and maintenance tools.',
    examples: ['Brake pads', 'EV chargers', 'Auto lighting', 'Car accessories', 'Maintenance tools'],
  },
  {
    title: 'Packaging & Printing',
    desc: 'Custom packaging boxes, labels, bags, printed materials, and branded promotional items.',
    examples: ['Gift boxes', 'Paper bags', 'Product labels', 'Printed catalogs', 'Promotional items'],
  },
  {
    title: 'Beauty & Personal Care',
    desc: 'Skincare products, cosmetics, personal care appliances, and wellness accessories.',
    examples: ['Skincare containers', 'Hair tools', 'Cosmetic brushes', 'Bath accessories', 'Wellness devices'],
  },
  {
    title: 'Sports & Outdoor',
    desc: 'Fitness equipment, outdoor gear, camping accessories, and sporting goods.',
    examples: ['Yoga mats', 'Camping tents', 'Resistance bands', 'Cycling accessories', 'Outdoor lighting'],
  },
];

export default function Products() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-navy py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block px-3 py-1 bg-brand/20 text-brand text-xs font-semibold uppercase tracking-wide rounded-full mb-4">
            Products
          </span>
          <h1 className="text-3xl md:text-5xl font-extrabold text-white mb-4">
            Products We Source
          </h1>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            We source a wide range of product categories. If you do not see your
            product listed, contact us. We likely can still help.
          </p>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((cat) => (
              <div
                key={cat.title}
                className="bg-white rounded-xl border border-slate-200 p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              >
                <h2 className="text-lg font-bold text-navy mb-2">{cat.title}</h2>
                <p className="text-sm text-slate-600 leading-relaxed mb-4">
                  {cat.desc}
                </p>
                <div className="space-y-2">
                  {cat.examples.map((ex) => (
                    <div key={ex} className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0" />
                      <span className="text-sm text-slate-700">{ex}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-navy mb-4">
            Do Not See Your Product?
          </h2>
          <p className="text-slate-600 mb-8 leading-relaxed">
            We have sourced products across dozens of categories. Reach out and
            tell us what you need. We will let you know if we can help.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-brand text-white font-semibold rounded-lg hover:bg-brand-dark transition-colors"
          >
            Contact Us
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
