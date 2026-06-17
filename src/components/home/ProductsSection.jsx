import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const categories = [
  { id: 'electronics', label: 'Electronics & Components', imgId: 'prod-img-electronics-a1b2', titleId: 'prod-title-electronics', descId: 'prod-desc-electronics', desc: 'Consumer electronics, PCBs, cables, LED lighting' },
  { id: 'furniture', label: 'Furniture & Home Goods', imgId: 'prod-img-furniture-c3d4', titleId: 'prod-title-furniture', descId: 'prod-desc-furniture', desc: 'Office furniture, home décor, storage solutions' },
  { id: 'apparel', label: 'Apparel & Textiles', imgId: 'prod-img-apparel-e5f6', titleId: 'prod-title-apparel', descId: 'prod-desc-apparel', desc: 'Clothing, sportswear, fabrics, accessories' },
  { id: 'machinery', label: 'Industrial Machinery', imgId: 'prod-img-machinery-g7h8', titleId: 'prod-title-machinery', descId: 'prod-desc-machinery', desc: 'Manufacturing equipment, tools, spare parts' },
  { id: 'packaging', label: 'Packaging & Printing', imgId: 'prod-img-packaging-i9j0', titleId: 'prod-title-packaging', descId: 'prod-desc-packaging', desc: 'Custom boxes, labels, bags, promotional materials' },
  { id: 'toys', label: 'Toys & Baby Products', imgId: 'prod-img-toys-k1l2', titleId: 'prod-title-toys', descId: 'prod-desc-toys', desc: 'Toys, educational products, baby gear' },
];

export default function ProductsSection() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="section-padding bg-white">
      <div className="section-container">
        <div className="text-center mb-14">
          <span className="text-brand-red text-sm font-semibold uppercase tracking-widest">Product Categories</span>
          <h2 className="section-title mt-2">Products We Source</h2>
          <p className="section-subtitle">
            We have experience sourcing across a wide range of industries and product types from China.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {categories.map((cat) => (
            <div key={cat.id} className="card-base overflow-hidden group cursor-pointer">
              <div className="relative overflow-hidden">
                <img
                  data-strk-img-id={cat.imgId}
                  data-strk-img={`[${cat.descId}] [${cat.titleId}]`}
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="400"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={cat.label}
                  className="w-full h-36 md:h-44 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-brand-blue/20 group-hover:bg-brand-blue/10 transition-colors" />
              </div>
              <div className="p-4">
                <h3 id={cat.titleId} className="font-bold text-brand-blue text-sm md:text-base mb-1">{cat.label}</h3>
                <p id={cat.descId} className="text-gray-500 text-xs leading-relaxed">{cat.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link to="/products" className="btn-secondary">
            See All Product Categories
          </Link>
        </div>
      </div>
    </section>
  );
}
