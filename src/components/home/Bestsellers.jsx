import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import ProductCard from '@/components/product/ProductCard';
import { PRODUCTS } from '@/data/products';
import { useStrkImages } from '@/lib/useStrkImages';

export default function Bestsellers() {
  const ref = useRef(null);
  useStrkImages(ref, []);

  const bestsellers = PRODUCTS.filter((p) => p.bestseller).slice(0, 5);

  return (
    <section ref={ref} className="bg-porcelain py-20 md:py-28 lg:py-32">
      <div className="max-w-7xl mx-auto px-5 md:px-8 lg:px-12">
        <div className="flex items-end justify-between mb-12 md:mb-16">
          <div>
            <p className="text-[11px] uppercase tracking-[0.3em] text-mute font-sans">
              Most loved
            </p>
            <h2 className="mt-3 font-serif font-light text-espresso text-4xl md:text-5xl lg:text-6xl">
              Bestsellers
            </h2>
          </div>
          <Link
            to="/shop"
            className="hidden md:inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.25em] text-espresso hover:text-gold transition-colors font-sans"
          >
            Shop all <ArrowRight size={14} strokeWidth={1.4} />
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-5 gap-y-12 md:gap-x-6 md:gap-y-14">
          {bestsellers.map((p, i) => (
            <ProductCard key={p.id} product={p} index={i} />
          ))}
        </div>

        <div className="mt-12 text-center md:hidden">
          <Link
            to="/shop"
            className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.25em] text-espresso hover:text-gold transition-colors font-sans"
          >
            Shop all <ArrowRight size={14} strokeWidth={1.4} />
          </Link>
        </div>
      </div>
    </section>
  );
}
