import { Link } from 'react-router-dom';
import ProductCard from '../product/ProductCard';
import { getBestsellers } from '../../data/products';

export default function BestsellersSection() {
  const bestsellers = getBestsellers();

  return (
    <section className="section bg-bg">
      <div className="container mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-10 md:mb-16">
          <div>
            <span className="text-xs font-medium tracking-extra-wide uppercase text-accent mb-2 block">
              Customer Favorites
            </span>
            <h2 className="font-serif text-3xl md:text-4xl text-text">
              Our Bestsellers
            </h2>
          </div>
          <Link
            to="/shop"
            className="mt-4 md:mt-0 text-sm font-medium text-text-muted hover:text-text transition-colors duration-200 underline underline-offset-4"
          >
            View All
          </Link>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-6">
          {bestsellers.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
