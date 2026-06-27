import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag } from 'lucide-react';
import { useCart } from '@/lib/CartContext';
import { cn } from '@/lib/utils';
import { toast } from 'sonner';

const ProductCard = ({ product }) => {
  const [isHovered, setIsHovered] = useState(false);
  const { addToCart } = useCart();

  const handleAddToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product);
    toast.success(`${product.name} added to bag`);
  };

  return (
    <Link 
      to={`/product/${product.id}`}
      className="group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative aspect-[3/4] bg-base-dark overflow-hidden mb-4">
        {/* Main Image */}
        <img 
          src={product.image} 
          alt={product.name}
          data-strk-img-id={`p-main-${product.id}`}
          data-strk-img={`[p-name-${product.id}] gold jewelry model lifestyle`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="600"
          className={cn(
            "w-full h-full object-cover transition-transform duration-700",
            isHovered ? "opacity-0 scale-105" : "opacity-100 scale-100"
          )}
        />
        {/* Hover Image */}
        <img 
          src={product.hoverImage} 
          alt={product.name}
          data-strk-img-id={`p-hover-${product.id}`}
          data-strk-img={`[p-name-${product.id}] close up gold jewelry detail`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="600"
          className={cn(
            "absolute inset-0 w-full h-full object-cover transition-all duration-700 scale-105",
            isHovered ? "opacity-100 scale-100" : "opacity-0"
          )}
        />

        {/* Quick Add Button */}
        <div className={cn(
          "absolute bottom-0 left-0 w-full p-4 transform transition-all duration-500",
          isHovered ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"
        )}>
          <button 
            onClick={handleAddToCart}
            className="w-full bg-white text-primary py-3 font-sans text-[10px] uppercase tracking-widest flex items-center justify-center gap-2 hover:bg-black hover:text-white transition-colors"
          >
            <ShoppingBag size={14} strokeWidth={1.5} />
            Quick Add
          </button>
        </div>
      </div>

      <div className="text-center space-y-1">
        <h3 
          id={`p-name-${product.id}`}
          className="font-serif text-sm uppercase tracking-[0.15em] group-hover:text-accent transition-colors"
        >
          {product.name}
        </h3>
        <p className="font-sans text-xs text-gray-400 uppercase tracking-widest mb-1">{product.category}</p>
        <p className="font-sans text-sm">${product.price}</p>
      </div>
    </Link>
  );
};

const Bestsellers = ({ products }) => {
  return (
    <section className="py-24 px-6 md:px-12 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div className="max-w-xl">
            <h2 className="font-serif text-xs uppercase tracking-[0.4em] text-accent mb-4">Timeless Favorites</h2>
            <h3 className="font-serif text-4xl md:text-5xl leading-tight">Our Bestsellers</h3>
          </div>
          <Link to="/shop" className="font-sans text-xs uppercase tracking-widest border-b border-primary pb-1 hover:text-accent hover:border-accent transition-all">
            View All
          </Link>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-5 gap-6 md:gap-8">
          {products.slice(0, 5).map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Bestsellers;
