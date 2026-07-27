import React, { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '../strk-img-config.json';

const Products = () => {
  const containerRef = useRef(null);
  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  const categories = [
    { title: 'Electronics', items: ['Consumer Electronics', 'Kitchen Appliances', 'Smart Home Devices'], imgId: 'prod-cat-1' },
    { title: 'Home & Kitchen', items: ['Cookware', 'Storage Soltuions', 'Furniture'], imgId: 'prod-cat-2' },
    { title: 'Industrial Tools', items: ['Machinery', 'Hardwares', 'Safety Equipment'], imgId: 'prod-cat-3' },
    { title: 'Apparel & Textiles', items: ['Activewear', 'Fabrics', 'Accessories'], imgId: 'prod-cat-4' },
    { title: 'Toys & Baby Products', items: ['Educational Toys', 'Baby Gear', 'Gift Items'], imgId: 'prod-cat-5' },
    { title: 'Outdoor & Sports', items: ['Camping Gear', 'Fitness Equipment', 'Cycling Accessories'], imgId: 'prod-cat-6' }
  ];

  return (
    <div ref={containerRef}>
      <section className="bg-primary text-white py-20 text-center">
        <h1 className="text-4xl font-bold mb-4">Products We Source</h1>
        <p className="text-xl opacity-90">Expertise across diverse industries and product categories.</p>
      </section>

      <section className="py-20 max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((cat, i) => (
            <div key={i} className="group relative rounded-2xl overflow-hidden shadow-lg h-96">
              <div 
                className="absolute inset-0 bg-slate-900/60 group-hover:bg-slate-900/40 transition-colors z-10"
                data-strk-bg-id={cat.imgId}
                data-strk-bg={`${cat.title} manufacturing show china`}
                data-strk-bg-ratio="3x4"
                data-strk-bg-width="600"
              />
              <div className="absolute inset-x-0 bottom-0 p-8 z-20">
                <h3 className="text-2xl font-bold text-white mb-2">{cat.title}</h3>
                <ul className="text-slate-300 text-sm flex flex-wrap gap-2">
                  {cat.items.map((item, idx) => (
                    <li key={idx} className="bg-white/10 px-2 py-1 rounded">{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
export default Products;
