import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import ProductCard from '@/components/product/ProductCard';
import { getBestsellers } from '@/data/products';
import { useReveal } from '@/hooks/useReveal';

export default function Bestsellers() {
  const products = getBestsellers(5);
  const headerRef = useReveal();

  return (
    <section className="bg-bone py-20 md:py-28 lg:py-32">
      <div className="mx-auto max-w-8xl px-5 sm:px-8 lg:px-12">
        <div
          ref={headerRef}
          className="flex flex-col items-baseline justify-between gap-4 md:flex-row md:items-end"
        >
          <div>
            <p className="text-[10px] font-medium uppercase tracking-[0.32em] text-gold-deep">
              Most loved
            </p>
            <h2 className="mt-3 font-serif text-4xl font-light tracking-tight text-espresso sm:text-5xl md:text-[3.5rem]">
              Bestsellers
            </h2>
          </div>
          <Link
            to="/shop"
            className="group inline-flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.24em] text-espresso"
          >
            Shop all
            <ArrowRight
              className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1"
              strokeWidth={1.5}
            />
          </Link>
        </div>

        <div className="mt-10 grid grid-cols-2 gap-x-4 gap-y-12 sm:grid-cols-3 sm:gap-x-6 md:mt-14 md:grid-cols-4 md:gap-x-8 lg:grid-cols-5 lg:gap-x-8">
          {products.map((p, i) => (
            <ProductCard key={p.id} product={p} eager={i < 2} />
          ))}
        </div>
      </div>
    </section>
  );
}
