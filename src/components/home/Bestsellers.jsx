import { useState } from "react";
import { Link } from "react-router-dom";
import { ShoppingBag, Eye } from "lucide-react";
import { products } from "@/data/products";
import { useCart } from "@/context/CartContext";
import StarRating from "@/components/ui/StarRating";

export default function Bestsellers() {
  const { addToCart } = useCart();
  const [hoveredId, setHoveredId] = useState(null);

  return (
    <section className="py-16 md:py-24 bg-[#F5F0EB]">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <div className="text-center mb-10 md:mb-14">
          <p className="text-[10px] tracking-[0.3em] uppercase text-[#6E6862] mb-3">
            Curated For You
          </p>
          <h2 className="font-serif text-3xl md:text-4xl font-light tracking-wide">
            Bestsellers
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="group relative"
              onMouseEnter={() => setHoveredId(product.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <Link to={`/product/${product.id}`} className="block">
                <div className="relative aspect-[3/4] bg-[#EAE5E0] rounded overflow-hidden mb-3">
                  {product.badge && (
                    <span className="absolute top-2 left-2 z-10 bg-[#1A1816] text-white text-[10px] tracking-[0.12em] uppercase px-2 py-1 rounded">
                      {product.badge}
                    </span>
                  )}
                  <img
                    src={`https://images.unsplash.com/photo-${
                      product.id === 1
                        ? "1535632066927-ab7c9ab60908"
                        : product.id === 2
                        ? "1599643478518-17477f983af0"
                        : product.id === 3
                        ? "1635767798638-3e2523c0188b"
                        : product.id === 4
                        ? "1611591437281-46057d3fe0e9"
                        : "1602173574767-37ac01994b2a"
                    }?w=600&q=80`}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div
                    className={`absolute inset-0 bg-black/10 transition-opacity duration-300 ${
                      hoveredId === product.id ? "opacity-100" : "opacity-0"
                    }`}
                  />
                </div>
                <div className="space-y-1">
                  <div className="flex items-center justify-between">
                    <StarRating rating={product.rating} size={12} />
                    <span className="text-[10px] text-[#6E6862]">
                      ({product.reviews})
                    </span>
                  </div>
                  <h3 className="font-serif text-sm md:text-[15px] tracking-[0.06em] uppercase leading-tight">
                    {product.name}
                  </h3>
                  <p className="text-xs text-[#6E6862] truncate">{product.subtitle}</p>
                  <p className="text-sm font-medium">${product.price}</p>
                </div>
              </Link>

              <button
                onClick={(e) => {
                  e.stopPropagation();
                  e.preventDefault();
                  addToCart(product, "gold", 1);
                }}
                className={`absolute bottom-[72px] md:bottom-[80px] right-3 z-30 bg-white text-[#1A1816] p-2.5 rounded-full shadow-md transition-all duration-300 hover:bg-[#1A1816] hover:text-white ${
                  hoveredId === product.id
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-2 pointer-events-none"
                }`}
                aria-label="Add to cart"
              >
                <ShoppingBag size={16} strokeWidth={1.5} />
              </button>
            </div>
          ))}
        </div>

        <div className="text-center mt-10 md:mt-14">
          <Link
            to="/shop"
            className="inline-block border border-[#1A1816]/20 text-[#1A1816] text-xs tracking-[0.14em] uppercase font-medium px-8 py-3 rounded hover:bg-[#1A1816] hover:text-white transition-colors duration-300"
          >
            View All
          </Link>
        </div>
      </div>
    </section>
  );
}
