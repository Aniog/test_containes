import { useEffect, useRef } from 'react';
import { Check, ArrowRight, ChevronRight, Settings, Gauge, Shield } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const products = [
  {
    id: 'double-folding-machine',
    title: 'Double Folding Machine',
    subtitle: 'Professional Series',
    desc: 'Our flagship double folding machine delivers unmatched precision for complex sheet metal folding operations. Designed for heavy-duty industrial use with intuitive controls.',
    features: [
      'Double folding capability for complex profiles',
      'Heavy-duty steel frame construction',
      'Precision CNC backgauge system',
      'Automatic angle compensation',
    ],
    imgId: 'prod-double-folder-a1b2c3',
  },
  {
    id: 'sheet-metal-folder',
    title: 'Sheet Metal Folder',
    subtitle: 'Master Series',
    desc: 'Versatile sheet metal folding machine engineered for workshops of all sizes. Combines robust build quality with smooth, accurate folding performance across a wide range of materials.',
    features: [
      'Manual and semi-automatic modes',
      'High clamping force for thick materials',
      'Segmented tooling for versatility',
      'Ergonomic operator interface',
    ],
    imgId: 'prod-sheet-folder-d4e5f6',
  },
  {
    id: 'metal-folder-machine',
    title: 'Metal Folder Machine',
    subtitle: 'Compact Series',
    desc: 'Space-efficient metal folding machine perfect for smaller workshops. Delivers professional-grade folding accuracy without compromising on build quality or ease of use.',
    features: [
      'Compact footprint design',
      'Quick-change tooling system',
      'Digital angle readout',
      'Integrated safety guards',
    ],
    imgId: 'prod-metal-folder-g7h8i9',
  },
];

export default function Products() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section id="products" ref={containerRef} className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="text-xs font-semibold tracking-widest uppercase text-accent-500 mb-3 block">
            Our Products
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-brand-900 mb-4">
            Precision Folding Machines
          </h2>
          <p className="text-brand-400 max-w-2xl mx-auto text-base md:text-lg leading-relaxed">
            From compact workshop solutions to full-scale industrial machines, each ARTITECT product is built with uncompromising attention to detail.
          </p>
        </div>

        {/* Product cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <article
              key={product.id}
              className="group bg-white border border-brand-100 rounded-xl overflow-hidden hover:border-accent-200 hover:shadow-lg transition-all duration-300"
            >
              {/* Product image */}
              <div className="relative h-60 overflow-hidden bg-brand-50">
                <img
                  alt={product.title}
                  data-strk-img-id={product.imgId}
                  data-strk-img={`[product-${product.id}-subtitle] [product-${product.id}-title] industrial sheet metal machinery`}
                  data-strk-img-ratio="3x2"
                  data-strk-img-width="800"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Product info */}
              <div className="p-6">
                <span
                  id={`product-${product.id}-subtitle`}
                  className="text-xs font-semibold tracking-widest uppercase text-accent-500"
                >
                  {product.subtitle}
                </span>
                <h3
                  id={`product-${product.id}-title`}
                  className="font-display text-xl font-bold text-brand-900 mt-1 mb-3"
                >
                  {product.title}
                </h3>
                <p className="text-brand-400 text-sm leading-relaxed mb-5">
                  {product.desc}
                </p>

                {/* Features */}
                <ul className="space-y-2.5 mb-6">
                  {product.features.map((feat) => (
                    <li key={feat} className="flex items-start gap-2.5 text-sm text-brand-600">
                      <Check className="w-4 h-4 text-accent-500 mt-0.5 shrink-0" />
                      {feat}
                    </li>
                  ))}
                </ul>

                <a
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault();
                    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-accent-500 hover:text-accent-600 transition-colors"
                >
                  Request Details
                  <ChevronRight className="w-4 h-4" />
                </a>
              </div>
            </article>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 p-6 bg-brand-50 rounded-xl border border-brand-100">
            <div className="flex items-center gap-3">
              <div className="flex -space-x-2">
                {[Settings, Gauge, Shield].map((Icon, i) => (
                  <div key={i} className="w-9 h-9 rounded-full bg-white border-2 border-brand-50 flex items-center justify-center">
                    <Icon className="w-4 h-4 text-accent-500" />
                  </div>
                ))}
              </div>
              <p className="text-sm font-medium text-brand-700">
                Need help choosing the right machine?
              </p>
            </div>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-accent-500 hover:bg-accent-600 text-white text-sm font-semibold rounded-md transition-colors shadow-sm"
            >
              Talk to an Expert
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
