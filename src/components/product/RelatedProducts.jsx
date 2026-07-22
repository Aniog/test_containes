import { Link } from 'react-router-dom';
import { products } from '@/data/products';

export default function RelatedProducts({ currentId }) {
  const related = products.filter((p) => p.id !== currentId).slice(0, 4);

  return (
    <section className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-10">
          <h2 className="font-serif text-2xl md:text-3xl text-[#1A1A1A] font-light">
            You May Also Like
          </h2>
          <div className="w-12 h-px bg-[#C8A45C] mx-auto mt-4" />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {related.map((product) => (
            <Link
              key={product.id}
              to={`/product/${product.slug}`}
              className="group"
            >
              <div className="aspect-square overflow-hidden bg-[#F5F0EB] mb-3">
                <img
                  src={product.images[0]}
                  alt={product.name}
                  className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105"
                />
              </div>
              <h3 className="text-xs tracking-[0.15em] uppercase font-medium text-[#1A1A1A]">
                {product.name}
              </h3>
              <p className="text-sm font-medium mt-1 text-[#1A1A1A]">
                ${product.price}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}