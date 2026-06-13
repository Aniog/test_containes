import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { Check } from 'lucide-react';

const Products = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  const products = [
    {
      id: 'pro-fold-line',
      name: "ProFold CNC Double Folder",
      desc: "Our flagship double folding machine, designed for high-volume architectural trims and roofing profiles. Features fully automated bending sequences.",
      specs: ["Up to 3.2m bending length", "Max 1.5mm steel capacity", "Dual bending beams", "15-inch touch interface"],
      imgId: 'product-profold-a1b2',
      titleId: 'product-title-profold',
      descId: 'product-desc-profold'
    },
    {
      id: 'heavy-duty-folder',
      name: "Titan Heavy Duty Folder",
      desc: "A robust industrial sheet metal folding machine engineered for thick materials. Ideal for structural components and heavy fabrication.",
      specs: ["Up to 4.0m bending length", "Max 3.0mm steel capacity", "Hydraulic clamping", "Reinforced frame"],
      imgId: 'product-titan-c3d4',
      titleId: 'product-title-titan',
      descId: 'product-desc-titan'
    },
    {
      id: 'compact-metal-folder',
      name: "Agile Metal Folder",
      desc: "A highly versatile and compact metal folder machine. Perfect for smaller workshops needing precision without the massive footprint.",
      specs: ["Up to 2.0m bending length", "Max 1.2mm steel capacity", "Fast tool changes", "Energy-efficient drive"],
      imgId: 'product-agile-e5f6',
      titleId: 'product-title-agile',
      descId: 'product-desc-agile'
    }
  ];

  return (
    <section id="products" className="py-20 bg-slate-50" ref={containerRef}>
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div className="max-w-2xl">
            <h2 id="products-section-title" className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Our Machines</h2>
            <p id="products-section-subtitle" className="text-lg text-slate-600">
              Discover our range of advanced sheet metal folding machines, engineered to meet the demands of modern fabrication.
            </p>
          </div>
          <a href="#contact" className="text-blue-600 font-medium hover:text-blue-800 transition-colors flex items-center gap-1">
            Request Custom Specs →
          </a>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <article key={product.id} className="bg-white rounded-xl overflow-hidden shadow-sm border border-slate-100 hover:shadow-lg transition-shadow duration-300 flex flex-col">
              <div className="aspect-[4/3] bg-slate-100 relative overflow-hidden">
                <img
                  className="w-full h-full object-cover"
                  data-strk-img-id={product.imgId}
                  data-strk-img={`[${product.descId}] [${product.titleId}] [products-section-title] machinery industrial equipment`}
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={product.name}
                />
              </div>
              <div className="p-6 md:p-8 flex flex-col flex-grow">
                <h3 id={product.titleId} className="text-2xl font-semibold text-slate-900 mb-3">
                  {product.name}
                </h3>
                <p id={product.descId} className="text-slate-600 mb-6 flex-grow">
                  {product.desc}
                </p>
                <div className="mb-8">
                  <h4 className="text-sm font-semibold text-slate-900 uppercase tracking-wider mb-3">Key Specifications</h4>
                  <ul className="space-y-2">
                    {product.specs.map((spec, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-slate-600">
                        <Check className="w-4 h-4 text-blue-500 mt-0.5 shrink-0" />
                        <span>{spec}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <button className="w-full bg-slate-900 hover:bg-slate-800 text-white py-3 rounded-md font-medium transition-colors mt-auto">
                  View Details
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
