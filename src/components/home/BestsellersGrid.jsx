import { Link } from 'react-router-dom';
import ProductCard from '@/components/product/ProductCard';
import products from '@/data/products';

const bestsellers = products.filter((p) => p.bestseller);

export default function BestsellersGrid() {
  return (
    <section className="py-20 md:py-28">
      <div className="mx-auto max-w-[1440px] px-6 md:px-12 lg:px-20">
        <div className="text-center mb-12 md:mb-16">
          <p className="font-sans text-xs tracking-[0.28em] uppercase text-ink-400 mb-3">
            Most Loved
          </p>
          <h2 className="font-serif text-3xl md:text-5xl font-light tracking-wide">
            Bestsellers
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6 lg:gap-8">
          {bestsellers.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="text-center mt-12">
          <Link to="/shop" className="btn-outline">
            View All Pieces
          </Link>
        </div>
      </div>
    </section>
  );
}