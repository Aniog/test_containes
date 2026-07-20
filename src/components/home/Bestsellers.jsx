import { seedProducts } from '@/data/products';
import { Link } from 'react-router-dom';
import { useCart } from '@/context/CartContext';
import { useState } from 'react';

export default function Bestsellers() {
  const { addToCart } = useCart();
  const bestsellers = seedProducts.slice(0, 4);

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        
        <div className="flex flex-col items-center mb-16 text-center">
          <h2 className="font-heading text-4xl tracking-wide uppercase mb-4">Current Obsessions</h2>
          <p className="text-muted-foreground max-w-xl mx-auto">The pieces everyone is talking about. Handcrafted to elevate your everyday.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {bestsellers.map((product) => (
            <ProductCard key={product.id} product={product} addToCart={addToCart} />
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <Link to="/shop" className="inline-block border-b border-foreground pb-1 text-sm tracking-widest uppercase hover:text-accent hover:border-accent transition-colors">
            View All Bestsellers
          </Link>
        </div>

      </div>
    </section>
  );
}

function ProductCard({ product, addToCart }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="group relative flex flex-col"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link to={`/product/${product.id}`} className="block relative aspect-[4/5] bgSecondary mb-4 overflow-hidden">
        <img 
          src={isHovered ? product.image2 : product.image} 
          alt={product.name}
          className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ease-in-out"
        />
        
        {/* Quick Add Button Overlay */}
        <div className={`absolute bottom-0 left-0 w-full p-4 transition-transform duration-300 ease-in-out ${isHovered ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'}`}>
          <button 
            onClick={(e) => {
              e.preventDefault();
              addToCart(product);
            }}
            className="w-full bg-white text-foreground hover:bg-black hover:text-white py-3 text-sm tracking-widest uppercase font-medium transition-colors"
          >
            Add to Cart
          </button>
        </div>
      </Link>
      
      <div className="flex flex-col text-center">
        <Link to={`/product/${product.id}`} className="font-heading text-lg tracking-wider uppercase mb-2 hover:text-accent transition-colors">
          {product.name}
        </Link>
        <span className="text-muted-foreground">${product.price.toFixed(2)}</span>
      </div>
    </div>
  );
}