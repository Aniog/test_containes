import React, { useEffect, useRef } from 'react';
import { Smartphone, Home, Shirt, Zap, Car, Package, LayoutGrid, CheckCircle2 } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const Products = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  const categories = [
    {
      title: 'Consumer Electronics',
      desc: 'Smart home devices, mobile accessories, audio hardware, and wearable tech.',
      icon: <Smartphone className="w-8 h-8" />,
    },
    {
      title: 'Home & Kitchen',
      desc: 'Small appliances, cookware, storage solutions, and furniture.',
      icon: <Home className="w-8 h-8" />,
    },
    {
      title: 'Apparel & Textiles',
      desc: 'Fashion wear, uniforms, home textiles, and custom fabric sourcing.',
      icon: <Shirt className="w-8 h-8" />,
    },
    {
      title: 'Industrial Parts',
      desc: 'CNC machining, injection molding, hardware components, and raw materials.',
      icon: <Zap className="w-8 h-8" />,
    },
    {
      title: 'Automotive Parts',
      desc: 'Accessories, spare parts, lighting systems, and interior components.',
      icon: <Car className="w-8 h-8" />,
    },
    {
      title: 'Packaging Materials',
      desc: 'Custom boxes, sustainable packaging, labels, and protective materials.',
      icon: <Package className="w-8 h-8" />,
    }
  ];

  return (
    <div ref={containerRef}>
      {/* Header */}
      <section className="bg-gray-50 py-20 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center uppercase tracking-widest text-primary font-bold mb-4">
          What We Source
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 id="products-title" className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">Industries & Products</h1>
          <p id="products-desc" className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            With over a decade of experience, we have built a vast network of reliable manufacturers across multiple sectors.
          </p>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {categories.map((category, idx) => (
              <div key={idx} className="group relative bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">
                <div className="h-56 overflow-hidden relative">
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors z-10" />
                  <img 
                    data-strk-img-id={`cat-img-${idx}`}
                    data-strk-img={`[cat-title-${idx}] product manufacturing showcase`}
                    data-strk-img-ratio="16x9"
                    data-strk-img-width="600"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={category.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-8">
                  <div className="bg-blue-50 w-16 h-16 rounded-xl flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                    {category.icon}
                  </div>
                  <h3 id={`cat-title-${idx}`} className="text-2xl font-extrabold text-gray-900 mb-4">{category.title}</h3>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    {category.desc}
                  </p>
                  <div className="pt-6 border-t border-gray-50 flex items-center justify-between">
                    <span className="text-sm font-bold text-primary group-hover:translate-x-1 transition-transform inline-flex items-center gap-2">
                       Learn More <LayoutGrid className="w-4 h-4" />
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sourcing Capabilities */}
      <section className="py-24 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-8">Anything Else? We Can Source It.</h2>
              <p className="text-blue-100 text-lg mb-10 leading-relaxed">
                Our team is trained in diverse engineering and manufacturing disciplines. If you need a custom-made product or a specialized industrial component, we have the tools to find the right partner.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <CheckCircle2 className="w-6 h-6 text-accent" />
                  <span className="font-medium">Custom tooling & mold development</span>
                </div>
                <div className="flex items-center gap-4">
                  <CheckCircle2 className="w-6 h-6 text-accent" />
                  <span className="font-medium">Private labeling (OEM)</span>
                </div>
                <div className="flex items-center gap-4">
                  <CheckCircle2 className="w-6 h-6 text-accent" />
                  <span className="font-medium">New product design (ODM)</span>
                </div>
                <div className="flex items-center gap-4">
                  <CheckCircle2 className="w-6 h-6 text-accent" />
                  <span className="font-medium">Supplier diversification & risk mitigation</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
                <img 
                   data-strk-img-id="capabilities-img"
                   data-strk-img="quality control specialist checking product industrial setting"
                   data-strk-img-ratio="4x3"
                   data-strk-img-width="800"
                   src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                   alt="Capability"
                   className="rounded-lg shadow-lg"
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
