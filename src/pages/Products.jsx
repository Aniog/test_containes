import React, { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { Shirt, Cpu, Sofa, Dumbbell, Car, Baby, Plus } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Products() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  const categories = [
    {
      id: 'electronics',
      name: 'Consumer Electronics',
      icon: Cpu,
      items: ['Smart Home Devices', 'Audio Accessories', 'Cables & Chargers', 'Small Wearables']
    },
    {
      id: 'home-garden',
      name: 'Home & Garden',
      icon: Sofa,
      items: ['Kitchenware', 'Storage & Organization', 'Outdoor Furniture', 'Home Decor']
    },
    {
      id: 'apparel',
      name: 'Apparel & Textiles',
      icon: Shirt,
      items: ['Activewear', 'Blankets & Throws', 'Custom Bags/Backpacks', 'Workwear']
    },
    {
      id: 'sports',
      name: 'Sports & Outdoors',
      icon: Dumbbell,
      items: ['Fitness Equipment', 'Camping Gear', 'Water Sports', 'Cycling Accessories']
    },
    {
      id: 'automotive',
      name: 'Automotive Accessories',
      icon: Car,
      items: ['Car Care Products', 'Interior Organizers', 'Tools & Diagnostics', 'Exterior Enhancements']
    },
    {
      id: 'toys-baby',
      name: 'Toys & Baby Products',
      icon: Baby,
      items: ['Educational Toys', 'Nursery Furniture', 'Feeding Accessories', 'Baby Clothing']
    }
  ];

  return (
    <div ref={containerRef}>
      {/* Header */}
      <div className="bg-slate-900 py-20 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6">Products We Source</h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            With access to thousands of verified manufacturers across China's major industrial hubs, we can source almost any consumer good.
          </p>
        </div>
      </div>

      {/* Main Categories Grid */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((category) => {
              const Icon = category.icon;
              return (
                <div key={category.id} className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden hover:shadow-md transition-shadow duration-300">
                  <div className="h-48 relative bg-slate-100">
                    <img
                      data-strk-img-id={`cat-img-${category.id}`}
                      data-strk-img={`[cat-name-${category.id}] products manufacturing`}
                      data-strk-img-ratio="16x9"
                      data-strk-img-width="600"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                      alt={category.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent"></div>
                    <div className="absolute bottom-4 left-4 flex items-center gap-2 text-white">
                      <Icon className="w-6 h-6" />
                      <h3 id={`cat-name-${category.id}`} className="text-xl font-bold">{category.name}</h3>
                    </div>
                  </div>
                  <div className="p-6">
                    <ul className="space-y-3">
                      {category.items.map((item, idx) => (
                        <li key={idx} className="flex items-center text-slate-600">
                          <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mr-2 shrink-0"></div>
                          {item}
                        </li>
                      ))}
                      <li className="flex items-center text-slate-500 pt-2 italic">
                        <Plus className="w-4 h-4 mr-1" />
                        And much more...
                      </li>
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Exclusions */}
      <section className="py-16 bg-white border-t border-slate-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-red-50 rounded-xl p-8 border border-red-100">
            <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
              <span className="text-red-500">Note:</span> What we do NOT source
            </h3>
            <p className="text-slate-700 leading-relaxed">
              To ensure compliance and focus our expertise, we currently do not source: Heavy Industrial Machinery, Chemicals & Raw Liquids, Pharmaceuticals, Food & Perishables, and Counterfeit/Replica goods.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-blue-600 py-20 text-center text-white px-4">
        <h2 className="text-3xl font-bold mb-6">Don't see your product category?</h2>
        <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
          Chances are we can still source it. Send us a picture or a specification sheet, and we'll let you know within 24 hours.
        </p>
        <Link to="/contact" className="inline-block bg-white text-blue-700 font-bold py-4 px-10 rounded-md shadow-lg hover:bg-slate-50 transition-colors duration-200">
          Ask About Your Product
        </Link>
      </section>
    </div>
  );
}
