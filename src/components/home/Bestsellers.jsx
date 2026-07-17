import { useState } from "react";
import { Link } from "react-router-dom";
import { ShoppingBag, Star } from "lucide-react";
import { products } from "@/data/products";
import { useCart } from "@/context/CartContext";

export default function Bestsellers() {
  return (
    <section className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="section-title">Bestsellers</h2>
          <p className="mt-3 text-sm text-clay-500 font-sans max-w-md mx-auto">
            The pieces our customers love most — curated for those who
            appreciate refined design.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="text-center mt-12">
          <Link to="/shop" className="btn-outline text-xs">
            View All Products
          </Link>
        </div>
      </div>
    </section>
  );
}

function ProductCard({ product }) {
  const [hovered, setHovered] = useState(false);
  const { addItem } = useCart();

  return (
    <div
      className="group relative"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Link to={`/product/${product.id}`} className="block">
        <div className="relative aspect-[3/4] overflow-hidden bg-cream-100 rounded-sm">
          <img
            src={product.images[0]}
            alt={product.name}
            className={`w-full h-full object-cover transition-all duration-500 ${
              hovered ? "opacity-0 scale-105" : "opacity-100 scale-100"
            }`}
          />
          <img
            src={product.images[1]}
            alt={`${product.name} alternate view`}
            className={`absolute inset-0 w-full h-full object-cover transition-all duration-500 ${
              hovered ? "opacity-100 scale-100" : "opacity-0 scale-95"
            }`}
          />
        </div>
      </Link>

      {/* Quick add to cart */}
      <button
        onClick={() => addItem(product)}
        className={`absolute bottom-3 right-3 w-9 h-9 rounded-full bg-cream-50/90 backdrop-blur-sm shadow-sm flex items-center justify-center transition-all duration-300 hover:bg-cream-50 ${
          hovered
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-2"
        }`}
        aria-label="Quick add to cart"
      >
        <ShoppingBag className="w-3.5 h-3.5 text-clay-800" />
      </button>

      {/* Rating badge */}
      <div className="absolute top-3 left-3">
        <div className="flex items-center gap-1 bg-cream-50/80 backdrop-blur-sm px-2 py-0.5 rounded-full">
          <Star className="w-2.5 h-2.5 text-gold-500 fill-gold-500" />
          <span className="text-[10px] font-sans font-medium text-clay-700">
            {product.rating}
          </span>
        </div>
      </div>

      <div className="mt-3 text-center">
        <h3 className="product-name truncate">{product.name}</h3>
        <p className="product-price mt-1">${product.price}</p>
      </div>
    </div>
  );
}