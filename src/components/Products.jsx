import { useEffect, useRef } from 'react';
import { ArrowRight, Ruler, Settings, Zap } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const products = [
  {
    id: 'double-folding-machine',
    title: 'Double Folding Machine',
    description:
      'High-precision dual-action folding for complex sheet metal profiles. Ideal for industrial manufacturing with consistent, repeatable results.',
    specs: ['Max length: 3200mm', 'Thickness: 0.5-3.0mm', 'CNC Control'],
    imgId: 'product-double-folding-7d8e9f',
  },
  {
    id: 'double-folder',
    title: 'Double Folder',
    description:
      'Compact and efficient double folder designed for workshops requiring versatility without compromising on fold quality.',
    specs: ['Max length: 2500mm', 'Thickness: 0.4-2.5mm', 'Manual + Digital'],
    imgId: 'product-double-folder-1a2b3c',
  },
  {
    id: 'sheet-metal-folder',
    title: 'Sheet Metal Folder',
    description:
      'Reliable sheet metal folder built for everyday production. Robust construction with smooth operation and minimal maintenance.',
    specs: ['Max length: 4000mm', 'Thickness: 0.3-4.0mm', 'Hydraulic Drive'],
    imgId: 'product-sheet-folder-4d5e6f',
  },
  {
    id: 'sheet-metal-folding-machine',
    title: 'Sheet Metal Folding Machine',
    description:
      'Advanced sheet metal folding machine with programmable backgauge and automatic angle correction for flawless folds every time.',
    specs: ['Max length: 6000mm', 'Thickness: 0.5-6.0mm', 'Full CNC'],
    imgId: 'product-sheet-folding-7g8h9i',
  },
  {
    id: 'metal-folder',
    title: 'Metal Folder',
    description:
      'Versatile metal folder suitable for a wide range of materials including aluminum, stainless steel, and mild steel.',
    specs: ['Max length: 3000mm', 'Thickness: 0.5-3.5mm', 'Semi-Automatic'],
    imgId: 'product-metal-folder-2j3k4l',
  },
  {
    id: 'metal-folder-machine',
    title: 'Metal Folder Machine',
    description:
      'Heavy-duty metal folder machine engineered for continuous production environments with high throughput requirements.',
    specs: ['Max length: 5000mm', 'Thickness: 1.0-8.0mm', 'Servo Motor'],
    imgId: 'product-metal-folder-mach-5m6n7o',
  },
  {
    id: 'metal-folding-machine',
    title: 'Metal Folding Machine',
    description:
      'Our flagship metal folding machine combines cutting-edge automation with rugged reliability for the most demanding applications.',
    specs: ['Max length: 8000mm', 'Thickness: 0.5-10mm', 'Industry 4.0 Ready'],
    imgId: 'product-metal-folding-8p9q0r',
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
      className="py-20 md:py-28 bg-[#f8f9fa]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-[#c9a84c] font-semibold tracking-widest uppercase text-sm mb-3">
            Our Range
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-[#1a1a1a] mb-4">
            Folding & Bending Solutions
          </h2>
          <p className="text-[#6c757d] max-w-2xl mx-auto">
            From compact workshop folders to industrial-scale folding lines, we
            engineer equipment that delivers precision fold after fold.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <article
              key={product.id}
              className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow border border-gray-100 overflow-hidden group"
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  data-strk-img-id={product.imgId}
                  data-strk-img={`[product-desc-${product.id}] [product-title-${product.id}]`}
                  data-strk-img-ratio="16x9"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={product.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3
                  id={`product-title-${product.id}`}
                  className="text-xl font-bold text-[#1a1a1a] mb-2"
                >
                  {product.title}
                </h3>
                <p
                  id={`product-desc-${product.id}`}
                  className="text-[#6c757d] text-sm mb-4 leading-relaxed"
                >
                  {product.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {product.specs.map((spec) => (
                    <span
                      key={spec}
                      className="inline-flex items-center gap-1 text-xs font-medium bg-[#1a3a5c]/10 text-[#1a3a5c] px-2.5 py-1 rounded"
                    >
                      {spec.includes('mm') && (
                        <Ruler className="w-3 h-3" />
                      )}
                      {spec.includes('CNC') && (
                        <Settings className="w-3 h-3" />
                      )}
                      {spec.includes('Motor') && (
                        <Zap className="w-3 h-3" />
                      )}
                      {spec}
                    </span>
                  ))}
                </div>
                <a
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault();
                    const el = document.querySelector('#contact');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="inline-flex items-center gap-1 text-[#c9a84c] font-semibold hover:gap-2 transition-all"
                >
                  Request Info <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
