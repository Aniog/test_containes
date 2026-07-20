import ProductCard from '../product/ProductCard';

export default function Bestsellers({ products }) {
  return (
    <section className="py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <p className="font-sans text-xs tracking-ultra-wide text-gold-600 uppercase mb-3">
            Customer Favorites
          </p>
          <h2 className="font-serif text-3xl md:text-4xl text-charcoal-800">
            Our Bestsellers
          </h2>
          <div className="hairline-divider w-16 mx-auto mt-6" />
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
