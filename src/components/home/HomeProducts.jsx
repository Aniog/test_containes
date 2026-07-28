import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import SectionHeader from '../shared/SectionHeader';

const categories = [
  { id: 'electronics', title: 'Electronics & Components', desc: 'Consumer electronics, PCBs, cables, LED lighting, smart devices', imgId: 'prod-electronics-d4e5f6' },
  { id: 'furniture', title: 'Furniture & Home Goods', desc: 'Office furniture, home décor, storage solutions, kitchenware', imgId: 'prod-furniture-g7h8i9' },
  { id: 'apparel', title: 'Apparel & Textiles', desc: 'Clothing, sportswear, uniforms, fabrics, accessories', imgId: 'prod-apparel-j1k2l3' },
  { id: 'machinery', title: 'Machinery & Equipment', desc: 'Industrial machinery, tools, agricultural equipment, spare parts', imgId: 'prod-machinery-m4n5o6' },
  { id: 'packaging', title: 'Packaging & Printing', desc: 'Custom packaging, labels, boxes, bags, promotional materials', imgId: 'prod-packaging-p7q8r9' },
  { id: 'toys', title: 'Toys & Sporting Goods', desc: 'Toys, games, outdoor equipment, fitness gear, bicycles', imgId: 'prod-toys-s1t2u3' },
];

export default function HomeProducts() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Products We Source"
          title="Wide Range of Product Categories"
          subtitle="We source across all major manufacturing sectors in China. If it's made in China, we can help you source it."
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((cat) => (
            <div key={cat.id} className="group rounded-xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
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
                <h3 id={`prod-${cat.id}-title`} className="font-semibold text-slate-900 mb-1">{cat.title}</h3>
                <p id={`prod-${cat.id}-desc`} className="text-slate-500 text-sm">{cat.desc}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-10">
          <Link
            to="/products"
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg transition-colors text-sm"
          >
            View All Product Categories →
          </Link>
        </div>
      </div>
    </section>
  );
}
