import { Link } from 'react-router-dom';
import { PRODUCTS } from '@/data/products.js';
import { ImageScope } from '@/components/StrkImage.jsx';
import ProductCard from '@/components/product/ProductCard.jsx';

export default function Bestsellers() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-16 md:px-10 md:py-24">
      <div className="mb-10 flex items-end justify-between md:mb-14">
        <div>
          <p className="text-[11px] font-medium uppercase tracking-[0.3em] text-bronze">Most Loved</p>
          <h2 className="mt-3 font-serif text-4xl font-medium text-espresso md:text-5xl">Bestsellers</h2>
        </div>
        <Link
          to="/shop"
          className="hidden border-b border-espresso pb-1 text-[11px] font-medium uppercase tracking-luxe text-espresso transition-colors hover:border-bronze hover:text-bronze md:inline-block"
        >
          View All
        </Link>
      </div>

      <ImageScope className="grid grid-cols-2 gap-x-4 gap-y-10 md:grid-cols-3 md:gap-x-6 lg:grid-cols-5">
        {PRODUCTS.map((p, i) => (
          <ProductCard key={p.id} product={p} index={i} />
        ))}
      </ImageScope>

      <div className="mt-12 text-center md:hidden">
        <Link
          to="/shop"
          className="inline-block border border-espresso px-10 py-3.5 text-[11px] font-medium uppercase tracking-luxe text-espresso transition-all duration-300 hover:bg-espresso hover:text-ivory"
        >
          View All Jewelry
        </Link>
      </div>
    </section>
  );
}
