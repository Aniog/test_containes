import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const categories = [
  { id: 'electronics', title: 'Electronics & Components', desc: 'Consumer electronics, PCBs, cables, LED lighting, smart devices', imgId: 'prod-electronics-d4e5f6' },
  { id: 'furniture', title: 'Furniture & Home Décor', desc: 'Office furniture, sofas, tables, decorative items, storage solutions', imgId: 'prod-furniture-g7h8i9' },
  { id: 'apparel', title: 'Apparel & Textiles', desc: 'Clothing, sportswear, uniforms, fabrics, accessories', imgId: 'prod-apparel-j1k2l3' },
  { id: 'machinery', title: 'Machinery & Tools', desc: 'Industrial equipment, power tools, hand tools, spare parts', imgId: 'prod-machinery-m4n5o6' },
  { id: 'packaging', title: 'Packaging & Printing', desc: 'Custom boxes, bags, labels, promotional materials', imgId: 'prod-packaging-p7q8r9' },
  { id: 'health', title: 'Health & Beauty', desc: 'Personal care products, supplements, medical devices, cosmetics', imgId: 'prod-health-s1t2u3' },
];

export default function ProductsSection() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-blue-700 text-xs font-semibold uppercase tracking-widest">Product Categories</span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-2 mb-4">
            Products We Source from China
          </h2>
          <p className="text-slate-500 text-lg">
            We work across a wide range of industries and product types. If it's made in China, we can source it.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((cat) => (
            <div key={cat.id} className="group relative overflow-hidden rounded-xl border border-slate-100 hover:shadow-md transition-all">
              <div className="aspect-video overflow-hidden bg-slate-100">
                <img
                  alt={cat.title}
                  data-strk-img-id={cat.imgId}
                  data-strk-img={`[prod-${cat.id}-desc] [prod-${cat.id}-title]`}
                  data-strk-img-ratio="16x9"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-5">
                <h3 id={`prod-${cat.id}-title`} className="font-semibold text-slate-900 mb-1">{cat.title}</h3>
                <p id={`prod-${cat.id}-desc`} className="text-slate-500 text-sm">{cat.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            to="/products"
            className="inline-flex items-center gap-2 text-blue-700 font-semibold hover:text-blue-800 transition-colors"
          >
            View all product categories <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
