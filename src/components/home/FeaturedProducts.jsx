import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const featuredProducts = [
  {
    id: 'double-folding-machine',
    titleId: 'prod-title-dfm',
    descId: 'prod-desc-dfm',
    imgId: 'prod-img-dfm-x7k2m1',
    title: 'Double Folding Machine',
    description: 'High-capacity double folding machine for complex sheet metal profiles. Ideal for HVAC, roofing, and architectural applications.',
    badge: 'Best Seller',
  },
  {
    id: 'sheet-metal-folder',
    titleId: 'prod-title-smf',
    descId: 'prod-desc-smf',
    imgId: 'prod-img-smf-p9n4q8',
    title: 'Sheet Metal Folder',
    description: 'Versatile sheet metal folding machine with programmable back gauge and multi-angle folding capability for precision fabrication.',
    badge: 'New Model',
  },
  {
    id: 'metal-folding-machine',
    titleId: 'prod-title-mfm',
    descId: 'prod-desc-mfm',
    imgId: 'prod-img-mfm-r3s6t0',
    title: 'Metal Folding Machine',
    description: 'Heavy-duty metal folding machine engineered for continuous industrial use. Handles a wide range of material thicknesses.',
    badge: 'Industrial',
  },
];

const FeaturedProducts = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, []);

  return (
    <section ref={containerRef} className="bg-brand-navy py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-px bg-brand-gold" />
              <span className="text-brand-gold text-xs font-semibold uppercase tracking-[0.3em]">
                Our Machines
              </span>
            </div>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-brand-white">
              Featured Products
            </h2>
          </div>
          <Link
            to="/products"
            className="inline-flex items-center gap-2 text-brand-gold text-sm font-semibold hover:gap-3 transition-all"
          >
            View All Products <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Product Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-brand-steel rounded-2xl overflow-hidden border border-brand-gold/15 hover:border-brand-gold/40 transition-all duration-300 group"
            >
              {/* Image */}
              <div className="relative overflow-hidden aspect-[4/3]">
                <img
                  alt={product.title}
                  data-strk-img-id={product.imgId}
                  data-strk-img={`[${product.descId}] [${product.titleId}]`}
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-steel/60 to-transparent" />
                <span className="absolute top-4 left-4 bg-brand-gold text-brand-navy text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                  {product.badge}
                </span>
              </div>

              {/* Content */}
              <div className="p-7">
                <h3 id={product.titleId} className="font-serif text-xl font-semibold text-brand-white mb-3">
                  {product.title}
                </h3>
                <p id={product.descId} className="text-brand-muted text-sm leading-relaxed mb-6">
                  {product.description}
                </p>
                <Link
                  to="/products"
                  className="inline-flex items-center gap-2 text-brand-gold text-sm font-semibold hover:gap-3 transition-all"
                >
                  Learn More <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
