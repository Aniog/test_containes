import React, { useRef, useEffect } from 'react';
import { ArrowRight, Check } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import products from '@/data/products';

const Products = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    if (containerRef.current) {
      return ImageHelper.loadImages(strkImgConfig, containerRef.current);
    }
  }, []);

  return (
    <section id="products" className="section-padding bg-light-gray" ref={containerRef}>
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16 fade-in">
          <div className="inline-flex items-center px-4 py-2 bg-steel-blue bg-opacity-10 rounded-full text-steel-blue text-sm font-semibold mb-4">
            OUR PRODUCTS
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-deep-navy mb-4">
            Precision Sheet Metal Solutions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our comprehensive range of folding machines, each engineered 
            for precision, durability, and exceptional performance.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div
              key={product.id}
              className="card group cursor-pointer"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Product Image */}
              <div className="mb-6 overflow-hidden rounded-lg bg-gray-100 h-48 flex items-center justify-center">
                <img
                  alt={product.title}
                  data-strk-img-id={product.imageId}
                  data-strk-img={`[${product.descId}] [${product.titleId}]`}
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              {/* Product Title */}
              <h3
                id={product.titleId}
                className="text-xl font-bold text-deep-navy mb-3 group-hover:text-steel-blue transition-colors duration-300"
              >
                {product.title}
              </h3>

              {/* Product Description */}
              <p id={product.descId} className="text-gray-600 mb-4 line-clamp-3">
                {product.description}
              </p>

              {/* Features List */}
              <div className="space-y-2 mb-6">
                {product.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center text-sm text-gray-700">
                    <Check size={16} className="text-copper mr-2 flex-shrink-0" />
                    {feature}
                  </div>
                ))}
              </div>

              {/* CTA */}
              <a
                href="#contact"
                className="inline-flex items-center text-steel-blue font-semibold hover:text-deep-navy transition-colors duration-300 group"
              >
                Get a Quote
                <ArrowRight size={18} className="ml-2 group-hover:translate-x-2 transition-transform duration-300" />
              </a>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16 fade-in">
          <p className="text-lg text-gray-600 mb-6">
            Can't find what you're looking for? We offer custom solutions too.
          </p>
          <a href="#contact" className="btn-primary inline-flex items-center space-x-2">
            <span>Contact Our Experts</span>
            <ArrowRight size={20} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Products;
