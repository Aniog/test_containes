import React from 'react';
import ProductCard from './ProductCard';

const Products = ({ onQuoteClick }) => {
  const products = [
    {
      id: 'double-folding',
      title: 'Double Folding Machine',
      shortName: 'Double Folder',
      description: 'Our flagship double folding machine delivers unmatched precision for high-volume production. Engineered for continuous operation with minimal maintenance.',
      capacity: 'Up to 4mm',
      imgId: 'product-double-folding-8f2a9c',
      specs: [
        'Maximum folding length: 3200mm',
        'Sheet thickness: 0.5 - 4.0mm steel',
        'Dual servo drive system',
        'CNC backgauge with 6-axis control',
        'Touchscreen HMI interface'
      ]
    },
    {
      id: 'double-folder',
      title: 'Double Folder Pro',
      shortName: 'Double Folder Pro',
      description: 'The ultimate double folder for professional fabricators. Combines speed and accuracy with an intuitive control system that reduces setup time by 60%.',
      capacity: 'Up to 3mm',
      imgId: 'product-double-folder-pro-7b3d2e',
      specs: [
        'Maximum folding length: 2500mm',
        'Sheet thickness: 0.4 - 3.0mm',
        'Automatic tool change system',
        'Programmable folding sequences',
        'Integrated safety light curtains'
      ]
    },
    {
      id: 'sheet-metal-folder',
      title: 'Sheet Metal Folder',
      shortName: 'Sheet Metal Folder',
      description: 'Versatile sheet metal folder designed for workshops of all sizes. Delivers clean, consistent bends across a wide range of materials and thicknesses.',
      capacity: 'Up to 2.5mm',
      imgId: 'product-sheet-metal-folder-4c9e1f',
      specs: [
        'Maximum folding length: 2000mm',
        'Sheet thickness: 0.3 - 2.5mm',
        'Manual and semi-automatic modes',
        'Adjustable folding beam angle',
        'Compact footprint for small shops'
      ]
    },
    {
      id: 'sheet-metal-folding',
      title: 'Sheet Metal Folding Machine',
      shortName: 'Folding Machine',
      description: 'Heavy-duty sheet metal folding machine built for demanding industrial environments. Exceptional rigidity ensures perfect folds even on the longest sheets.',
      capacity: 'Up to 5mm',
      imgId: 'product-sheet-metal-folding-2a8f4d',
      specs: [
        'Maximum folding length: 4000mm',
        'Sheet thickness: 0.8 - 5.0mm steel',
        'Reinforced frame construction',
        'Hydraulic clamping system',
        'Remote diagnostics ready'
      ]
    },
    {
      id: 'metal-folder',
      title: 'Metal Folder Elite',
      shortName: 'Metal Folder',
      description: 'Precision metal folder engineered for architectural and decorative metalwork. Achieves flawless results on aluminum, copper, and stainless steel.',
      capacity: 'Up to 2mm',
      imgId: 'product-metal-folder-9d1b6c',
      specs: [
        'Maximum folding length: 3000mm',
        'Sheet thickness: 0.3 - 2.0mm',
        'Soft-touch clamping jaws',
        'Digital angle measurement',
        'Ideal for architectural panels'
      ]
    },
    {
      id: 'metal-folding',
      title: 'Metal Folding Machine',
      shortName: 'Metal Folding Machine',
      description: 'Robust metal folding machine for general fabrication. The workhorse of our lineup, trusted by fabricators for its reliability and straightforward operation.',
      capacity: 'Up to 3.5mm',
      imgId: 'product-metal-folding-5e7a2b',
      specs: [
        'Maximum folding length: 2800mm',
        'Sheet thickness: 0.5 - 3.5mm',
        'Quick-release tooling system',
        'Foot pedal operation option',
        'Low maintenance design'
      ]
    }
  ];

  return (
    <section id="products" className="py-20 md:py-28 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="uppercase tracking-[3px] text-xs font-semibold text-slate-500 mb-4">OUR MACHINES</div>
          <h2 className="text-5xl md:text-6xl font-semibold tracking-tighter text-slate-900 leading-none mb-6">
            Folding machines for every application.
          </h2>
          <p className="text-xl text-slate-600">
            From compact workshop models to heavy industrial systems, each ARTITECT machine is built to deliver 
            precision, reliability, and ease of use.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <ProductCard 
              key={product.id} 
              product={product} 
              onQuoteClick={onQuoteClick} 
            />
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <p className="text-slate-600 mb-4">Need a custom configuration or have specific requirements?</p>
          <button
            onClick={() => onQuoteClick()}
            className="inline-flex items-center gap-2 px-8 py-3.5 border-2 border-slate-900 text-slate-900 font-semibold rounded-xl hover:bg-slate-900 hover:text-white transition-all"
          >
            Speak with an Engineer
          </button>
        </div>
      </div>
    </section>
  );
};

export default Products;
