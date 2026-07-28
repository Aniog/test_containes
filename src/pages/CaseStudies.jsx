import React from 'react';

export default function CaseStudies() {
  return (
    <div className="flex flex-col w-full py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-slate-900 mb-6">Case Studies</h1>
        <p className="text-xl text-slate-600 mb-12">How we've helped international buyers succeed.</p>
        
        <div className="space-y-8">
           <div className="bg-white p-8 rounded-lg shadow-sm border border-slate-200">
             <h2 className="text-2xl font-bold text-blue-900 mb-2">Cost Reduction for US Retailer</h2>
             <p className="text-slate-600 mb-4">Helped a home goods retailer reduce sourcing costs by 20% while maintaining product quality by finding a new verified manufacturer in Zhejiang province.</p>
           </div>
        </div>
      </div>
    </div>
  );
}