import ProductCard from '../ProductCard';

const Bestsellers = ({ products }) => {
  return (
    <section className="py-24 bg-velmora-cream">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center mb-16 space-y-4">
          <span className="uppercase tracking-[0.3em] text-[10px] text-velmora-charcoal/50">Our most loved pieces</span>
          <h2 className="text-3xl md:text-5xl font-serif text-center">Bestsellers</h2>
          <div className="w-12 h-[1px] bg-velmora-accent"></div>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-5 gap-x-6 gap-y-12">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Bestsellers;
