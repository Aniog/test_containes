import React, { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { Link } from 'react-router-dom';
import { Settings, Cpu, HardHat, Sofa, Dumbbell, PackageCheck } from 'lucide-react';

const categories = [
  {
    id: 'electronics',
    title: 'Consumer Electronics',
    icon: Cpu,
    products: ['Smart Home Devices', 'Audio Equipment', 'Wearables', 'Computer Accessories', 'Mobile Accessories'],
    imgQuery: 'consumer electronics manufacturing production line',
    imgId: 'cat-electronics-001'
  },
  {
    id: 'machinery',
    title: 'Hardware & Machinery',
    icon: Settings,
    products: ['Industrial Parts', 'Hand Tools', 'CNC Machined Parts', 'Building Materials', 'Automotive Parts'],
    imgQuery: 'industrial machinery hardware manufacturing plant',
    imgId: 'cat-machinery-002'
  },
  {
    id: 'apparel',
    title: 'Apparel & Textiles',
    icon: HardHat, 
    products: ['Workwear & Uniforms', 'Sportswear', 'Bags & Backpacks', 'Home Textiles', 'Footwear'],
    imgQuery: 'textile garment factory sewing sewing machine',
    imgId: 'cat-apparel-003'
  },
  {
    id: 'home',
    title: 'Home & Furniture',
    icon: Sofa,
    products: ['Indoor Furniture', 'Outdoor & Patio', 'Kitchenware', 'Home Decor', 'Lighting Fixtures'],
    imgQuery: 'furniture manufacturing woodworking factory',
    imgId: 'cat-home-004'
  },
  {
    id: 'sports',
    title: 'Sports & Outdoors',
    icon: Dumbbell,
    products: ['Fitness Equipment', 'Camping Gear', 'Bicycles & E-Bikes', 'Water Sports', 'Hunting Accessories'],
    imgQuery: 'sports equipment manufacturing fitness gear',
    imgId: 'cat-sports-005'
  },
  {
    id: 'packaging',
    title: 'Packaging & Supplies',
    icon: PackageCheck,
    products: ['Custom Retail Packaging', 'Eco-friendly Materials', 'Corrugated Boxes', 'Glass & Plastic Bottles', 'Shipping Supplies'],
    imgQuery: 'custom packaging manufacturing line paper boxes',
    imgId: 'cat-packaging-006'
  }
];

export default function ProductsWeSource() {
  const containerRef = useRef(null);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
        if(containerRef.current) {
            ImageHelper.loadImages(strkImgConfig, containerRef.current);
        }
    });
    return () => window.cancelAnimationFrame(frameId);
  }, []);

  return (
    <div ref={containerRef} className="w-full">
      {/* Header Section */}
      <section className="bg-blue-900 py-20 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 id="products-page-title" className="text-4xl md:text-5xl font-bold text-white mb-6">Products We Source</h1>
          <p className="text-xl text-blue-100 mb-8 leading-relaxed">
            From consumer electronics to heavy machinery, we have verified supply chains across multiple industries in China.
          </p>
        </div>
      </section>

      {/* Grid Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((category) => {
              const Icon = category.icon;
              return (
                <div key={category.id} className="bg-white rounded-xl overflow-hidden shadow-sm border border-slate-200 hover:shadow-md transition-shadow flex flex-col">
                  {/* Image */}
                  <div className="h-48 relative bg-slate-200">
                    <img
                      alt={category.title}
                      className="absolute inset-0 w-full h-full object-cover"
                      data-strk-img-id={category.imgId}
                      data-strk-img={`[cat-title-${category.id}] ${category.imgQuery}`}
                      data-strk-img-ratio="16x9"
                      data-strk-img-width="600"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <h3 id={`cat-title-${category.id}`} className="absolute bottom-4 left-4 text-xl font-bold text-white flex items-center gap-2">
                       <Icon className="h-5 w-5" />
                       {category.title}
                    </h3>
                  </div>
                  
                  {/* Content */}
                  <div className="p-6 flex-grow">
                    <ul className="space-y-2 mb-6">
                      {category.products.map((item, idx) => (
                        <li key={idx} className="flex items-center text-slate-600 before:content-[''] before:w-1.5 before:h-1.5 before:bg-orange-500 before:rounded-full before:mr-2">
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
          
          {/* Note */}
          <div className="mt-16 bg-blue-50 border border-blue-100 rounded-lg p-8 text-center max-w-3xl mx-auto">
            <h3 className="text-xl font-bold text-blue-900 mb-3">Don't see your product category?</h3>
            <p className="text-slate-600 mb-6">
              Our network spans across China's major manufacturing hubs. Even if your specific product isn't listed, there's a high chance we can source it for you.
            </p>
            <Link to="/contact" className="inline-flex items-center text-blue-800 font-bold hover:text-blue-900 underline underline-offset-4">
              Ask us about your product
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}