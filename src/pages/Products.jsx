import React, { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { Package, Smartphone, Home, Drill, Shirt, ShoppingBag } from 'lucide-react';
import InquiryForm from '@/components/forms/InquiryForm';

const Products = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  const categories = [
    { name: 'Consumer Electronics', icon: Smartphone, query: 'laptops smartphones gadgets manufacturing' },
    { name: 'Home & Kitchen', icon: Home, query: 'kitchenware furniture home decor' },
    { name: 'Apparel & Fashion', icon: Shirt, query: 'fashion clothing garment manufacturing' },
    { name: 'Industrial Equipment', icon: Drill, query: 'industrial machinery tools factory' },
    { name: 'Packaging & Printing', icon: Package, query: 'box manufacturing printing packaging' },
    { name: 'Beauty & Personal Care', icon: ShoppingBag, query: 'cosmetics beauty products manufacturing' },
  ];

  return (
    <div ref={containerRef}>
      <section className="bg-slate-900 py-20 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Industries We Serve</h1>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            We have specialized sourcing teams for various categories, ensuring we find you manufacturers with specific industry expertise.
          </p>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {categories.map((cat, idx) => (
              <div key={idx} className="group border border-slate-100 rounded-3xl overflow-hidden hover:shadow-2xl transition-all">
                <div className="h-64 overflow-hidden">
                  <img 
                    data-strk-img-id={`cat-img-${idx}`}
                    data-strk-img={`${cat.query}`}
                    data-strk-img-ratio="16x9"
                    data-strk-img-width="800"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 9'/%3E"
                    alt={cat.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
                <div className="p-8">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-2 bg-blue-50 text-blue-600 rounded-lg">
                      <cat.icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-2xl font-bold text-slate-800">{cat.name}</h3>
                  </div>
                  <p className="text-slate-600 mb-6">
                    Professional sourcing for {cat.name.toLowerCase()}, covering top manufacturers in key industrial belts like Shenzhen, Ningbo, and Guangzhou.
                  </p>
                  <ul className="text-sm text-slate-500 font-medium space-y-2">
                    <li className="flex items-center gap-2">• Strict material compliance</li>
                    <li className="flex items-center gap-2">• Competitive price benchmarks</li>
                    <li className="flex items-center gap-2">• ISO certified suppliers only</li>
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4 font-serif">Don't See Your Product?</h2>
            <p className="text-slate-600">Our network is vast. Submit an inquiry with your exact product specifications and we'll let you know if we can help.</p>
          </div>
          <InquiryForm />
        </div>
      </section>
    </div>
  );
};

export default Products;
