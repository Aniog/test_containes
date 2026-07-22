import { Link } from 'react-router-dom';
import ProductCard from '../product/ProductCard';
import { products } from '../../data/products';

export default function Bestsellers() {
  const bestsellerProducts = products.slice(0, 5);

  return (
    <section className="py-16 md:py-24">
      <div className="container-main">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl">Bestsellers</h2>
          <p className="mt-3 text-velmora-warm-gray">Our most loved pieces</p>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {bestsellerProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* View All Link */}
        <div className="text-center mt-10">
          <Link 
            to="/shop" 
            className="inline-block btn-secondary text-sm"
          >
            View All
          </Link>
        </div>
      </div>
    </section>
  );
}
