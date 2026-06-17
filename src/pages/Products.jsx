import React, { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { Search, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Products = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    if (ImageHelper && ImageHelper.loadImages) {
      return ImageHelper.loadImages(strkImgConfig, containerRef.current);
    }
  }, []);

  const productCategories = [
    {
      name: 'Consumer Electronics',
      items: ['Smart Home Devices', 'Phone Accessories', 'Audio Equipment', 'Wearable Tech'],
      imgId: 'prod-cat-electronics'
    },
    {
      name: 'Home & Garden',
      items: ['Kitchenware', 'Furniture', 'Outdoor Living', 'Home Decor'],
      imgId: 'prod-cat-home'
    },
    {
      name: 'Fashion & Apparel',
      items: ['Sportswear', 'Handbags', 'Footwear', 'Jewelry'],
      imgId: 'prod-cat-fashion'
    },
    {
      name: 'Toys & Kids',
      items: ['Education Toys', 'Plushies', 'Baby Gear', 'Outdoor Play'],
      imgId: 'prod-cat-toys'
    },
    {
      name: 'Industrial & Tools',
      items: ['Hardware', 'Machinery Parts', 'Safety Gear', 'Power Tools'],
      imgId: 'prod-cat-industrial'
    },
    {
      name: 'Beauty & Health',
      items: ['Skincare Tools', 'Massagers', 'Makeup Accessories', 'Personal Care'],
      imgId: 'prod-cat-beauty'
    }
  ];

  return (
    <div ref={containerRef}>
      {/* Header */}
      <section className="bg-white py-16 md:py-24 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight">Products We Source</h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Leverage our deep factory database across diverse industries. If it's made in China, we can find it.
          </p>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {productCategories.map((cat, index) => (
              <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-200 group">
                <div className="aspect-video overflow-hidden">
                  <img
                    data-strk-img-id={cat.imgId}
                    data-strk-img={`[cat-name-${index}] variety of products`}
                    data-strk-img-ratio="16x9"
                    data-strk-img-width="600"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 9'/%3E"
                    alt={cat.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
                <div className="p-8">
                  <h3 id={`cat-name-${index}`} className="text-2xl font-bold text-slate-900 mb-4">{cat.name}</h3>
                  <ul className="space-y-3 mb-8">
                    {cat.items.map((item, iIdx) => (
                      <li key={iIdx} className="flex items-center gap-2 text-slate-600">
                        <ChevronRight className="w-4 h-4 text-yellow-500" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <Link to="/contact" className="inline-flex items-center gap-2 font-bold text-slate-900 hover:text-yellow-600 transition-colors">
                    Inquire about this category <ChevronRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Manufacturing */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-slate-900 rounded-[2rem] p-12 md:p-20 overflow-hidden relative">
            <div 
              className="absolute inset-0 opacity-10"
              data-strk-bg-id="custom-mfg-bg"
              data-strk-bg="High tech CNC machining factory"
              data-strk-bg-ratio="16x9"
              data-strk-bg-width="1200"
            />
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Need Custom Manufacturing (OEM/ODM)?</h2>
                <p className="text-lg text-slate-300 mb-8">
                  Have a unique design or want to launch your own brand? We specialize in helping businesses develop custom products from technical drawings to final production.
                </p>
                <div className="space-y-4 mb-10">
                  <div className="flex items-start gap-4">
                    <div className="w-6 h-6 rounded-full bg-yellow-500 flex items-center justify-center shrink-0 mt-1">
                      <ChevronRight className="w-4 h-4 text-slate-900" />
                    </div>
                    <span className="text-white">Mold development and prototyping management</span>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-6 h-6 rounded-full bg-yellow-500 flex items-center justify-center shrink-0 mt-1">
                      <ChevronRight className="w-4 h-4 text-slate-900" />
                    </div>
                    <span className="text-white">IP protection and factory confidentiality agreements</span>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-6 h-6 rounded-full bg-yellow-500 flex items-center justify-center shrink-0 mt-1">
                      <ChevronRight className="w-4 h-4 text-slate-900" />
                    </div>
                    <span className="text-white">Bilingual engineering support to avoid "lost in translation"</span>
                  </div>
                </div>
                <Link to="/contact" className="inline-block bg-yellow-500 text-slate-900 px-8 py-4 rounded-lg font-bold hover:bg-yellow-600 transition-all">
                  Discuss Your Custom Project
                </Link>
              </div>
              <div className="hidden lg:block">
                <div className="rounded-2xl overflow-hidden shadow-2xl rotate-3 scale-110">
                  <img
                    data-strk-img-id="custom-mfg-img"
                    data-strk-img="Detailed engineering blueprint and custom manufactured part"
                    data-strk-img-ratio="4x3"
                    data-strk-img-width="800"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 3'/%3E"
                    alt="Custom Manufacturing"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sourcing Search */}
      <section className="py-24 bg-slate-50 border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-6 font-serif">Don't see your category?</h2>
          <p className="text-xl text-slate-600 mb-10 leading-relaxed">
            Our network covers over 50,000 manufacturers across China. We can source virtually any legal product for your business. Challenge us with your most complex requirements!
          </p>
          <div className="flex justify-center">
            <Link to="/contact" className="flex items-center gap-2 text-slate-900 font-bold border-2 border-slate-900 px-8 py-4 rounded-xl hover:bg-slate-900 hover:text-white transition-all group">
              <Search className="w-5 h-5 group-hover:scale-125 transition-transform" />
              Start a Custom Sourcing Search
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;

