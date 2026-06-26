import React from 'react';
import { Cpu, Settings, Wrench, Cog, Shuffle, Layers } from 'lucide-react';
import ProductCard from './ProductCard';

const products = [
  {
    name: 'Double Folding Machine',
    icon: <Cpu className="w-8 h-8 text-bronze-light" />,
    category: 'Industrial Series',
    description: 'High-speed double folding machine engineered for precision bending of sheet metal with dual-axis control, delivering consistent results across large production runs.',
    features: [
      'Dual-axis synchronized folding',
      'Up to 12m/min folding speed',
      'CNC programmable control',
      'Auto thickness compensation',
    ],
  },
  {
    name: 'Double Folder',
    icon: <Shuffle className="w-8 h-8 text-bronze-light" />,
    category: 'Industrial Series',
    description: 'Advanced double folder system designed for complex multi-bend operations. Ideal for box trays, panels, and enclosures requiring multiple folds in a single setup.',
    features: [
      'Multi-step bend programming',
      'Servo-electric drive system',
      'Tool-less quick changeover',
      'Integrated back gauge',
    ],
  },
  {
    name: 'Sheet Metal Folder',
    icon: <Layers className="w-8 h-8 text-bronze-light" />,
    category: 'Professional Series',
    description: 'Versatile sheet metal folder with precision-ground clamping beams and swivel bending wings, perfect for architectural sheet metal and light industrial fabrication.',
    features: [
      'Precision-ground clamping beams',
      'Adjustable bending angle stops',
      'Manual or hydraulic models',
      'Segmentally grouped clamping',
    ],
  },
  {
    name: 'Sheet Metal Folding Machine',
    icon: <Settings className="w-8 h-8 text-bronze-light" />,
    category: 'Professional Series',
    description: 'Heavy-duty sheet metal folding machine with hydraulic clamping and CNC back gauge automation, built for high-volume production environments.',
    features: [
      'Hydraulic clamping system',
      'CNC back gauge automation',
      'Touchscreen HMI control',
      'Safety light curtain',
    ],
  },
  {
    name: 'Metal Folder',
    icon: <Wrench className="w-8 h-8 text-bronze-light" />,
    category: 'Essential Series',
    description: 'Reliable metal folder combining strength with ease of use, suitable for workshops and fabrication shops handling diverse metal thicknesses and profiles.',
    features: [
      'Robust steel frame construction',
      'Adjustable folding speed',
      'Emergency stop system',
      'CE certified safety',
    ],
  },
  {
    name: 'Metal Folding Machine',
    icon: <Cog className="w-8 h-8 text-bronze-light" />,
    category: 'Essential Series',
    description: 'Compact yet powerful metal folding machine designed for precision and durability in smaller workshops, delivering professional-grade folds on various metals.',
    features: [
      'Compact footprint design',
      'High-torque folding beam',
      'Digital angle display',
      'Quick-release clamping',
    ],
  },
];

export default function ProductsSection() {
  return (
    <section id="products" className="py-20 md:py-28 bg-warm-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-bronze font-semibold text-sm tracking-widest uppercase mb-4">
            Our Product Range
          </span>
          <h2 className="font-heading text-4xl md:text-5xl text-navy-900 mb-6">
            Precision Folding Machinery
          </h2>
          <p className="text-navy-600 text-lg leading-relaxed">
            From double folding machines to compact metal folders, every ARTITECT machine
            is built with precision engineering and industrial-grade durability.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {products.map((product, index) => (
            <ProductCard key={product.name} product={product} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}