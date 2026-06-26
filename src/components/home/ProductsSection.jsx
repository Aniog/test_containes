import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const categories = [
  { id: 'electronics', label: 'Electronics & Components', imgId: 'prod-img-electronics-1a2b3c', titleId: 'prod-electronics-title' },
  { id: 'furniture', label: 'Furniture & Home Goods', imgId: 'prod-img-furniture-4d5e6f', titleId: 'prod-furniture-title' },
  { id: 'apparel', label: 'Apparel & Textiles', imgId: 'prod-img-apparel-7g8h9i', titleId: 'prod-apparel-title' },
  { id: 'machinery', label: 'Industrial Machinery', imgId: 'prod-img-machinery-0j1k2l', titleId: 'prod-machinery-title' },
  { id: 'packaging', label: 'Packaging & Printing', imgId: 'prod-img-packaging-3m4n5o', titleId: 'prod-packaging-title' },
  { id: 'toys', label: 'Toys & Sporting Goods', imgId: 'prod-img-toys-6p7q8r', titleId: 'prod-toys-title' },
];

export default function ProductsSection() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#e8621a] mb-3">Product Categories</p>
          <h2 id="products-section-title" className="text-3xl md:text-4xl font-bold text-[#0d2340] mb-4">
            Products We Source from China
          </h2>
          <p className="text-[#5a6a7e] max-w-2xl mx-auto text-base leading-relaxed">
            We have experience sourcing across a wide range of industries and product types. If you don't see your category, contact us — we likely can help.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {categories.map((cat) => (
            <div key={cat.id} className="relative rounded-xl overflow-hidden group cursor-pointer h-44 md:h-52">
              <img
                data-strk-img-id={cat.imgId}
                data-strk-img={`[${cat.titleId}] [products-section-title]`}
                data-strk-img-ratio="4x3"
                data-strk-img-width="600"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={cat.label}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0d2340]/80 via-[#0d2340]/30 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <h3 id={cat.titleId} className="text-white font-semibold text-sm md:text-base leading-tight">{cat.label}</h3>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            to="/products"
            className="inline-flex items-center gap-2 text-[#1a4f8a] font-semibold hover:text-[#0d2340] transition-colors"
          >
            View All Product Categories
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
