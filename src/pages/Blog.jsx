import React from 'react';

export default function Blog() {
  return (
    <div className="flex flex-col w-full py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-slate-900 mb-6">Sourcing Insights</h1>
        <p className="text-xl text-slate-600 mb-12">Expert advice on importing from China.</p>
        
        <div className="grid md:grid-cols-2 gap-8">
           <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200">
             <div className="text-sm text-sky-600 font-semibold mb-2">Guide</div>
             <h2 className="text-xl font-bold text-slate-900 mb-2">How to Verify a Chinese Supplier</h2>
             <p className="text-slate-600 mb-4">Learn the essential steps to ensure you are dealing with a real factory and not a trading company or scammer.</p>
           </div>
        </div>
      </div>
    </div>
  );
}