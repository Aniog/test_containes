import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const categories = [
  { id: 'electronics', title: 'Electronics & Components', desc: 'Consumer electronics, PCBs, cables, LED lighting, and industrial components.' },
  { id: 'furniture', title: 'Furniture & Home Goods', desc: 'Office furniture, home décor, storage solutions, and custom woodwork.' },
  { id: 'apparel', title: 'Apparel & Textiles', desc: 'Clothing, sportswear, workwear, fabrics, and accessories.' },
  { id: 'machinery', title: 'Machinery & Equipment', desc: 'Industrial machinery, tools, agricultural equipment, and spare parts.' },
  { id: 'packaging', title: 'Packaging & Printing', desc: 'Custom packaging, labels, boxes, bags, and promotional materials.' },
  { id: 'health', title: 'Health & Beauty', desc: 'Personal care products, medical devices, supplements, and cosmetics.' },
];

const ProductsOverview = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-xs font-semibold text-brand-orange uppercase tracking-widest">Product Categories</span>
          <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mt-2 mb-4">
            Products We Source from China
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-base leading-relaxed">
            We work across a wide range of product categories, connecting buyers with the right manufacturers for their specific needs.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((cat) => (
            <div key={cat.id} className="group rounded-xl overflow-hidden border border-gray-100 hover:shadow-md transition-shadow bg-white">
              <div className="relative overflow-hidden h-44">
                <img
                  alt={cat.title}
                  data-strk-img-id={`product-cat-${cat.id}-img-7f3a1b`}
                  data-strk-img={`[product-cat-${cat.id}-desc] [product-cat-${cat.id}-title]`}
                  data-strk-img-ratio="3x2"
                  data-strk-img-width="500"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-5">
                <h3 id={`product-cat-${cat.id}-title`} className="font-semibold text-brand-dark mb-1.5">{cat.title}</h3>
                <p id={`product-cat-${cat.id}-desc`} className="text-sm text-gray-600 leading-relaxed">{cat.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            to="/products"
            className="inline-flex items-center gap-2 bg-brand-blue hover:bg-blue-900 text-white font-semibold px-6 py-3 rounded-lg transition-colors text-sm"
          >
            View All Product Categories <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProductsOverview;
