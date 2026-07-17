import React, { useState } from 'react';
import { ShoppingBag } from 'lucide-react';
import { seedProducts } from './data/products';

function App() {
  const [hoveredProduct, setHoveredProduct] = useState(null);

  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-4">
      <ShoppingBag size={48} className="text-muted-foreground/50 mb-6" />
      <h1 className="font-serif text-3xl md:text-5xl tracking-wide mb-4">Page Not Found</h1>
      <p className="text-muted-foreground max-w-md mb-8">
        The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
      </p>
      <a 
        href="/" 
        className="bg-accent text-accent-foreground px-8 py-3 text-sm tracking-widest uppercase hover:bg-accent/90 transition-colors"
      >
        Return to Homepage
      </a>
      
      <div className="mt-24 w-full max-w-4xl">
        <h2 className="font-serif text-2xl tracking-wide mb-8">Discover our Bestsellers</h2>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
          {seedProducts.slice(0, 4).map(product => (
            <a 
              href={`/product/${product.id}`} 
              key={product.id} 
              className="group cursor-pointer flex flex-col block text-left"
              onMouseEnter={() => setHoveredProduct(product.id)}
              onMouseLeave={() => setHoveredProduct(null)}
            >
              <div className="relative aspect-[3/4] overflow-hidden bg-secondary/20 mb-4">
                <img 
                  src={hoveredProduct === product.id ? product.hoverImage : product.image} 
                  alt={product.name} 
                  className="w-full h-full object-cover transition-opacity duration-500" 
                />
              </div>
              <h3 className="font-serif text-xs md:text-sm tracking-widest uppercase mb-1 group-hover:text-accent transition-colors">{product.name}</h3>
              <p className="text-sm text-foreground/80">${product.price}</p>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
