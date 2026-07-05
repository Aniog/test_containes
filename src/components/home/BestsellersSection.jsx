import { Link } from 'react-router-dom';
import ProductCard from '../product/ProductCard';
import { getBestsellers } from '../../data/products';

export default function BestsellersSection() {
  const bestsellers = getBestsellers().slice(0, 5);

  return (
    <section className="section-spacing bg-cream">
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-12">
          <p className="text-gold text-sm tracking-[0.3em] uppercase mb-3">
            Customer Favorites
          </p>
          <h2 className="font-serif text-3xl md:text-4xl text-espresso">
            Our Bestsellers
          </h2>
          <div className="divider w-16 mx-auto mt-6 bg-gold h-0.5" />
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {bestsellers.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* View All Link */}
        <div className="text-center mt-12">
          <Link
            to="/shop"
            className="inline-block px-8 py-3 border border-espresso text-espresso text-sm font-medium tracking-wider uppercase hover:bg-espresso hover:text-ivory transition-all duration-300"
          >
            View All Jewelry
          </Link>
        </div>
      </div>
    </section>
  );
}
