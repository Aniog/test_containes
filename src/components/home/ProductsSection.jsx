import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const categories = [
  { name: 'Electronics & Components', items: 'Consumer electronics, PCBs, cables, connectors' },
  { name: 'Machinery & Industrial', items: 'CNC parts, tools, automation equipment' },
  { name: 'Home & Garden', items: 'Furniture, lighting, kitchenware, decor' },
  { name: 'Apparel & Textiles', items: 'Clothing, fabrics, accessories, uniforms' },
  { name: 'Packaging & Printing', items: 'Custom boxes, labels, bags, displays' },
  { name: 'Building Materials', items: 'Hardware, tiles, fixtures, construction supplies' },
  { name: 'Automotive Parts', items: 'Accessories, components, aftermarket parts' },
  { name: 'Health & Beauty', items: 'Cosmetics, personal care, wellness products' },
  { name: 'Sports & Outdoor', items: 'Fitness equipment, camping gear, apparel' },
];

export default function ProductsSection() {
  return (
    <section id="products" className="section-padding bg-slate-50">
      <div className="container-custom">
        <div className="section-header">
          <h2 id="products-title" className="section-title">Products We Source</h2>
          <p id="products-subtitle" className="section-subtitle">
            From consumer goods to industrial components, we source across a wide range of product categories.
          </p>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
          {categories.map((category, index) => (
            <div key={index} className="card flex items-start gap-4">
              <div className="w-3 h-3 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <h3 className="font-semibold text-slate-900 mb-1">{category.name}</h3>
                <p className="text-sm text-slate-500">{category.items}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-10">
          <Link to="/products" className="btn-secondary">
            View All Product Categories <ArrowRight className="w-4 h-4 ml-2" />
          </Link>
        </div>
      </div>
    </section>
  );
}
