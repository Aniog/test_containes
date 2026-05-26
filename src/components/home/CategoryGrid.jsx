import { Link } from 'react-router-dom';
import { CATEGORIES } from '@/data/products';

export default function CategoryGrid() {
  return (
    <section className="py-14 px-4 md:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-3">商品分类</h2>
          <p className="text-gray-500 text-base">探索各类世界杯周边商品</p>
        </div>

        <div className="grid grid-cols-4 md:grid-cols-8 gap-3 md:gap-4">
          {CATEGORIES.map(cat => (
            <Link
              key={cat.id}
              to={cat.id === 'all' ? '/products' : `/products?category=${cat.id}`}
              className="group flex flex-col items-center gap-2 p-3 md:p-4 bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-md hover:border-red-200 transition-all duration-200"
            >
              <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-blue-900 to-red-800 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
                <span className="text-lg md:text-xl">{cat.icon}</span>
              </div>
              <span className="text-slate-700 text-xs md:text-sm font-medium text-center leading-tight group-hover:text-red-700 transition-colors">
                {cat.label}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
