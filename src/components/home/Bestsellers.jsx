import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, Star } from 'lucide-react';
import { products } from '@/data/products';
import { useCart } from '@/context/CartContext';

function ProductCard({ product, index }) {
  const [isHovered, setIsHovered] = useState(false);
  const { addItem } = useCart();
  const [added, setAdded] = useState(false);

  const handleAddToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.images[0],
    });
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  };

  return (
    <Link
      to={`/product/${product.id}`}
      className="group block"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative aspect-[3/4] bg-[#141414] rounded overflow-hidden mb-3">
        <img
          src={isHovered && product.hoverImage ? product.hoverImage : product.images[0]}
          alt={product.name}
          className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105"
        />
        <div className={`absolute inset-0 bg-black/20 transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`} />
        <button
          onClick={handleAddToCart}
          className={`absolute bottom-3 left-3 right-3 btn-primary text-xs py-2.5 transition-all duration-300 ${
            isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
          } ${added ? 'bg-gold-light' : ''}`}
        >
          {added ? 'Added!' : 'Quick Add'}
          <ShoppingBag className="w-3.5 h-3.5 ml-2 inline" />
        </button>
        <div className="absolute top-3 right-3 flex items-center gap-1 bg-[#0a0a0a]/80 px-2 py-0.5 rounded text-xs">
          <Star className="w-3 h-3 text-gold fill-gold" />
          <span className="text-[#f5f0eb] text-[10px]">{product.rating}</span>
        </div>
      </div>
      <h3 className="font-serif text-xs md:text-sm tracking-[0.08em] text-[#f5f0eb] uppercase">
        {product.name}
      </h3>
      <p className="text-gold text-sm mt-1">${product.price}</p>
    </Link>
  );
}

export default function Bestsellers() {
  const bestsellers = products.slice(0, 5);

  return (
    <section className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex items-end justify-between mb-10">
          <div>
            <p className="text-gold text-xs uppercase tracking-[0.15em] mb-2">Editor's Pick</p>
            <h2 className="font-serif text-3xl md:text-4xl text-[#f5f0eb]">Bestsellers</h2>
          </div>
          <Link
            to="/shop"
            className="hidden md:inline-flex items-center gap-1 text-xs uppercase tracking-[0.12em] text-[#a09890] hover:text-gold transition-colors"
          >
            View All
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {bestsellers.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>

        <div className="mt-8 text-center md:hidden">
          <Link
            to="/shop"
            className="btn-outline text-xs"
          >
            View All Products
          </Link>
        </div>
      </div>
    </section>
  );
}