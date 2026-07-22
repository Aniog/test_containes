import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, Star } from 'lucide-react';
import { products } from '@/data/products';
import { useCart } from '@/context/CartContext';

const ProductCard = ({ product, onQuickAdd }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link to={`/product/${product.id}`}>
        <div className="relative aspect-[4/5] bg-velmora-card overflow-hidden mb-4">
          {/* Primary Image */}
          <img
            src={product.images[0]}
            alt={product.name}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
              isHovered ? 'opacity-0' : 'opacity-100'
            }`}
          />
          {/* Secondary Image on Hover */}
          <img
            src={product.images[1]}
            alt={product.name}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
              isHovered ? 'opacity-100' : 'opacity-0'
            }`}
          />
          
          {/* Quick Add Button */}
          <button
            onClick={(e) => {
              e.preventDefault();
              onQuickAdd(product);
            }}
            className={`absolute bottom-4 left-4 right-4 py-3 bg-velmora-gold text-velmora-black text-sm uppercase tracking-wider font-medium
              transition-all duration-300 hover:bg-velmora-gold-hover ${
                isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
          >
            <span className="flex items-center justify-center gap-2">
              <ShoppingBag className="w-4 h-4" />
              Add to Cart
            </span>
          </button>
        </div>
      </Link>
      
      <Link to={`/product/${product.id}`}>
        <h3 className="product-title text-sm mb-1 text-velmora-text group-hover:text-velmora-gold transition-colors duration-300">
          {product.name}
        </h3>
      </Link>
      <div className="flex items-center gap-2">
        <div className="flex">
          {[...Array(5)].map((_, i) => (
            <Star 
              key={i} 
              className={`w-3 h-3 ${i < product.rating ? 'text-velmora-gold fill-velmora-gold' : 'text-velmora-border'}`} 
            />
          ))}
        </div>
        <span className="text-velmora-muted text-xs">({product.reviews})</span>
      </div>
      <p className="text-velmora-gold mt-1">${product.price}</p>
    </div>
  );
};

const Bestsellers = () => {
  const { addItem } = useCart();
  const bestsellers = products.slice(0, 5);

  return (
    <section className="py-20 md:py-32">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl md:text-4xl text-velmora-text mb-4">Bestsellers</h2>
          <p className="text-velmora-muted max-w-md mx-auto">
            Our most loved pieces, chosen by women who appreciate timeless elegance.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {bestsellers.map((product) => (
            <ProductCard 
              key={product.id} 
              product={product} 
              onQuickAdd={addItem}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Bestsellers;