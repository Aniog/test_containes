import { Link } from 'react-router-dom';
import { Star } from 'lucide-react';
import { products } from '../../data/products';

export default function RelatedProducts({ currentId }) {
  const related = products.filter((p) => p.id !== currentId).slice(0, 4);

  return (
    <section className="section-padding py-16 md:py-24">
      <h2 className="font-serif text-xl md:text-2xl tracking-wide text-velmora-ink text-center mb-10">
        You May Also Like
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
        {related.map((product) => (
          <Link
            key={product.id}
            to={`/product/${product.id}`}
            className="group block"
          >
            <div className="aspect-square bg-velmora-sand/20 flex items-center justify-center mb-4">
              <span className="text-velmora-stone/30 text-xs tracking-wider">
                {product.name.slice(0, 3).toUpperCase()}
              </span>
            </div>
            <h3 className="product-name text-velmora-ink group-hover:text-velmora-gold transition-colors">
              {product.name}
            </h3>
            <div className="flex items-center gap-1 mt-1">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  size={10}
                  className={
                    i < Math.floor(product.rating)
                      ? 'fill-velmora-gold text-velmora-gold'
                      : 'text-velmora-sand'
                  }
                />
              ))}
            </div>
            <p className="text-sm text-velmora-gold mt-1">${product.price}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}