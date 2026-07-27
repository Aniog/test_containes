import React, { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '../strk-img-config.json';
import { Link } from 'react-router-dom';
import { Smartphone, Home, Shirt, Briefcase, Wrench, Zap } from 'lucide-react';

const Products = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  const categories = [
    {
      title: 'Electronics & Gadgets',
      items: ['Smartphones', 'Computer Peripherals', 'Home Appliances', 'IoT Devices'],
      icon: Smartphone,
      imgId: 'cat-electronics-img-771'
    },
    {
      title: 'Home & Furniture',
      items: ['Modern Furniture', 'Kitchenware', 'Home Decor', 'Lighting Fixtures'],
      icon: Home,
      imgId: 'cat-home-img-772'
    },
    {
      title: 'Apparel & Textiles',
      items: ['Casual Wear', 'Sportswear', 'Fabrics', 'Accessories'],
      icon: Shirt,
      imgId: 'cat-textile-img-773'
    },
    {
      title: 'Industrial Equipment',
      items: ['Machinery Parts', 'Solar Panels', 'Safety Gear', 'Tools'],
      icon: Zap,
      imgId: 'cat-industrial-img-774'
    },
    {
      title: 'Office Supplies',
      items: ['Stationery', 'Office Furniture', 'Paper Products', 'Promotional Items'],
      icon: Briefcase,
      imgId: 'cat-office-img-775'
    },
    {
      title: 'Building Materials',
      items: ['Tiles', 'Sanitary Ware', 'Hardware', 'Pipes & Fittings'],
      icon: Wrench,
      imgId: 'cat-building-img-776'
    }
  ];

  return (
    <div ref={containerRef}>
      {/* Header */}
      <section className="bg-slate-900 py-16 md:py-24 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 id="products-header-title" className="text-4xl md:text-5xl font-bold">Products We Source</h1>
          <p id="products-header-subtitle" className="mt-6 text-lg text-slate-400 max-w-2xl mx-auto">
            Our network covers thousands of certified manufacturers across all major industrial clusters in China.
          </p>
        </div>
      </section>

      {/* Product Categories */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {categories.map((cat, index) => (
              <div key={index} className="flex flex-col">
                <div className="relative overflow-hidden rounded-xl mb-6 shadow-md transition-transform hover:scale-[1.02] duration-300">
                  <img
                    data-strk-img-id={cat.imgId}
                    data-strk-img={`[cat-desc-${index}] [cat-title-${index}] products from China factory`}
                    data-strk-img-ratio="3x2"
                    data-strk-img-width="600"
                    className="w-full h-auto object-cover"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 3 2'/%3E"
                    alt={cat.title}
                  />
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm p-2 rounded-lg">
                    <cat.icon className="h-6 w-6 text-blue-600" />
                  </div>
                </div>
                <h3 id={`cat-title-${index}`} className="text-2xl font-bold text-slate-900 mb-4">{cat.title}</h3>
                <ul id={`cat-desc-${index}`} className="space-y-2 mb-6">
                  {cat.items.map((item, i) => (
                    <li key={i} className="text-slate-600 flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Request */}
      <section className="py-20 bg-slate-50 border-y border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Don't See Your Product Category?</h2>
          <p className="text-slate-600 text-lg mb-10">
            We handle custom sourcing requests for unique products and specific industrial requirements. Contact us to discuss your project.
          </p>
          <Link to="/contact" className="bg-blue-600 text-white px-8 py-4 rounded-lg font-bold hover:bg-blue-700 transition-colors inline-block">
            Inquire About Custom Sourcing
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Products;
