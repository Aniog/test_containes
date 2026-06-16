import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const products = [
  {
    id: 'double-folding-machine',
    title: 'Double Folding Machine',
    desc: 'High-performance dual-axis folding for complex sheet metal profiles with CNC precision control.',
    imgId: 'prod-dfm-b2c4e6',
    titleId: 'prod-dfm-title',
    descId: 'prod-dfm-desc',
  },
  {
    id: 'sheet-metal-folder',
    title: 'Sheet Metal Folder',
    desc: 'Versatile manual and semi-automatic folders for light to medium gauge sheet metal applications.',
    imgId: 'prod-smf-d3e5f7',
    titleId: 'prod-smf-title',
    descId: 'prod-smf-desc',
  },
  {
    id: 'metal-folding-machine',
    title: 'Metal Folding Machine',
    desc: 'Full CNC-controlled folding centers with automated backgauges for high-volume production runs.',
    imgId: 'prod-mfm-a1b3c5',
    titleId: 'prod-mfm-title',
    descId: 'prod-mfm-desc',
  },
];

const ProductHighlights = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="py-20 md:py-28 bg-warm-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16">
          <div className="max-w-2xl">
            <p className="text-gold font-medium text-sm tracking-[0.2em] uppercase mb-4">
              Our Products
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-navy mb-4">
              Metal Folding Solutions
            </h2>
            <p className="text-warm-text leading-relaxed">
              From compact sheet metal folders to advanced CNC folding centers, 
              we offer the right machine for every application.
            </p>
          </div>
          <Link
            to="/products"
            className="mt-6 md:mt-0 inline-flex items-center gap-2 text-gold font-semibold hover:text-gold-dark transition-colors"
          >
            View All Products <ArrowRight className="w-5 h-5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product) => (
            <Link
              key={product.id}
              to="/products"
              className="group bg-white rounded-lg border border-warm-border overflow-hidden hover:shadow-lg transition-all duration-300"
            >
              <div className="aspect-[4/3] overflow-hidden bg-navy-50">
                <img
                  alt={product.title}
                  data-strk-img-id={product.imgId}
                  data-strk-img={`[${product.descId}] [${product.titleId}]`}
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3
                  id={product.titleId}
                  className="text-lg font-semibold text-navy mb-2 group-hover:text-gold transition-colors"
                >
                  {product.title}
                </h3>
                <p id={product.descId} className="text-warm-text text-sm leading-relaxed">
                  {product.desc}
                </p>
                <span className="inline-flex items-center gap-1 text-gold text-sm font-medium mt-4">
                  Learn More <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductHighlights;
