import React, { useEffect, useRef } from 'react';
import { Smartphone, Laptop, Shirt, Sofa, Hammer, ToyBrick, Utensils, Zap, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const categories = [
  {
    id: "electronics",
    icon: <Smartphone size={40} />,
    title: "Consumer Electronics",
    items: ["Mobile Accessories", "Smart Home Devices", "Audio Equipment", "LED Displays"]
  },
  {
    id: "furniture",
    icon: <Sofa size={40} />,
    title: "Furniture & Decor",
    items: ["Office Furniture", "Home Textiles", "Lighting Fixtures", "Kitchen Cabinets"]
  },
  {
    id: "apparel",
    icon: <Shirt size={40} />,
    title: "Apparel & Textiles",
    items: ["Activewear", "Fashion Accessories", "Uniforms", "Yarn & Fabrics"]
  },
  {
    id: "machinery",
    icon: <Hammer size={40} />,
    title: "Industrial Machinery",
    items: ["CNC Machines", "Packaging Equipment", "Spare Parts", "Power Tools"]
  },
  {
    id: "toys",
    icon: <ToyBrick size={40} />,
    title: "Toys & Baby Products",
    items: ["Educational Toys", "Baby Strollers", "Plush Items", "Outdoor Play Gear"]
  },
  {
    id: "kitchen",
    icon: <Utensils size={40} />,
    title: "Kitchen & Home",
    items: ["Cookware Sets", "Small Appliances", "Storage Solutions", "Tableware"]
  }
];

const Products = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, []);

  return (
    <div ref={containerRef} className="bg-slate-50 min-h-screen">
      <section className="bg-white py-24 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 md:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-black text-secondary mb-6">Products We Source</h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto font-medium leading-relaxed">
            With over a decade of experience, we have developed deep supplier networks across multiple industries. We source high-quality products from China's industrial hubs.
          </p>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((cat, index) => (
              <div key={index} className="group bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300">
                <div className="h-48 relative overflow-hidden">
                   <img
                    data-strk-img-id={`cat-img-${cat.id}`}
                    data-strk-img={`[cat-title-${cat.id}] products made in China factory`}
                    data-strk-img-ratio="16x9"
                    data-strk-img-width="600"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    alt={cat.title}
                  />
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur p-3 rounded-xl text-primary shadow-lg">
                    {cat.icon}
                  </div>
                </div>
                <div className="p-8">
                   <h3 id={`cat-title-${cat.id}`} className="text-2xl font-extrabold text-secondary mb-6">{cat.title}</h3>
                   <ul className="space-y-4">
                      {cat.items.map((item, i) => (
                        <li key={i} className="flex items-center gap-3 text-slate-600 font-bold">
                           <CheckCircle2 size={18} className="text-accent" />
                           {item}
                        </li>
                      ))}
                   </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Specialty Section */}
      <section className="py-24 bg-secondary text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
           <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                 <h2 id="specialty-title" className="text-3xl md:text-5xl font-black mb-8 leading-tight">Can't find your product category?</h2>
                 <p id="specialty-desc" className="text-slate-400 text-lg mb-10 leading-relaxed font-medium">
                    Our general sourcing team handles custom requests for obscure parts, raw materials, and niche consumer goods. If it's made in China, we can find it.
                 </p>
                 <div className="space-y-6">
                    <div className="flex gap-4">
                       <Zap className="text-accent flex-shrink-0" size={24} />
                       <div>
                          <h4 className="font-bold text-xl mb-1">Rapid Sourcing</h4>
                          <p className="text-slate-500">Initial quotes provided within 48-72 hours for most custom requests.</p>
                       </div>
                    </div>
                    <div className="flex gap-4">
                       <Zap className="text-accent flex-shrink-0" size={24} />
                       <div>
                          <h4 className="font-bold text-xl mb-1">OEM/ODM Support</h4>
                          <p className="text-slate-500">Managing the transition from design to mass production for custom products.</p>
                       </div>
                    </div>
                 </div>
                 <div className="mt-12">
                    <Link to="/contact" className="inline-block bg-primary text-white font-bold py-4 px-10 rounded-lg hover:bg-primary-hover transition shadow-xl">
                       Inquire Now
                    </Link>
                 </div>
              </div>
              <div className="relative">
                 <div className="aspect-square bg-slate-800 rounded-3xl overflow-hidden border-4 border-slate-700 shadow-2xl">
                    <img
                        data-strk-img-id="specialty-img-custom"
                        data-strk-img="[specialty-title] [specialty-desc] diverse manufacturing products China"
                        data-strk-img-ratio="1x1"
                        data-strk-img-width="800"
                        src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                        className="w-full h-full object-cover opacity-80"
                        alt="Custom Sourcing"
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
