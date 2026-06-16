import { useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const products = [
  {
    id: 'double-folding-machine',
    title: 'Double Folding Machine',
    description: 'High-capacity double folding machine for precision bending of sheet metal panels up to 3mm thickness.',
    specs: ['Up to 3200mm width', '3mm max thickness', 'CNC controlled'],
    imgId: 'product-img-df-8a2c4e',
    titleId: 'product-df-title',
    descId: 'product-df-desc',
  },
  {
    id: 'sheet-metal-folder',
    title: 'Sheet Metal Folder',
    description: 'Versatile sheet metal folder designed for complex profiles and repeatable accuracy in production environments.',
    specs: ['Multi-angle folding', 'Quick tool change', 'Digital readout'],
    imgId: 'product-img-smf-3b7d9f',
    titleId: 'product-smf-title',
    descId: 'product-smf-desc',
  },
  {
    id: 'metal-folding-machine',
    title: 'Metal Folding Machine',
    description: 'Heavy-duty metal folding machine built for continuous industrial use with minimal maintenance requirements.',
    specs: ['Heavy-duty frame', 'Auto back-gauge', 'Low maintenance'],
    imgId: 'product-img-mfm-6c1e8a',
    titleId: 'product-mfm-title',
    descId: 'product-mfm-desc',
  },
];

const Products = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section id="products" className="py-20 lg:py-28 bg-slate-50" ref={containerRef}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-amber-500 font-semibold text-sm uppercase tracking-wider">
            Our Machines
          </span>
          <h2
            id="products-section-title"
            className="text-3xl lg:text-4xl font-bold text-slate-900 tracking-tight mt-3"
          >
            Precision Folding Solutions
          </h2>
          <p
            id="products-section-subtitle"
            className="text-slate-600 text-lg mt-4 leading-relaxed"
          >
            From double folders to complete sheet metal folding systems, our machines
            deliver consistent results for every application.
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <article
              key={product.id}
              className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300 group"
            >
              <div className="aspect-[4/3] overflow-hidden bg-slate-100">
                <img
                  data-strk-img-id={product.imgId}
                  data-strk-img={`[${product.descId}] [${product.titleId}] [products-section-title]`}
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={product.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6 lg:p-8">
                <h3
                  id={product.titleId}
                  className="text-xl font-bold text-slate-900 mb-3"
                >
                  {product.title}
                </h3>
                <p
                  id={product.descId}
                  className="text-slate-600 text-sm leading-relaxed mb-4"
                >
                  {product.description}
                </p>
                <ul className="space-y-2 mb-6">
                  {product.specs.map((spec) => (
                    <li key={spec} className="flex items-center gap-2 text-sm text-slate-700">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-500 flex-shrink-0" />
                      {spec}
                    </li>
                  ))}
                </ul>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 text-amber-600 font-semibold text-sm hover:text-amber-500 transition-colors duration-200"
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

export default Products;
