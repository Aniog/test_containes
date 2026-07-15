import { useState } from "react";
import { Link } from "react-router-dom";
import { ShoppingBag, Star } from "lucide-react";
import { products } from "@/data/products";
import { useCart } from "@/context/CartContext";

export default function Bestsellers() {
  return (
    <section className="section-padding bg-cream">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-text-primary mb-3">
            Bestsellers
          </h2>
          <p className="text-text-muted text-sm md:text-base font-light max-w-md mx-auto">
            The pieces our customers return for again and again
          </p>
          <div className="w-12 h-[1px] bg-accent-gold mx-auto mt-4" />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            to="/shop"
            className="btn-outline inline-block text-xs"
          >
            View All
          </Link>
        </div>
      </div>
    </section>
  );
}

function ProductCard({ product }) {
  const [hovered, setHovered] = useState(false);
  const { addItem } = useCart();

  const handleAddToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.images[0],
      variant: "Gold",
      quantity: 1,
    });
  };

  const stars = Math.floor(product.rating);
  const hasHalf = product.rating % 1 >= 0.5;

  return (
    <Link
      to={`/product/${product.id}`}
      className="group block no-underline"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="relative aspect-[3/4] bg-cream-dark overflow-hidden mb-3">
        <img
          src={product.images[0]}
          alt={product.name}
          className={`w-full h-full object-cover transition-all duration-700 ease-out ${
            hovered ? "opacity-0 scale-105" : "opacity-100 scale-100"
          }`}
        />
        <img
          src={product.images[1]}
          alt={`${product.name} alternate`}
          className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ease-out ${
            hovered ? "opacity-100 scale-105" : "opacity-0 scale-100"
          }`}
        />

        {/* Quick add overlay */}
        <div
          className={`absolute inset-x-0 bottom-0 p-3 transition-all duration-300 ${
            hovered ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
          }`}
        >
          <button
            onClick={handleAddToCart}
            className="w-full bg-white/90 backdrop-blur-sm text-text-primary text-[11px] uppercase tracking-widest 
                       py-3 flex items-center justify-center gap-2 transition-all duration-300 hover:bg-accent-gold hover:text-white"
          >
            <ShoppingBag className="w-3.5 h-3.5" />
            Add to Cart
          </button>
        </div>
      </div>

      <div className="px-1">
        <p className="product-name leading-tight">{product.name}</p>
        <div className="flex items-center gap-1 mt-1.5">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              className={`w-3 h-3 ${
                i < stars
                  ? "text-star-gold fill-star-gold"
                  : i === stars && hasHalf
                  ? "text-star-gold fill-star-gold/50"
                  : "text-border-medium"
              }`}
            />
          ))}
          <span className="text-[10px] text-text-muted ml-1">({product.reviewCount})</span>
        </div>
        <p className="price mt-1.5">${product.price}</p>
      </div>
    </Link>
  );
}