import { useState } from "react";
import { Link } from "react-router-dom";
import { ShoppingBag, Star } from "lucide-react";
import { products } from "../../data/products";
import { useCart } from "../../context/CartContext";

export default function Bestsellers() {
  const { addItem } = useCart();
  const [hoveredId, setHoveredId] = useState(null);

  return (
    <section className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground">
            Bestsellers
          </h2>
          <div className="w-12 h-[1px] bg-gold mx-auto mt-4 mb-4" />
          <p className="text-muted text-sm md:text-base max-w-md mx-auto">
            The pieces our customers reach for most
          </p>
        </div>

        {/* Product grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="group relative"
              onMouseEnter={() => setHoveredId(product.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <Link to={`/product/${product.id}`} className="block">
                <div className="relative aspect-[3/4] overflow-hidden bg-surface rounded-sm">
                  <img
                    src={product.images[0]}
                    alt={product.name}
                    className="w-full h-full object-cover transition-opacity duration-500 group-hover:opacity-0"
                  />
                  {product.images[1] && (
                    <img
                      src={product.images[1]}
                      alt={`${product.name} alternate view`}
                      className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    />
                  )}
                </div>
              </Link>

              {/* Quick add button */}
              <button
                onClick={() => addItem(product, "gold", 1)}
                className="absolute bottom-3 left-3 right-3 bg-foreground/90 backdrop-blur-sm text-ivory text-xs tracking-widest uppercase py-2.5 rounded-sm opacity-0 group-hover:opacity-100 translate-y-1 group-hover:translate-y-0 transition-all duration-300 flex items-center justify-center gap-2"
              >
                <ShoppingBag className="w-3.5 h-3.5" />
                Quick Add
              </button>

              {/* Product info */}
              <div className="mt-3">
                <h3 className="font-serif text-sm font-medium text-foreground truncate">
                  <Link to={`/product/${product.id}`} className="hover:text-gold transition-colors">
                    {product.name}
                  </Link>
                </h3>
                <div className="flex items-center gap-1 mt-0.5">
                  <Star className="w-3 h-3 text-gold fill-gold" />
                  <span className="text-xs text-muted">{product.rating}</span>
                </div>
                <p className="text-sm font-medium text-foreground mt-1">
                  ${product.price}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* View all */}
        <div className="text-center mt-12">
          <Link
            to="/collections/all"
            className="inline-flex items-center justify-center border border-gold text-gold px-8 py-3 text-sm tracking-widest uppercase rounded-sm hover:bg-gold hover:text-white transition-all duration-300"
          >
            View All Products
          </Link>
        </div>
      </div>
    </section>
  );
}