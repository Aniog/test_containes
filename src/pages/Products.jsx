import React, { useEffect, useRef } from 'react';
import { Package, Smartphone, Home, Shirt, Zap, Wrench, Award } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const Products = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  const categories = [
    {
      name: 'Electronics & Consumer Tech',
      icon: Smartphone,
      items: ['Smart Home Devices', 'Consumer Electronics', 'Mobile Accessories', 'PC Components'],
      img: 'consumer electronics gadgets'
    },
    {
      name: 'Home & Furniture',
      icon: Home,
      items: ['Modern Furniture', 'Kitchenware', 'Home Decor', 'Outdoor Living'],
      img: 'modern home furniture interior'
    },
    {
      name: 'Industrial & Tools',
      icon: Wrench,
      items: ['Machine Parts', 'Hardware Tools', 'Construction Materials', 'Industrial Equipment'],
      img: 'industrial machinery parts'
    },
    {
      name: 'Apparel & Fashion',
      icon: Shirt,
      items: ['Fashion Garments', 'Sportswear', 'Footwear', 'Bags & Accessories'],
      img: 'fashion apparel clothing line'
    },
    {
      name: 'Electrical & Lighting',
      icon: Zap,
      items: ['LED Lighting', 'Electrical Components', 'Solar Products', 'Power Supplies'],
      img: 'led lighting fixtures'
    },
    {
      name: 'Gifts & Toys',
      icon: Award,
      items: ['Educational Toys', 'Promotional Gifts', 'Stationery', 'Party Supplies'],
      img: 'children educational toys'
    }
  ];

  return (
    <div className="bg-white py-20 lg:py-32" ref={containerRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6">Products We Source</h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            While we can source almost any product, our expertise is strongest in several key categories where we have extensive supplier networks.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((cat, index) => (
            <div key={index} className="group bg-white rounded-2xl border border-slate-200 overflow-hidden hover:shadow-xl transition-all duration-300">
              <div className="h-48 overflow-hidden">
                <img
                  data-strk-img-id={`product-cat-img-${index}`}
                  data-strk-img={cat.img}
                  data-strk-img-ratio="16x9"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={cat.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 bg-blue-50 rounded-lg">
                    <cat.icon className="w-5 h-5 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900">{cat.name}</h3>
                </div>
                <ul className="space-y-3">
                  {cat.items.map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-slate-600 text-sm">
                      <div className="w-1.5 h-1.5 bg-blue-400 rounded-full" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Custom Sourcing CTA */}
        <div className="mt-20 bg-slate-900 rounded-3xl p-12 text-center text-white relative overflow-hidden">
          <div className="relative z-10">
            <h2 className="text-3xl font-bold mb-6">Need a custom sourcing project?</h2>
            <p className="text-slate-300 max-w-2xl mx-auto mb-10">
              Our network covers over 20+ industries across major manufacturing hubs in China including Shenzhen, Ningbo, Guangzhou, and Yiwu.
            </p>
            <button className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg transition-colors shadow-lg">
              Check Product Feasibility
            </button>
          </div>
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600 rounded-full blur-3xl opacity-20 -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-900 rounded-full blur-3xl opacity-20 translate-y-1/2 -translate-x-1/2" />
        </div>
      </div>
    </div>
  );
};

export default Products;
