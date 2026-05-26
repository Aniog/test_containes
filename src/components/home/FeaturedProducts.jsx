import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { PRODUCTS } from '@/data/products';
import ProductCard from '@/components/products/ProductCard';

export default function FeaturedProducts() {
  const featured = PRODUCTS.filter(p => p.is_featured).slice(0, 8);

  return (
    <section className="py-14 px-4 md:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-2">精选商品</h2>
            <p className="text-gray-500">最受球迷欢迎的世界杯周边</p>
          </div>
          <Link
            to="/products"
            className="hidden md:flex items-center gap-1 text-red-700 hover:text-red-800 font-semibold text-sm transition-colors"
          >
            查看全部 <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {featured.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="mt-8 text-center md:hidden">
          <Link
            to="/products"
            className="inline-flex items-center gap-1 text-red-700 hover:text-red-800 font-semibold text-sm"
          >
            查看全部商品 <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
