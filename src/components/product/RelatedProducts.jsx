import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, Star } from 'lucide-react';
import { products } from '@/data/products';
import { useCart } from '@/context/CartContext';

function ProductCard({ product }) {
  const [hovered, setHovered] = useState(false);
  const { addItem } = useCart();

  const handleAddToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addItem(product, product.variants[0]);
  };

  return (
    <div
      className="group cursor-pointer"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Link to={`/product/${product.slug}`} className="block relative overflow-hidden bg-[#F5F0EB] aspect-[3/4]">
        <img
          src={hovered ? product.images[1] : product.images[0]}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className={`absolute inset-x-0 bottom-0 p-4 transition-all duration-300 ${
          hovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}>
          <button
            onClick={handleAddToCart}
            className="w-full bg-white/95 backdrop-blur-sm text-[#1A1A1A] py-3 text-xs tracking-widest uppercase flex items-center justify-center gap-2 hover:bg-[#B8860B] hover:text-white transition-colors"
          >
            <ShoppingBag size={14} />
            Add to Bag
          </button>
        </div>
      </Link>

      <div className="mt-4 text-center">
        <div className="flex items-center justify-center gap-1 mb-2">
          <Star size={12} className="fill-[#D4A843] text-[#D4A843]" />
          <span className="text-xs text-[#6B6560]">{product.rating}</span>
        </div>
        <Link to={`/product/${product.slug}`}>
          <h3 className="product-name text-sm text-[#1A1A1A] hover:text-[#B8860B] transition-colors">
            {product.name}
          </h3>
        </Link>
        <p className="text-sm text-[#6B6560] mt-1">${product.price}</p>
      </div>
    </div>
  );
}

export default function RelatedProducts({ product }) {
  const related = product.related
    .map(id => products.find(p => p.id === id))
    .filter(Boolean);

  if (related.length === 0) return null;

  return (
    <div>
      <div className="text-center mb-10">
        <h2 className="serif-heading text-3xl md:text-4xl font-light text-[#1A1A1A]">
          You May Also Like
        </h2>
        <div className="w-12 h-px bg-[#B8860B] mx-auto mt-4" />
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
        {related.map(p => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </div>
  );
}
