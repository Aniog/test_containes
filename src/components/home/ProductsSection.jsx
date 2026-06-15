import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import SectionHeader from '../shared/SectionHeader';

const categories = [
  { id: 'electronics', title: 'Electronics & Components', desc: 'Consumer electronics, PCBs, cables, LED lighting, smart devices' },
  { id: 'furniture', title: 'Furniture & Home Goods', desc: 'Office furniture, home décor, storage solutions, kitchenware' },
  { id: 'apparel', title: 'Apparel & Textiles', desc: 'Clothing, sportswear, uniforms, fabrics, accessories' },
  { id: 'machinery', title: 'Industrial Machinery', desc: 'Manufacturing equipment, tools, spare parts, automation systems' },
  { id: 'packaging', title: 'Packaging & Printing', desc: 'Custom boxes, labels, bags, promotional materials' },
  { id: 'toys', title: 'Toys & Baby Products', desc: 'Plastic toys, educational products, baby gear, outdoor play' },
];

export default function ProductsSection() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Products We Source"
          title="Wide Range of Product Categories"
          subtitle="We have experience sourcing across dozens of product categories from China's major manufacturing regions."
        />
        <div ref={containerRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((cat) => (
            <Link
              key={cat.id}
              to="/products"
              className="group relative overflow-hidden rounded-xl bg-gray-100 aspect-[4/3] block"
            >
              <img
                data-strk-img-id={`product-cat-${cat.id}-img`}
                data-strk-img={`[product-cat-${cat.id}-desc] [product-cat-${cat.id}-title]`}
                data-strk-img-ratio="4x3"
                data-strk-img-width="500"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={cat.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/80 via-primary-dark/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <h3 id={`product-cat-${cat.id}-title`} className="text-white font-semibold text-base mb-1">{cat.title}</h3>
                <p id={`product-cat-${cat.id}-desc`} className="text-blue-200 text-xs leading-relaxed">{cat.desc}</p>
              </div>
            </Link>
          ))}
        </div>
        <div className="text-center mt-10">
          <Link to="/products" className="inline-flex items-center gap-2 text-primary font-semibold hover:text-primary-dark transition-colors">
            View all product categories →
          </Link>
        </div>
      </div>
    </section>
  );
}
