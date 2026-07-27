import React from 'react';
import { Package, Smartphone, Home, Shirt, Zap, Coffee, Baby, Dumbbell } from 'lucide-react';

const Products = () => {
  const categories = [
    { name: "Electronics & Prototypes", icon: <Smartphone />, desc: "PCB fabrication, consumer electronics, and smart home devices.", id: "cat-electronics" },
    { name: "Home & Garden", icon: <Home />, desc: "Furniture, kitchenware, garden tools, and home decor.", id: "cat-home" },
    { name: "Textiles & Apparel", icon: <Shirt />, desc: "Workwear, sportswear, fabrics, and accessories.", id: "cat-textiles" },
    { name: "Industrial Components", icon: <Zap />, desc: "Metal casting, injection molding, CNC parts, and hardware.", id: "cat-industrial" },
    { name: "Kitchen & F&B Supplies", icon: <Coffee />, desc: "Commercial kitchen equipment and packaging materials.", id: "cat-kitchen" },
    { name: "Toys & Baby Products", icon: <Baby />, desc: "Plush toys, educational games, and nursery items.", id: "cat-toys" },
    { name: "Fitness & Sport Equip", icon: <Dumbbell />, desc: "Gym equipment, outdoors gear, and home workout kits.", id: "cat-fitness" },
    { name: "Packaging & Printing", icon: <Package />, desc: "Custom boxes, sustainable packaging, and labeling.", id: "cat-packaging" }
  ];

  return (
    <div className="bg-white">
      <section className="bg-slate-900 py-24 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Expertise Across Categories</h1>
          <p className="text-slate-400 max-w-2xl mx-auto">We aren't limited to one niche. Our network spans across China's major manufacturing hubs, giving us access to specialized suppliers in every sector.</p>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((cat, idx) => (
            <div key={idx} className="group cursor-pointer">
              <div className="h-64 rounded-2xl overflow-hidden mb-6 relative">
                <img 
                  data-strk-img-id={`prod-cat-img-${idx}`}
                  data-strk-img={`[${cat.id}-title] [${cat.id}-desc]`}
                  data-strk-img-ratio="1x1"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={cat.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent flex flex-col justify-end p-6">
                  <div className="text-amber-500 mb-2">{cat.icon}</div>
                  <h3 id={`${cat.id}-title`} className="text-white font-bold text-xl">{cat.name}</h3>
                </div>
              </div>
              <p id={`${cat.id}-desc`} className="text-slate-600 text-sm">{cat.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Specialty Hubs */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="bg-white p-12 rounded-3xl shadow-sm border border-slate-100 flex flex-col lg:flex-row items-center gap-16">
            <div className="flex-1">
              <h2 className="text-3xl font-bold mb-8 italic text-slate-900 border-l-4 border-amber-500 pl-6">Deep Presence in Coastal Hubs</h2>
              <div className="space-y-6">
                {[
                  { city: "Shenzhen / Dongguan", area: "Electronics & Tech", desc: "The world's electronics capital. We have local agents ready for on-site audits within hours." },
                  { city: "Ningbo / Hangzhou", area: "Industrial & Auto Parts", desc: "Major port city specializing in heavy machinery and precise components." },
                  { city: "Guangzhou / Foshan", area: "Apparel & Furniture", desc: "Global hub for textiles, upholstery, and modern home furnishings." }
                ].map((hub, idx) => (
                  <div key={idx}>
                    <h3 className="font-bold text-lg text-slate-800">{hub.city} — <span className="text-amber-600 uppercase text-xs tracking-widest">{hub.area}</span></h3>
                    <p className="text-slate-600 text-sm mt-1">{hub.desc}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="w-full lg:w-96 rounded-2xl overflow-hidden shadow-xl border-8 border-slate-50">
               <img 
                  data-strk-img-id="china-map-viz"
                  data-strk-img="map of china manufacturing coastal regions"
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt="China Manufacturing Hubs"
                  className="w-full h-full object-cover"
                />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;
