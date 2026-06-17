import { useEffect, useRef } from 'react';
import { Shield, Cog, Settings2, ArrowRight } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const products = [
  {
    id: 'double-folding-machine',
    title: 'Double Folding Machine',
    description: 'High-speed dual-axis folding system for complex sheet metal forming. Ideal for high-volume production lines requiring precision bends.',
    features: ['Dual-axis simultaneous operation', 'Up to 12 bends per minute', 'Servo-electric precision control'],
    imgId: 'product-dfm-8a2f9c',
    titleId: 'product-dfm-title',
    descId: 'product-dfm-desc',
  },
  {
    id: 'double-folder',
    title: 'Double Folder',
    description: 'Versatile double-sided folding solution for symmetric and asymmetric profiles. Streamlines workflow with automated backgauging.',
    features: ['Automated backgauge positioning', 'Symmetric & asymmetric folding', 'Touchscreen CNC control'],
    imgId: 'product-df-7b3e1d',
    titleId: 'product-df-title',
    descId: 'product-df-desc',
  },
  {
    id: 'sheet-metal-folder',
    title: 'Sheet Metal Folder',
    description: 'Robust sheet metal folding machine designed for heavy-gauge materials. Built for consistent, repeatable results in demanding environments.',
    features: ['Heavy-gauge capability (up to 6mm)', 'Reinforced steel frame', 'Hydraulic clamping system'],
    imgId: 'product-smf-6c4d2e',
    titleId: 'product-smf-title',
    descId: 'product-smf-desc',
  },
  {
    id: 'sheet-metal-folding-machine',
    title: 'Sheet Metal Folding Machine',
    description: 'Advanced CNC folding machine with programmable bend sequences. Perfect for custom fabrication and batch production.',
    features: ['Programmable bend sequences', 'Multi-axis CNC controller', 'Quick tooling changeover'],
    imgId: 'product-smfm-5e3f1a',
    titleId: 'product-smfm-title',
    descId: 'product-smfm-desc',
  },
  {
    id: 'metal-folder',
    title: 'Metal Folder',
    description: 'General-purpose metal folding machine offering reliable performance across a wide range of materials and thicknesses.',
    features: ['Multi-material compatibility', 'Adjustable folding angle', 'Ergonomic operation'],
    imgId: 'product-mf-4f2g3b',
    titleId: 'product-mf-title',
    descId: 'product-mf-desc',
  },
  {
    id: 'metal-folder-machine',
    title: 'Metal Folder Machine',
    description: 'Industrial-grade metal folder machine engineered for continuous operation in high-throughput manufacturing facilities.',
    features: ['Continuous duty rated', 'Integrated safety systems', 'Low maintenance design'],
    imgId: 'product-mfm-3g5h4c',
    titleId: 'product-mfm-title',
    descId: 'product-mfm-desc',
  },
  {
    id: 'metal-folding-machine',
    title: 'Metal Folding Machine',
    description: 'Premium metal folding machine with adaptive control technology. Delivers unmatched accuracy for mission-critical aerospace and automotive components.',
    features: ['Adaptive crowning compensation', '±0.1mm repeatability', 'Energy-efficient servo drive'],
    imgId: 'product-mf2-2h6i5d',
    titleId: 'product-mf2-title',
    descId: 'product-mf2-desc',
  },
];

export default function ProductsSection() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section id="products" className="py-20 md:py-28 bg-white" ref={containerRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-8 h-0.5 bg-brand-gold" />
            <span className="text-brand-navy tracking-[0.3em] text-sm uppercase font-medium">
              Our Product Line
            </span>
            <div className="w-8 h-0.5 bg-brand-gold" />
          </div>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-brand-navy mb-6">
            Precision Machinery for Every Application
          </h2>
          <p className="text-[#5A6478] text-lg leading-relaxed">
            From compact job-shop folders to industrial-scale folding centers,
            our range covers every requirement with uncompromising quality.
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {products.map((product) => (
            <article
              key={product.id}
              className="group border border-[#E2E0DC] bg-white hover:shadow-lg transition-all duration-300 flex flex-col"
            >
              {/* Image */}
              <div className="relative overflow-hidden bg-brand-cream aspect-[4/3]">
                <img
                  data-strk-img-id={product.imgId}
                  data-strk-img={`[${product.descId}] [${product.titleId}] precision industrial machinery`}
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 3'%3E%3Crect fill='%23F8F6F3' width='4' height='3'/%3E%3C/svg%3E"
                  alt={product.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Content */}
              <div className="p-6 md:p-8 flex flex-col flex-1">
                <h3 id={product.titleId} className="font-serif text-xl md:text-2xl text-brand-navy mb-3">
                  {product.title}
                </h3>
                <p id={product.descId} className="text-[#5A6478] text-sm leading-relaxed mb-4 flex-1">
                  {product.description}
                </p>

                {/* Features */}
                <ul className="space-y-2 mb-6">
                  {product.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm text-[#5A6478]">
                      <Shield size={14} className="text-brand-gold shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <button className="inline-flex items-center gap-2 text-brand-navy text-sm font-medium uppercase tracking-wider hover:text-brand-gold transition-colors group/btn">
                  View Details
                  <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            </article>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-brand-navy text-white px-8 py-3.5 text-sm font-medium uppercase tracking-wider hover:bg-brand-gold transition-colors"
          >
            Request Product Catalog
            <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}