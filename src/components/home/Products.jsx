import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { ArrowRight } from 'lucide-react';

const products = [
  {
    id: 'double-folding-machine',
    titleId: 'prod-title-dfm',
    descId: 'prod-desc-dfm',
    imgId: 'prod-img-dfm-9a3b1c',
    name: 'Double Folding Machine',
    tagline: 'Dual-action precision folding',
    description:
      'Our flagship double folding machine delivers simultaneous dual-fold operations with micron-level accuracy. Ideal for high-volume production environments demanding consistent quality.',
    specs: ['Fold Length: up to 4000mm', 'Material Thickness: 0.5–6mm', 'Folding Angle: 0–135°'],
  },
  {
    id: 'double-folder',
    titleId: 'prod-title-df',
    descId: 'prod-desc-df',
    imgId: 'prod-img-df-2d4e5f',
    name: 'Double Folder',
    tagline: 'Compact power, professional results',
    description:
      'The ARTITECT Double Folder combines a compact footprint with industrial-grade performance. Perfect for workshops and fabrication shops requiring versatile sheet metal forming.',
    specs: ['Fold Length: up to 2500mm', 'Material Thickness: 0.3–4mm', 'CNC Control: Optional'],
  },
  {
    id: 'sheet-metal-folder',
    titleId: 'prod-title-smf',
    descId: 'prod-desc-smf',
    imgId: 'prod-img-smf-6g7h8i',
    name: 'Sheet Metal Folder',
    tagline: 'Versatile forming for every application',
    description:
      'Engineered for versatility, the ARTITECT Sheet Metal Folder handles a wide range of materials and profiles. Robust construction ensures decades of reliable service.',
    specs: ['Fold Length: up to 3000mm', 'Material Thickness: 0.4–5mm', 'Hydraulic Drive System'],
  },
  {
    id: 'metal-folding-machine',
    titleId: 'prod-title-mfm',
    descId: 'prod-desc-mfm',
    imgId: 'prod-img-mfm-1j2k3l',
    name: 'Metal Folding Machine',
    tagline: 'Heavy-duty industrial performance',
    description:
      'Built for the most demanding industrial applications, the ARTITECT Metal Folding Machine offers unmatched rigidity and repeatability for heavy-gauge metal processing.',
    specs: ['Fold Length: up to 6000mm', 'Material Thickness: up to 10mm', 'Servo-Electric Drive'],
  },
];

export default function Products() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section id="products" ref={containerRef} className="py-24 md:py-32 bg-chalk">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="font-inter text-xs text-gold tracking-[0.35em] uppercase mb-4">Our Product Range</p>
          <h2 className="font-playfair font-bold text-4xl md:text-5xl text-steel mb-5">
            Engineered for Excellence
          </h2>
          <p className="font-inter text-base text-charcoal/70 max-w-2xl mx-auto">
            From compact workshop folders to large-scale industrial folding machines — every ARTITECT product is built with precision craftsmanship and cutting-edge technology.
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="group bg-white rounded-2xl overflow-hidden border border-mist shadow-md hover:shadow-xl transition-all duration-300"
            >
              {/* Product Image */}
              <div className="relative overflow-hidden h-56">
                <img
                  alt={product.name}
                  data-strk-img-id={product.imgId}
                  data-strk-img={`[${product.descId}] [${product.titleId}]`}
                  data-strk-img-ratio="16x9"
                  data-strk-img-width="700"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-steel/60 to-transparent" />
                <span className="absolute bottom-4 left-5 font-inter text-xs text-gold tracking-widest uppercase">
                  {product.tagline}
                </span>
              </div>

              {/* Product Content */}
              <div className="p-7">
                <h3 id={product.titleId} className="font-playfair font-semibold text-2xl text-steel mb-3">
                  {product.name}
                </h3>
                <p id={product.descId} className="font-inter text-sm text-charcoal/70 leading-relaxed mb-5">
                  {product.description}
                </p>

                {/* Specs */}
                <ul className="space-y-1.5 mb-6">
                  {product.specs.map((spec) => (
                    <li key={spec} className="flex items-center gap-2 font-inter text-sm text-charcoal">
                      <span className="w-1.5 h-1.5 rounded-full bg-gold flex-shrink-0" />
                      {spec}
                    </li>
                  ))}
                </ul>

                <button
                  onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="flex items-center gap-2 font-inter text-sm font-semibold text-gold hover:text-gold-light transition-colors bg-transparent border-none cursor-pointer p-0"
                >
                  Request Specifications <ArrowRight size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
