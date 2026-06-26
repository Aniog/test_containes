import React from 'react';
import { ArrowRight, Check } from 'lucide-react';

const Products = () => {
  const products = [
    {
      name: 'Double Folding Machine DF-2000',
      category: 'Double Folder',
      description: 'Our flagship double folding machine for high-volume production. Features synchronized dual-beam folding for perfect parallel bends on large panels.',
      specs: ['Max. folding length: 2000mm', 'Sheet thickness: up to 2.5mm steel', 'Dual motor drive system', 'CNC backgauge with 6-axis control'],
      ideal: 'HVAC, roofing, and architectural panels',
    },
    {
      name: 'Precision Sheet Metal Folder SF-1500',
      category: 'Sheet Metal Folder',
      description: 'Engineered for accuracy and repeatability. The SF-1500 delivers clean, consistent folds on a wide range of materials with minimal operator intervention.',
      specs: ['Max. folding length: 1500mm', 'Sheet thickness: up to 2.0mm steel', 'Manual & semi-automatic modes', 'Adjustable folding angle 0°–180°'],
      ideal: 'Job shops, prototyping, and custom fabrication',
    },
    {
      name: 'Heavy-Duty Metal Folding Machine MF-3000',
      category: 'Metal Folding Machine',
      description: 'Built for the toughest jobs. The MF-3000 handles thick gauge materials and long panels with industrial-grade construction and unmatched durability.',
      specs: ['Max. folding length: 3000mm', 'Sheet thickness: up to 4.0mm steel', 'Reinforced frame construction', 'Hydraulic clamping system'],
      ideal: 'Heavy fabrication, shipbuilding, and infrastructure',
    },
    {
      name: 'Compact Metal Folder CF-1000',
      category: 'Metal Folder',
      description: 'Space-efficient yet powerful. The CF-1000 brings professional-grade folding capability to smaller workshops without sacrificing precision or build quality.',
      specs: ['Max. folding length: 1000mm', 'Sheet thickness: up to 1.5mm steel', 'Lightweight yet rigid design', 'Quick-setup tooling system'],
      ideal: 'Small workshops, educational facilities, and mobile operations',
    },
    {
      name: 'Universal Sheet Metal Folding Machine UF-2500',
      category: 'Sheet Metal Folding Machine',
      description: 'The versatile all-rounder. The UF-2500 adapts to virtually any folding task with interchangeable tooling and an intuitive control interface.',
      specs: ['Max. folding length: 2500mm', 'Sheet thickness: up to 3.0mm steel', 'Modular tooling options', 'Touchscreen CNC controller'],
      ideal: 'General fabrication and multi-purpose shops',
    },
  ];

  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition - bodyRect - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  return (
    <section id="products" className="py-20 md:py-24 bg-[#F8F9FA]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-14">
          <div className="uppercase tracking-[3px] text-xs font-medium text-[#B8860B] mb-4">OUR EQUIPMENT</div>
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tighter text-[#0A1628] mb-4">
            Folding Machines for Every Application
          </h2>
          <p className="text-lg text-[#6B7280] max-w-2xl mx-auto">
            From compact workshop models to heavy industrial systems, every ARTITECT machine is built with the same uncompromising standards.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product, index) => (
            <div key={index} className="group bg-white rounded-2xl border border-gray-200 overflow-hidden flex flex-col hover:shadow-xl transition-shadow duration-300">
              <div className="p-8 flex-1">
                <div className="inline-block px-3 py-1 text-xs font-medium tracking-wider bg-[#0A1628] text-white rounded mb-4">
                  {product.category}
                </div>
                
                <h3 className="text-2xl font-semibold tracking-tight text-[#0A1628] mb-3 leading-tight">
                  {product.name}
                </h3>
                
                <p className="text-[#6B7280] mb-6 leading-relaxed">
                  {product.description}
                </p>

                <div className="space-y-2 mb-6">
                  {product.specs.map((spec, i) => (
                    <div key={i} className="flex items-start gap-2 text-sm">
                      <Check className="w-4 h-4 text-[#B8860B] mt-0.5 flex-shrink-0" />
                      <span className="text-[#1C2833]">{spec}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-4 border-t border-gray-100">
                  <div className="text-xs uppercase tracking-wider text-[#6B7280] mb-1">IDEAL FOR</div>
                  <div className="text-sm text-[#1C2833] font-medium">{product.ideal}</div>
                </div>
              </div>

              <div className="px-8 pb-8">
                <button
                  onClick={scrollToContact}
                  className="w-full flex items-center justify-center gap-2 py-3.5 border border-[#0A1628] text-[#0A1628] font-medium rounded-md hover:bg-[#0A1628] hover:text-white transition-all group-hover:border-[#B8860B] group-hover:text-[#B8860B] group-hover:hover:bg-[#B8860B] group-hover:hover:text-white"
                >
                  Request Quote <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <p className="text-[#6B7280] text-sm">
            Need a custom configuration? <button onClick={scrollToContact} className="text-[#B8860B] hover:underline font-medium">Contact our engineering team</button>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Products;
