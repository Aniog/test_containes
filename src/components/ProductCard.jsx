import { Link } from 'react-router-dom';
import { useCartStore } from '@/lib/cart';

export default function ProductCard({ product, context = "" }) {
  const addItem = useCartStore(state => state.addItem);

  return (
    <div className="group flex flex-col">
      <Link to={`/product/${product.id}`} className="relative aspect-[3/4] mb-4 overflow-hidden bg-muted block">
        <img 
          data-strk-img-id={product.imgId}
          data-strk-img={`[${product.descId}] [${product.titleId}] ${context}`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="600"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={product.name}
          className="absolute inset-0 w-full h-full object-cover transition-opacity duration-300 group-hover:opacity-0"
        />
        <img 
          data-strk-img-id={product.hoverImgId}
          data-strk-img={`[${product.descId}] [${product.titleId}] ${context} model wear`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="600"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={product.name}
          className="absolute inset-0 w-full h-full object-cover transition-opacity duration-300 opacity-0 group-hover:opacity-100"
        />
        <div className="absolute inset-x-0 bottom-0 p-4 translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
          <button 
            className="w-full bg-background/95 backdrop-blur text-foreground py-3 text-sm tracking-wide uppercase font-medium hover:bg-background"
            onClick={(e) => {
              e.preventDefault();
              addItem({ ...product, variant: product.variants[0], quantity: 1 });
            }}
          >
            Quick Add
          </button>
        </div>
      </Link>
      <div className="flex flex-col items-center text-center">
        <Link to={`/product/${product.id}`} id={product.titleId} className="font-serif text-sm md:text-base uppercase tracking-wider mb-2">
          {product.name}
        </Link>
        <p className="text-muted-foreground">${product.price}</p>
        <p id={product.descId} className="hidden">{product.description}</p>
      </div>
    </div>
  );
}