import React from 'react';
import ProductGrid from '@/components/ProductGrid';
import ContactForm from '@/components/ContactForm';

const Products = () => {
  return (
    <div className="animate-in fade-in duration-700">
      <div className="bg-brand-primary py-20 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6">OUR MACHINERY</h1>
          <p className="text-slate-400 text-lg max-w-2xl">
            Explore our comprehensive line of sheet metal folders, designed for maximum precision, speed, and versatility in modern fabrication.
          </p>
        </div>
      </div>
      
      <ProductGrid />
      
      <div className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-brand-primary mb-12">TECHNICAL COMPARISON</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse border border-slate-200">
              <thead className="bg-slate-50">
                <tr>
                  <th className="p-4 border border-slate-200 font-bold uppercase tracking-wider text-sm">Model</th>
                  <th className="p-4 border border-slate-200 font-bold uppercase tracking-wider text-sm">Max Length</th>
                  <th className="p-4 border border-slate-200 font-bold uppercase tracking-wider text-sm">Max Thickness</th>
                  <th className="p-4 border border-slate-200 font-bold uppercase tracking-wider text-sm">Type</th>
                </tr>
              </thead>
              <tbody className="text-slate-600">
                <tr>
                  <td className="p-4 border border-slate-200 font-medium">Artitect DF-3200</td>
                  <td className="p-4 border border-slate-200">3200mm</td>
                  <td className="p-4 border border-slate-200">2.0mm MS</td>
                  <td className="p-4 border border-slate-200 text-brand-accent font-bold">Double Folder</td>
                </tr>
                <tr className="bg-slate-50/50">
                  <td className="p-4 border border-slate-200 font-medium">Industrial SM-Folder 2500</td>
                  <td className="p-4 border border-slate-200">2500mm</td>
                  <td className="p-4 border border-slate-200">1.5mm MS</td>
                  <td className="p-4 border border-slate-200">Manual/Semi</td>
                </tr>
                <tr>
                  <td className="p-4 border border-slate-200 font-medium">CNC-Fold Master 4000</td>
                  <td className="p-4 border border-slate-200">4000mm</td>
                  <td className="p-4 border border-slate-200">3.0mm Al</td>
                  <td className="p-4 border border-slate-200">Automatic CNC</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <ContactForm />
    </div>
  );
};

export default Products;
