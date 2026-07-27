import React, { useEffect, useRef } from 'react';
import { Smartphone, Shirt, Home, Zap, Heart, Box, ArrowRight } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { Link } from 'react-router-dom';

export default function Products() {
  const containerRef = useRef(null);

  useEffect(() => {
    ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  const categories = [
    {
      id: 'electronics',
      name: 'Consumer Electronics',
      desc: 'Accessories, smart home devices, audio equipment, and PC peripherals. We source from CE/RoHS certified factories in Shenzhen and Dongguan.',
      icon: Smartphone,
      imgId: 'cat-electronics-1a2b',
      imgContext: 'consumer electronics gadgets factory production'
    },
    {
      id: 'apparel',
      name: 'Apparel & Textiles',
      desc: 'Activewear, fashion, uniforms, and home textiles. Sourced from specialized garment hubs in Guangdong, Zhejiang, and Jiangsu provinces.',
      icon: Shirt,
      imgId: 'cat-apparel-3c4d',
      imgContext: 'clothing textile garment factory sewing'
    },
    {
      id: 'home',
      name: 'Home & Garden',
      desc: 'Furniture, kitchenware, decor, and outdoor equipment. We ensure material compliance and safe packaging for bulky items.',
      icon: Home,
      imgId: 'cat-home-5e6f',
      imgContext: 'home goods furniture warehouse kitchenware'
    },
    {
      id: 'industrial',
      name: 'Industrial & Tools',
      desc: 'Machinery parts, hand tools, hardware, and building materials. Sourced from robust industrial clusters focused on durability and precision.',
      icon: Zap,
      imgId: 'cat-industrial-7g8h',
      imgContext: 'hardware tools industrial machinery manufacturing'
    },
    {
      id: 'health',
      name: 'Health & Personal Care',
      desc: 'Fitness equipment, beauty tools, and wellness products. We strictly vet for FDA/CE compliance and medical-grade manufacturing standards.',
      icon: Heart,
      imgId: 'cat-health-9i0j',
      imgContext: 'fitness equipment beauty products manufacturing cleanroom'
    },
    {
      id: 'custom',
      name: 'Custom OEM/ODM',
      desc: 'Have a unique product idea? We help with mold development, prototyping, and finding factories willing to sign NDAs for exclusive production.',
      icon: Box,
      imgId: 'cat-custom-1k2l',
      imgContext: 'product design blueprint prototype mold making'
    }
  ];

  return (
    <div ref={containerRef}>
      <div className="bg-slate-900 py-20 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 id="page-title" className="text-4xl font-extrabold text-white tracking-tight sm:text-5xl">
            Products We Source
          </h1>
          <p className="mt-4 text-xl text-slate-300 max-w-3xl mx-auto">
            Leveraging our deep connections across China's major manufacturing hubs to find exactly what you need.
          </p>
        </div>
      </div>

      <div className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((cat) => {
              const Icon = cat.icon;
              const titleId = `cat-title-${cat.id}`;
              const descId = `cat-desc-${cat.id}`;

              return (
                <div key={cat.id} className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden flex flex-col group hover:shadow-md transition-shadow">
                  <div className="h-48 overflow-hidden relative">
                     <img 
                        alt={cat.name}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        data-strk-img-id={cat.imgId}
                        data-strk-img={`[${descId}] [${titleId}] ${cat.imgContext}`}
                        data-strk-img-ratio="4x3"
                        data-strk-img-width="600"
                        src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                     />
                     <div className="absolute inset-0 bg-slate-900/20 group-hover:bg-transparent transition-colors" />
                  </div>
                  <div className="p-6 flex-grow flex flex-col">
                    <div className="flex items-center gap-3 mb-4">
                        <div className="p-2 bg-blue-100 rounded-lg text-blue-600">
                           <Icon className="w-6 h-6" />
                        </div>
                        <h2 id={titleId} className="text-xl font-bold text-slate-900">{cat.name}</h2>
                    </div>
                    <p id={descId} className="text-slate-600 mb-6 flex-grow">{cat.desc}</p>
                    <Link to={`/contact?category=${cat.id}`} className="inline-flex items-center text-blue-600 font-medium hover:text-blue-800 transition-colors mt-auto">
                        Inquire about this category <ArrowRight className="ml-1 w-4 h-4" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-20 bg-blue-50 rounded-2xl border border-blue-100 p-8 md:p-12 text-center md:flex md:items-center md:text-left md:justify-between gap-8">
            <div>
                <h3 className="text-2xl font-bold text-slate-900">Don't see your product category?</h3>
                <p className="mt-2 text-lg text-slate-600">
                  Our network extends beyond these main categories. Contact us with your specific requirements, and we'll let you know if we can help.
                </p>
            </div>
            <div className="mt-6 md:mt-0 flex-shrink-0">
                 <Link to="/contact" className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors whitespace-nowrap">
                    Tell Us What You Need
                </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
