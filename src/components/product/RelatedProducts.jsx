import { Link } from 'react-router-dom';
import { Star, ShoppingBag } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { getStrkImage } from '@/lib/utils';
import { products as allProducts } from '@/data/products';

export default function RelatedProducts({ currentProductId }) {
  const { addItem } = useCart();

  const related = allProducts.filter((p) => p.id !== currentProductId).slice(0, 4);

  return (
    <div>
      <h3 className="font-serif text-2xl md:text-3xl tracking-wide text-text-primary text-center mb-8">
        You May Also Like
      </h3>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
        {related.map((product) => {
          const primarySrc = getStrkImage(product.imgId);

          return (
            <div key={product.id} className="group relative">
              <Link to={`/product/${product.slug}`}>
                <div className="relative aspect-[4/3] overflow-hidden bg-muted">
                  <img
                    alt={product.name}
                    src={primarySrc || undefined}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              </Link>
              <button
                onClick={() => addItem(product)}
                className="absolute bottom-2 right-2 bg-charcoal/80 hover:bg-gold text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 backdrop-blur-sm"
                aria-label={`Add ${product.name} to cart`}
              >
                <ShoppingBag className="w-4 h-4" />
              </button>
              <div className="mt-3">
                <Link to={`/product/${product.slug}`}>
                  <h4
                    id={product.titleId}
                    className="font-serif text-xs md:text-sm tracking-[0.15em] uppercase text-text-primary group-hover:text-gold transition-colors"
                  >
                    {product.name}
                  </h4>
                </Link>
                <p id={product.descId} className="sr-only">{product.description}</p>
                <p className="font-sans text-sm text-text-primary mt-1">${product.price}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
