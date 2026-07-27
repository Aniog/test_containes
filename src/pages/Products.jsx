import React, { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { ShoppingBag, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Products = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  const categories = [
    {
      title: "Consumer Electronics",
      id: "cat-electronics",
      items: ["Smart Home Devices", "Audio Gear", "Mobile Accessories", "Wearables"]
    },
    {
      title: "Home & Furniture",
      id: "cat-home",
      items: ["Office Furniture", "Modern Lighting", "Kitchenware", "Home Textiles"]
    },
    {
      title: "Industrial Machinery",
      id: "cat-industrial",
      items: ["Packaging Equipment", "Laser Cutters", "CNC Spare Parts", "Small Tools"]
    },
    {
      title: "Outdoor & Sport",
      id: "cat-outdoor",
      items: ["Camping Gear", "Fitness Equipment", "Garden Tools", "E-Bikes"]
    }
  ];

  return (
    <div ref={containerRef} className="pt-32 pb-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-extrabold text-primary mb-6">Products We Source</h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            While we can source almost anything, we specialize in these high-demand categories where our factory network is strongest.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {categories.map((cat, idx) => (
            <div key={idx} className="group overflow-hidden rounded-2xl border border-slate-200 bg-slate-50 flex flex-col md:flex-row shadow-sm hover:shadow-md transition-all">
              <div className="md:w-1/2 h-64 md:h-auto overflow-hidden">
                <img 
                  alt={cat.title}
                  data-strk-img-id={`cat-img-${idx}`}
                  data-strk-img={`[${cat.id}] China wholesale products inventory factory`}
                  data-strk-img-ratio="1x1"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="md:w-1/2 p-8 flex flex-col justify-between">
                <div>
                  <h3 id={cat.id} className="text-2xl font-bold text-slate-900 mb-4">{cat.title}</h3>
                  <ul className="space-y-2">
                    {cat.items.map((item, i) => (
                      <li key={i} className="text-sm text-slate-600 flex items-center">
                        <ShoppingBag size={14} className="text-accent mr-2" /> {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-8">
                  <Link to="/contact" className="text-primary font-bold text-sm flex items-center group-hover:text-accent transition-colors">
                    Source This Category <ChevronRight size={16} className="ml-1" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
