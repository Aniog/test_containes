import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import SectionHeader from '../shared/SectionHeader';

const categories = [
  { name: 'Electronics & Components', icon: '🔌', examples: 'PCBs, cables, LED lighting, smart devices' },
  { name: 'Furniture & Home Goods', icon: '🪑', examples: 'Office furniture, storage, décor, bedding' },
  { name: 'Apparel & Textiles', icon: '👕', examples: 'Clothing, sportswear, bags, fabrics' },
  { name: 'Industrial Equipment', icon: '⚙️', examples: 'Machinery parts, tools, safety equipment' },
  { name: 'Consumer Products', icon: '🛍️', examples: 'Kitchenware, toys, personal care, gifts' },
  { name: 'Packaging & Labels', icon: '📦', examples: 'Custom boxes, bags, labels, inserts' },
  { name: 'Auto Parts & Accessories', icon: '🚗', examples: 'OEM parts, accessories, tires, filters' },
  { name: 'Health & Beauty', icon: '💊', examples: 'Supplements, cosmetics, medical devices' },
];

export default function ProductsSection() {
  return (
    <section className="section-white">
      <div className="container-xl">
        <SectionHeader
          label="Products We Source"
          title="We Source Across 20+ Product Categories"
          subtitle="Our team has hands-on experience sourcing a wide range of products from verified Chinese manufacturers."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {categories.map((cat) => (
            <div
              key={cat.name}
              className="bg-slate-50 hover:bg-blue-50 border border-slate-200 hover:border-blue-200 rounded-xl p-5 transition-colors duration-200 cursor-default"
            >
              <div className="text-3xl mb-3">{cat.icon}</div>
              <h3 className="font-bold text-slate-900 text-sm mb-1">{cat.name}</h3>
              <p className="text-slate-500 text-xs leading-relaxed">{cat.examples}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link to="/products" className="btn-primary">
            Browse All Categories
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
