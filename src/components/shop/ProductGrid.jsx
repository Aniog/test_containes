import { Link } from 'react-router-dom';
import { Star, ShoppingBag } from 'lucide-react';
import { useCartDispatch } from '@/context/CartContext';

export default function ProductGrid({ products }) {
  const { addItem, openCart } = useCartDispatch();

  if (products.length === 0) {
    return (
      <div className="flex-1 flex items-center justify-center py-20">
        <p className="text-velmora-muted font-serif text-lg">No products match your filters</p>
      </div>
    );
  }

  return (
    <div className="flex-1 grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
      {products.map((product) => {
        const imgId = `shop-img-${product.id}`;
        const nameId = `shop-name-${product.id}`;
        const catId = `shop-cat-${product.id}`;

        const handleAdd = (e) => {
          e.preventDefault();
          e.stopPropagation();
          addItem(product, product.variants[0], 1);
          openCart();
        };

        return (
          <Link key={product.id} to={`/product/${product.id}`} className="group block">
            <div className="relative aspect-[3/4] bg-velmora-sand/30 overflow-hidden mb-3">
              <img
                data-strk-img-id={imgId}
                data-strk-img={`[${catId}] [${nameId}] gold demi-fine jewelry`}
                data-strk-img-ratio="3x4"
                data-strk-img-width="500"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={product.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <button
                onClick={handleAdd}
                className="absolute bottom-0 left-0 right-0 py-3 bg-velmora-espresso/90 backdrop-blur text-white text-[10px] tracking-[0.2em] uppercase flex items-center justify-center gap-2 transition-all duration-300 translate-y-full group-hover:translate-y-0 opacity-0 group-hover:opacity-100"
              >
                <ShoppingBag className="w-3 h-3" />
                Quick Add
              </button>
            </div>
            <p id={catId} className="sr-only">{product.category}</p>
            <h3 id={nameId} className="font-serif text-xs md:text-sm tracking-[0.12em] uppercase font-medium text-velmora-black">
              {product.name}
            </h3>
            <div className="flex items-center gap-1.5 mt-1">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-2.5 h-2.5 ${
                      i < Math.floor(product.rating) ? 'fill-velmora-gold text-velmora-gold' : 'text-velmora-sand'
                    }`}
                  />
                ))}
              </div>
              <span className="text-[10px] text-velmora-muted">({product.reviews})</span>
            </div>
            <p className="text-sm font-medium text-velmora-black mt-0.5">${product.price}</p>
          </Link>
        );
      })}
    </div>
  );
}
