import React, { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { ArrowUpRight } from 'lucide-react';

const products = [
  {
    id: 'p1',
    name: 'Artitect Double Folder X1',
    type: 'Double Folding Machine',
    desc: 'High-precision double folding for complex architectural profiles.',
    imgId: 'product-img-1'
  },
  {
    id: 'p2',
    name: 'Precision Sheet Folder S5',
    type: 'Sheet Metal Folding Machine',
    desc: 'Versatile folding solutions for varied sheet thicknesses.',
    imgId: 'product-img-2'
  },
  {
    id: 'p3',
    name: 'Industrial Metal Folder',
    type: 'Metal Folder Machine',
    desc: 'Heavy-duty performance for large scale industrial operations.',
    imgId: 'product-img-3'
  }
];

const ProductGrid = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section id="products" className="py-24 bg-slate-50" ref={containerRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold tracking-widest text-amber-600 uppercase mb-3">Our Equipment</h2>
          <h3 className="text-3xl md:text-5xl font-bold tracking-tighter text-slate-950">
            Mastering Every <span className="text-amber-600">Curve.</span>
          </h3>
          <p className="mt-4 text-slate-500 max-w-2xl mx-auto">
            Discover our range of advanced folding machines engineered for precision and durability.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((p) => (
            <div key={p.id} className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100">
              <div className="aspect-[4/3] overflow-hidden">
                <img 
                  data-strk-img-id={p.imgId}
                  data-strk-img={`[prod-title-${p.id}] [prod-type-${p.id}] machine industrial`}
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  alt={p.name}
                />
              </div>
              <div className="p-8">
                <span id={`prod-type-${p.id}`} className="text-xs font-bold text-amber-600 uppercase tracking-wider">{p.type}</span>
                <h4 id={`prod-title-${p.id}`} className="text-xl font-bold text-slate-950 mt-2 mb-3">{p.name}</h4>
                <p className="text-slate-500 text-sm leading-relaxed mb-6">{p.desc}</p>
                <button className="flex items-center gap-2 text-slate-950 font-bold text-sm hover:text-amber-600 transition-colors">
                  View Specifications <ArrowUpRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;
