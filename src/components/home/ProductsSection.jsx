import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const categories = [
  { id: 'electronics', label: 'Electronics & Components', imgId: 'prod-electronics-img-a1b2c3', titleId: 'prod-electronics-title', descId: 'prod-electronics-desc', desc: 'Consumer electronics, PCBs, cables, LED lighting' },
  { id: 'furniture', label: 'Furniture & Home Goods', imgId: 'prod-furniture-img-d4e5f6', titleId: 'prod-furniture-title', descId: 'prod-furniture-desc', desc: 'Office furniture, home décor, storage solutions' },
  { id: 'apparel', label: 'Apparel & Textiles', imgId: 'prod-apparel-img-g7h8i9', titleId: 'prod-apparel-title', descId: 'prod-apparel-desc', desc: 'Clothing, sportswear, fabrics, accessories' },
  { id: 'machinery', label: 'Industrial Machinery', imgId: 'prod-machinery-img-j1k2l3', titleId: 'prod-machinery-title', descId: 'prod-machinery-desc', desc: 'Manufacturing equipment, tools, spare parts' },
  { id: 'packaging', label: 'Packaging & Printing', imgId: 'prod-packaging-img-m4n5o6', titleId: 'prod-packaging-title', descId: 'prod-packaging-desc', desc: 'Custom boxes, labels, bags, promotional materials' },
  { id: 'toys', label: 'Toys & Sporting Goods', imgId: 'prod-toys-img-p7q8r9', titleId: 'prod-toys-title', descId: 'prod-toys-desc', desc: 'Toys, games, outdoor equipment, fitness gear' },
];

export default function ProductsSection() {
  const containerRef = useRef(null);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, []);

  return (
    <section ref={containerRef} className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="text-brand-blue text-sm font-semibold uppercase tracking-widest mb-2">Product Categories</p>
          <h2 id="products-section-title" className="text-neutral-900 text-3xl md:text-4xl font-bold">
            Products We Source from China
          </h2>
          <p id="products-section-subtitle" className="text-neutral-500 text-lg mt-4 max-w-2xl mx-auto">
            We work across a wide range of product categories, connecting buyers with the right manufacturers for their specific needs.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 lg:gap-6">
          {categories.map((cat) => (
            <div key={cat.id} className="relative rounded-xl overflow-hidden group cursor-pointer h-44 md:h-52">
              <img
                alt={cat.label}
                data-strk-img-id={cat.imgId}
                data-strk-img={`[${cat.descId}] [${cat.titleId}] [products-section-subtitle] [products-section-title]`}
                data-strk-img-ratio="4x3"
                data-strk-img-width="500"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/80 via-brand-navy/30 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <h3 id={cat.titleId} className="text-white font-semibold text-sm md:text-base leading-tight">{cat.label}</h3>
                <p id={cat.descId} className="text-blue-200 text-xs mt-1 hidden md:block">{cat.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            to="/products"
            className="inline-flex items-center gap-2 text-brand-blue font-semibold hover:text-brand-navy transition-colors"
          >
            View All Product Categories <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
