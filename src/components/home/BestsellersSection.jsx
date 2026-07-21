import { bestsellers } from '@/data/products';
import ProductCard from '@/components/product/ProductCard';

export default function BestsellersSection() {
  return (
    <section className="py-20 md:py-28 bg-velmora-cream">
      <div className="container-site">
        <div className="text-center mb-14">
          <h2 className="font-serif text-3xl md:text-4xl text-velmora-charcoal mb-4">Bestsellers</h2>
          <p className="text-velmora-warmgray text-sm max-w-md mx-auto">The pieces our community loves most. Timeless designs crafted to become your everyday signature.</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {bestsellers.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
