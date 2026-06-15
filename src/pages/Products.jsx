import React, { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { Link } from 'react-router-dom';
import { ArrowRight, Check } from 'lucide-react';

const Products = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  const productList = [
    {
      id: 'double-folding-machine',
      name: 'Double Folding Machine',
      shortName: 'Double Folder',
      description: 'Our flagship double folding machine offers rapid bidirectional folding for complex profiles without flipping the sheet.',
      specs: ['Max length: 4m', 'Thickness: Up to 3mm', 'Speed: 100°/sec'],
      price: 'Starting from $45,000'
    },
    {
      id: 'sheet-metal-folding-machine',
      name: 'Sheet Metal Folding Machine',
      shortName: 'Sheet Metal Folder',
      description: 'Versatile and robust folding machine designed for high-volume sheet metal production with precision control.',
      specs: ['Automated CNC control', 'Touch-screen interface', 'Energy efficient'],
      price: 'Starting from $38,000'
    },
    {
      id: 'metal-folder-machine',
      name: 'Metal Folder Machine',
      shortName: 'Metal Folder',
      description: 'A heavy-duty metal folder machine built for durability and long-term industrial use.',
      specs: ['Reinforced base', 'Quick-change tooling', 'Safety light curtains'],
      price: 'Starting from $32,000'
    },
  ];

  return (
    <div ref={containerRef} className="bg-white">
      {/* Page Header */}
      <section className="bg-gray-50 py-20 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 id="products-title" className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight">Our Precision Machinery</h1>
          <p className="mt-4 text-xl text-gray-600 max-w-2xl">
            Engineering excellence designed for the modern metalwork shop. Explore our range of high-performance folding solutions.
          </p>
        </div>
      </section>

      {/* Product List Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
          {productList.map((product, idx) => (
            <div key={product.id} className={`flex flex-col lg:items-center gap-12 ${idx % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'}`}>
              {/* Product Image */}
              <div className="flex-1">
                <div className="rounded-3xl overflow-hidden shadow-2xl bg-gray-100">
                  <img
                    data-strk-img-id={`prod-detail-${product.id}`}
                    data-strk-img={`[prod-name-${product.id}] metal folding machine industrial`}
                    data-strk-img-ratio="3x2"
                    data-strk-img-width="800"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Product Info */}
              <div className="flex-1">
                <div className="inline-block px-3 py-1 bg-blue-50 text-blue-700 text-xs font-bold rounded-full uppercase tracking-wider mb-4">
                  {product.shortName}
                </div>
                <h2 id={`prod-name-${product.id}`} className="text-3xl md:text-4xl font-bold text-gray-900">{product.name}</h2>
                <p className="mt-6 text-lg text-gray-600 leading-relaxed">
                  {product.description}
                </p>
                <div className="mt-8 space-y-4">
                  {product.specs.map((spec, sIdx) => (
                    <div key={sIdx} className="flex items-center gap-3">
                      <Check className="h-5 w-5 text-green-500" />
                      <span className="text-gray-700 font-medium">{spec}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-10 p-6 bg-gray-50 rounded-2xl flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
                  <div>
                    <span className="block text-sm text-gray-500 font-medium uppercase tracking-tight">Est. Investment</span>
                    <span className="text-2xl font-bold text-gray-900">{product.price}</span>
                  </div>
                  <Link
                    to="/contact"
                    className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-bold rounded-xl text-white bg-black hover:bg-gray-800 transition-all"
                  >
                    Request Quote
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Support Section */}
      <section className="py-24 bg-gray-50 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900">Need a Custom Configuration?</h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Our engineers can tailor our machines to meet your specific production needs. From special tooling to custom software integration, we've got you covered.
          </p>
          <div className="mt-10">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-black text-lg font-bold rounded-md text-black hover:bg-black hover:text-white transition-all"
            >
              Talk to an Engineer
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;
