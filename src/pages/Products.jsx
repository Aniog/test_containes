import React from 'react';

export default function Products() {
  return (
    <div className="flex flex-col w-full py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-slate-900 mb-6">Products We Source</h1>
        <p className="text-xl text-slate-600 mb-12">We source a wide variety of consumer and industrial goods from reliable Chinese manufacturers.</p>
        
        <div className="grid md:grid-cols-3 gap-6">
           <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200">
             <h3 className="font-bold text-lg mb-2">Consumer Electronics</h3>
             <p className="text-slate-600 text-sm">Smart home devices, audio equipment, mobile accessories, and more.</p>
           </div>
           <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200">
             <h3 className="font-bold text-lg mb-2">Home & Garden</h3>
             <p className="text-slate-600 text-sm">Furniture, decor, kitchenware, and outdoor equipment.</p>
           </div>
           <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200">
             <h3 className="font-bold text-lg mb-2">Apparel & Textiles</h3>
             <p className="text-slate-600 text-sm">Clothing, bags, accessories, and raw textile materials.</p>
           </div>
        </div>
      </div>
    </div>
  );
}