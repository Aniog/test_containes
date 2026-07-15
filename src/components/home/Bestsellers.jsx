import { useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "@/context/CartContext";
import { ShoppingBag, Star } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { products } from "@/data/products";

export default function Bestsellers() {
  const [hoveredId, setHoveredId] = useState(null);
  const { addItem, openCart } = useCart();

  const bestsellers = products.filter((p) => p.isBestSeller);

  const handleAddToCart = (e, product) => {
    e.preventDefault();
    e.stopPropagation();
    addItem(product, product.variants[0], 1);
    openCart();
  };

  return (
    <section className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-[10px] tracking-[0.2em] uppercase text-gold-600 font-sans font-medium">
            Curated for You
          </p>
          <h2 className="mt-3 font-serif text-3xl md:text-4xl text-warm-900 font-light">
            Bestsellers
          </h2>
          <div className="w-12 h-px bg-gold-400 mx-auto mt-4" />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {bestsellers.map((product) => (
            <Link
              key={product.id}
              to={`/product/${product.id}`}
              className="group cursor-pointer"
              onMouseEnter={() => setHoveredId(product.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <div className="relative aspect-[3/4] bg-cream-200 overflow-hidden">
                <img
                  src={
                    hoveredId === product.id
                      ? product.imageHover
                      : product.image
                  }
                  alt={product.name}
                  className="w-full h-full object-cover transition-all duration-700 ease-out group-hover:scale-105"
                />
                {product.isNew && (
                  <Badge
                    variant="default"
                    className="absolute top-3 left-3"
                  >
                    New
                  </Badge>
                )}

                {/* Quick add overlay */}
                <button
                  onClick={(e) => handleAddToCart(e, product)}
                  className="absolute bottom-0 left-0 right-0 bg-warm-900/90 backdrop-blur-sm text-cream-100 py-3 px-4 flex items-center justify-center gap-2 translate-y-full group-hover:translate-y-0 transition-transform duration-300"
                >
                  <ShoppingBag className="w-3.5 h-3.5" />
                  <span className="text-[10px] tracking-wider uppercase font-sans font-medium">
                    Add to Cart
                  </span>
                </button>
              </div>

              <div className="mt-3 space-y-1">
                <h3 className="product-name text-warm-900 truncate">
                  {product.name}
                </h3>
                <div className="flex items-center gap-1">
                  <Star className="w-3 h-3 fill-gold-500 text-gold-500" />
                  <span className="text-[10px] text-warm-500 font-sans">
                    {product.rating} ({product.reviewCount})
                  </span>
                </div>
                <p className="text-sm font-sans font-medium text-warm-900">
                  ${product.price}
                </p>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            to="/shop"
            className="inline-block text-xs tracking-[0.15em] uppercase text-warm-800 border-b border-warm-400 pb-0.5 hover:text-gold-700 hover:border-gold-600 transition-colors font-sans font-medium"
          >
            View All Products
          </Link>
        </div>
      </div>
    </section>
  );
}