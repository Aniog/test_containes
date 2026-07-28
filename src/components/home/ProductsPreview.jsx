import { Link } from 'react-router-dom';
import { Cpu, Cog, Shirt, Home, Baby, Wrench, Dumbbell, Smartphone } from 'lucide-react';

const categories = [
  { icon: Cpu, name: 'Electronics & Components', desc: 'PCBs, semiconductors, connectors, displays' },
  { icon: Cog, name: 'Industrial Machinery', desc: 'CNC parts, motors, pumps, automation equipment' },
  { icon: Shirt, name: 'Textiles & Apparel', desc: 'Garments, fabrics, sportswear, uniforms' },
  { icon: Home, name: 'Home & Kitchen', desc: 'Furniture, cookware, appliances, decor' },
  { icon: Smartphone, name: 'Consumer Electronics', desc: 'Smart devices, wearables, accessories' },
  { icon: Wrench, name: 'Hardware & Tools', desc: 'Power tools, fasteners, building materials' },
  { icon: Dumbbell, name: 'Sports & Outdoor', desc: 'Fitness equipment, camping gear, bicycles' },
  { icon: Baby, name: 'Baby & Kids Products', desc: 'Toys, strollers, children\'s furniture' },
];

export default function ProductsPreview() {
  return (
    <section id="products" className="py-20 sm:py-28 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-brand-600 font-semibold text-sm uppercase tracking-wider">Products We Source</p>
          <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-steel-900">
            We Source Across Major Industries
          </h2>
          <p className="mt-4 text-lg text-steel-500 leading-relaxed">
            Our network covers hundreds of product categories. Whatever you need, we can find it.
          </p>
        </div>
        <div className="mt-14 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {categories.map((cat) => (
            <div
              key={cat.name}
              className="group flex flex-col items-center rounded-xl border border-steel-200 bg-white p-6 text-center hover:border-brand-200 hover:shadow-md transition-all"
            >
              <div className="rounded-full bg-brand-50 p-3 text-brand-600 group-hover:bg-brand-100 transition-colors">
                <cat.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-sm font-semibold text-steel-900">{cat.name}</h3>
              <p className="mt-1 text-xs text-steel-500">{cat.desc}</p>
            </div>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link
            to="/products"
            className="inline-flex items-center text-brand-600 font-semibold text-sm hover:text-brand-700 transition-colors"
          >
            See Full Product Range &rarr;
          </Link>
        </div>
      </div>
    </section>
  );
}
