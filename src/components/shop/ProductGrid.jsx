import React from 'react';
import { ShoppingBag, Eye } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useCart } from '../../lib/CartContext';
import { cn } from '../../lib/utils';
import { toast } from 'sonner';

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();

  const handleAddToCart = (e) => {
    e.preventDefault();
    addToCart(product);
    toast.success(`${product.name} added to cart`);
  };

  return (
    <div className="group relative transition-luxury">
      <Link to={`/product/${product.id}`} className="block overflow-hidden bg-gray-50 aspect-[3/4] relative">
        {/* Main Image */}
        <img
          data-strk-img-id={`product-img-${product.id}`}
          data-strk-img={`[product-title-${product.id}] gold jewelry portrait`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="600"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        
        {/* Hover image (reveals second image) */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
           <img
            data-strk-img-id={`product-hover-img-${product.id}`}
            data-strk-img={`[product-title-${product.id}] jewelry lifestyle being worn`}
            data-strk-img-ratio="3x4"
            data-strk-img-width="600"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            alt={`${product.name} worn`}
            className="w-full h-full object-cover grayscale-[0.2]"
          />
        </div>

        {/* Quick Add Overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-500 bg-gradient-to-t from-black/20 to-transparent">
          <button 
            onClick={handleAddToCart}
            className="w-full bg-white text-black py-3 uppercase tracking-widest text-[10px] font-bold hover:bg-accent hover:text-white transition-luxury flex items-center justify-center space-x-2"
          >
            <ShoppingBag size={14} />
            <span>Add to Cart</span>
          </button>
        </div>
      </Link>

      <div className="mt-6 text-center space-y-2">
        <h3 id={`product-title-${product.id}`} className="text-sm font-serif uppercase tracking-jewelry">
          {product.name}
        </h3>
        <p className="text-xs text-gray-500">${product.price.toFixed(2)}</p>
      </div>
    </div>
  );
};

const ProductGrid = ({ products, type = 'grid' }) => {
  return (
    <div className={cn(
      "grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-16",
      type === 'bestsellers' ? "lg:grid-cols-5" : "lg:grid-cols-3"
    )}>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductGrid;
