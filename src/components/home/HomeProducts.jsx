import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import SectionHeader from '../shared/SectionHeader';

const categories = [
  { id: 'electronics', title: 'Electronics & Components', desc: 'Consumer electronics, PCBs, cables, LED lighting' },
  { id: 'furniture', title: 'Furniture & Home Goods', desc: 'Office furniture, home décor, storage solutions' },
  { id: 'apparel', title: 'Apparel & Textiles', desc: 'Clothing, sportswear, fabrics, accessories' },
  { id: 'machinery', title: 'Industrial Machinery', desc: 'Manufacturing equipment, tools, spare parts' },
  { id: 'packaging', title: 'Packaging & Printing', desc: 'Custom boxes, labels, bags, promotional materials' },
  { id: 'toys', title: 'Toys & Baby Products', desc: 'Plastic toys, educational products, baby gear' },
  { id: 'beauty', title: 'Beauty & Personal Care', desc: 'Cosmetics, skincare, hair care, wellness products' },
  { id: 'auto', title: 'Auto Parts & Accessories', desc: 'Car parts, accessories, tools, EV components' },
];

export default function HomeProducts() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section className="py-20 bg-white" ref={containerRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Products We Source"
          title="Wide Range of Product Categories"
          subtitle="We have experience sourcing across dozens of product categories from verified Chinese manufacturers."
        />
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {categories.map((cat) => (
            <div key={cat.id} className="group rounded-xl overflow-hidden border border-gray-100 hover:shadow-md transition-all">
              <div className="relative h-36 bg-gray-100 overflow-hidden">
                <img
                  data-strk-img-id={`product-cat-${cat.id}-img-d4e5f6`}
                  data-strk-img={`[product-cat-${cat.id}-desc] [product-cat-${cat.id}-title]`}
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="400"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={cat.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-3">
                <h3 id={`product-cat-${cat.id}-title`} className="text-brand-navy font-semibold text-sm mb-1">{cat.title}</h3>
                <p id={`product-cat-${cat.id}-desc`} className="text-brand-slate text-xs leading-relaxed">{cat.desc}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-10">
          <Link
            to="/products"
            className="inline-flex items-center gap-2 border-2 border-brand-navy text-brand-navy hover:bg-brand-navy hover:text-white font-semibold px-8 py-3 rounded-lg transition-colors"
          >
            View All Product Categories
          </Link>
        </div>
      </div>
    </section>
  );
}
