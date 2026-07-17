import { Link } from 'react-router-dom';
import { useCartStore } from '../lib/store';

const ProductCard = ({ product }) => {
  const addToCart = useCartStore((state) => state.addToCart);

  return (
    <div className="group relative">
      <Link to={`/product/${product.id}`} className="block relative aspect-[4/5] bg-secondary/30 mb-4 overflow-hidden rounded-sm">
        <img 
          data-strk-img-id={product.imageId}
          data-strk-img={product.imageQuery}
          data-strk-img-ratio="4x5"
          data-strk-img-width="600"
          alt={product.name}
          className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500 group-hover:opacity-0"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
        />
        <img 
          data-strk-img-id={product.hoverId}
          data-strk-img={product.hoverQuery}
          data-strk-img-ratio="4x5"
          data-strk-img-width="600"
          alt={`${product.name} on model`}
          className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500 opacity-0 group-hover:opacity-100"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
        />
      </Link>
      
      <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <button 
          onClick={(e) => {
            e.preventDefault();
            addToCart(product);
          }}
          className="bg-background text-foreground text-xs uppercase tracking-wider font-semibold py-2 px-4 shadow-sm hover:bg-foreground hover:text-background transition-colors"
        >
          Add to Cart
        </button>
      </div>

      <div className="text-center">
        <Link to={`/product/${product.id}`}>
          <h3 className="font-serif uppercase tracking-widest text-sm text-foreground mb-1">{product.name}</h3>
          <p className="text-muted-foreground text-sm">${product.price}</p>
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;