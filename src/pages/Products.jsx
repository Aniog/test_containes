import React, { useEffect, useRef, useState } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { products, categories } from '@/data/siteData.jsx';
import ProductCard from '@/components/shared/ProductCard.jsx';
import SectionHeader from '@/components/shared/SectionHeader.jsx';
import { ArrowUpRight } from 'lucide-react';

const Products = () => {
  const containerRef = useRef(null);
  const [activeCategory, setActiveCategory] = useState('All');

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  const filtered =
    activeCategory === 'All'
      ? products
      : products.filter((p) => p.category === activeCategory);

  return (
    <div ref={containerRef} className="bg-steel-50">
      <section className="bg-paper border-b border-steel-200">
        <div className="container-artitect pt-20 md:pt-28 pb-12 md:pb-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-end">
            <div className="lg:col-span-8">
              <span
                id="products-hero-eyebrow"
                className="label-eyebrow brass-bar"
              >
                The full lineup
              </span>
              <h1
                id="products-hero-title"
                className="mt-6 font-display font-extrabold text-5xl md:text-7xl lg:text-8xl text-ink-900 leading-[0.95] tracking-tight"
              >
                Seven machines.
                <br />
                <span className="text-accent-600">One standard.</span>
              </h1>
            </div>
            <div className="lg:col-span-4">
              <p
                id="products-hero-desc"
                className="text-lg md:text-xl text-ink-500 leading-relaxed"
              >
                From compact job-shop metal folders to wide-format sheet metal
                folding machines, every ARTITECT machine shares the same
                engineering DNA: precision, durability, and operator-first
                controls.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-paper border-b border-steel-200 sticky top-20 md:top-24 z-30 backdrop-blur-sm">
        <div className="container-artitect py-4 md:py-6">
          <div className="flex items-center gap-2 overflow-x-auto pb-2 -mb-2">
            <button
              type="button"
              onClick={() => setActiveCategory('All')}
              className={`whitespace-nowrap px-4 py-2 text-xs uppercase tracking-wider2 font-semibold border transition-colors ${
                activeCategory === 'All'
                  ? 'bg-ink-900 text-paper border-ink-900'
                  : 'bg-paper text-ink-700 border-steel-300 hover:border-ink-900 hover:text-ink-900'
              }`}
            >
              All ({products.length})
            </button>
            {categories.map((cat) => {
              const count = products.filter((p) => p.category === cat).length;
              const isActive = activeCategory === cat;
              return (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setActiveCategory(cat)}
                  className={`whitespace-nowrap px-4 py-2 text-xs uppercase tracking-wider2 font-semibold border transition-colors ${
                    isActive
                      ? 'bg-ink-900 text-paper border-ink-900'
                      : 'bg-paper text-ink-700 border-steel-300 hover:border-ink-900 hover:text-ink-900'
                  }`}
                >
                  {cat} ({count})
                </button>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 lg:py-24">
        <div className="container-artitect">
          {filtered.length === 0 ? (
            <div className="bg-paper border border-steel-200 p-16 text-center">
              <p className="font-display text-2xl text-ink-900">
                No machines match this filter.
              </p>
              <p className="mt-2 text-ink-500">
                Try a different category or contact us about a custom build.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {filtered.map((product) => (
                <ProductCard key={product.slug} product={product} />
              ))}
            </div>
          )}
        </div>
      </section>

      <section className="bg-ink-900 text-paper">
        <div className="container-artitect py-20 md:py-28">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-8">
              <span className="label-eyebrow text-accent-500 brass-bar">
                Not sure which machine?
              </span>
              <h2 className="mt-6 font-display font-extrabold text-3xl md:text-5xl text-paper tracking-tight leading-tight">
                Talk to an engineer. We&apos;ll help you spec it right.
              </h2>
            </div>
            <div className="lg:col-span-4 flex flex-col gap-3">
              <a href="/contact" className="btn-accent">
                Talk to engineering
                <ArrowUpRight className="w-4 h-4" strokeWidth={1.5} />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;
