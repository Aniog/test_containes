import React from 'react';
import { Truck, RotateCcw, ShieldCheck, Sparkles } from 'lucide-react';

const TrustBar = () => {
  return (
    <div className="bg-stone-100 border-b border-stone-200 py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center md:text-left divide-x divide-transparent md:divide-stone-300">
          
          <div className="flex flex-col md:flex-row items-center justify-center space-y-2 md:space-y-0 md:space-x-3 px-2">
            <Truck className="h-5 w-5 text-stone-600" />
            <span className="text-xs uppercase tracking-wider text-stone-700 font-medium">Free Worldwide Shipping</span>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-center space-y-2 md:space-y-0 md:space-x-3 px-2">
            <RotateCcw className="h-5 w-5 text-stone-600" />
            <span className="text-xs uppercase tracking-wider text-stone-700 font-medium">30-Day Returns</span>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-center space-y-2 md:space-y-0 md:space-x-3 px-2">
            <Sparkles className="h-5 w-5 text-stone-600" />
            <span className="text-xs uppercase tracking-wider text-stone-700 font-medium">18K Gold Plated</span>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-center space-y-2 md:space-y-0 md:space-x-3 px-2">
            <ShieldCheck className="h-5 w-5 text-stone-600" />
            <span className="text-xs uppercase tracking-wider text-stone-700 font-medium">Hypoallergenic</span>
          </div>

        </div>
      </div>
    </div>
  );
};

export default TrustBar;
