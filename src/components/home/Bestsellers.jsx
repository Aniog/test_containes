import { Link } from 'react-router-dom';
import ProductCard from '../product/ProductCard';
import { getBestsellers } from '../../data/products';

const Bestsellers = () => {
  const products = getBestsellers();

  return (
    <section className="py-20 md:py-28 bg-velmora-bg-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <span className="text-xs tracking-widest uppercase text-velmora-accent mb-4 block">
            Customer Favorites
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-velmora-text-primary">
            Our Bestsellers
          </h2>
          <p className="mt-4 text-velmora-text-secondary max-w-xl mx-auto">
            Discover the pieces our community can't stop wearing. Timeless designs crafted for everyday luxury.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6 lg:gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* View All Link */}
        <div className="text-center mt-12">
          <Link
            to="/shop"
            className="inline-block border-b border-velmora-text-primary pb-1 text-sm tracking-wider uppercase hover:text-velmora-accent hover:border-velmora-accent transition-colors"
          >
            View All Pieces
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Bestsellers;
