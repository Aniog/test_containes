import React, { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { ArrowRight } from 'lucide-react';

const productsList = [
  {
    id: 'double-folder-pro',
    title: 'Double Folder Pro',
    category: 'Double Folding Machine',
    description: 'Our most advanced double folding machine, designed for high-volume automated production lines requiring precise bi-directional bends.',
    specs: ['Max Length: 4000mm', 'Max Thickness: 3.0mm (Steel)', 'Control: AutoTouch 15"'],
    imgQuery: 'industrial automated double folding machine'
  },
  {
    id: 'sheet-master-series',
    title: 'SheetMaster Series',
    category: 'Sheet Metal Folder',
    description: 'The elegant solution for complex profiles. User-friendly software takes the guesswork out of difficult sheet metal folding operations.',
    specs: ['Max Length: 3200mm', 'Max Thickness: 2.5mm (Steel)', 'Control: SmartFold UI'],
    imgQuery: 'sheet metal manufacturing precision machinery'
  },
  {
    id: 'heavy-duty-metal-builder',
    title: 'HeavyDuty MetalBuilder',
    category: 'Metal Folder Machine',
    description: 'Built like a tank but handles like a sports car. This folding machine tackles the thickest materials with ease and precision.',
    specs: ['Max Length: 3000mm', 'Max Thickness: 4.0mm (Steel)', 'Control: RobustTouch 12"'],
    imgQuery: 'heavy duty metal working factory machine'
  },
  {
    id: 'agile-folder-lite',
    title: 'Agile Folder Lite',
    category: 'Metal Folding Machine',
    description: 'Compact, elegant, and highly responsive. Perfect for smaller shops needing high accuracy without the massive footprint.',
    specs: ['Max Length: 2000mm', 'Max Thickness: 1.5mm (Steel)', 'Control: QuickBend App'],
    imgQuery: 'compact industrial workshop tool machine'
  }
];

const Products = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <div ref={containerRef} className="bg-slate-50 min-h-screen pb-24">
      {/* Header */}
      <div className="bg-slate-900 py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 id="products-page-title" className="text-4xl md:text-5xl font-bold text-white mb-4">Our Machines</h1>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            Discover our collection of elegant, powerful, and intuitive folding machinery. Built for the modern factory.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 text-slate-800">
        <div className="space-y-24">
          {productsList.map((product, index) => (
            <div key={product.id} className={`flex flex-col ${index % 2 !== 0 ? 'md:flex-row-reverse' : 'md:flex-row'} gap-12 items-center bg-white p-8 md:p-12 shadow-sm border border-slate-100`}>
              {/* Image Side */}
              <div className="w-full md:w-1/2">
                <div className="aspect-[4/3] bg-slate-200 overflow-hidden relative group">
                  <img
                    data-strk-img-id={`product-${product.id}`}
                    data-strk-img={`[prod-title-${product.id}] ${product.imgQuery}`}
                    data-strk-img-ratio="4x3"
                    data-strk-img-width="800"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={product.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
              
              {/* Content Side */}
              <div className="w-full md:w-1/2 flex flex-col justify-center">
                <span className="text-blue-600 font-bold uppercase tracking-widest text-sm mb-2 block">
                  {product.category}
                </span>
                <h2 id={`prod-title-${product.id}`} className="text-3xl font-bold text-slate-900 mb-4">
                  {product.title}
                </h2>
                <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                  {product.description}
                </p>
                
                <h3 className="font-bold text-slate-900 mb-3 uppercase tracking-wider text-sm">Key Specifications</h3>
                <ul className="space-y-2 mb-8">
                  {product.specs.map((spec, i) => (
                    <li key={i} className="flex items-center text-slate-600">
                      <div className="w-2 h-2 bg-blue-500 mr-3"></div>
                      {spec}
                    </li>
                  ))}
                </ul>

                <button className="flex items-center text-slate-900 font-bold hover:text-blue-600 transition-colors group self-start uppercase tracking-wider">
                  Request Quote <ArrowRight className="ml-2 h-5 w-5 transform group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
