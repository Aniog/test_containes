import React, { useEffect, useMemo, useRef } from 'react';
import { Link, useParams } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { products } from '@/data/siteData.jsx';
import { ArrowUpRight, Check, ArrowLeft } from 'lucide-react';

const ProductDetail = () => {
  const { slug } = useParams();
  const containerRef = useRef(null);

  const product = useMemo(
    () => products.find((p) => p.slug === slug),
    [slug]
  );

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, [slug]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [slug]);

  if (!product) {
    return (
      <div className="container-artitect py-32 text-center">
        <h1 className="font-display text-4xl text-ink-900">Machine not found</h1>
        <p className="mt-4 text-ink-500">
          We couldn&apos;t find that machine in our catalog.
        </p>
        <Link to="/products" className="btn-primary mt-8 inline-flex">
          <ArrowLeft className="w-4 h-4" strokeWidth={1.5} />
          Back to products
        </Link>
      </div>
    );
  }

  const otherProducts = products.filter((p) => p.slug !== product.slug).slice(0, 3);

  return (
    <div ref={containerRef} className="bg-paper">
      <section className="bg-steel-50 border-b border-steel-200">
        <div className="container-artitect pt-10 md:pt-14 pb-12 md:pb-20">
          <Link
            to="/products"
            className="inline-flex items-center gap-2 text-xs uppercase tracking-wider2 font-semibold text-steel-500 hover:text-ink-900"
          >
            <ArrowLeft className="w-4 h-4" strokeWidth={1.5} />
            All machines
          </Link>
          <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
            <div className="lg:col-span-5 lg:sticky lg:top-32">
              <div className="relative aspect-[4/3] bg-steel-100 border border-steel-200 overflow-hidden">
                <img
                  alt={product.name}
                  data-strk-img-id={product.primaryId}
                  data-strk-img={`[${product.descId}] [${product.titleId}] [detail-eyebrow] ARTITECT MACHINERY product`}
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="1200"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="w-full h-full object-cover"
                />
                <span className="absolute top-4 left-4 inline-flex items-center bg-paper/95 backdrop-blur-sm px-3 py-1 font-mono text-[10px] tracking-wider2 uppercase text-ink-900">
                  {product.specs.model}
                </span>
              </div>
              <div className="mt-4 grid grid-cols-4 gap-2">
                {[0, 1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className="aspect-square bg-steel-100 border border-steel-200"
                  />
                ))}
              </div>
            </div>

            <div className="lg:col-span-7">
              <span
                id="detail-eyebrow"
                className="label-eyebrow text-accent-600 brass-bar"
              >
                {product.category}
              </span>
              <h1
                id={product.titleId}
                className="mt-6 font-display font-extrabold text-4xl md:text-6xl text-ink-900 leading-[1.05] tracking-tight"
              >
                {product.name}
              </h1>
              <p
                id={product.descId}
                className="mt-6 text-lg md:text-xl text-ink-500 leading-relaxed"
              >
                {product.description}
              </p>

              <div className="mt-8 grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 border-y border-steel-200 py-8">
                <div>
                  <div className="font-mono text-[10px] tracking-wider2 uppercase text-steel-500">
                    Working length
                  </div>
                  <div className="mt-1 font-display font-bold text-xl md:text-2xl text-ink-900">
                    {product.specs.length}
                  </div>
                </div>
                <div>
                  <div className="font-mono text-[10px] tracking-wider2 uppercase text-steel-500">
                    Folding capacity
                  </div>
                  <div className="mt-1 font-display font-bold text-xl md:text-2xl text-ink-900">
                    {product.specs.capacity}
                  </div>
                </div>
                <div>
                  <div className="font-mono text-[10px] tracking-wider2 uppercase text-steel-500">
                    Power
                  </div>
                  <div className="mt-1 font-display font-bold text-xl md:text-2xl text-ink-900">
                    {product.specs.power}
                  </div>
                </div>
              </div>

              <ul className="mt-8 space-y-4">
                {product.highlights.map((h) => (
                  <li key={h} className="flex items-start gap-3">
                    <span className="mt-1 inline-flex items-center justify-center w-5 h-5 bg-ink-900 text-paper flex-shrink-0">
                      <Check className="w-3 h-3" strokeWidth={2} />
                    </span>
                    <span className="text-ink-700 text-base md:text-lg">{h}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-10 flex flex-col sm:flex-row gap-3">
                <Link to="/contact" className="btn-primary">
                  Request a quote
                  <ArrowUpRight className="w-4 h-4" strokeWidth={1.5} />
                </Link>
                <Link to="/products" className="btn-outline">
                  Compare machines
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="container-artitect">
          <div className="max-w-3xl mb-12">
            <span className="label-eyebrow brass-bar">Full specifications</span>
            <h2 className="mt-4 font-display font-extrabold text-3xl md:text-4xl text-ink-900">
              Engineered to the last detail.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-steel-200 border border-steel-200">
            {Object.entries(product.specs).map(([key, value]) => (
              <div
                key={key}
                className="bg-paper px-6 md:px-8 py-6 flex items-center justify-between gap-6"
              >
                <div className="font-mono text-[10px] tracking-wider2 uppercase text-steel-500">
                  {key.replace(/_/g, ' ')}
                </div>
                <div className="font-display font-semibold text-ink-900 text-right">
                  {value}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-steel-50 py-20 md:py-28 border-t border-steel-200">
        <div className="container-artitect">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
            <div>
              <span className="label-eyebrow brass-bar">You may also consider</span>
              <h2 className="mt-4 font-display font-extrabold text-3xl md:text-4xl text-ink-900">
                Other machines in the lineup.
              </h2>
            </div>
            <Link to="/products" className="btn-outline whitespace-nowrap">
              See all
              <ArrowUpRight className="w-4 h-4" strokeWidth={1.5} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {otherProducts.map((p) => (
              <Link
                key={p.slug}
                to={`/products/${p.slug}`}
                className="group bg-paper border border-steel-200 hover:border-ink-900 transition-all duration-300 hover:-translate-y-1 flex flex-col h-full"
              >
                <div className="relative aspect-[4/3] bg-steel-100 overflow-hidden">
                  <img
                    alt={p.name}
                    data-strk-img-id={p.primaryId}
                    data-strk-img={`[${p.descId}] [${p.titleId}] ARTITECT MACHINERY product`}
                    data-strk-img-ratio="4x3"
                    data-strk-img-width="800"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <div className="font-mono text-[10px] tracking-wider2 uppercase text-steel-500">
                    {p.specs.model}
                  </div>
                  <div className="mt-2 font-display font-bold text-xl text-ink-900">
                    {p.name}
                  </div>
                  <div className="mt-1 text-sm text-ink-500">{p.category}</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductDetail;
