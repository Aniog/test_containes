import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { products } from '@/data/products';
import ProductCard from '@/components/product/ProductCard';
import SectionHeading from '@/components/ui/SectionHeading';

export default function Bestsellers() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-16 md:px-10 md:py-24 lg:py-28">
      <SectionHeading
        eyebrow="Most Loved"
        title="The Bestsellers"
        copy="The pieces our community reaches for again and again — quiet icons in warm 18K gold."
      />
      <div className="mt-12 grid grid-cols-2 gap-x-4 gap-y-10 md:mt-16 md:gap-x-6 lg:grid-cols-5">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      <div className="reveal mt-12 text-center md:mt-16">
        <Link
          to="/shop"
          className="group inline-flex items-center gap-2.5 border-b border-gold/50 pb-1.5 text-[11px] font-sans font-medium uppercase tracking-[0.26em] text-gold transition-colors duration-300 hover:border-gold hover:text-goldlight"
        >
          View All Pieces
          <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
        </Link>
      </div>
    </section>
  );
}
