import React from 'react';
import { ArrowRight, Check } from 'lucide-react';

const Products = () => {
  const products = [
    {
      id: 'double-folder',
      category: 'HEAVY DUTY SERIES',
      name: 'Double Folding Machine',
      description: 'Our flagship double folder delivers unmatched precision for high-volume production. Dual-beam design ensures consistent bends across the full working length.',
      specs: ['Working Length: 3.2m – 6.4m', 'Max Thickness: 4mm mild steel', 'Bend Angle: 0° – 180°', 'Repeatability: ±0.1mm'],
      ideal: 'Ideal for HVAC, roofing, and structural fabrication.',
    },
    {
      id: 'sheet-metal-folder',
      category: 'PRECISION SERIES',
      name: 'Sheet Metal Folder',
      description: 'Engineered for accuracy and ease of use. The perfect balance of power and finesse for workshops that demand clean, repeatable results on every job.',
      specs: ['Working Length: 2.5m – 4.0m', 'Max Thickness: 2.5mm mild steel', 'Digital angle readout', 'Quick-change tooling'],
      ideal: 'Ideal for custom fabrication, signage, and architectural metalwork.',
    },
    {
      id: 'metal-folder',
      category: 'COMPACT SERIES',
      name: 'Metal Folding Machine',
      description: 'Compact yet powerful. Designed for smaller shops and mobile operations without compromising on build quality or bending performance.',
      specs: ['Working Length: 1.5m – 2.5m', 'Max Thickness: 2mm mild steel', 'Manual & motorized options', 'Portable design available'],
      ideal: 'Ideal for job shops, maintenance teams, and field work.',
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
    <section id="products" className="py-20 md:py-24 bg-slate-50 border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-14">
          <div className="uppercase tracking-[3px] text-xs font-medium text-slate-500 mb-3">OUR MACHINES</div>
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tighter text-slate-900 mb-4">
            Precision folding solutions<br />for every scale.
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            From compact job-site folders to heavy-duty production systems, 
            every ARTITECT machine is built to last a lifetime.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {products.map((product, index) => (
            <div 
              key={index} 
              className="group bg-white rounded-3xl p-8 flex flex-col border border-slate-200 hover:border-slate-300 hover:shadow-xl transition-all duration-300"
            >
              <div>
                <div className="text-xs tracking-[2px] font-medium text-emerald-700 mb-3">{product.category}</div>
                <h3 className="text-2xl font-semibold tracking-tight text-slate-900 mb-4">{product.name}</h3>
                <p className="text-slate-600 leading-relaxed mb-6">{product.description}</p>
              </div>

              <div className="flex-1">
                <div className="text-sm font-medium text-slate-900 mb-3">Key Specifications</div>
                <ul className="space-y-2 mb-6">
                  {product.specs.map((spec, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-slate-600">
                      <Check className="w-4 h-4 text-emerald-600 mt-0.5 flex-shrink-0" />
                      <span>{spec}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-sm text-slate-500 italic">{product.ideal}</p>
              </div>

              <button 
                onClick={scrollToContact}
                className="mt-8 w-full flex items-center justify-center gap-2 py-3.5 border border-slate-200 rounded-xl text-sm font-medium text-slate-700 hover:bg-slate-900 hover:text-white hover:border-slate-900 transition-all group-hover:border-slate-900"
              >
                Request Specifications
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <p className="text-sm text-slate-500">
            All models available with custom configurations. <button onClick={scrollToContact} className="underline hover:text-slate-700">Contact us</button> to discuss your requirements.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Products;
