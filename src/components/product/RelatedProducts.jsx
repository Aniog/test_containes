import { Link } from "react-router-dom";
import { products } from "@/data/products";

export default function RelatedProducts({ currentId }) {
  const related = products.filter((p) => p.id !== currentId).slice(0, 4);

  return (
    <section className="section-padding bg-cream">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="mb-10">
          <h2 className="text-2xl md:text-3xl font-serif text-text-primary">
            You May Also Like
          </h2>
          <div className="w-10 h-[1px] bg-accent-gold mt-3" />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {related.map((product) => (
            <Link
              key={product.id}
              to={`/product/${product.id}`}
              className="group no-underline"
            >
              <div className="aspect-[4/5] bg-cream-dark overflow-hidden mb-3">
                <img
                  src={product.images[0]}
                  alt={product.name}
                  className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
                />
              </div>
              <div className="px-1">
                <p className="product-name leading-tight">{product.name}</p>
                <p className="price mt-1.5">${product.price}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}