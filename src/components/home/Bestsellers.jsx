import { useState } from "react";
import { Link } from "react-router-dom";
import { ShoppingBag } from "lucide-react";
import { products } from "@/data/products";
import { useCart } from "@/context/CartContext";
import StarRating from "@/components/ui/StarRating";

export default function Bestsellers() {
  const { addItem } = useCart();
  const [hoveredId, setHoveredId] = useState(null);
  const [addedId, setAddedId] = useState(null);

  const handleAddToCart = (product, e) => {
    e.preventDefault();
    e.stopPropagation();
    addItem(product, "gold");
    setAddedId(product.id);
    setTimeout(() => setAddedId(null), 1500);
  };

  return (
    <section className="section-padding">
      <div className="max-w-page mx-auto px-4 md:px-8">
        {/* Section header */}
        <div className="flex items-center justify-between mb-10">
          <div>
            <span className="text-xs tracking-widest uppercase text-accent font-sans">
              Bestsellers
            </span>
            <h2 className="section-heading mt-2">Most Loved Pieces</h2>
          </div>
          <Link
            to="/shop"
            className="text-sm text-secondary hover:text-primary transition-colors font-sans tracking-wide"
          >
            View All &rarr;
          </Link>
        </div>

        {/* Product grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {products.map((product) => (
            <Link
              key={product.id}
              to={`/product/${product.id}`}
              className="group cursor-pointer"
              onMouseEnter={() => setHoveredId(product.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              {/* Image container */}
              <div className="relative aspect-[3/4] bg-surface-secondary overflow-hidden rounded-sm">
                <img
                  src={
                    hoveredId === product.id && product.images[1]
                      ? product.images[1]
                      : product.images[0]
                  }
                  alt={product.name}
                  className="w-full h-full object-cover transition-all duration-500 ease-in-out group-hover:scale-105"
                />
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300" />

                {/* Quick add button */}
                <button
                  onClick={(e) => handleAddToCart(product, e)}
                  className="absolute bottom-3 left-3 right-3 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300"
                >
                  {addedId === product.id ? (
                    <span className="w-full bg-accent text-background text-xs font-sans font-medium tracking-wider py-2.5 flex items-center justify-center gap-2">
                      &#10003; Added
                    </span>
                  ) : (
                    <span className="w-full bg-accent text-background text-xs font-sans font-medium tracking-wider py-2.5 flex items-center justify-center gap-2">
                      <ShoppingBag className="w-3.5 h-3.5" />
                      Add to Cart
                    </span>
                  )}
                </button>
              </div>

              {/* Product info */}
              <div className="mt-3 space-y-1.5">
                <h3 className="product-name text-primary truncate">
                  {product.name}
                </h3>
                <StarRating rating={product.rating} size={12} />
                <p className="text-accent font-sans text-sm font-medium">
                  ${product.price}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}