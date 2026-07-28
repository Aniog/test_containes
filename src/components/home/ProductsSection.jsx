import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const categories = [
  { id: 'electronics', title: 'Consumer Electronics', description: 'Headphones, chargers, smart devices, LED lighting', titleId: 'prod-electronics-title', descId: 'prod-electronics-desc', imgId: 'prod-electronics-img-4a8b1c' },
  { id: 'textiles', title: 'Textiles & Apparel', description: 'Clothing, fabrics, uniforms, sportswear, accessories', titleId: 'prod-textiles-title', descId: 'prod-textiles-desc', imgId: 'prod-textiles-img-5d2e3f' },
  { id: 'home-garden', title: 'Home & Garden', description: 'Furniture, kitchenware, decor, outdoor products', titleId: 'prod-home-title', descId: 'prod-home-desc', imgId: 'prod-home-img-6g4h5i' },
  { id: 'industrial', title: 'Industrial & Machinery', description: 'Tools, equipment, auto parts, hardware, packaging', titleId: 'prod-industrial-title', descId: 'prod-industrial-desc', imgId: 'prod-industrial-img-7j6k8l' },
  { id: 'beauty', title: 'Beauty & Personal Care', description: 'Cosmetics, skincare, packaging, salon equipment', titleId: 'prod-beauty-title', descId: 'prod-beauty-desc', imgId: 'prod-beauty-img-8m9n0p' },
  { id: 'packaging', title: 'Packaging & Printing', description: 'Custom boxes, labels, bags, promotional materials', titleId: 'prod-packaging-title', descId: 'prod-packaging-desc', imgId: 'prod-packaging-img-1q2r3s' },
];

const ProductsSection = () => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <span className="inline-block text-brand-blue text-sm font-semibold uppercase tracking-wider mb-3">Product Categories</span>
          <h2 id="products-section-title" className="text-3xl md:text-4xl font-bold text-neutral-900 tracking-tight mb-4">
            Products We Source
          </h2>
          <p id="products-section-subtitle" className="text-neutral-600 text-lg max-w-2xl mx-auto">
            We source across a wide range of industries. If it's made in China, we can help you find the right supplier.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((cat) => (
            <div key={cat.id} className="group relative rounded-xl overflow-hidden border border-neutral-200 hover:shadow-lg transition-all duration-300">
              <div className="aspect-[4/3] relative overflow-hidden bg-neutral-100">
                <img
                  data-strk-img-id={cat.imgId}
                  data-strk-img={`[${cat.descId}] [${cat.titleId}] [products-section-title]`}
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={cat.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-5">
                <h3 id={cat.titleId} className="text-lg font-semibold text-neutral-900 mb-1">{cat.title}</h3>
                <p id={cat.descId} className="text-neutral-600 text-sm">{cat.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            to="/products"
            className="inline-flex items-center gap-2 text-brand-blue font-semibold hover:underline"
          >
            View All Product Categories
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
