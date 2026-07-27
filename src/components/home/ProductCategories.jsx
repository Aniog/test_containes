import React, { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';

const categories = [
  { id: 'cat-1', title: "Electronics & Gadgets", desc: "Consumer electronics, accessories, and PC components." },
  { id: 'cat-2', title: "Home & Kitchen", desc: "Smart home devices, kitchenware, and furniture items." },
  { id: 'cat-3', title: "Industrial & Machinery", desc: "Spare parts, heavy machinery, and specialized tools." },
  { id: 'cat-4', title: "Apparel & Textiles", desc: "Fashion garments, activewear, and raw fabrics." },
  { id: 'cat-5', title: "Pet Supplies", desc: "Unique pet toys, bedding, and grooming essentials." },
  { id: 'cat-6', title: "Health & Beauty", desc: "Skincare tools, beauty equipment, and wellness items." }
];

const ProductCategories = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="py-20 bg-slate-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Products We Source
          </h2>
          <p className="text-slate-600 text-lg">
            We have extensive experience across multiple industries, helping you find specialized manufacturers for any niche.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {categories.map((cat) => (
            <div key={cat.id} className="group relative rounded-xl overflow-hidden shadow-sm h-64 md:h-72">
              <div 
                className="absolute inset-0 z-0 transition-transform duration-500 group-hover:scale-110"
                data-strk-bg-id={`cat-bg-${cat.id}`}
                data-strk-bg={`[cat-title-${cat.id}] products manufacturing china`}
                data-strk-bg-ratio="4x3"
                data-strk-bg-width="600"
              >
                <div className="absolute inset-0 bg-slate-900/40 group-hover:bg-slate-900/50 transition-colors" />
              </div>
              
              <div className="absolute inset-0 z-10 flex flex-col justify-end p-6">
                <h3 id={`cat-title-${cat.id}`} className="text-xl font-bold text-white mb-2 leading-tight">
                  {cat.title}
                </h3>
                <p className="text-slate-200 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 line-clamp-2">
                  {cat.desc}
                </p>
              </div>
              <Link to="/products" className="absolute inset-0 z-20" aria-label={`View ${cat.title}`} />
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link to="/products">
            <Button variant="outline" size="lg">View All Categories</Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProductCategories;
