import React from 'react';
import { ArrowRight } from 'lucide-react';

const products = [
  {
    id: 'double-folding-machine',
    title: 'Double Folding Machine',
    subtitle: 'DF Series',
    description: 'Our flagship double folding machine delivers unmatched precision for high-volume production. Features synchronized dual-beam folding for perfect symmetry every time.',
    specs: ['Max thickness: 4mm', 'Working length: 3.2m', 'Folding angle: 0°–180°', 'CNC control system'],
    imageQuery: 'precision double folding machine industrial workshop',
  },
  {
    id: 'double-folder',
    title: 'Double Folder',
    subtitle: 'DF Compact',
    description: 'Space-efficient double folder designed for workshops where every square meter counts. Maintains full industrial capability in a smaller footprint.',
    specs: ['Max thickness: 3mm', 'Working length: 2.5m', 'Compact design', 'Manual & CNC options'],
    imageQuery: 'compact double folder sheet metal workshop',
  },
  {
    id: 'sheet-metal-folder',
    title: 'Sheet Metal Folder',
    subtitle: 'SM Professional',
    description: 'The industry standard for professional sheet metal folding. Built for daily use with exceptional build quality and intuitive operation.',
    specs: ['Max thickness: 2.5mm', 'Working length: 2m–4m', 'Segmented tooling', 'Quick setup system'],
    imageQuery: 'professional sheet metal folder fabrication shop',
  },
  {
    id: 'sheet-metal-folding-machine',
    title: 'Sheet Metal Folding Machine',
    subtitle: 'SM Heavy Duty',
    description: 'Engineered for the toughest jobs. Our heavy-duty folding machine handles thick gauge materials with ease while maintaining micron-level accuracy.',
    specs: ['Max thickness: 6mm', 'Working length: 4m–6m', 'Hydraulic clamping', 'Heavy-duty frame'],
    imageQuery: 'heavy duty sheet metal folding machine factory',
  },
  {
    id: 'metal-folder',
    title: 'Metal Folder',
    subtitle: 'MF Standard',
    description: 'Reliable, straightforward metal folder for general fabrication. The perfect balance of capability and simplicity for growing workshops.',
    specs: ['Max thickness: 2mm', 'Working length: 1.5m–3m', 'Manual operation', 'Easy maintenance'],
    imageQuery: 'metal folder workshop fabrication equipment',
  },
  {
    id: 'metal-folder-machine',
    title: 'Metal Folder Machine',
    subtitle: 'MF CNC',
    description: 'CNC-controlled metal folder machine offering programmable precision and repeatability. Ideal for complex parts and batch production.',
    specs: ['Max thickness: 3mm', 'Working length: 3m', 'Touchscreen CNC', 'Program storage'],
    imageQuery: 'CNC metal folder machine modern workshop',
  },
  {
    id: 'metal-folding-machine',
    title: 'Metal Folding Machine',
    subtitle: 'MF Industrial',
    description: 'Our most robust metal folding machine for continuous industrial operation. Built to run 24/7 with minimal maintenance requirements.',
    specs: ['Max thickness: 5mm', 'Working length: 5m', 'Reinforced structure', '24/7 duty cycle'],
    imageQuery: 'industrial metal folding machine production line',
  },
];

const Products = () => {
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
    <section id="products" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="uppercase tracking-[3px] text-sm text-amber-700 font-medium mb-4">OUR RANGE</div>
          <h2 className="text-5xl md:text-6xl font-semibold tracking-tighter text-slate-900 mb-4">
            Machines built for mastery.
          </h2>
          <p className="max-w-2xl mx-auto text-xl text-slate-600">
            Every ARTITECT machine is engineered with one purpose: to give fabricators absolute control over every bend.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product, index) => (
            <div
              key={product.id}
              className="group bg-white rounded-2xl overflow-hidden border border-slate-200 hover:border-slate-300 transition-all flex flex-col"
            >
              {/* Product Image */}
              <div className="relative h-56 bg-slate-100 overflow-hidden">
                <img
                  data-strk-img-id={`product-${product.id}`}
                  data-strk-img={`[product-${product.id}-desc] [product-${product.id}-title] ${product.imageQuery}`}
                  data-strk-img-ratio="16x9"
                  data-strk-img-width="800"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={product.title}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-4 right-4 px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-medium text-slate-700">
                  {product.subtitle}
                </div>
              </div>

              {/* Product Content */}
              <div className="p-8 flex-1 flex flex-col">
                <h3 id={`product-${product.id}-title`} className="text-2xl font-semibold tracking-tight text-slate-900 mb-1">
                  {product.title}
                </h3>
                <p id={`product-${product.id}-desc`} className="text-slate-600 mb-6 leading-relaxed">
                  {product.description}
                </p>

                {/* Specs */}
                <div className="mt-auto">
                  <div className="text-xs uppercase tracking-widest text-slate-400 mb-3 font-medium">KEY SPECIFICATIONS</div>
                  <ul className="space-y-2 mb-6">
                    {product.specs.map((spec, i) => (
                      <li key={i} className="text-sm text-slate-600 flex items-start gap-2">
                        <span className="text-amber-600 mt-1">•</span>
                        {spec}
                      </li>
                    ))}
                  </ul>

                  <button
                    onClick={scrollToContact}
                    className="inline-flex items-center gap-2 text-sm font-semibold text-slate-900 group-hover:gap-3 transition-all"
                  >
                    Request details <ArrowRight size={16} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-slate-600 mb-4">Need a custom configuration or larger capacity?</p>
          <button
            onClick={scrollToContact}
            className="inline-flex items-center gap-2 px-8 py-3 border-2 border-slate-900 text-slate-900 font-semibold rounded-xl hover:bg-slate-900 hover:text-white transition-all"
          >
            Speak with our engineering team
          </button>
        </div>
      </div>
    </section>
  );
};

export default Products;
