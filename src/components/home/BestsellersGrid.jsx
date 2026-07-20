import ProductCard from '../ProductCard';
import { products } from '../../data/products';

export default function BestsellersGrid() {
  return (
    <section className="bg-velmora-cream px-6 py-20 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 text-center">
          <p className="mb-2 font-sans text-xs uppercase tracking-ultra text-velmora-gold">
            Shop Our Favorites
          </p>
          <h2 className="font-serif text-3xl text-velmora-charcoal md:text-4xl">
            Bestsellers
          </h2>
        </div>
        <div className="grid grid-cols-2 gap-x-4 gap-y-10 md:grid-cols-3 lg:grid-cols-5">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}