import React, { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { Smartphone, Sofa, Shirt, Settings, Home as HomeIcon, Package } from 'lucide-react';

const Products = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  const categories = [
    { name: "Electronics", icon: <Smartphone />, desc: "Consumer electronics, accessories, components, and PCB assembly.", query: "modern electronics factory assembly line" },
    { name: "Furniture", icon: <Sofa />, desc: "Office furniture, home decor, outdoor sets, and hospitality furnishing.", query: "modern furniture factory production" },
    { name: "Textiles & Apparel", icon: <Shirt />, desc: "Fashion garments, industrial fabrics, home textiles, and activewear.", query: "garment factory sewing machine workers" },
    { name: "Industrial Machinery", icon: <Settings />, desc: "CNC machines, injection molding, hydraulic equipment, and toolings.", query: "heavy industrial machinery factory" },
    { name: "Home & Garden", icon: <HomeIcon />, desc: "Kitchenware, garden tools, pet supplies, and cleaning equipment.", query: "home goods display warehouse" },
    { name: "Packaging Materials", icon: <Package />, desc: "Eco-friendly packaging, custom boxes, shipping materials, and printing.", query: "packaging material factory boxes" },
  ];

  return (
    <div ref={containerRef} className="pt-24 pb-24">
      <section className="bg-slate-50 py-20 border-b border-slate-200 mb-20 text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight">Products We Source</h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">With deep roots in China's manufacturing hubs, we source across a wide range of industries.</p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {categories.map((cat, idx) => (
            <div key={cat.name} className="bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl transition-all group">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  data-strk-img-id={`product-cat-${idx}`}
                  data-strk-img={cat.query}
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={cat.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="text-primary">{cat.icon}</div>
                  <h3 className="text-xl font-bold text-slate-900">{cat.name}</h3>
                </div>
                <p className="text-slate-600 text-sm leading-relaxed">{cat.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-24 p-12 bg-slate-900 rounded-3xl text-white text-center">
           <h2 className="text-3xl font-bold mb-6 italic">Don't see your industry?</h2>
           <p className="text-slate-400 mb-10 max-w-xl mx-auto">We have a vast database of verified suppliers across nearly every category. Contact us with your specific specs for a custom feasibility study.</p>
           <button className="bg-primary text-white px-10 py-4 rounded-xl font-bold hover:bg-primary/90 transition-all">Submit a Custom Request</button>
        </div>
      </div>
    </div>
  );
};

export default Products;
