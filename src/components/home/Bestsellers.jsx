import { Link } from 'react-router-dom';
import { products } from '../../data/products';
import ProductCard from '../product/ProductCard';

export default function Bestsellers() {
  const bestsellers = products.filter(p => p.bestseller);

  return (
    <section className="section-padding bg-cream-50">
      <div className="container-wide">
        <div className="text-center mb-12 md:mb-16">
          <p className="font-sans text-xs tracking-[0.35em] uppercase text-gold-600 mb-4">
            Most loved
          </p>
          <h2 className="font-serif text-heading-xl md:text-display text-charcoal-800">
            Bestsellers
          </h2>
          <div className="w-16 h-[1px] bg-gold-400 mx-auto mt-6" />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {bestsellers.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
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
