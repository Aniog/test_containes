import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Services() {
  return (
    <div className="flex flex-col w-full py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-slate-900 mb-6">Our Services</h1>
        <p className="text-xl text-slate-600 mb-12">Comprehensive sourcing solutions tailored for global buyers.</p>
        
        <div className="space-y-6">
          <div className="bg-white p-8 rounded-lg shadow-sm border border-slate-200">
             <h2 className="text-2xl font-bold text-blue-900 mb-4">Supplier Verification</h2>
             <p className="text-slate-600 mb-4">We conduct thorough background checks and on-site factory audits to ensure your suppliers are legitimate, capable, and reliable.</p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-sm border border-slate-200">
             <h2 className="text-2xl font-bold text-blue-900 mb-4">Quality Control</h2>
             <p className="text-slate-600 mb-4">Our professional inspectors check your products during production and before shipment to guarantee they meet your exact specifications.</p>
          </div>
           <div className="bg-white p-8 rounded-lg shadow-sm border border-slate-200">
             <h2 className="text-2xl font-bold text-blue-900 mb-4">Logistics & Shipping</h2>
             <p className="text-slate-600 mb-4">We handle warehousing, consolidation, export documentation, and arrange sea or air freight to deliver your goods efficiently.</p>
          </div>
        </div>
        
        <div className="mt-12">
           <Link to="/contact" className="inline-flex items-center text-sky-600 font-semibold hover:text-sky-700">
             Discuss your specific needs <ArrowRight className="ml-2 w-5 h-5" />
           </Link>
        </div>
      </div>
    </div>
  );
}