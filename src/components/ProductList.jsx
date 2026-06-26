import React, { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { Search } from 'lucide-react';

const products = [
  {
    id: 'double-folding',
    title: 'Double Folding Machine',
    description: 'Advanced dual-sided folding for complex architectural profiles with unmatched speed.',
    specs: ['Max Length: 6000mm', 'Thickness: Up to 3.0mm', 'Automated Dual Bend'],
    imgId: 'prod-1'
  },
  {
    id: 'sheet-metal-folder',
    title: 'Precision Sheet Metal Folder',
    description: 'Versatile folding solution for heavy-duty metal sheets with high precision controls.',
    specs: ['CNC Integration', 'Safety Systems', 'Heavy Duty Frame'],
    imgId: 'prod-2'
  },
  {
    id: 'metal-folding-cnc',
    title: 'CNC Metal Folding System',
    description: 'Fully automated machine for high-volume production with intuitive touchscreen interface.',
    specs: ['Cloud Diagnostics', 'Quick-Change Tooling', 'Energy Efficient'],
    imgId: 'prod-3'
  }
];

const ProductList = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section id="products" className="py-24 bg-brand-light" ref={containerRef}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 id="products-title" className="text-4xl md:text-5xl text-brand-dark mb-4 uppercase tracking-tight">Our <span className="text-brand-gold italic text-3xl lowercase">folding</span> Solutions</h2>
          <p id="products-subtitle" className="text-brand-gray/70 max-w-2xl mx-auto uppercase tracking-[0.2em] text-xs font-bold">
            Pioneering technology in metal fabrication
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          {products.map((product) => (
            <div key={product.id} className="group bg-white border border-brand-dark/5 shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col">
              <div className="relative overflow-hidden aspect-[4/3]">
                <img 
                  data-strk-img-id={product.imgId}
                  data-strk-img={`[${product.id}-desc] [${product.id}-title] industrial machinery metal folding`}
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={product.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-brand-dark/20 group-hover:bg-brand-dark/0 transition-colors" />
              </div>
              <div className="p-8 flex-grow flex flex-col">
                <h3 id={`${product.id}-title`} className="text-2xl font-serif mb-4 text-brand-dark">{product.title}</h3>
                <p id={`${product.id}-desc`} className="text-brand-gray/80 text-sm mb-6 leading-relaxed">
                  {product.description}
                </p>
                <div className="mt-auto space-y-2">
                  {product.specs.map(spec => (
                    <div key={spec} className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-brand-gold">
                      <div className="w-1 h-1 bg-brand-gold rounded-full" />
                      {spec}
                    </div>
                  ))}
                </div>
                <button className="mt-8 w-full border border-brand-dark px-6 py-3 text-xs font-bold uppercase tracking-widest hover:bg-brand-dark hover:text-white transition-all">
                  Technical Specs
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductList;
