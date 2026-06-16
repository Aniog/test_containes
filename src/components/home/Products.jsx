import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { ArrowRight } from 'lucide-react';

const products = [
  {
    id: 'double-folding-machine',
    title: 'Double Folding Machine',
    category: 'Flagship Series',
    description: 'Our premium double folding machine delivers unmatched precision for complex sheet metal profiles. Engineered for high-volume production with minimal setup time.',
    features: ['Dual-axis folding', 'CNC controlled', 'Up to 4mm steel capacity'],
    imgId: 'prod-dfm-8a3b1c',
    titleId: 'prod-double-folding-machine-title',
    descId: 'prod-double-folding-machine-desc',
  },
  {
    id: 'double-folder',
    title: 'Double Folder',
    category: 'Professional Series',
    description: 'The Artitect Double Folder combines robust construction with intuitive controls, making it the preferred choice for precision fabrication workshops.',
    features: ['Hydraulic drive system', 'Auto back-gauge', 'Touch-screen interface'],
    imgId: 'prod-df-9c4d2e',
    titleId: 'prod-double-folder-title',
    descId: 'prod-double-folder-desc',
  },
  {
    id: 'sheet-metal-folder',
    title: 'Sheet Metal Folder',
    category: 'Industrial Series',
    description: 'Versatile sheet metal folder designed for a wide range of materials and thicknesses. Ideal for HVAC, roofing, and architectural metalwork applications.',
    features: ['Multi-material support', 'Adjustable beam angle', 'Safety interlocks'],
    imgId: 'prod-smf-7e5f3a',
    titleId: 'prod-sheet-metal-folder-title',
    descId: 'prod-sheet-metal-folder-desc',
  },
  {
    id: 'sheet-metal-folding-machine',
    title: 'Sheet Metal Folding Machine',
    category: 'Heavy Duty Series',
    description: 'Built for demanding industrial environments, this heavy-duty folding machine handles thick gauge materials with consistent accuracy across long production runs.',
    features: ['Heavy-gauge capacity', 'Servo-electric drive', 'Remote diagnostics'],
    imgId: 'prod-smfm-2b6g4h',
    titleId: 'prod-sheet-metal-folding-machine-title',
    descId: 'prod-sheet-metal-folding-machine-desc',
  },
  {
    id: 'metal-folder',
    title: 'Metal Folder',
    category: 'Compact Series',
    description: 'A compact yet powerful metal folder perfect for smaller workshops and precision component manufacturing. Easy to operate with professional-grade results.',
    features: ['Compact footprint', 'Quick-change tooling', 'Digital angle readout'],
    imgId: 'prod-mf-5i7j8k',
    titleId: 'prod-metal-folder-title',
    descId: 'prod-metal-folder-desc',
  },
  {
    id: 'metal-folding-machine',
    title: 'Metal Folding Machine',
    category: 'Automation Series',
    description: 'Our most advanced metal folding machine integrates seamlessly with automated production lines, offering programmable sequences and Industry 4.0 connectivity.',
    features: ['Industry 4.0 ready', 'Programmable sequences', 'High-speed operation'],
    imgId: 'prod-mfm-6l9m0n',
    titleId: 'prod-metal-folding-machine-title',
    descId: 'prod-metal-folding-machine-desc',
  },
];

const Products = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  const handleContact = () => {
    const el = document.querySelector('#contact');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="products" className="bg-brand-light py-24 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-brand-gold text-xs tracking-widest uppercase font-sans font-semibold mb-3">
            Our Product Range
          </p>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-brand-navy mb-4">
            Precision Folding Machines
          </h2>
          <div className="w-16 h-1 bg-brand-gold mx-auto mb-6" />
          <p className="text-brand-steel/70 text-lg max-w-2xl mx-auto font-sans leading-relaxed">
            From compact workshop folders to fully automated industrial systems — every Artitect machine is engineered to deliver flawless results.
          </p>
        </div>

        {/* Products Grid */}
        <div ref={containerRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <article
              key={product.id}
              className="bg-brand-white border-t-4 border-brand-gold shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
            >
              {/* Product Image */}
              <div className="overflow-hidden h-52 bg-brand-steel/10">
                <img
                  alt={product.title}
                  data-strk-img-id={product.imgId}
                  data-strk-img={`[${product.descId}] [${product.titleId}] sheet metal folding machine industrial`}
                  data-strk-img-ratio="3x2"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Content */}
              <div className="p-8">
                <span className="text-brand-gold text-xs tracking-widest uppercase font-sans font-semibold">
                  {product.category}
                </span>
                <h3
                  id={product.titleId}
                  className="font-serif text-xl font-bold text-brand-navy mt-2 mb-3"
                >
                  {product.title}
                </h3>
                <p
                  id={product.descId}
                  className="text-brand-steel/70 text-sm leading-relaxed mb-5 font-sans"
                >
                  {product.description}
                </p>

                {/* Features */}
                <ul className="space-y-2 mb-6">
                  {product.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm text-brand-steel font-sans">
                      <span className="w-1.5 h-1.5 bg-brand-gold shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <button
                  onClick={handleContact}
                  className="flex items-center gap-2 text-brand-gold text-xs tracking-widest uppercase font-semibold hover:gap-3 transition-all duration-200 font-sans"
                >
                  Request Info <ArrowRight size={14} />
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
