import { useState } from "react";
import { Link } from "react-router-dom";
import { ShoppingBag, Star } from "lucide-react";
import { products } from "@/data/products";
import { useCart } from "@/context/CartContext";

export default function Bestsellers() {
  const bestsellers = products.filter((p) => p.bestseller);
  const { addItem } = useCart();

  return (
    <section className="py-16 lg:py-24 bg-[#FDFCFA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-12 lg:mb-16">
          <p className="text-velmora-gold text-xs tracking-[0.25em] uppercase font-sans font-medium mb-3">
            Editor's Pick
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-velmora-charcoal font-light">
            Bestsellers
          </h2>
          <div className="w-12 h-[1px] bg-velmora-gold mx-auto mt-5" />
        </div>

        {/* Product grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6">
          {bestsellers.map((product) => (
            <ProductCard key={product.id} product={product} onAdd={addItem} />
          ))}
        </div>

        {/* Shop all link */}
        <div className="text-center mt-12">
          <Link
            to="/shop"
            className="inline-flex items-center gap-2 text-sm tracking-widest uppercase font-sans text-velmora-charcoal hover:text-velmora-gold transition-colors duration-300 border-b border-velmora-charcoal/20 hover:border-velmora-gold pb-0.5"
          >
            Shop All Jewelry
          </Link>
        </div>
      </div>
    </section>
  );
}

function ProductCard({ product, onAdd }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="group product-card cursor-pointer"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Link to={`/product/${product.id}`} className="block">
        <div className="relative aspect-[3/4] bg-velmora-cream overflow-hidden mb-3">
          <img
            src={hovered && product.images[1] ? product.images[1] : product.images[0]}
            alt={product.name}
            className="w-full h-full object-cover transition-opacity duration-500"
          />
          {/* Quick add on hover (desktop) */}
          <button
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              onAdd(product);
            }}
            className="absolute bottom-3 right-3 bg-white/90 backdrop-blur-sm text-velmora-charcoal p-2.5 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0 shadow-lg hover:bg-velmora-gold hover:text-white"
            aria-label="Quick add to cart"
          >
            <ShoppingBag className="w-4 h-4" />
          </button>
        </div>
      </Link>

      <div className="px-0.5">
        <div className="flex items-center gap-1 mb-1">
          <Star className="w-3 h-3 fill-velmora-gold text-velmora-gold" />
          <span className="text-xs text-velmora-taupe font-sans">
            {product.rating}
          </span>
        </div>
        <Link to={`/product/${product.id}`}>
          <h3 className="font-serif text-xs tracking-widest uppercase text-velmora-charcoal leading-relaxed">
            {product.name}
          </h3>
        </Link>
        <p className="font-serif text-sm text-velmora-charcoal mt-1">
          ${product.price}
        </p>
      </div>
    </div>
  );
}