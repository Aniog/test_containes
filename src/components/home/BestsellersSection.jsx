import { Link } from 'react-router-dom';
import ProductCard from '../products/ProductCard';
import { getBestsellers } from '../../data/products';

const BestsellersSection = () => {
  const bestsellers = getBestsellers().slice(0, 5);

  return (
    <section className="section-padding bg-ivory">
      <div className="container-wide">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="text-xs tracking-ultra-wide uppercase text-gold">
            Customer Favorites
          </span>
          <h2 className="font-serif text-3xl md:text-4xl mt-2">
            Our Bestsellers
          </h2>
          <div className="w-12 h-px bg-gold mx-auto mt-4" />
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {bestsellers.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* View All Link */}
        <div className="text-center mt-12">
          <Link to="/collection" className="btn-secondary">
            View All Jewelry
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BestsellersSection;
