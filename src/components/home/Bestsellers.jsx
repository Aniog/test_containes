import { Link } from 'react-router-dom';
import { products } from '../../data/products';
import ProductCard from './ProductCard';

export default function Bestsellers() {
  return (
    <section className="py-20 lg:py-28">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-12">
        <div className="text-center mb-14 lg:mb-20">
          <p className="text-[11px] tracking-[0.25em] uppercase text-taupe mb-4 font-medium">
            The Edit
          </p>
          <h2 className="font-serif text-3xl lg:text-5xl font-light tracking-wide">
            Bestsellers
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 lg:gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="text-center mt-14">
          <Link to="/shop" className="btn-outline">
            View All Pieces
          </Link>
        </div>
      </div>
    </section>
  );
}
