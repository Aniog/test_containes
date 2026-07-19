import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { products } from '@/data/products';

const ProductCard = ({ product }) => {
  const [hovered, setHovered] = useState(false);
  const { addItem, setCartOpen } = useCart();

  const handleAddToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addItem(product.id, 'gold', 1);
    setCartOpen(true);
  };

  return (
    <Link
      to={`/product/${product.id}`}
      className="group block"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="relative overflow-hidden rounded-sm bg-[#f5f0e8] aspect-[3/4]">
        <img
          data-strk-img-id={`product-${product.id}-1`}
          data-strk-img={`[product-${product.id}-name]`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="600"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <img
          data-strk-img-id={`product-${product.id}-2`}
          data-strk-img={`[product-${product.id}-name]`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="600"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={`${product.name} alternate view`}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${hovered ? 'opacity-100' : 'opacity-0'}`}
        />
        <button
          onClick={handleAddToCart}
          className={`absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur text-[#3d3229] py-3 rounded-full text-xs tracking-widest uppercase flex items-center justify-center gap-2 transition-all duration-300 ${hovered ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}
        >
          <ShoppingBag className="w-4 h-4" />
          Add to Cart
        </button>
      </div>
      <div className="mt-4">
        <h3 id={`product-${product.id}-name`} className="font-serif text-sm tracking-wider uppercase text-[#3d3229]">
          {product.name}
        </h3>
        <p className="mt-1 text-sm text-[#8c7b6b]">${product.price}</p>
      </div>
    </Link>
  );
};

export const BestsellersGrid = () => {
  const bestsellers = products.filter((p) => p.bestseller).slice(0, 5);
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
      {bestsellers.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductCard;
