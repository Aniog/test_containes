import React from 'react';
import ProductGrid from '../components/ProductGrid';
import { Search } from 'lucide-react';

const Products = () => {
  return (
    <div className="pb-24">
      {/* Header */}
      <section className="bg-slate-900 text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h1 className="text-4xl md:text-6xl font-black tracking-tight">Industrial Portfolio</h1>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto font-medium leading-relaxed">
            Discover our world-class double folding machines and versatile sheet metal folders engineered for high-performance architectural work.
          </p>
        </div>
      </section>

      {/* Filter/Search Bar */}
      <section className="bg-white border-b border-slate-100 sticky top-20 z-40 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row gap-6 items-center justify-between">
            <div className="flex gap-4 overflow-x-auto pb-2 md:pb-0 scrollbar-hide max-w-full">
               {['All Products', 'Double Folders', 'Sheet Metal Folders', 'CNC Machines'].map((tab, i) => (
                 <button 
                   key={i} 
                   className={`whitespace-nowrap px-6 py-2 rounded-full text-sm font-black transition-all ${i === 0 ? 'bg-slate-900 text-white' : 'text-slate-500 hover:bg-slate-50'}`}
                 >
                   {tab}
                 </button>
               ))}
            </div>
            
            <div className="relative w-full md:w-96">
               <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
               <input 
                 type="text" 
                 placeholder="Search machinery..."
                 className="w-full bg-slate-50 border border-slate-200 rounded-full py-2.5 pl-11 pr-4 focus:outline-none focus:ring-2 focus:ring-slate-900 text-sm font-medium"
               />
            </div>
        </div>
      </section>

      {/* Grid */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ProductGrid />
        </div>
      </section>
      
      {/* Tech Support Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
         <div className="bg-amber-50 rounded-[2rem] p-12 border border-amber-100 flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="space-y-4 text-center md:text-left">
               <h3 className="text-3xl font-black text-slate-900">Need Custom Specifications?</h3>
               <p className="text-lg text-slate-600 font-medium">Our engineers can build bespoke folding solutions tailored to your unique architectural requirements.</p>
            </div>
            <button className="bg-slate-900 text-white px-10 py-5 rounded-2xl font-black shadow-xl shadow-slate-900/20 whitespace-nowrap hover:scale-105 transition-transform">
               Consult an Engineer
            </button>
         </div>
      </section>
    </div>
  );
};

export default Products;
