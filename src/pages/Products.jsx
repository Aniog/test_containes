import React, { useEffect, useRef } from 'react';
import { Home, Drill, Monitor, Shirt, HeartPulse, Coffee, ArrowRight } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { Link } from 'react-router-dom';

const productCategories = [
  {
    id: 'home-garden',
    icon: Home,
    titleId: 'cat-home-title',
    descId: 'cat-home-desc',
    title: 'Home & Garden',
    desc: 'Furniture, home decor, outdoor equipment, and daily living essentials.',
    items: ['Living Room Furniture', 'Outdoor Seating', 'Kitchen Gadgets', 'Decorative Appliances']
  },
  {
    id: 'hardware-tools',
    icon: Drill,
    titleId: 'cat-hardware-title',
    descId: 'cat-hardware-desc',
    title: 'Hardware & Tools',
    desc: 'Professional building materials, power tools, and industrial hardware.',
    items: ['Power Tools', 'Hand Tools', 'Building Materials', 'Industrial Fasteners']
  },
  {
    id: 'electronics',
    icon: Monitor,
    titleId: 'cat-electronics-title',
    descId: 'cat-electronics-desc',
    title: 'Consumer Electronics',
    desc: 'Smart devices, computer accessories, audio equipment, and wearables.',
    items: ['Smart Home Devices', 'Audio & Headphones', 'Computer Peripherals', 'Mobile Accessories']
  },
  {
    id: 'apparel-textiles',
    icon: Shirt,
    titleId: 'cat-apparel-title',
    descId: 'cat-apparel-desc',
    title: 'Apparel & Textiles',
    desc: 'Clothing, activewear, fabrics, and accessories from specialized textile hubs.',
    items: ['Activewear', 'Casual Clothing', 'Bags & Backpacks', 'Footwear']
  },
  {
    id: 'health-beauty',
    icon: HeartPulse,
    titleId: 'cat-health-title',
    descId: 'cat-health-desc',
    title: 'Health & Beauty',
    desc: 'Personal care tools, cosmetics packaging, and fitness equipment.',
    items: ['Skincare Tools', 'Cosmetic Packaging', 'Fitness Equipment', 'Personal Care']
  },
  {
    id: 'packaging-printing',
    icon: Coffee,
    titleId: 'cat-packaging-title',
    descId: 'cat-packaging-desc',
    title: 'Packaging & Printing',
    desc: 'Custom product packaging, eco-friendly boxes, and commercial printing.',
    items: ['Custom Mailer Boxes', 'Eco-friendly Packaging', 'Glass & Plastic Bottles', 'Labels & Stickers']
  }
];

export default function Products() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <div ref={containerRef} className="pb-20">
      {/* Header */}
      <section className="bg-slate-900 pt-20 pb-20 relative overflow-hidden">
         <div 
          className="absolute inset-0 z-0 opacity-40 mix-blend-overlay"
          data-strk-bg-id="products-header-bg"
          data-strk-bg="[products-header-desc] [products-header-title]"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1600"
        />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h1 id="products-header-title" className="text-4xl md:text-5xl font-extrabold text-white mb-6 tracking-tight">Products We Source</h1>
          <p id="products-header-desc" className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
            From consumer electronics to heavy industrial machinery, our diverse network of verified manufacturers can produce exactly what you need.
          </p>
        </div>
      </section>

      {/* Grid */}
      <section className="py-20 text-slate-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {productCategories.map((category) => (
              <div key={category.id} className="bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-200 hover:shadow-md transition-shadow group flex flex-col">
                <div className="relative h-48 overflow-hidden bg-slate-100">
                  <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-transparent transition-colors z-10"></div>
                  <img
                     alt={category.title}
                     data-strk-img-id={`cat-${category.id}`}
                     data-strk-img={`[${category.descId}] [${category.titleId}] [products-header-title]`}
                     data-strk-img-ratio="16x9"
                     data-strk-img-width="600"
                     src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                     className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 z-20 w-10 h-10 rounded-lg bg-white shadow-sm flex items-center justify-center text-blue-600">
                    <category.icon className="w-5 h-5" />
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <h2 id={category.titleId} className="text-xl font-bold mb-2">{category.title}</h2>
                  <p id={category.descId} className="text-sm text-slate-600 mb-6 flex-grow">{category.desc}</p>
                  
                  <ul className="space-y-2 mb-6">
                    {category.items.map((item, i) => (
                      <li key={i} className="text-sm text-slate-700 flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div>
                        {item}
                      </li>
                    ))}
                  </ul>

                  <Link to="/contact" className="inline-flex items-center text-sm font-semibold text-blue-600 hover:text-blue-700 mt-auto">
                    Inquire about {category.title.split('&')[0].trim()} <ArrowRight className="ml-1 w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Specialty Projects */}
      <section className="bg-slate-50 py-20 border-y border-slate-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Have a Custom or Niche Product?</h2>
          <p className="text-lg text-slate-600 mb-8 leading-relaxed">
            Our expertise goes beyond standard consumer goods. We frequently handle OEM/ODM projects, custom mold creation, and tailored manufacturing requirements for specialized industries.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
             <Link to="/contact" className="inline-flex items-center justify-center px-8 py-3.5 text-base font-semibold text-white bg-slate-900 rounded-lg hover:bg-slate-800 transition-colors shadow-md">
               Send Us Your Tech Pack
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
