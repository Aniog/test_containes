import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Settings, Ruler, Zap, Shield } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const products = [
  {
    id: 'double-folding-machine',
    title: 'Double Folding Machine',
    description: 'High-precision double folding for complex sheet metal operations with automated controls.',
    icon: Settings,
  },
  {
    id: 'sheet-metal-folder',
    title: 'Sheet Metal Folder',
    description: 'Versatile folding solutions for various sheet metal thicknesses and material types.',
    icon: Ruler,
  },
  {
    id: 'metal-folding-machine',
    title: 'Metal Folding Machine',
    description: 'Heavy-duty folding machines designed for industrial-grade metal fabrication.',
    icon: Zap,
  },
];

const ProductShowcase = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="py-16 md:py-24 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
          <h2 id="products-title" className="text-3xl md:text-4xl font-bold text-primary tracking-tight">
            Our Product Range
          </h2>
          <p id="products-subtitle" className="mt-4 text-lg text-muted">
            Engineered for precision, built for performance. Explore our comprehensive range of folding machines.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-xl shadow-sm border border-border overflow-hidden hover:shadow-md transition-shadow"
            >
              {/* Product Image */}
              <div className="aspect-video bg-slate-100 relative">
                <img
                  alt={product.title}
                  data-strk-img-id={`product-${product.id}-img`}
                  data-strk-img={`[${product.descId}] [${product.titleId}] [products-subtitle] [products-title]`}
                  data-strk-img-ratio="16x9"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="p-6">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                  <product.icon className="w-6 h-6 text-accent" />
                </div>
                <h3 id={product.titleId} className="text-xl font-semibold text-primary">
                  {product.title}
                </h3>
                <p id={product.descId} className="mt-2 text-muted leading-relaxed">
                  {product.description}
                </p>
                <Link
                  to={`/products/${product.id}`}
                  className="mt-4 inline-flex items-center gap-2 text-accent font-medium hover:text-accent-hover transition-colors"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            to="/products"
            className="inline-flex items-center gap-2 bg-primary hover:bg-slate-800 text-white font-medium px-8 py-3 rounded-lg transition-colors"
          >
            View All Products
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;
