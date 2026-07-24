import { useState } from "react";
import { Link } from "react-router-dom";
import { ShoppingBag } from "lucide-react";
import { products } from "@/data/products";
import { useCart } from "@/context/CartContext";

export default function BestsellersGrid() {
  const { addItem } = useCart();
  const [hoveredId, setHoveredId] = useState(null);

  const bestsellers = products.filter((p) => p.tags.includes("bestseller"));

  return (
    <section className="py-16 sm:py-24 bg-cream">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-14">
          <p className="text-xs font-sans font-medium tracking-[0.2em] uppercase text-accent mb-3">
            Most Loved
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium tracking-wide">
            Bestsellers
          </h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {bestsellers.map((product) => (
            <div
              key={product.id}
              className="group relative"
              onMouseEnter={() => setHoveredId(product.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <Link to={`/product/${product.id}`} className="block">
                <div className="relative aspect-[3/4] overflow-hidden bg-surface">
                  <img
                    src={product.images[0]}
                    alt={product.name}
                    className={`w-full h-full object-cover transition-opacity duration-500 ${
                      hoveredId === product.id ? "opacity-0" : "opacity-100"
                    }`}
                  />
                  <img
                    src={product.images[1] || product.images[0]}
                    alt={product.name}
                    className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
                      hoveredId === product.id ? "opacity-100" : "opacity-0"
                    }`}
                  />

                  {/* Quick add */}
                  <div
                    className={`absolute bottom-0 left-0 right-0 p-3 sm:p-4 transition-transform duration-300 ${
                      hoveredId === product.id
                        ? "translate-y-0"
                        : "translate-y-full"
                    }`}
                  >
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        addItem(product, 1, "gold");
                      }}
                      className="w-full bg-ink/90 backdrop-blur-sm text-cream py-2.5 sm:py-3 text-[11px] sm:text-xs font-sans font-medium tracking-[0.15em] uppercase flex items-center justify-center gap-2 hover:bg-ink transition-colors"
                    >
                      <ShoppingBag className="w-3.5 h-3.5" />
                      Add to Cart
                    </button>
                  </div>
                </div>

                <div className="mt-3 sm:mt-4 text-center">
                  <h3 className="font-sans text-xs sm:text-sm font-medium uppercase tracking-[0.15em] text-ink">
                    {product.name}
                  </h3>
                  <p className="mt-1 font-sans text-sm text-warm-gray">
                    ${product.price}
                  </p>
                </div>
              </Link>
            </div>
          ))}
        </div>

        <div className="mt-10 sm:mt-14 text-center">
          <Link
            to="/shop"
            className="inline-block border border-ink text-ink px-8 py-3 text-xs font-sans font-medium tracking-[0.2em] uppercase hover:bg-ink hover:text-cream transition-colors"
          >
            View All
          </Link>
        </div>
      </div>
    </section>
  );
}
