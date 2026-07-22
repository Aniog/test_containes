import { Link } from 'react-router-dom';
import products from '@/data/products';
import ProductCard from '@/components/product/ProductCard';

const bestsellers = products.filter((p) => p.isBestseller);

export default function BestsellersGrid() {
  return (
    <section className="section-padding py-20 md:py-28">
      <div className="container-wide">
        <div className="text-center mb-12 md:mb-16">
          <p className="text-xs font-medium text-accent tracking-widest uppercase mb-3">
            Most Loved
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-warm-900">
            Bestsellers
          </h2>
          <p className="mt-4 text-sm md:text-base text-warm-500 max-w-md mx-auto">
            The pieces our community can't stop wearing. Each one designed to be your new everyday favorite.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6 lg:gap-8">
          {bestsellers.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="text-center mt-12">
          <Link to="/shop" className="btn-outline">
            View All Products
          </Link>
        </div>
      </div>
    </section>
  );
}