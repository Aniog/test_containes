import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Smartphone, Home, ToyBrick, Shirt, Wrench, Factory, ArrowRight } from 'lucide-react';
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";

const Products = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      if (containerRef.current) {
        ImageHelper.loadImages(strkImgConfig, containerRef.current);
      }
    });
    return () => window.cancelAnimationFrame(frameId);
  }, []);

  const categories = [
    { id: "electronics", name: "Electronics & Gadgets", icon: <Smartphone />, imgId: "cat-electronics-img" },
    { id: "home", name: "Home & Furniture", icon: <Home />, imgId: "cat-home-img" },
    { id: "toys", name: "Toys & Hobbies", icon: <ToyBrick />, imgId: "cat-toys-img" },
    { id: "apparel", name: "Apparel & Textiles", icon: <Shirt />, imgId: "cat-apparel-img" },
    { id: "tools", name: "Tools & Hardware", icon: <Wrench />, imgId: "cat-tools-img" },
    { id: "industrial", name: "Industrial Machinery", icon: <Factory />, imgId: "cat-industrial-img" }
  ];

  return (
    <div ref={containerRef} className="bg-white">
      {/* Header */}
      <section className="bg-primary py-20 text-white">
        <div className="container-custom">
          <h1 id="products-title" className="text-4xl md:text-5xl font-display font-bold mb-6">Products We Source</h1>
          <p id="products-subtitle" className="text-xl text-slate-300 max-w-2xl">
            With over 10 years of experience, we have built a vast network of reliable suppliers across various industries in China.
          </p>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="py-20">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((cat) => (
              <div key={cat.id} className="group cursor-pointer">
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden mb-4 shadow-md group-hover:shadow-xl transition-all">
                  <img 
                    data-strk-img-id={cat.imgId}
                    data-strk-img={`[cat-name-${cat.id}] [products-subtitle] [products-title]`}
                    data-strk-img-ratio="4x3"
                    data-strk-img-width="600"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 3'/%3E"
                    alt={cat.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                    <div className="text-white flex items-center space-x-3">
                      <div className="w-10 h-10 bg-accent rounded-full flex items-center justify-center">
                        {cat.icon}
                      </div>
                      <span id={`cat-name-${cat.id}`} className="text-xl font-bold">{cat.name}</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-between px-2">
                   <p className="text-slate-500 text-sm font-medium">Verified Manufacturers</p>
                   <ArrowRight className="text-slate-400 group-hover:text-accent transition-colors" size={20} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sourcing Section */}
      <section className="py-20 bg-slate-50">
         <div className="container-custom grid lg:grid-cols-2 gap-16 items-center">
            <div>
               <h2 id="custom-sourcing-title" className="text-3xl font-display font-bold text-slate-900 mb-6">Can't Find Your Category?</h2>
               <p id="custom-sourcing-desc" className="text-lg text-slate-600 mb-8 leading-relaxed">
                 We are not limited to the categories above. Our sourcing expertise extends to almost any product manufactured in China. Simply send us your product details, and we'll find the right supplier for you.
               </p>
               <ul className="space-y-4 mb-8">
                  <li className="flex items-start space-x-3">
                     <div className="mt-1 w-5 h-5 bg-green-100 rounded-full flex items-center justify-center text-green-600 shrink-0">
                        <ArrowRight size={12} />
                     </div>
                     <span className="text-slate-700 font-medium">Customized OEM/ODM requirements welcome</span>
                  </li>
                  <li className="flex items-start space-x-3">
                     <div className="mt-1 w-5 h-5 bg-green-100 rounded-full flex items-center justify-center text-green-600 shrink-0">
                        <ArrowRight size={12} />
                     </div>
                     <span className="text-slate-700 font-medium">Bespoke manufacturing solutions</span>
                  </li>
                  <li className="flex items-start space-x-3">
                     <div className="mt-1 w-5 h-5 bg-green-100 rounded-full flex items-center justify-center text-green-600 shrink-0">
                        <ArrowRight size={12} />
                     </div>
                     <span className="text-slate-700 font-medium">Private label branding & packaging</span>
                  </li>
               </ul>
               <Link to="/contact" className="btn-accent px-8 py-3">Inquire About My Product</Link>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-2xl">
               <img 
                 data-strk-img-id="custom-sourcing-img"
                 data-strk-img="[custom-sourcing-desc] [custom-sourcing-title] factory warehouse china"
                 data-strk-img-ratio="4x3"
                 data-strk-img-width="800"
                 src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 3'/%3E"
                 alt="Custom Sourcing"
                 className="w-full h-full object-cover"
               />
            </div>
         </div>
      </section>
    </div>
  );
};

export default Products;
