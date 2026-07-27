import { Link } from 'react-router-dom';
import { Cpu, Shirt, Home, Wrench, ShoppingBag, Car, Heart, UtensilsCrossed } from 'lucide-react';

const categories = [
  { icon: Cpu, name: 'Electronics & Components', count: '200+ suppliers' },
  { icon: Shirt, name: 'Textiles & Apparel', count: '150+ suppliers' },
  { icon: Home, name: 'Home & Garden', count: '180+ suppliers' },
  { icon: Wrench, name: 'Industrial Equipment', count: '120+ suppliers' },
  { icon: ShoppingBag, name: 'Consumer Goods', count: '250+ suppliers' },
  { icon: Car, name: 'Auto Parts & Accessories', count: '100+ suppliers' },
  { icon: Heart, name: 'Health & Beauty', count: '90+ suppliers' },
  { icon: UtensilsCrossed, name: 'Food & Packaging', count: '80+ suppliers' },
];

export default function ProductsSection() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="section-title">Products We Source</h2>
          <p className="section-subtitle mx-auto">
            We source a wide range of products from verified Chinese manufacturers. If you don't see your category, contact us anyway.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {categories.map((cat, index) => (
            <Link
              key={index}
              to="/products"
              className="group p-5 md:p-6 rounded-xl border border-slate-200 hover:border-blue-300 hover:shadow-md transition-all duration-300 bg-white text-center"
            >
              <div className="w-12 h-12 bg-slate-100 group-hover:bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-3 transition-colors">
                <cat.icon className="w-6 h-6 text-slate-600 group-hover:text-blue-600 transition-colors" />
              </div>
              <h3 className="text-sm md:text-base font-semibold text-slate-900 mb-1">{cat.name}</h3>
              <p className="text-xs text-slate-500">{cat.count}</p>
            </Link>
          ))}
        </div>
        <div className="text-center mt-10">
          <Link to="/products" className="btn-secondary">
            View All Product Categories
          </Link>
        </div>
      </div>
    </section>
  );
}
