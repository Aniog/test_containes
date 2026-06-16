import React from 'react';
import ProductCard from './ProductCard';

const products = [
  {
    title: 'Double Folding Machine',
    description: 'Our flagship double folding machine delivers unmatched precision for high-volume production environments. Engineered for continuous operation.',
    features: ['Dual folding heads', 'Up to 4mm capacity', 'CNC control system', 'Automatic material handling'],
  },
  {
    title: 'Double Folder',
    description: 'Compact yet powerful double folder designed for workshops requiring versatility without compromising on build quality or accuracy.',
    features: ['Space-efficient design', 'Quick setup times', 'Manual & semi-auto modes', 'Heavy-duty construction'],
  },
  {
    title: 'Sheet Metal Folder',
    description: 'Professional-grade sheet metal folder offering exceptional bending accuracy across a wide range of material thicknesses and types.',
    features: ['Precision angle control', 'Multiple tooling options', 'Ergonomic operation', 'Low maintenance design'],
  },
  {
    title: 'Sheet Metal Folding Machine',
    description: 'Advanced sheet metal folding machine with integrated safety systems and intelligent controls for modern fabrication facilities.',
    features: ['Touchscreen interface', 'Programmable sequences', 'Safety light curtains', 'Remote diagnostics'],
  },
  {
    title: 'Metal Folder',
    description: 'Reliable metal folder built for everyday workshop use. Delivers consistent results across aluminum, steel, and stainless applications.',
    features: ['All-metal construction', 'Adjustable back gauge', 'Foot pedal operation', 'Easy blade changes'],
  },
  {
    title: 'Metal Folder Machine',
    description: 'Industrial metal folder machine engineered for demanding production schedules. Combines speed, accuracy, and durability.',
    features: ['High-speed operation', 'Servo-driven positioning', 'Multi-axis control', 'Production monitoring'],
  },
  {
    title: 'Metal Folding Machine',
    description: 'Versatile metal folding machine suitable for both prototype work and production runs. The perfect balance of capability and value.',
    features: ['Wide material compatibility', 'Digital angle readout', 'Modular tooling system', 'Extended warranty available'],
  },
];

const Products = () => {
  return (
    <section id="products" className="py-20 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-1.5 mb-4 rounded-full bg-[#F8F6F1]">
            <span className="text-xs tracking-[2px] text-[#C5A46E] font-medium">OUR RANGE</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-semibold tracking-[-1px] text-[#0A1628] mb-4">
            Precision Folding Equipment
          </h2>
          <p className="text-lg text-[#2C3E50] max-w-2xl mx-auto">
            Each machine in our collection is crafted with meticulous attention to detail, ensuring years of reliable service.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product, index) => (
            <ProductCard key={index} {...product} />
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-sm text-[#6B7280] mb-4">Need a custom solution?</p>
          <a href="#contact" className="text-[#C5A46E] hover:text-[#0A1628] font-medium transition-colors inline-flex items-center gap-2">
            Speak with our engineering team →
          </a>
        </div>
      </div>
    </section>
  );
};

export default Products;