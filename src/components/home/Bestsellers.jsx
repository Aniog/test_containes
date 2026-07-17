import products from '../../data/products';
import ProductCard from '../product/ProductCard';

export default function Bestsellers() {
  return (
    <section className="py-16 md:py-24 px-4 md:px-8 lg:px-16">
      <div className="max-w-[1440px] mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl text-[#1A1A1A]">Bestsellers</h2>
          <div className="w-12 h-px bg-[#C5A572] mx-auto mt-4" />
          <p className="font-sans text-sm text-[#6B6560] mt-4">Our most-loved pieces, chosen by you.</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
