import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { productCategories } from '@/data/content';

export default function ProductsSection() {
  return (
    <section className="py-16 md:py-24 bg-ss-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-ss-text tracking-tight mb-4">
            Products We Source
          </h2>
          <p className="text-lg text-ss-body max-w-2xl mx-auto">
            We source across a wide range of categories from China&apos;s major manufacturing hubs.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {productCategories.map((cat) => (
            <Link
              key={cat.id}
              to="/products"
              className="group bg-white rounded-xl border border-ss-border p-5 hover:shadow-md hover:border-ss-blue/30 transition-all"
            >
              <h3 className="text-sm font-semibold text-ss-text group-hover:text-ss-blue transition-colors mb-1.5">
                {cat.title}
              </h3>
              <p className="text-xs text-ss-body leading-relaxed line-clamp-2">
                {cat.description}
              </p>
            </Link>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            to="/products"
            className="inline-flex items-center text-sm font-medium text-ss-blue hover:text-ss-blue-light transition-colors"
          >
            View All Categories <ArrowRight className="w-4 h-4 ml-1.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}