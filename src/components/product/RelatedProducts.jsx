import { Link } from 'react-router-dom';
import { Star } from 'lucide-react';
import products from '@/data/products';

export default function RelatedProducts({ currentId, category }) {
  const related = products
    .filter((p) => p.id !== currentId && p.category === category)
    .slice(0, 4);

  if (related.length === 0) {
    const others = products.filter((p) => p.id !== currentId).slice(0, 4);
    return <RelatedGrid products={others} />;
  }

  return <RelatedGrid products={related} />;
}

function RelatedGrid({ products: items }) {
  return (
    <section className="section-padding py-20 md:py-28">
      <div className="text-center mb-12">
        <p className="text-[11px] tracking-[0.2em] uppercase text-taupe mb-4">Complete the Look</p>
        <h2 className="font-serif text-3xl md:text-4xl text-espresso tracking-wider">
          You May Also Like
        </h2>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
        {items.map((product) => (
          <Link key={product.id} to={`/product/${product.id}`} className="group block">
            <div className="aspect-[3/4] bg-rose mb-4 flex items-center justify-center">
              <div className="text-center">
                <div className="w-10 h-10 mx-auto rounded-full bg-gold-pale/40 flex items-center justify-center mb-2">
                  <span className="text-gold text-sm">✦</span>
                </div>
                <span className="text-[10px] text-taupe/50 uppercase tracking-[0.15em]">
                  {product.category}
                </span>
              </div>
            </div>
            <div className="flex gap-0.5 mb-1">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-3 h-3 ${
                    i < Math.floor(product.rating) ? 'fill-gold text-gold' : 'text-border'
                  }`}
                />
              ))}
            </div>
            <h3 className="product-name text-xs tracking-[0.15em] text-espresso mb-1">
              {product.name}
            </h3>
            <p className="text-sm text-taupe">${product.price}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}