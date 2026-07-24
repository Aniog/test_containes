import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import ProductCard from '@/components/ui/ProductCard';
import { PRODUCTS } from '@/data/products';

export default function Bestsellers() {
  // show all 5 seed products as bestsellers
  const items = PRODUCTS.slice(0, 5);

  return (
    <section
      id="bestsellers"
      className="bg-ivory"
    >
      <div className="container-page py-20 md:py-28">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12 md:mb-16">
          <div>
            <p className="eyebrow">Bestsellers</p>
            <h2 className="mt-3 font-serif text-4xl md:text-5xl text-ink-soft">
              Loved, again and again
            </h2>
          </div>
          <Link
            to="/shop"
            className="group inline-flex items-center text-[11px] uppercase tracking-widest-2 text-ink-soft hover:text-gold transition-colors duration-300 ease-editorial"
          >
            View all
            <ArrowRight
              className="ml-2 w-3.5 h-3.5 transition-transform duration-300 ease-editorial group-hover:translate-x-1"
              strokeWidth={1.6}
            />
          </Link>
        </div>

        {/* mobile: 1.2 cards per row scroll, tablet: 2-col, desktop: 5-col */}
        <div className="-mx-6 md:mx-0 overflow-x-auto scrollbar-hide">
          <div className="grid grid-flow-col auto-cols-[75%] sm:auto-cols-[44%] md:grid-flow-row md:grid-cols-3 lg:grid-cols-5 gap-5 md:gap-6 px-6 md:px-0">
            {items.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
