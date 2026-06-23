import React, { useEffect, useRef } from 'react';
import { Smartphone, Home, Shirt, Cpu, Construction, Sun, Baby, Printer, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '../strk-img-config.json';

const Products = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  const categories = [
    { id: "electronics", title: "Electronics & Gadgets", icon: <Smartphone />, img: "electronic hardware components gadgets" },
    { id: "home", title: "Home & Kitchen", icon: <Home />, img: "modern kitchenware home decor products" },
    { id: "textiles", title: "Textiles & Apparel", icon: <Shirt />, img: "clothing fabric rolls fashion workshop" },
    { id: "industrial", title: "Industrial Machinery", icon: <Cpu />, img: "heavy machinery industrial equipment factory" },
    { id: "construction", title: "Construction Materials", icon: <Construction />, img: "building materials tiles flooring construction" },
    { id: "solar", title: "Solar & Renewable Energy", icon: <Sun />, img: "solar panels installation green energy" },
    { id: "toys", title: "Toys & Leisure", icon: <Baby />, img: "children's toys plastic toys production" },
    { id: "packaging", title: "Packaging & Printing", icon: <Printer />, img: "custom packaging boxes printing shop" }
  ];

  return (
    <div ref={containerRef} className="bg-white min-h-screen">
      {/* Header */}
      <section className="bg-slate-900 py-20 text-white">
        <div className="container mx-auto px-4 text-center">
            <h1 id="products-page-title" className="text-4xl md:text-5xl font-bold mb-6">Products We Source</h1>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              With over 10 years of experience, we have built a vast network of verified manufacturers across dozens of industries.
            </p>
        </div>
      </section>

      {/* Grid */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {categories.map((cat, idx) => (
              <div key={cat.id} className="group relative rounded-2xl overflow-hidden aspect-[4/5] shadow-lg hover:shadow-2xl transition-all">
                <div className="absolute inset-0 bg-blue-900/60 group-hover:bg-blue-900/40 transition-colors z-10"></div>
                <img 
                  data-strk-img-id={`prod-cat-img-${cat.id}`}
                  data-strk-img={`[prod-cat-title-${cat.id}] ${cat.img}`}
                  data-strk-img-ratio="3x4"
                  data-strk-img-width="400"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={cat.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 z-20 p-8 flex flex-col justify-end text-white">
                  <div className="mb-4 bg-white/20 w-fit p-3 rounded-lg backdrop-blur-md">
                    {React.cloneElement(cat.icon, { size: 28 })}
                  </div>
                  <h3 id={`prod-cat-title-${cat.id}`} className="text-2xl font-bold mb-2">{cat.title}</h3>
                  <Link to="/contact" className="text-amber-400 font-semibold flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity translate-y-2 group-hover:translate-y-0 duration-300">
                    Sourcing Inquiry <ArrowRight size={18} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Specialty Section */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2">
                <h2 id="specialty-title" className="text-3xl md:text-4xl font-bold text-blue-900 mb-8">Custom Manufacturing & OEM/ODM</h2>
                <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                  Have a unique product design or need private labeling? We specialize in helping businesses develop custom products from scratch. 
                </p>
                <div className="space-y-4">
                    {[
                        "Prototyping and 3D printing",
                        "Mold development and ownership",
                        "Custom packaging design",
                        "Private label printing",
                        "IP protection management"
                    ].map((item, i) => (
                        <div key={i} className="flex items-center gap-3">
                            <ArrowRight className="text-amber-600" size={20} />
                            <span className="font-medium text-slate-700">{item}</span>
                        </div>
                    ))}
                </div>
                <div className="mt-10">
                    <Link to="/contact" className="bg-blue-900 text-white px-8 py-4 rounded-lg font-bold hover:bg-blue-800 transition-colors inline-block">
                        Discuss Your Project
                    </Link>
                </div>
            </div>
            <div className="lg:w-1/2">
                <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-4">
                        <div className="h-64 rounded-xl overflow-hidden">
                             <img 
                                data-strk-img-id="prod-specialty-1"
                                data-strk-img="3d printing prototype product development"
                                data-strk-img-ratio="1x1"
                                data-strk-img-width="400"
                                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                                alt="Prototyping"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="h-48 rounded-xl overflow-hidden">
                             <img 
                                data-strk-img-id="prod-specialty-2"
                                data-strk-img="custom packaging box design luxury"
                                data-strk-img-ratio="4x3"
                                data-strk-img-width="400"
                                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                                alt="Packaging"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>
                    <div className="pt-8 space-y-4">
                        <div className="h-48 rounded-xl overflow-hidden">
                             <img 
                                data-strk-img-id="prod-specialty-3"
                                data-strk-img="factory mold steel metal machining"
                                data-strk-img-ratio="4x3"
                                data-strk-img-width="400"
                                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                                alt="Molds"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="h-64 rounded-xl overflow-hidden">
                             <img 
                                data-strk-img-id="prod-specialty-4"
                                data-strk-img="product design engineer drawing"
                                data-strk-img-ratio="1x1"
                                data-strk-img-width="400"
                                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                                alt="Engineering"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>
                </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;
