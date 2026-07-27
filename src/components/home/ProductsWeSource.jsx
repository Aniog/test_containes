import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const categories = [
  {
    id: 'electronics',
    title: 'Electronics & Components',
    description: 'Consumer electronics, PCBs, sensors, connectors, and electronic assemblies.',
    imgId: 'products-electronics-d4e5f6',
    titleId: 'products-electronics-title',
    descId: 'products-electronics-desc',
  },
  {
    id: 'textiles',
    title: 'Textiles & Apparel',
    description: 'Fabrics, garments, home textiles, sportswear, and fashion accessories.',
    imgId: 'products-textiles-g7h8i9',
    titleId: 'products-textiles-title',
    descId: 'products-textiles-desc',
  },
  {
    id: 'hardware',
    title: 'Hardware & Tools',
    description: 'Fasteners, hand tools, power tools, plumbing fixtures, and construction materials.',
    imgId: 'products-hardware-j1k2l3',
    titleId: 'products-hardware-title',
    descId: 'products-hardware-desc',
  },
  {
    id: 'packaging',
    title: 'Packaging & Printing',
    description: 'Custom packaging, labels, boxes, flexible packaging, and printing solutions.',
    imgId: 'products-packaging-m4n5o6',
    titleId: 'products-packaging-title',
    descId: 'products-packaging-desc',
  },
  {
    id: 'furniture',
    title: 'Furniture & Home Goods',
    description: 'Office furniture, home furnishings, kitchenware, and decorative items.',
    imgId: 'products-furniture-p7q8r9',
    titleId: 'products-furniture-title',
    descId: 'products-furniture-desc',
  },
  {
    id: 'automotive',
    title: 'Automotive Parts',
    description: 'Auto components, motorcycle parts, EV accessories, and vehicle maintenance tools.',
    imgId: 'products-automotive-s1t2u3',
    titleId: 'products-automotive-title',
    descId: 'products-automotive-desc',
  },
];

const ProductsWeSource = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 id="products-section-title" className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">
            Products We Source
          </h2>
          <p id="products-section-subtitle" className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
            We work across a wide range of product categories. Whether you need consumer goods or industrial components, we can find the right supplier.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {categories.map((cat) => (
            <div key={cat.id} className="bg-white rounded-lg border border-slate-200 overflow-hidden hover:shadow-md transition-shadow group">
              <div className="aspect-[4/3] overflow-hidden bg-slate-100">
                <img
                  alt={cat.title}
                  data-strk-img-id={cat.imgId}
                  data-strk-img={`[${cat.descId}] [${cat.titleId}] [products-section-subtitle] [products-section-title]`}
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 id={cat.titleId} className="text-lg font-semibold text-slate-900 mb-2">{cat.title}</h3>
                <p id={cat.descId} className="text-slate-600 text-sm leading-relaxed">{cat.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            to="/products"
            className="inline-flex items-center gap-2 text-navy-700 font-semibold hover:text-navy-800 transition-colors"
          >
            View All Product Categories
            <ArrowRight className="w-5 h-5 text-amber-500" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProductsWeSource;
