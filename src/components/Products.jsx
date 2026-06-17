import React from 'react';
import ProductCard from './ProductCard';

const Products = ({ onRequestQuote }) => {
  const products = [
    {
      id: 1,
      name: "Double Folding Machine",
      category: "HEAVY DUTY",
      description: "Our flagship double folding machine delivers unmatched precision for high-volume production environments. Built for continuous operation with exceptional repeatability.",
      specs: ["Max thickness: 4mm", "Working length: 3200mm", "Folding angle: 0-180°", "Motor: 7.5 kW"],
      features: ["Dual-drive folding beam", "CNC backgauge system", "Touchscreen HMI control", "Automatic crowning compensation"]
    },
    {
      id: 2,
      name: "Double Folder Pro",
      category: "INDUSTRIAL",
      description: "The Double Folder Pro combines power and finesse. Ideal for fabricators requiring versatility across a wide range of materials and thicknesses.",
      specs: ["Max thickness: 3mm", "Working length: 2500mm", "Folding angle: 0-180°", "Motor: 5.5 kW"],
      features: ["Segmented upper beam", "Quick-change tooling", "Programmable folding sequences", "Safety light curtains"]
    },
    {
      id: 3,
      name: "Sheet Metal Folder",
      category: "STANDARD",
      description: "A robust and reliable sheet metal folder designed for workshops that demand consistent results without complexity. Easy to operate and maintain.",
      specs: ["Max thickness: 2.5mm", "Working length: 2000mm", "Folding angle: 0-135°", "Motor: 3 kW"],
      features: ["Manual & powered options", "Adjustable clamping pressure", "Precision angle stops", "Compact footprint"]
    },
    {
      id: 4,
      name: "Sheet Metal Folding Machine",
      category: "PREMIUM",
      description: "Engineered for precision sheet metal work, this folding machine offers superior control and surface protection for finished parts that demand perfection.",
      specs: ["Max thickness: 2mm", "Working length: 3000mm", "Folding angle: 0-180°", "Motor: 4 kW"],
      features: ["Soft-touch clamping jaws", "Digital angle readout", "Foot pedal operation", "Anti-scratch surface protection"]
    },
    {
      id: 5,
      name: "Metal Folder",
      category: "COMPACT",
      description: "Our most compact metal folder, perfect for smaller workshops and job shops. Delivers professional-grade folding capability in a space-efficient design.",
      specs: ["Max thickness: 1.5mm", "Working length: 1500mm", "Folding angle: 0-135°", "Motor: 2.2 kW"],
      features: ["Bench or stand mountable", "Simple lever operation", "Interchangeable dies", "Low maintenance design"]
    },
    {
      id: 6,
      name: "Metal Folder Machine",
      category: "HEAVY DUTY",
      description: "A heavy-duty metal folder machine built for demanding applications. Exceptional rigidity and power for thick materials and long production runs.",
      specs: ["Max thickness: 5mm", "Working length: 4000mm", "Folding angle: 0-180°", "Motor: 11 kW"],
      features: ["Reinforced frame construction", "Hydraulic clamping system", "Extended backgauge travel", "Remote diagnostics ready"]
    },
    {
      id: 7,
      name: "Metal Folding Machine",
      category: "INDUSTRIAL",
      description: "The versatile metal folding machine that adapts to your workflow. Features advanced controls and tooling options for complex bending operations.",
      specs: ["Max thickness: 3.5mm", "Working length: 2800mm", "Folding angle: 0-180°", "Motor: 5.5 kW"],
      features: ["Multi-axis CNC control", "Tool library storage", "Collision detection", "Production scheduling integration"]
    }
  ];

  return (
    <section id="products" className="py-20 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-14">
          <div className="inline-block px-4 py-1 rounded-full bg-[#1a252f] text-white text-xs tracking-[2px] mb-4">OUR RANGE</div>
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tighter text-[#1a252f] mb-4">
            Precision Folding Machines
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Every machine is crafted with meticulous attention to detail, ensuring years of reliable, accurate performance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onRequestQuote={onRequestQuote}
            />
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-sm text-gray-500">
            All machines include installation support, operator training, and a comprehensive 5-year warranty.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Products;
