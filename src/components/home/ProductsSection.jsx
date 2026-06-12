import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import SectionHeader from '../shared/SectionHeader';

const categories = [
  { id: 'electronics', title: 'Electronics & Components', desc: 'Consumer electronics, PCBs, cables, LED lighting, batteries' },
  { id: 'furniture', title: 'Furniture & Home Goods', desc: 'Office furniture, home décor, storage solutions, kitchenware' },
  { id: 'apparel', title: 'Apparel & Textiles', desc: 'Clothing, sportswear, uniforms, fabrics, accessories' },
  { id: 'machinery', title: 'Industrial Machinery', desc: 'Manufacturing equipment, tools, spare parts, automation' },
  { id: 'packaging', title: 'Packaging & Printing', desc: 'Custom boxes, labels, bags, promotional materials' },
  { id: 'toys', title: 'Toys & Baby Products', desc: 'Plastic toys, educational products, baby gear, safety-certified items' },
];

export default function ProductsSection() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          overline="Products We Source"
          title="We Source Across All Major Categories"
          subtitle="Our team has hands-on experience sourcing a wide range of products from China's key manufacturing regions."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((cat) => (
            <div
              key={cat.id}
              className="group rounded-xl overflow-hidden border border-neutral-200 hover:shadow-md transition-shadow bg-white"
            >
              <div className="relative h-44 overflow-hidden bg-neutral-100">
                <img
                  data-strk-img-id={`product-cat-${cat.id}-img-3c7f`}
                  data-strk-img={`[product-cat-${cat.id}-desc] [product-cat-${cat.id}-title]`}
                  data-strk-img-ratio="3x2"
                  data-strk-img-width="500"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={cat.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-5">
                <h3 id={`product-cat-${cat.id}-title`} className="text-neutral-900 font-bold text-base mb-1">
                  {cat.title}
                </h3>
                <p id={`product-cat-${cat.id}-desc`} className="text-neutral-600 text-sm">
                  {cat.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            to="/products"
            className="inline-flex items-center gap-2 text-brand-blue font-semibold text-sm hover:text-brand-sky transition-colors"
          >
            Browse all product categories
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
