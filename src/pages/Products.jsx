import React, { useRef, useEffect } from 'react';
import { ArrowRight, Laptop, Shirt, Sofa, HardHat, HeartPulse, Palette } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const Products = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    const frameId = window.requestAnimationFrame(() => {
      if (containerRef.current) {
        ImageHelper.loadImages(strkImgConfig, containerRef.current);
      }
    });
    return () => window.cancelAnimationFrame(frameId);
  }, []);

  const categories = [
    {
      id: 'consumer-electronics',
      name: 'Consumer Electronics',
      icon: <Laptop className="w-8 h-8 text-blue-600" />,
      description: 'Smartphones accessories, audio equipment, smart home devices, wearables, and computer peripherals.',
      image: "https://images.unsplash.com/photo-1550009158-9ebf69173e03?auto=format&fit=crop&q=80&w=800",
      items: ['Wireless Earbuds', 'Power Banks', 'Smart Watches', 'Cables & Chargers']
    },
    {
      id: 'apparel-textiles',
      name: 'Apparel & Textiles',
      icon: <Shirt className="w-8 h-8 text-indigo-600" />,
      description: 'Clothing, activewear, fabrics, bags, and fashion accessories with strict quality and ethical standards.',
      image: "https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?auto=format&fit=crop&q=80&w=800",
      items: ['Activewear', 'T-Shirts & Hoodies', 'Leather Bags', 'Caps & Hats']
    },
    {
      id: 'home-furniture',
      name: 'Home & Furniture',
      icon: <Sofa className="w-8 h-8 text-sky-600" />,
      description: 'Indoor and outdoor furniture, home decor, kitchenware, bedding, and storage solutions.',
      image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&q=80&w=800",
      items: ['Living Room Sets', 'Kitchen Gadgets', 'Bedding Sets', 'Home Decor']
    },
    {
      id: 'industrial-hardware',
      name: 'Industrial & Hardware',
      icon: <HardHat className="w-8 h-8 text-cyan-600" />,
      description: 'Building materials, hand tools, power tools, machinery parts, and industrial equipment.',
      image: "https://images.unsplash.com/photo-1581092334651-ddf26d9a09d0?auto=format&fit=crop&q=80&w=800",
      items: ['Hand Tools', 'Fasteners', 'Safety Equipment', 'Machinery Components']
    },
    {
      id: 'health-beauty',
      name: 'Health & Beauty',
      icon: <HeartPulse className="w-8 h-8 text-blue-600" />,
      description: 'Skincare packaging, beauty tools, massage devices, and personal care accessories.',
      image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&q=80&w=800",
      items: ['Makeup Brushes', 'Skincare Containers', 'Massage Guns', 'Hair Tools']
    },
    {
      id: 'toys-hobbies',
      name: 'Toys, Hobbies & Pet Supplies',
      icon: <Palette className="w-8 h-8 text-indigo-600" />,
      description: 'Educational toys, board games, pet accessories, crafts, and outdoor recreation products.',
      image: "https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?auto=format&fit=crop&q=80&w=800",
      items: ['Educational Toys', 'Pet Beds', 'Craft Kits', 'Outdoor Gear']
    }
  ];

  return (
    <div className="flex flex-col" ref={containerRef}>
      {/* Page Header */}
      <section className="bg-slate-50 py-16 md:py-24 border-b border-slate-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Products We Source</h1>
          <p className="text-lg text-slate-600 leading-relaxed">
            With over a decade of experience, we have established strong relationships with manufacturers across nearly every industry sector in China.
          </p>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((category) => (
              <div key={category.id} className="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-lg transition-all group flex flex-col">
                <div className="h-48 overflow-hidden relative">
                   <div className="absolute inset-0 bg-slate-900/20 group-hover:bg-transparent transition-colors z-10"></div>
                   <img 
                     src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                     data-strk-img-id={`cat-${category.id}-img`}
                     data-strk-img={`[cat-title-${category.id}]`}
                     data-strk-img-ratio="4x3"
                     data-strk-img-width="800"
                     alt={category.name} 
                     className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                   />
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-slate-50 rounded-lg border border-slate-100">
                      {category.icon}
                    </div>
                    <h3 id={`cat-title-${category.id}`} className="text-xl font-bold text-slate-900">{category.name}</h3>
                  </div>
                  <p className="text-slate-600 mb-6 flex-grow">
                    {category.description}
                  </p>
                  <div>
                    <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3">Popular Items</h4>
                    <div className="flex flex-wrap gap-2">
                       {category.items.map((item, idx) => (
                         <span key={idx} className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-slate-100 text-slate-800">
                           {item}
                         </span>
                       ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OEM/ODM Note */}
      <section className="py-16 bg-blue-50 border-y border-blue-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Looking for something completely custom?</h2>
          <p className="text-slate-600 mb-6">
            Beyond standard off-the-shelf items, we specialize in OEM (Original Equipment Manufacturing) and ODM (Original Design Manufacturing). We can help you find factories capable of producing your unique designs and securing your Intellectual Property.
          </p>
          <div className="flex justify-center flex-wrap gap-4 text-sm font-medium text-slate-700">
             <span className="flex items-center bg-white px-4 py-2 rounded-full shadow-sm border border-slate-200">Custom Tooling</span>
             <span className="flex items-center bg-white px-4 py-2 rounded-full shadow-sm border border-slate-200">Private Labeling</span>
             <span className="flex items-center bg-white px-4 py-2 rounded-full shadow-sm border border-slate-200">Bespoke Packaging</span>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Don't see your product category?</h2>
              <p className="text-lg text-slate-600 mb-8">Chances are we can source it. Send us your product specifications, images, and target quantities, and we'll tell you immediately if we can help.</p>
              <Link to="/contact" className="inline-flex justify-center items-center rounded-md bg-blue-600 px-8 py-4 text-base font-semibold text-white shadow-sm hover:bg-blue-500 transition-colors">
                  Send Your Product Let's Check
              </Link>
          </div>
      </section>

    </div>
  );
};

export default Products;