import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { ArrowUpRight } from 'lucide-react';
import { products } from '@/data/siteData.jsx';
import SectionHeader from '@/components/shared/SectionHeader.jsx';

const featured = [
  products[0], // DF-3200
  products[3], // MF-4000
  products[5], // MFM-3200
];

const ProductShowcase = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section
      ref={containerRef}
      className="bg-steel-50 py-20 md:py-28 lg:py-32"
    >
      <div className="container-artitect">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12 md:mb-16">
          <SectionHeader
            id="products"
            eyebrow="The lineup"
            title="A machine for every fold."
            description="From compact job-shop folders to automated production cells, ARTITECT covers the full spectrum of sheet metal folding."
          />
          <Link
            to="/products"
            className="btn-outline self-start md:self-end whitespace-nowrap"
          >
            See all 7 machines
            <ArrowUpRight className="w-4 h-4" strokeWidth={1.5} />
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
          {featured.map((product, i) => (
            <Link
              to={`/products/${product.slug}`}
              key={product.slug}
              id={`showcase-${i}`}
              className="group relative bg-paper border border-steel-200 hover:border-ink-900 transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_24px_60px_-24px_rgba(15,20,25,0.3)] flex flex-col h-full"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-steel-100">
                <img
                  alt={product.name}
                  data-strk-img-id={product.primaryId}
                  data-strk-img={`[${product.descId}] [${product.titleId}] ARTITECT MACHINERY product`}
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="800"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <span className="absolute top-4 left-4 inline-flex items-center bg-paper/95 backdrop-blur-sm px-3 py-1 font-mono text-[10px] tracking-wider2 uppercase text-ink-900">
                  {product.specs.model}
                </span>
              </div>

              <div className="flex flex-col flex-1 p-6 md:p-8">
                <span className="label-eyebrow text-accent-600">
                  {product.category}
                </span>
                <h3
                  id={product.titleId}
                  className="mt-3 font-display font-bold text-2xl md:text-3xl text-ink-900 leading-tight"
                >
                  {product.name}
                </h3>
                <p
                  id={product.descId}
                  className="mt-4 text-ink-500 text-sm md:text-base leading-relaxed flex-1"
                >
                  {product.description}
                </p>

                <div className="mt-6 pt-6 border-t border-steel-200 flex items-center justify-between">
                  <div>
                    <div className="font-mono text-[10px] tracking-wider2 uppercase text-steel-500">
                      Working length
                    </div>
                    <div className="mt-1 font-display font-semibold text-ink-900">
                      {product.specs.length}
                    </div>
                  </div>
                  <div className="inline-flex items-center gap-1.5 text-xs uppercase tracking-wider2 font-semibold text-ink-900">
                    View
                    <ArrowUpRight className="w-4 h-4" strokeWidth={1.5} />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;
