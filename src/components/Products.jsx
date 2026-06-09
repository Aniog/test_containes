import React, { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { ArrowUpRight } from 'lucide-react';

const products = [
  {
    id: 'double-folder',
    title: 'Double Folder Pro',
    desc: 'Advanced double folding machine designed for speed and precision. Ideal for high-volume metal folding.',
    imgId: 'prod-double-folder-1',
    titleId: 'prod-title-double-folder',
    descId: 'prod-desc-double-folder'
  },
  {
    id: 'sheet-metal',
    title: 'Sheet Metal Master',
    desc: 'Our flagship sheet metal folding machine. Combines an elegant interface with robust industrial power.',
    imgId: 'prod-sheet-metal-1',
    titleId: 'prod-title-sheet-metal',
    descId: 'prod-desc-sheet-metal'
  },
  {
    id: 'compact-folder',
    title: 'Compact Metal Folder',
    desc: 'A space-saving metal folder machine. User-friendly controls meets uncompromising Artitect quality.',
    imgId: 'prod-compact-folder-1',
    titleId: 'prod-title-compact-folder',
    descId: 'prod-desc-compact-folder'
  }
];

const Products = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    try {
      return ImageHelper.loadImages(strkImgConfig, containerRef.current);
    } catch (e) {
      console.warn(e);
    }
  }, []);

  return (
    <section id="products" className="py-24 bg-white" ref={containerRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 id="products-section-title" className="text-3xl font-bold text-slate-900 sm:text-4xl">Our Machinery</h2>
          <p id="products-section-desc" className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
            Discover our range of double folding machines and sheet metal folders, built to elevate your production line.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product) => (
            <article key={product.id} className="group flex flex-col bg-slate-50 rounded-2xl overflow-hidden border border-slate-100 hover:shadow-xl transition-all duration-300">
              <div className="aspect-[4/3] overflow-hidden bg-slate-200">
                <img
                  data-strk-img-id={product.imgId}
                  data-strk-img={`[${product.descId}] [${product.titleId}] [products-section-title]`}
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={product.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <h3 id={product.titleId} className="text-xl font-bold text-slate-900 mb-3">{product.title}</h3>
                <p id={product.descId} className="text-slate-600 mb-6 flex-grow">{product.desc}</p>
                <div className="mt-auto">
                  <a href="#contact" className="inline-flex items-center font-medium text-blue-600 hover:text-blue-700 transition-colors">
                    Learn more <ArrowUpRight className="ml-1 w-4 h-4" />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
