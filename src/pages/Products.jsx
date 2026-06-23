import React, { useEffect, useRef } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const categories = [
  { id: 'elec', name: 'Consumer Electronics', desc: 'Smartphones, wearables, audio gear, and accessories.', items: ['Smart Watches', 'Bluetooth Headphones', 'Power Banks', 'Home Security Cameras'] },
  { id: 'home', name: 'Home & Furniture', desc: 'Decor, kitchenware, furniture, and lighting.', items: ['LED Lighting', 'Storage Solutions', 'Kitchen Gadgets', 'Modular Furniture'] },
  { id: 'industrial', name: 'Industrial Machinery', desc: 'Manufacturing equipment, tools, and spare parts.', items: ['CNC Machines', 'Packaging Equipment', 'Hydraulic Tools', 'Solar Panels'] },
  { id: 'apparel', name: 'Apparel & Textiles', desc: 'Fashion, activewear, and industrial fabrics.', items: ['Yoga Wear', 'Casual Apparel', 'Workwear', 'Eco-friendly Fabrics'] },
  { id: 'building', name: 'Building Materials', desc: 'Flooring, hardware, and construction supplies.', items: ['Ceramic Tiles', 'Bathroom Fixtures', 'Aluminum Profiles', 'Safety Hardware'] },
  { id: 'auto', name: 'Auto Parts', desc: 'Accessories, replacement parts, and repair tools.', items: ['Dash Cams', 'Wheel Hubs', 'EV Chargers', 'Diagnostic Tools'] },
  { id: 'toys', name: 'Toys & Gifts', desc: 'Educational toys, plush, and promotional items.', items: ['STEM Toys', 'Wooden Toys', 'Custom Plush', 'Corporate Gifts'] },
  { id: 'kitchen', name: 'Kitchenware', desc: 'Cookware, appliances, and utensils.', items: ['Air Fryers', 'Silicone Bakeware', 'Knife Sets', 'Sustainable Cutlery'] }
];

export default function Products() {
  const containerRef = useRef(null);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, []);

  return (
    <div ref={containerRef} className="bg-white">
      {/* Header */}
      <section className="bg-slate-900 py-20 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Products We Source</h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto font-medium">
            Over a decade of experience across diverse industries. If it's made in China, we can find it for you.
          </p>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {categories.map((cat) => (
              <Card key={cat.id} className="overflow-hidden border-slate-100 hover:shadow-lg transition-shadow">
                <div className="grid grid-cols-1 sm:grid-cols-5 h-full">
                  <div className="sm:col-span-2 relative h-48 sm:h-full overflow-hidden">
                    <img 
                      data-strk-img-id={`cat-img-${cat.id}`}
                      data-strk-img={`[cat-title-${cat.id}] bulk wholesale products china`}
                      data-strk-img-ratio="2x3"
                      data-strk-img-width="400"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/xml' viewBox='0 0 1 1'/%3E"
                      alt={cat.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardContent className="sm:col-span-3 p-6 flex flex-col justify-between">
                    <div>
                      <h3 id={`cat-title-${cat.id}`} className="text-2xl font-bold text-slate-900 mb-2">{cat.name}</h3>
                      <p className="text-slate-600 text-sm mb-4 font-medium">{cat.desc}</p>
                      <div className="flex flex-wrap gap-2 mb-6">
                        {cat.items.map((item, i) => (
                          <span key={i} className="px-2 py-1 bg-slate-100 text-slate-600 text-xs rounded-md font-bold uppercase tracking-wider border border-slate-200">
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                    <Button variant="outline" size="sm" className="w-fit" asChild>
                      <Link to="/contact">Inquire About {cat.name}</Link>
                    </Button>
                  </CardContent>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Manufacturing */}
      <section className="py-20 bg-slate-50 border-y border-slate-100">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">OEM & ODM Solutions</h2>
            <p className="text-lg text-slate-600 mb-10 font-medium leading-relaxed">
              Looking to develop your own private label brand or a completely new invention? Our team specializes in custom manufacturing management. We help you with prototyping, tooling, and mass production while protecting your intellectual property.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <div className="p-6 bg-white rounded-xl shadow-sm border border-slate-200">
                <div className="text-amber-500 font-bold text-lg mb-2">Prototyping</div>
                <p className="text-sm text-slate-500 font-medium">From 3D designs to functional physical samples.</p>
              </div>
              <div className="p-6 bg-white rounded-xl shadow-sm border border-slate-200">
                <div className="text-amber-500 font-bold text-lg mb-2">Tooling</div>
                <p className="text-sm text-slate-500 font-medium">Managing mold creation and pre-production runs.</p>
              </div>
              <div className="p-6 bg-white rounded-xl shadow-sm border border-slate-200">
                <div className="text-amber-500 font-bold text-lg mb-2">Packaging</div>
                <p className="text-sm text-slate-500 font-medium">Custom retail packaging design and sourcing.</p>
              </div>
            </div>
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-white font-bold" asChild>
              <Link to="/contact">Discuss Your Custom Project</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
