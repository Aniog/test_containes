import { useState } from 'react';
import { useCart } from '../cart/CartProvider';

export function ProductCard({ product }) {
  const [isHovered, setIsHovered] = useState(false);
  const { addItem } = useCart();

  const handleQuickAdd = (e) => {
    e.preventDefault(); // Prevent navigating to PDP
    const imgEl = document.querySelector(`[data-strk-img-id="product-img-${product.id}"]`);
    const actualSrc = imgEl && imgEl.src && !imgEl.src.includes('data:image/svg') ? imgEl.src : product.image;
    addItem({ ...product, quantity: 1, variant: 'Gold', image: actualSrc });
  };

  return (
    <a 
      href={`/product/${product.id}`}
      className="group block"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative aspect-[4/5] bg-brand-100 mb-4 overflow-hidden">
        <img
          src={isHovered && product.imageAlt ? product.imageAlt : product.image}
          alt={product.title}
          className={`w-full h-full object-cover transition-opacity duration-500 ease-in-out ${
            isHovered ? 'scale-105' : 'scale-100'
          }`}
          data-strk-img-id={`product-img-${product.id}`}
          data-strk-img={`[product-title-${product.id}] ${product.category} jewelry model`}
          data-strk-img-ratio="4x5"
          data-strk-img-width="600"
        />
        
        {/* Quick Add Button */}
        <div className={`absolute bottom-0 left-0 right-0 p-4 transition-transform duration-300 ease-out ${
          isHovered ? 'translate-y-0' : 'translate-y-full'
        }`}>
          <button 
            onClick={handleQuickAdd}
            className="w-full bg-white/90 backdrop-blur text-brand-900 py-3 text-sm font-medium uppercase tracking-widest hover:bg-brand-900 hover:text-white transition-colors"
          >
            Quick Add
          </button>
        </div>
      </div>

      <div className="text-center">
        <h3 
          id={`product-title-${product.id}`}
          className="text-sm font-medium tracking-widest uppercase mb-2 text-brand-900"
        >
          {product.title}
        </h3>
        <p className="font-serif text-brand-600">${product.price.toFixed(2)}</p>
      </div>
    </a>
  );
}