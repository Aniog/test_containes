import { useState } from "react";
import { Link } from "react-router-dom";
import { ShoppingBag, Star } from "lucide-react";
import { products } from "@/data/products";
import { useCart } from "@/context/CartContext";
import { cn } from "@/lib/utils";

function ProductCard({ product }) {
  const [hovered, setHovered] = useState(false);
  const { addItem } = useCart();

  const handleAddToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addItem(product, product.variants[0]?.value || "gold");
  };

  return (
    <Link
      to={`/product/${product.id}`}
      className="group block"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="relative aspect-[3/4] bg-light-accent overflow-hidden mb-4">
        <img
          src={hovered ? product.hoverImage : product.images[0]}
          alt={product.name}
          className="w-full h-full object-cover transition-all duration-700 ease-out group-hover:scale-105"
        />

        {/* Badge */}
        {product.badge && (
          <span className="absolute top-3 left-3 bg-surface/90 backdrop-blur-sm text-[10px] uppercase tracking-[0.1em] font-medium px-3 py-1.5">
            {product.badge}
          </span>
        )}

        {/* Quick add */}
        <button
          onClick={handleAddToCart}
          className="absolute bottom-0 left-0 right-0 bg-primary/90 backdrop-blur-sm text-white text-[11px] uppercase tracking-[0.1em] py-3 font-medium translate-y-full group-hover:translate-y-0 transition-transform duration-300 flex items-center justify-center gap-2"
        >
          <ShoppingBag className="w-3.5 h-3.5" />
          Add to Cart
        </button>
      </div>

      <div className="px-0.5">
        <h3 className="product-name text-xs md:text-sm text-primary group-hover:text-accent transition-colors truncate">
          {product.name}
        </h3>
        <div className="flex items-center gap-1.5 mt-1">
          <Star className="w-3 h-3 fill-star text-star" />
          <span className="text-[11px] text-secondary">
            {product.rating} ({product.reviewCount})
          </span>
        </div>
        <div className="flex items-center gap-2 mt-1.5">
          <span className="text-sm font-medium">${product.price}</span>
          {product.originalPrice && (
            <span className="text-xs text-secondary line-through">
              ${product.originalPrice}
            </span>
          )}
        </div>
      </div>
    </Link>
  );
}

export default function Bestsellers() {
  return (
    <section className="py-16 md:py-24 lg:py-28">
      <div className="max-w-content mx-auto px-4 md:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-light text-primary">
            Bestsellers
          </h2>
          <p className="text-secondary text-sm md:text-base mt-3 max-w-md mx-auto">
            Our most-loved pieces, chosen by women like you
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 md:gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            to="/shop"
            className="inline-block border border-primary text-primary px-10 py-3.5 text-xs uppercase tracking-[0.12em] font-medium hover:bg-primary hover:text-white transition-all duration-300"
          >
            View All Products
          </Link>
        </div>
      </div>
    </section>
  );
}