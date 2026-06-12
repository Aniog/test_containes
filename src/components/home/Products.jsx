import { useEffect, useRef, useState } from 'react';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const products = [
  {
    id: 'double-folding-machine',
    name: 'Double Folding Machine',
    tagline: 'Dual-action precision folding',
    description:
      'Our flagship double folding machine delivers simultaneous dual-fold operations with micron-level accuracy. Ideal for high-volume production environments requiring consistent, repeatable bends.',
    features: ['Dual-fold simultaneous operation', 'CNC-controlled positioning', 'Up to 4mm mild steel capacity', 'Automatic back gauge'],
    badge: 'Best Seller',
    titleId: 'prod-double-folding-title',
    descId: 'prod-double-folding-desc',
    imgId: 'prod-img-double-folding-8f2a9c',
  },
  {
    id: 'double-folder',
    name: 'Double Folder',
    tagline: 'Compact industrial folder',
    description:
      'The ARTITECT Double Folder combines robust construction with intuitive controls. Engineered for workshops and production lines that demand reliability and speed without compromising on quality.',
    features: ['Heavy-duty steel frame', 'Hydraulic clamping system', 'Digital angle readout', 'Quick-change tooling'],
    badge: 'Popular',
    titleId: 'prod-double-folder-title',
    descId: 'prod-double-folder-desc',
    imgId: 'prod-img-double-folder-3b7d1e',
  },
  {
    id: 'sheet-metal-folder',
    name: 'Sheet Metal Folder',
    tagline: 'Versatile sheet forming',
    description:
      'Designed for versatility across a wide range of sheet metal thicknesses and materials. The ARTITECT Sheet Metal Folder handles stainless steel, aluminium, and mild steel with equal precision.',
    features: ['Multi-material compatibility', 'Adjustable beam pressure', 'Programmable sequences', 'Safety light curtain'],
    badge: 'Versatile',
    titleId: 'prod-sheet-folder-title',
    descId: 'prod-sheet-folder-desc',
    imgId: 'prod-img-sheet-folder-c4e8f2',
  },
  {
    id: 'sheet-metal-folding-machine',
    name: 'Sheet Metal Folding Machine',
    tagline: 'Industrial-grade performance',
    description:
      'Built for demanding industrial applications, this machine offers extended working lengths and high tonnage capacity. Perfect for HVAC, construction, and automotive component manufacturing.',
    features: ['Extended working length up to 4m', 'High tonnage capacity', 'Servo-electric drive', 'Remote diagnostics'],
    badge: 'Industrial',
    titleId: 'prod-smfm-title',
    descId: 'prod-smfm-desc',
    imgId: 'prod-img-smfm-a1b2c3',
  },
  {
    id: 'metal-folder',
    name: 'Metal Folder',
    tagline: 'Precision at every angle',
    description:
      'The ARTITECT Metal Folder is engineered for precision angle control across complex bending sequences. Its intuitive touchscreen interface makes programming fast and error-free.',
    features: ['Touchscreen HMI interface', 'Angle correction system', 'Tool library storage', 'Network connectivity'],
    badge: 'Smart',
    titleId: 'prod-metal-folder-title',
    descId: 'prod-metal-folder-desc',
    imgId: 'prod-img-metal-folder-d5e6f7',
  },
  {
    id: 'metal-folding-machine',
    name: 'Metal Folding Machine',
    tagline: 'Efficiency meets precision',
    description:
      'Our Metal Folding Machine series is designed for maximum throughput without sacrificing accuracy. Featuring rapid tool change and automated material handling options for lean manufacturing.',
    features: ['Rapid tool change system', 'Automated material handling', 'Energy-efficient servo drive', 'CE certified'],
    badge: 'Efficient',
    titleId: 'prod-mfm-title',
    descId: 'prod-mfm-desc',
    imgId: 'prod-img-mfm-e8f9a0',
  },
];

const badgeColors = {
  'Best Seller': 'bg-gold text-navy',
  Popular: 'bg-steel text-white',
  Versatile: 'bg-sky text-navy',
  Industrial: 'bg-navy-dark text-white border border-white/20',
  Smart: 'bg-white text-navy border border-border',
  Efficient: 'bg-green-100 text-green-800',
};

export default function Products() {
  const containerRef = useRef(null);
  const [activeProduct, setActiveProduct] = useState(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, [activeProduct]);

  const handleScroll = (href) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="products" className="bg-surface py-24 md:py-32" ref={containerRef}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="text-xs font-semibold tracking-widest uppercase text-steel">Our Product Range</span>
          <div className="h-0.5 w-12 bg-gold mx-auto mt-3 mb-5" />
          <h2 className="text-3xl md:text-4xl font-bold text-navy tracking-tight">
            Engineered for Every Application
          </h2>
          <p className="text-gray-500 mt-4 max-w-2xl mx-auto text-lg leading-relaxed">
            From compact workshop folders to heavy-duty industrial machines — ARTITECT MACHINERY has the right solution for your sheet metal forming needs.
          </p>
        </div>

        {/* Product grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <article
              key={product.id}
              className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-border group cursor-pointer"
              onClick={() => setActiveProduct(activeProduct?.id === product.id ? null : product)}
            >
              {/* Product image */}
              <div className="relative overflow-hidden h-52 bg-gray-100">
                <img
                  alt={product.name}
                  data-strk-img-id={product.imgId}
                  data-strk-img={`[${product.descId}] [${product.titleId}]`}
                  data-strk-img-ratio="3x2"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {/* Badge */}
                <span className={`absolute top-3 left-3 text-xs font-semibold px-3 py-1 rounded-full ${badgeColors[product.badge]}`}>
                  {product.badge}
                </span>
              </div>

              {/* Content */}
              <div className="p-6">
                <p className="text-steel text-xs font-semibold tracking-widest uppercase mb-1">{product.tagline}</p>
                <h3 id={product.titleId} className="text-navy text-xl font-bold mb-3 leading-tight">
                  {product.name}
                </h3>
                <p id={product.descId} className="text-gray-500 text-sm leading-relaxed mb-4 line-clamp-3">
                  {product.description}
                </p>

                {/* Expanded features */}
                {activeProduct?.id === product.id && (
                  <div className="mt-4 pt-4 border-t border-border">
                    <p className="text-navy text-xs font-semibold tracking-widest uppercase mb-3">Key Features</p>
                    <ul className="space-y-2">
                      {product.features.map((f) => (
                        <li key={f} className="flex items-center gap-2 text-sm text-gray-600">
                          <CheckCircle size={14} className="text-steel flex-shrink-0" />
                          {f}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                <div className="flex items-center justify-between mt-4">
                  <button
                    className="text-steel text-sm font-semibold flex items-center gap-1 hover:text-sky transition-colors"
                    onClick={(e) => {
                      e.stopPropagation();
                      setActiveProduct(activeProduct?.id === product.id ? null : product);
                    }}
                  >
                    {activeProduct?.id === product.id ? 'Show less' : 'View details'}
                    <ArrowRight size={14} className={`transition-transform ${activeProduct?.id === product.id ? 'rotate-90' : ''}`} />
                  </button>
                  <button
                    className="text-xs bg-navy text-white px-4 py-2 rounded-lg hover:bg-steel transition-colors font-medium"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleScroll('#contact');
                    }}
                  >
                    Enquire
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-14">
          <p className="text-gray-500 mb-5">Need a custom configuration or have specific requirements?</p>
          <button
            onClick={() => handleScroll('#contact')}
            className="inline-flex items-center gap-2 bg-steel text-white font-semibold px-8 py-4 rounded-lg hover:bg-sky transition-all duration-200"
          >
            Talk to Our Engineers
            <ArrowRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
}
