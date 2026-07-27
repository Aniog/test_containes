import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const categories = [
  { id: 'electronics', title: 'Electronics & Components', desc: 'PCBs, LED lighting, consumer electronics, cables, batteries', imgId: 'prod-electronics-7a1b2c', titleId: 'prod-electronics-title', descId: 'prod-electronics-desc' },
  { id: 'furniture', title: 'Furniture & Home Decor', desc: 'Wooden furniture, metal shelving, decorative items, rugs', imgId: 'prod-furniture-8b2c3d', titleId: 'prod-furniture-title', descId: 'prod-furniture-desc' },
  { id: 'clothing', title: 'Clothing & Textiles', desc: 'Apparel, sportswear, uniforms, fabrics, accessories', imgId: 'prod-clothing-9c3d4e', titleId: 'prod-clothing-title', descId: 'prod-clothing-desc' },
  { id: 'machinery', title: 'Machinery & Industrial', desc: 'CNC parts, tools, industrial equipment, hardware', imgId: 'prod-machinery-1d4e5f', titleId: 'prod-machinery-title', descId: 'prod-machinery-desc' },
  { id: 'toys', title: 'Toys & Baby Products', desc: 'Plastic toys, educational toys, baby gear, plush items', imgId: 'prod-toys-2e5f6a', titleId: 'prod-toys-title', descId: 'prod-toys-desc' },
  { id: 'health', title: 'Health & Beauty', desc: 'Cosmetics, supplements, medical devices, personal care', imgId: 'prod-health-3f6a7b', titleId: 'prod-health-title', descId: 'prod-health-desc' },
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
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-sm font-semibold text-accent uppercase tracking-widest mb-2">Product Categories</p>
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
            Products We Source from China
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-base leading-relaxed">
            We have established supplier networks across major Chinese manufacturing hubs for a wide range of product categories.
          </p>
        </div>

        <div ref={containerRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((cat) => (
            <div key={cat.id} className="group rounded-xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="relative h-44 overflow-hidden bg-gray-100">
                <img
                  alt={cat.title}
                  data-strk-img-id={cat.imgId}
                  data-strk-img={`[${cat.descId}] [${cat.titleId}]`}
                  data-strk-img-ratio="3x2"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-5 bg-white">
                <h3 id={cat.titleId} className="font-semibold text-navy text-base mb-1">{cat.title}</h3>
                <p id={cat.descId} className="text-gray-500 text-sm">{cat.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            to="/products"
            className="inline-flex items-center gap-2 bg-primary hover:bg-blue-800 text-white font-semibold px-7 py-3.5 rounded-lg transition-colors"
          >
            View All Product Categories
          </Link>
        </div>
      </div>
    </section>
  );
}
