import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { ArrowRight } from 'lucide-react';

const products = [
  {
    id: 'double-folding-machine',
    name: 'Double Folding Machine',
    tagline: 'Dual-axis precision folding',
    description:
      'Our flagship double folding machine delivers simultaneous dual-axis bends with micron-level accuracy. Ideal for high-volume production environments demanding consistent quality.',
    specs: ['Folding Length: up to 4000mm', 'Material Thickness: 0.5–6mm', 'Bending Angle: 0–135°'],
    badge: 'Best Seller',
    titleId: 'prod-dfm-title',
    descId: 'prod-dfm-desc',
    imgId: 'prod-dfm-img-9a3b1c',
  },
  {
    id: 'double-folder',
    name: 'Double Folder',
    tagline: 'Compact & versatile',
    description:
      'The ARTITECT Double Folder combines a compact footprint with industrial-grade performance. Perfect for workshops and fabrication shops requiring flexibility without compromise.',
    specs: ['Folding Length: up to 2500mm', 'Material Thickness: 0.3–4mm', 'CNC Control: Optional'],
    badge: 'Popular',
    titleId: 'prod-df-title',
    descId: 'prod-df-desc',
    imgId: 'prod-df-img-4d7e2f',
  },
  {
    id: 'sheet-metal-folder',
    name: 'Sheet Metal Folder',
    tagline: 'Industrial-grade reliability',
    description:
      'Built for demanding industrial applications, the ARTITECT Sheet Metal Folder handles a wide range of materials with ease. Robust construction ensures decades of reliable service.',
    specs: ['Folding Length: up to 6000mm', 'Material Thickness: 0.5–8mm', 'Hydraulic Drive System'],
    badge: 'Heavy Duty',
    titleId: 'prod-smf-title',
    descId: 'prod-smf-desc',
    imgId: 'prod-smf-img-8c5a3d',
  },
  {
    id: 'metal-folding-machine',
    name: 'Metal Folding Machine',
    tagline: 'CNC-powered automation',
    description:
      'The next generation of metal folding technology. Full CNC automation, touchscreen programming, and intelligent tooling management for maximum productivity.',
    specs: ['CNC 8-axis Control', 'Auto Tool Change', 'Industry 4.0 Ready'],
    badge: 'New',
    titleId: 'prod-mfm-title',
    descId: 'prod-mfm-desc',
    imgId: 'prod-mfm-img-2e9f6b',
  },
];

export default function Products() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section id="products" className="py-24 md:py-32 bg-surface" ref={containerRef}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-xs font-semibold tracking-widest uppercase text-gold mb-3">
            Our Product Range
          </p>
          <h2 id="products-section-title" className="font-display font-bold text-4xl md:text-5xl text-navy mb-5">
            Precision Machines for Every Need
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto text-lg">
            From compact workshop folders to heavy-duty industrial systems — engineered to exceed expectations.
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 group border border-gray-100"
            >
              {/* Image */}
              <div className="relative overflow-hidden h-56">
                <img
                  alt={product.name}
                  data-strk-img-id={product.imgId}
                  data-strk-img={`[${product.descId}] [${product.titleId}] [products-section-title]`}
                  data-strk-img-ratio="16x9"
                  data-strk-img-width="700"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/40 to-transparent" />
                <span className="absolute top-4 left-4 bg-gold text-navy text-xs font-bold px-3 py-1 rounded-full tracking-wide">
                  {product.badge}
                </span>
              </div>

              {/* Content */}
              <div className="p-8">
                <p className="text-xs font-semibold tracking-widest uppercase text-gold mb-2">
                  {product.tagline}
                </p>
                <h3 id={product.titleId} className="font-display font-bold text-2xl text-navy mb-3">
                  {product.name}
                </h3>
                <p id={product.descId} className="text-gray-500 text-sm leading-relaxed mb-5">
                  {product.description}
                </p>

                {/* Specs */}
                <ul className="space-y-1.5 mb-6">
                  {product.specs.map((spec) => (
                    <li key={spec} className="flex items-center gap-2 text-sm text-gray-600">
                      <span className="w-1.5 h-1.5 rounded-full bg-gold flex-shrink-0" />
                      {spec}
                    </li>
                  ))}
                </ul>

                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 text-steel font-semibold text-sm hover:text-gold transition-colors group/link"
                >
                  Request Specifications
                  <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
