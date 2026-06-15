import React, { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { Package, Smartphone, Home, Tool, ShoppingBag, Baby, Car, Cpu } from 'lucide-react';

const Products = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  const categories = [
    {
      id: 'electronics',
      title: 'Consumer Electronics',
      icon: Smartphone,
      items: ['Smart Home Devices', 'Audio Accessories', 'Power Banks', 'PC Peripherals'],
      img: 'modern smart tech gadgets on display'
    },
    {
      id: 'home',
      title: 'Home & Kitchen',
      icon: Home,
      items: ['Kitchenware', 'Storage Organizers', 'Small Appliances', 'Home Decor'],
      img: 'minimalist kitchen tools and home decor'
    },
    {
      id: 'clothing',
      title: 'Textiles & Apparel',
      icon: ShoppingBag,
      items: ['Sustainable Fabrics', 'Activewear', 'Workwear', 'Corporate Uniforms'],
      img: 'premium clothing textiles and apparel on racks'
    },
    {
      id: 'hardware',
      title: 'Industrial & Hardware',
      icon: Tool,
      items: ['Hand Tools', 'Fasteners', 'Plumbing Supplies', 'Electrical Components'],
      img: 'industrial machinery parts and professional hardware tools'
    },
    {
      id: 'automotive',
      title: 'Automotive Parts',
      icon: Car,
      items: ['LED Lighting', 'Dashcams', 'Performance Parts', 'Cleaning Kits'],
      img: 'automotive spare parts and car accessories'
    },
    {
      id: 'kids',
      title: 'Toys & Baby Products',
      icon: Baby,
      items: ['Educational Toys', 'Baby Nursery', 'Strollers', 'Safety Gear'],
      img: 'eco-friendly wooden toys and baby products'
    }
  ];

  return (
    <div ref={containerRef} className="bg-white min-h-screen">
      <section className="bg-slate-50 py-20 lg:py-32 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 id="products-page-title" className="text-4xl lg:text-5xl font-extrabold text-slate-900 mb-6">What We Source</h1>
          <p id="products-page-subtitle" className="text-xl text-slate-500 max-w-2xl mx-auto">
            Deep expertise in China manufacturing across multiple industrial and consumer sectors.
          </p>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {categories.map((cat, idx) => (
              <div key={cat.id} className="group border border-slate-100 rounded-3xl overflow-hidden hover:shadow-2xl transition-all duration-500 bg-white">
                <div className="aspect-[16/10] overflow-hidden relative">
                   <img
                    data-strk-img-id={`cat-img-${cat.id}`}
                    data-strk-img={`[cat-title-${cat.id}] ${cat.img}`}
                    data-strk-img-ratio="16x10"
                    data-strk-img-width="600"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={cat.title}
                  />
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur p-3 rounded-2xl shadow-lg border border-white/50">
                    <cat.icon className="h-6 w-6 text-blue-600" />
                  </div>
                </div>
                <div className="p-8">
                  <h3 id={`cat-title-${cat.id}`} className="text-2xl font-bold text-slate-900 mb-4">{cat.title}</h3>
                  <ul className="space-y-3">
                    {cat.items.map((item, i) => (
                      <li key={i} className="flex items-center text-slate-600">
                        <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-3"></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                  <a href="/contact" className="mt-8 inline-flex items-center text-blue-600 font-bold hover:text-blue-700">
                    Source {cat.title} <Package className="ml-2 h-4 w-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OEM/ODM Section */}
      <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute bottom-0 right-0 w-1/3 opacity-20 transform translate-y-1/2 translate-x-1/4">
          <Cpu className="w-96 h-96" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="lg:grid lg:grid-cols-2 lg:gap-20 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-extrabold mb-8 italic text-blue-400 font-serif">"If it's made in China, we can find it."</h2>
              <h3 className="text-2xl font-bold mb-6">Custom Manufacturing (OEM / ODM)</h3>
              <p className="text-lg text-slate-400 leading-relaxed mb-8">
                Don't settle for off-the-shelf products. We specialize in helping entrepreneurs and established brands build unique products from scratch. Our engineers in Shenzhen help with:
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  'Technical Drawings Review', 'Molding & Tooling', 'Material Sourcing',
                  'Prototyping', 'Assembly Line Setup', 'Custom Packaging'
                ].map((item, i) => (
                  <li key={i} className="flex items-center text-slate-200">
                    <span className="w-2 h-2 bg-blue-500 mr-3"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-12 lg:mt-0 aspect-square rounded-full border border-slate-700 p-8 flex items-center justify-center">
               <div className="w-full h-full rounded-full overflow-hidden border-4 border-slate-800 shadow-2xl">
                  <img
                    data-strk-img-id="custom-manufacturing-img"
                    data-strk-img="Engineer working on 3D cad design of plastic injection part professional"
                    data-strk-img-ratio="1x1"
                    data-strk-img-width="800"
                    className="w-full h-full object-cover"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt="Custom Manufacturing"
                  />
               </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;
