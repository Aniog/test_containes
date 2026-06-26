import React from 'react';
import { Settings, Layers, Maximize2, Zap, Wrench, Award } from 'lucide-react';
import ProductCard from './ProductCard';

const Products = ({ onRequestQuote }) => {
  const products = [
    {
      name: 'Double Folding Machine Pro',
      description: 'Our flagship model featuring dual folding heads for maximum productivity. Ideal for high-volume manufacturing operations.',
      icon: Settings,
      specs: [
        { label: 'Max Thickness', value: '6mm' },
        { label: 'Working Width', value: '4000mm' },
        { label: 'Folding Angle', value: '0-180°' },
        { label: 'Motor Power', value: '15kW' },
      ],
    },
    {
      name: 'Double Folder Elite',
      description: 'Advanced double folder with CNC controls and automated material handling. Perfect for precision work and complex geometries.',
      icon: Layers,
      specs: [
        { label: 'Max Thickness', value: '4mm' },
        { label: 'Working Width', value: '3200mm' },
        { label: 'Folding Angle', value: '0-150°' },
        { label: 'Motor Power', value: '11kW' },
      ],
    },
    {
      name: 'Sheet Metal Folder HD',
      description: 'Heavy-duty sheet metal folder designed for demanding industrial applications. Exceptional build quality and reliability.',
      icon: Maximize2,
      specs: [
        { label: 'Max Thickness', value: '8mm' },
        { label: 'Working Width', value: '5000mm' },
        { label: 'Folding Angle', value: '0-135°' },
        { label: 'Motor Power', value: '22kW' },
      ],
    },
    {
      name: 'Sheet Metal Folding Machine Compact',
      description: 'Space-efficient design without compromising on performance. Perfect for workshops with limited floor space.',
      icon: Zap,
      specs: [
        { label: 'Max Thickness', value: '3mm' },
        { label: 'Working Width', value: '2500mm' },
        { label: 'Folding Angle', value: '0-160°' },
        { label: 'Motor Power', value: '7.5kW' },
      ],
    },
    {
      name: 'Metal Folder Industrial',
      description: 'Robust metal folder built for continuous operation. Features reinforced frame and heavy-duty components.',
      icon: Wrench,
      specs: [
        { label: 'Max Thickness', value: '10mm' },
        { label: 'Working Width', value: '6000mm' },
        { label: 'Folding Angle', value: '0-120°' },
        { label: 'Motor Power', value: '30kW' },
      ],
    },
    {
      name: 'Metal Folding Machine Precision',
      description: 'Ultra-precise metal folding machine with digital readout and fine adjustment controls. For applications requiring exceptional accuracy.',
      icon: Award,
      specs: [
        { label: 'Max Thickness', value: '2mm' },
        { label: 'Working Width', value: '2000mm' },
        { label: 'Folding Angle', value: '0-180°' },
        { label: 'Motor Power', value: '5.5kW' },
      ],
    },
  ];

  return (
    <section id="products" className="py-20 bg-[#f8f7f4]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-[#c5a46e] font-semibold tracking-wider text-sm">OUR RANGE</span>
          <h2 className="text-4xl font-bold tracking-tight text-[#1a1f2e] mt-4 mb-4">
            Premium Folding Solutions
          </h2>
          <p className="text-xl text-[#4a5568] max-w-2xl mx-auto">
            Each machine in our lineup is engineered to deliver exceptional performance and reliability for your specific needs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <ProductCard
              key={index}
              product={product}
              onRequestQuote={onRequestQuote}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;