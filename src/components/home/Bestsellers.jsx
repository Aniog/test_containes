import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import ProductCard from '../product/ProductCard';
import { getBestsellers } from '../../data/products';

const Bestsellers = () => {
  const bestsellers = getBestsellers();

  return (
    <section className="py-20 md:py-28">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="mb-3">Our Bestsellers</h2>
          <p className="text-slate max-w-md mx-auto">
            The pieces our customers reach for every day. Timeless designs crafted in 18K gold plating.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {bestsellers.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            to="/shop"
            className="inline-flex items-center gap-2 text-sm uppercase tracking-wide text-gold hover:text-gold-dark transition-colors group"
          >
            <span>View All Jewelry</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Bestsellers;
