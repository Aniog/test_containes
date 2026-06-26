import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { Hammer, Ruler, Zap, Shield, UserCheck } from 'lucide-react';

const Products = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  const products = [
    {
      id: 'double-folder-pro',
      name: 'Double Folder Pro Series',
      desc: 'The industry-leading double folding machine for complex profiles and rapid production cycles.',
      specs: ['Max length: 4000mm', 'Thickness: Up to 3.0mm', 'HMI Control', 'Automatic Tooling'],
      imgId: 'p-df-pro'
    },
    {
      id: 'sheet-metal-expert',
      name: 'Sheet Metal Expert S-1',
      desc: 'Precision sheet metal folder designed for architectural detailing and small-to-medium batch runs.',
      specs: ['Max length: 3000mm', 'Thickness: Up to 1.5mm', 'Manual & CNC options', 'High Accuracy'],
      imgId: 'p-sm-expert'
    },
    {
      id: 'atlas-folder',
      name: 'Atlas Heavy Duty Folder',
      desc: 'Engineered for the toughest jobs. Our heavy-duty metal folder machine handles industrial-grade materials.',
      specs: ['Max length: 6000mm', 'Thickness: Up to 4.5mm', 'Reinforced Frame', 'Hydraulic Power'],
      imgId: 'p-atlas'
    }
  ];

  return (
    <div ref={containerRef} className="bg-secondary/30 min-h-screen py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="text-center mb-20 text-balance">
          <h1 id="products-title" className="text-4xl md:text-5xl font-bold text-primary mb-6">Our Machines</h1>
          <p id="products-desc" className="text-xl text-gray-600 max-w-2xl mx-auto">
            Explore our range of high-performance double folding machines and precision sheet metal folders, designed for maximum efficiency and elegant output.
          </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-1 gap-16">
          {products.map((product) => (
            <div key={product.id} className="bg-white rounded-3xl overflow-hidden shadow-xl border border-gray-100 flex flex-col lg:flex-row items-center">
              <div className="lg:w-1/2 aspect-[4/3] lg:aspect-auto h-full min-h-[400px]">
                <img 
                  data-strk-img-id={product.imgId}
                  data-strk-img={`[${product.id}-title] [${product.id}-desc] industrial metal folding machine`}
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="1000"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="lg:w-1/2 p-10 md:p-14">
                <div className="flex items-center gap-2 mb-4">
                  <span className="bg-accent/10 text-accent px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest">Premium Series</span>
                </div>
                <h2 id={`${product.id}-title`} className="text-3xl font-bold text-primary mb-6">{product.name}</h2>
                <p id={`${product.id}-desc`} className="text-gray-600 text-lg mb-8 leading-relaxed">
                  {product.desc}
                </p>
                <div className="grid grid-cols-2 gap-4 mb-10">
                  {product.specs.map((spec) => (
                    <div key={spec} className="flex items-center gap-2 text-sm text-gray-500 font-medium">
                      <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                      {spec}
                    </div>
                  ))}
                </div>
                <button className="bg-primary text-white w-full py-4 rounded-xl font-bold hover:bg-primary/90 transition-all shadow-lg hover:shadow-xl">
                  Request Technical Sheet
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Support Section */}
        <section className="mt-32 grid grid-cols-1 md:grid-cols-4 gap-8">
          {[
            { icon: <Ruler className="w-8 h-8" />, text: 'Custom Dimensioning' },
            { icon: <Settings className="w-8 h-8" />, text: 'Installation Support' },
            { icon: <Shield className="w-8 h-8" />, text: '5-Year Warranty' },
            { icon: <UserCheck className="w-8 h-8" />, text: 'On-site Training' }
          ].map((item, idx) => (
            <div key={idx} className="flex flex-col items-center p-6 bg-white rounded-2xl shadow-sm text-center">
              <div className="text-accent mb-4">{item.icon}</div>
              <span className="font-semibold text-primary">{item.text}</span>
            </div>
          ))}
        </section>
      </div>
    </div>
  );
};

export default Products;
