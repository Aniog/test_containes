import { useEffect, useRef } from 'react';
import { ArrowRight, Ruler, Zap, Settings } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const products = [
  {
    id: 'double-folding-machine',
    name: 'Double Folding Machine',
    tagline: 'Heavy-duty precision folding for industrial applications',
    specs: ['Max Sheet Width: 3200mm', 'Thickness Range: 0.5mm – 3.0mm', 'Hydraulic Drive System'],
    features: ['CNC Back Gauge', 'Safety Light Curtains', 'Foot Pedal Control'],
  },
  {
    id: 'double-folder',
    name: 'Double Folder',
    tagline: 'Compact double-folder for medium-scale production',
    specs: ['Max Sheet Width: 2500mm', 'Thickness Range: 0.4mm – 2.5mm', 'Electric-Hydraulic Hybrid'],
    features: ['Digital Angle Display', 'Quick Die Change', 'Energy Efficient'],
  },
  {
    id: 'sheet-metal-folder',
    name: 'Sheet Metal Folder',
    tagline: 'Versatile folder for custom fabrication workshops',
    specs: ['Max Sheet Width: 2000mm', 'Thickness Range: 0.3mm – 2.0mm', 'Manual + Pneumatic Assist'],
    features: ['Precision Scales', 'Adjustable Fingers', 'Portable Frame'],
  },
  {
    id: 'sheet-metal-folding-machine',
    name: 'Sheet Metal Folding Machine',
    tagline: 'Automated folding with intelligent control systems',
    specs: ['Max Sheet Width: 4000mm', 'Thickness Range: 0.5mm – 6.0mm', 'Full CNC Control'],
    features: ['Touchscreen Interface', 'Programmable Sequences', 'Remote Diagnostics'],
  },
  {
    id: 'metal-folder',
    name: 'Metal Folder',
    tagline: 'Entry-level precision for small to medium operations',
    specs: ['Max Sheet Width: 1500mm', 'Thickness Range: 0.3mm – 1.5mm', 'Manual Operation'],
    features: ['Built-in Gauge', 'Anti-Slip Bed', 'Compact Footprint'],
  },
  {
    id: 'metal-folder-machine',
    name: 'Metal Folder Machine',
    tagline: 'Robust construction for continuous production lines',
    specs: ['Max Sheet Width: 3000mm', 'Thickness Range: 0.5mm – 4.0mm', 'Hydraulic Power Unit'],
    features: ['Synchronized Upper Beam', 'Auto Return Stroke', 'Overload Protection'],
  },
  {
    id: 'metal-folding-machine',
    name: 'Metal Folding Machine',
    tagline: 'Advanced multi-axis folding with servo precision',
    specs: ['Max Sheet Width: 3600mm', 'Thickness Range: 0.5mm – 5.0mm', 'Servo-Electric Drive'],
    features: ['Multi-Axis Back Gauge', 'Automatic Crowning', 'IoT Ready'],
  },
];

export default function Products() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section
      id="products"
      ref={containerRef}
      className="py-20 md:py-28 bg-brand-cream"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="inline-block text-brand-gold text-xs font-semibold uppercase tracking-[0.2em] mb-3">
            Our Product Line
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-dark mb-4">
            Precision Folding Equipment
          </h2>
          <p className="text-brand-muted max-w-2xl mx-auto text-base sm:text-lg leading-relaxed">
            From compact manual folders to fully automated CNC folding machines, 
            our range covers every production scale and material requirement.
          </p>
        </div>

        {/* Product grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => {
            const titleId = `product-title-${product.id}`;
            const descId = `product-desc-${product.id}`;
            const imgId = `product-img-${product.id}`;

            return (
              <article
                key={product.id}
                className="group bg-white rounded-lg border border-brand-border overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                {/* Product image */}
                <div className="relative h-56 overflow-hidden">
                  <img
                    data-strk-img-id={imgId}
                    data-strk-img={`[${descId}] [${titleId}]`}
                    data-strk-img-ratio="3x2"
                    data-strk-img-width="600"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/40 to-transparent" />
                </div>

                <div className="p-6">
                  <h3
                    id={titleId}
                    className="text-lg font-bold text-brand-dark mb-1"
                  >
                    {product.name}
                  </h3>
                  <p
                    id={descId}
                    className="text-sm text-brand-muted mb-4 leading-relaxed"
                  >
                    {product.tagline}
                  </p>

                  {/* Specs */}
                  <div className="mb-4">
                    <h4 className="text-xs font-semibold uppercase tracking-wider text-brand-gold mb-2">
                      Specifications
                    </h4>
                    <ul className="space-y-1.5">
                      {product.specs.map((spec, i) => (
                        <li
                          key={i}
                          className="flex items-center gap-2 text-sm text-brand-muted"
                        >
                          <Ruler size={14} className="text-brand-gold flex-shrink-0" />
                          {spec}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Features */}
                  <div className="mb-5">
                    <h4 className="text-xs font-semibold uppercase tracking-wider text-brand-gold mb-2">
                      Key Features
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {product.features.map((feature, i) => (
                        <span
                          key={i}
                          className="inline-flex items-center gap-1 text-xs text-brand-dark bg-brand-cream px-2.5 py-1 rounded"
                        >
                          {i === 0 && <Settings size={12} className="text-brand-gold" />}
                          {i === 1 && <Zap size={12} className="text-brand-gold" />}
                          {i > 1 && <Zap size={12} className="text-brand-gold" />}
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>

                  <a
                    href="#contact"
                    onClick={(e) => {
                      e.preventDefault();
                      const el = document.querySelector('#contact');
                      if (el) el.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-gold hover:text-brand-bronze transition-colors"
                  >
                    Request Quote
                    <ArrowRight size={14} />
                  </a>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
