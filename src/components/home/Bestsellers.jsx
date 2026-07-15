import { Link } from "react-router-dom";
import { ShoppingBag, Star } from "lucide-react";
import { products } from "../../data/products";
import { useCart } from "../../context/CartContext";
import { useEffect, useRef } from "react";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";

const bestsellers = products.filter((p) => p.tags.includes("bestseller"));

export default function Bestsellers() {
  const { addItem } = useCart();
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section className="py-16 md:py-24" ref={containerRef}>
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <span className="text-xs tracking-widest uppercase text-velmora-gold">Curated for You</span>
          <h2 className="font-serif text-3xl md:text-4xl text-velmora-text mt-2 font-light">
            Bestsellers
          </h2>
          <div className="w-12 h-px bg-velmora-gold mx-auto mt-4" />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {bestsellers.map((product) => (
            <div key={product.id} className="group relative">
              <Link to={`/products/${product.id}`}>
                <div className="relative aspect-[3/4] bg-velmora-border/30 overflow-hidden">
                  <img
                    data-strk-img-id={`bs-${product.id}`}
                    data-strk-img={`[bs-title-${product.id}] [bs-section-title]`}
                    data-strk-img-ratio="3x4"
                    data-strk-img-width="600"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {/* Quick add overlay */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300 flex items-end justify-center pb-4 opacity-0 group-hover:opacity-100">
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        addItem({
                          id: product.id,
                          name: product.name,
                          price: product.price,
                          quantity: 1,
                          variant: "Gold",
                          image: product.images[0],
                        });
                      }}
                      className="bg-velmora-card text-velmora-text px-4 py-2 text-xs uppercase tracking-widest font-medium flex items-center gap-2 shadow-md hover:bg-velmora-gold transition-all"
                    >
                      <ShoppingBag className="w-3 h-3" />
                      Add to Cart
                    </button>
                  </div>
                </div>
              </Link>

              <div className="mt-3 text-center">
                <h3 id={`bs-title-${product.id}`} className="font-serif text-sm uppercase tracking-widest text-velmora-text">
                  {product.name}
                </h3>
                <div className="flex items-center justify-center gap-1 mt-1">
                  <Star className="w-3 h-3 fill-velmora-gold text-velmora-gold" />
                  <span className="text-xs text-velmora-muted">{product.rating}</span>
                </div>
                <p className="text-sm text-velmora-text mt-1 font-medium">${product.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}