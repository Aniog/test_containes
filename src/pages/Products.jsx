import React, { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { ArrowRight, Box, Cable, Cpu, Dumbbell, Home as HomeIcon, Shirt } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Products() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  const categories = [
    {
      id: 'electronics',
      name: 'Electronics & Tech',
      icon: <Cpu className="w-6 h-6 text-blue-600" />,
      desc: 'Consumer electronics, accessories, smart home devices, and components.',
      imgQuery: 'consumer electronics and gadgets technology manufacturing'
    },
    {
      id: 'home-goods',
      name: 'Home & Garden',
      icon: <HomeIcon className="w-6 h-6 text-blue-600" />,
      desc: 'Furniture, decor, kitchenware, and outdoor living products.',
      imgQuery: 'modern home furniture and decor interior design'
    },
    {
      id: 'apparel',
      name: 'Apparel & Textiles',
      icon: <Shirt className="w-6 h-6 text-blue-600" />,
      desc: 'Clothing, activewear, fabrics, and fashion accessories.',
      imgQuery: 'clothing apparel fashion garments factory'
    },
    {
      id: 'fitness',
      name: 'Sports & Fitness',
      icon: <Dumbbell className="w-6 h-6 text-blue-600" />,
      desc: 'Exercise equipment, outdoor gear, and yoga accessories.',
      imgQuery: 'gym fitness sports exercise equipment'
    },
    {
      id: 'packaging',
      name: 'Packaging & Print',
      icon: <Box className="w-6 h-6 text-blue-600" />,
      desc: 'Custom boxes, sustainable packaging, and branded materials.',
      imgQuery: 'custom packaging design cardboard boxes'
    },
    {
      id: 'industrial',
      name: 'Industrial & Hardware',
      icon: <Cable className="w-6 h-6 text-blue-600" />,
      desc: 'Tools, machinery parts, building materials, and raw components.',
      imgQuery: 'industrial hardware manufacturing tools machinery'
    }
  ];

  return (
    <div ref={containerRef} className="pt-8 pb-24 top-padding">
      <div className="bg-slate-50 py-16 mb-16 border-b">
         <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold font-sans tracking-tight mb-6 text-slate-900">
               Products We Source
            </h1>
            <p className="text-xl text-slate-600 max-w-3xl leading-relaxed">
               With access to over 500+ verified factories across China's major manufacturing hubs, we can source almost any product category to meet your specifications.
            </p>
         </div>
      </div>

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category) => (
            <div key={category.id} className="bg-white rounded-xl shadow-md overflow-hidden border border-slate-100 group">
              <div className="h-48 overflow-hidden relative">
                 <img 
                    data-strk-img-id={`category-${category.id}`}
                    data-strk-img={category.imgQuery}
                    data-strk-img-ratio="4x3"
                    data-strk-img-width="600"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={category.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                 />
              </div>
              <div className="p-6">
                <div className="flex items-center space-x-3 mb-4">
                   {category.icon}
                   <h3 className="text-xl font-bold text-slate-900">{category.name}</h3>
                </div>
                <p className="text-slate-600 mb-6 line-clamp-2">
                  {category.desc}
                </p>
                <Link to={`/contact?interest=${category.id}`} className="inline-flex items-center text-blue-600 font-medium hover:text-blue-800">
                  Discuss a project <ArrowRight className="w-4 h-4 ml-1" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-24 bg-blue-50 rounded-2xl p-8 md:p-12 text-center border border-blue-100">
           <h3 className="text-2xl font-bold text-slate-900 mb-4">Don't see your category?</h3>
           <p className="text-slate-600 mb-8 max-w-2xl mx-auto">
              Our sourcing network extends far beyond these main categories. If you have a custom product, OEM/ODM requirement, or niche item, our sourcing specialists can find the right manufacturer.
           </p>
           <Link to="/contact" className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium px-8 py-3 rounded-lg transition-colors">
              Send Us Your Requirements
           </Link>
        </div>
      </div>
    </div>
  );
}
