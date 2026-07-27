import React, { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { Smartphone, Laptop, Shirt, Sofa, Construction, HeartPulse, MoreHorizontal } from 'lucide-react';

const ProductsWeSource = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  const categories = [
    { title: "Consumer Electronics", icon: <Smartphone />, items: ["Smartphones & Accessories", "Smart Home Devices", "Audio Equipment"] },
    { title: "Home & Furniture", icon: <Sofa />, items: ["Living Room Furniture", "Kitchenware", "Home Decor"] },
    { title: "Apparel & Textiles", icon: <Shirt />, items: ["Ready-made Garments", "Fashion Accessories", "Industrial Fabrics"] },
    { title: "Industrial Equipment", icon: <Construction />, items: ["Machinery Parts", "Hardware Tools", "Electrical Components"] },
    { title: "Beauty & Health", icon: <HeartPulse />, items: ["Skincare Packaging", "Medical Consumables", "Fitness Equipment"] },
    { title: "Custom OEM/ODM", icon: <Settings />, items: ["Prototype Development", "Private Labeling", "Mold Making"] }
  ];

  return (
    <div ref={containerRef} className="pt-24 pb-16">
      <section className="bg-navy-900 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 id="products-hero-title" className="text-4xl md:text-5xl font-bold mb-6">Products We Source</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">We have experience sourcing across a wide range of industries.</p>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((cat, i) => (
              <div key={i} className="bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow group">
                <div className="h-48 overflow-hidden relative">
                    <img 
                        data-strk-img-id={`cat-img-${i}`}
                        data-strk-img={`[cat-title-${i}] product showcase`}
                        data-strk-img-ratio="16x9"
                        data-strk-img-width="600"
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 9'/%3E"
                        alt={cat.title}
                    />
                    <div className="absolute inset-0 bg-navy-900/10 transition-colors group-hover:bg-navy-900/0"></div>
                </div>
                <div className="p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-3 bg-blue-50 text-blue-600 rounded-lg">{cat.icon}</div>
                    <h3 id={`cat-title-${i}`} className="text-xl font-bold text-navy-900">{cat.title}</h3>
                  </div>
                  <ul className="space-y-3">
                    {cat.items.map((item, j) => (
                      <li key={j} className="text-gray-600 flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-navy-50">
        <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-navy-900 mb-6">Don't see your product category?</h2>
            <p className="text-lg text-gray-600 mb-10 max-w-2xl mx-auto">Our sourcing expertise extends beyond these categories. We specialize in finding custom manufacturing solutions for unique product requirements.</p>
            <Link to="/contact" className="bg-navy-900 text-white px-8 py-4 rounded-lg font-bold hover:bg-navy-800 transition-all inline-flex items-center gap-2">
                Inquire about your product <ArrowRight size={20} />
            </Link>
        </div>
      </section>
    </div>
  );
};

// Add missing icon
const Settings = ({ className }) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
            <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.1a2 2 0 0 1-1-1.72v-.51a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"/>
            <circle cx="12" cy="12" r="3"/>
        </svg>
    )
}

import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default ProductsWeSource;
