import { Link } from 'react-router-dom';
import { products } from '@/data/products';
import { useCart } from '@/context/CartContext';
import { ShoppingBag } from 'lucide-react';

export default function RelatedProducts({ currentProductId }) {
  const { addItem } = useCart();
  const currentProduct = products.find((p) => p.id === currentProductId);
  const related = currentProduct
    ? products.filter((p) => currentProduct.relatedIds.includes(p.id))
    : products.slice(0, 3);

  return (
    <section className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-serif text-3xl md:text-4xl font-light text-center mb-12">
          You May Also Like
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {related.map((product) => (
            <div key={product.id} className="group relative">
              <Link to={`/product/${product.slug}`} className="block">
                <div className="relative aspect-[4/5] bg-stone-100 overflow-hidden">
                  <img
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    data-strk-img-id={`related-${product.id}`}
                    data-strk-img={`[related-name-${product.id}] gold jewelry`}
                    data-strk-img-ratio="4x5"
                    data-strk-img-width="600"
                  />
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      addItem(product, product.variants[0]);
                    }}
                    className="absolute bottom-0 left-0 right-0 bg-stone-900/90 text-white py-3 flex items-center justify-center gap-2 text-xs uppercase tracking-wider opacity-0 translate-y-full group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300"
                  >
                    <ShoppingBag className="w-4 h-4" />
                    Quick Add
                  </button>
                </div>
                <div className="mt-4">
                  <h3
                    id={`related-name-${product.id}`}
                    className="text-xs font-medium uppercase tracking-[0.2em] text-stone-800 group-hover:text-gold transition-colors"
                  >
                    {product.name}
                  </h3>
                  <p className="mt-1 text-sm text-gold font-medium">
                    ${product.price}
                  </p>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
