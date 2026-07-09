import { Link } from "react-router-dom";
import { ShoppingBag, Eye } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";
import { useCart } from "@/context/CartContext";
import { PRODUCTS } from "@/lib/data";
import { cn } from "@/lib/utils";

const ProductCard = ({ product }) => {
  const [isHovered, setIsHovered] = useState(false);
  const { addToCart } = useCart();
  const cardRef = useRef(null);

  useEffect(() => {
    ImageHelper.loadImages(strkImgConfig, cardRef.current);
  }, [isHovered]);

  return (
    <div 
      ref={cardRef}
      className="group relative flex flex-col gap-4"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link to={`/product/${product.id}`} className="block relative aspect-[4/5] overflow-hidden bg-secondary">
        <img
          data-strk-img-id={`${product.id}-main`}
          data-strk-img={product.images.query}
          data-strk-img-ratio="4x5"
          data-strk-img-width="600"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 5'/%3E"
          alt={product.name}
          className={cn(
            "w-full h-full object-cover transition-all duration-700 ease-out",
            isHovered ? "opacity-0 scale-105" : "opacity-100 scale-100"
          )}
        />
        <img
          data-strk-img-id={`${product.id}-hover`}
          data-strk-img={product.hoverImage.query}
          data-strk-img-ratio="4x5"
          data-strk-img-width="600"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 5'/%3E"
          alt={`${product.name} hover`}
          className={cn(
            "absolute inset-0 w-full h-full object-cover transition-all duration-700 ease-out",
            isHovered ? "opacity-100 scale-100" : "opacity-0 scale-105"
          )}
        />
        
        {/* Quick Add Overlay */}
        <div className={cn(
          "absolute inset-x-0 bottom-0 p-4 transition-all duration-500 translate-y-full group-hover:translate-y-0 hidden lg:block",
          "bg-white/90 backdrop-blur-sm"
        )}>
          <button 
            onClick={(e) => {
              e.preventDefault();
              addToCart(product);
            }}
            className="w-full bg-primary text-white py-3 text-[10px] uppercase tracking-widest hover:bg-black transition-colors flex items-center justify-center gap-2"
          >
            <ShoppingBag size={14} />
            Quick Add To Bag
          </button>
        </div>
      </Link>

      <div className="flex flex-col items-center text-center space-y-1">
        <h3 className="text-[10px] uppercase tracking-[0.2em] font-sans font-bold text-primary/80">
          {product.name}
        </h3>
        <p className="text-sm font-sans font-medium">${product.price}</p>
      </div>

      {/* Mobile Add to Cart */}
      <button 
        onClick={() => addToCart(product)}
        className="lg:hidden absolute top-2 right-2 bg-white/90 p-2 rounded-full shadow-sm"
      >
        <ShoppingBag size={14} className="text-primary" />
      </button>
    </div>
  );
};

const Bestsellers = () => {
  const products = PRODUCTS.filter(p => p.featured).slice(0, 5);

  return (
    <section className="py-24 max-w-7xl mx-auto px-6 lg:px-12">
      <div className="flex flex-col items-center text-center mb-16 space-y-4">
        <h2 className="text-xs uppercase tracking-[0.3em] font-sans font-medium text-accent">Our Favorites</h2>
        <h3 className="text-3xl md:text-4xl font-serif italic">The Bestsellers</h3>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-8">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      <div className="mt-16 flex justify-center">
        <Link to="/shop" className="text-xs uppercase tracking-widest border-b border-muted-foreground pb-2 hover:border-accent transition-colors">
          View All Products
        </Link>
      </div>
    </section>
  );
};

export default Bestsellers;
