import ProductCard from './ProductCard';
import products from '@/data/products';

export default function BestsellersGrid() {
  return (
    <section className="section-padding py-20 md:py-28 bg-velmora-base">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14 md:mb-20">
          <p className="font-sans text-[10px] tracking-widest uppercase text-velmora-subtle mb-4">
            Most Loved
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-light text-velmora-dark tracking-wide">
            Bestsellers
          </h2>
          <div className="w-10 h-[1px] bg-velmora-accent mx-auto mt-6" />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6 lg:gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="text-center mt-14">
          <a href="/shop" className="btn-outline text-xs tracking-widest uppercase">
            View All Pieces
          </a>
        </div>
      </div>
    </section>
  );
}
