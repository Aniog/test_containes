import { useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const products = [
  {
    id: 'double-folder',
    title: 'Double Folding Machine',
    description: 'High-performance double folder designed for precision bending of sheet metal panels with automated back-gauge positioning.',
    specs: ['Up to 3200mm width', 'CNC controlled', '0.5–3mm thickness'],
    imgId: 'product-img-df-8a2c4e',
    titleId: 'product-double-folder-title',
    descId: 'product-double-folder-desc',
  },
  {
    id: 'sheet-metal-folder',
    title: 'Sheet Metal Folder',
    description: 'Versatile sheet metal folding machine ideal for HVAC, roofing, and cladding applications with quick tool changeover.',
    specs: ['Up to 2500mm width', 'Hydraulic drive', '0.4–2.5mm thickness'],
    imgId: 'product-img-smf-3d7b1a',
    titleId: 'product-sheet-metal-folder-title',
    descId: 'product-sheet-metal-folder-desc',
  },
  {
    id: 'metal-folder-pro',
    title: 'Metal Folder Pro',
    description: 'Industrial-grade metal folding machine with servo-electric drive for maximum energy efficiency and repeatable accuracy.',
    specs: ['Up to 4000mm width', 'Servo-electric', '0.5–4mm thickness'],
    imgId: 'product-img-mfp-6e9f2b',
    titleId: 'product-metal-folder-pro-title',
    descId: 'product-metal-folder-pro-desc',
  },
];

const ProductsSection = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section id="products" className="py-20 lg:py-28 bg-white" ref={containerRef}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-sm font-semibold text-brass-500 uppercase tracking-wider mb-3">
            Our Products
          </p>
          <h2
            id="products-section-title"
            className="text-3xl lg:text-4xl font-bold tracking-tight text-navy-900"
          >
            Engineered for Every Application
          </h2>
          <p
            id="products-section-subtitle"
            className="mt-4 text-lg text-slate-600"
          >
            From compact workshops to large-scale production lines, our range of
            folding machines meets the demands of modern metalworking.
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <article
              key={product.id}
              className="group bg-slate-50 rounded-2xl border border-slate-200/60 overflow-hidden hover:shadow-lg transition-all duration-300"
            >
              <div className="aspect-[4/3] overflow-hidden bg-slate-100">
                <img
                  data-strk-img-id={product.imgId}
                  data-strk-img={`[${product.descId}] [${product.titleId}] [products-section-title]`}
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 3'/%3E"
                  alt={product.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6 lg:p-8">
                <h3
                  id={product.titleId}
                  className="text-xl font-bold text-navy-900 mb-2"
                >
                  {product.title}
                </h3>
                <p
                  id={product.descId}
                  className="text-slate-600 text-sm leading-relaxed mb-4"
                >
                  {product.description}
                </p>
                <ul className="space-y-1.5 mb-6">
                  {product.specs.map((spec) => (
                    <li
                      key={spec}
                      className="flex items-center gap-2 text-sm text-slate-700"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-brass-500" />
                      {spec}
                    </li>
                  ))}
                </ul>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-1 text-sm font-medium text-brass-500 hover:text-brass-400 transition-colors"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
