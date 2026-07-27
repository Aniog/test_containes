import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const categories = [
  { id: 'electronics', title: 'Electronics & Components', desc: 'Consumer electronics, PCBs, cables, LED lighting, and industrial components.', imgId: 'prod-electronics-d4e5f6' },
  { id: 'furniture', title: 'Furniture & Home Goods', desc: 'Office furniture, home décor, storage solutions, and custom wood products.', imgId: 'prod-furniture-g7h8i9' },
  { id: 'apparel', title: 'Apparel & Textiles', desc: 'Clothing, sportswear, workwear, fabrics, and accessories for all markets.', imgId: 'prod-apparel-j1k2l3' },
  { id: 'machinery', title: 'Machinery & Equipment', desc: 'Industrial machinery, tools, agricultural equipment, and spare parts.', imgId: 'prod-machinery-m4n5o6' },
  { id: 'plastics', title: 'Plastics & Packaging', desc: 'Injection-molded parts, packaging materials, containers, and custom molds.', imgId: 'prod-plastics-p7q8r9' },
  { id: 'health', title: 'Health & Beauty Products', desc: 'Personal care, cosmetics, medical devices, and wellness products.', imgId: 'prod-health-s1t2u3' },
];

export default function ProductsSection() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-xs font-semibold uppercase tracking-widest text-brand-orange mb-3">Product Categories</p>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
            Products We Source from China
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-base leading-relaxed">
            We work across a wide range of product categories, connecting buyers with the right manufacturers for their specific needs.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((cat) => (
            <div key={cat.id} className="group rounded-xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-md transition-shadow bg-white">
              <div className="relative h-44 overflow-hidden bg-slate-100">
                <img
                  alt={cat.title}
                  data-strk-img-id={cat.imgId}
                  data-strk-img={`[prod-${cat.id}-desc] [prod-${cat.id}-title]`}
                  data-strk-img-ratio="3x2"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-5">
                <h3 id={`prod-${cat.id}-title`} className="font-semibold text-slate-800 mb-1.5">{cat.title}</h3>
                <p id={`prod-${cat.id}-desc`} className="text-slate-600 text-sm leading-relaxed">{cat.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            to="/products"
            className="inline-flex items-center gap-2 bg-brand-blue hover:bg-blue-900 text-white font-semibold px-6 py-3 rounded-lg text-sm transition-colors"
          >
            View All Product Categories <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
