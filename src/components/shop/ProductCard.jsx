import { Link } from 'react-router-dom';
import { ShoppingBag } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { ProductCardImages } from '@/components/shop/ProductImages';

export default function ProductCard({ product }) {
  const { addItem } = useCart();

  return (
    <article className="group relative flex flex-col">
      {/* Image container */}
      <Link to={`/product/${product.id}`} className="block relative overflow-hidden bg-cream aspect-[3/4]">
        {/* Static per-product images with literal data-strk-img-id values */}
        <ProductCardImages productId={product.id} />

        {/* Tags */}
        <div className="absolute top-3 left-3 flex flex-col gap-1">
          {product.tags?.includes('bestseller') && (
            <span className="font-inter text-[9px] tracking-widest uppercase bg-gold text-ivory px-2 py-1">
              Bestseller
            </span>
          )}
          {product.tags?.includes('new') && (
            <span className="font-inter text-[9px] tracking-widest uppercase bg-charcoal text-ivory px-2 py-1">
              New
            </span>
          )}
          {product.tags?.includes('gift') && (
            <span className="font-inter text-[9px] tracking-widest uppercase bg-ivory text-charcoal px-2 py-1">
              Gift
            </span>
          )}
        </div>

        {/* Quick add overlay */}
        <div className="absolute bottom-0 left-0 right-0 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out">
          <button
            onClick={(e) => {
              e.preventDefault();
              addItem(product);
            }}
            className="w-full bg-charcoal/90 backdrop-blur-sm text-ivory font-inter text-[10px] tracking-widest uppercase py-3 flex items-center justify-center gap-2 hover:bg-gold transition-colors duration-300"
          >
            <ShoppingBag size={12} strokeWidth={1.5} />
            Add to Cart
          </button>
        </div>
      </Link>

      {/* Info */}
      <div className="pt-4 pb-2 flex flex-col gap-1">
        <Link to={`/product/${product.id}`}>
          <p className="font-inter text-xs tracking-widest uppercase text-charcoal hover:text-gold transition-colors duration-300 truncate">
            {product.name}
          </p>
        </Link>
        <p className="font-cormorant text-lg text-charcoal">${product.price}</p>
      </div>
    </article>
  );
}
