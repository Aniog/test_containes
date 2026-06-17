import React from 'react';
import { Link } from 'react-router-dom';
import { Settings, Shield, Zap, CircleCheck } from 'lucide-react';

const Products = () => {
  const products = [
    {
      id: 'double-folding-machine',
      title: 'Double Folding Machine',
      desc: 'Our flagship double-sided folding solution. Perfect for complex profiles where speed and accuracy are paramount.',
      features: ['Dual-direction folding', 'Automatic crowning', 'CNC multi-touch control'],
      specs: 'Max thickness: 4mm | Max length: 4m'
    },
    {
      id: 'sheet-metal-folder',
      title: 'Sheet Metal Folder',
      desc: 'The versatile industry standard. A robust and user-friendly machine for a wide variety of folding tasks.',
      features: ['High-precision backgauge', 'Interchangeable tools', 'Energy efficient hydraulics'],
      specs: 'Max thickness: 3mm | Max length: 3m'
    },
    {
      id: 'metal-folder-machine',
      title: 'Metal Folder Machine',
      desc: 'Compact yet powerful. Designed for smaller workshops and specialized small-run production.',
      features: ['Space-saving design', 'Digital angle readout', 'Manual or semi-auto mode'],
      specs: 'Max thickness: 2mm | Max length: 2m'
    },
    {
      id: 'double-folder-pro',
      title: 'Double Folder Pro Series',
      desc: 'Enhanced double folding technology with higher automation and robotic integration capabilities.',
      features: ['Robot-ready interface', 'Laser measurement system', 'High-speed positioning'],
      specs: 'Max thickness: 6mm | Max length: 6m'
    }
  ];

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Header */}
      <section className="bg-slate-900 py-20 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Our Machines</h1>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Explore our range of precision-engineered folding solutions tailored for your business needs.
          </p>
        </div>
      </section>

      {/* Product List */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 gap-16">
            {products.map((product, idx) => (
              <div 
                key={product.id} 
                className={`flex flex-col lg:flex-row gap-12 items-center ${idx % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}
              >
                <div className="flex-1 w-full">
                  <div className="relative group">
                    <img 
                      data-strk-img-id={`prod-img-${product.id}`}
                      data-strk-img={`[prod-desc-${product.id}] [prod-title-${product.id}]`}
                      data-strk-img-ratio="4x3"
                      data-strk-img-width="800"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 3'/%3E"
                      alt={product.title} 
                      className="rounded-xl shadow-lg group-hover:shadow-xl transition-all"
                    />
                    <div className="absolute top-4 left-4 bg-amber-600 text-white px-3 py-1 rounded text-xs font-bold uppercase tracking-widest shadow-lg">
                      Certified Precision
                    </div>
                  </div>
                </div>
                <div className="flex-1 space-y-6">
                  <h2 id={`prod-title-${product.id}`} className="text-3xl font-bold text-slate-900">{product.title}</h2>
                  <p id={`prod-desc-${product.id}`} className="text-lg text-slate-600 leading-relaxed">
                    {product.desc}
                  </p>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 text-slate-700">
                    {product.features.map((feature, fIdx) => (
                      <div key={fIdx} className="flex items-center gap-2">
                        <CircleCheck className="w-5 h-5 text-amber-600" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="p-4 bg-slate-100 rounded-lg border-l-4 border-amber-500 italic text-slate-700 font-medium">
                    {product.specs}
                  </div>

                  <div className="pt-6">
                    <Link 
                      to="/contact" 
                      state={{ product: product.title }}
                      className="inline-block bg-slate-900 hover:bg-slate-800 text-white px-8 py-3 rounded-md font-semibold transition-all shadow-md"
                    >
                      Inquire for Details
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Global Support CTA */}
      <section className="bg-slate-200 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Need a Custom Solution?</h2>
          <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto">
            We offer bespoke engineering services to adapt our folding technology to your specific production requirements.
          </p>
          <Link to="/contact" className="border-2 border-slate-900 text-slate-900 hover:bg-slate-900 hover:text-white px-8 py-3 rounded-md font-bold transition-all">
            Get Technical Consultation
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Products;
