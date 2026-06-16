import React, { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { ArrowRight } from 'lucide-react';

const products = [
  {
    id: 'double-folding-machine',
    title: 'Double Folding Machine',
    description:
      'High-performance double folding machine capable of simultaneous dual-axis folding for maximum productivity in sheet metal fabrication.',
    features: ['Dual-axis operation', 'CNC control', 'Auto back gauge'],
    imgId: 'product-dfm-b2c4d6',
    titleId: 'product-dfm-title',
    descId: 'product-dfm-desc',
  },
  {
    id: 'double-folder',
    title: 'Double Folder',
    description:
      'Versatile double folder designed for complex bending operations with consistent accuracy across long workpieces.',
    features: ['Heavy-duty frame', 'Precision bearings', 'Variable speed'],
    imgId: 'product-df-e3f5a7',
    titleId: 'product-df-title',
    descId: 'product-df-desc',
  },
  {
    id: 'sheet-metal-folder',
    title: 'Sheet Metal Folder',
    description:
      'Professional sheet metal folder with quick-change tooling and digital angle readout for fast, accurate setups.',
    features: ['Quick-change tooling', 'Digital readout', 'Safety guards'],
    imgId: 'product-smf-g8h2j4',
    titleId: 'product-smf-title',
    descId: 'product-smf-desc',
  },
  {
    id: 'sheet-metal-folding-machine',
    title: 'Sheet Metal Folding Machine',
    description:
      'Automated sheet metal folding machine with programmable bending sequences for high-volume production environments.',
    features: ['Programmable sequences', 'Batch processing', 'Touch screen UI'],
    imgId: 'product-smfm-k5l9m1',
    titleId: 'product-smfm-title',
    descId: 'product-smfm-desc',
  },
  {
    id: 'metal-folder',
    title: 'Metal Folder',
    description:
      'Robust metal folder built for daily industrial use, offering reliable performance and easy maintenance.',
    features: ['Low maintenance', 'Ergonomic design', 'High torque motor'],
    imgId: 'product-mf-n3o7p2',
    titleId: 'product-mf-title',
    descId: 'product-mf-desc',
  },
  {
    id: 'metal-folder-machine',
    title: 'Metal Folder Machine',
    description:
      'Full-featured metal folder machine with advanced CNC integration and real-time monitoring for smart manufacturing.',
    features: ['CNC integration', 'Real-time monitoring', 'IoT ready'],
    imgId: 'product-mfm-q4r8s6',
    titleId: 'product-mfm-title',
    descId: 'product-mfm-desc',
  },
  {
    id: 'metal-folding-machine',
    title: 'Metal Folding Machine',
    description:
      'Premium metal folding machine delivering exceptional bending precision with servo-driven technology and adaptive clamping.',
    features: ['Servo-driven', 'Adaptive clamping', 'Energy efficient'],
    imgId: 'product-mfld-t1u5v9',
    titleId: 'product-mfld-title',
    descId: 'product-mfld-desc',
  },
];

const Products = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section id="products" ref={containerRef} className="py-20 md:py-28 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-gold text-xs font-semibold tracking-wider uppercase">
            Our Product Line
          </span>
          <h2
            id="products-title"
            className="text-3xl sm:text-4xl font-bold text-navy mt-3 mb-4"
          >
            Precision Metal Folding Solutions
          </h2>
          <p className="text-slate-500 max-w-2xl mx-auto text-lg">
            From manual folders to fully automated CNC folding systems, we offer
            the complete range for every metalworking need.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <article
              key={product.id}
              className="group bg-white rounded-lg border border-slate-200 overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              <div className="relative h-52 overflow-hidden bg-slate-100">
                <img
                  alt={product.title}
                  data-strk-img-id={product.imgId}
                  data-strk-img={`[${product.descId}] [${product.titleId}] [products-title]`}
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              <div className="p-6">
                <h3
                  id={product.titleId}
                  className="text-lg font-bold text-navy mb-2"
                >
                  {product.title}
                </h3>
                <p
                  id={product.descId}
                  className="text-slate-500 text-sm leading-relaxed mb-4"
                >
                  {product.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-5">
                  {product.features.map((feat) => (
                    <span
                      key={feat}
                      className="bg-steel/10 text-steel text-xs font-medium px-2.5 py-1 rounded-full"
                    >
                      {feat}
                    </span>
                  ))}
                </div>

                <a
                  href="#contact"
                  className="inline-flex items-center gap-1.5 text-steel hover:text-steel-dark text-sm font-semibold transition-colors"
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
