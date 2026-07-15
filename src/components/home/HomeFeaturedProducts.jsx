import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const products = [
  {
    id: 'double-folding-machine',
    title: 'Double Folding Machine',
    desc: 'High-performance double folding machine for complex sheet metal bends with exceptional accuracy and repeatability.',
    imgId: 'prod-thumb-dfm-x1y2z3',
    titleId: 'prod-double-folding-title',
    descId: 'prod-double-folding-desc',
  },
  {
    id: 'double-folder',
    title: 'Double Folder',
    desc: 'Versatile double folder designed for high-volume production environments requiring consistent fold quality.',
    imgId: 'prod-thumb-df-a4b5c6',
    titleId: 'prod-double-folder-title',
    descId: 'prod-double-folder-desc',
  },
  {
    id: 'sheet-metal-folder',
    title: 'Sheet Metal Folder',
    desc: 'Precision sheet metal folder engineered for clean, accurate bends across a wide range of material thicknesses.',
    imgId: 'prod-thumb-smf-d7e8f9',
    titleId: 'prod-sheet-metal-folder-title',
    descId: 'prod-sheet-metal-folder-desc',
  },
];

export default function HomeFeaturedProducts() {
  const containerRef = useRef(null);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, []);

  return (
    <section ref={containerRef} className="bg-brand-offwhite py-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="w-6 h-px bg-brand-gold" />
              <span className="text-brand-gold text-xs font-semibold uppercase tracking-widest">Our Machines</span>
            </div>
            <h2 id="featured-section-title" className="text-4xl font-bold text-brand-navy">Featured Products</h2>
            <p className="text-brand-gray mt-3 max-w-lg">
              Engineered for precision and built to last — explore our flagship sheet metal folding solutions.
            </p>
          </div>
          <Link
            to="/products"
            className="inline-flex items-center gap-2 text-brand-gold font-semibold hover:gap-3 transition-all"
          >
            View All Products <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Product Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product) => (
            <article
              key={product.id}
              className="bg-brand-white rounded-2xl overflow-hidden border border-brand-light shadow-md hover:shadow-xl transition-all duration-300 group"
            >
              <div className="relative overflow-hidden aspect-[4/3]">
                <img
                  alt={product.title}
                  data-strk-img-id={product.imgId}
                  data-strk-img={`[${product.descId}] [${product.titleId}] [featured-section-title]`}
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="p-6">
                <h3 id={product.titleId} className="text-lg font-bold text-brand-navy mb-2">{product.title}</h3>
                <p id={product.descId} className="text-sm text-brand-gray leading-relaxed mb-5">{product.desc}</p>
                <Link
                  to="/products"
                  className="inline-flex items-center gap-1.5 text-brand-gold text-sm font-semibold hover:gap-2.5 transition-all"
                >
                  Learn More <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
