import React, { useRef, useEffect } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { ArrowRight, Gauge, Layers, Cog } from 'lucide-react';

const products = [
  {
    id: 'double-folding-machine',
    title: 'Double Folding Machine',
    desc: 'High-precision dual-axis folding for complex metal profiles with automated calibration.',
    iconId: 'product-icon-1',
    imgId: 'product-img-1',
  },
  {
    id: 'double-folder',
    title: 'Double Folder',
    compact: true,
    desc: 'Compact twin-folder design for space-efficient workshops without compromising output.',
    iconId: 'product-icon-2',
    imgId: 'product-img-2',
  },
  {
    id: 'sheet-metal-folder',
    title: 'Sheet Metal Folder',
    desc: 'Versatile sheet handling system designed for accurate bends on thin to medium gauge materials.',
    iconId: 'product-icon-3',
    imgId: 'product-img-3',
  },
  {
    id: 'sheet-metal-folding-machine',
    title: 'Sheet Metal Folding Machine',
    desc: 'Industrial-grade folding with hydraulic precision and digital readout for repeatable results.',
    iconId: 'product-icon-4',
    imgId: 'product-img-4',
  },
  {
    id: 'metal-folder',
    title: 'Metal Folder',
    desc: 'Robust manual and semi-automatic metal folders built for fabrication professionals.',
    iconId: 'product-icon-5',
    imgId: 'product-img-5',
  },
  {
    id: 'metal-folder-machine',
    title: 'Metal Folder Machine',
    desc: 'Heavy-duty folder machine engineered for continuous industrial production lines.',
    iconId: 'product-icon-6',
    imgId: 'product-img-6',
  },
  {
    id: 'metal-folding-machine',
    title: 'Metal Folding Machine',
    desc: 'Advanced CNC-controlled folding machine for complex geometries and high-volume output.',
    iconId: 'product-icon-7',
    imgId: 'product-img-7',
  },
];

export default function ProductsSection() {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section
      id="products"
      ref={containerRef}
      className="relative py-20 md:py-28 lg:py-32 bg-charcoal"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16 md:mb-20">
          <span className="inline-block text-bronze text-xs uppercase tracking-[0.3em] font-semibold mb-4">
            Our Product Line
          </span>
          <h2
            id="section-title-products"
            className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-off-white mb-6"
          >
            Machines Built for <span className="text-gold">Precision</span>
          </h2>
          <p
            id="section-subtitle-products"
            className="text-muted-gray text-base md:text-lg max-w-2xl mx-auto leading-relaxed"
          >
            From compact workshop tools to full-scale industrial systems, discover the machine that fits your production needs.
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {products.map((product) => {
            const titleId = `product-title-${product.id}`;
            const descId = `product-desc-${product.id}`;
            return (
              <article
                key={product.id}
                className="group relative bg-slate rounded-xl border border-white/[0.06] overflow-hidden hover:border-bronze/40 transition-all duration-300 hover:shadow-[0_0_40px_rgba(184,134,11,0.08)]"
              >
                {/* Product Image */}
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    data-strk-img-id={product.imgId}
                    data-strk-img={`[${descId}] [${titleId}]`}
                    data-strk-img-ratio="4x3"
                    data-strk-img-width="600"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={product.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-charcoal/20 group-hover:bg-charcoal/10 transition-colors duration-300" />
                </div>

                {/* Product Content */}
                <div className="p-6 lg:p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-lg bg-bronze/10 flex items-center justify-center">
                      <Cog className="w-5 h-5 text-bronze" />
                    </div>
                    <h3
                      id={titleId}
                      className="font-heading text-lg lg:text-xl font-semibold text-off-white group-hover:text-gold transition-colors duration-200"
                    >
                      {product.title}
                    </h3>
                  </div>
                  <p
                    id={descId}
                    className="text-muted-gray text-sm leading-relaxed mb-6"
                  >
                    {product.desc}
                  </p>
                  <button
                    className="inline-flex items-center gap-2 text-bronze text-sm font-medium hover:text-gold transition-colors duration-200"
                  >
                    View Details
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
