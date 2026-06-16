import React, { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const products = [
  {
    id: 'double-folding-machine',
    title: 'Double Folding Machine',
    description:
      'High-performance double folding machines designed for complex bending operations with superior accuracy and repeatability.',
    imgId: 'prod-dfm-b2c4e6',
    titleId: 'prod-dfm-title',
    descId: 'prod-dfm-desc',
  },
  {
    id: 'double-folder',
    title: 'Double Folder',
    description:
      'Versatile double folders that handle a wide range of sheet metal thicknesses with effortless precision and speed.',
    imgId: 'prod-df-a3d5f7',
    titleId: 'prod-df-title',
    descId: 'prod-df-desc',
  },
  {
    id: 'sheet-metal-folder',
    title: 'Sheet Metal Folder',
    description:
      'Professional-grade sheet metal folders built for workshops demanding clean, consistent folds every time.',
    imgId: 'prod-smf-c4e6g8',
    titleId: 'prod-smf-title',
    descId: 'prod-smf-desc',
  },
  {
    id: 'sheet-metal-folding-machine',
    title: 'Sheet Metal Folding Machine',
    description:
      'Automated sheet metal folding machines with CNC controls for high-volume production environments.',
    imgId: 'prod-smfm-d5f7h9',
    titleId: 'prod-smfm-title',
    descId: 'prod-smfm-desc',
  },
  {
    id: 'metal-folder',
    title: 'Metal Folder',
    description:
      'Robust metal folders engineered for heavy-duty applications, delivering reliable performance day after day.',
    imgId: 'prod-mf-e6g8i0',
    titleId: 'prod-mf-title',
    descId: 'prod-mf-desc',
  },
  {
    id: 'metal-folder-machine',
    title: 'Metal Folder Machine',
    description:
      'Complete metal folder machine systems with advanced features for maximum productivity and minimal setup time.',
    imgId: 'prod-mfm-f7h9j1',
    titleId: 'prod-mfm-title',
    descId: 'prod-mfm-desc',
  },
  {
    id: 'metal-folding-machine',
    title: 'Metal Folding Machine',
    description:
      'State-of-the-art metal folding machines combining innovative technology with rugged construction for lasting value.',
    imgId: 'prod-mfm2-g8i0k2',
    titleId: 'prod-mfm2-title',
    descId: 'prod-mfm2-desc',
  },
];

const Products = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section id="products" ref={containerRef} className="py-20 md:py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-gold font-semibold text-sm tracking-widest uppercase">
            Our Products
          </span>
          <h2
            id="products-title"
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-navy-dark mt-3 mb-4"
          >
            Precision Machinery
          </h2>
          <p
            id="products-subtitle"
            className="text-gray-600 text-lg max-w-2xl mx-auto"
          >
            Discover our complete range of metal folding solutions, each built to
            deliver exceptional results for your workshop.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <article
              key={product.id}
              className="group bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100"
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  alt={product.title}
                  data-strk-img-id={product.imgId}
                  data-strk-img={`[${product.descId}] [${product.titleId}] [products-subtitle] [products-title]`}
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/40 to-transparent" />
              </div>
              <div className="p-6">
                <h3
                  id={product.titleId}
                  className="text-xl font-bold text-navy-dark mb-2 group-hover:text-gold-dark transition-colors duration-300"
                >
                  {product.title}
                </h3>
                <p
                  id={product.descId}
                  className="text-gray-600 text-sm leading-relaxed"
                >
                  {product.description}
                </p>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-1 text-gold-dark font-semibold text-sm mt-4 hover:gap-2 transition-all duration-300"
                >
                  Learn More
                  <span className="text-lg">&rarr;</span>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
