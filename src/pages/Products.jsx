import React from 'react';
import { Smartphone, Laptop, Sofa, Shirt, Hammer, Car, Watch, Coffee } from 'lucide-react';

const Products = () => {
  const categories = [
    { name: "Electronics & Gadgets", icon: Smartphone, desc: "Smart home devices, portable accessories, and consumer electronics.", img: "consumer electronics smarthome gadgets mass production factory" },
    { name: "Furniture & Decor", icon: Sofa, desc: "Modern home furniture, office solutions, and decorative accessories.", img: "modern designer furniture warehouse sofas chairs decor" },
    { name: "Apparel & Textiles", icon: Shirt, desc: "Custom garments, fabrics, and specialized industrial textiles.", img: "clothing factory textile production sewing lines apparel" },
    { name: "Building Materials", icon: Hammer, desc: "Flooring, tiles, lighting fixtures, and structural components.", img: "building materials construction supplies tiles flooring warehouse" },
    { name: "Automotive Parts", icon: Car, desc: "Aftermarket components, performance parts, and EV accessories.", img: "car automotive spare parts factory production line components" },
    { name: "Precision Tools", icon: Laptop, desc: "CNC components, industrial machinery parts, and specialized tools.", img: "industrial precision tools cnc machinery factory engineering" },
    { name: "Kitchen & Dining", icon: Coffee, desc: "Small appliances, cookware, and commercial kitchen equipment.", img: "kitchenware appliances cookware products display" },
    { name: "Luxury Goods", icon: Watch, desc: "Timepieces, leather accessories, and jewelry components.", img: "luxury watches jewelry accessories premium products" }
  ];

  return (
    <div className="bg-white">
      {/* Header */}
      <section className="bg-slate-50 py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6">Products We <span className="text-yellow-600">Source</span></h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            From consumer electronics to heavy industrial equipment, we have deep category expertise across China's major manufacturing hubs.
          </p>
        </div>
      </section>

      {/* Grid */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((cat, i) => (
            <div key={i} className="group relative bg-white rounded-3xl overflow-hidden border border-slate-200 hover:border-yellow-500 transition-all shadow-sm hover:shadow-xl">
              <div className="h-48 overflow-hidden bg-slate-100">
                <img 
                  data-strk-img-id={`cat-img-${i}`}
                  data-strk-img={cat.img}
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="400"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-80 group-hover:opacity-100"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 3'/%3E"
                  alt={cat.name}
                />
              </div>
              <div className="p-6">
                <div className="w-12 h-12 bg-slate-900 rounded-xl flex items-center justify-center text-yellow-500 mb-4 group-hover:-translate-y-2 transition-transform">
                  <cat.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">{cat.name}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{cat.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Hubs Section */}
      <section className="py-24 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 flex flex-col lg:row items-center gap-16">
           <div className="lg:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold mb-8">Strategically Located Near <span className="text-yellow-500">China's Hubs</span></h2>
              <div className="space-y-6">
                 <div>
                    <h4 className="font-bold text-white text-lg">Pearl River Delta (Shenzhen, Guangzhou, Dongguan)</h4>
                    <p className="text-slate-400 text-sm">Consumer electronics, apparel, and hardware manufacturing center of the world.</p>
                 </div>
                 <div className="border-t border-slate-800 pt-6">
                    <h4 className="font-bold text-white text-lg">Yangtze River Delta (Shanghai, Ningbo, Suzhou)</h4>
                    <p className="text-slate-400 text-sm">Industrial machinery, household appliances, and advanced components.</p>
                 </div>
                 <div className="border-t border-slate-800 pt-6">
                    <h4 className="font-bold text-white text-lg">Northern Industrial Belt (Qingdao, Tianjin, Beijing)</h4>
                    <p className="text-slate-400 text-sm">Heavy industry, chemicals, building materials, and automotive parts.</p>
                 </div>
              </div>
           </div>
           <div className="lg:w-1/2">
              <div 
                className="w-full h-[400px] rounded-3xl bg-slate-800 relative overflow-hidden"
                data-strk-bg-id="china-map-bg"
                data-strk-bg="map of china highlighting manufacturing hubs shenzhen guangzhou shanghai ningbo qingdao"
                data-strk-bg-ratio="4x3"
                data-strk-bg-width="800"
              >
                  <div className="absolute inset-0 bg-slate-900/40 backdrop-blur-[2px]" />
                  <div className="absolute inset-0 flex items-center justify-center p-8 text-center">
                     <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20">
                        <p className="text-white font-bold">Network covering 150+ industrial zones across China.</p>
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